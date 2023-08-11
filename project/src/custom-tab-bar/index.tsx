import React, { useCallback, useMemo } from 'react';
import * as Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import cx from "classnames";
import "./style.less";

import tabBarJson from './mybricks/tabbar-config';

export default () => {

  const switchTab = useCallback((url) => {
    Taro.switchTab({ url: `/${url}` })
  }, []);

  const $tabBars = useMemo(() => {

    let pages = Taro.getCurrentPages();
    let currentRoute = pages[pages.length - 1].route;

    let _tabBarJson = Array.isArray(tabBarJson) ? tabBarJson : [];

    return _tabBarJson.map((raw, index) => {
      let pagePath = raw.pagePath;

      let isSelected = pagePath === currentRoute;

      let icon = isSelected ? raw.selectedIconPath : raw.normalIconPath;

      let iconStyle = isSelected ? raw.selectedIconStyle : raw.normalIconStyle;
      let textStyle = isSelected ? raw.selectedTextStyle : raw.normalTextStyle;

      let iconSlotCx = cx({
        ["iconSlot"]: true,
        ["iconSlotCenter"]: !raw.text
      });

      return (
        <View className={"item"} onClick={() => { switchTab(raw.pagePath); }}>

          <View className={iconSlotCx}>
            <Image className={"icon"} style={{ ...iconStyle }} src={icon}></Image>
          </View>

          <View className={"textSlot"}>
            <View className={"text"} style={{ ...textStyle }}>{raw.text}</View>
          </View>
        </View>
      )
    });

  }, [tabBarJson]);

  return (
    <View className={"tabBar"}>
      <View className={"items"}>
        {$tabBars}
      </View>
      <View className={"safearea"}></View>
    </View>
  )
}