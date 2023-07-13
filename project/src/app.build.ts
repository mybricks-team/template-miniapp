import Taro from "@tarojs/taro";
import { Component } from "react";
import { render } from "./app/render-taro"
import './app/render-taro/index.css'
import { call as callConnectorHttp } from "./app/utils/callConnectorHttp-ktaro";
import './app/utils/pxToRpx';

import "./app.less";

const app = Taro.getApp({
  allowDefault: true,
});

app.h = app.h || {};

const genCallConnector = (status, comInstance) => (connector, params) => {
  if (connector.type === 'http') {
    //服务接口类型
    return callConnectorHttp({ script: comInstance[connector.id] }, params)
  } else if (connector.type === 'http-sql') {
    return callConnectorHttp({ script: comInstance[connector.id] }, params, {
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
          url: isTestEnvApi ? `${status?.callServiceHost}/api/system/domain/run` : `${status?.callServiceHost}/runtime/api/domain/service/run`
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
      // callConnector: genCallConnector(toJson, _comModules),
      callConnector: genCallConnector(app.mybricks.status, _comModules),
      fileUploader(file) {
        return new Promise((resolve, reject) => {
          Taro.uploadFile({
            url: `${toJson?.configuration?.serviceDomain}/paas/api/flow/saveFile`,
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
      openScene(sceneId, params, action) {
        console.warn("openScene", arguments);
        
        switch (action) {
          case "blank":
            Taro.navigateTo({
              url: `/pages/${sceneId}/index?params=${JSON.stringify(params)}`,
              fail() {
                // 跳转失败的时候，使用 switchTab 重试
                Taro.switchTab({
                  url: `/pages/${sceneId}/index?params=${JSON.stringify(params)}`
                });
              }
            });
            break;

          case "redirect":
            Taro.redirectTo({
              url: `/pages/${sceneId}/index?params=${JSON.stringify(params)}`,
              fail() {
                // 跳转失败的时候，使用 switchTab 重试
                Taro.switchTab({
                  url: `/pages/${sceneId}/index?params=${JSON.stringify(params)}`
                });
              }
            });
            break;

          default:
            Taro.navigateTo({
              url: `/pages/${sceneId}/index?params=${JSON.stringify(params)}`,
              fail() {
                // 跳转失败的时候，使用 switchTab 重试
                Taro.switchTab({
                  url: `/pages/${sceneId}/index?params=${JSON.stringify(params)}`
                });
              }
            });
            break;

        }

        
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

const mybricksConfig = 'TEMPLATE:CONFIGJSON';

app.mybricks.status = 'TEMPLATE:STATUS';

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
