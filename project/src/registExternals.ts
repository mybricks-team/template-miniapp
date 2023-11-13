import Taro from "@tarojs/taro";
import * as TaroComponents from '@tarojs/components';
import * as BrickMobile from 'brickd-mobile/lib/index.min';
import 'brickd-mobile/lib/index.css';
import React from 'react';
import RecatDom from 'react-dom';

const appInstance = getApp({ allowDefault: true })

appInstance.externals = {};

appInstance.externals['@tarojs/taro'] = Taro;
appInstance.externals['@tarojs/components'] = TaroComponents;
appInstance.externals['BrickMobile'] = BrickMobile;
appInstance.externals['React'] = React;
appInstance.externals['RecatDom'] = RecatDom;

console.log('global ===>', appInstance, appInstance.externals)