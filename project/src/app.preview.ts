import Taro from "@tarojs/taro";
import { Component } from "react";
import * as React from 'react';
import { render } from "./app/render-taro"
import './app/render-taro/index.css'
import { call as callConnectorHttp } from "./app/utils/callConnectorHttp-ktaro";
import './app/utils/pxToRpx';
import { Interpreter } from "mybricks-utils-mp-render/lib";
import { getGlobalData } from './utils'
import injectConfig from './mybricks/root-config'

import "./app.less";

const app = getGlobalData();

app.h = app.h || {};

const genCallConnector = (status, comModules) => (connector, params) => {
  if (connector.type === 'http') {
    //服务接口类型
    return callConnectorHttp(comModules[connector.id], params)
  } else if (connector.type === 'http-sql') {
    return callConnectorHttp(comModules[connector.id], params, {
      before(options) {
        let newOptions = { ...options }

        // 已登录用户，自动在 params 中加入 userId
        newOptions.data = newOptions.data || {};
        newOptions.data.params = newOptions.data.params || {};
        let userInfo = Taro.getStorageSync('userInfo');
        if (userInfo && userInfo.id) {
          newOptions.data.params.loginUserId = userInfo.id;
        } else {
          newOptions.data.params.loginUserId = 0;
        }
        /////////////////////////////////

        const isInProject = !!status?.projectId;
        if (isInProject) {
          Object.assign(newOptions.data, {
            projectId: status?.projectId
          })
          return {
            ...newOptions,
            url: `${status?.callServiceHost}/runtime/api/domain/service/run`
          }
        }
        return {
          ...newOptions,
          url: `${status?.callServiceHost}/api/system/domain/run`
        }
      }
    })
  } else {
    return Promise.reject('错误的连接器类型.')
  }
}

//
app.h.render = (toJson, { comDefs, comModules, ref, scenesOperate }) => {
  const _comModules = app.mybricks.allComModules ?? comModules
  const _comDefs = {
    ...comDefs,
    ...app.mybricks.allComDefs,
  }
  return render(toJson, {
    env: {
      callConnector: genCallConnector(app.mybricks.status, _comModules),
      fileUploader(file) {
        return new Promise((resolve, reject) => {
          Taro.uploadFile({
            url: `${toJson?.configuration?.serviceDomain}/paas/api/oss/uploadFile`,
            filePath: file.path,
            name: "file",
            formData: {
              folderPath: `/imgs/${Date.now()}`,
            },
            success: (res) => {
              let data = JSON.parse(res.data);
              resolve(data?.data?.url);
            },
          });
        });
      },
      canvas: {
        id: toJson?.id,
        open(sceneId, params, action) {
          console.warn("canvas open", arguments);

          const { routeMap = {} } = injectConfig ?? {}
          const pagePath = routeMap?.[sceneId] ?? `/pages/${sceneId}/index`;

          const goto = (type: 'navigateTo' | 'redirectTo', url) => {
            const goRoute = type === 'navigateTo' ? Taro.navigateTo : Taro.redirectTo
            goRoute({
              url,
              fail() {
                // 跳转失败的时候，使用 switchTab 重试
                Taro.switchTab({
                  url
                });
              }
            });
          }

          let query = {};
          // 只有 params 是 {} 的时候才会进行转换
          if (typeof params === 'object' && params !== null && !Array.isArray(params)) {
            query = {
              ...params,
            };
          }

          let pagePathWithQuery = pagePath;
          if (Object.keys(query).length > 0) {
            pagePathWithQuery = `${pagePath}?${Object.keys(query).map(key => `${key}=${encodeURIComponent(query[key])}`).join('&')}`
          }

          switch (action) {
            case "blank":
              goto('navigateTo', pagePathWithQuery)
              break;

            case "redirect":
              goto('redirectTo', pagePathWithQuery)
              break;

            default:
              goto('navigateTo', pagePathWithQuery)
              break;
          }
        },
      },
      renderCom(json, opts) {
        return new Promise((resolve) => {
          resolve(
            render(
              json,
              {
                ...(opts || {}),
                env: {
                  ...(opts?.env || {}),
                  edit: false,
                  runtime: true,
                  events: [],
                  comDefs: _comDefs,
                  comInstance: _comModules,
                },
                events: [],
                comDefs: _comDefs,
                comInstance: _comModules,
              }
            ),
          );
        });
      },
    },
    events: [],
    comDefs: _comDefs,
    comInstance: _comModules,
    scenesOperate,
    ref
  });
};

app.mybricks = app.mybricks || {}

const init = () => new Promise((resolve) => {
  Taro.request({
    url: 'TEMPLATE:CONFIGURL',
    method: 'GET'
  }).then((res: any) => {
    if (res.statusCode >= 200 && res.statusCode <= 299) {
      app.mybricks.pageJsonMap = {}
      if (Array.isArray(res.data?.data.pages)) {
        res.data?.data.pages.forEach(page => {
          /** 找到每个页面的json */
          app.mybricks.pageJsonMap[page.pagePath] = page.pageToJson

          /** 生成每个页面的js计算 */
          // getComModules(page.json, app.mybricks.allComModules)
        })
      }

      /** JS计算、连接器等逻辑 */
      if (res.data?.data?.allModules) {
        app.mybricks.allComModules = {}
        const interpreter = new Interpreter({ comModules: app.mybricks.allComModules, console });
        interpreter.evaluate(decodeURIComponent(res.data?.data?.allModules));
        console.log('app.mybricks.allComModules', app.mybricks.allComModules);
      }
      if (res.data?.data?.allExtraModules) {
        if (!app.mybricks?.allComModules) {
          app.mybricks.allComModules = {}
        }
        const interpreter = new Interpreter({ comModules: app.mybricks.allComModules, console });
        interpreter.evaluate(decodeURIComponent(res.data?.data?.allExtraModules));
        console.log('app.mybricks.allComModules', app.mybricks.allComModules);
      }
      /** 云组件 */
      if (res.data?.data?.allComDefs) {
        app.mybricks.allComDefs = {};
        const interpreter = new Interpreter({ comDefs: app.mybricks.allComDefs, console, self: { fangzhouComDef: {}, React } });
        interpreter.evaluate(decodeURIComponent(res.data?.data?.allComDefs));
        console.log('app.mybricks.allComDefs', app.mybricks.allComDefs)
      }

      /** 其他配置 */
      if (res.data?.data?.status) {
        app.mybricks.status = res.data?.data?.status;
        console.log('app.mybricks.status', app.mybricks.status)
      } else {
        app.mybricks.status = {};
      }
      resolve(true)
    }
  })
})
app.mybricks.ready = init();

class App extends Component<any> {
  onLoad() {

  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  onLaunch(...args) {
    console.log("onLaunch", ...args);
  }

  componentDidShow(...args) {
    console.log("componentDidShow", ...args);
  }

  componentDidHide(...args) {
    console.log("componentDidHide", ...args);
  }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
