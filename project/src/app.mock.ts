import Taro from "@tarojs/taro";
import { Component } from "react";
import { render } from "./app/render-taro"
import { call as callConnectorHttp } from "./app/utils/callConnectorHttp-ktaro";
import './app/utils/pxToRpx';
import { getGlobalData } from './utils'
import Mock from './mock'
import injectConfig from './mybricks/root-config'

import "./app.less";

const app = getGlobalData();

app.h = app.h || {};

const genCallConnector = (status, comInstance) => (connector, params) => {
  if (connector.type === 'http') {
    //服务接口类型
    return callConnectorHttp(comInstance[connector.id], params)
  } else if (connector.type === 'http-sql') {
    return callConnectorHttp(comInstance[connector.id], params, {
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
        const isTestEnvApi = status?.apiEnv === 'test';
        if (isInProject) {
          Object.assign(newOptions.data, {
            projectId: status?.projectId
          })
        }
        return {
          ...newOptions,
          url: isTestEnvApi
            ? `${status?.callServiceHost}/api/system/domain/run`
            : `${status?.callServiceHost}/runtime/api/domain/service/run`
        }
      }
    })
  } else {
    return Promise.reject('错误的连接器类型.')
  }
}

//
app.h.render = (toJson, { comDefs, comInstance, ref, scenesOperate }) => {
  const _comModules = typeof app.mybricks?.allComModules === 'object' ? app.mybricks?.allComModules : comInstance
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
                  comDefs: comDefs,
                  comInstance: _comModules,
                },
                events: [],
                comDefs: comDefs,
                comInstance: _comModules,
                // callConnector: genCallConnector(toJson, _comModules),
              }
            ),
          );
        });
      },
    },
    events: [],
    comDefs: comDefs,
    comInstance: _comModules,
    scenesOperate,
    ref,
  });
};

app.mybricks = app.mybricks || {};

app.mybricks.allComModules = 'TEMPLATE:COMMODULES';

app.mybricks.allComModules = Mock.allModules

let allModules = decodeURIComponent(Mock.allModules)
allModules = `
  (function(comModules) {
    ${allModules};
    console.log('allComModules', comModules)
    return comModules;
  })({});
`;

app.mybricks.allComModules = eval(allModules)

// const mybricksConfig = 'TEMPLATE:CONFIGJSON';
const mybricksConfig = Mock;


app.mybricks.status = 'TEMPLATE:STATUS';
app.mybricks.status = Mock.status

const init = () => new Promise((resolve) => {
  app.mybricks.pageJsonMap = {}
  if (Array.isArray(mybricksConfig?.pages)) {
    mybricksConfig?.pages.forEach(page => {
      app.mybricks.pageJsonMap[page.pagePath] = page.pageToJson
    })
  }
  resolve(true)
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
