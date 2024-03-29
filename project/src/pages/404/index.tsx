import React, { useState, useEffect, useMemo, useRef } from "react";
import Taro, {
  useDidShow,
  useDidHide,
  useRouter,
  usePullIntercept,
  usePullDownRefresh,
  useReachBottom,
  usePageScroll,
  useShareAppMessage,
  useShareTimeline,
} from "@tarojs/taro";
import comInstance from "./comModules";
import comDefs from "./comDefs";
// import { View } from "@tarojs/components";
import { getGlobalData } from "./../../utils";

import injectConfig from "./mybricks/page-config";
import "./style.less";

const app = getGlobalData();

// class polyfillIORefs {
//   ref = {
//     inputs: {},
//     outputs: {},
//   };

//   constructor() {
//     this.ref.inputs.onPageShow = () => {
//       this.callbacks.push(() => this.ref.inputs?.onPageShow?.());
//     };
//   }

//   callbacks = [];

//   setRef = (ref) => {
//     this.ref = ref;
//   };

//   call = () => {
//     if (Array.isArray(this.callbacks) && this.callbacks.length) {
//       this.callbacks.forEach((func) => {
//         func?.();
//       });
//     }
//   };

//   destroy = () => {
//     this.callbacks = [];
//   };
// }

const shareConfig = {
  message: null,
  timeline: null,
};

const setShareConfig = (type: "app" | "message", value) => {
  shareConfig[type] = value;
};

export default () => {
  const [isReady, setIsReady] = useState(false);
  const [router] = useState(Taro.getCurrentInstance().router);

  // const [ready, setIsReady] = useState(false);
  // const ioRefs = useRef(new polyfillIORefs());
  const ioRefs = useRef({ ref: {} });

  // const router = useRouter();

  // useEffect(() => {
  //   app.mybricks.ready.then(() => {
  //     setIsReady(true);
  //   });
  // }, []);

  /**
   * 页面「重新」显示
   * 避免在页面初始化打开时，同时触发 页面打开 和 页面显示 两个生命周期
   * 并且在回调中，额外补充页面参数
   */
  useDidShow(() => {
    if (!isReady) {
      return;
    }

    ioRefs.current.ref?.inputs?.onShow?.();

    Taro.eventCenter.trigger("pageDidShow", {
      path: router.path || "",
      query: router.params || {},
    });
  });

  useDidHide(() => {
    ioRefs.current.ref?.inputs?.onHide?.();

    Taro.eventCenter.trigger("pageDidHide", {
      path: router.path || "",
      query: router.params || {},
    });
  });

  // usePullDownRefresh(() => {
  //   ioRefs.current.ref?.inputs?.onPullDownRefresh?.();
  // });

  // usePullIntercept(() => {
  //   ioRefs.current.ref?.inputs?.onPullIntercept?.();
  // });

  // useReachBottom(() => {
  //   ioRefs.current.ref?.inputs?.onReachBottom?.();
  // });

  // usePageScroll((e) => {
  //   ioRefs.current.ref?.inputs?.onPageScroll?.(e);
  // });

  useShareAppMessage(() => {
    if (shareConfig.message) {
      return shareConfig.message;
    }
  });

  useShareTimeline(() => {
    if (shareConfig.timeline) {
      return shareConfig.timeline;
    }
  });

  // if (!ready) {
  //   return null;
  // }

  // const json = app.mybricks.pageJsonMap[router.path.slice(1).split('?')?.[0]];

  let jsx = app.h.render(injectConfig.toJson, {
    comDefs: comDefs,
    comInstance: comInstance,
    // scenesOperate: {
    //   /** 页面跳转 */
    //   open(props) {
    //     // TODO
    //     Taro.navigateTo({
    //       url: `/pages/${props.frameId}/index?params=${JSON.stringify(props.todo.value)}`,
    //       fail() {
    //         // 跳转失败的时候，使用 switchTab 重试
    //         Taro.switchTab({
    //           url: `/pages/${props.frameId}/index?params=${JSON.stringify(props.todo.value)}`
    //         });
    //       }
    //     });
    //   }
    // },
    ref: (refs) => {
      ioRefs.current.ref = refs;
      // ioRefs.current.setRef(refs);
      // ioRefs.current.call();
      /** ref注册后，主动触发输入 */
      // TODO
      try {
        let value = Taro.getCurrentInstance()?.router?.params || {};
        console.warn("open before", value);

        if (value.params) {
          try {
            let params = decodeURIComponent(value.params);
            let rule =
              typeof params === "string" &&
              params.indexOf("{") === 0 &&
              params.indexOf("}") === params.length - 1;
            if (rule) {
              value = JSON.parse(params);
            } else {
            }
          } catch (e) {}
        }

        console.warn("open after", value);
        refs.inputs["open"]?.(value);
      } catch (e) {
        console.error("open", e);
        refs.inputs["open"]?.({});
      }

      setIsReady(true);
    },
    setShareConfig,
  });

  return jsx;
};
