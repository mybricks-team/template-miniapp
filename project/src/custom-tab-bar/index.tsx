import React, { useCallback, useMemo } from 'react';
import Taro from '@tarojs/taro'
import { CoverView, CoverImage, View, Image } from '@tarojs/components'
import "./style.less";
import cx from "classnames";

import tabBarJson from "./tabBar.json";

export default () => {

  const switchTab = useCallback((index, url) => {
    Taro.switchTab({ url: `/${url}` })
  }, []);

  const $tabBars = useMemo(() => {

    let pages = Taro.getCurrentPages();
    let currentRoute = pages[pages.length - 1].route;

    return tabBarJson.map((raw, index) => {
      let pagePath = raw.fileToJson.pageConfig.pagePath;

      let isSelected = pagePath === currentRoute;

      let itemCx = cx({
        "item": true,
        "selected": true
      });

      let icon = isSelected ? raw.selectedIconPath : raw.normalIconPath;

      let iconStyle = isSelected ? raw.selectedIconStyle : raw.normalIconStyle;
      let textStyle = isSelected ? raw.selectedTextStyle : raw.normalTextStyle;

      return (
        <View className={itemCx} onClick={() => { switchTab(index, raw.fileToJson.pageConfig.pagePath); } }>
          <Image className={"icon"} style={{ ...iconStyle }} src={icon}></Image>
          <View className={"text"} style={{ ...textStyle }}>{raw.text}</View>
        </View>
      )
    });

  }, [tabBarJson]);


  return (<View className={"tabBar"}>{$tabBars}</View>)
  // export default class Index extends Component {
  // state = {
  //   selected: 0,
  //   color: '#000000',
  //   selectedColor: '#DC143C',
  //   list: [
  //     {
  //       pagePath: '/pages/index/index',
  //       selectedIconPath: '../images/tabbar_home_on.png',
  //       iconPath: '../images/tabbar_home.png',
  //       text: '首页'
  //     },
  //     {
  //       pagePath: '/pages/cate/index',
  //       selectedIconPath: '../images/tabbar_cate_on.png',
  //       iconPath: '../images/tabbar_cate.png',
  //       text: '分类'
  //     },
  //     {
  //       pagePath: '/pages/cart/index',
  //       selectedIconPath: '../images/tabbar_cart_on.png',
  //       iconPath: '../images/tabbar_cart.png',
  //       text: '购物车'
  //     },
  //     {
  //       pagePath: '/pages/my/index',
  //       selectedIconPath: '../images/tabbar_my_on.png',
  //       iconPath: '../images/tabbar_my.png',
  //       text: '个人中心'
  //     }
  //   ]
  // }



  // setSelected (idx: number) {
  //   this.setState({
  //     selected: idx
  //   })
  // }

  // render() {
  //   const { list, selected, color, selectedColor } = this.state

  //   return (
  //     <CoverView className='tab-bar'>
  //       <CoverView className='tab-bar-border'></CoverView>
  //       {list.map((item, index) => {
  //         return (
  //           <CoverView key={index} className='tab-bar-item' onClick={this.switchTab.bind(this, index, item.pagePath)}>
  //             <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} />
  //             <CoverView style={{ color: selected === index ? selectedColor : color }}>{item.text}</CoverView>
  //           </CoverView>
  //         )
  //       })}
  //     </CoverView>
  //   )
  // }
}