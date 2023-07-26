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