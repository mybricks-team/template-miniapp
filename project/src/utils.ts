import Taro from "@tarojs/taro";

/** Web端直接用window代替，因为一开始app初始化之前拿不到 */
export const getGlobalData = (): any => {
  if (window) {
    if (!window.__render_bricks__) {
      window.__render_bricks__ = {}
    }
    return window.__render_bricks__
  }
  return Taro.getApp({
    allowDefault: true,
  });
}