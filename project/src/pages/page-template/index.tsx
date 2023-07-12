import React, { useState, useEffect, useMemo, useRef } from "react";
import Taro, { useDidShow, useDidHide, useRouter } from "@tarojs/taro";
import comInstance from "./comModules";
import comDefs from "./comDefs";
import { View } from "@tarojs/components";
import "./style.less";

const app = Taro.getApp();

class polyfillIORefs {
  ref = {
    inputs: {},
  };

  constructor() {
    this.ref.inputs.onPageShow = () => {
      this.callbacks.push(() => this.ref.inputs?.onPageShow?.());
    };
  }

  callbacks = [];

  setRef = (ref) => {
    this.ref = ref;
  };

  call = () => {
    if (Array.isArray(this.callbacks) && this.callbacks.length) {
      this.callbacks.forEach((func) => {
        func?.();
      });
    }
  };

  destroy = () => {
    this.callbacks = [];
  };
}

export default () => {
  const [ready, setIsReady] = useState(false);
  const ioRefs = useRef(new polyfillIORefs());

  const router = useRouter();

  useEffect(() => {
    app.mybricks.ready.then(() => {
      setIsReady(true);
    });
  }, []);

  useDidShow(() => {
    ioRefs.current.ref?.inputs?.onPageShow?.();
  });

  useDidHide(() => {
    ioRefs.current.ref?.inputs?.onPageHide?.();
  });

  if (!ready) {
    return null;
  }

  const json = app.mybricks.pageJsonMap[router.path.slice(1)];
  let jsx = app.h.render(json, {
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
      ioRefs.current.setRef(refs);
      ioRefs.current.call();
      /** ref注册后，主动触发输入 */
      // TODO
      try {
        const value = Taro.getCurrentInstance()?.router?.params;
        refs.inputs['open']?.(JSON.parse(value.params) || {});
        console.warn("open", value);
      } catch (e) {
        console.error("open", e);
      }
    },
  });

  return <View className="page">{jsx}</View>;
};
