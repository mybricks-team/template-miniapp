import Taro from "@tarojs/taro";
// @ts-ignore
const isH5 = Taro.getEnv() === Taro.ENV_TYPE.WEB || Taro.getEnv() === 'Unknown';

/** Web端直接用window代替，因为一开始app初始化之前拿不到 */
export const getGlobalData = (): any => {
  if (isH5) {
    if (!window.__render_bricks__) {
      window.__render_bricks__ = {}
    }
    return window.__render_bricks__
  }
  return Taro.getApp({
    allowDefault: true,
  });
}


/**
 * @todo 没测试过，先测试下再加到app.onlaunch里
 * @description 检查是否有更新并强制更新脚本，建议只在有必要的时候构建开启，否则每次都强制更新体验不好
 * @param checkAndUpdate 是否提示更新，false则不会提示更新，也不会重启
 * @param showConfirm 后台下载好更新包时是否提示重启，还是直接自动重启更新
 */
export const checkUpdateVersionAndApply = ({ checkAndUpdate = false, showConfirm = true }) => {
  if (!checkAndUpdate) { // 不自动更新
    return
  }

  //判断微信版本是否 兼容小程序更新机制API的使用
  if (Taro.canIUse('getUpdateManager')) {
    const updateManager = Taro.getUpdateManager();
    //检测版本更新
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      if (res.hasUpdate) {
        //新版本已经下载好
        updateManager.onUpdateReady(function () {
          if (showConfirm) {
            // 询问更新
            Taro.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success: function (res) {
                if (res.confirm) {
                  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                  updateManager.applyUpdate()
                }
              }
            })
          } else {
            // 自动更新
            updateManager.applyUpdate();
          }

        })
        updateManager.onUpdateFailed(function () {
          // 新版本下载失败
          Taro.showModal({
            title: '已经有新版本喽~',
            content: '请您删除当前小程序，到微信 “发现-小程序” 页，重新搜索打开哦~',
          })
        })
      }
    })
  } else {
    //TODO 此时微信版本太低（一般而言版本都是支持的）
    // Taro.showModal({
    //   title: '溫馨提示',
    //   content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
    // })
  }
}