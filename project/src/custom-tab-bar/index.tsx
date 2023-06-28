import React, { useCallback, useMemo } from 'react';
import Taro from '@tarojs/taro'
import { CoverView, CoverImage, View, Image } from '@tarojs/components'
import "./style.less";
import cx from "classnames";

let tabBarJson = 'TEMPLATE:TABBARLIST';

export default () => {

  const switchTab = useCallback((index, url) => {
    Taro.switchTab({ url: `/${url}` })
  }, []);

  const $tabBars = useMemo(() => {

    let pages = Taro.getCurrentPages();
    let currentRoute = pages[pages.length - 1].route;

    return tabBarJson.map((raw, index) => {
      let pagePath = raw.pagePath;

      let isSelected = pagePath === currentRoute;

      let itemCx = cx({
        "item": true,
        "selected": true
      });

      let icon = isSelected ? raw.selectedIconPath : raw.normalIconPath;

      let iconStyle = isSelected ? raw.selectedIconStyle : raw.normalIconStyle;
      let textStyle = isSelected ? raw.selectedTextStyle : raw.normalTextStyle;

      return (
        <View className={itemCx} onClick={() => { switchTab(index, raw.pagePath); } }>
          <Image className={"icon"} style={{ ...iconStyle }} src={icon}></Image>
          <View className={"text"} style={{ ...textStyle }}>{raw.text}</View>
        </View>
      )
    });

  }, [tabBarJson]);


  return (<View className={"tabBar"}>{$tabBars}</View>)
}