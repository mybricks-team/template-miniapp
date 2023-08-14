import React, { useCallback, useMemo, useState, useEffect } from 'react'
import * as Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import cx from 'classnames'
import './style.less'

import tabBarJson from './mybricks/tabbar-config'
import { tabbarIns } from './../app/utils/tabbar'

tabbarIns.initWithLength(tabBarJson.length)

export default () => {
  const [configList, setConfigList] = useState(tabbarIns.list)

  const switchTab = useCallback((url) => {
    Taro.switchTab({ url: `/${url}` })
  }, [])

  useEffect(() => {
    tabbarIns.eventEmitter.addEventListner('change', list => {
      setConfigList(list.map(t => t))
    })
  }, [])

  const tabList = useMemo(() => {
    return tabBarJson.map((item, index) => {
      const config = configList?.[index] ?? {}
      return {
        ...item,
        ...config,
      }
    })
  }, [tabBarJson, configList])

  // 故意的只渲染一次，只在加载的时候渲染，符合预期
  const currentRoute = useMemo(() => {
    let pages = Taro.getCurrentPages()
    return pages[pages.length - 1].route
  }, [])

  const $tabBars = useMemo(() => {
    return tabList.map((raw, index) => {
      let pagePath = raw.pagePath

      let isSelected = pagePath === currentRoute

      let icon = isSelected ? raw.selectedIconPath : raw.normalIconPath

      let iconStyle = isSelected ? raw.selectedIconStyle : raw.normalIconStyle
      let textStyle = isSelected ? raw.selectedTextStyle : raw.normalTextStyle

      let iconSlotCx = cx({
        ['iconSlot']: true,
        ['iconSlotCenter']: !raw.text,
      })

      let formatText = ''
      if (raw.active) {
        switch (true) {
          case typeof parseFloat(raw?.activeText) === 'number':
            if (raw?.activeText > 0 && raw?.activeText < 100) {
              formatText = raw?.activeText
            } else if (raw?.activeText > 100) {
              formatText = '99+'
            }
            break
          case typeof raw.activeText === 'string': {
            formatText =
              raw?.activeText.length > 3
                ? `${raw?.activeText.slice(0, 2)}...`
                : raw?.activeText
            break
          }
        }
      }
      return (
        <View
          className={'item'}
          key={index}
          onClick={() => {
            switchTab(raw.pagePath)
          }}
        >
          <View className={iconSlotCx}>
            <Image
              className={'icon'}
              style={{ ...iconStyle }}
              src={icon}
            ></Image>
            {raw.active && (
              <View className={`badge ${!formatText ? 'small' : 'normal'}`}>
                {formatText}
              </View>
            )}
          </View>

          <View className={'textSlot'}>
            <View className={'text'} style={{ ...textStyle }}>
              {raw.text}
            </View>
          </View>
        </View>
      )
    })
  }, [tabList, currentRoute])

  return (
    <View className={'tabBar'}>
      <View className={'items'}>{$tabBars}</View>
      <View className={'safearea'}></View>
    </View>
  )
}