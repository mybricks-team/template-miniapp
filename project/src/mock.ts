export default {
  "appConfig": {
      "entryPagePath": "pages/main/index",
      "pages": [
          "pages/main/index",
          "pages/login/index",
          "pages/u_ZcN_w/index",
          "pages/u_3bOAH/index",
          "pages/u_9ffYc/index",
          "pages/u_O6zka/index",
          "pages/u_79HX_/index",
          "pages/u_e2bWH/index",
          "pages/u_GuCyg/index",
          "pages/u_BO_q0/index",
          "pages/u_HWdH2/index",
          "pages/u_2iWQ0/index",
          "pages/u_8eNhM/index",
          "pages/u_U_5BJ/index",
          "pages/u_AAdCP/index",
          "pages/u_0ST2i/index"
      ],
      "window": {},
      "tabBar": {
          "custom": true,
          "list": [
              {
                  "pagePath": "pages/main/index",
                  "text": "首页"
              },
              {
                  "pagePath": "pages/u_ZcN_w/index",
                  "text": "最近活动"
              },
              {
                  "pagePath": "pages/u_9ffYc/index",
                  "text": "加入社群"
              },
              {
                  "pagePath": "pages/u_79HX_/index",
                  "text": "校友名录"
              },
              {
                  "pagePath": "pages/u_GuCyg/index",
                  "text": "我的"
              }
          ],
          "color": "#ffffff",
          "selectedColor": "#ffffff",
          "backgroundColor": "#ffffff"
      }
  },
  "pages": [
      {
          "pagePath": "pages/index/index",
          "pageConfig": {
              "navigationStyle": "custom"
          },
          "pageToJson": {
              "-v": "1.0.9",
              "deps": [
                  {
                      "namespace": "mybricks.taro.systemPage",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.image",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.text",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.containerGrid",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.core-comlib.scenes",
                      "version": "1.0.0",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.taro.searchBar",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro._connector",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  },
                  {
                      "namespace": "mybricks.taro.containerList",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.activityCard",
                      "version": "1.0.2"
                  },
                  {
                      "namespace": "mybricks.taro._muilt-inputJs",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  },
                  {
                      "namespace": "mybricks.taro._setStorage",
                      "version": "1.0.0",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.taro.swiper",
                      "version": "1.0.6"
                  }
              ],
              "coms": {
                  "u_5PMrt": {
                      "def": {
                          "namespace": "mybricks.taro.systemPage",
                          "version": "1.0.0"
                      },
                      "title": "页面",
                      "model": {
                          "data": {
                              "useNavigationStyle": "custom",
                              "navigationStyle": "custom",
                              "navigationBarBackgroundColor": "#464646",
                              "navigationBarTextStyle": "white",
                              "navigationBarTitleText": "Mybricks",
                              "homeButton": false,
                              "customNavigation": {
                                  "style": {
                                      "background": "url() center top / 100% 100% no-repeat,rgba(255,255,255,1)",
                                      "styleEditorUnfold": true,
                                      "backgroundColor": "#ffffff"
                                  },
                                  "useFixed": true
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [],
                      "outputs": []
                  },
                  "u_e9O_S": {
                      "def": {
                          "namespace": "mybricks.taro.image",
                          "version": "1.0.0"
                      },
                      "title": "图片",
                      "model": {
                          "data": {
                              "src": "https://admin.alialumni.com/mfs/Ini2cKRD3PErNEK82E81qYaDJ22UrffD-1689231348651.png",
                              "mode": "aspectFill",
                              "loadSmooth": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onLoad": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onError": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": 87,
                              "height": 26
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setSrc",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onLoad",
                          "onError"
                      ]
                  },
                  "u_E2qs0": {
                      "def": {
                          "namespace": "mybricks.taro.image",
                          "version": "1.0.0"
                      },
                      "title": "图片1",
                      "model": {
                          "data": {
                              "src": "https://admin.alialumni.com/mfs/sRqxjGRKkjr6SvIzalwPwtlycFW9GFOl-1688997050478.png",
                              "mode": "widthFix"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onLoad": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onError": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": 40,
                              "height": 40
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setSrc",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onLoad",
                          "onError"
                      ]
                  },
                  "u_LHNsw": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "title": "文本",
                      "model": {
                          "data": {
                              "text": "关于青橙会",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "color": "rgba(89,89,89,1)",
                                  "lineHeight": "20px",
                                  "fontWeight": "500",
                                  "fontSize": "14px"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "fit-content",
                              "marginTop": 6
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_DlMW_": {
                      "def": {
                          "namespace": "mybricks.taro.image",
                          "version": "1.0.0"
                      },
                      "title": "图片4",
                      "model": {
                          "data": {
                              "src": "https://admin.alialumni.com/mfs/pMTWA2oaZ50MZSO3zD74N9nkVTV4CY95-1688997072047.png",
                              "mode": "widthFix"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onLoad": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onError": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": 40,
                              "height": 40
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setSrc",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onLoad",
                          "onError"
                      ]
                  },
                  "u_wSVO4": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "title": "文本3",
                      "model": {
                          "data": {
                              "text": "志愿者风采",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "color": "rgba(89,89,89,1)",
                                  "fontWeight": "500",
                                  "lineHeight": "20px",
                                  "fontSize": "14px"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "fit-content",
                              "marginTop": 6
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_EiyW9": {
                      "def": {
                          "namespace": "mybricks.taro.image",
                          "version": "1.0.0"
                      },
                      "title": "图片3",
                      "model": {
                          "data": {
                              "src": "https://admin.alialumni.com/mfs/u6HqfVPZQPJb4UXIjM0UGu0tDYGd1CqQ-1688997065226.png",
                              "mode": "widthFix"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onLoad": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onError": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": 40,
                              "height": 40
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setSrc",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onLoad",
                          "onError"
                      ]
                  },
                  "u_Jnerd": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "title": "文本2",
                      "model": {
                          "data": {
                              "text": "企业链接",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "color": "rgba(89,89,89,1)",
                                  "lineHeight": "20px",
                                  "fontWeight": "500",
                                  "fontSize": "14px"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "fit-content",
                              "marginTop": 6
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_ykop_": {
                      "def": {
                          "namespace": "mybricks.taro.image",
                          "version": "1.0.0"
                      },
                      "title": "图片2",
                      "model": {
                          "data": {
                              "src": "https://admin.alialumni.com/mfs/MO7vwJ3YgvzF2zg3zQhd6onKobe1rctw-1688997057525.png",
                              "mode": "widthFix"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onLoad": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onError": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": 40,
                              "height": 40
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setSrc",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onLoad",
                          "onError"
                      ]
                  },
                  "u_ZmwjC": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "title": "文本1",
                      "model": {
                          "data": {
                              "text": "智库专家",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "color": "rgba(89,89,89,1)",
                                  "fontWeight": "500",
                                  "lineHeight": "20px",
                                  "fontSize": "14px"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "fit-content",
                              "marginTop": 6
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_n46Gg": {
                      "def": {
                          "namespace": "mybricks.taro.containerGrid",
                          "version": "1.0.0"
                      },
                      "title": "宫格",
                      "model": {
                          "data": {
                              "style": {},
                              "rows": [
                                  {
                                      "id": "row0",
                                      "height": "auto",
                                      "cols": [
                                          {
                                              "id": "col0",
                                              "title": "内容",
                                              "width": "auto",
                                              "layout": {
                                                  "display": "flex",
                                                  "position": "inherit",
                                                  "flexDirection": "column",
                                                  "alignItems": "center",
                                                  "justifyContent": "center",
                                                  "flexWrap": "nowrap"
                                              }
                                          },
                                          {
                                              "id": "u_npct70",
                                              "title": "列（纵向排列）",
                                              "width": "auto",
                                              "layout": {
                                                  "display": "flex",
                                                  "position": "inherit",
                                                  "flexDirection": "column",
                                                  "alignItems": "center",
                                                  "justifyContent": "center",
                                                  "flexWrap": "nowrap"
                                              }
                                          },
                                          {
                                              "id": "u_w6632w",
                                              "title": "列（纵向排列）",
                                              "width": "auto",
                                              "layout": {
                                                  "display": "flex",
                                                  "position": "inherit",
                                                  "flexDirection": "column",
                                                  "alignItems": "center",
                                                  "justifyContent": "center",
                                                  "flexWrap": "nowrap"
                                              }
                                          },
                                          {
                                              "id": "u_z5k786",
                                              "title": "列（纵向排列）",
                                              "width": "auto",
                                              "layout": {
                                                  "display": "flex",
                                                  "position": "inherit",
                                                  "flexDirection": "column",
                                                  "alignItems": "center",
                                                  "justifyContent": "center",
                                                  "flexWrap": "nowrap"
                                              }
                                          }
                                      ]
                                  }
                              ]
                          },
                          "inputAry": [],
                          "outputAry": [
                              {
                                  "hostId": "col_output_col0",
                                  "title": "内容",
                                  "schema": {
                                      "type": "any"
                                  }
                              },
                              {
                                  "hostId": "col_output_u_npct70",
                                  "title": "列（纵向排列）",
                                  "schema": {
                                      "type": "any"
                                  }
                              },
                              {
                                  "hostId": "col_output_u_w6632w",
                                  "title": "列（纵向排列）",
                                  "schema": {
                                      "type": "any"
                                  }
                              },
                              {
                                  "hostId": "col_output_u_z5k786",
                                  "title": "列（纵向排列）",
                                  "schema": {
                                      "type": "any"
                                  }
                              }
                          ],
                          "outputEvents": {
                              "click": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "col_output_col0": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_8wtbr",
                                          "title": "宫格 > 内容"
                                      },
                                      "active": true
                                  }
                              ],
                              "col_output_u_npct70": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_Zblck",
                                          "title": "宫格 > 列（纵向排列）"
                                      },
                                      "active": true
                                  }
                              ],
                              "col_output_u_w6632w": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_KcwyM",
                                          "title": "宫格 > 列（纵向排列）"
                                      },
                                      "active": true
                                  }
                              ],
                              "col_output_u_z5k786": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_2Pd9R",
                                          "title": "宫格 > 列（纵向排列）"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginLeft": 12,
                              "marginRight": 12,
                              "marginTop": 18,
                              "marginBottom": 18
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "click",
                          "col_output_col0",
                          "col_output_u_npct70",
                          "col_output_u_w6632w",
                          "col_output_u_z5k786"
                      ]
                  },
                  "u__8LRU": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "title": "文本4",
                      "model": {
                          "data": {
                              "text": "最近活动",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "lineHeight": "18px",
                                  "fontSize": "18px",
                                  "fontWeight": "500"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "fit-content"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_D0Prg": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "title": "文本5",
                      "model": {
                          "data": {
                              "text": "/ Recent Activity .",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "lineHeight": "14px"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "fit-content",
                              "marginLeft": 3
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_MMmqC": {
                      "def": {
                          "namespace": "mybricks.taro.containerGrid",
                          "version": "1.0.0"
                      },
                      "title": "最近活动标题",
                      "model": {
                          "data": {
                              "style": {},
                              "rows": [
                                  {
                                      "id": "row0",
                                      "height": "auto",
                                      "cols": [
                                          {
                                              "id": "col0",
                                              "title": "内容",
                                              "width": "auto"
                                          }
                                      ]
                                  }
                              ],
                              "layout": {
                                  "display": "flex",
                                  "position": "inherit",
                                  "flexDirection": "row",
                                  "alignItems": "flex-end",
                                  "justifyContent": "flex-start",
                                  "flexWrap": "nowrap"
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "click": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginLeft": 12,
                              "marginRight": 12,
                              "marginBottom": 6
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "click"
                      ]
                  },
                  "u_RtWMU": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "关于青橙会",
                      "model": {
                          "data": {
                              "_sceneId": "u_2iWQ0",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u_L_1pB": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "智库专家",
                      "model": {
                          "data": {
                              "_sceneId": "u_U_5BJ",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u_HMTF1": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "企业链接",
                      "model": {
                          "data": {
                              "_sceneId": "u_AAdCP",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u_l2BEQ": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "志愿者风采",
                      "model": {
                          "data": {
                              "_sceneId": "u_0ST2i",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u_t51Pz": {
                      "def": {
                          "namespace": "mybricks.taro.searchBar",
                          "version": "1.0.0"
                      },
                      "title": "搜索框",
                      "model": {
                          "data": {
                              "placeholderText": "最近活动搜索",
                              "searchBarStyle": {
                                  "background": "#f4f5f7",
                                  "borderRadius": "30px"
                              },
                              "label": "",
                              "disabled": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onClear": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onSearch": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_NnGNL",
                                          "title": "搜索框 > 当单击时"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 12,
                              "marginBottom": 12,
                              "marginLeft": 12,
                              "marginRight": 12,
                              "styleAry": [
                                  {
                                      "selector": ".mybricks-searchBar",
                                      "css": {
                                          "borderTopLeftRadius": "18px",
                                          "borderBottomLeftRadius": "18px",
                                          "borderBottomRightRadius": "18px",
                                          "borderTopRightRadius": "18px"
                                      }
                                  }
                              ]
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onChange",
                          "onClear",
                          "onCancel",
                          "onSearch"
                      ]
                  },
                  "u_AdnJD": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "最近活动",
                      "model": {
                          "data": {
                              "_sceneId": "u_ZcN_w",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u_vsbYF": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "服务接口",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_mzcsji",
                                  "title": "C端-查询活动列表",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "editable": true,
                                      "properties": {
                                          "活动名称": {
                                              "type": "string"
                                          }
                                      }
                                  },
                                  "outputSchema": {
                                      "type": "array",
                                      "items": {
                                          "type": "object",
                                          "properties": {
                                              "id": {
                                                  "type": "number"
                                              },
                                              "活动名称": {
                                                  "type": "string"
                                              },
                                              "活动开始时间": {
                                                  "type": "string"
                                              },
                                              "_活动开始时间": {
                                                  "type": "number"
                                              },
                                              "活动结束时间": {
                                                  "type": "string"
                                              },
                                              "_活动结束时间": {
                                                  "type": "number"
                                              },
                                              "活动形式": {
                                                  "type": "enum"
                                              },
                                              "活动地址": {
                                                  "type": "string"
                                              },
                                              "活动简介": {
                                                  "type": "string"
                                              },
                                              "活动详情": {
                                                  "type": "string"
                                              },
                                              "活动报名表": {
                                                  "type": "array",
                                                  "items": {
                                                      "type": "object",
                                                      "properties": {
                                                          "id": {
                                                              "type": "number"
                                                          },
                                                          "用户": {
                                                              "type": "number"
                                                          },
                                                          "活动": {
                                                              "type": "number"
                                                          },
                                                          "审核状态": {
                                                              "type": "enum"
                                                          }
                                                      }
                                                  }
                                              },
                                              "活动分类": {
                                                  "type": "object",
                                                  "properties": {
                                                      "id": {
                                                          "type": "number"
                                                      },
                                                      "分类名称": {
                                                          "type": "string"
                                                      },
                                                      "分类简介": {
                                                          "type": "string"
                                                      },
                                                      "分类图标": {
                                                          "type": "string"
                                                      }
                                                  }
                                              },
                                              "_活动分类": {
                                                  "type": "number"
                                              },
                                              "活动海报": {
                                                  "type": "string"
                                              },
                                              "活动城市": {
                                                  "type": "string"
                                              }
                                          }
                                      }
                                  }
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_KwgeV": {
                      "def": {
                          "namespace": "mybricks.taro.containerList",
                          "version": "1.0.0"
                      },
                      "title": "列表容器",
                      "model": {
                          "data": {
                              "useLoading": true,
                              "loadingTip": "加载中...",
                              "errorTip": "加载失败，请重试",
                              "emptyTip": "没有更多了",
                              "scrollRefresh": false,
                              "pullRefresh": false,
                              "grid": {
                                  "column": 0,
                                  "gutter": [
                                      8,
                                      8
                                  ]
                              },
                              "rowKey": "id"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "refreshDataSource",
                          "addDataSource",
                          "loading",
                          "noMore",
                          "error",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onScrollLoad",
                          "onRefresh"
                      ]
                  },
                  "u_iTgok": {
                      "def": {
                          "namespace": "mybricks.taro.activityCard",
                          "version": "1.0.2"
                      },
                      "frameId": "item",
                      "parentComId": "u_KwgeV",
                      "title": "活动卡片",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_nE1VH",
                                          "title": "活动卡片 > 单击"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 6,
                              "marginBottom": 6,
                              "marginLeft": 12,
                              "marginRight": 12
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setDatasource",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_8oYLM": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "frameId": "item",
                      "parentComId": "u_KwgeV",
                      "title": "活动详情",
                      "model": {
                          "data": {
                              "_sceneId": "u_3bOAH",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u__LzCO": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "服务接口1",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_bwazis",
                                  "title": "C端-查询登录会员信息",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "loginUserId": {
                                              "type": "string"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "id": {
                                              "type": "number"
                                          },
                                          "openid": {
                                              "type": "string"
                                          },
                                          "头像": {
                                              "type": "string"
                                          },
                                          "昵称": {
                                              "type": "string"
                                          },
                                          "真实姓名保密等级": {
                                              "type": "enum"
                                          },
                                          "真实姓名": {
                                              "type": "string"
                                          },
                                          "性别保密等级": {
                                              "type": "enum"
                                          },
                                          "性别": {
                                              "type": "enum"
                                          },
                                          "当前所在国家": {
                                              "type": "enum"
                                          },
                                          "当前城市": {
                                              "type": "string"
                                          },
                                          "当前公司": {
                                              "type": "string"
                                          },
                                          "当前职务": {
                                              "type": "string"
                                          },
                                          "个人简介": {
                                              "type": "string"
                                          },
                                          "手机号码保密等级": {
                                              "type": "enum"
                                          },
                                          "手机号码": {
                                              "type": "string"
                                          },
                                          "微信二维码保密等级": {
                                              "type": "enum"
                                          },
                                          "微信二维码": {
                                              "type": "string"
                                          },
                                          "阿里花名": {
                                              "type": "string"
                                          },
                                          "阿里工号": {
                                              "type": "string"
                                          },
                                          "阿里部门": {
                                              "type": "string"
                                          },
                                          "阿里职务": {
                                              "type": "string"
                                          },
                                          "阿里入职时间": {
                                              "type": "string"
                                          },
                                          "_阿里入职时间": {
                                              "type": "number"
                                          },
                                          "阿里离职时间": {
                                              "type": "string"
                                          },
                                          "_阿里离职时间": {
                                              "type": "number"
                                          },
                                          "阿里认证信息": {
                                              "type": "string"
                                          },
                                          "阿里认证审核状态": {
                                              "type": "enum"
                                          },
                                          "会员标签列表": {
                                              "type": "array",
                                              "items": {
                                                  "type": "object",
                                                  "properties": {
                                                      "id": {
                                                          "type": "number"
                                                      },
                                                      "用户": {
                                                          "type": "number"
                                                      },
                                                      "标签": {
                                                          "type": "number"
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  },
                                  "createTime": 1689766261994,
                                  "lastModifiedTime": 1689766333648
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_BwHf0": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "JS计算1",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0"
                      ]
                  },
                  "u_5K2tj": {
                      "def": {
                          "namespace": "mybricks.taro._setStorage",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "写入本地缓存",
                      "model": {
                          "data": {
                              "mock": {}
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setStorage"
                      ],
                      "outputs": [
                          "onSuccess",
                          "onFail"
                      ]
                  },
                  "u_A35wW": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "JS计算2",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [
                              {
                                  "hostId": "output1",
                                  "title": "输出项1",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0",
                          "output1"
                      ]
                  },
                  "u_UNDUA": {
                      "def": {
                          "namespace": "mybricks.taro.swiper",
                          "version": "1.0.6"
                      },
                      "title": "轮播",
                      "model": {
                          "data": {
                              "items": [
                                  {
                                      "_id": "u_1",
                                      "thumbnail": "https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-05-30/1685451722186.3a6d5fa5deb9456f.png",
                                      "useCustomLink": false,
                                      "customLink": "",
                                      "scene": {}
                                  },
                                  {
                                      "_id": "u_2",
                                      "thumbnail": "https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-05-30/1685451722186.3a6d5fa5deb9456f.png",
                                      "useCustomLink": false,
                                      "customLink": "",
                                      "scene": {}
                                  },
                                  {
                                      "_id": "PRuhT7",
                                      "thumbnail": "https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-05-30/1685451722186.3a6d5fa5deb9456f.png",
                                      "useCustomLink": false,
                                      "customLink": "",
                                      "scene": {}
                                  }
                              ],
                              "autoplay": true,
                              "slideIndex": 0
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": 351,
                              "height": 198,
                              "marginLeft": 12,
                              "marginRight": 12
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setItems",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  }
              },
              "id": "main",
              "title": "首页",
              "comsAutoRun": {},
              "_inputs": [],
              "_outputs": [],
              "inputs": [
                  {
                      "id": "open",
                      "title": "打开",
                      "type": "normal",
                      "schema": {
                          "type": "any"
                      }
                  }
              ],
              "outputs": [
                  {
                      "id": "onShow",
                      "title": "页面显示",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  },
                  {
                      "id": "onHide",
                      "title": "页面隐藏",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  }
              ],
              "cons": {
                  "_rootFrame_-open": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_vsbYF",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      },
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u__LzCO",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_n46Gg-col_output_col0": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_38uYb",
                          "comId": "u_RtWMU",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_n46Gg-col_output_u_npct70": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_K2Kk_",
                          "comId": "u_L_1pB",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_n46Gg-col_output_u_w6632w": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_FUPHY",
                          "comId": "u_HMTF1",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_n46Gg-col_output_u_z5k786": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_kSKU3",
                          "comId": "u_l2BEQ",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_t51Pz-onClick": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_Fxbw5",
                          "comId": "u_AdnJD",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_vsbYF-then": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_A35wW",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_KwgeV-item-itemData": [
                      {
                          "type": "com",
                          "frameKey": "u_KwgeV-item",
                          "finishPinParentKey": "u_lKWiF",
                          "comId": "u_iTgok",
                          "def": {
                              "namespace": "mybricks.taro.activityCard",
                              "version": "1.0.2"
                          },
                          "pinId": "setDatasource",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_iTgok-onClick": [
                      {
                          "type": "com",
                          "frameKey": "u_KwgeV-item",
                          "startPinParentKey": "u_Wk_5y",
                          "comId": "u_8oYLM",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u__LzCO-then": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_BwHf0",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_BwHf0-output0": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_5K2tj",
                          "def": {
                              "namespace": "mybricks.taro._setStorage",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "setStorage",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_A35wW-output0": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_CW_x4",
                          "comId": "u_KwgeV",
                          "def": {
                              "namespace": "mybricks.taro.containerList",
                              "version": "1.0.0"
                          },
                          "pinId": "refreshDataSource",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_A35wW-output1": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_r8MA2",
                          "comId": "u_KwgeV",
                          "def": {
                              "namespace": "mybricks.taro.containerList",
                              "version": "1.0.0"
                          },
                          "pinId": "noMore",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ]
              },
              "pinRels": {
                  "u_vsbYF-call": [
                      "then",
                      "catch"
                  ],
                  "u__LzCO-call": [
                      "then",
                      "catch"
                  ]
              },
              "pinProxies": {
                  "u_RtWMU-_open": {
                      "type": "frame",
                      "frameId": "u_2iWQ0",
                      "pinId": "open"
                  },
                  "u_L_1pB-_open": {
                      "type": "frame",
                      "frameId": "u_U_5BJ",
                      "pinId": "open"
                  },
                  "u_HMTF1-_open": {
                      "type": "frame",
                      "frameId": "u_AAdCP",
                      "pinId": "open"
                  },
                  "u_l2BEQ-_open": {
                      "type": "frame",
                      "frameId": "u_0ST2i",
                      "pinId": "open"
                  },
                  "u_AdnJD-_open": {
                      "type": "frame",
                      "frameId": "u_ZcN_w",
                      "pinId": "open"
                  },
                  "u_8oYLM-_open": {
                      "type": "frame",
                      "frameId": "u_3bOAH",
                      "pinId": "open"
                  }
              },
              "pinValueProxies": {},
              "slot": {
                  "id": "main",
                  "title": "首页",
                  "comAry": [
                      {
                          "id": "u_5PMrt",
                          "name": "u_8Qnno",
                          "def": {
                              "namespace": "mybricks.taro.systemPage",
                              "version": "1.0.0"
                          },
                          "slots": {
                              "content": {
                                  "id": "content",
                                  "title": "内容",
                                  "comAry": [
                                      {
                                          "id": "u_t51Pz",
                                          "name": "u_I2HJ6",
                                          "def": {
                                              "namespace": "mybricks.taro.searchBar",
                                              "version": "1.0.0"
                                          }
                                      },
                                      {
                                          "id": "u_UNDUA",
                                          "name": "u_IV_ty",
                                          "def": {
                                              "namespace": "mybricks.taro.swiper",
                                              "version": "1.0.6"
                                          }
                                      },
                                      {
                                          "id": "u_n46Gg",
                                          "name": "u_yWt9W",
                                          "def": {
                                              "namespace": "mybricks.taro.containerGrid",
                                              "version": "1.0.0"
                                          },
                                          "slots": {
                                              "col0": {
                                                  "id": "col0",
                                                  "title": "列（竖向排列）",
                                                  "comAry": [
                                                      {
                                                          "id": "u_E2qs0",
                                                          "name": "u_xX34w",
                                                          "def": {
                                                              "namespace": "mybricks.taro.image",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_LHNsw",
                                                          "name": "u_swbJ3",
                                                          "def": {
                                                              "namespace": "mybricks.taro.text",
                                                              "version": "1.0.0"
                                                          }
                                                      }
                                                  ],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              },
                                              "u_z5k786": {
                                                  "id": "u_z5k786",
                                                  "title": "列（竖向排列）",
                                                  "comAry": [
                                                      {
                                                          "id": "u_DlMW_",
                                                          "name": "u_IJiuA",
                                                          "def": {
                                                              "namespace": "mybricks.taro.image",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_wSVO4",
                                                          "name": "u_fQ_KG",
                                                          "def": {
                                                              "namespace": "mybricks.taro.text",
                                                              "version": "1.0.0"
                                                          }
                                                      }
                                                  ],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              },
                                              "u_w6632w": {
                                                  "id": "u_w6632w",
                                                  "title": "列（竖向排列）",
                                                  "comAry": [
                                                      {
                                                          "id": "u_EiyW9",
                                                          "name": "u_hGaIf",
                                                          "def": {
                                                              "namespace": "mybricks.taro.image",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_Jnerd",
                                                          "name": "u_BoEqx",
                                                          "def": {
                                                              "namespace": "mybricks.taro.text",
                                                              "version": "1.0.0"
                                                          }
                                                      }
                                                  ],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              },
                                              "u_npct70": {
                                                  "id": "u_npct70",
                                                  "title": "列（竖向排列）",
                                                  "comAry": [
                                                      {
                                                          "id": "u_ykop_",
                                                          "name": "u_u91uK",
                                                          "def": {
                                                              "namespace": "mybricks.taro.image",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_ZmwjC",
                                                          "name": "u_a41ea",
                                                          "def": {
                                                              "namespace": "mybricks.taro.text",
                                                              "version": "1.0.0"
                                                          }
                                                      }
                                                  ],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      },
                                      {
                                          "id": "u_MMmqC",
                                          "name": "u_P_xUQ",
                                          "def": {
                                              "namespace": "mybricks.taro.containerGrid",
                                              "version": "1.0.0"
                                          },
                                          "slots": {
                                              "col0": {
                                                  "id": "col0",
                                                  "title": "列（横向排列）",
                                                  "comAry": [
                                                      {
                                                          "id": "u__8LRU",
                                                          "name": "u_5gWZD",
                                                          "def": {
                                                              "namespace": "mybricks.taro.text",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_D0Prg",
                                                          "name": "u_K9M69",
                                                          "def": {
                                                              "namespace": "mybricks.taro.text",
                                                              "version": "1.0.0"
                                                          }
                                                      }
                                                  ],
                                                  "style": {
                                                      "layout": "flex-row",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      },
                                      {
                                          "id": "u_KwgeV",
                                          "name": "u_HLWQe",
                                          "def": {
                                              "namespace": "mybricks.taro.containerList",
                                              "version": "1.0.0"
                                          },
                                          "slots": {
                                              "item": {
                                                  "id": "item",
                                                  "title": "列表项",
                                                  "type": "scope",
                                                  "comAry": [
                                                      {
                                                          "id": "u_iTgok",
                                                          "name": "u_JFXMU",
                                                          "def": {
                                                              "namespace": "mybricks.taro.activityCard",
                                                              "version": "1.0.2"
                                                          }
                                                      }
                                                  ],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              },
                              "mainSlot": {
                                  "id": "mainSlot",
                                  "title": "导航栏主区域",
                                  "comAry": [],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              },
                              "leftSlot": {
                                  "id": "leftSlot",
                                  "title": "导航栏左区域",
                                  "comAry": [
                                      {
                                          "id": "u_e9O_S",
                                          "name": "u_KjQ_G",
                                          "def": {
                                              "namespace": "mybricks.taro.image",
                                              "version": "1.0.0"
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              }
                          }
                      }
                  ],
                  "style": {
                      "layout": "flex-column",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start"
                  }
              }
          }
      },
      {
          "pagePath": "pages/404/index",
          "pageConfig": {
              "navigationStyle": "custom"
          },
          "pageToJson": {
              "-v": "1.0.9",
              "deps": [
                  {
                      "namespace": "mybricks.taro.systemLogin",
                      "version": "1.0.0"
                  }
              ],
              "coms": {
                  "u_SmFQ1": {
                      "def": {
                          "namespace": "mybricks.taro.systemLogin",
                          "version": "1.0.0"
                      },
                      "title": "系统登录",
                      "model": {
                          "data": {
                              "useLogo": true,
                              "logo": "https://admin.alialumni.com/mfs/CW4qiiNhd90GR3uKEFlP6kA9GQvlJUqD-1686835591854.png",
                              "logoStyle": {
                                  "width": 200,
                                  "height": "58px",
                                  "styleEditorUnfold": true
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": 375,
                              "styleAry": [
                                  {
                                      "selector": ".mybricks-button",
                                      "css": {
                                          "textAlign": "center"
                                      }
                                  },
                                  {
                                      "selector": ".mybricks-exit",
                                      "css": {
                                          "textAlign": "center"
                                      }
                                  }
                              ]
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [],
                      "outputs": []
                  }
              },
              "id": "login",
              "title": "登录",
              "comsAutoRun": {},
              "_inputs": [],
              "_outputs": [],
              "inputs": [
                  {
                      "id": "open",
                      "title": "打开",
                      "type": "normal",
                      "schema": {
                          "type": "any"
                      }
                  }
              ],
              "outputs": [
                  {
                      "id": "onShow",
                      "title": "页面显示",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  },
                  {
                      "id": "onHide",
                      "title": "页面隐藏",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  }
              ],
              "cons": {},
              "pinRels": {},
              "pinProxies": {},
              "pinValueProxies": {},
              "slot": {
                  "id": "login",
                  "title": "登录",
                  "comAry": [
                      {
                          "id": "u_SmFQ1",
                          "name": "u_ZG0_L",
                          "def": {
                              "namespace": "mybricks.taro.systemLogin",
                              "version": "1.0.0"
                          }
                      }
                  ],
                  "style": {
                      "layout": "flex-column",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start"
                  }
              }
          }
      },
      {
          "pagePath": "pages/u_ZcN_w/index",
          "pageConfig": {
              "navigationStyle": "custom"
          },
          "pageToJson": {
              "-v": "1.0.9",
              "deps": [
                  {
                      "namespace": "mybricks.taro.systemPage",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.searchBar",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.containerList",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.activityCard",
                      "version": "1.0.2"
                  },
                  {
                      "namespace": "mybricks.core-comlib.scenes",
                      "version": "1.0.0",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.core-comlib.fn",
                      "version": "1.0.0",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.taro.image",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro._muilt-inputJs",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  },
                  {
                      "namespace": "mybricks.taro._connector",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  }
              ],
              "coms": {
                  "u_AUneQ": {
                      "def": {
                          "namespace": "mybricks.taro.systemPage",
                          "version": "1.0.0"
                      },
                      "title": "页面",
                      "model": {
                          "data": {
                              "useNavigationStyle": "custom",
                              "navigationStyle": "custom",
                              "navigationBarBackgroundColor": "#464646",
                              "navigationBarTextStyle": "white",
                              "navigationBarTitleText": "Mybricks",
                              "homeButton": false,
                              "customNavigation": {
                                  "style": {
                                      "background": "url() center top / 100% 100% no-repeat,rgba(255,255,255,1)",
                                      "styleEditorUnfold": true
                                  },
                                  "useFixed": true
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [],
                      "outputs": []
                  },
                  "u_NYCP_": {
                      "def": {
                          "namespace": "mybricks.taro.searchBar",
                          "version": "1.0.0"
                      },
                      "title": "搜索框",
                      "model": {
                          "data": {
                              "placeholderText": "搜索活动名称",
                              "searchBarStyle": {
                                  "background": "#f4f5f7",
                                  "borderRadius": "30px"
                              },
                              "label": "",
                              "disabled": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onClear": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_fkN_X",
                                          "title": "搜索框 > 点击清除按钮时"
                                      },
                                      "active": true
                                  }
                              ],
                              "onSearch": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_WrxXB",
                                          "title": "搜索框 > 当触发搜索时"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 12,
                              "marginBottom": 12,
                              "marginLeft": 12,
                              "marginRight": 12,
                              "styleAry": [
                                  {
                                      "selector": ".mybricks-searchBar",
                                      "css": {
                                          "borderTopLeftRadius": "18px",
                                          "borderBottomLeftRadius": "18px",
                                          "borderBottomRightRadius": "18px",
                                          "borderTopRightRadius": "18px"
                                      }
                                  }
                              ]
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onChange",
                          "onClear",
                          "onCancel",
                          "onSearch"
                      ]
                  },
                  "u_CVlHZ": {
                      "def": {
                          "namespace": "mybricks.taro.containerList",
                          "version": "1.0.0"
                      },
                      "title": "列表容器",
                      "model": {
                          "data": {
                              "useLoading": true,
                              "loadingTip": "加载中...",
                              "errorTip": "加载失败，请重试",
                              "emptyTip": "暂无进行中的活动～",
                              "scrollRefresh": false,
                              "pullRefresh": false,
                              "grid": {
                                  "column": 0,
                                  "gutter": [
                                      8,
                                      8
                                  ]
                              },
                              "rowKey": "id"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "refreshDataSource",
                          "addDataSource",
                          "loading",
                          "noMore",
                          "error",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onScrollLoad",
                          "onRefresh"
                      ]
                  },
                  "u_LhMOR": {
                      "def": {
                          "namespace": "mybricks.taro.activityCard",
                          "version": "1.0.2"
                      },
                      "frameId": "item",
                      "parentComId": "u_CVlHZ",
                      "title": "活动卡片",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_5wZp_",
                                          "title": "活动卡片 > 单击"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 6,
                              "marginBottom": 6,
                              "marginLeft": 12,
                              "marginRight": 12
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setDatasource",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_1uNgP": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "frameId": "item",
                      "parentComId": "u_CVlHZ",
                      "title": "活动详情",
                      "model": {
                          "data": {
                              "_sceneId": "u_3bOAH",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u_5yY7i": {
                      "def": {
                          "namespace": "mybricks.core-comlib.fn",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "刷新列表",
                      "model": {
                          "data": {},
                          "inputAry": [
                              {
                                  "hostId": "param0",
                                  "title": "输入项",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "param0"
                      ],
                      "outputs": []
                  },
                  "u_GFao_": {
                      "def": {
                          "namespace": "mybricks.core-comlib.fn",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "刷新列表",
                      "model": {
                          "data": {},
                          "inputAry": [
                              {
                                  "hostId": "param0",
                                  "title": "输入项",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "param0"
                      ],
                      "outputs": []
                  },
                  "u_BZUno": {
                      "def": {
                          "namespace": "mybricks.core-comlib.fn",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "刷新列表",
                      "model": {
                          "data": {},
                          "inputAry": [
                              {
                                  "hostId": "param0",
                                  "title": "输入项",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "param0"
                      ],
                      "outputs": []
                  },
                  "u_ILByC": {
                      "def": {
                          "namespace": "mybricks.taro.image",
                          "version": "1.0.0"
                      },
                      "title": "图片",
                      "model": {
                          "data": {
                              "src": "https://admin.alialumni.com/mfs/Ini2cKRD3PErNEK82E81qYaDJ22UrffD-1689231348651.png",
                              "mode": "aspectFill",
                              "loadSmooth": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onLoad": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onError": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": 87,
                              "height": 26
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setSrc",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onLoad",
                          "onError"
                      ]
                  },
                  "u_IluwS": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "u_KoCnA",
                      "title": "JS计算",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0"
                      ]
                  },
                  "u_0FjaK": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "u_KoCnA",
                      "title": "服务接口",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_mzcsji",
                                  "title": "C端-查询活动列表",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "editable": true,
                                      "properties": {
                                          "活动名称": {
                                              "type": "string"
                                          }
                                      }
                                  },
                                  "outputSchema": {
                                      "type": "array",
                                      "items": {
                                          "type": "object",
                                          "properties": {
                                              "id": {
                                                  "type": "number"
                                              },
                                              "活动名称": {
                                                  "type": "string"
                                              },
                                              "活动开始时间": {
                                                  "type": "string"
                                              },
                                              "_活动开始时间": {
                                                  "type": "number"
                                              },
                                              "活动结束时间": {
                                                  "type": "string"
                                              },
                                              "_活动结束时间": {
                                                  "type": "number"
                                              },
                                              "活动形式": {
                                                  "type": "enum"
                                              },
                                              "活动地址": {
                                                  "type": "string"
                                              },
                                              "活动简介": {
                                                  "type": "string"
                                              },
                                              "活动详情": {
                                                  "type": "string"
                                              },
                                              "活动报名表": {
                                                  "type": "array",
                                                  "items": {
                                                      "type": "object",
                                                      "properties": {
                                                          "id": {
                                                              "type": "number"
                                                          },
                                                          "用户": {
                                                              "type": "number"
                                                          },
                                                          "活动": {
                                                              "type": "number"
                                                          },
                                                          "审核状态": {
                                                              "type": "enum"
                                                          }
                                                      }
                                                  }
                                              },
                                              "活动分类": {
                                                  "type": "object",
                                                  "properties": {
                                                      "id": {
                                                          "type": "number"
                                                      },
                                                      "分类名称": {
                                                          "type": "string"
                                                      },
                                                      "分类简介": {
                                                          "type": "string"
                                                      },
                                                      "分类图标": {
                                                          "type": "string"
                                                      }
                                                  }
                                              },
                                              "_活动分类": {
                                                  "type": "number"
                                              },
                                              "活动海报": {
                                                  "type": "string"
                                              },
                                              "活动城市": {
                                                  "type": "string"
                                              }
                                          }
                                      }
                                  },
                                  "createTime": 1689766261992,
                                  "lastModifiedTime": 1689766299325
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_kQbva": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "u_KoCnA",
                      "title": "JS计算2",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [
                              {
                                  "hostId": "output1",
                                  "title": "输出项1",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0",
                          "output1"
                      ]
                  }
              },
              "id": "u_ZcN_w",
              "title": "最近活动",
              "comsAutoRun": {},
              "_inputs": [],
              "_outputs": [],
              "inputs": [
                  {
                      "id": "open",
                      "title": "打开",
                      "type": "normal",
                      "schema": {
                          "type": "object",
                          "editable": true
                      }
                  }
              ],
              "outputs": [
                  {
                      "id": "onShow",
                      "title": "页面显示",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  },
                  {
                      "id": "onHide",
                      "title": "页面隐藏",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  }
              ],
              "cons": {
                  "_rootFrame_-open": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_5yY7i",
                          "def": {
                              "namespace": "mybricks.core-comlib.fn",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "param0",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_NYCP_-onClear": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_MDEXs",
                          "comId": "u_GFao_",
                          "def": {
                              "namespace": "mybricks.core-comlib.fn",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "param0",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_NYCP_-onSearch": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_SLG3g",
                          "comId": "u_BZUno",
                          "def": {
                              "namespace": "mybricks.core-comlib.fn",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "param0",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_CVlHZ-item-itemData": [
                      {
                          "type": "com",
                          "frameKey": "u_CVlHZ-item",
                          "finishPinParentKey": "u_zWnlt",
                          "comId": "u_LhMOR",
                          "def": {
                              "namespace": "mybricks.taro.activityCard",
                              "version": "1.0.2"
                          },
                          "pinId": "setDatasource",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_LhMOR-onClick": [
                      {
                          "type": "com",
                          "frameKey": "u_CVlHZ-item",
                          "startPinParentKey": "u_w1ZQ2",
                          "comId": "u_1uNgP",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_KoCnA-param0": [
                      {
                          "type": "com",
                          "frameKey": "u_KoCnA",
                          "comId": "u_IluwS",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_IluwS-output0": [
                      {
                          "type": "com",
                          "frameKey": "u_KoCnA",
                          "comId": "u_0FjaK",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_0FjaK-then": [
                      {
                          "type": "com",
                          "frameKey": "u_KoCnA",
                          "comId": "u_kQbva",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_kQbva-output0": [
                      {
                          "type": "com",
                          "frameKey": "u_KoCnA",
                          "finishPinParentKey": "u_OPdNN",
                          "comId": "u_CVlHZ",
                          "def": {
                              "namespace": "mybricks.taro.containerList",
                              "version": "1.0.0"
                          },
                          "pinId": "refreshDataSource",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_kQbva-output1": [
                      {
                          "type": "com",
                          "frameKey": "u_KoCnA",
                          "finishPinParentKey": "u_RMvEY",
                          "comId": "u_CVlHZ",
                          "def": {
                              "namespace": "mybricks.taro.containerList",
                              "version": "1.0.0"
                          },
                          "pinId": "noMore",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ]
              },
              "pinRels": {
                  "u_0FjaK-call": [
                      "then",
                      "catch"
                  ]
              },
              "pinProxies": {
                  "u_1uNgP-_open": {
                      "type": "frame",
                      "frameId": "u_3bOAH",
                      "pinId": "open"
                  },
                  "u_5yY7i-param0": {
                      "type": "frame",
                      "frameId": "u_KoCnA",
                      "pinId": "param0"
                  },
                  "u_GFao_-param0": {
                      "type": "frame",
                      "frameId": "u_KoCnA",
                      "pinId": "param0"
                  },
                  "u_BZUno-param0": {
                      "type": "frame",
                      "frameId": "u_KoCnA",
                      "pinId": "param0"
                  }
              },
              "pinValueProxies": {},
              "slot": {
                  "id": "u_ZcN_w",
                  "title": "最近活动",
                  "comAry": [
                      {
                          "id": "u_AUneQ",
                          "name": "u_uJ2P_",
                          "def": {
                              "namespace": "mybricks.taro.systemPage",
                              "version": "1.0.0"
                          },
                          "slots": {
                              "content": {
                                  "id": "content",
                                  "title": "内容",
                                  "comAry": [
                                      {
                                          "id": "u_NYCP_",
                                          "name": "u_9xSZI",
                                          "def": {
                                              "namespace": "mybricks.taro.searchBar",
                                              "version": "1.0.0"
                                          }
                                      },
                                      {
                                          "id": "u_CVlHZ",
                                          "name": "u_zarg8",
                                          "def": {
                                              "namespace": "mybricks.taro.containerList",
                                              "version": "1.0.0"
                                          },
                                          "slots": {
                                              "item": {
                                                  "id": "item",
                                                  "title": "列表项",
                                                  "type": "scope",
                                                  "comAry": [
                                                      {
                                                          "id": "u_LhMOR",
                                                          "name": "u_UXUxL",
                                                          "def": {
                                                              "namespace": "mybricks.taro.activityCard",
                                                              "version": "1.0.2"
                                                          }
                                                      }
                                                  ],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              },
                              "mainSlot": {
                                  "id": "mainSlot",
                                  "title": "导航栏主区域",
                                  "comAry": [],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              },
                              "leftSlot": {
                                  "id": "leftSlot",
                                  "title": "导航栏左区域",
                                  "comAry": [
                                      {
                                          "id": "u_ILByC",
                                          "name": "u_14_YN",
                                          "def": {
                                              "namespace": "mybricks.taro.image",
                                              "version": "1.0.0"
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              }
                          }
                      }
                  ],
                  "style": {
                      "left": 0,
                      "top": 0,
                      "layout": "flex-column",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start"
                  }
              }
          }
      },
      {
          "pagePath": "pages/u_3bOAH/index",
          "pageConfig": {
              "navigationStyle": "default",
              "navigationBarBackgroundColor": "#ffffff",
              "navigationBarTextStyle": "black",
              "navigationBarTitleText": "青橙会"
          },
          "pageToJson": {
              "-v": "1.0.9",
              "deps": [
                  {
                      "namespace": "mybricks.taro.systemPage",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.core-comlib.var",
                      "version": "1.0.0",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.taro._connector",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  },
                  {
                      "namespace": "mybricks.taro.activityDetail",
                      "version": "1.0.3"
                  },
                  {
                      "namespace": "mybricks.taro._getUserInfo",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  },
                  {
                      "namespace": "mybricks.core-comlib.scenes",
                      "version": "1.0.0",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.taro.popup",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.image",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.text",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.containerGrid",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.safeArea",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.formContainer",
                      "version": "1.0.1"
                  },
                  {
                      "namespace": "mybricks.taro.formInput",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro._showToast",
                      "version": "1.0.1",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.taro._showLoading",
                      "version": "1.0.0",
                      "rtType": "js"
                  }
              ],
              "coms": {
                  "u_xZlig": {
                      "def": {
                          "namespace": "mybricks.taro.systemPage",
                          "version": "1.0.0"
                      },
                      "title": "页面",
                      "model": {
                          "data": {
                              "useNavigationStyle": "default",
                              "navigationStyle": "default",
                              "navigationBarBackgroundColor": "rgba(255,255,255,1)",
                              "navigationBarTextStyle": "black",
                              "navigationBarTitleText": "青橙会",
                              "homeButton": false,
                              "customNavigation": {
                                  "style": {
                                      "background": "#464646"
                                  },
                                  "useFixed": true
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [],
                      "outputs": []
                  },
                  "u_19XFX": {
                      "def": {
                          "namespace": "mybricks.core-comlib.var",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "参数",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "get",
                          "set",
                          "reset"
                      ],
                      "outputs": [
                          "return",
                          "changed"
                      ]
                  },
                  "u_oCGgX": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "服务接口",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_tsaxcj",
                                  "title": "C端-查询活动信息",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "id": {
                                              "type": "number"
                                          },
                                          "loginUserId": {
                                              "type": "number"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "我的状态": {
                                              "type": "string"
                                          }
                                      }
                                  },
                                  "createTime": 1689766261992,
                                  "lastModifiedTime": 1689766304792
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_flWrP": {
                      "def": {
                          "namespace": "mybricks.taro.activityDetail",
                          "version": "1.0.3"
                      },
                      "title": "活动详情",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onSignup": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_0_zj7",
                                          "title": "活动详情 > 报名"
                                      },
                                      "active": true
                                  }
                              ],
                              "onCancelSignup": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "status",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onSignup",
                          "onCancelSignup"
                      ]
                  },
                  "u_Gdght": {
                      "def": {
                          "namespace": "mybricks.taro._getUserInfo",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "登录用户信息",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "get"
                      ],
                      "outputs": [
                          "onSuccess",
                          "onFail"
                      ]
                  },
                  "u_Pq2PR": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "登录",
                      "model": {
                          "data": {
                              "_sceneId": "login",
                              "_sceneShowType": "normal",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u_TEgGE": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "服务接口1",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_bwazis",
                                  "title": "C端-查询登录会员信息",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "loginUserId": {
                                              "type": "string"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "id": {
                                              "type": "number"
                                          },
                                          "openid": {
                                              "type": "string"
                                          },
                                          "头像": {
                                              "type": "string"
                                          },
                                          "昵称": {
                                              "type": "string"
                                          },
                                          "真实姓名保密等级": {
                                              "type": "enum"
                                          },
                                          "真实姓名": {
                                              "type": "string"
                                          },
                                          "性别保密等级": {
                                              "type": "enum"
                                          },
                                          "性别": {
                                              "type": "enum"
                                          },
                                          "当前所在国家": {
                                              "type": "enum"
                                          },
                                          "当前城市": {
                                              "type": "string"
                                          },
                                          "当前公司": {
                                              "type": "string"
                                          },
                                          "当前职务": {
                                              "type": "string"
                                          },
                                          "个人简介": {
                                              "type": "string"
                                          },
                                          "手机号码保密等级": {
                                              "type": "enum"
                                          },
                                          "手机号码": {
                                              "type": "string"
                                          },
                                          "微信二维码保密等级": {
                                              "type": "enum"
                                          },
                                          "微信二维码": {
                                              "type": "string"
                                          },
                                          "阿里花名": {
                                              "type": "string"
                                          },
                                          "阿里工号": {
                                              "type": "string"
                                          },
                                          "阿里部门": {
                                              "type": "string"
                                          },
                                          "阿里职务": {
                                              "type": "string"
                                          },
                                          "阿里入职时间": {
                                              "type": "string"
                                          },
                                          "_阿里入职时间": {
                                              "type": "number"
                                          },
                                          "阿里离职时间": {
                                              "type": "string"
                                          },
                                          "_阿里离职时间": {
                                              "type": "number"
                                          },
                                          "阿里认证信息": {
                                              "type": "string"
                                          },
                                          "阿里认证审核状态": {
                                              "type": "enum"
                                          },
                                          "会员标签列表": {
                                              "type": "array",
                                              "items": {
                                                  "type": "object",
                                                  "properties": {
                                                      "id": {
                                                          "type": "number"
                                                      },
                                                      "用户": {
                                                          "type": "number"
                                                      },
                                                      "标签": {
                                                          "type": "number"
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  },
                                  "createTime": 1689766261994,
                                  "lastModifiedTime": 1689766333648
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_rImyP": {
                      "def": {
                          "namespace": "mybricks.taro.popup",
                          "version": "1.0.0"
                      },
                      "title": "弹出层",
                      "model": {
                          "data": {
                              "position": "bottom",
                              "contentStyle": {
                                  "background": "#ffffff"
                              },
                              "maskClose": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "none",
                              "width": "100%",
                              "height": "100%",
                              "position": "fixed",
                              "top": 0,
                              "left": 0,
                              "styleAry": [
                                  {
                                      "selector": ".mybricks-content",
                                      "css": {
                                          "paddingTop": "12px",
                                          "paddingRight": "12px",
                                          "paddingBottom": "12px",
                                          "paddingLeft": "12px",
                                          "borderTopLeftRadius": "10px",
                                          "borderTopRightRadius": "10px",
                                          "borderBottomLeftRadius": "0px",
                                          "borderBottomRightRadius": "0px"
                                      }
                                  }
                              ]
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "onShow",
                          "onHide",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClose",
                          "onClickOverlay"
                      ]
                  },
                  "u_aHz9G": {
                      "def": {
                          "namespace": "mybricks.taro.image",
                          "version": "1.0.0"
                      },
                      "title": "图片",
                      "model": {
                          "data": {
                              "src": "https://admin.alialumni.com/mfs/nBLFJg8otewZnECVBmpxaIJGe4tyVc7H-1689318860116.png",
                              "mode": "widthFix"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onLoad": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onError": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": 8,
                              "height": 13,
                              "marginRight": 4
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setSrc",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onLoad",
                          "onError"
                      ]
                  },
                  "u_KaiPf": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "title": "文本",
                      "model": {
                          "data": {
                              "text": "报名信息",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "color": "rgba(0,0,0,1)",
                                  "lineHeight": "22px",
                                  "fontSize": "16px",
                                  "fontWeight": "500"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "fit-content"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_Etdbs": {
                      "def": {
                          "namespace": "mybricks.taro.containerGrid",
                          "version": "1.0.0"
                      },
                      "title": "布局",
                      "model": {
                          "data": {
                              "style": {
                                  "backgroundColor": "#ffffff"
                              },
                              "rows": [
                                  {
                                      "id": "row0",
                                      "height": "auto",
                                      "cols": [
                                          {
                                              "id": "col0",
                                              "title": "内容",
                                              "width": "auto"
                                          }
                                      ]
                                  }
                              ],
                              "layout": {
                                  "display": "flex",
                                  "position": "inherit",
                                  "flexDirection": "row",
                                  "alignItems": "center",
                                  "justifyContent": "flex-start",
                                  "flexWrap": "nowrap"
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "click": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "height": 30
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "click"
                      ]
                  },
                  "u_dBVE7": {
                      "def": {
                          "namespace": "mybricks.taro.safeArea",
                          "version": "1.0.0"
                      },
                      "title": "安全区域",
                      "model": {
                          "data": {
                              "position": "top"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": []
                  },
                  "u__NBfZ": {
                      "def": {
                          "namespace": "mybricks.taro._getUserInfo",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "登录用户信息1",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "get"
                      ],
                      "outputs": [
                          "onSuccess",
                          "onFail"
                      ]
                  },
                  "u_F5sTN": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "服务接口5",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_bwazis",
                                  "title": "C端-查询登录会员信息",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "loginUserId": {
                                              "type": "string"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "id": {
                                              "type": "number"
                                          },
                                          "openid": {
                                              "type": "string"
                                          },
                                          "头像": {
                                              "type": "string"
                                          },
                                          "昵称": {
                                              "type": "string"
                                          },
                                          "真实姓名保密等级": {
                                              "type": "enum"
                                          },
                                          "真实姓名": {
                                              "type": "string"
                                          },
                                          "性别保密等级": {
                                              "type": "enum"
                                          },
                                          "性别": {
                                              "type": "enum"
                                          },
                                          "当前所在国家": {
                                              "type": "enum"
                                          },
                                          "当前城市": {
                                              "type": "string"
                                          },
                                          "当前公司": {
                                              "type": "string"
                                          },
                                          "当前职务": {
                                              "type": "string"
                                          },
                                          "个人简介": {
                                              "type": "string"
                                          },
                                          "手机号码保密等级": {
                                              "type": "enum"
                                          },
                                          "手机号码": {
                                              "type": "string"
                                          },
                                          "微信二维码保密等级": {
                                              "type": "enum"
                                          },
                                          "微信二维码": {
                                              "type": "string"
                                          },
                                          "阿里花名": {
                                              "type": "string"
                                          },
                                          "阿里工号": {
                                              "type": "string"
                                          },
                                          "阿里部门": {
                                              "type": "string"
                                          },
                                          "阿里职务": {
                                              "type": "string"
                                          },
                                          "阿里入职时间": {
                                              "type": "string"
                                          },
                                          "_阿里入职时间": {
                                              "type": "number"
                                          },
                                          "阿里离职时间": {
                                              "type": "string"
                                          },
                                          "_阿里离职时间": {
                                              "type": "number"
                                          },
                                          "阿里认证信息": {
                                              "type": "string"
                                          },
                                          "阿里认证审核状态": {
                                              "type": "enum"
                                          },
                                          "会员标签列表": {
                                              "type": "array",
                                              "items": {
                                                  "type": "object",
                                                  "properties": {
                                                      "id": {
                                                          "type": "number"
                                                      },
                                                      "用户": {
                                                          "type": "number"
                                                      },
                                                      "标签": {
                                                          "type": "number"
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  },
                                  "createTime": 1689766261994,
                                  "lastModifiedTime": 1689766333648
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_HwgI_": {
                      "def": {
                          "namespace": "mybricks.taro.formContainer",
                          "version": "1.0.1"
                      },
                      "title": "表单容器",
                      "model": {
                          "data": {
                              "useSubmitButton": true,
                              "submitButtonText": "确认报名",
                              "items": [
                                  {
                                      "id": "u_5z_gP",
                                      "comName": "u_Fq2Sj",
                                      "name": "真实姓名",
                                      "label": "真实姓名",
                                      "hidden": false,
                                      "rules": [
                                          {
                                              "_id": "0-arrayCheckbox-item",
                                              "key": "required",
                                              "status": true,
                                              "visible": true,
                                              "title": "必填",
                                              "message": "内容不能为空"
                                          }
                                      ]
                                  },
                                  {
                                      "id": "u_J6hEz",
                                      "comName": "u_YzBTB",
                                      "name": "阿里花名",
                                      "label": "阿里花名",
                                      "hidden": false,
                                      "rules": [
                                          {
                                              "_id": "0-arrayCheckbox-item",
                                              "key": "required",
                                              "status": true,
                                              "visible": true,
                                              "title": "必填",
                                              "message": "内容不能为空"
                                          }
                                      ]
                                  },
                                  {
                                      "id": "u_AeRFS",
                                      "comName": "u_2cCi5",
                                      "name": "当前职务",
                                      "label": "当前职务",
                                      "hidden": false,
                                      "rules": []
                                  },
                                  {
                                      "id": "u_QzsGS",
                                      "comName": "u_43uhO",
                                      "name": "阿里工号",
                                      "label": "阿里工号",
                                      "hidden": false,
                                      "rules": []
                                  },
                                  {
                                      "id": "u_CwplQ",
                                      "comName": "u_xn0ao",
                                      "name": "手机号码",
                                      "label": "手机号码",
                                      "hidden": false,
                                      "rules": [
                                          {
                                              "_id": "0-arrayCheckbox-item",
                                              "key": "required",
                                              "status": true,
                                              "visible": true,
                                              "title": "必填",
                                              "message": "内容不能为空"
                                          }
                                      ]
                                  },
                                  {
                                      "id": "u_WySmK",
                                      "comName": "u__eRsc",
                                      "name": "当前公司",
                                      "label": "当前公司",
                                      "hidden": false,
                                      "rules": []
                                  }
                              ],
                              "nameCount": 6
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onSubmit": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_DRq1Z",
                                          "title": "表单容器 > 提交数据输出"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "styleAry": [
                                  {
                                      "selector": ".mybricks-submit .taroify-button",
                                      "css": {
                                          "borderTopLeftRadius": "4px",
                                          "borderBottomLeftRadius": "4px",
                                          "borderBottomRightRadius": "4px",
                                          "borderTopRightRadius": "4px",
                                          "borderTopWidth": "0px",
                                          "borderRightWidth": "0px",
                                          "borderBottomWidth": "0px",
                                          "borderLeftWidth": "0px"
                                      }
                                  },
                                  {
                                      "selector": ".mybricks-field",
                                      "css": {
                                          "borderTopWidth": "1px",
                                          "borderRightWidth": "1px",
                                          "borderBottomWidth": "1px",
                                          "borderLeftWidth": "1px",
                                          "borderTopStyle": "solid",
                                          "borderRightStyle": "solid",
                                          "borderBottomStyle": "solid",
                                          "borderLeftStyle": "solid",
                                          "borderTopColor": "#e5e5e5",
                                          "borderRightColor": "#e5e5e5",
                                          "borderBottomColor": "#e5e5e5",
                                          "borderLeftColor": "#e5e5e5",
                                          "backgroundColor": "#fafafa"
                                      }
                                  }
                              ]
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setFieldsValue",
                          "getFieldsValue",
                          "submit",
                          "submitAndMerge",
                          "resetFields",
                          "setFormItemsProps",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "returnValues",
                          "onSubmit",
                          "onMergeSubmit",
                          "onReset"
                      ]
                  },
                  "u_5z_gP": {
                      "def": {
                          "namespace": "mybricks.taro.formInput",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_HwgI_",
                      "title": "单行输入",
                      "model": {
                          "data": {
                              "label": "单行输入",
                              "name": "单行输入",
                              "value": "",
                              "placeholder": "请输入内容",
                              "type": "text",
                              "disabled": false,
                              "required": false,
                              "hidden": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 12,
                              "styleAry": [
                                  {
                                      "selector": ".taroify-input",
                                      "css": {
                                          "borderTopWidth": "0px",
                                          "borderRightWidth": "0px",
                                          "borderBottomWidth": "0px",
                                          "borderLeftWidth": "0px",
                                          "borderTopStyle": "none",
                                          "borderRightStyle": "none",
                                          "borderBottomStyle": "none",
                                          "borderLeftStyle": "none"
                                      }
                                  }
                              ]
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_J6hEz": {
                      "def": {
                          "namespace": "mybricks.taro.formInput",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_HwgI_",
                      "title": "单行输入1",
                      "model": {
                          "data": {
                              "label": "单行输入",
                              "name": "单行输入",
                              "value": "",
                              "placeholder": "请输入内容",
                              "type": "text",
                              "disabled": false,
                              "required": false,
                              "hidden": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 12
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_AeRFS": {
                      "def": {
                          "namespace": "mybricks.taro.formInput",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_HwgI_",
                      "title": "单行输入2",
                      "model": {
                          "data": {
                              "label": "单行输入",
                              "name": "单行输入",
                              "value": "",
                              "placeholder": "请输入内容",
                              "type": "text",
                              "disabled": false,
                              "required": false,
                              "hidden": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 12,
                              "styleAry": [
                                  {
                                      "selector": ".taroify-input",
                                      "css": {
                                          "borderTopWidth": "0px",
                                          "borderRightWidth": "0px",
                                          "borderBottomWidth": "0px",
                                          "borderLeftWidth": "0px",
                                          "borderTopStyle": "none",
                                          "borderRightStyle": "none",
                                          "borderBottomStyle": "none",
                                          "borderLeftStyle": "none"
                                      }
                                  }
                              ]
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_QzsGS": {
                      "def": {
                          "namespace": "mybricks.taro.formInput",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_HwgI_",
                      "title": "单行输入3",
                      "model": {
                          "data": {
                              "label": "单行输入",
                              "name": "单行输入",
                              "value": "",
                              "placeholder": "请输入内容",
                              "type": "text",
                              "disabled": false,
                              "required": false,
                              "hidden": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 12
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_CwplQ": {
                      "def": {
                          "namespace": "mybricks.taro.formInput",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_HwgI_",
                      "title": "单行输入4",
                      "model": {
                          "data": {
                              "label": "单行输入",
                              "name": "单行输入",
                              "value": "",
                              "placeholder": "请输入内容",
                              "type": "text",
                              "disabled": false,
                              "required": false,
                              "hidden": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 12
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_WySmK": {
                      "def": {
                          "namespace": "mybricks.taro.formInput",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_HwgI_",
                      "title": "单行输入5",
                      "model": {
                          "data": {
                              "label": "单行输入",
                              "name": "单行输入",
                              "value": "",
                              "placeholder": "请输入内容",
                              "type": "text",
                              "disabled": false,
                              "required": false,
                              "hidden": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 12
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_iOoaF": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "服务接口3",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_sjbtya",
                                  "title": "C端-更新会员信息",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "id": {
                                              "type": "string"
                                          },
                                          "头像": {
                                              "type": "string"
                                          },
                                          "昵称": {
                                              "type": "string"
                                          },
                                          "真实姓名": {
                                              "type": "string"
                                          },
                                          "性别保密等级": {
                                              "type": "enum",
                                              "items": [
                                                  {
                                                      "type": "string",
                                                      "value": "公开"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "组织内可见"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "保密"
                                                  }
                                              ]
                                          },
                                          "性别": {
                                              "type": "string"
                                          },
                                          "当前城市": {
                                              "type": "string"
                                          },
                                          "当前职务": {
                                              "type": "string"
                                          },
                                          "个人简介": {
                                              "type": "string"
                                          },
                                          "手机号码保密等级": {
                                              "type": "enum",
                                              "items": [
                                                  {
                                                      "type": "string",
                                                      "value": "公开"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "组织内可见"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "保密"
                                                  }
                                              ]
                                          },
                                          "手机号码": {
                                              "type": "string"
                                          },
                                          "微信二维码保密等级": {
                                              "type": "enum",
                                              "items": [
                                                  {
                                                      "type": "string",
                                                      "value": "公开"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "组织内可见"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "保密"
                                                  }
                                              ]
                                          },
                                          "微信二维码": {
                                              "type": "string"
                                          },
                                          "阿里花名": {
                                              "type": "string"
                                          },
                                          "阿里工号": {
                                              "type": "string"
                                          },
                                          "阿里部门": {
                                              "type": "string"
                                          },
                                          "阿里职务": {
                                              "type": "string"
                                          },
                                          "阿里入职时间": {
                                              "type": "number"
                                          },
                                          "阿里离职时间": {
                                              "type": "number"
                                          },
                                          "阿里认证信息": {
                                              "type": "string"
                                          },
                                          "阿里认证审核状态": {
                                              "type": "enum",
                                              "items": [
                                                  {
                                                      "type": "string",
                                                      "value": "待审核"
                                                  }
                                              ]
                                          },
                                          "真实姓名保密等级": {
                                              "type": "enum",
                                              "items": [
                                                  {
                                                      "type": "string",
                                                      "value": "公开"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "组织内可见"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "保密"
                                                  }
                                              ]
                                          },
                                          "当前所在国家": {
                                              "type": "enum",
                                              "items": [
                                                  {
                                                      "type": "string",
                                                      "value": "国内"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "海外"
                                                  }
                                              ]
                                          },
                                          "当前公司": {
                                              "type": "string"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "follow",
                                      "editable": true
                                  },
                                  "createTime": 1689766261992,
                                  "lastModifiedTime": 1689766319159
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_0NuLi": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "服务接口4",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_jdikkh",
                                  "title": "C端-活动报名",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "loginUserId": {
                                              "type": "number"
                                          },
                                          "id": {
                                              "type": "number"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "string"
                                  },
                                  "createTime": 1689766261992,
                                  "lastModifiedTime": 1689766312480
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_s5EBs": {
                      "def": {
                          "namespace": "mybricks.taro._showToast",
                          "version": "1.0.1",
                          "rtType": "js"
                      },
                      "title": "显示 Toast",
                      "model": {
                          "data": {
                              "title": "报名成功",
                              "duration": 1000,
                              "icon": "none",
                              "mask": false,
                              "dynamic": false,
                              "id": "u_b365rs"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "showToast"
                      ],
                      "outputs": [
                          "afterShowToast"
                      ]
                  },
                  "u_r_hNk": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "服务接口5",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_tsaxcj",
                                  "title": "C端-查询活动信息",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "id": {
                                              "type": "number"
                                          },
                                          "loginUserId": {
                                              "type": "number"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "我的状态": {
                                              "type": "string"
                                          }
                                      }
                                  },
                                  "createTime": 1689766261992,
                                  "lastModifiedTime": 1689766304792
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_J_prE": {
                      "def": {
                          "namespace": "mybricks.taro._showLoading",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "显示 Loading",
                      "model": {
                          "data": {
                              "title": "报名中",
                              "mask": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "showLoading"
                      ],
                      "outputs": [
                          "afterShowLoading"
                      ]
                  }
              },
              "id": "u_3bOAH",
              "title": "活动详情",
              "comsAutoRun": {},
              "_inputs": [],
              "_outputs": [],
              "inputs": [
                  {
                      "id": "open",
                      "title": "打开",
                      "type": "normal",
                      "schema": {
                          "type": "object",
                          "editable": true
                      }
                  }
              ],
              "outputs": [
                  {
                      "id": "onShow",
                      "title": "页面显示",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  },
                  {
                      "id": "onHide",
                      "title": "页面隐藏",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  }
              ],
              "cons": {
                  "_rootFrame_-open": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_y_tzb",
                          "comId": "u_19XFX",
                          "def": {
                              "namespace": "mybricks.core-comlib.var",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "set",
                          "pinType": "normal",
                          "direction": "input"
                      },
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_oCGgX",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      },
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u__NBfZ",
                          "def": {
                              "namespace": "mybricks.taro._getUserInfo",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "get",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_19XFX-return": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_upWha",
                          "comId": "u_0NuLi",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      },
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_dvnx2",
                          "comId": "u_r_hNk",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_oCGgX-then": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_4vMx8",
                          "comId": "u_flWrP",
                          "def": {
                              "namespace": "mybricks.taro.activityDetail",
                              "version": "1.0.3"
                          },
                          "pinId": "value",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_flWrP-onSignup": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_TthPL",
                          "comId": "u_Gdght",
                          "def": {
                              "namespace": "mybricks.taro._getUserInfo",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "get",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_Gdght-onSuccess": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_wTH_z",
                          "comId": "u_rImyP",
                          "def": {
                              "namespace": "mybricks.taro.popup",
                              "version": "1.0.0"
                          },
                          "pinId": "onShow",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_Gdght-onFail": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_Pq2PR",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_TEgGE-then": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_p8EVA",
                          "comId": "u_rImyP",
                          "def": {
                              "namespace": "mybricks.taro.popup",
                              "version": "1.0.0"
                          },
                          "pinId": "onShow",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u__NBfZ-onSuccess": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_F5sTN",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_HwgI_-onSubmit": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_MWxsi",
                          "comId": "u_iOoaF",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      },
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_MWxsi",
                          "comId": "u_J_prE",
                          "def": {
                              "namespace": "mybricks.taro._showLoading",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "showLoading",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_0NuLi-then": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_dvnx2",
                          "comId": "u_19XFX",
                          "def": {
                              "namespace": "mybricks.core-comlib.var",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "get",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_s5EBs-afterShowToast": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u__hOYl",
                          "comId": "u_rImyP",
                          "def": {
                              "namespace": "mybricks.taro.popup",
                              "version": "1.0.0"
                          },
                          "pinId": "onHide",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_r_hNk-then": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_eOQdF",
                          "comId": "u_flWrP",
                          "def": {
                              "namespace": "mybricks.taro.activityDetail",
                              "version": "1.0.3"
                          },
                          "pinId": "value",
                          "pinType": "normal",
                          "direction": "input"
                      },
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_s5EBs",
                          "def": {
                              "namespace": "mybricks.taro._showToast",
                              "version": "1.0.1",
                              "rtType": "js"
                          },
                          "pinId": "showToast",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_J_prE-afterShowLoading": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_upWha",
                          "comId": "u_19XFX",
                          "def": {
                              "namespace": "mybricks.core-comlib.var",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "get",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ]
              },
              "pinRels": {
                  "u_19XFX-get": [
                      "return"
                  ],
                  "u_oCGgX-call": [
                      "then",
                      "catch"
                  ],
                  "u_TEgGE-call": [
                      "then",
                      "catch"
                  ],
                  "u_F5sTN-call": [
                      "then",
                      "catch"
                  ],
                  "u_HwgI_-getFieldsValue": [
                      "returnValues"
                  ],
                  "u_HwgI_-submit": [
                      "onSubmit"
                  ],
                  "u_HwgI_-submitAndMerge": [
                      "onMergeSubmit"
                  ],
                  "u_HwgI_-resetFields": [
                      "onReset"
                  ],
                  "u_5z_gP-validate": [
                      "returnValidate"
                  ],
                  "u_5z_gP-getValue": [
                      "returnValue"
                  ],
                  "u_J6hEz-validate": [
                      "returnValidate"
                  ],
                  "u_J6hEz-getValue": [
                      "returnValue"
                  ],
                  "u_AeRFS-validate": [
                      "returnValidate"
                  ],
                  "u_AeRFS-getValue": [
                      "returnValue"
                  ],
                  "u_QzsGS-validate": [
                      "returnValidate"
                  ],
                  "u_QzsGS-getValue": [
                      "returnValue"
                  ],
                  "u_CwplQ-validate": [
                      "returnValidate"
                  ],
                  "u_CwplQ-getValue": [
                      "returnValue"
                  ],
                  "u_WySmK-validate": [
                      "returnValidate"
                  ],
                  "u_WySmK-getValue": [
                      "returnValue"
                  ],
                  "u_iOoaF-call": [
                      "then",
                      "catch"
                  ],
                  "u_0NuLi-call": [
                      "then",
                      "catch"
                  ],
                  "u_r_hNk-call": [
                      "then",
                      "catch"
                  ]
              },
              "pinProxies": {
                  "u_Pq2PR-_open": {
                      "type": "frame",
                      "frameId": "login",
                      "pinId": "open"
                  }
              },
              "pinValueProxies": {},
              "slot": {
                  "id": "u_3bOAH",
                  "title": "活动详情",
                  "comAry": [
                      {
                          "id": "u_xZlig",
                          "name": "u_oK7Fu",
                          "def": {
                              "namespace": "mybricks.taro.systemPage",
                              "version": "1.0.0"
                          },
                          "slots": {
                              "content": {
                                  "id": "content",
                                  "title": "内容",
                                  "comAry": [
                                      {
                                          "id": "u_flWrP",
                                          "name": "u_3aJim",
                                          "def": {
                                              "namespace": "mybricks.taro.activityDetail",
                                              "version": "1.0.3"
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              }
                          }
                      },
                      {
                          "id": "u_rImyP",
                          "name": "u_rJGFT",
                          "def": {
                              "namespace": "mybricks.taro.popup",
                              "version": "1.0.0"
                          },
                          "slots": {
                              "content": {
                                  "id": "content",
                                  "title": "内容",
                                  "comAry": [
                                      {
                                          "id": "u_Etdbs",
                                          "name": "u_b6OIa",
                                          "def": {
                                              "namespace": "mybricks.taro.containerGrid",
                                              "version": "1.0.0"
                                          },
                                          "slots": {
                                              "col0": {
                                                  "id": "col0",
                                                  "title": "列（横向排列）",
                                                  "comAry": [
                                                      {
                                                          "id": "u_aHz9G",
                                                          "name": "u_zbT75",
                                                          "def": {
                                                              "namespace": "mybricks.taro.image",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_KaiPf",
                                                          "name": "u_cnpso",
                                                          "def": {
                                                              "namespace": "mybricks.taro.text",
                                                              "version": "1.0.0"
                                                          }
                                                      }
                                                  ],
                                                  "style": {
                                                      "layout": "flex-row",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      },
                                      {
                                          "id": "u_HwgI_",
                                          "name": "u_H_rol",
                                          "def": {
                                              "namespace": "mybricks.taro.formContainer",
                                              "version": "1.0.1"
                                          },
                                          "slots": {
                                              "content": {
                                                  "id": "content",
                                                  "title": "表单容器",
                                                  "type": "scope",
                                                  "comAry": [
                                                      {
                                                          "id": "u_5z_gP",
                                                          "name": "u_Fq2Sj",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formInput",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_J6hEz",
                                                          "name": "u_YzBTB",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formInput",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_QzsGS",
                                                          "name": "u_43uhO",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formInput",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_CwplQ",
                                                          "name": "u_xn0ao",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formInput",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_WySmK",
                                                          "name": "u__eRsc",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formInput",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_AeRFS",
                                                          "name": "u_2cCi5",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formInput",
                                                              "version": "1.0.0"
                                                          }
                                                      }
                                                  ],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      },
                                      {
                                          "id": "u_dBVE7",
                                          "name": "u_ISY82",
                                          "def": {
                                              "namespace": "mybricks.taro.safeArea",
                                              "version": "1.0.0"
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              }
                          }
                      }
                  ],
                  "style": {
                      "left": 0,
                      "top": 0,
                      "layout": "flex-column",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start"
                  }
              }
          }
      },
      {
          "pagePath": "pages/u_9ffYc/index",
          "pageConfig": {
              "navigationStyle": "custom"
          },
          "pageToJson": {
              "-v": "1.0.9",
              "deps": [
                  {
                      "namespace": "mybricks.taro.systemPage",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.searchBar",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.containerList",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.groupCard",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.core-comlib.scenes",
                      "version": "1.0.0",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.core-comlib.fn",
                      "version": "1.0.0",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.taro.image",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro._muilt-inputJs",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  },
                  {
                      "namespace": "mybricks.taro._connector",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  }
              ],
              "coms": {
                  "u_ylBS9": {
                      "def": {
                          "namespace": "mybricks.taro.systemPage",
                          "version": "1.0.0"
                      },
                      "title": "页面",
                      "model": {
                          "data": {
                              "useNavigationStyle": "custom",
                              "navigationStyle": "custom",
                              "navigationBarBackgroundColor": "#464646",
                              "navigationBarTextStyle": "black",
                              "navigationBarTitleText": "Mybricks",
                              "homeButton": false,
                              "customNavigation": {
                                  "style": {
                                      "background": "url() center top / 100% 100% no-repeat,rgba(255,255,255,1)",
                                      "styleEditorUnfold": true
                                  },
                                  "useFixed": true
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [],
                      "outputs": []
                  },
                  "u_JuoCJ": {
                      "def": {
                          "namespace": "mybricks.taro.searchBar",
                          "version": "1.0.0"
                      },
                      "title": "搜索框",
                      "model": {
                          "data": {
                              "placeholderText": "搜索社群名称",
                              "searchBarStyle": {
                                  "background": "#f4f5f7",
                                  "borderRadius": "30px"
                              },
                              "label": "",
                              "disabled": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onClear": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_O6Ag0",
                                          "title": "搜索框 > 点击清除按钮时"
                                      },
                                      "active": true
                                  }
                              ],
                              "onSearch": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_Vgx72",
                                          "title": "搜索框 > 当触发搜索时"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 12,
                              "marginBottom": 12,
                              "marginLeft": 12,
                              "marginRight": 12,
                              "styleAry": [
                                  {
                                      "selector": ".mybricks-searchBar",
                                      "css": {
                                          "borderTopLeftRadius": "18px",
                                          "borderBottomLeftRadius": "18px",
                                          "borderBottomRightRadius": "18px",
                                          "borderTopRightRadius": "18px"
                                      }
                                  }
                              ]
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onChange",
                          "onClear",
                          "onCancel",
                          "onSearch"
                      ]
                  },
                  "u_qpZc2": {
                      "def": {
                          "namespace": "mybricks.taro.containerList",
                          "version": "1.0.0"
                      },
                      "title": "列表容器",
                      "model": {
                          "data": {
                              "useLoading": true,
                              "loadingTip": "加载中...",
                              "errorTip": "加载失败，请重试",
                              "emptyTip": "没有更多了",
                              "scrollRefresh": false,
                              "pullRefresh": false,
                              "grid": {
                                  "column": 0,
                                  "gutter": [
                                      8,
                                      8
                                  ]
                              },
                              "rowKey": "id"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "refreshDataSource",
                          "addDataSource",
                          "loading",
                          "noMore",
                          "error",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onScrollLoad",
                          "onRefresh"
                      ]
                  },
                  "u_we_mn": {
                      "def": {
                          "namespace": "mybricks.taro.groupCard",
                          "version": "1.0.0"
                      },
                      "frameId": "item",
                      "parentComId": "u_qpZc2",
                      "title": "组织卡片",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_6wzWs",
                                          "title": "组织卡片 > 单击"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 6,
                              "marginRight": 12,
                              "marginBottom": 6,
                              "marginLeft": 12
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setDatasource",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_TsZle": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "frameId": "item",
                      "parentComId": "u_qpZc2",
                      "title": "社群详情",
                      "model": {
                          "data": {
                              "_sceneId": "u_O6zka",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u_osnBU": {
                      "def": {
                          "namespace": "mybricks.core-comlib.fn",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "刷新列表",
                      "model": {
                          "data": {},
                          "inputAry": [
                              {
                                  "hostId": "param0",
                                  "title": "输入项",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "param0"
                      ],
                      "outputs": []
                  },
                  "u_l19Ys": {
                      "def": {
                          "namespace": "mybricks.core-comlib.fn",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "刷新列表",
                      "model": {
                          "data": {},
                          "inputAry": [
                              {
                                  "hostId": "param0",
                                  "title": "输入项",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "param0"
                      ],
                      "outputs": []
                  },
                  "u_O_khB": {
                      "def": {
                          "namespace": "mybricks.core-comlib.fn",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "刷新列表",
                      "model": {
                          "data": {},
                          "inputAry": [
                              {
                                  "hostId": "param0",
                                  "title": "输入项",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "param0"
                      ],
                      "outputs": []
                  },
                  "u_x76jx": {
                      "def": {
                          "namespace": "mybricks.taro.image",
                          "version": "1.0.0"
                      },
                      "title": "图片",
                      "model": {
                          "data": {
                              "src": "https://admin.alialumni.com/mfs/Ini2cKRD3PErNEK82E81qYaDJ22UrffD-1689231348651.png",
                              "mode": "aspectFill",
                              "loadSmooth": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onLoad": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onError": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": 87,
                              "height": 26
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setSrc",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onLoad",
                          "onError"
                      ]
                  },
                  "u_5dlPd": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "u_ydOI_",
                      "title": "JS计算",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0"
                      ]
                  },
                  "u_ySk67": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "u_ydOI_",
                      "title": "服务接口",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_yjdyci",
                                  "title": "C端-查询组织列表",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "组织名称": {
                                              "type": "string"
                                          },
                                          "loginUserId": {
                                              "type": "string"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "any"
                                  },
                                  "createTime": 1689766261993,
                                  "lastModifiedTime": 1689766324448
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_Xo4CV": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "u_ydOI_",
                      "title": "JS计算2",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [
                              {
                                  "hostId": "output1",
                                  "title": "输出项1",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0",
                          "output1"
                      ]
                  }
              },
              "id": "u_9ffYc",
              "title": "加入社群",
              "comsAutoRun": {},
              "_inputs": [],
              "_outputs": [],
              "inputs": [
                  {
                      "id": "open",
                      "title": "打开",
                      "type": "normal",
                      "schema": {
                          "type": "object",
                          "editable": true
                      }
                  }
              ],
              "outputs": [
                  {
                      "id": "onShow",
                      "title": "页面显示",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  },
                  {
                      "id": "onHide",
                      "title": "页面隐藏",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  }
              ],
              "cons": {
                  "_rootFrame_-open": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_osnBU",
                          "def": {
                              "namespace": "mybricks.core-comlib.fn",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "param0",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_JuoCJ-onClear": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_eYGVv",
                          "comId": "u_l19Ys",
                          "def": {
                              "namespace": "mybricks.core-comlib.fn",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "param0",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_JuoCJ-onSearch": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_vF3YR",
                          "comId": "u_O_khB",
                          "def": {
                              "namespace": "mybricks.core-comlib.fn",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "param0",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_qpZc2-item-itemData": [
                      {
                          "type": "com",
                          "frameKey": "u_qpZc2-item",
                          "finishPinParentKey": "u_518lQ",
                          "comId": "u_we_mn",
                          "def": {
                              "namespace": "mybricks.taro.groupCard",
                              "version": "1.0.0"
                          },
                          "pinId": "setDatasource",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_we_mn-onClick": [
                      {
                          "type": "com",
                          "frameKey": "u_qpZc2-item",
                          "startPinParentKey": "u_1YPwI",
                          "comId": "u_TsZle",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_ydOI_-param0": [
                      {
                          "type": "com",
                          "frameKey": "u_ydOI_",
                          "comId": "u_5dlPd",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_5dlPd-output0": [
                      {
                          "type": "com",
                          "frameKey": "u_ydOI_",
                          "comId": "u_ySk67",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_ySk67-then": [
                      {
                          "type": "com",
                          "frameKey": "u_ydOI_",
                          "comId": "u_Xo4CV",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_Xo4CV-output0": [
                      {
                          "type": "com",
                          "frameKey": "u_ydOI_",
                          "finishPinParentKey": "u_ZotDu",
                          "comId": "u_qpZc2",
                          "def": {
                              "namespace": "mybricks.taro.containerList",
                              "version": "1.0.0"
                          },
                          "pinId": "refreshDataSource",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_Xo4CV-output1": [
                      {
                          "type": "com",
                          "frameKey": "u_ydOI_",
                          "finishPinParentKey": "u_bs9dx",
                          "comId": "u_qpZc2",
                          "def": {
                              "namespace": "mybricks.taro.containerList",
                              "version": "1.0.0"
                          },
                          "pinId": "noMore",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ]
              },
              "pinRels": {
                  "u_ySk67-call": [
                      "then",
                      "catch"
                  ]
              },
              "pinProxies": {
                  "u_TsZle-_open": {
                      "type": "frame",
                      "frameId": "u_O6zka",
                      "pinId": "open"
                  },
                  "u_osnBU-param0": {
                      "type": "frame",
                      "frameId": "u_ydOI_",
                      "pinId": "param0"
                  },
                  "u_l19Ys-param0": {
                      "type": "frame",
                      "frameId": "u_ydOI_",
                      "pinId": "param0"
                  },
                  "u_O_khB-param0": {
                      "type": "frame",
                      "frameId": "u_ydOI_",
                      "pinId": "param0"
                  }
              },
              "pinValueProxies": {},
              "slot": {
                  "id": "u_9ffYc",
                  "title": "加入社群",
                  "comAry": [
                      {
                          "id": "u_ylBS9",
                          "name": "u_WO59D",
                          "def": {
                              "namespace": "mybricks.taro.systemPage",
                              "version": "1.0.0"
                          },
                          "slots": {
                              "content": {
                                  "id": "content",
                                  "title": "内容",
                                  "comAry": [
                                      {
                                          "id": "u_JuoCJ",
                                          "name": "u_fkKX_",
                                          "def": {
                                              "namespace": "mybricks.taro.searchBar",
                                              "version": "1.0.0"
                                          }
                                      },
                                      {
                                          "id": "u_qpZc2",
                                          "name": "u_gSVFJ",
                                          "def": {
                                              "namespace": "mybricks.taro.containerList",
                                              "version": "1.0.0"
                                          },
                                          "slots": {
                                              "item": {
                                                  "id": "item",
                                                  "title": "列表项",
                                                  "type": "scope",
                                                  "comAry": [
                                                      {
                                                          "id": "u_we_mn",
                                                          "name": "u_l8RqN",
                                                          "def": {
                                                              "namespace": "mybricks.taro.groupCard",
                                                              "version": "1.0.0"
                                                          }
                                                      }
                                                  ],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              },
                              "mainSlot": {
                                  "id": "mainSlot",
                                  "title": "导航栏主区域",
                                  "comAry": [],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              },
                              "leftSlot": {
                                  "id": "leftSlot",
                                  "title": "导航栏左区域",
                                  "comAry": [
                                      {
                                          "id": "u_x76jx",
                                          "name": "u_GZz8Q",
                                          "def": {
                                              "namespace": "mybricks.taro.image",
                                              "version": "1.0.0"
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              }
                          }
                      }
                  ],
                  "style": {
                      "left": 0,
                      "top": 0,
                      "layout": "flex-column",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start"
                  }
              }
          }
      },
      {
          "pagePath": "pages/u_O6zka/index",
          "pageConfig": {
              "navigationStyle": "default",
              "navigationBarBackgroundColor": "#ffffff",
              "navigationBarTextStyle": "black",
              "navigationBarTitleText": "青橙会"
          },
          "pageToJson": {
              "-v": "1.0.9",
              "deps": [
                  {
                      "namespace": "mybricks.taro.systemPage",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.groupDetail",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.core-comlib.var",
                      "version": "1.0.0",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.taro._connector",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  },
                  {
                      "namespace": "mybricks.taro._getUserInfo",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  },
                  {
                      "namespace": "mybricks.core-comlib.scenes",
                      "version": "1.0.0",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.taro._muilt-inputJs",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  },
                  {
                      "namespace": "mybricks.taro._showToast",
                      "version": "1.0.1",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.taro._modal",
                      "version": "1.0.0",
                      "rtType": "js"
                  }
              ],
              "coms": {
                  "u_T2eGk": {
                      "def": {
                          "namespace": "mybricks.taro.systemPage",
                          "version": "1.0.0"
                      },
                      "title": "页面",
                      "model": {
                          "data": {
                              "useNavigationStyle": "default",
                              "navigationStyle": "default",
                              "navigationBarBackgroundColor": "rgba(255,255,255,1)",
                              "navigationBarTextStyle": "black",
                              "navigationBarTitleText": "青橙会",
                              "homeButton": false,
                              "customNavigation": {
                                  "style": {
                                      "background": "#464646"
                                  },
                                  "useFixed": true
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [],
                      "outputs": []
                  },
                  "u_WSMf3": {
                      "def": {
                          "namespace": "mybricks.taro.groupDetail",
                          "version": "1.0.0"
                      },
                      "title": "组织详情",
                      "model": {
                          "data": {
                              "useBanner": true,
                              "useFooter": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onApplyGroup": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_raQd2",
                                          "title": "组织详情 > 加入组织"
                                      },
                                      "active": true
                                  }
                              ],
                              "onQuitGroup": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_JBGXt",
                                          "title": "组织详情 > 退出组织"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setDataSource",
                          "status",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onApplyGroup",
                          "onQuitGroup"
                      ]
                  },
                  "u_i18KQ": {
                      "def": {
                          "namespace": "mybricks.core-comlib.var",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "参数",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "get",
                          "set",
                          "reset"
                      ],
                      "outputs": [
                          "return",
                          "changed"
                      ]
                  },
                  "u_YB3Ma": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "服务接口",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_jbnnkc",
                                  "title": "C端-查询组织信息",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "id": {
                                              "type": "string"
                                          },
                                          "loginUserId": {
                                              "type": "string"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "成员列表": {
                                              "type": "any"
                                          },
                                          "我的状态": {
                                              "type": "boolean"
                                          }
                                      }
                                  },
                                  "createTime": 1689766261995,
                                  "lastModifiedTime": 1689766363745
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_38qYI": {
                      "def": {
                          "namespace": "mybricks.taro._getUserInfo",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "登录用户信息",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "get"
                      ],
                      "outputs": [
                          "onSuccess",
                          "onFail"
                      ]
                  },
                  "u_L1yvp": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "登录",
                      "model": {
                          "data": {
                              "_sceneId": "login",
                              "_sceneShowType": "normal",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u_Xkh99": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "服务接口1",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_bwazis",
                                  "title": "C端-查询登录会员信息",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "loginUserId": {
                                              "type": "string"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "id": {
                                              "type": "number"
                                          },
                                          "openid": {
                                              "type": "string"
                                          },
                                          "头像": {
                                              "type": "string"
                                          },
                                          "昵称": {
                                              "type": "string"
                                          },
                                          "真实姓名保密等级": {
                                              "type": "enum"
                                          },
                                          "真实姓名": {
                                              "type": "string"
                                          },
                                          "性别保密等级": {
                                              "type": "enum"
                                          },
                                          "性别": {
                                              "type": "enum"
                                          },
                                          "当前所在国家": {
                                              "type": "enum"
                                          },
                                          "当前城市": {
                                              "type": "string"
                                          },
                                          "当前公司": {
                                              "type": "string"
                                          },
                                          "当前职务": {
                                              "type": "string"
                                          },
                                          "个人简介": {
                                              "type": "string"
                                          },
                                          "手机号码保密等级": {
                                              "type": "enum"
                                          },
                                          "手机号码": {
                                              "type": "string"
                                          },
                                          "微信二维码保密等级": {
                                              "type": "enum"
                                          },
                                          "微信二维码": {
                                              "type": "string"
                                          },
                                          "阿里花名": {
                                              "type": "string"
                                          },
                                          "阿里工号": {
                                              "type": "string"
                                          },
                                          "阿里部门": {
                                              "type": "string"
                                          },
                                          "阿里职务": {
                                              "type": "string"
                                          },
                                          "阿里入职时间": {
                                              "type": "string"
                                          },
                                          "_阿里入职时间": {
                                              "type": "number"
                                          },
                                          "阿里离职时间": {
                                              "type": "string"
                                          },
                                          "_阿里离职时间": {
                                              "type": "number"
                                          },
                                          "阿里认证信息": {
                                              "type": "string"
                                          },
                                          "阿里认证审核状态": {
                                              "type": "enum"
                                          },
                                          "会员标签列表": {
                                              "type": "array",
                                              "items": {
                                                  "type": "object",
                                                  "properties": {
                                                      "id": {
                                                          "type": "number"
                                                      },
                                                      "用户": {
                                                          "type": "number"
                                                      },
                                                      "标签": {
                                                          "type": "number"
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  },
                                  "createTime": 1689766261994,
                                  "lastModifiedTime": 1689766333648
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_kHssp": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "JS计算",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [
                              {
                                  "hostId": "output1",
                                  "title": "输出项1",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0",
                          "output1"
                      ]
                  },
                  "u_FGEHW": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "服务接口2",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_tjhfmk",
                                  "title": "C端-申请加入组织",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "申请理由": {
                                              "type": "string"
                                          },
                                          "id": {
                                              "type": "number"
                                          },
                                          "loginUserId": {
                                              "type": "number"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "string"
                                  },
                                  "createTime": 1689766261995,
                                  "lastModifiedTime": 1689766359516
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_7rPE6": {
                      "def": {
                          "namespace": "mybricks.taro._showToast",
                          "version": "1.0.1",
                          "rtType": "js"
                      },
                      "title": "显示 Toast",
                      "model": {
                          "data": {
                              "title": "加入成功",
                              "duration": 1000,
                              "icon": "success",
                              "mask": false,
                              "dynamic": false,
                              "id": "u_d4wtmx"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "showToast"
                      ],
                      "outputs": [
                          "afterShowToast"
                      ]
                  },
                  "u_D8Agt": {
                      "def": {
                          "namespace": "mybricks.taro._modal",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "模态对话框",
                      "model": {
                          "data": {
                              "title": "需要通过阿里同学认证",
                              "content": "是否立即前往认证",
                              "showCancel": true,
                              "cancelColor": "",
                              "cancelText": "暂不认证",
                              "confirmColor": "",
                              "confirmText": "立即前往"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onConfirm": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onCancel": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "show"
                      ],
                      "outputs": [
                          "onConfirm",
                          "onCancel"
                      ]
                  },
                  "u_1XL2K": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "阿里认证",
                      "model": {
                          "data": {
                              "_sceneId": "u_HWdH2",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u_qZhCn": {
                      "def": {
                          "namespace": "mybricks.taro._modal",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "模态对话框1",
                      "model": {
                          "data": {
                              "title": "确认退出社群吗",
                              "content": "",
                              "showCancel": true,
                              "cancelColor": "",
                              "cancelText": "再想想",
                              "confirmColor": "",
                              "confirmText": "确认退出"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onConfirm": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onCancel": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "show"
                      ],
                      "outputs": [
                          "onConfirm",
                          "onCancel"
                      ]
                  },
                  "u_TBxZN": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "服务接口3",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_sezhjz",
                                  "title": "C端-退出组织",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "id": {
                                              "type": "number"
                                          },
                                          "loginUserId": {
                                              "type": "number"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "follow",
                                      "editable": true
                                  },
                                  "createTime": 1689766261994,
                                  "lastModifiedTime": 1689766338998
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_kxhMp": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "JS计算1",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0"
                      ]
                  }
              },
              "id": "u_O6zka",
              "title": "社群详情",
              "comsAutoRun": {},
              "_inputs": [],
              "_outputs": [],
              "inputs": [
                  {
                      "id": "open",
                      "title": "打开",
                      "type": "normal",
                      "schema": {
                          "type": "object",
                          "editable": true
                      }
                  }
              ],
              "outputs": [
                  {
                      "id": "onShow",
                      "title": "页面显示",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  },
                  {
                      "id": "onHide",
                      "title": "页面隐藏",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  }
              ],
              "cons": {
                  "_rootFrame_-open": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_j5pEW",
                          "comId": "u_i18KQ",
                          "def": {
                              "namespace": "mybricks.core-comlib.var",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "set",
                          "pinType": "normal",
                          "direction": "input"
                      },
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_YB3Ma",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_WSMf3-onApplyGroup": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_QMXVa",
                          "comId": "u_38qYI",
                          "def": {
                              "namespace": "mybricks.taro._getUserInfo",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "get",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_WSMf3-onQuitGroup": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_J5CmR",
                          "comId": "u_qZhCn",
                          "def": {
                              "namespace": "mybricks.taro._modal",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "show",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_i18KQ-return": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_IXijF",
                          "comId": "u_FGEHW",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_YB3Ma-then": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_yGU8q",
                          "comId": "u_WSMf3",
                          "def": {
                              "namespace": "mybricks.taro.groupDetail",
                              "version": "1.0.0"
                          },
                          "pinId": "setDataSource",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_38qYI-onSuccess": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_Xkh99",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_38qYI-onFail": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_L1yvp",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_Xkh99-then": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_kHssp",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_kHssp-output0": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_IXijF",
                          "comId": "u_i18KQ",
                          "def": {
                              "namespace": "mybricks.core-comlib.var",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "get",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_kHssp-output1": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_D8Agt",
                          "def": {
                              "namespace": "mybricks.taro._modal",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "show",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_FGEHW-then": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_qwoZ_",
                          "comId": "u_WSMf3",
                          "def": {
                              "namespace": "mybricks.taro.groupDetail",
                              "version": "1.0.0"
                          },
                          "pinId": "status",
                          "pinType": "normal",
                          "direction": "input"
                      },
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_7rPE6",
                          "def": {
                              "namespace": "mybricks.taro._showToast",
                              "version": "1.0.1",
                              "rtType": "js"
                          },
                          "pinId": "showToast",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_D8Agt-onConfirm": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_1XL2K",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_qZhCn-onConfirm": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_TBxZN",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_TBxZN-then": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_kxhMp",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_kxhMp-output0": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_nIoCX",
                          "comId": "u_WSMf3",
                          "def": {
                              "namespace": "mybricks.taro.groupDetail",
                              "version": "1.0.0"
                          },
                          "pinId": "status",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ]
              },
              "pinRels": {
                  "u_i18KQ-get": [
                      "return"
                  ],
                  "u_YB3Ma-call": [
                      "then",
                      "catch"
                  ],
                  "u_Xkh99-call": [
                      "then",
                      "catch"
                  ],
                  "u_FGEHW-call": [
                      "then",
                      "catch"
                  ],
                  "u_TBxZN-call": [
                      "then",
                      "catch"
                  ]
              },
              "pinProxies": {
                  "u_L1yvp-_open": {
                      "type": "frame",
                      "frameId": "login",
                      "pinId": "open"
                  },
                  "u_1XL2K-_open": {
                      "type": "frame",
                      "frameId": "u_HWdH2",
                      "pinId": "open"
                  }
              },
              "pinValueProxies": {},
              "slot": {
                  "id": "u_O6zka",
                  "title": "社群详情",
                  "comAry": [
                      {
                          "id": "u_T2eGk",
                          "name": "u_SbiuQ",
                          "def": {
                              "namespace": "mybricks.taro.systemPage",
                              "version": "1.0.0"
                          },
                          "slots": {
                              "content": {
                                  "id": "content",
                                  "title": "内容",
                                  "comAry": [
                                      {
                                          "id": "u_WSMf3",
                                          "name": "u_61zuB",
                                          "def": {
                                              "namespace": "mybricks.taro.groupDetail",
                                              "version": "1.0.0"
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              }
                          }
                      }
                  ],
                  "style": {
                      "left": 0,
                      "top": 0,
                      "layout": "flex-column",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start"
                  }
              }
          }
      },
      {
          "pagePath": "pages/u_79HX_/index",
          "pageConfig": {
              "navigationStyle": "custom"
          },
          "pageToJson": {
              "-v": "1.0.9",
              "deps": [
                  {
                      "namespace": "mybricks.taro.systemPage",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.searchBar",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.containerList",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.containerGrid",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.image",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.text",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro._muilt-inputJs",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  },
                  {
                      "namespace": "mybricks.core-comlib.frame-input",
                      "version": "1.0.0",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.core-comlib.scenes",
                      "version": "1.0.0",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.core-comlib.fn",
                      "version": "1.0.0",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.taro._connector",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  }
              ],
              "coms": {
                  "u_fV8ll": {
                      "def": {
                          "namespace": "mybricks.taro.systemPage",
                          "version": "1.0.0"
                      },
                      "title": "页面",
                      "model": {
                          "data": {
                              "useNavigationStyle": "custom",
                              "navigationStyle": "custom",
                              "navigationBarBackgroundColor": "#464646",
                              "navigationBarTextStyle": "black",
                              "navigationBarTitleText": "Mybricks",
                              "homeButton": false,
                              "customNavigation": {
                                  "style": {
                                      "background": "url() center top / 100% 100% no-repeat,rgba(255,255,255,1)",
                                      "styleEditorUnfold": true
                                  },
                                  "useFixed": true
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [],
                      "outputs": []
                  },
                  "u_nwnW_": {
                      "def": {
                          "namespace": "mybricks.taro.searchBar",
                          "version": "1.0.0"
                      },
                      "title": "搜索框",
                      "model": {
                          "data": {
                              "placeholderText": "搜索昵称",
                              "searchBarStyle": {
                                  "background": "#f4f5f7",
                                  "borderRadius": "30px"
                              },
                              "label": "",
                              "disabled": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onClear": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_nfHU2",
                                          "title": "搜索框 > 点击清除按钮时"
                                      },
                                      "active": true
                                  }
                              ],
                              "onSearch": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_wTrqJ",
                                          "title": "搜索框 > 当触发搜索时"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 12,
                              "marginBottom": 12,
                              "marginLeft": 12,
                              "marginRight": 12,
                              "styleAry": [
                                  {
                                      "selector": ".mybricks-searchBar",
                                      "css": {
                                          "borderTopLeftRadius": "18px",
                                          "borderBottomLeftRadius": "18px",
                                          "borderBottomRightRadius": "18px",
                                          "borderTopRightRadius": "18px"
                                      }
                                  }
                              ]
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onChange",
                          "onClear",
                          "onCancel",
                          "onSearch"
                      ]
                  },
                  "u_qL8p6": {
                      "def": {
                          "namespace": "mybricks.taro.containerList",
                          "version": "1.0.0"
                      },
                      "title": "列表容器",
                      "model": {
                          "data": {
                              "useLoading": true,
                              "loadingTip": "加载中...",
                              "errorTip": "加载失败，请重试",
                              "emptyTip": "没有更多了",
                              "scrollRefresh": false,
                              "pullRefresh": false,
                              "grid": {
                                  "column": 0,
                                  "gutter": [
                                      8,
                                      8
                                  ]
                              },
                              "rowKey": "id"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "refreshDataSource",
                          "addDataSource",
                          "loading",
                          "noMore",
                          "error",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onScrollLoad",
                          "onRefresh"
                      ]
                  },
                  "u_KGNIh": {
                      "def": {
                          "namespace": "mybricks.taro.containerGrid",
                          "version": "1.0.0"
                      },
                      "frameId": "item",
                      "parentComId": "u_qL8p6",
                      "title": "布局",
                      "model": {
                          "data": {
                              "style": {
                                  "paddingTop": "12px",
                                  "paddingRight": "12px",
                                  "paddingBottom": "12px",
                                  "paddingLeft": "12px",
                                  "backgroundColor": "#f7f7f7"
                              },
                              "rows": [
                                  {
                                      "id": "row0",
                                      "height": "auto",
                                      "cols": [
                                          {
                                              "id": "col0",
                                              "title": "内容",
                                              "width": 60,
                                              "isDragging": false
                                          },
                                          {
                                              "id": "u_ka47by",
                                              "title": "列（纵向排列）",
                                              "width": "auto",
                                              "layout": {
                                                  "display": "flex",
                                                  "position": "inherit",
                                                  "flexDirection": "column",
                                                  "alignItems": "flex-start",
                                                  "justifyContent": "center",
                                                  "flexWrap": "nowrap"
                                              }
                                          }
                                      ]
                                  }
                              ]
                          },
                          "inputAry": [],
                          "outputAry": [
                              {
                                  "hostId": "col_output_col0",
                                  "title": "内容",
                                  "schema": {
                                      "type": "any"
                                  }
                              },
                              {
                                  "hostId": "col_output_u_ka47by",
                                  "title": "列（纵向排列）",
                                  "schema": {
                                      "type": "any"
                                  }
                              }
                          ],
                          "outputEvents": {
                              "click": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_ctZ1d",
                                          "title": "布局 > 点击"
                                      },
                                      "active": true
                                  }
                              ],
                              "col_output_col0": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "col_output_u_ka47by": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 6,
                              "marginBottom": 6,
                              "marginLeft": 12,
                              "marginRight": 12
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "click",
                          "col_output_col0",
                          "col_output_u_ka47by"
                      ]
                  },
                  "u_q3pdO": {
                      "def": {
                          "namespace": "mybricks.taro.image",
                          "version": "1.0.0"
                      },
                      "frameId": "item",
                      "parentComId": "u_qL8p6",
                      "title": "图片",
                      "model": {
                          "data": {
                              "src": "https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-05-30/1685451722186.3a6d5fa5deb9456f.png",
                              "mode": "aspectFill",
                              "loadSmooth": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onLoad": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onError": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": 50,
                              "height": 50,
                              "styleAry": [
                                  {
                                      "selector": ".mybricks-image",
                                      "css": {
                                          "borderTopLeftRadius": "30px",
                                          "borderBottomLeftRadius": "30px",
                                          "borderBottomRightRadius": "30px",
                                          "borderTopRightRadius": "30px"
                                      }
                                  }
                              ]
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setSrc",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onLoad",
                          "onError"
                      ]
                  },
                  "u_uZQ3s": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "frameId": "item",
                      "parentComId": "u_qL8p6",
                      "title": "文本",
                      "model": {
                          "data": {
                              "text": "Lottie Poole",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "color": "rgba(89,89,89,1)",
                                  "lineHeight": "21px",
                                  "fontSize": "15px",
                                  "fontWeight": "500"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "fit-content"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_71yNl": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "frameId": "item",
                      "parentComId": "u_qL8p6",
                      "title": "文本1",
                      "model": {
                          "data": {
                              "text": "浙江省 杭州市",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "color": "rgba(140,140,140,1)",
                                  "lineHeight": "19px",
                                  "fontSize": "13px"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "fit-content",
                              "marginTop": 4
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_k6gNJ": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "item",
                      "parentComId": "u_qL8p6",
                      "title": "JS计算",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [
                              {
                                  "hostId": "output1",
                                  "title": "输出项1",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              },
                              {
                                  "hostId": "output2",
                                  "title": "输出项2",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0",
                          "output1",
                          "output2"
                      ]
                  },
                  "u_mqmbT": {
                      "def": {
                          "namespace": "mybricks.core-comlib.frame-input",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "frameId": "item",
                      "parentComId": "u_qL8p6",
                      "title": "当前项",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "getCurValue"
                      ],
                      "outputs": [
                          "return"
                      ]
                  },
                  "u_Qg7Ki": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "item",
                      "parentComId": "u_qL8p6",
                      "title": "JS计算1",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0"
                      ]
                  },
                  "u_kZIvy": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "frameId": "item",
                      "parentComId": "u_qL8p6",
                      "title": "名片",
                      "model": {
                          "data": {
                              "_sceneId": "u_e2bWH",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u_g0kxR": {
                      "def": {
                          "namespace": "mybricks.taro.image",
                          "version": "1.0.0"
                      },
                      "title": "图片",
                      "model": {
                          "data": {
                              "src": "https://admin.alialumni.com/mfs/Ini2cKRD3PErNEK82E81qYaDJ22UrffD-1689231348651.png",
                              "mode": "aspectFill",
                              "loadSmooth": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onLoad": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onError": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": 87,
                              "height": 26
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setSrc",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onLoad",
                          "onError"
                      ]
                  },
                  "u_MV_XG": {
                      "def": {
                          "namespace": "mybricks.core-comlib.fn",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "刷新列表",
                      "model": {
                          "data": {},
                          "inputAry": [
                              {
                                  "hostId": "param0",
                                  "title": "输入项",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "param0"
                      ],
                      "outputs": []
                  },
                  "u_Wkdrd": {
                      "def": {
                          "namespace": "mybricks.core-comlib.fn",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "刷新列表",
                      "model": {
                          "data": {},
                          "inputAry": [
                              {
                                  "hostId": "param0",
                                  "title": "输入项",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "param0"
                      ],
                      "outputs": []
                  },
                  "u_YDiD1": {
                      "def": {
                          "namespace": "mybricks.core-comlib.fn",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "刷新列表",
                      "model": {
                          "data": {},
                          "inputAry": [
                              {
                                  "hostId": "param0",
                                  "title": "输入项",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "param0"
                      ],
                      "outputs": []
                  },
                  "u_cKDtI": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "u_nzZrB",
                      "title": "JS计算",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0"
                      ]
                  },
                  "u_Dxiil": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "u_nzZrB",
                      "title": "服务接口",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_zjsenn",
                                  "title": "C端-会员列表",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "昵称": {
                                              "type": "string"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "array",
                                      "items": {
                                          "type": "object",
                                          "properties": {
                                              "id": {
                                                  "type": "number"
                                              },
                                              "头像": {
                                                  "type": "string"
                                              },
                                              "昵称": {
                                                  "type": "string"
                                              },
                                              "真实姓名保密等级": {
                                                  "type": "enum"
                                              },
                                              "真实姓名": {
                                                  "type": "string"
                                              },
                                              "性别保密等级": {
                                                  "type": "enum"
                                              },
                                              "性别": {
                                                  "type": "enum"
                                              },
                                              "当前所在国家": {
                                                  "type": "enum"
                                              },
                                              "当前城市": {
                                                  "type": "string"
                                              },
                                              "当前公司": {
                                                  "type": "string"
                                              },
                                              "当前职务": {
                                                  "type": "string"
                                              },
                                              "个人简介": {
                                                  "type": "string"
                                              },
                                              "手机号码保密等级": {
                                                  "type": "enum"
                                              },
                                              "手机号码": {
                                                  "type": "string"
                                              },
                                              "微信二维码保密等级": {
                                                  "type": "enum"
                                              },
                                              "微信二维码": {
                                                  "type": "string"
                                              },
                                              "阿里花名": {
                                                  "type": "string"
                                              },
                                              "阿里工号": {
                                                  "type": "string"
                                              },
                                              "阿里部门": {
                                                  "type": "string"
                                              },
                                              "阿里职务": {
                                                  "type": "string"
                                              },
                                              "阿里入职时间": {
                                                  "type": "string"
                                              },
                                              "_阿里入职时间": {
                                                  "type": "number"
                                              },
                                              "阿里离职时间": {
                                                  "type": "string"
                                              },
                                              "_阿里离职时间": {
                                                  "type": "number"
                                              },
                                              "阿里认证信息": {
                                                  "type": "string"
                                              },
                                              "阿里认证审核状态": {
                                                  "type": "enum"
                                              },
                                              "会员标签列表": {
                                                  "type": "array",
                                                  "items": {
                                                      "type": "object",
                                                      "properties": {
                                                          "id": {
                                                              "type": "number"
                                                          },
                                                          "用户": {
                                                              "type": "number"
                                                          },
                                                          "标签": {
                                                              "type": "number"
                                                          }
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  },
                                  "createTime": 1689766261995,
                                  "lastModifiedTime": 1689766355500
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_miVEq": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "u_nzZrB",
                      "title": "JS计算1",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [
                              {
                                  "hostId": "output1",
                                  "title": "输出项1",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0",
                          "output1"
                      ]
                  }
              },
              "id": "u_79HX_",
              "title": "校友名录",
              "comsAutoRun": {},
              "_inputs": [],
              "_outputs": [],
              "inputs": [
                  {
                      "id": "open",
                      "title": "打开",
                      "type": "normal",
                      "schema": {
                          "type": "object",
                          "editable": true
                      }
                  }
              ],
              "outputs": [
                  {
                      "id": "onShow",
                      "title": "页面显示",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  },
                  {
                      "id": "onHide",
                      "title": "页面隐藏",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  }
              ],
              "cons": {
                  "_rootFrame_-open": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_MV_XG",
                          "def": {
                              "namespace": "mybricks.core-comlib.fn",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "param0",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_nwnW_-onClear": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_37C38",
                          "comId": "u_Wkdrd",
                          "def": {
                              "namespace": "mybricks.core-comlib.fn",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "param0",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_nwnW_-onSearch": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_7DKFr",
                          "comId": "u_YDiD1",
                          "def": {
                              "namespace": "mybricks.core-comlib.fn",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "param0",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_qL8p6-item-itemData": [
                      {
                          "type": "com",
                          "frameKey": "u_qL8p6-item",
                          "comId": "u_k6gNJ",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_KGNIh-click": [
                      {
                          "type": "com",
                          "frameKey": "u_qL8p6-item",
                          "startPinParentKey": "u_v5Igb",
                          "comId": "u_mqmbT",
                          "def": {
                              "namespace": "mybricks.core-comlib.frame-input",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "getCurValue",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_k6gNJ-output0": [
                      {
                          "type": "com",
                          "frameKey": "u_qL8p6-item",
                          "finishPinParentKey": "u_6OVie",
                          "comId": "u_q3pdO",
                          "def": {
                              "namespace": "mybricks.taro.image",
                              "version": "1.0.0"
                          },
                          "pinId": "setSrc",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_k6gNJ-output1": [
                      {
                          "type": "com",
                          "frameKey": "u_qL8p6-item",
                          "finishPinParentKey": "u_2Wnla",
                          "comId": "u_uZQ3s",
                          "def": {
                              "namespace": "mybricks.taro.text",
                              "version": "1.0.0"
                          },
                          "pinId": "value",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_k6gNJ-output2": [
                      {
                          "type": "com",
                          "frameKey": "u_qL8p6-item",
                          "finishPinParentKey": "u_W965c",
                          "comId": "u_71yNl",
                          "def": {
                              "namespace": "mybricks.taro.text",
                              "version": "1.0.0"
                          },
                          "pinId": "value",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_mqmbT-return": [
                      {
                          "type": "com",
                          "frameKey": "u_qL8p6-item",
                          "comId": "u_Qg7Ki",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_Qg7Ki-output0": [
                      {
                          "type": "com",
                          "frameKey": "u_qL8p6-item",
                          "comId": "u_kZIvy",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_nzZrB-param0": [
                      {
                          "type": "com",
                          "frameKey": "u_nzZrB",
                          "comId": "u_cKDtI",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_cKDtI-output0": [
                      {
                          "type": "com",
                          "frameKey": "u_nzZrB",
                          "comId": "u_Dxiil",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_Dxiil-then": [
                      {
                          "type": "com",
                          "frameKey": "u_nzZrB",
                          "comId": "u_miVEq",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_miVEq-output0": [
                      {
                          "type": "com",
                          "frameKey": "u_nzZrB",
                          "finishPinParentKey": "u_05HY1",
                          "comId": "u_qL8p6",
                          "def": {
                              "namespace": "mybricks.taro.containerList",
                              "version": "1.0.0"
                          },
                          "pinId": "refreshDataSource",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_miVEq-output1": [
                      {
                          "type": "com",
                          "frameKey": "u_nzZrB",
                          "finishPinParentKey": "u_g5xql",
                          "comId": "u_qL8p6",
                          "def": {
                              "namespace": "mybricks.taro.containerList",
                              "version": "1.0.0"
                          },
                          "pinId": "noMore",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ]
              },
              "pinRels": {
                  "u_mqmbT-getCurValue": [
                      "return"
                  ],
                  "u_Dxiil-call": [
                      "then",
                      "catch"
                  ]
              },
              "pinProxies": {
                  "u_kZIvy-_open": {
                      "type": "frame",
                      "frameId": "u_e2bWH",
                      "pinId": "open"
                  },
                  "u_MV_XG-param0": {
                      "type": "frame",
                      "frameId": "u_nzZrB",
                      "pinId": "param0"
                  },
                  "u_Wkdrd-param0": {
                      "type": "frame",
                      "frameId": "u_nzZrB",
                      "pinId": "param0"
                  },
                  "u_YDiD1-param0": {
                      "type": "frame",
                      "frameId": "u_nzZrB",
                      "pinId": "param0"
                  }
              },
              "pinValueProxies": {
                  "u_mqmbT-getCurValue": {
                      "type": "frame",
                      "frameId": "item",
                      "pinId": "itemData"
                  }
              },
              "slot": {
                  "id": "u_79HX_",
                  "title": "校友名录",
                  "comAry": [
                      {
                          "id": "u_fV8ll",
                          "name": "u_PS5CE",
                          "def": {
                              "namespace": "mybricks.taro.systemPage",
                              "version": "1.0.0"
                          },
                          "slots": {
                              "content": {
                                  "id": "content",
                                  "title": "内容",
                                  "comAry": [
                                      {
                                          "id": "u_nwnW_",
                                          "name": "u_9O7MD",
                                          "def": {
                                              "namespace": "mybricks.taro.searchBar",
                                              "version": "1.0.0"
                                          }
                                      },
                                      {
                                          "id": "u_qL8p6",
                                          "name": "u_oANIh",
                                          "def": {
                                              "namespace": "mybricks.taro.containerList",
                                              "version": "1.0.0"
                                          },
                                          "slots": {
                                              "item": {
                                                  "id": "item",
                                                  "title": "列表项",
                                                  "type": "scope",
                                                  "comAry": [
                                                      {
                                                          "id": "u_KGNIh",
                                                          "name": "u_SM5Hw",
                                                          "def": {
                                                              "namespace": "mybricks.taro.containerGrid",
                                                              "version": "1.0.0"
                                                          },
                                                          "slots": {
                                                              "col0": {
                                                                  "id": "col0",
                                                                  "title": "内容（竖向排列）",
                                                                  "comAry": [
                                                                      {
                                                                          "id": "u_q3pdO",
                                                                          "name": "u_mfUlB",
                                                                          "def": {
                                                                              "namespace": "mybricks.taro.image",
                                                                              "version": "1.0.0"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "style": {
                                                                      "layout": "flex-column",
                                                                      "justifyContent": "flex-start",
                                                                      "alignItems": "flex-start"
                                                                  }
                                                              },
                                                              "u_ka47by": {
                                                                  "id": "u_ka47by",
                                                                  "title": "列（竖向排列）",
                                                                  "comAry": [
                                                                      {
                                                                          "id": "u_uZQ3s",
                                                                          "name": "u_AkPST",
                                                                          "def": {
                                                                              "namespace": "mybricks.taro.text",
                                                                              "version": "1.0.0"
                                                                          }
                                                                      },
                                                                      {
                                                                          "id": "u_71yNl",
                                                                          "name": "u_N7yek",
                                                                          "def": {
                                                                              "namespace": "mybricks.taro.text",
                                                                              "version": "1.0.0"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "style": {
                                                                      "layout": "flex-column",
                                                                      "justifyContent": "flex-start",
                                                                      "alignItems": "flex-start"
                                                                  }
                                                              }
                                                          }
                                                      }
                                                  ],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              },
                              "mainSlot": {
                                  "id": "mainSlot",
                                  "title": "导航栏主区域",
                                  "comAry": [],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              },
                              "leftSlot": {
                                  "id": "leftSlot",
                                  "title": "导航栏左区域",
                                  "comAry": [
                                      {
                                          "id": "u_g0kxR",
                                          "name": "u__t45_",
                                          "def": {
                                              "namespace": "mybricks.taro.image",
                                              "version": "1.0.0"
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              }
                          }
                      }
                  ],
                  "style": {
                      "left": 0,
                      "top": 0,
                      "layout": "flex-column",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start"
                  }
              }
          }
      },
      {
          "pagePath": "pages/u_e2bWH/index",
          "pageConfig": {
              "navigationStyle": "default",
              "navigationBarBackgroundColor": "#ffffff",
              "navigationBarTextStyle": "black",
              "navigationBarTitleText": "青橙会"
          },
          "pageToJson": {
              "-v": "1.0.9",
              "deps": [
                  {
                      "namespace": "mybricks.taro.systemPage",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.image",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.text",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.containerGrid",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.card",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.cell",
                      "version": "1.0.1"
                  },
                  {
                      "namespace": "mybricks.taro._connector",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  },
                  {
                      "namespace": "mybricks.taro._muilt-inputJs",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  }
              ],
              "coms": {
                  "u_S_4vi": {
                      "def": {
                          "namespace": "mybricks.taro.systemPage",
                          "version": "1.0.0"
                      },
                      "title": "页面",
                      "model": {
                          "data": {
                              "useNavigationStyle": "default",
                              "navigationStyle": "default",
                              "navigationBarBackgroundColor": "rgba(255,255,255,1)",
                              "navigationBarTextStyle": "black",
                              "navigationBarTitleText": "青橙会",
                              "homeButton": false,
                              "customNavigation": {
                                  "style": {
                                      "background": "#464646"
                                  },
                                  "useFixed": true
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [],
                      "outputs": []
                  },
                  "u_YmnKA": {
                      "def": {
                          "namespace": "mybricks.taro.image",
                          "version": "1.0.0"
                      },
                      "title": "图片1",
                      "model": {
                          "data": {
                              "src": "https://admin.alialumni.com/mfs/PNenSgcVCjem6QkUt4GnG3o0ZTYaXLjL-1689132001198.png",
                              "mode": "widthFix"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onLoad": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onError": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "left": 0,
                              "top": 0,
                              "width": 375,
                              "height": 200,
                              "position": "absolute"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setSrc",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onLoad",
                          "onError"
                      ]
                  },
                  "u_LXjEJ": {
                      "def": {
                          "namespace": "mybricks.taro.image",
                          "version": "1.0.0"
                      },
                      "title": "头像",
                      "model": {
                          "data": {
                              "src": "https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-05-30/1685451722186.3a6d5fa5deb9456f.png",
                              "mode": "scaleToFill"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onLoad": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onError": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "left": 153,
                              "top": 30,
                              "width": 70,
                              "height": 70,
                              "styleAry": [
                                  {
                                      "selector": ".mybricks-image",
                                      "css": {
                                          "borderTopLeftRadius": "50%",
                                          "borderBottomLeftRadius": "50%",
                                          "borderBottomRightRadius": "50%",
                                          "borderTopRightRadius": "50%",
                                          "borderTopWidth": "2px",
                                          "borderRightWidth": "2px",
                                          "borderBottomWidth": "2px",
                                          "borderLeftWidth": "2px",
                                          "borderTopColor": "#ffffff",
                                          "borderRightColor": "#ffffff",
                                          "borderBottomColor": "#ffffff",
                                          "borderLeftColor": "#ffffff"
                                      }
                                  }
                              ],
                              "position": "absolute"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setSrc",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onLoad",
                          "onError"
                      ]
                  },
                  "u_OFVDe": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "title": "昵称",
                      "model": {
                          "data": {
                              "text": "-",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "color": "rgba(255,255,255,1)",
                                  "lineHeight": "24px",
                                  "fontSize": "16px",
                                  "display": "flex",
                                  "flexDirection": "row",
                                  "textAlign": "center",
                                  "justifyContent": "center",
                                  "fontWeight": "500"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "left": 0,
                              "top": 111,
                              "width": "100%",
                              "position": "absolute"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_m6AGq": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "title": "当前公司信息",
                      "model": {
                          "data": {
                              "text": "-",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "lineHeight": "18px",
                                  "fontSize": "12px",
                                  "color": "rgba(255,255,255,1)",
                                  "display": "flex",
                                  "flexDirection": "row",
                                  "textAlign": "center",
                                  "justifyContent": "center"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "left": 0,
                              "top": 150,
                              "width": "100%",
                              "position": "absolute"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_FG5TV": {
                      "def": {
                          "namespace": "mybricks.taro.containerGrid",
                          "version": "1.0.0"
                      },
                      "title": "布局",
                      "model": {
                          "data": {
                              "style": {},
                              "rows": [
                                  {
                                      "id": "row0",
                                      "height": "auto",
                                      "cols": [
                                          {
                                              "id": "col0",
                                              "title": "内容",
                                              "width": "auto"
                                          }
                                      ]
                                  }
                              ],
                              "layout": {
                                  "display": "block",
                                  "position": "absolute",
                                  "flexDirection": "row",
                                  "alignItems": "flex-start",
                                  "justifyContent": "flex-start",
                                  "flexWrap": "nowrap"
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "click": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "height": 200
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "click"
                      ]
                  },
                  "u_XRC3O": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "title": "个人简介",
                      "model": {
                          "data": {
                              "text": "这个家伙很懒，什么都没留下",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "lineHeight": "24px",
                                  "display": "flex",
                                  "flexDirection": "row",
                                  "textAlign": "left",
                                  "justifyContent": "flex-start"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_wzddo": {
                      "def": {
                          "namespace": "mybricks.taro.card",
                          "version": "1.0.0"
                      },
                      "title": "分组容器2",
                      "model": {
                          "data": {
                              "title": "个人简介",
                              "useExtra": "none",
                              "extraText": "查看更多",
                              "slotStyle": {}
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "extraClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 12,
                              "marginBottom": 12,
                              "marginLeft": 12,
                              "marginRight": 12,
                              "styleAry": [
                                  {
                                      "selector": ".mybricks-card",
                                      "css": {
                                          "borderTopWidth": "0px",
                                          "borderRightWidth": "0px",
                                          "borderBottomWidth": "0px",
                                          "borderLeftWidth": "0px",
                                          "borderTopLeftRadius": "0px",
                                          "borderBottomLeftRadius": "0px",
                                          "borderBottomRightRadius": "0px",
                                          "borderTopRightRadius": "0px"
                                      }
                                  },
                                  {
                                      "selector": ".mybricks-card .mybricks-head .mybricks-title",
                                      "css": {
                                          "lineHeight": "1",
                                          "fontSize": "14px"
                                      }
                                  }
                              ]
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "extraClick"
                      ]
                  },
                  "u_B4mUo": {
                      "def": {
                          "namespace": "mybricks.taro.cell",
                          "version": "1.0.1"
                      },
                      "title": "阿里花名",
                      "model": {
                          "data": {
                              "size": "large",
                              "align": "center",
                              "icon": "https://js-ec.static.yximgs.com/udata/pkg/ks-merchant/cps-hybrid/empty_position.9b16b85c5a152402.png",
                              "title": "花名",
                              "brief": "",
                              "useChildren": true,
                              "content": "内容",
                              "useArrowIcon": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_Kw4So": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "title": "阿里花名",
                      "model": {
                          "data": {
                              "text": "-",
                              "style": {},
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_Som6w": {
                      "def": {
                          "namespace": "mybricks.taro.cell",
                          "version": "1.0.1"
                      },
                      "title": "阿里工号",
                      "model": {
                          "data": {
                              "size": "large",
                              "align": "center",
                              "icon": "https://js-ec.static.yximgs.com/udata/pkg/ks-merchant/cps-hybrid/empty_position.9b16b85c5a152402.png",
                              "title": "工号",
                              "brief": "",
                              "useChildren": true,
                              "content": "内容",
                              "useArrowIcon": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_hbert": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "title": "阿里工号",
                      "model": {
                          "data": {
                              "text": "-",
                              "style": {},
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_mQNM7": {
                      "def": {
                          "namespace": "mybricks.taro.cell",
                          "version": "1.0.1"
                      },
                      "title": "阿里部门",
                      "model": {
                          "data": {
                              "size": "large",
                              "align": "center",
                              "icon": "https://js-ec.static.yximgs.com/udata/pkg/ks-merchant/cps-hybrid/empty_position.9b16b85c5a152402.png",
                              "title": "部门",
                              "brief": "",
                              "useChildren": true,
                              "content": "内容",
                              "useArrowIcon": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_8iqVb": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "title": "阿里部门",
                      "model": {
                          "data": {
                              "text": "-",
                              "style": {},
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_rmYOg": {
                      "def": {
                          "namespace": "mybricks.taro.cell",
                          "version": "1.0.1"
                      },
                      "title": "阿里职务",
                      "model": {
                          "data": {
                              "size": "large",
                              "align": "center",
                              "icon": "https://js-ec.static.yximgs.com/udata/pkg/ks-merchant/cps-hybrid/empty_position.9b16b85c5a152402.png",
                              "title": "职务",
                              "brief": "",
                              "useChildren": true,
                              "content": "内容",
                              "useArrowIcon": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_FZ7Ue": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "title": "阿里职务",
                      "model": {
                          "data": {
                              "text": "-",
                              "style": {},
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_5sujn": {
                      "def": {
                          "namespace": "mybricks.taro.card",
                          "version": "1.0.0"
                      },
                      "title": "分组容器2",
                      "model": {
                          "data": {
                              "title": "阿里经历",
                              "useExtra": "none",
                              "extraText": "查看更多",
                              "slotStyle": {}
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "extraClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 12,
                              "marginBottom": 12,
                              "marginLeft": 12,
                              "marginRight": 12,
                              "styleAry": [
                                  {
                                      "selector": ".mybricks-card",
                                      "css": {
                                          "borderTopWidth": "0px",
                                          "borderRightWidth": "0px",
                                          "borderBottomWidth": "0px",
                                          "borderLeftWidth": "0px",
                                          "borderTopLeftRadius": "0px",
                                          "borderBottomLeftRadius": "0px",
                                          "borderBottomRightRadius": "0px",
                                          "borderTopRightRadius": "0px"
                                      }
                                  },
                                  {
                                      "selector": ".mybricks-card .mybricks-head .mybricks-title",
                                      "css": {
                                          "lineHeight": "1",
                                          "fontSize": "14px"
                                      }
                                  }
                              ]
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "extraClick"
                      ]
                  },
                  "u_LAsWI": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "服务接口",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_ytfber",
                                  "title": "C端-查询会员信息",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "id": {
                                              "type": "string"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "id": {
                                              "type": "number"
                                          },
                                          "openid": {
                                              "type": "string"
                                          },
                                          "头像": {
                                              "type": "string"
                                          },
                                          "昵称": {
                                              "type": "string"
                                          },
                                          "真实姓名保密等级": {
                                              "type": "enum"
                                          },
                                          "真实姓名": {
                                              "type": "string"
                                          },
                                          "性别保密等级": {
                                              "type": "enum"
                                          },
                                          "性别": {
                                              "type": "enum"
                                          },
                                          "当前所在国家": {
                                              "type": "enum"
                                          },
                                          "当前城市": {
                                              "type": "string"
                                          },
                                          "当前公司": {
                                              "type": "string"
                                          },
                                          "当前职务": {
                                              "type": "string"
                                          },
                                          "个人简介": {
                                              "type": "string"
                                          },
                                          "手机号码保密等级": {
                                              "type": "enum"
                                          },
                                          "手机号码": {
                                              "type": "string"
                                          },
                                          "微信二维码保密等级": {
                                              "type": "enum"
                                          },
                                          "微信二维码": {
                                              "type": "string"
                                          },
                                          "阿里花名": {
                                              "type": "string"
                                          },
                                          "阿里工号": {
                                              "type": "string"
                                          },
                                          "阿里部门": {
                                              "type": "string"
                                          },
                                          "阿里职务": {
                                              "type": "string"
                                          },
                                          "阿里入职时间": {
                                              "type": "string"
                                          },
                                          "_阿里入职时间": {
                                              "type": "number"
                                          },
                                          "阿里离职时间": {
                                              "type": "string"
                                          },
                                          "_阿里离职时间": {
                                              "type": "number"
                                          },
                                          "阿里认证信息": {
                                              "type": "string"
                                          },
                                          "阿里认证审核状态": {
                                              "type": "enum"
                                          },
                                          "会员标签列表": {
                                              "type": "array",
                                              "items": {
                                                  "type": "object",
                                                  "properties": {
                                                      "id": {
                                                          "type": "number"
                                                      },
                                                      "用户": {
                                                          "type": "number"
                                                      },
                                                      "标签": {
                                                          "type": "number"
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  },
                                  "createTime": 1689766261991,
                                  "lastModifiedTime": 1689766294445
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_oUeiY": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "JS计算",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [
                              {
                                  "hostId": "output1",
                                  "title": "输出项1",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              },
                              {
                                  "hostId": "output2",
                                  "title": "输出项2",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              },
                              {
                                  "hostId": "output3",
                                  "title": "输出项3",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              },
                              {
                                  "hostId": "output4",
                                  "title": "输出项4",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              },
                              {
                                  "hostId": "output5",
                                  "title": "输出项5",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              },
                              {
                                  "hostId": "output6",
                                  "title": "输出项6",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              },
                              {
                                  "hostId": "output7",
                                  "title": "输出项7",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0",
                          "output1",
                          "output2",
                          "output3",
                          "output4",
                          "output5",
                          "output6",
                          "output7"
                      ]
                  }
              },
              "id": "u_e2bWH",
              "title": "名片",
              "comsAutoRun": {},
              "_inputs": [],
              "_outputs": [],
              "inputs": [
                  {
                      "id": "open",
                      "title": "打开",
                      "type": "normal",
                      "schema": {
                          "type": "object",
                          "editable": true
                      }
                  }
              ],
              "outputs": [
                  {
                      "id": "onShow",
                      "title": "页面显示",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  },
                  {
                      "id": "onHide",
                      "title": "页面隐藏",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  }
              ],
              "cons": {
                  "_rootFrame_-open": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_LAsWI",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_LAsWI-then": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_oUeiY",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_oUeiY-output0": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_FdVec",
                          "comId": "u_LXjEJ",
                          "def": {
                              "namespace": "mybricks.taro.image",
                              "version": "1.0.0"
                          },
                          "pinId": "setSrc",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_oUeiY-output1": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_0Mwgr",
                          "comId": "u_OFVDe",
                          "def": {
                              "namespace": "mybricks.taro.text",
                              "version": "1.0.0"
                          },
                          "pinId": "value",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_oUeiY-output2": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_hHYJ6",
                          "comId": "u_m6AGq",
                          "def": {
                              "namespace": "mybricks.taro.text",
                              "version": "1.0.0"
                          },
                          "pinId": "value",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_oUeiY-output3": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_hVlT8",
                          "comId": "u_XRC3O",
                          "def": {
                              "namespace": "mybricks.taro.text",
                              "version": "1.0.0"
                          },
                          "pinId": "value",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_oUeiY-output4": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_iNSnp",
                          "comId": "u_Kw4So",
                          "def": {
                              "namespace": "mybricks.taro.text",
                              "version": "1.0.0"
                          },
                          "pinId": "value",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_oUeiY-output5": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_A_Xcd",
                          "comId": "u_hbert",
                          "def": {
                              "namespace": "mybricks.taro.text",
                              "version": "1.0.0"
                          },
                          "pinId": "value",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_oUeiY-output6": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_q79Ou",
                          "comId": "u_8iqVb",
                          "def": {
                              "namespace": "mybricks.taro.text",
                              "version": "1.0.0"
                          },
                          "pinId": "value",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_oUeiY-output7": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_WIEwe",
                          "comId": "u_FZ7Ue",
                          "def": {
                              "namespace": "mybricks.taro.text",
                              "version": "1.0.0"
                          },
                          "pinId": "value",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ]
              },
              "pinRels": {
                  "u_LAsWI-call": [
                      "then",
                      "catch"
                  ]
              },
              "pinProxies": {},
              "pinValueProxies": {},
              "slot": {
                  "id": "u_e2bWH",
                  "title": "名片",
                  "comAry": [
                      {
                          "id": "u_S_4vi",
                          "name": "u_rEAhj",
                          "def": {
                              "namespace": "mybricks.taro.systemPage",
                              "version": "1.0.0"
                          },
                          "slots": {
                              "content": {
                                  "id": "content",
                                  "title": "内容",
                                  "comAry": [
                                      {
                                          "id": "u_FG5TV",
                                          "name": "u_jn9lv",
                                          "def": {
                                              "namespace": "mybricks.taro.containerGrid",
                                              "version": "1.0.0"
                                          },
                                          "slots": {
                                              "col0": {
                                                  "id": "col0",
                                                  "title": "列（自由排列）",
                                                  "comAry": [
                                                      {
                                                          "id": "u_YmnKA",
                                                          "name": "u_wUalc",
                                                          "def": {
                                                              "namespace": "mybricks.taro.image",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_LXjEJ",
                                                          "name": "u_GPvk2",
                                                          "def": {
                                                              "namespace": "mybricks.taro.image",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_OFVDe",
                                                          "name": "u_ToUNs",
                                                          "def": {
                                                              "namespace": "mybricks.taro.text",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_m6AGq",
                                                          "name": "u_cWywp",
                                                          "def": {
                                                              "namespace": "mybricks.taro.text",
                                                              "version": "1.0.0"
                                                          }
                                                      }
                                                  ],
                                                  "style": {
                                                      "layout": "absolute",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      },
                                      {
                                          "id": "u_wzddo",
                                          "name": "u_lC1bS",
                                          "def": {
                                              "namespace": "mybricks.taro.card",
                                              "version": "1.0.0"
                                          },
                                          "slots": {
                                              "extra": {
                                                  "id": "extra",
                                                  "title": "卡片操作容器",
                                                  "comAry": [],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              },
                                              "content": {
                                                  "id": "content",
                                                  "title": "内容",
                                                  "comAry": [
                                                      {
                                                          "id": "u_XRC3O",
                                                          "name": "u_Ll5K0",
                                                          "def": {
                                                              "namespace": "mybricks.taro.text",
                                                              "version": "1.0.0"
                                                          }
                                                      }
                                                  ],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      },
                                      {
                                          "id": "u_5sujn",
                                          "name": "u_TKBMe",
                                          "def": {
                                              "namespace": "mybricks.taro.card",
                                              "version": "1.0.0"
                                          },
                                          "slots": {
                                              "extra": {
                                                  "id": "extra",
                                                  "title": "卡片操作容器",
                                                  "comAry": [],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              },
                                              "content": {
                                                  "id": "content",
                                                  "title": "内容",
                                                  "comAry": [
                                                      {
                                                          "id": "u_B4mUo",
                                                          "name": "u_bcrsv",
                                                          "def": {
                                                              "namespace": "mybricks.taro.cell",
                                                              "version": "1.0.1"
                                                          },
                                                          "slots": {
                                                              "children": {
                                                                  "id": "children",
                                                                  "title": "内容",
                                                                  "comAry": [
                                                                      {
                                                                          "id": "u_Kw4So",
                                                                          "name": "u_zXAhg",
                                                                          "def": {
                                                                              "namespace": "mybricks.taro.text",
                                                                              "version": "1.0.0"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "style": {
                                                                      "layout": "flex-column",
                                                                      "justifyContent": "flex-start",
                                                                      "alignItems": "flex-start"
                                                                  }
                                                              }
                                                          }
                                                      },
                                                      {
                                                          "id": "u_Som6w",
                                                          "name": "u_Mufwg",
                                                          "def": {
                                                              "namespace": "mybricks.taro.cell",
                                                              "version": "1.0.1"
                                                          },
                                                          "slots": {
                                                              "children": {
                                                                  "id": "children",
                                                                  "title": "内容",
                                                                  "comAry": [
                                                                      {
                                                                          "id": "u_hbert",
                                                                          "name": "u_xJP0H",
                                                                          "def": {
                                                                              "namespace": "mybricks.taro.text",
                                                                              "version": "1.0.0"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "style": {
                                                                      "layout": "flex-column",
                                                                      "justifyContent": "flex-start",
                                                                      "alignItems": "flex-start"
                                                                  }
                                                              }
                                                          }
                                                      },
                                                      {
                                                          "id": "u_mQNM7",
                                                          "name": "u_bH858",
                                                          "def": {
                                                              "namespace": "mybricks.taro.cell",
                                                              "version": "1.0.1"
                                                          },
                                                          "slots": {
                                                              "children": {
                                                                  "id": "children",
                                                                  "title": "内容",
                                                                  "comAry": [
                                                                      {
                                                                          "id": "u_8iqVb",
                                                                          "name": "u_c5U_D",
                                                                          "def": {
                                                                              "namespace": "mybricks.taro.text",
                                                                              "version": "1.0.0"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "style": {
                                                                      "layout": "flex-column",
                                                                      "justifyContent": "flex-start",
                                                                      "alignItems": "flex-start"
                                                                  }
                                                              }
                                                          }
                                                      },
                                                      {
                                                          "id": "u_rmYOg",
                                                          "name": "u_ZhnUU",
                                                          "def": {
                                                              "namespace": "mybricks.taro.cell",
                                                              "version": "1.0.1"
                                                          },
                                                          "slots": {
                                                              "children": {
                                                                  "id": "children",
                                                                  "title": "内容",
                                                                  "comAry": [
                                                                      {
                                                                          "id": "u_FZ7Ue",
                                                                          "name": "u_zOX7T",
                                                                          "def": {
                                                                              "namespace": "mybricks.taro.text",
                                                                              "version": "1.0.0"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "style": {
                                                                      "layout": "flex-column",
                                                                      "justifyContent": "flex-start",
                                                                      "alignItems": "flex-start"
                                                                  }
                                                              }
                                                          }
                                                      }
                                                  ],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              }
                          }
                      }
                  ],
                  "style": {
                      "left": 0,
                      "top": 0,
                      "layout": "flex-column",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start"
                  }
              }
          }
      },
      {
          "pagePath": "pages/u_GuCyg/index",
          "pageConfig": {
              "navigationStyle": "custom"
          },
          "pageToJson": {
              "-v": "1.0.9",
              "deps": [
                  {
                      "namespace": "mybricks.taro.systemPage",
                      "version": "1.0.1"
                  },
                  {
                      "namespace": "mybricks.taro.containerGrid",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.image",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.text",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.containerCondition",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.cell",
                      "version": "1.0.1"
                  },
                  {
                      "namespace": "mybricks.core-comlib.fn",
                      "version": "1.0.0",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.taro._getUserInfo",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  },
                  {
                      "namespace": "mybricks.core-comlib.scenes",
                      "version": "1.0.0",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.taro._connector",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  },
                  {
                      "namespace": "mybricks.taro._muilt-inputJs",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  }
              ],
              "coms": {
                  "u_rFXq1": {
                      "def": {
                          "namespace": "mybricks.taro.systemPage",
                          "version": "1.0.1"
                      },
                      "title": "页面",
                      "model": {
                          "data": {
                              "useNavigationStyle": "none",
                              "navigationStyle": "custom",
                              "navigationBarBackgroundColor": "#464646",
                              "navigationBarTextStyle": "white",
                              "navigationBarTitleText": "Mybricks",
                              "homeButton": false,
                              "customNavigation": {
                                  "style": {
                                      "backgroundColor": "#464646"
                                  },
                                  "useFixed": true
                              },
                              "enablePullDownRefresh": false,
                              "backgroundTextStyle": "dark",
                              "backgroundColor": "#464646",
                              "background": "#464646",
                              "enableShareAppMessage": false,
                              "onReachBottomDistance": 30,
                              "pageOrientation": "portrait",
                              "disableScroll": false,
                              "disableSwipeBack": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [],
                      "outputs": []
                  },
                  "u_ZRM9v": {
                      "def": {
                          "namespace": "mybricks.taro.containerGrid",
                          "version": "1.0.0"
                      },
                      "title": "布局",
                      "model": {
                          "data": {
                              "style": {
                                  "borderTopColor": "transparent",
                                  "borderRightColor": "transparent",
                                  "borderBottomColor": "#fafafa",
                                  "borderLeftColor": "transparent",
                                  "borderTopStyle": "none",
                                  "borderRightStyle": "none",
                                  "borderBottomStyle": "solid",
                                  "borderLeftStyle": "none",
                                  "borderTopWidth": "0px",
                                  "borderRightWidth": "0px",
                                  "borderBottomWidth": "12px",
                                  "borderLeftWidth": "0px"
                              },
                              "rows": [
                                  {
                                      "id": "row0",
                                      "height": "auto",
                                      "cols": [
                                          {
                                              "id": "col0",
                                              "title": "内容",
                                              "width": "auto"
                                          }
                                      ]
                                  }
                              ],
                              "layout": {
                                  "display": "block",
                                  "position": "absolute",
                                  "flexDirection": "row",
                                  "alignItems": "flex-start",
                                  "justifyContent": "flex-start",
                                  "flexWrap": "nowrap"
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "click": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_Fkr4G",
                                          "title": "布局 > 点击"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": 375,
                              "height": 312
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "click"
                      ]
                  },
                  "u_BA1ap": {
                      "def": {
                          "namespace": "mybricks.taro.image",
                          "version": "1.0.0"
                      },
                      "title": "图片",
                      "model": {
                          "data": {
                              "src": "https://admin.alialumni.com/mfs/u0kmtKczUW7MJEUcJ3pnJg58lHVLQqYm-1689906883388.png",
                              "mode": "scaleToFill",
                              "loadSmooth": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onLoad": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onError": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "left": 0,
                              "top": 0,
                              "width": 375,
                              "height": 198,
                              "position": "absolute"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setSrc",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onLoad",
                          "onError"
                      ]
                  },
                  "u_9IpWi": {
                      "def": {
                          "namespace": "mybricks.taro.image",
                          "version": "1.0.0"
                      },
                      "title": "头像",
                      "model": {
                          "data": {
                              "src": "https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-05-30/1685451722186.3a6d5fa5deb9456f.png",
                              "mode": "aspectFill",
                              "loadSmooth": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onLoad": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onError": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "left": 153,
                              "top": 146,
                              "width": 70,
                              "height": 70,
                              "styleAry": [
                                  {
                                      "selector": ".mybricks-image",
                                      "css": {
                                          "borderTopLeftRadius": "40px",
                                          "borderBottomLeftRadius": "40px",
                                          "borderBottomRightRadius": "40px",
                                          "borderTopRightRadius": "40px"
                                      }
                                  }
                              ],
                              "position": "absolute"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setSrc",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onLoad",
                          "onError"
                      ]
                  },
                  "u_mX7A5": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "title": "昵称",
                      "model": {
                          "data": {
                              "text": "未登录",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "display": "flex",
                                  "flexDirection": "row",
                                  "textAlign": "center",
                                  "justifyContent": "center",
                                  "color": "rgba(255,255,255,1)",
                                  "lineHeight": "24px",
                                  "fontSize": "19px",
                                  "fontWeight": "500"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "left": 0,
                              "top": 111,
                              "width": "100%",
                              "position": "absolute"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_pkYAI": {
                      "def": {
                          "namespace": "mybricks.taro.containerCondition",
                          "version": "1.0.0"
                      },
                      "title": "条件容器",
                      "model": {
                          "data": {
                              "gutter": 0,
                              "direction": "row",
                              "wrap": "wrap",
                              "justify": "start",
                              "align": "stretch",
                              "items": [
                                  {
                                      "_id": "rpabgW",
                                      "id": "condition_u_994dbc",
                                      "title": "未登录"
                                  },
                                  {
                                      "_id": "i00gsa",
                                      "id": "condition_u_k5iadi",
                                      "title": "阿里校友"
                                  },
                                  {
                                      "_id": "NAUTtJ",
                                      "id": "condition_u_hfm685",
                                      "title": "未认证"
                                  }
                              ]
                          },
                          "inputAry": [
                              {
                                  "hostId": "condition_u_994dbc",
                                  "title": "切换到 未登录",
                                  "schema": {
                                      "type": "any"
                                  }
                              },
                              {
                                  "hostId": "condition_u_k5iadi",
                                  "title": "切换到 阿里校友",
                                  "schema": {
                                      "type": "any"
                                  }
                              },
                              {
                                  "hostId": "condition_u_hfm685",
                                  "title": "切换到 未认证",
                                  "schema": {
                                      "type": "any"
                                  }
                              }
                          ],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "left": 0,
                              "top": 200,
                              "width": 375,
                              "height": 20,
                              "position": "absolute"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "condition_1",
                          "condition_2",
                          "condition_u_994dbc",
                          "condition_u_k5iadi",
                          "condition_u_hfm685",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": []
                  },
                  "u_97Wzc": {
                      "def": {
                          "namespace": "mybricks.taro.image",
                          "version": "1.0.0"
                      },
                      "title": "图片2",
                      "model": {
                          "data": {
                              "src": "https://admin.alialumni.com/mfs/wUlcyzLsF1YVLQT5LsFDV0bYThTFl3o7-1689084912421.png",
                              "mode": "aspectFill",
                              "loadSmooth": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onLoad": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onError": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": 74,
                              "height": 20
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setSrc",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onLoad",
                          "onError"
                      ]
                  },
                  "u_nLPOv": {
                      "def": {
                          "namespace": "mybricks.taro.containerGrid",
                          "version": "1.0.0"
                      },
                      "title": "布局1",
                      "model": {
                          "data": {
                              "style": {},
                              "rows": [
                                  {
                                      "id": "row0",
                                      "height": "auto",
                                      "cols": [
                                          {
                                              "id": "col0",
                                              "title": "内容",
                                              "width": "auto"
                                          }
                                      ]
                                  }
                              ],
                              "layout": {
                                  "display": "flex",
                                  "position": "inherit",
                                  "flexDirection": "row",
                                  "alignItems": "center",
                                  "justifyContent": "center",
                                  "flexWrap": "nowrap"
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "click": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": 375,
                              "height": 20
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "click"
                      ]
                  },
                  "u_nKOPS": {
                      "def": {
                          "namespace": "mybricks.taro.containerGrid",
                          "version": "1.0.0"
                      },
                      "title": "布局2",
                      "model": {
                          "data": {
                              "style": {},
                              "rows": [
                                  {
                                      "id": "row0",
                                      "height": "auto",
                                      "cols": [
                                          {
                                              "id": "col0",
                                              "title": "内容",
                                              "width": "auto"
                                          }
                                      ]
                                  }
                              ],
                              "layout": {
                                  "display": "flex",
                                  "position": "inherit",
                                  "flexDirection": "row",
                                  "alignItems": "center",
                                  "justifyContent": "center",
                                  "flexWrap": "nowrap"
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "click": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": 375,
                              "height": 20
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "click"
                      ]
                  },
                  "u_kc6Ry": {
                      "def": {
                          "namespace": "mybricks.taro.image",
                          "version": "1.0.0"
                      },
                      "title": "图片3",
                      "model": {
                          "data": {
                              "src": "https://admin.alialumni.com/mfs/Tur3dvnQhdKLXvyddNyovYRWyIIzSNhE-1689907334961.png",
                              "mode": "aspectFill",
                              "loadSmooth": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onLoad": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onError": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": 65,
                              "height": 20
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setSrc",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onLoad",
                          "onError"
                      ]
                  },
                  "u_tDLtu": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "title": "当前公司信息",
                      "model": {
                          "data": {
                              "text": "",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "display": "flex",
                                  "flexDirection": "row",
                                  "textAlign": "center",
                                  "justifyContent": "center",
                                  "lineHeight": "12px",
                                  "fontSize": "12px"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "left": 0,
                              "top": 240,
                              "width": "100%",
                              "position": "absolute"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_5R3aT": {
                      "def": {
                          "namespace": "mybricks.taro.containerGrid",
                          "version": "1.0.0"
                      },
                      "title": "布局3",
                      "model": {
                          "data": {
                              "style": {},
                              "rows": [
                                  {
                                      "id": "row0",
                                      "height": "auto",
                                      "cols": [
                                          {
                                              "id": "col0",
                                              "title": "内容",
                                              "width": "auto"
                                          },
                                          {
                                              "id": "u_ktj3jy",
                                              "title": "列（纵向排列）",
                                              "width": "auto"
                                          }
                                      ]
                                  }
                              ]
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "click": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "left": 30,
                              "top": 270,
                              "width": 315,
                              "height": 12,
                              "position": "absolute"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "click"
                      ]
                  },
                  "u_DaEzc": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "title": "阿里部门",
                      "model": {
                          "data": {
                              "text": "",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "lineHeight": "10px",
                                  "fontSize": "12px",
                                  "color": "rgba(140,140,140,1)",
                                  "display": "flex",
                                  "flexDirection": "row",
                                  "textAlign": "center",
                                  "justifyContent": "center"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_hTYFj": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "title": "阿里职务",
                      "model": {
                          "data": {
                              "text": "",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "color": "rgba(140,140,140,1)",
                                  "lineHeight": "12px",
                                  "fontSize": "12px",
                                  "display": "flex",
                                  "flexDirection": "row",
                                  "textAlign": "center",
                                  "justifyContent": "center"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_zWfvB": {
                      "def": {
                          "namespace": "mybricks.taro.cell",
                          "version": "1.0.1"
                      },
                      "title": "单元格",
                      "model": {
                          "data": {
                              "size": "large",
                              "align": "center",
                              "icon": "https://js-ec.static.yximgs.com/udata/pkg/ks-merchant/cps-hybrid/empty_position.9b16b85c5a152402.png",
                              "title": "个人信息",
                              "brief": "",
                              "useChildren": false,
                              "content": "内容",
                              "useArrowIcon": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_bOPg_",
                                          "title": "单元格 > 单击"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_YAr51": {
                      "def": {
                          "namespace": "mybricks.taro.cell",
                          "version": "1.0.1"
                      },
                      "title": "单元格1",
                      "model": {
                          "data": {
                              "size": "large",
                              "align": "center",
                              "icon": "https://js-ec.static.yximgs.com/udata/pkg/ks-merchant/cps-hybrid/empty_position.9b16b85c5a152402.png",
                              "title": "阿里同学认证",
                              "brief": "",
                              "useChildren": false,
                              "content": "内容",
                              "useArrowIcon": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_HVleL",
                                          "title": "单元格1 > 单击"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_LlO2o": {
                      "def": {
                          "namespace": "mybricks.taro.cell",
                          "version": "1.0.1"
                      },
                      "title": "单元格2",
                      "model": {
                          "data": {
                              "size": "large",
                              "align": "center",
                              "icon": "https://js-ec.static.yximgs.com/udata/pkg/ks-merchant/cps-hybrid/empty_position.9b16b85c5a152402.png",
                              "title": "关于我们",
                              "brief": "",
                              "useChildren": false,
                              "content": "内容",
                              "useArrowIcon": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u__h0AF",
                                          "title": "单元格2 > 单击"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_N3_1F": {
                      "def": {
                          "namespace": "mybricks.taro.cell",
                          "version": "1.0.1"
                      },
                      "title": "单元格3",
                      "model": {
                          "data": {
                              "size": "large",
                              "align": "center",
                              "icon": "https://js-ec.static.yximgs.com/udata/pkg/ks-merchant/cps-hybrid/empty_position.9b16b85c5a152402.png",
                              "title": "问题反馈",
                              "brief": "",
                              "useChildren": false,
                              "content": "内容",
                              "useArrowIcon": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_zySKj",
                                          "title": "单元格3 > 单击"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_f0wEZ": {
                      "def": {
                          "namespace": "mybricks.core-comlib.fn",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "刷新页面数据",
                      "model": {
                          "data": {},
                          "inputAry": [
                              {
                                  "hostId": "param0",
                                  "title": "输入项",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "param0"
                      ],
                      "outputs": []
                  },
                  "u_UKTDJ": {
                      "def": {
                          "namespace": "mybricks.taro._getUserInfo",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "登录用户信息",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "get"
                      ],
                      "outputs": [
                          "onSuccess",
                          "onFail"
                      ]
                  },
                  "u_iUnWU": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "名片",
                      "model": {
                          "data": {
                              "_sceneId": "u_e2bWH",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u_uRmNt": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "登录",
                      "model": {
                          "data": {
                              "_sceneId": "login",
                              "_sceneShowType": "normal",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u_108Q_": {
                      "def": {
                          "namespace": "mybricks.taro._getUserInfo",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "登录用户信息1",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "get"
                      ],
                      "outputs": [
                          "onSuccess",
                          "onFail"
                      ]
                  },
                  "u_eKqoW": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "个人信息",
                      "model": {
                          "data": {
                              "_sceneId": "u_BO_q0",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u_IN2El": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "登录",
                      "model": {
                          "data": {
                              "_sceneId": "login",
                              "_sceneShowType": "normal",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u_ffDDd": {
                      "def": {
                          "namespace": "mybricks.taro._getUserInfo",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "登录用户信息2",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "get"
                      ],
                      "outputs": [
                          "onSuccess",
                          "onFail"
                      ]
                  },
                  "u_8vAUN": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "阿里认证",
                      "model": {
                          "data": {
                              "_sceneId": "u_HWdH2",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u_R3szz": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "登录",
                      "model": {
                          "data": {
                              "_sceneId": "login",
                              "_sceneShowType": "normal",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u_LHvA_": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "关于青橙会",
                      "model": {
                          "data": {
                              "_sceneId": "u_2iWQ0",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u_b9hQD": {
                      "def": {
                          "namespace": "mybricks.core-comlib.scenes",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "问题反馈",
                      "model": {
                          "data": {
                              "_sceneId": "u_8eNhM",
                              "openType": "blank"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [
                          "_open"
                      ],
                      "inputs": [
                          "open"
                      ],
                      "outputs": []
                  },
                  "u_xLPcZ": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "u_QFrDh",
                      "title": "服务接口",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_bwazis",
                                  "title": "C端-查询登录会员信息",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "loginUserId": {
                                              "type": "string"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "id": {
                                              "type": "number"
                                          },
                                          "openid": {
                                              "type": "string"
                                          },
                                          "头像": {
                                              "type": "string"
                                          },
                                          "昵称": {
                                              "type": "string"
                                          },
                                          "真实姓名保密等级": {
                                              "type": "enum"
                                          },
                                          "真实姓名": {
                                              "type": "string"
                                          },
                                          "性别保密等级": {
                                              "type": "enum"
                                          },
                                          "性别": {
                                              "type": "enum"
                                          },
                                          "当前所在国家": {
                                              "type": "enum"
                                          },
                                          "当前城市": {
                                              "type": "string"
                                          },
                                          "当前公司": {
                                              "type": "string"
                                          },
                                          "当前职务": {
                                              "type": "string"
                                          },
                                          "个人简介": {
                                              "type": "string"
                                          },
                                          "手机号码保密等级": {
                                              "type": "enum"
                                          },
                                          "手机号码": {
                                              "type": "string"
                                          },
                                          "微信二维码保密等级": {
                                              "type": "enum"
                                          },
                                          "微信二维码": {
                                              "type": "string"
                                          },
                                          "阿里花名": {
                                              "type": "string"
                                          },
                                          "阿里工号": {
                                              "type": "string"
                                          },
                                          "阿里部门": {
                                              "type": "string"
                                          },
                                          "阿里职务": {
                                              "type": "string"
                                          },
                                          "阿里入职时间": {
                                              "type": "string"
                                          },
                                          "_阿里入职时间": {
                                              "type": "number"
                                          },
                                          "阿里离职时间": {
                                              "type": "string"
                                          },
                                          "_阿里离职时间": {
                                              "type": "number"
                                          },
                                          "阿里认证信息": {
                                              "type": "string"
                                          },
                                          "阿里认证审核状态": {
                                              "type": "enum"
                                          },
                                          "会员标签列表": {
                                              "type": "array",
                                              "items": {
                                                  "type": "object",
                                                  "properties": {
                                                      "id": {
                                                          "type": "number"
                                                      },
                                                      "用户": {
                                                          "type": "number"
                                                      },
                                                      "标签": {
                                                          "type": "number"
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  },
                                  "createTime": 1689766261994,
                                  "lastModifiedTime": 1689766333648
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_2V_yg": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "u_QFrDh",
                      "title": "JS计算",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [
                              {
                                  "hostId": "output1",
                                  "title": "输出项1",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              },
                              {
                                  "hostId": "output2",
                                  "title": "输出项2",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              },
                              {
                                  "hostId": "output3",
                                  "title": "输出项3",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              },
                              {
                                  "hostId": "output4",
                                  "title": "输出项4",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              },
                              {
                                  "hostId": "output5",
                                  "title": "输出项5",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0",
                          "output1",
                          "output2",
                          "output3",
                          "output4",
                          "output5"
                      ]
                  },
                  "u_lNnKJ": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "u_QFrDh",
                      "title": "JS计算1",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [
                              {
                                  "hostId": "output1",
                                  "title": "输出项1",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0",
                          "output1"
                      ]
                  }
              },
              "id": "u_GuCyg",
              "title": "我的",
              "comsAutoRun": {},
              "_inputs": [],
              "_outputs": [],
              "inputs": [
                  {
                      "id": "open",
                      "title": "打开",
                      "type": "normal",
                      "schema": {
                          "type": "object",
                          "editable": true
                      }
                  }
              ],
              "outputs": [
                  {
                      "id": "onShow",
                      "title": "页面显示",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  },
                  {
                      "id": "onHide",
                      "title": "页面隐藏",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  }
              ],
              "cons": {
                  "_rootFrame_-open": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_f0wEZ",
                          "def": {
                              "namespace": "mybricks.core-comlib.fn",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "param0",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_ZRM9v-click": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_RnyWh",
                          "comId": "u_UKTDJ",
                          "def": {
                              "namespace": "mybricks.taro._getUserInfo",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "get",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_zWfvB-onClick": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_s6Veg",
                          "comId": "u_108Q_",
                          "def": {
                              "namespace": "mybricks.taro._getUserInfo",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "get",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_YAr51-onClick": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u__36Lx",
                          "comId": "u_ffDDd",
                          "def": {
                              "namespace": "mybricks.taro._getUserInfo",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "get",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_LlO2o-onClick": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_ndsCh",
                          "comId": "u_LHvA_",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_N3_1F-onClick": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_dmbgt",
                          "comId": "u_b9hQD",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_UKTDJ-onSuccess": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_iUnWU",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_UKTDJ-onFail": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_uRmNt",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_108Q_-onSuccess": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_eKqoW",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_108Q_-onFail": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_IN2El",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_ffDDd-onSuccess": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_8vAUN",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_ffDDd-onFail": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_R3szz",
                          "def": {
                              "namespace": "mybricks.core-comlib.scenes",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "open",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_QFrDh-param0": [
                      {
                          "type": "com",
                          "frameKey": "u_QFrDh",
                          "comId": "u_xLPcZ",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_xLPcZ-then": [
                      {
                          "type": "com",
                          "frameKey": "u_QFrDh",
                          "comId": "u_2V_yg",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_2V_yg-output0": [
                      {
                          "type": "com",
                          "frameKey": "u_QFrDh",
                          "finishPinParentKey": "u_4LurL",
                          "comId": "u_mX7A5",
                          "def": {
                              "namespace": "mybricks.taro.text",
                              "version": "1.0.0"
                          },
                          "pinId": "value",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_2V_yg-output1": [
                      {
                          "type": "com",
                          "frameKey": "u_QFrDh",
                          "finishPinParentKey": "u_TEodW",
                          "comId": "u_9IpWi",
                          "def": {
                              "namespace": "mybricks.taro.image",
                              "version": "1.0.0"
                          },
                          "pinId": "setSrc",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_2V_yg-output2": [
                      {
                          "type": "com",
                          "frameKey": "u_QFrDh",
                          "comId": "u_lNnKJ",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_2V_yg-output3": [
                      {
                          "type": "com",
                          "frameKey": "u_QFrDh",
                          "finishPinParentKey": "u_o6lPq",
                          "comId": "u_tDLtu",
                          "def": {
                              "namespace": "mybricks.taro.text",
                              "version": "1.0.0"
                          },
                          "pinId": "value",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_2V_yg-output4": [
                      {
                          "type": "com",
                          "frameKey": "u_QFrDh",
                          "finishPinParentKey": "u_1WODQ",
                          "comId": "u_DaEzc",
                          "def": {
                              "namespace": "mybricks.taro.text",
                              "version": "1.0.0"
                          },
                          "pinId": "value",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_2V_yg-output5": [
                      {
                          "type": "com",
                          "frameKey": "u_QFrDh",
                          "finishPinParentKey": "u_JhHyl",
                          "comId": "u_hTYFj",
                          "def": {
                              "namespace": "mybricks.taro.text",
                              "version": "1.0.0"
                          },
                          "pinId": "value",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_lNnKJ-output0": [
                      {
                          "type": "com",
                          "frameKey": "u_QFrDh",
                          "finishPinParentKey": "u__D19s",
                          "comId": "u_pkYAI",
                          "def": {
                              "namespace": "mybricks.taro.containerCondition",
                              "version": "1.0.0"
                          },
                          "pinId": "condition_u_k5iadi",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_lNnKJ-output1": [
                      {
                          "type": "com",
                          "frameKey": "u_QFrDh",
                          "finishPinParentKey": "u_Mep58",
                          "comId": "u_pkYAI",
                          "def": {
                              "namespace": "mybricks.taro.containerCondition",
                              "version": "1.0.0"
                          },
                          "pinId": "condition_u_hfm685",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ]
              },
              "pinRels": {
                  "u_xLPcZ-call": [
                      "then",
                      "catch"
                  ]
              },
              "pinProxies": {
                  "u_f0wEZ-param0": {
                      "type": "frame",
                      "frameId": "u_QFrDh",
                      "pinId": "param0"
                  },
                  "u_iUnWU-_open": {
                      "type": "frame",
                      "frameId": "u_e2bWH",
                      "pinId": "open"
                  },
                  "u_uRmNt-_open": {
                      "type": "frame",
                      "frameId": "login",
                      "pinId": "open"
                  },
                  "u_eKqoW-_open": {
                      "type": "frame",
                      "frameId": "u_BO_q0",
                      "pinId": "open"
                  },
                  "u_IN2El-_open": {
                      "type": "frame",
                      "frameId": "login",
                      "pinId": "open"
                  },
                  "u_8vAUN-_open": {
                      "type": "frame",
                      "frameId": "u_HWdH2",
                      "pinId": "open"
                  },
                  "u_R3szz-_open": {
                      "type": "frame",
                      "frameId": "login",
                      "pinId": "open"
                  },
                  "u_LHvA_-_open": {
                      "type": "frame",
                      "frameId": "u_2iWQ0",
                      "pinId": "open"
                  },
                  "u_b9hQD-_open": {
                      "type": "frame",
                      "frameId": "u_8eNhM",
                      "pinId": "open"
                  }
              },
              "pinValueProxies": {},
              "slot": {
                  "id": "u_GuCyg",
                  "title": "我的",
                  "comAry": [
                      {
                          "id": "u_rFXq1",
                          "name": "u__PbO5",
                          "def": {
                              "namespace": "mybricks.taro.systemPage",
                              "version": "1.0.1"
                          },
                          "slots": {
                              "content": {
                                  "id": "content",
                                  "title": "内容",
                                  "comAry": [
                                      {
                                          "id": "u_ZRM9v",
                                          "name": "u_4DG8K",
                                          "def": {
                                              "namespace": "mybricks.taro.containerGrid",
                                              "version": "1.0.0"
                                          },
                                          "slots": {
                                              "col0": {
                                                  "id": "col0",
                                                  "title": "列（自由排列）",
                                                  "comAry": [
                                                      {
                                                          "id": "u_BA1ap",
                                                          "name": "u_NM3Zn",
                                                          "def": {
                                                              "namespace": "mybricks.taro.image",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_9IpWi",
                                                          "name": "u_6HG_B",
                                                          "def": {
                                                              "namespace": "mybricks.taro.image",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_mX7A5",
                                                          "name": "u_CZ2ki",
                                                          "def": {
                                                              "namespace": "mybricks.taro.text",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_pkYAI",
                                                          "name": "u_R74KO",
                                                          "def": {
                                                              "namespace": "mybricks.taro.containerCondition",
                                                              "version": "1.0.0"
                                                          },
                                                          "slots": {
                                                              "condition_u_994dbc": {
                                                                  "id": "condition_u_994dbc",
                                                                  "title": "未登录",
                                                                  "comAry": [],
                                                                  "style": {
                                                                      "layout": "flex-column",
                                                                      "justifyContent": "flex-start",
                                                                      "alignItems": "flex-start"
                                                                  }
                                                              },
                                                              "condition_u_k5iadi": {
                                                                  "id": "condition_u_k5iadi",
                                                                  "title": "阿里校友",
                                                                  "comAry": [
                                                                      {
                                                                          "id": "u_nLPOv",
                                                                          "name": "u_6_sQS",
                                                                          "def": {
                                                                              "namespace": "mybricks.taro.containerGrid",
                                                                              "version": "1.0.0"
                                                                          },
                                                                          "slots": {
                                                                              "col0": {
                                                                                  "id": "col0",
                                                                                  "title": "列（横向排列）",
                                                                                  "comAry": [
                                                                                      {
                                                                                          "id": "u_97Wzc",
                                                                                          "name": "u_zQ_Kd",
                                                                                          "def": {
                                                                                              "namespace": "mybricks.taro.image",
                                                                                              "version": "1.0.0"
                                                                                          }
                                                                                      }
                                                                                  ],
                                                                                  "style": {
                                                                                      "layout": "flex-row",
                                                                                      "justifyContent": "flex-start",
                                                                                      "alignItems": "flex-start"
                                                                                  }
                                                                              }
                                                                          }
                                                                      }
                                                                  ],
                                                                  "style": {
                                                                      "layout": "flex-column",
                                                                      "justifyContent": "flex-start",
                                                                      "alignItems": "flex-start"
                                                                  }
                                                              },
                                                              "condition_u_hfm685": {
                                                                  "id": "condition_u_hfm685",
                                                                  "title": "未认证",
                                                                  "comAry": [
                                                                      {
                                                                          "id": "u_nKOPS",
                                                                          "name": "u_gyRB8",
                                                                          "def": {
                                                                              "namespace": "mybricks.taro.containerGrid",
                                                                              "version": "1.0.0"
                                                                          },
                                                                          "slots": {
                                                                              "col0": {
                                                                                  "id": "col0",
                                                                                  "title": "列（横向排列）",
                                                                                  "comAry": [
                                                                                      {
                                                                                          "id": "u_kc6Ry",
                                                                                          "name": "u_gkB0T",
                                                                                          "def": {
                                                                                              "namespace": "mybricks.taro.image",
                                                                                              "version": "1.0.0"
                                                                                          }
                                                                                      }
                                                                                  ],
                                                                                  "style": {
                                                                                      "layout": "flex-row",
                                                                                      "justifyContent": "flex-start",
                                                                                      "alignItems": "flex-start"
                                                                                  }
                                                                              }
                                                                          }
                                                                      }
                                                                  ],
                                                                  "style": {
                                                                      "layout": "flex-column",
                                                                      "justifyContent": "flex-start",
                                                                      "alignItems": "flex-start"
                                                                  }
                                                              }
                                                          }
                                                      },
                                                      {
                                                          "id": "u_tDLtu",
                                                          "name": "u_Utyq_",
                                                          "def": {
                                                              "namespace": "mybricks.taro.text",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_5R3aT",
                                                          "name": "u_bMBK_",
                                                          "def": {
                                                              "namespace": "mybricks.taro.containerGrid",
                                                              "version": "1.0.0"
                                                          },
                                                          "slots": {
                                                              "col0": {
                                                                  "id": "col0",
                                                                  "title": "内容（竖向排列）",
                                                                  "comAry": [
                                                                      {
                                                                          "id": "u_DaEzc",
                                                                          "name": "u_W2rjS",
                                                                          "def": {
                                                                              "namespace": "mybricks.taro.text",
                                                                              "version": "1.0.0"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "style": {
                                                                      "layout": "flex-column",
                                                                      "justifyContent": "flex-start",
                                                                      "alignItems": "flex-start"
                                                                  }
                                                              },
                                                              "u_ktj3jy": {
                                                                  "id": "u_ktj3jy",
                                                                  "title": "列（纵向排列）",
                                                                  "comAry": [
                                                                      {
                                                                          "id": "u_hTYFj",
                                                                          "name": "u_W5NP1",
                                                                          "def": {
                                                                              "namespace": "mybricks.taro.text",
                                                                              "version": "1.0.0"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "style": {
                                                                      "layout": "flex-column",
                                                                      "justifyContent": "flex-start",
                                                                      "alignItems": "flex-start"
                                                                  }
                                                              }
                                                          }
                                                      }
                                                  ],
                                                  "style": {
                                                      "layout": "absolute",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      },
                                      {
                                          "id": "u_zWfvB",
                                          "name": "u_Nc7p6",
                                          "def": {
                                              "namespace": "mybricks.taro.cell",
                                              "version": "1.0.1"
                                          },
                                          "slots": {
                                              "children": {
                                                  "id": "children",
                                                  "title": "内容",
                                                  "comAry": [],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      },
                                      {
                                          "id": "u_YAr51",
                                          "name": "u_UDPAF",
                                          "def": {
                                              "namespace": "mybricks.taro.cell",
                                              "version": "1.0.1"
                                          },
                                          "slots": {
                                              "children": {
                                                  "id": "children",
                                                  "title": "内容",
                                                  "comAry": [],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      },
                                      {
                                          "id": "u_LlO2o",
                                          "name": "u_zEEVg",
                                          "def": {
                                              "namespace": "mybricks.taro.cell",
                                              "version": "1.0.1"
                                          },
                                          "slots": {
                                              "children": {
                                                  "id": "children",
                                                  "title": "内容",
                                                  "comAry": [],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      },
                                      {
                                          "id": "u_N3_1F",
                                          "name": "u_r0A_2",
                                          "def": {
                                              "namespace": "mybricks.taro.cell",
                                              "version": "1.0.1"
                                          },
                                          "slots": {
                                              "children": {
                                                  "id": "children",
                                                  "title": "内容",
                                                  "comAry": [],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              },
                              "footer": {
                                  "id": "footer",
                                  "title": "页尾",
                                  "comAry": [],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              }
                          }
                      }
                  ],
                  "style": {
                      "left": 0,
                      "top": 0,
                      "layout": "flex-column",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start"
                  }
              }
          }
      },
      {
          "pagePath": "pages/u_BO_q0/index",
          "pageConfig": {
              "navigationStyle": "default",
              "navigationBarBackgroundColor": "#ffffff",
              "navigationBarTextStyle": "black",
              "navigationBarTitleText": "个人信息"
          },
          "pageToJson": {
              "-v": "1.0.9",
              "deps": [
                  {
                      "namespace": "mybricks.taro.systemPage",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro._connector",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  },
                  {
                      "namespace": "mybricks.taro.formContainer",
                      "version": "1.0.1"
                  },
                  {
                      "namespace": "mybricks.taro.formInput",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.formImageUploader",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.formRadio",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.formLocation",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.formTextarea",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro._muilt-inputJs",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  },
                  {
                      "namespace": "mybricks.taro._showToast",
                      "version": "1.0.1",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.taro._timerDelay",
                      "version": "1.0.0",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.taro._navigateBack",
                      "version": "1.0.0",
                      "rtType": "js"
                  }
              ],
              "coms": {
                  "u_ywmQQ": {
                      "def": {
                          "namespace": "mybricks.taro.systemPage",
                          "version": "1.0.0"
                      },
                      "title": "页面",
                      "model": {
                          "data": {
                              "useNavigationStyle": "default",
                              "navigationStyle": "default",
                              "navigationBarBackgroundColor": "rgba(255,255,255,1)",
                              "navigationBarTextStyle": "black",
                              "navigationBarTitleText": "个人信息",
                              "homeButton": false,
                              "customNavigation": {
                                  "style": {
                                      "background": "#464646"
                                  },
                                  "useFixed": true
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [],
                      "outputs": []
                  },
                  "u_iMo_I": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "服务接口",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_bwazis",
                                  "title": "C端-查询登录会员信息",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "loginUserId": {
                                              "type": "string"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "id": {
                                              "type": "number"
                                          },
                                          "openid": {
                                              "type": "string"
                                          },
                                          "头像": {
                                              "type": "string"
                                          },
                                          "昵称": {
                                              "type": "string"
                                          },
                                          "真实姓名保密等级": {
                                              "type": "enum"
                                          },
                                          "真实姓名": {
                                              "type": "string"
                                          },
                                          "性别保密等级": {
                                              "type": "enum"
                                          },
                                          "性别": {
                                              "type": "enum"
                                          },
                                          "当前所在国家": {
                                              "type": "enum"
                                          },
                                          "当前城市": {
                                              "type": "string"
                                          },
                                          "当前公司": {
                                              "type": "string"
                                          },
                                          "当前职务": {
                                              "type": "string"
                                          },
                                          "个人简介": {
                                              "type": "string"
                                          },
                                          "手机号码保密等级": {
                                              "type": "enum"
                                          },
                                          "手机号码": {
                                              "type": "string"
                                          },
                                          "微信二维码保密等级": {
                                              "type": "enum"
                                          },
                                          "微信二维码": {
                                              "type": "string"
                                          },
                                          "阿里花名": {
                                              "type": "string"
                                          },
                                          "阿里工号": {
                                              "type": "string"
                                          },
                                          "阿里部门": {
                                              "type": "string"
                                          },
                                          "阿里职务": {
                                              "type": "string"
                                          },
                                          "阿里入职时间": {
                                              "type": "string"
                                          },
                                          "_阿里入职时间": {
                                              "type": "number"
                                          },
                                          "阿里离职时间": {
                                              "type": "string"
                                          },
                                          "_阿里离职时间": {
                                              "type": "number"
                                          },
                                          "阿里认证信息": {
                                              "type": "string"
                                          },
                                          "阿里认证审核状态": {
                                              "type": "enum"
                                          },
                                          "会员标签列表": {
                                              "type": "array",
                                              "items": {
                                                  "type": "object",
                                                  "properties": {
                                                      "id": {
                                                          "type": "number"
                                                      },
                                                      "用户": {
                                                          "type": "number"
                                                      },
                                                      "标签": {
                                                          "type": "number"
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  },
                                  "createTime": 1689766261994,
                                  "lastModifiedTime": 1689766333648
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_xcMCE": {
                      "def": {
                          "namespace": "mybricks.taro.formContainer",
                          "version": "1.0.1"
                      },
                      "title": "表单容器",
                      "model": {
                          "data": {
                              "useSubmitButton": true,
                              "submitButtonText": "保存",
                              "items": [
                                  {
                                      "id": "u_W8Tbo",
                                      "comName": "u_4fs1p",
                                      "name": "id",
                                      "label": "id",
                                      "hidden": true,
                                      "rules": []
                                  },
                                  {
                                      "id": "u_1sOUx",
                                      "comName": "u_l4_17",
                                      "name": "昵称",
                                      "label": "昵称",
                                      "hidden": false,
                                      "rules": []
                                  },
                                  {
                                      "id": "u_oyxFh",
                                      "comName": "u_QtnBi",
                                      "name": "头像",
                                      "label": "头像",
                                      "hidden": false,
                                      "rules": []
                                  },
                                  {
                                      "id": "u_3NWIz",
                                      "comName": "u_MzBes",
                                      "name": "真实姓名",
                                      "label": "真实姓名",
                                      "hidden": false,
                                      "rules": []
                                  },
                                  {
                                      "id": "u_jKKOL",
                                      "comName": "u_whdDu",
                                      "name": "性别",
                                      "label": "性别",
                                      "hidden": false,
                                      "rules": []
                                  },
                                  {
                                      "id": "u_vJg2i",
                                      "comName": "u_uwSUk",
                                      "name": "当前所在国家",
                                      "label": "当前所在国家",
                                      "hidden": false,
                                      "rules": []
                                  },
                                  {
                                      "id": "u_564e3",
                                      "comName": "u_se8Ya",
                                      "name": "当前城市",
                                      "label": "当前城市",
                                      "hidden": false,
                                      "rules": []
                                  },
                                  {
                                      "id": "u_mQGg7",
                                      "comName": "u_rOjf8",
                                      "name": "当前职务",
                                      "label": "当前职务",
                                      "hidden": false,
                                      "rules": []
                                  },
                                  {
                                      "id": "u_trk9m",
                                      "comName": "u_3B2Zl",
                                      "name": "当前公司",
                                      "label": "当前公司",
                                      "hidden": false,
                                      "rules": []
                                  },
                                  {
                                      "id": "u_qAzbb",
                                      "comName": "u_djD_0",
                                      "name": "个人简介",
                                      "label": "个人简介",
                                      "hidden": false,
                                      "rules": []
                                  },
                                  {
                                      "id": "u_4Y1Hp",
                                      "comName": "u_28Vwp",
                                      "name": "手机号码",
                                      "label": "手机号码",
                                      "hidden": false,
                                      "rules": []
                                  },
                                  {
                                      "id": "u_w917C",
                                      "comName": "u_FQKNX",
                                      "name": "微信二维码",
                                      "label": "微信二维码",
                                      "hidden": false,
                                      "rules": []
                                  }
                              ],
                              "nameCount": 12
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onSubmit": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_g6fqO",
                                          "title": "表单容器 > 提交数据输出"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 12,
                              "marginBottom": 12,
                              "marginLeft": 12,
                              "marginRight": 12,
                              "styleAry": [
                                  {
                                      "selector": ".mybricks-submit .taroify-button",
                                      "css": {
                                          "borderTopLeftRadius": "4px",
                                          "borderBottomLeftRadius": "4px",
                                          "borderBottomRightRadius": "4px",
                                          "borderTopRightRadius": "4px",
                                          "borderTopWidth": "0px",
                                          "borderRightWidth": "0px",
                                          "borderBottomWidth": "0px",
                                          "borderLeftWidth": "0px"
                                      }
                                  }
                              ]
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setFieldsValue",
                          "getFieldsValue",
                          "submit",
                          "submitAndMerge",
                          "resetFields",
                          "setFormItemsProps",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "returnValues",
                          "onSubmit",
                          "onMergeSubmit",
                          "onReset"
                      ]
                  },
                  "u_W8Tbo": {
                      "def": {
                          "namespace": "mybricks.taro.formInput",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_xcMCE",
                      "title": "单行输入",
                      "model": {
                          "data": {
                              "label": "单行输入",
                              "name": "单行输入",
                              "value": "",
                              "placeholder": "请输入内容",
                              "type": "text",
                              "disabled": false,
                              "required": false,
                              "hidden": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_1sOUx": {
                      "def": {
                          "namespace": "mybricks.taro.formInput",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_xcMCE",
                      "title": "单行输入1",
                      "model": {
                          "data": {
                              "label": "单行输入",
                              "name": "单行输入",
                              "value": "",
                              "placeholder": "请输入内容",
                              "type": "text",
                              "disabled": false,
                              "required": false,
                              "hidden": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_oyxFh": {
                      "def": {
                          "namespace": "mybricks.taro.formImageUploader",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_xcMCE",
                      "title": "图片上传",
                      "model": {
                          "data": {
                              "label": "图片上传",
                              "name": "图片上传",
                              "value": [],
                              "maxCount": "1",
                              "useValueString": true,
                              "placeholder": "",
                              "required": false,
                              "chooseAvatar": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_3NWIz": {
                      "def": {
                          "namespace": "mybricks.taro.formInput",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_xcMCE",
                      "title": "单行输入2",
                      "model": {
                          "data": {
                              "label": "单行输入",
                              "name": "单行输入",
                              "value": "",
                              "placeholder": "请输入内容",
                              "type": "text",
                              "disabled": false,
                              "required": false,
                              "hidden": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_jKKOL": {
                      "def": {
                          "namespace": "mybricks.taro.formRadio",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_xcMCE",
                      "title": "单选",
                      "model": {
                          "data": {
                              "label": "单选",
                              "hideLabel": false,
                              "name": "单选",
                              "direction": "horizontal",
                              "value": "",
                              "options": [
                                  {
                                      "_id": "2lyoAZ",
                                      "label": "男",
                                      "value": "男",
                                      "icon": ""
                                  },
                                  {
                                      "_id": "2Tywlj",
                                      "label": "女",
                                      "value": "女",
                                      "icon": ""
                                  }
                              ]
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_vJg2i": {
                      "def": {
                          "namespace": "mybricks.taro.formRadio",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_xcMCE",
                      "title": "单选1",
                      "model": {
                          "data": {
                              "label": "单选",
                              "hideLabel": false,
                              "name": "单选",
                              "direction": "horizontal",
                              "value": "",
                              "options": [
                                  {
                                      "_id": "vAzAPB",
                                      "label": "国内",
                                      "value": "国内",
                                      "icon": ""
                                  },
                                  {
                                      "_id": "6ClE9p",
                                      "label": "海外",
                                      "value": "海外",
                                      "icon": ""
                                  }
                              ]
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u__lcnq",
                                          "title": "单选1 > 值更新"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_564e3": {
                      "def": {
                          "namespace": "mybricks.taro.formLocation",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_xcMCE",
                      "title": "省市区选择",
                      "model": {
                          "data": {
                              "label": "省市区选择",
                              "name": "省市区选择",
                              "type": "select",
                              "value": "",
                              "placeholder": "点击选择地址"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "changeType",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_mQGg7": {
                      "def": {
                          "namespace": "mybricks.taro.formInput",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_xcMCE",
                      "title": "单行输入3",
                      "model": {
                          "data": {
                              "label": "单行输入",
                              "name": "单行输入",
                              "value": "",
                              "placeholder": "请输入内容",
                              "type": "text",
                              "disabled": false,
                              "required": false,
                              "hidden": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_trk9m": {
                      "def": {
                          "namespace": "mybricks.taro.formInput",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_xcMCE",
                      "title": "单行输入4",
                      "model": {
                          "data": {
                              "label": "单行输入",
                              "name": "单行输入",
                              "value": "",
                              "placeholder": "请输入内容",
                              "type": "text",
                              "disabled": false,
                              "required": false,
                              "hidden": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_qAzbb": {
                      "def": {
                          "namespace": "mybricks.taro.formTextarea",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_xcMCE",
                      "title": "多行输入",
                      "model": {
                          "data": {
                              "label": "多行输入",
                              "name": "多行输入",
                              "value": "",
                              "placeholder": "请输入内容",
                              "limit": 100
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "onBlur",
                          "onPressEnter",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_4Y1Hp": {
                      "def": {
                          "namespace": "mybricks.taro.formInput",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_xcMCE",
                      "title": "单行输入5",
                      "model": {
                          "data": {
                              "label": "单行输入",
                              "name": "单行输入",
                              "value": "",
                              "placeholder": "请输入内容",
                              "type": "text",
                              "disabled": false,
                              "required": false,
                              "hidden": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_w917C": {
                      "def": {
                          "namespace": "mybricks.taro.formImageUploader",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_xcMCE",
                      "title": "图片上传1",
                      "model": {
                          "data": {
                              "label": "图片上传",
                              "name": "图片上传",
                              "value": [],
                              "maxCount": "1",
                              "useValueString": true,
                              "placeholder": "",
                              "required": false,
                              "chooseAvatar": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_ijJSc": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "content",
                      "parentComId": "u_xcMCE",
                      "title": "JS计算",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0"
                      ]
                  },
                  "u_mKqCJ": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "服务接口1",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_sjbtya",
                                  "title": "C端-更新会员信息",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "id": {
                                              "type": "string"
                                          },
                                          "头像": {
                                              "type": "string"
                                          },
                                          "昵称": {
                                              "type": "string"
                                          },
                                          "真实姓名": {
                                              "type": "string"
                                          },
                                          "性别保密等级": {
                                              "type": "enum",
                                              "items": [
                                                  {
                                                      "type": "string",
                                                      "value": "公开"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "组织内可见"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "保密"
                                                  }
                                              ]
                                          },
                                          "性别": {
                                              "type": "string"
                                          },
                                          "当前城市": {
                                              "type": "string"
                                          },
                                          "当前职务": {
                                              "type": "string"
                                          },
                                          "个人简介": {
                                              "type": "string"
                                          },
                                          "手机号码保密等级": {
                                              "type": "enum",
                                              "items": [
                                                  {
                                                      "type": "string",
                                                      "value": "公开"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "组织内可见"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "保密"
                                                  }
                                              ]
                                          },
                                          "手机号码": {
                                              "type": "string"
                                          },
                                          "微信二维码保密等级": {
                                              "type": "enum",
                                              "items": [
                                                  {
                                                      "type": "string",
                                                      "value": "公开"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "组织内可见"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "保密"
                                                  }
                                              ]
                                          },
                                          "微信二维码": {
                                              "type": "string"
                                          },
                                          "阿里花名": {
                                              "type": "string"
                                          },
                                          "阿里工号": {
                                              "type": "string"
                                          },
                                          "阿里部门": {
                                              "type": "string"
                                          },
                                          "阿里职务": {
                                              "type": "string"
                                          },
                                          "阿里入职时间": {
                                              "type": "number"
                                          },
                                          "阿里离职时间": {
                                              "type": "number"
                                          },
                                          "阿里认证信息": {
                                              "type": "string"
                                          },
                                          "阿里认证审核状态": {
                                              "type": "enum",
                                              "items": [
                                                  {
                                                      "type": "string",
                                                      "value": "待审核"
                                                  }
                                              ]
                                          },
                                          "真实姓名保密等级": {
                                              "type": "enum",
                                              "items": [
                                                  {
                                                      "type": "string",
                                                      "value": "公开"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "组织内可见"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "保密"
                                                  }
                                              ]
                                          },
                                          "当前所在国家": {
                                              "type": "enum",
                                              "items": [
                                                  {
                                                      "type": "string",
                                                      "value": "国内"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "海外"
                                                  }
                                              ]
                                          },
                                          "当前公司": {
                                              "type": "string"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "follow",
                                      "editable": true
                                  },
                                  "createTime": 1689766261992,
                                  "lastModifiedTime": 1689766319159
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_ChzZW": {
                      "def": {
                          "namespace": "mybricks.taro._showToast",
                          "version": "1.0.1",
                          "rtType": "js"
                      },
                      "title": "显示 Toast",
                      "model": {
                          "data": {
                              "title": "保存成功",
                              "duration": 1000,
                              "icon": "success",
                              "mask": false,
                              "dynamic": false,
                              "id": "u_kdwzbd"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "showToast"
                      ],
                      "outputs": [
                          "afterShowToast"
                      ]
                  },
                  "u_f4ru9": {
                      "def": {
                          "namespace": "mybricks.taro._timerDelay",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "延迟执行",
                      "model": {
                          "data": {
                              "delay": 1000,
                              "id": "u_i6t7r6"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "trigger"
                      ],
                      "outputs": [
                          "trigger"
                      ]
                  },
                  "u_22STO": {
                      "def": {
                          "namespace": "mybricks.taro._navigateBack",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "页面返回",
                      "model": {
                          "data": {
                              "delta": 1
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "navigateBack"
                      ],
                      "outputs": []
                  }
              },
              "id": "u_BO_q0",
              "title": "个人信息",
              "comsAutoRun": {},
              "_inputs": [],
              "_outputs": [],
              "inputs": [
                  {
                      "id": "open",
                      "title": "打开",
                      "type": "normal",
                      "schema": {
                          "type": "object",
                          "editable": true
                      }
                  }
              ],
              "outputs": [
                  {
                      "id": "onShow",
                      "title": "页面显示",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  },
                  {
                      "id": "onHide",
                      "title": "页面隐藏",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  }
              ],
              "cons": {
                  "_rootFrame_-open": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_iMo_I",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_iMo_I-then": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_ax8l3",
                          "comId": "u_xcMCE",
                          "def": {
                              "namespace": "mybricks.taro.formContainer",
                              "version": "1.0.1"
                          },
                          "pinId": "setFieldsValue",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_xcMCE-onSubmit": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_0Mlxe",
                          "comId": "u_mKqCJ",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_vJg2i-onChange": [
                      {
                          "type": "com",
                          "frameKey": "u_xcMCE-content",
                          "startPinParentKey": "u_tkSdJ",
                          "comId": "u_ijJSc",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_ijJSc-output0": [
                      {
                          "type": "com",
                          "frameKey": "u_xcMCE-content",
                          "finishPinParentKey": "u_C1xVx",
                          "comId": "u_564e3",
                          "def": {
                              "namespace": "mybricks.taro.formLocation",
                              "version": "1.0.0"
                          },
                          "pinId": "changeType",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_mKqCJ-then": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_ChzZW",
                          "def": {
                              "namespace": "mybricks.taro._showToast",
                              "version": "1.0.1",
                              "rtType": "js"
                          },
                          "pinId": "showToast",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_ChzZW-afterShowToast": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_f4ru9",
                          "def": {
                              "namespace": "mybricks.taro._timerDelay",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "trigger",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_f4ru9-trigger": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_22STO",
                          "def": {
                              "namespace": "mybricks.taro._navigateBack",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "navigateBack",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ]
              },
              "pinRels": {
                  "u_iMo_I-call": [
                      "then",
                      "catch"
                  ],
                  "u_xcMCE-getFieldsValue": [
                      "returnValues"
                  ],
                  "u_xcMCE-submit": [
                      "onSubmit"
                  ],
                  "u_xcMCE-submitAndMerge": [
                      "onMergeSubmit"
                  ],
                  "u_xcMCE-resetFields": [
                      "onReset"
                  ],
                  "u_W8Tbo-validate": [
                      "returnValidate"
                  ],
                  "u_W8Tbo-getValue": [
                      "returnValue"
                  ],
                  "u_1sOUx-validate": [
                      "returnValidate"
                  ],
                  "u_1sOUx-getValue": [
                      "returnValue"
                  ],
                  "u_oyxFh-validate": [
                      "returnValidate"
                  ],
                  "u_oyxFh-getValue": [
                      "returnValue"
                  ],
                  "u_3NWIz-validate": [
                      "returnValidate"
                  ],
                  "u_3NWIz-getValue": [
                      "returnValue"
                  ],
                  "u_jKKOL-validate": [
                      "returnValidate"
                  ],
                  "u_jKKOL-getValue": [
                      "returnValue"
                  ],
                  "u_vJg2i-validate": [
                      "returnValidate"
                  ],
                  "u_vJg2i-getValue": [
                      "returnValue"
                  ],
                  "u_564e3-validate": [
                      "returnValidate"
                  ],
                  "u_564e3-getValue": [
                      "returnValue"
                  ],
                  "u_mQGg7-validate": [
                      "returnValidate"
                  ],
                  "u_mQGg7-getValue": [
                      "returnValue"
                  ],
                  "u_trk9m-validate": [
                      "returnValidate"
                  ],
                  "u_trk9m-getValue": [
                      "returnValue"
                  ],
                  "u_qAzbb-validate": [
                      "returnValidate"
                  ],
                  "u_qAzbb-getValue": [
                      "returnValue"
                  ],
                  "u_4Y1Hp-validate": [
                      "returnValidate"
                  ],
                  "u_4Y1Hp-getValue": [
                      "returnValue"
                  ],
                  "u_w917C-validate": [
                      "returnValidate"
                  ],
                  "u_w917C-getValue": [
                      "returnValue"
                  ],
                  "u_mKqCJ-call": [
                      "then",
                      "catch"
                  ]
              },
              "pinProxies": {},
              "pinValueProxies": {},
              "slot": {
                  "id": "u_BO_q0",
                  "title": "个人信息",
                  "comAry": [
                      {
                          "id": "u_ywmQQ",
                          "name": "u_pZBhU",
                          "def": {
                              "namespace": "mybricks.taro.systemPage",
                              "version": "1.0.0"
                          },
                          "slots": {
                              "content": {
                                  "id": "content",
                                  "title": "内容",
                                  "comAry": [
                                      {
                                          "id": "u_xcMCE",
                                          "name": "u_8_BIZ",
                                          "def": {
                                              "namespace": "mybricks.taro.formContainer",
                                              "version": "1.0.1"
                                          },
                                          "slots": {
                                              "content": {
                                                  "id": "content",
                                                  "title": "表单容器",
                                                  "type": "scope",
                                                  "comAry": [
                                                      {
                                                          "id": "u_W8Tbo",
                                                          "name": "u_4fs1p",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formInput",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_oyxFh",
                                                          "name": "u_QtnBi",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formImageUploader",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_1sOUx",
                                                          "name": "u_l4_17",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formInput",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_3NWIz",
                                                          "name": "u_MzBes",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formInput",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_jKKOL",
                                                          "name": "u_whdDu",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formRadio",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_vJg2i",
                                                          "name": "u_uwSUk",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formRadio",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_564e3",
                                                          "name": "u_se8Ya",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formLocation",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_trk9m",
                                                          "name": "u_3B2Zl",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formInput",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_mQGg7",
                                                          "name": "u_rOjf8",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formInput",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_qAzbb",
                                                          "name": "u_djD_0",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formTextarea",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_4Y1Hp",
                                                          "name": "u_28Vwp",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formInput",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_w917C",
                                                          "name": "u_FQKNX",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formImageUploader",
                                                              "version": "1.0.0"
                                                          }
                                                      }
                                                  ],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              }
                          }
                      }
                  ],
                  "style": {
                      "left": 0,
                      "top": 0,
                      "layout": "flex-column",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start"
                  }
              }
          }
      },
      {
          "pagePath": "pages/u_HWdH2/index",
          "pageConfig": {
              "navigationStyle": "default",
              "navigationBarBackgroundColor": "#ffffff",
              "navigationBarTextStyle": "black",
              "navigationBarTitleText": "阿里同学认证"
          },
          "pageToJson": {
              "-v": "1.0.9",
              "deps": [
                  {
                      "namespace": "mybricks.taro.systemPage",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro._connector",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  },
                  {
                      "namespace": "mybricks.taro.formContainer",
                      "version": "1.0.1"
                  },
                  {
                      "namespace": "mybricks.taro.formInput",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.formDatetime",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.formImageUploader",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro._showToast",
                      "version": "1.0.1",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.taro._timerDelay",
                      "version": "1.0.0",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.taro._navigateBack",
                      "version": "1.0.0",
                      "rtType": "js"
                  }
              ],
              "coms": {
                  "u_xK_nZ": {
                      "def": {
                          "namespace": "mybricks.taro.systemPage",
                          "version": "1.0.0"
                      },
                      "title": "页面",
                      "model": {
                          "data": {
                              "useNavigationStyle": "default",
                              "navigationStyle": "default",
                              "navigationBarBackgroundColor": "rgba(255,255,255,1)",
                              "navigationBarTextStyle": "black",
                              "navigationBarTitleText": "阿里同学认证",
                              "homeButton": false,
                              "customNavigation": {
                                  "style": {
                                      "background": "#464646"
                                  },
                                  "useFixed": true
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [],
                      "outputs": []
                  },
                  "u__LiV6": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "服务接口",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_bwazis",
                                  "title": "C端-查询登录会员信息",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "loginUserId": {
                                              "type": "string"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "id": {
                                              "type": "number"
                                          },
                                          "openid": {
                                              "type": "string"
                                          },
                                          "头像": {
                                              "type": "string"
                                          },
                                          "昵称": {
                                              "type": "string"
                                          },
                                          "真实姓名保密等级": {
                                              "type": "enum"
                                          },
                                          "真实姓名": {
                                              "type": "string"
                                          },
                                          "性别保密等级": {
                                              "type": "enum"
                                          },
                                          "性别": {
                                              "type": "enum"
                                          },
                                          "当前所在国家": {
                                              "type": "enum"
                                          },
                                          "当前城市": {
                                              "type": "string"
                                          },
                                          "当前公司": {
                                              "type": "string"
                                          },
                                          "当前职务": {
                                              "type": "string"
                                          },
                                          "个人简介": {
                                              "type": "string"
                                          },
                                          "手机号码保密等级": {
                                              "type": "enum"
                                          },
                                          "手机号码": {
                                              "type": "string"
                                          },
                                          "微信二维码保密等级": {
                                              "type": "enum"
                                          },
                                          "微信二维码": {
                                              "type": "string"
                                          },
                                          "阿里花名": {
                                              "type": "string"
                                          },
                                          "阿里工号": {
                                              "type": "string"
                                          },
                                          "阿里部门": {
                                              "type": "string"
                                          },
                                          "阿里职务": {
                                              "type": "string"
                                          },
                                          "阿里入职时间": {
                                              "type": "string"
                                          },
                                          "_阿里入职时间": {
                                              "type": "number"
                                          },
                                          "阿里离职时间": {
                                              "type": "string"
                                          },
                                          "_阿里离职时间": {
                                              "type": "number"
                                          },
                                          "阿里认证信息": {
                                              "type": "string"
                                          },
                                          "阿里认证审核状态": {
                                              "type": "enum"
                                          },
                                          "会员标签列表": {
                                              "type": "array",
                                              "items": {
                                                  "type": "object",
                                                  "properties": {
                                                      "id": {
                                                          "type": "number"
                                                      },
                                                      "用户": {
                                                          "type": "number"
                                                      },
                                                      "标签": {
                                                          "type": "number"
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  },
                                  "createTime": 1689766261994,
                                  "lastModifiedTime": 1689766333648
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_J_G0d": {
                      "def": {
                          "namespace": "mybricks.taro.formContainer",
                          "version": "1.0.1"
                      },
                      "title": "表单容器",
                      "model": {
                          "data": {
                              "useSubmitButton": true,
                              "submitButtonText": "保存",
                              "items": [
                                  {
                                      "id": "u_rtB_R",
                                      "comName": "u_ic_Uf",
                                      "name": "id",
                                      "label": "id",
                                      "hidden": true,
                                      "rules": []
                                  },
                                  {
                                      "id": "u_agKcw",
                                      "comName": "u_hTHuy",
                                      "name": "真实姓名",
                                      "label": "真实姓名",
                                      "hidden": false,
                                      "rules": [
                                          {
                                              "_id": "0-arrayCheckbox-item",
                                              "key": "required",
                                              "status": true,
                                              "visible": true,
                                              "title": "必填",
                                              "message": "内容不能为空"
                                          }
                                      ]
                                  },
                                  {
                                      "id": "u_tR0hy",
                                      "comName": "u_ncc28",
                                      "name": "阿里职务",
                                      "label": "阿里职务",
                                      "hidden": false,
                                      "rules": []
                                  },
                                  {
                                      "id": "u_Zl8Kw",
                                      "comName": "u_VviXC",
                                      "name": "阿里部门",
                                      "label": "阿里部门",
                                      "hidden": false,
                                      "rules": []
                                  },
                                  {
                                      "id": "u_cZNjT",
                                      "comName": "u_dj3r_",
                                      "name": "阿里工号",
                                      "label": "阿里工号",
                                      "hidden": false,
                                      "rules": []
                                  },
                                  {
                                      "id": "u_bO0da",
                                      "comName": "u_4chyA",
                                      "name": "阿里花名",
                                      "label": "阿里花名",
                                      "hidden": false,
                                      "rules": [
                                          {
                                              "_id": "0-arrayCheckbox-item",
                                              "key": "required",
                                              "status": true,
                                              "visible": true,
                                              "title": "必填",
                                              "message": "内容不能为空"
                                          }
                                      ]
                                  },
                                  {
                                      "id": "u_83qTm",
                                      "comName": "u_hj3kP",
                                      "name": "阿里入职时间",
                                      "label": "阿里入职时间",
                                      "hidden": false,
                                      "rules": []
                                  },
                                  {
                                      "id": "u_e4pAQ",
                                      "comName": "u_BL3to",
                                      "name": "阿里离职时间",
                                      "label": "阿里离职时间",
                                      "hidden": false,
                                      "rules": []
                                  },
                                  {
                                      "id": "u_285tS",
                                      "comName": "u_mw5Lj",
                                      "name": "阿里认证信息",
                                      "label": "阿里认证信息",
                                      "hidden": false,
                                      "rules": [
                                          {
                                              "_id": "0-arrayCheckbox-item",
                                              "key": "required",
                                              "status": true,
                                              "visible": true,
                                              "title": "必填",
                                              "message": "内容不能为空"
                                          }
                                      ]
                                  }
                              ],
                              "nameCount": 9
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onSubmit": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_c_br8",
                                          "title": "表单容器 > 提交数据输出"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 12,
                              "marginBottom": 12,
                              "marginLeft": 12,
                              "marginRight": 12,
                              "styleAry": [
                                  {
                                      "selector": ".mybricks-submit .taroify-button",
                                      "css": {
                                          "borderTopLeftRadius": "4px",
                                          "borderBottomLeftRadius": "4px",
                                          "borderBottomRightRadius": "4px",
                                          "borderTopRightRadius": "4px",
                                          "borderTopWidth": "0px",
                                          "borderRightWidth": "0px",
                                          "borderBottomWidth": "0px",
                                          "borderLeftWidth": "0px"
                                      }
                                  }
                              ]
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setFieldsValue",
                          "getFieldsValue",
                          "submit",
                          "submitAndMerge",
                          "resetFields",
                          "setFormItemsProps",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "returnValues",
                          "onSubmit",
                          "onMergeSubmit",
                          "onReset"
                      ]
                  },
                  "u_rtB_R": {
                      "def": {
                          "namespace": "mybricks.taro.formInput",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_J_G0d",
                      "title": "单行输入",
                      "model": {
                          "data": {
                              "label": "单行输入",
                              "name": "单行输入",
                              "value": "",
                              "placeholder": "请输入内容",
                              "type": "text",
                              "disabled": false,
                              "required": false,
                              "hidden": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_agKcw": {
                      "def": {
                          "namespace": "mybricks.taro.formInput",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_J_G0d",
                      "title": "单行输入1",
                      "model": {
                          "data": {
                              "label": "单行输入",
                              "name": "单行输入",
                              "value": "",
                              "placeholder": "请输入内容",
                              "type": "text",
                              "disabled": false,
                              "required": false,
                              "hidden": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_bO0da": {
                      "def": {
                          "namespace": "mybricks.taro.formInput",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_J_G0d",
                      "title": "单行输入5",
                      "model": {
                          "data": {
                              "label": "单行输入",
                              "name": "单行输入",
                              "value": "",
                              "placeholder": "请输入内容",
                              "type": "text",
                              "disabled": false,
                              "required": false,
                              "hidden": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_tR0hy": {
                      "def": {
                          "namespace": "mybricks.taro.formInput",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_J_G0d",
                      "title": "单行输入2",
                      "model": {
                          "data": {
                              "label": "单行输入",
                              "name": "单行输入",
                              "value": "",
                              "placeholder": "请输入内容",
                              "type": "text",
                              "disabled": false,
                              "required": false,
                              "hidden": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_Zl8Kw": {
                      "def": {
                          "namespace": "mybricks.taro.formInput",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_J_G0d",
                      "title": "单行输入3",
                      "model": {
                          "data": {
                              "label": "单行输入",
                              "name": "单行输入",
                              "value": "",
                              "placeholder": "请输入内容",
                              "type": "text",
                              "disabled": false,
                              "required": false,
                              "hidden": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_cZNjT": {
                      "def": {
                          "namespace": "mybricks.taro.formInput",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_J_G0d",
                      "title": "单行输入4",
                      "model": {
                          "data": {
                              "label": "单行输入",
                              "name": "单行输入",
                              "value": "",
                              "placeholder": "请输入内容",
                              "type": "text",
                              "disabled": false,
                              "required": false,
                              "hidden": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_83qTm": {
                      "def": {
                          "namespace": "mybricks.taro.formDatetime",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_J_G0d",
                      "title": "时间选择",
                      "model": {
                          "data": {
                              "label": "日期选择器",
                              "name": "日期选择器",
                              "type": "date",
                              "min": "",
                              "max": "",
                              "placeholder": "请选择日期"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_e4pAQ": {
                      "def": {
                          "namespace": "mybricks.taro.formDatetime",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_J_G0d",
                      "title": "时间选择1",
                      "model": {
                          "data": {
                              "label": "日期选择器",
                              "name": "日期选择器",
                              "type": "date",
                              "min": "",
                              "max": "",
                              "placeholder": "请选择日期"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_285tS": {
                      "def": {
                          "namespace": "mybricks.taro.formImageUploader",
                          "version": "1.0.0"
                      },
                      "frameId": "content",
                      "parentComId": "u_J_G0d",
                      "title": "图片上传",
                      "model": {
                          "data": {
                              "label": "图片上传",
                              "name": "图片上传",
                              "value": [],
                              "maxCount": "1",
                              "useValueString": true,
                              "placeholder": "",
                              "required": false,
                              "chooseAvatar": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "setInitialValue",
                          "validate",
                          "getValue",
                          "resetValue",
                          "setOptions",
                          "setDisabled",
                          "setEnabled",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onInitial",
                          "onChange",
                          "returnValidate",
                          "returnValue"
                      ]
                  },
                  "u_GIfpE": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "title": "服务接口1",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_sjbtya",
                                  "title": "C端-更新会员信息",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "id": {
                                              "type": "string"
                                          },
                                          "头像": {
                                              "type": "string"
                                          },
                                          "昵称": {
                                              "type": "string"
                                          },
                                          "真实姓名": {
                                              "type": "string"
                                          },
                                          "性别保密等级": {
                                              "type": "enum",
                                              "items": [
                                                  {
                                                      "type": "string",
                                                      "value": "公开"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "组织内可见"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "保密"
                                                  }
                                              ]
                                          },
                                          "性别": {
                                              "type": "string"
                                          },
                                          "当前城市": {
                                              "type": "string"
                                          },
                                          "当前职务": {
                                              "type": "string"
                                          },
                                          "个人简介": {
                                              "type": "string"
                                          },
                                          "手机号码保密等级": {
                                              "type": "enum",
                                              "items": [
                                                  {
                                                      "type": "string",
                                                      "value": "公开"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "组织内可见"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "保密"
                                                  }
                                              ]
                                          },
                                          "手机号码": {
                                              "type": "string"
                                          },
                                          "微信二维码保密等级": {
                                              "type": "enum",
                                              "items": [
                                                  {
                                                      "type": "string",
                                                      "value": "公开"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "组织内可见"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "保密"
                                                  }
                                              ]
                                          },
                                          "微信二维码": {
                                              "type": "string"
                                          },
                                          "阿里花名": {
                                              "type": "string"
                                          },
                                          "阿里工号": {
                                              "type": "string"
                                          },
                                          "阿里部门": {
                                              "type": "string"
                                          },
                                          "阿里职务": {
                                              "type": "string"
                                          },
                                          "阿里入职时间": {
                                              "type": "number"
                                          },
                                          "阿里离职时间": {
                                              "type": "number"
                                          },
                                          "阿里认证信息": {
                                              "type": "string"
                                          },
                                          "阿里认证审核状态": {
                                              "type": "enum",
                                              "items": [
                                                  {
                                                      "type": "string",
                                                      "value": "待审核"
                                                  }
                                              ]
                                          },
                                          "真实姓名保密等级": {
                                              "type": "enum",
                                              "items": [
                                                  {
                                                      "type": "string",
                                                      "value": "公开"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "组织内可见"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "保密"
                                                  }
                                              ]
                                          },
                                          "当前所在国家": {
                                              "type": "enum",
                                              "items": [
                                                  {
                                                      "type": "string",
                                                      "value": "国内"
                                                  },
                                                  {
                                                      "type": "string",
                                                      "value": "海外"
                                                  }
                                              ]
                                          },
                                          "当前公司": {
                                              "type": "string"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "follow",
                                      "editable": true
                                  },
                                  "createTime": 1689766261992,
                                  "lastModifiedTime": 1689766319159
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_22dfl": {
                      "def": {
                          "namespace": "mybricks.taro._showToast",
                          "version": "1.0.1",
                          "rtType": "js"
                      },
                      "title": "显示 Toast",
                      "model": {
                          "data": {
                              "title": "保存成功",
                              "duration": 1000,
                              "icon": "success",
                              "mask": false,
                              "dynamic": false,
                              "id": "u_2krccn"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "showToast"
                      ],
                      "outputs": [
                          "afterShowToast"
                      ]
                  },
                  "u_5oOb8": {
                      "def": {
                          "namespace": "mybricks.taro._timerDelay",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "延迟执行",
                      "model": {
                          "data": {
                              "delay": 1000,
                              "id": "u_4i6akr"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "trigger"
                      ],
                      "outputs": [
                          "trigger"
                      ]
                  },
                  "u_AIrhY": {
                      "def": {
                          "namespace": "mybricks.taro._navigateBack",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "页面返回",
                      "model": {
                          "data": {
                              "delta": 1
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "navigateBack"
                      ],
                      "outputs": []
                  }
              },
              "id": "u_HWdH2",
              "title": "阿里认证",
              "comsAutoRun": {},
              "_inputs": [],
              "_outputs": [],
              "inputs": [
                  {
                      "id": "open",
                      "title": "打开",
                      "type": "normal",
                      "schema": {
                          "type": "object",
                          "editable": true
                      }
                  }
              ],
              "outputs": [
                  {
                      "id": "onShow",
                      "title": "页面显示",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  },
                  {
                      "id": "onHide",
                      "title": "页面隐藏",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  }
              ],
              "cons": {
                  "_rootFrame_-open": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u__LiV6",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u__LiV6-then": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "finishPinParentKey": "u_KgAw4",
                          "comId": "u_J_G0d",
                          "def": {
                              "namespace": "mybricks.taro.formContainer",
                              "version": "1.0.1"
                          },
                          "pinId": "setFieldsValue",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_J_G0d-onSubmit": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_r833U",
                          "comId": "u_GIfpE",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_GIfpE-then": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_22dfl",
                          "def": {
                              "namespace": "mybricks.taro._showToast",
                              "version": "1.0.1",
                              "rtType": "js"
                          },
                          "pinId": "showToast",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_22dfl-afterShowToast": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_5oOb8",
                          "def": {
                              "namespace": "mybricks.taro._timerDelay",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "trigger",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_5oOb8-trigger": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_AIrhY",
                          "def": {
                              "namespace": "mybricks.taro._navigateBack",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "navigateBack",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ]
              },
              "pinRels": {
                  "u__LiV6-call": [
                      "then",
                      "catch"
                  ],
                  "u_J_G0d-getFieldsValue": [
                      "returnValues"
                  ],
                  "u_J_G0d-submit": [
                      "onSubmit"
                  ],
                  "u_J_G0d-submitAndMerge": [
                      "onMergeSubmit"
                  ],
                  "u_J_G0d-resetFields": [
                      "onReset"
                  ],
                  "u_rtB_R-validate": [
                      "returnValidate"
                  ],
                  "u_rtB_R-getValue": [
                      "returnValue"
                  ],
                  "u_agKcw-validate": [
                      "returnValidate"
                  ],
                  "u_agKcw-getValue": [
                      "returnValue"
                  ],
                  "u_bO0da-validate": [
                      "returnValidate"
                  ],
                  "u_bO0da-getValue": [
                      "returnValue"
                  ],
                  "u_tR0hy-validate": [
                      "returnValidate"
                  ],
                  "u_tR0hy-getValue": [
                      "returnValue"
                  ],
                  "u_Zl8Kw-validate": [
                      "returnValidate"
                  ],
                  "u_Zl8Kw-getValue": [
                      "returnValue"
                  ],
                  "u_cZNjT-validate": [
                      "returnValidate"
                  ],
                  "u_cZNjT-getValue": [
                      "returnValue"
                  ],
                  "u_83qTm-validate": [
                      "returnValidate"
                  ],
                  "u_83qTm-getValue": [
                      "returnValue"
                  ],
                  "u_e4pAQ-validate": [
                      "returnValidate"
                  ],
                  "u_e4pAQ-getValue": [
                      "returnValue"
                  ],
                  "u_285tS-validate": [
                      "returnValidate"
                  ],
                  "u_285tS-getValue": [
                      "returnValue"
                  ],
                  "u_GIfpE-call": [
                      "then",
                      "catch"
                  ]
              },
              "pinProxies": {},
              "pinValueProxies": {},
              "slot": {
                  "id": "u_HWdH2",
                  "title": "阿里认证",
                  "comAry": [
                      {
                          "id": "u_xK_nZ",
                          "name": "u_HvEZe",
                          "def": {
                              "namespace": "mybricks.taro.systemPage",
                              "version": "1.0.0"
                          },
                          "slots": {
                              "content": {
                                  "id": "content",
                                  "title": "内容",
                                  "comAry": [
                                      {
                                          "id": "u_J_G0d",
                                          "name": "u_L2EfW",
                                          "def": {
                                              "namespace": "mybricks.taro.formContainer",
                                              "version": "1.0.1"
                                          },
                                          "slots": {
                                              "content": {
                                                  "id": "content",
                                                  "title": "表单容器",
                                                  "type": "scope",
                                                  "comAry": [
                                                      {
                                                          "id": "u_rtB_R",
                                                          "name": "u_ic_Uf",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formInput",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_agKcw",
                                                          "name": "u_hTHuy",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formInput",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_bO0da",
                                                          "name": "u_4chyA",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formInput",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_cZNjT",
                                                          "name": "u_dj3r_",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formInput",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_Zl8Kw",
                                                          "name": "u_VviXC",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formInput",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_tR0hy",
                                                          "name": "u_ncc28",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formInput",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_83qTm",
                                                          "name": "u_hj3kP",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formDatetime",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_e4pAQ",
                                                          "name": "u_BL3to",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formDatetime",
                                                              "version": "1.0.0"
                                                          }
                                                      },
                                                      {
                                                          "id": "u_285tS",
                                                          "name": "u_mw5Lj",
                                                          "def": {
                                                              "namespace": "mybricks.taro.formImageUploader",
                                                              "version": "1.0.0"
                                                          }
                                                      }
                                                  ],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              }
                          }
                      }
                  ],
                  "style": {
                      "left": 0,
                      "top": 0,
                      "layout": "flex-column",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start"
                  }
              }
          }
      },
      {
          "pagePath": "pages/u_2iWQ0/index",
          "pageConfig": {
              "navigationStyle": "default",
              "navigationBarBackgroundColor": "#ffffff",
              "navigationBarTextStyle": "black",
              "navigationBarTitleText": "关于青橙会"
          },
          "pageToJson": {
              "-v": "1.0.9",
              "deps": [
                  {
                      "namespace": "mybricks.taro.systemPage",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.richText",
                      "version": "1.0.0"
                  }
              ],
              "coms": {
                  "u_p41mJ": {
                      "def": {
                          "namespace": "mybricks.taro.systemPage",
                          "version": "1.0.0"
                      },
                      "title": "页面",
                      "model": {
                          "data": {
                              "useNavigationStyle": "default",
                              "navigationStyle": "default",
                              "navigationBarBackgroundColor": "rgba(255,255,255,1)",
                              "navigationBarTextStyle": "black",
                              "navigationBarTitleText": "关于青橙会",
                              "homeButton": false,
                              "customNavigation": {
                                  "style": {
                                      "background": "#464646"
                                  },
                                  "useFixed": true
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [],
                      "outputs": []
                  },
                  "u_hGfL6": {
                      "def": {
                          "namespace": "mybricks.taro.richText",
                          "version": "1.0.0"
                      },
                      "title": "富文本",
                      "model": {
                          "data": {
                              "content": "%3Cp%20style%3D%22font-size%3A%2016px%3B%20line-hight%3A24px%3B%22%3E%E8%BF%99%E6%98%AF%E4%B8%80%E6%AE%B5%3Cspan%20style%3D%22font-weight%3A500%3B%20color%3A%20red%3B%22%3E%E5%AF%8C%E6%96%87%E6%9C%AC%3C%2Fspan%3E%E5%86%85%E5%AE%B9%3C%2Fp%3E"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 12,
                              "marginBottom": 12,
                              "marginLeft": 12,
                              "marginRight": 12
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": []
                  }
              },
              "id": "u_2iWQ0",
              "title": "关于青橙会",
              "comsAutoRun": {},
              "_inputs": [],
              "_outputs": [],
              "inputs": [
                  {
                      "id": "open",
                      "title": "打开",
                      "type": "normal",
                      "schema": {
                          "type": "object",
                          "editable": true
                      }
                  }
              ],
              "outputs": [
                  {
                      "id": "onShow",
                      "title": "页面显示",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  },
                  {
                      "id": "onHide",
                      "title": "页面隐藏",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  }
              ],
              "cons": {},
              "pinRels": {},
              "pinProxies": {},
              "pinValueProxies": {},
              "slot": {
                  "id": "u_2iWQ0",
                  "title": "关于青橙会",
                  "comAry": [
                      {
                          "id": "u_p41mJ",
                          "name": "u_NqK6c",
                          "def": {
                              "namespace": "mybricks.taro.systemPage",
                              "version": "1.0.0"
                          },
                          "slots": {
                              "content": {
                                  "id": "content",
                                  "title": "内容",
                                  "comAry": [
                                      {
                                          "id": "u_hGfL6",
                                          "name": "u_HK3R_",
                                          "def": {
                                              "namespace": "mybricks.taro.richText",
                                              "version": "1.0.0"
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              }
                          }
                      }
                  ],
                  "style": {
                      "left": 0,
                      "top": 0,
                      "layout": "flex-column",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start"
                  }
              }
          }
      },
      {
          "pagePath": "pages/u_8eNhM/index",
          "pageConfig": {
              "navigationStyle": "default",
              "navigationBarBackgroundColor": "#ffffff",
              "navigationBarTextStyle": "black",
              "navigationBarTitleText": "问题反馈"
          },
          "pageToJson": {
              "-v": "1.0.9",
              "deps": [
                  {
                      "namespace": "mybricks.taro.systemPage",
                      "version": "1.0.0"
                  }
              ],
              "coms": {
                  "u_inY8o": {
                      "def": {
                          "namespace": "mybricks.taro.systemPage",
                          "version": "1.0.0"
                      },
                      "title": "页面",
                      "model": {
                          "data": {
                              "useNavigationStyle": "default",
                              "navigationStyle": "default",
                              "navigationBarBackgroundColor": "rgba(255,255,255,1)",
                              "navigationBarTextStyle": "black",
                              "navigationBarTitleText": "问题反馈",
                              "homeButton": false,
                              "customNavigation": {
                                  "style": {
                                      "background": "#464646"
                                  },
                                  "useFixed": true
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [],
                      "outputs": []
                  }
              },
              "id": "u_8eNhM",
              "title": "问题反馈",
              "comsAutoRun": {},
              "_inputs": [],
              "_outputs": [],
              "inputs": [
                  {
                      "id": "open",
                      "title": "打开",
                      "type": "normal",
                      "schema": {
                          "type": "object",
                          "editable": true
                      }
                  }
              ],
              "outputs": [
                  {
                      "id": "onShow",
                      "title": "页面显示",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  },
                  {
                      "id": "onHide",
                      "title": "页面隐藏",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  }
              ],
              "cons": {},
              "pinRels": {},
              "pinProxies": {},
              "pinValueProxies": {},
              "slot": {
                  "id": "u_8eNhM",
                  "title": "问题反馈",
                  "comAry": [
                      {
                          "id": "u_inY8o",
                          "name": "u_6NkHf",
                          "def": {
                              "namespace": "mybricks.taro.systemPage",
                              "version": "1.0.0"
                          },
                          "slots": {
                              "content": {
                                  "id": "content",
                                  "title": "内容",
                                  "comAry": [
                                      {
                                          "id": "u_9Ofgg",
                                          "name": "u_PH5nZ",
                                          "def": {
                                              "namespace": "mybricks.taro.text",
                                              "version": "1.0.0"
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              }
                          }
                      }
                  ],
                  "style": {
                      "left": 0,
                      "top": 0,
                      "layout": "flex-column",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start"
                  }
              }
          }
      },
      {
          "pagePath": "pages/u_U_5BJ/index",
          "pageConfig": {
              "navigationStyle": "default",
              "navigationBarBackgroundColor": "#ffffff",
              "navigationBarTextStyle": "black",
              "navigationBarTitleText": "智库专家"
          },
          "pageToJson": {
              "-v": "1.0.9",
              "deps": [
                  {
                      "namespace": "mybricks.taro.systemPage",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.image",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.text",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.containerList",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.containerGrid",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro._muilt-inputJs",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  },
                  {
                      "namespace": "mybricks.taro.searchBar",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.core-comlib.fn",
                      "version": "1.0.0",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.taro._connector",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  }
              ],
              "coms": {
                  "u_1AmFO": {
                      "def": {
                          "namespace": "mybricks.taro.systemPage",
                          "version": "1.0.0"
                      },
                      "title": "页面",
                      "model": {
                          "data": {
                              "useNavigationStyle": "default",
                              "navigationStyle": "default",
                              "navigationBarBackgroundColor": "rgba(255,255,255,1)",
                              "navigationBarTextStyle": "black",
                              "navigationBarTitleText": "智库专家",
                              "homeButton": false,
                              "customNavigation": {
                                  "style": {
                                      "background": "#464646"
                                  },
                                  "useFixed": true
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [],
                      "outputs": []
                  },
                  "u_0aC2R": {
                      "def": {
                          "namespace": "mybricks.taro.image",
                          "version": "1.0.0"
                      },
                      "frameId": "item",
                      "parentComId": "u_q_pKu",
                      "title": "图片",
                      "model": {
                          "data": {
                              "src": "https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-05-30/1685451722186.3a6d5fa5deb9456f.png",
                              "mode": "aspectFill",
                              "loadSmooth": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onLoad": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onError": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": 50,
                              "height": 50,
                              "styleAry": [
                                  {
                                      "selector": ".mybricks-image",
                                      "css": {
                                          "borderTopLeftRadius": "30px",
                                          "borderBottomLeftRadius": "30px",
                                          "borderBottomRightRadius": "30px",
                                          "borderTopRightRadius": "30px"
                                      }
                                  }
                              ]
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setSrc",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onLoad",
                          "onError"
                      ]
                  },
                  "u_PEC23": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "frameId": "item",
                      "parentComId": "u_q_pKu",
                      "title": "文本",
                      "model": {
                          "data": {
                              "text": "Lottie Poole",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "color": "rgba(89,89,89,1)",
                                  "lineHeight": "21px",
                                  "fontSize": "15px",
                                  "fontWeight": "500"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "fit-content"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_Oeizx": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "frameId": "item",
                      "parentComId": "u_q_pKu",
                      "title": "文本1",
                      "model": {
                          "data": {
                              "text": "浙江省 杭州市",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "color": "rgba(140,140,140,1)",
                                  "lineHeight": "19px",
                                  "fontSize": "13px"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "fit-content",
                              "marginTop": 4
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_q_pKu": {
                      "def": {
                          "namespace": "mybricks.taro.containerList",
                          "version": "1.0.0"
                      },
                      "title": "列表容器",
                      "model": {
                          "data": {
                              "useLoading": true,
                              "loadingTip": "加载中...",
                              "errorTip": "加载失败，请重试",
                              "emptyTip": "没有更多了",
                              "scrollRefresh": false,
                              "pullRefresh": false,
                              "grid": {
                                  "column": 0,
                                  "gutter": [
                                      8,
                                      8
                                  ]
                              },
                              "rowKey": "id"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "refreshDataSource",
                          "addDataSource",
                          "loading",
                          "noMore",
                          "error",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onScrollLoad",
                          "onRefresh"
                      ]
                  },
                  "u_hKGDQ": {
                      "def": {
                          "namespace": "mybricks.taro.containerGrid",
                          "version": "1.0.0"
                      },
                      "frameId": "item",
                      "parentComId": "u_q_pKu",
                      "title": "布局",
                      "model": {
                          "data": {
                              "style": {
                                  "paddingTop": "12px",
                                  "paddingRight": "12px",
                                  "paddingBottom": "12px",
                                  "paddingLeft": "12px",
                                  "backgroundColor": "#f7f7f7"
                              },
                              "rows": [
                                  {
                                      "id": "row0",
                                      "height": "auto",
                                      "cols": [
                                          {
                                              "id": "col0",
                                              "title": "内容",
                                              "width": 60,
                                              "isDragging": false
                                          },
                                          {
                                              "id": "u_ka47by",
                                              "title": "列（纵向排列）",
                                              "width": "auto",
                                              "layout": {
                                                  "display": "flex",
                                                  "position": "inherit",
                                                  "flexDirection": "column",
                                                  "alignItems": "flex-start",
                                                  "justifyContent": "center",
                                                  "flexWrap": "nowrap"
                                              }
                                          }
                                      ]
                                  }
                              ]
                          },
                          "inputAry": [],
                          "outputAry": [
                              {
                                  "hostId": "col_output_col0",
                                  "title": "内容",
                                  "schema": {
                                      "type": "any"
                                  }
                              },
                              {
                                  "hostId": "col_output_u_ka47by",
                                  "title": "列（纵向排列）",
                                  "schema": {
                                      "type": "any"
                                  }
                              }
                          ],
                          "outputEvents": {
                              "click": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_ctZ1d",
                                          "title": "布局 > 点击"
                                      },
                                      "active": true
                                  }
                              ],
                              "col_output_col0": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "col_output_u_ka47by": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 6,
                              "marginBottom": 6,
                              "marginLeft": 12,
                              "marginRight": 12
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "click",
                          "col_output_col0",
                          "col_output_u_ka47by"
                      ]
                  },
                  "u_7Q5_5": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "item",
                      "parentComId": "u_q_pKu",
                      "title": "JS计算",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [
                              {
                                  "hostId": "output1",
                                  "title": "输出项1",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              },
                              {
                                  "hostId": "output2",
                                  "title": "输出项2",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0",
                          "output1",
                          "output2"
                      ]
                  },
                  "u_dD8cf": {
                      "def": {
                          "namespace": "mybricks.taro.searchBar",
                          "version": "1.0.0"
                      },
                      "title": "搜索框",
                      "model": {
                          "data": {
                              "placeholderText": "搜索昵称",
                              "searchBarStyle": {
                                  "background": "#f4f5f7",
                                  "borderRadius": "30px"
                              },
                              "label": "",
                              "disabled": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onClear": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_8BHDM",
                                          "title": "搜索框 > 点击清除按钮时"
                                      },
                                      "active": true
                                  }
                              ],
                              "onSearch": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_Y7Vyp",
                                          "title": "搜索框 > 当触发搜索时"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 12,
                              "marginBottom": 12,
                              "marginLeft": 12,
                              "marginRight": 12,
                              "styleAry": [
                                  {
                                      "selector": ".mybricks-searchBar",
                                      "css": {
                                          "borderTopLeftRadius": "18px",
                                          "borderBottomLeftRadius": "18px",
                                          "borderBottomRightRadius": "18px",
                                          "borderTopRightRadius": "18px"
                                      }
                                  }
                              ]
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onChange",
                          "onClear",
                          "onCancel",
                          "onSearch"
                      ]
                  },
                  "u_Tj31w": {
                      "def": {
                          "namespace": "mybricks.core-comlib.fn",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "刷新列表",
                      "model": {
                          "data": {},
                          "inputAry": [
                              {
                                  "hostId": "param0",
                                  "title": "输入项",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "param0"
                      ],
                      "outputs": []
                  },
                  "u_7wngA": {
                      "def": {
                          "namespace": "mybricks.core-comlib.fn",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "刷新列表",
                      "model": {
                          "data": {},
                          "inputAry": [
                              {
                                  "hostId": "param0",
                                  "title": "输入项",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "param0"
                      ],
                      "outputs": []
                  },
                  "u_An3iJ": {
                      "def": {
                          "namespace": "mybricks.core-comlib.fn",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "刷新列表",
                      "model": {
                          "data": {},
                          "inputAry": [
                              {
                                  "hostId": "param0",
                                  "title": "输入项",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "param0"
                      ],
                      "outputs": []
                  },
                  "u_AlVIZ": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "u_rtaby",
                      "title": "JS计算",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0"
                      ]
                  },
                  "u_nDjLj": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "u_rtaby",
                      "title": "服务接口",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_briaty",
                                  "title": "C端-智库专家列表",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "昵称": {
                                              "type": "string"
                                          }
                                      },
                                      "editable": true
                                  },
                                  "outputSchema": {
                                      "type": "follow"
                                  },
                                  "createTime": 1689766261995,
                                  "lastModifiedTime": 1689766350766
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_7b05l": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "u_rtaby",
                      "title": "JS计算1",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [
                              {
                                  "hostId": "output1",
                                  "title": "输出项1",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0",
                          "output1"
                      ]
                  }
              },
              "id": "u_U_5BJ",
              "title": "智库专家",
              "comsAutoRun": {},
              "_inputs": [],
              "_outputs": [],
              "inputs": [
                  {
                      "id": "open",
                      "title": "打开",
                      "type": "normal",
                      "schema": {
                          "type": "object",
                          "editable": true
                      }
                  }
              ],
              "outputs": [
                  {
                      "id": "onShow",
                      "title": "页面显示",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  },
                  {
                      "id": "onHide",
                      "title": "页面隐藏",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  }
              ],
              "cons": {
                  "_rootFrame_-open": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_Tj31w",
                          "def": {
                              "namespace": "mybricks.core-comlib.fn",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "param0",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_q_pKu-item-itemData": [
                      {
                          "type": "com",
                          "frameKey": "u_q_pKu-item",
                          "comId": "u_7Q5_5",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_7Q5_5-output0": [
                      {
                          "type": "com",
                          "frameKey": "u_q_pKu-item",
                          "finishPinParentKey": "u_cExEY",
                          "comId": "u_0aC2R",
                          "def": {
                              "namespace": "mybricks.taro.image",
                              "version": "1.0.0"
                          },
                          "pinId": "setSrc",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_7Q5_5-output1": [
                      {
                          "type": "com",
                          "frameKey": "u_q_pKu-item",
                          "finishPinParentKey": "u_prnzx",
                          "comId": "u_PEC23",
                          "def": {
                              "namespace": "mybricks.taro.text",
                              "version": "1.0.0"
                          },
                          "pinId": "value",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_7Q5_5-output2": [
                      {
                          "type": "com",
                          "frameKey": "u_q_pKu-item",
                          "finishPinParentKey": "u_GdDsk",
                          "comId": "u_Oeizx",
                          "def": {
                              "namespace": "mybricks.taro.text",
                              "version": "1.0.0"
                          },
                          "pinId": "value",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_dD8cf-onClear": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_t3uNd",
                          "comId": "u_7wngA",
                          "def": {
                              "namespace": "mybricks.core-comlib.fn",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "param0",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_dD8cf-onSearch": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_Y_lyh",
                          "comId": "u_An3iJ",
                          "def": {
                              "namespace": "mybricks.core-comlib.fn",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "param0",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_rtaby-param0": [
                      {
                          "type": "com",
                          "frameKey": "u_rtaby",
                          "comId": "u_AlVIZ",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_AlVIZ-output0": [
                      {
                          "type": "com",
                          "frameKey": "u_rtaby",
                          "comId": "u_nDjLj",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_nDjLj-then": [
                      {
                          "type": "com",
                          "frameKey": "u_rtaby",
                          "comId": "u_7b05l",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_7b05l-output0": [
                      {
                          "type": "com",
                          "frameKey": "u_rtaby",
                          "finishPinParentKey": "u_S9mZq",
                          "comId": "u_q_pKu",
                          "def": {
                              "namespace": "mybricks.taro.containerList",
                              "version": "1.0.0"
                          },
                          "pinId": "refreshDataSource",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_7b05l-output1": [
                      {
                          "type": "com",
                          "frameKey": "u_rtaby",
                          "finishPinParentKey": "u_DzoXK",
                          "comId": "u_q_pKu",
                          "def": {
                              "namespace": "mybricks.taro.containerList",
                              "version": "1.0.0"
                          },
                          "pinId": "noMore",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ]
              },
              "pinRels": {
                  "u_nDjLj-call": [
                      "then",
                      "catch"
                  ]
              },
              "pinProxies": {
                  "u_Tj31w-param0": {
                      "type": "frame",
                      "frameId": "u_rtaby",
                      "pinId": "param0"
                  },
                  "u_7wngA-param0": {
                      "type": "frame",
                      "frameId": "u_rtaby",
                      "pinId": "param0"
                  },
                  "u_An3iJ-param0": {
                      "type": "frame",
                      "frameId": "u_rtaby",
                      "pinId": "param0"
                  }
              },
              "pinValueProxies": {},
              "slot": {
                  "id": "u_U_5BJ",
                  "title": "智库专家",
                  "comAry": [
                      {
                          "id": "u_1AmFO",
                          "name": "u_6H2Fz",
                          "def": {
                              "namespace": "mybricks.taro.systemPage",
                              "version": "1.0.0"
                          },
                          "slots": {
                              "content": {
                                  "id": "content",
                                  "title": "内容",
                                  "comAry": [
                                      {
                                          "id": "u_dD8cf",
                                          "name": "u_CqnaJ",
                                          "def": {
                                              "namespace": "mybricks.taro.searchBar",
                                              "version": "1.0.0"
                                          }
                                      },
                                      {
                                          "id": "u_q_pKu",
                                          "name": "u_sspoa",
                                          "def": {
                                              "namespace": "mybricks.taro.containerList",
                                              "version": "1.0.0"
                                          },
                                          "slots": {
                                              "item": {
                                                  "id": "item",
                                                  "title": "列表项",
                                                  "type": "scope",
                                                  "comAry": [
                                                      {
                                                          "id": "u_hKGDQ",
                                                          "name": "u_SM5Hw",
                                                          "def": {
                                                              "namespace": "mybricks.taro.containerGrid",
                                                              "version": "1.0.0"
                                                          },
                                                          "slots": {
                                                              "col0": {
                                                                  "id": "col0",
                                                                  "title": "内容（竖向排列）",
                                                                  "comAry": [
                                                                      {
                                                                          "id": "u_0aC2R",
                                                                          "name": "u_mfUlB",
                                                                          "def": {
                                                                              "namespace": "mybricks.taro.image",
                                                                              "version": "1.0.0"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "style": {
                                                                      "layout": "flex-column",
                                                                      "justifyContent": "flex-start",
                                                                      "alignItems": "flex-start"
                                                                  }
                                                              },
                                                              "u_ka47by": {
                                                                  "id": "u_ka47by",
                                                                  "title": "列（竖向排列）",
                                                                  "comAry": [
                                                                      {
                                                                          "id": "u_PEC23",
                                                                          "name": "u_AkPST",
                                                                          "def": {
                                                                              "namespace": "mybricks.taro.text",
                                                                              "version": "1.0.0"
                                                                          }
                                                                      },
                                                                      {
                                                                          "id": "u_Oeizx",
                                                                          "name": "u_N7yek",
                                                                          "def": {
                                                                              "namespace": "mybricks.taro.text",
                                                                              "version": "1.0.0"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "style": {
                                                                      "layout": "flex-column",
                                                                      "justifyContent": "flex-start",
                                                                      "alignItems": "flex-start"
                                                                  }
                                                              }
                                                          }
                                                      }
                                                  ],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              }
                          }
                      }
                  ],
                  "style": {
                      "left": 0,
                      "top": 0,
                      "layout": "flex-column",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start"
                  }
              }
          }
      },
      {
          "pagePath": "pages/u_AAdCP/index",
          "pageConfig": {
              "navigationStyle": "default",
              "navigationBarBackgroundColor": "#ffffff",
              "navigationBarTextStyle": "black",
              "navigationBarTitleText": "企业链接"
          },
          "pageToJson": {
              "-v": "1.0.9",
              "deps": [
                  {
                      "namespace": "mybricks.taro.systemPage",
                      "version": "1.0.0"
                  }
              ],
              "coms": {
                  "u_a3Jxx": {
                      "def": {
                          "namespace": "mybricks.taro.systemPage",
                          "version": "1.0.0"
                      },
                      "title": "页面",
                      "model": {
                          "data": {
                              "useNavigationStyle": "default",
                              "navigationStyle": "default",
                              "navigationBarBackgroundColor": "rgba(255,255,255,1)",
                              "navigationBarTextStyle": "black",
                              "navigationBarTitleText": "企业链接",
                              "homeButton": false,
                              "customNavigation": {
                                  "style": {
                                      "background": "#464646"
                                  },
                                  "useFixed": true
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [],
                      "outputs": []
                  }
              },
              "id": "u_AAdCP",
              "title": "企业链接",
              "comsAutoRun": {},
              "_inputs": [],
              "_outputs": [],
              "inputs": [
                  {
                      "id": "open",
                      "title": "打开",
                      "type": "normal",
                      "schema": {
                          "type": "object",
                          "editable": true
                      }
                  }
              ],
              "outputs": [
                  {
                      "id": "onShow",
                      "title": "页面显示",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  },
                  {
                      "id": "onHide",
                      "title": "页面隐藏",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  }
              ],
              "cons": {},
              "pinRels": {},
              "pinProxies": {},
              "pinValueProxies": {},
              "slot": {
                  "id": "u_AAdCP",
                  "title": "企业链接",
                  "comAry": [
                      {
                          "id": "u_a3Jxx",
                          "name": "u_jyjlt",
                          "def": {
                              "namespace": "mybricks.taro.systemPage",
                              "version": "1.0.0"
                          },
                          "slots": {
                              "content": {
                                  "id": "content",
                                  "title": "内容",
                                  "comAry": [
                                      {
                                          "id": "u_iIfn1",
                                          "name": "u_vf_FI",
                                          "def": {
                                              "namespace": "mybricks.taro.text",
                                              "version": "1.0.0"
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              }
                          }
                      }
                  ],
                  "style": {
                      "left": 0,
                      "top": 0,
                      "layout": "flex-column",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start"
                  }
              }
          }
      },
      {
          "pagePath": "pages/u_0ST2i/index",
          "pageConfig": {
              "navigationStyle": "default",
              "navigationBarBackgroundColor": "#ffffff",
              "navigationBarTextStyle": "black",
              "navigationBarTitleText": "志愿者风采"
          },
          "pageToJson": {
              "-v": "1.0.9",
              "deps": [
                  {
                      "namespace": "mybricks.taro.systemPage",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.image",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.text",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.containerList",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro.containerGrid",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.taro._muilt-inputJs",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  },
                  {
                      "namespace": "mybricks.taro.searchBar",
                      "version": "1.0.0"
                  },
                  {
                      "namespace": "mybricks.core-comlib.fn",
                      "version": "1.0.0",
                      "rtType": "js"
                  },
                  {
                      "namespace": "mybricks.taro._connector",
                      "version": "1.0.0",
                      "rtType": "js-autorun"
                  }
              ],
              "coms": {
                  "u_ZVP4w": {
                      "def": {
                          "namespace": "mybricks.taro.systemPage",
                          "version": "1.0.0"
                      },
                      "title": "页面",
                      "model": {
                          "data": {
                              "useNavigationStyle": "default",
                              "navigationStyle": "default",
                              "navigationBarBackgroundColor": "rgba(255,255,255,1)",
                              "navigationBarTextStyle": "black",
                              "navigationBarTitleText": "志愿者风采",
                              "homeButton": false,
                              "customNavigation": {
                                  "style": {
                                      "background": "#464646"
                                  },
                                  "useFixed": true
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [],
                      "outputs": []
                  },
                  "u_k0AZ7": {
                      "def": {
                          "namespace": "mybricks.taro.image",
                          "version": "1.0.0"
                      },
                      "frameId": "item",
                      "parentComId": "u_eA01H",
                      "title": "图片",
                      "model": {
                          "data": {
                              "src": "https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-05-30/1685451722186.3a6d5fa5deb9456f.png",
                              "mode": "aspectFill",
                              "loadSmooth": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onLoad": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onError": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": 50,
                              "height": 50,
                              "styleAry": [
                                  {
                                      "selector": ".mybricks-image",
                                      "css": {
                                          "borderTopLeftRadius": "30px",
                                          "borderBottomLeftRadius": "30px",
                                          "borderBottomRightRadius": "30px",
                                          "borderTopRightRadius": "30px"
                                      }
                                  }
                              ]
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setSrc",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onLoad",
                          "onError"
                      ]
                  },
                  "u_8kLTS": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "frameId": "item",
                      "parentComId": "u_eA01H",
                      "title": "文本",
                      "model": {
                          "data": {
                              "text": "Lottie Poole",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "color": "rgba(89,89,89,1)",
                                  "lineHeight": "21px",
                                  "fontSize": "15px",
                                  "fontWeight": "500"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "fit-content"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_lartg": {
                      "def": {
                          "namespace": "mybricks.taro.text",
                          "version": "1.0.0"
                      },
                      "frameId": "item",
                      "parentComId": "u_eA01H",
                      "title": "文本1",
                      "model": {
                          "data": {
                              "text": "浙江省 杭州市",
                              "style": {
                                  "styleEditorUnfold": true,
                                  "color": "rgba(140,140,140,1)",
                                  "lineHeight": "19px",
                                  "fontSize": "13px"
                              },
                              "ellipsis": true
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onClick": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "fit-content",
                              "marginTop": 4
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "value",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick"
                      ]
                  },
                  "u_eA01H": {
                      "def": {
                          "namespace": "mybricks.taro.containerList",
                          "version": "1.0.0"
                      },
                      "title": "列表容器",
                      "model": {
                          "data": {
                              "useLoading": true,
                              "loadingTip": "加载中...",
                              "errorTip": "加载失败，请重试",
                              "emptyTip": "没有更多了",
                              "scrollRefresh": false,
                              "pullRefresh": false,
                              "grid": {
                                  "column": 0,
                                  "gutter": [
                                      8,
                                      8
                                  ]
                              },
                              "rowKey": "id"
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block",
                              "width": "100%"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "refreshDataSource",
                          "addDataSource",
                          "loading",
                          "noMore",
                          "error",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onScrollLoad",
                          "onRefresh"
                      ]
                  },
                  "u_eknup": {
                      "def": {
                          "namespace": "mybricks.taro.containerGrid",
                          "version": "1.0.0"
                      },
                      "frameId": "item",
                      "parentComId": "u_eA01H",
                      "title": "布局",
                      "model": {
                          "data": {
                              "style": {
                                  "paddingTop": "12px",
                                  "paddingRight": "12px",
                                  "paddingBottom": "12px",
                                  "paddingLeft": "12px",
                                  "backgroundColor": "#f7f7f7"
                              },
                              "rows": [
                                  {
                                      "id": "row0",
                                      "height": "auto",
                                      "cols": [
                                          {
                                              "id": "col0",
                                              "title": "内容",
                                              "width": 60,
                                              "isDragging": false
                                          },
                                          {
                                              "id": "u_ka47by",
                                              "title": "列（纵向排列）",
                                              "width": "auto",
                                              "layout": {
                                                  "display": "flex",
                                                  "position": "inherit",
                                                  "flexDirection": "column",
                                                  "alignItems": "flex-start",
                                                  "justifyContent": "center",
                                                  "flexWrap": "nowrap"
                                              }
                                          }
                                      ]
                                  }
                              ]
                          },
                          "inputAry": [],
                          "outputAry": [
                              {
                                  "hostId": "col_output_col0",
                                  "title": "内容",
                                  "schema": {
                                      "type": "any"
                                  }
                              },
                              {
                                  "hostId": "col_output_u_ka47by",
                                  "title": "列（纵向排列）",
                                  "schema": {
                                      "type": "any"
                                  }
                              }
                          ],
                          "outputEvents": {
                              "click": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_ctZ1d",
                                          "title": "布局 > 点击"
                                      },
                                      "active": true
                                  }
                              ],
                              "col_output_col0": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "col_output_u_ka47by": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 6,
                              "marginBottom": 6,
                              "marginLeft": 12,
                              "marginRight": 12
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "click",
                          "col_output_col0",
                          "col_output_u_ka47by"
                      ]
                  },
                  "u_3DTHU": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "item",
                      "parentComId": "u_eA01H",
                      "title": "JS计算",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [
                              {
                                  "hostId": "output1",
                                  "title": "输出项1",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              },
                              {
                                  "hostId": "output2",
                                  "title": "输出项2",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0",
                          "output1",
                          "output2"
                      ]
                  },
                  "u_NgYv6": {
                      "def": {
                          "namespace": "mybricks.taro.searchBar",
                          "version": "1.0.0"
                      },
                      "title": "搜索框",
                      "model": {
                          "data": {
                              "placeholderText": "搜索昵称",
                              "searchBarStyle": {
                                  "background": "#f4f5f7",
                                  "borderRadius": "30px"
                              },
                              "label": "",
                              "disabled": false
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {
                              "onChange": [
                                  {
                                      "type": "defined",
                                      "options": {},
                                      "active": true
                                  }
                              ],
                              "onClear": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_RklxA",
                                          "title": "搜索框 > 点击清除按钮时"
                                      },
                                      "active": true
                                  }
                              ],
                              "onSearch": [
                                  {
                                      "type": "defined",
                                      "options": {
                                          "id": "u_5Ezd7",
                                          "title": "搜索框 > 当触发搜索时"
                                      },
                                      "active": true
                                  }
                              ]
                          },
                          "style": {
                              "display": "block",
                              "width": "100%",
                              "marginTop": 12,
                              "marginBottom": 12,
                              "marginLeft": 12,
                              "marginRight": 12,
                              "styleAry": [
                                  {
                                      "selector": ".mybricks-searchBar",
                                      "css": {
                                          "borderTopLeftRadius": "18px",
                                          "borderBottomLeftRadius": "18px",
                                          "borderBottomRightRadius": "18px",
                                          "borderTopRightRadius": "18px"
                                      }
                                  }
                              ]
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "setValue",
                          "show",
                          "hide",
                          "showOrHide"
                      ],
                      "outputs": [
                          "onClick",
                          "onChange",
                          "onClear",
                          "onCancel",
                          "onSearch"
                      ]
                  },
                  "u_5AwaW": {
                      "def": {
                          "namespace": "mybricks.core-comlib.fn",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "刷新列表",
                      "model": {
                          "data": {},
                          "inputAry": [
                              {
                                  "hostId": "param0",
                                  "title": "输入项",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "param0"
                      ],
                      "outputs": []
                  },
                  "u_YB3Wl": {
                      "def": {
                          "namespace": "mybricks.core-comlib.fn",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "刷新列表",
                      "model": {
                          "data": {},
                          "inputAry": [
                              {
                                  "hostId": "param0",
                                  "title": "输入项",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "param0"
                      ],
                      "outputs": []
                  },
                  "u_9vKjR": {
                      "def": {
                          "namespace": "mybricks.core-comlib.fn",
                          "version": "1.0.0",
                          "rtType": "js"
                      },
                      "title": "刷新列表",
                      "model": {
                          "data": {},
                          "inputAry": [
                              {
                                  "hostId": "param0",
                                  "title": "输入项",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "param0"
                      ],
                      "outputs": []
                  },
                  "u_u9BKu": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "u_M7jLk",
                      "title": "JS计算",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0"
                      ]
                  },
                  "u_n6_Jw": {
                      "def": {
                          "namespace": "mybricks.taro._connector",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "u_M7jLk",
                      "title": "服务接口",
                      "model": {
                          "data": {
                              "connectorConfig": {},
                              "connector": {
                                  "id": "u_jnwmxi",
                                  "title": "C端-志愿者列表",
                                  "type": "http-sql",
                                  "inputSchema": {
                                      "type": "object",
                                      "editable": true,
                                      "properties": {
                                          "昵称": {
                                              "type": "string"
                                          }
                                      }
                                  },
                                  "outputSchema": {
                                      "type": "object",
                                      "properties": {
                                          "code": {
                                              "type": "number"
                                          },
                                          "data": {
                                              "type": "follow",
                                              "editable": true
                                          },
                                          "msg": {
                                              "type": "string"
                                          }
                                      }
                                  },
                                  "createTime": 1689766261994
                              }
                          },
                          "inputAry": [],
                          "outputAry": [],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "call"
                      ],
                      "outputs": [
                          "then",
                          "catch"
                      ]
                  },
                  "u_71Zyf": {
                      "def": {
                          "namespace": "mybricks.taro._muilt-inputJs",
                          "version": "1.0.0",
                          "rtType": "js-autorun"
                      },
                      "frameId": "u_M7jLk",
                      "title": "JS计算1",
                      "model": {
                          "data": {},
                          "inputAry": [],
                          "outputAry": [
                              {
                                  "hostId": "output1",
                                  "title": "输出项1",
                                  "schema": {
                                      "type": "unknown"
                                  }
                              }
                          ],
                          "outputEvents": {},
                          "style": {
                              "display": "block"
                          }
                      },
                      "configs": [],
                      "_inputs": [],
                      "inputs": [
                          "input.inputValue0"
                      ],
                      "outputs": [
                          "output0",
                          "output1"
                      ]
                  }
              },
              "id": "u_0ST2i",
              "title": "志愿者风采",
              "comsAutoRun": {},
              "_inputs": [],
              "_outputs": [],
              "inputs": [
                  {
                      "id": "open",
                      "title": "打开",
                      "type": "normal",
                      "schema": {
                          "type": "object",
                          "editable": true
                      }
                  }
              ],
              "outputs": [
                  {
                      "id": "onShow",
                      "title": "页面显示",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  },
                  {
                      "id": "onHide",
                      "title": "页面隐藏",
                      "type": "event",
                      "schema": {
                          "type": "any"
                      }
                  }
              ],
              "cons": {
                  "_rootFrame_-open": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "comId": "u_9vKjR",
                          "def": {
                              "namespace": "mybricks.core-comlib.fn",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "param0",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_eA01H-item-itemData": [
                      {
                          "type": "com",
                          "frameKey": "u_eA01H-item",
                          "comId": "u_3DTHU",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_3DTHU-output0": [
                      {
                          "type": "com",
                          "frameKey": "u_eA01H-item",
                          "finishPinParentKey": "u_mdt0q",
                          "comId": "u_k0AZ7",
                          "def": {
                              "namespace": "mybricks.taro.image",
                              "version": "1.0.0"
                          },
                          "pinId": "setSrc",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_3DTHU-output1": [
                      {
                          "type": "com",
                          "frameKey": "u_eA01H-item",
                          "finishPinParentKey": "u_LGAyT",
                          "comId": "u_8kLTS",
                          "def": {
                              "namespace": "mybricks.taro.text",
                              "version": "1.0.0"
                          },
                          "pinId": "value",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_3DTHU-output2": [
                      {
                          "type": "com",
                          "frameKey": "u_eA01H-item",
                          "finishPinParentKey": "u_SpSmW",
                          "comId": "u_lartg",
                          "def": {
                              "namespace": "mybricks.taro.text",
                              "version": "1.0.0"
                          },
                          "pinId": "value",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_NgYv6-onClear": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u__R8IG",
                          "comId": "u_5AwaW",
                          "def": {
                              "namespace": "mybricks.core-comlib.fn",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "param0",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_NgYv6-onSearch": [
                      {
                          "type": "com",
                          "frameKey": "_rootFrame_",
                          "startPinParentKey": "u_2q_1L",
                          "comId": "u_YB3Wl",
                          "def": {
                              "namespace": "mybricks.core-comlib.fn",
                              "version": "1.0.0",
                              "rtType": "js"
                          },
                          "pinId": "param0",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_M7jLk-param0": [
                      {
                          "type": "com",
                          "frameKey": "u_M7jLk",
                          "comId": "u_u9BKu",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_u9BKu-output0": [
                      {
                          "type": "com",
                          "frameKey": "u_M7jLk",
                          "comId": "u_n6_Jw",
                          "def": {
                              "namespace": "mybricks.taro._connector",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "call",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_n6_Jw-then": [
                      {
                          "type": "com",
                          "frameKey": "u_M7jLk",
                          "comId": "u_71Zyf",
                          "def": {
                              "namespace": "mybricks.taro._muilt-inputJs",
                              "version": "1.0.0",
                              "rtType": "js-autorun"
                          },
                          "pinId": "input.inputValue0",
                          "pinType": "param",
                          "direction": "input"
                      }
                  ],
                  "u_71Zyf-output0": [
                      {
                          "type": "com",
                          "frameKey": "u_M7jLk",
                          "finishPinParentKey": "u_e2AX9",
                          "comId": "u_eA01H",
                          "def": {
                              "namespace": "mybricks.taro.containerList",
                              "version": "1.0.0"
                          },
                          "pinId": "refreshDataSource",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ],
                  "u_71Zyf-output1": [
                      {
                          "type": "com",
                          "frameKey": "u_M7jLk",
                          "finishPinParentKey": "u_PmZLo",
                          "comId": "u_eA01H",
                          "def": {
                              "namespace": "mybricks.taro.containerList",
                              "version": "1.0.0"
                          },
                          "pinId": "noMore",
                          "pinType": "normal",
                          "direction": "input"
                      }
                  ]
              },
              "pinRels": {
                  "u_n6_Jw-call": [
                      "then",
                      "catch"
                  ]
              },
              "pinProxies": {
                  "u_5AwaW-param0": {
                      "type": "frame",
                      "frameId": "u_M7jLk",
                      "pinId": "param0"
                  },
                  "u_YB3Wl-param0": {
                      "type": "frame",
                      "frameId": "u_M7jLk",
                      "pinId": "param0"
                  },
                  "u_9vKjR-param0": {
                      "type": "frame",
                      "frameId": "u_M7jLk",
                      "pinId": "param0"
                  }
              },
              "pinValueProxies": {},
              "slot": {
                  "id": "u_0ST2i",
                  "title": "志愿者风采",
                  "comAry": [
                      {
                          "id": "u_ZVP4w",
                          "name": "u_BJFF0",
                          "def": {
                              "namespace": "mybricks.taro.systemPage",
                              "version": "1.0.0"
                          },
                          "slots": {
                              "content": {
                                  "id": "content",
                                  "title": "内容",
                                  "comAry": [
                                      {
                                          "id": "u_NgYv6",
                                          "name": "u_jue8z",
                                          "def": {
                                              "namespace": "mybricks.taro.searchBar",
                                              "version": "1.0.0"
                                          }
                                      },
                                      {
                                          "id": "u_eA01H",
                                          "name": "u_Yhqng",
                                          "def": {
                                              "namespace": "mybricks.taro.containerList",
                                              "version": "1.0.0"
                                          },
                                          "slots": {
                                              "item": {
                                                  "id": "item",
                                                  "title": "列表项",
                                                  "type": "scope",
                                                  "comAry": [
                                                      {
                                                          "id": "u_eknup",
                                                          "name": "u_SM5Hw",
                                                          "def": {
                                                              "namespace": "mybricks.taro.containerGrid",
                                                              "version": "1.0.0"
                                                          },
                                                          "slots": {
                                                              "col0": {
                                                                  "id": "col0",
                                                                  "title": "内容（竖向排列）",
                                                                  "comAry": [
                                                                      {
                                                                          "id": "u_k0AZ7",
                                                                          "name": "u_mfUlB",
                                                                          "def": {
                                                                              "namespace": "mybricks.taro.image",
                                                                              "version": "1.0.0"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "style": {
                                                                      "layout": "flex-column",
                                                                      "justifyContent": "flex-start",
                                                                      "alignItems": "flex-start"
                                                                  }
                                                              },
                                                              "u_ka47by": {
                                                                  "id": "u_ka47by",
                                                                  "title": "列（竖向排列）",
                                                                  "comAry": [
                                                                      {
                                                                          "id": "u_8kLTS",
                                                                          "name": "u_AkPST",
                                                                          "def": {
                                                                              "namespace": "mybricks.taro.text",
                                                                              "version": "1.0.0"
                                                                          }
                                                                      },
                                                                      {
                                                                          "id": "u_lartg",
                                                                          "name": "u_N7yek",
                                                                          "def": {
                                                                              "namespace": "mybricks.taro.text",
                                                                              "version": "1.0.0"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "style": {
                                                                      "layout": "flex-column",
                                                                      "justifyContent": "flex-start",
                                                                      "alignItems": "flex-start"
                                                                  }
                                                              }
                                                          }
                                                      }
                                                  ],
                                                  "style": {
                                                      "layout": "flex-column",
                                                      "justifyContent": "flex-start",
                                                      "alignItems": "flex-start"
                                                  }
                                              }
                                          }
                                      }
                                  ],
                                  "style": {
                                      "layout": "flex-column",
                                      "justifyContent": "flex-start",
                                      "alignItems": "flex-start"
                                  }
                              }
                          }
                      }
                  ],
                  "style": {
                      "left": 0,
                      "top": 0,
                      "layout": "flex-column",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start"
                  }
              }
          }
      }
  ],
  "allModules": "%22use%20strict%22%3Bfunction%20ownKeys(r%2Ct)%7Bvar%20e%3DObject.keys(r)%3Bif(Object.getOwnPropertySymbols)%7Bvar%20a%3DObject.getOwnPropertySymbols(r)%3Bt%26%26(a%3Da.filter((function(t)%7Breturn%20Object.getOwnPropertyDescriptor(r%2Ct).enumerable%7D)))%2Ce.push.apply(e%2Ca)%7Dreturn%20e%7Dfunction%20_objectSpread(r)%7Bfor(var%20t%3D1%3Bt%3Carguments.length%3Bt%2B%2B)%7Bvar%20e%3Dnull!%3Darguments%5Bt%5D%3Farguments%5Bt%5D%3A%7B%7D%3Bt%252%3FownKeys(Object(e)%2C!0).forEach((function(t)%7B_defineProperty(r%2Ct%2Ce%5Bt%5D)%7D))%3AObject.getOwnPropertyDescriptors%3FObject.defineProperties(r%2CObject.getOwnPropertyDescriptors(e))%3AownKeys(Object(e)).forEach((function(t)%7BObject.defineProperty(r%2Ct%2CObject.getOwnPropertyDescriptor(e%2Ct))%7D))%7Dreturn%20r%7Dfunction%20_defineProperty(r%2Ct%2Ce)%7Breturn%20t%20in%20r%3FObject.defineProperty(r%2Ct%2C%7Bvalue%3Ae%2Cenumerable%3A!0%2Cconfigurable%3A!0%2Cwritable%3A!0%7D)%3Ar%5Bt%5D%3De%2Cr%7Dfunction%20_slicedToArray(r%2Ct)%7Breturn%20_arrayWithHoles(r)%7C%7C_iterableToArrayLimit(r%2Ct)%7C%7C_unsupportedIterableToArray(r%2Ct)%7C%7C_nonIterableRest()%7Dfunction%20_nonIterableRest()%7Bthrow%20new%20TypeError(%22Invalid%20attempt%20to%20destructure%20non-iterable%20instance.%5CnIn%20order%20to%20be%20iterable%2C%20non-array%20objects%20must%20have%20a%20%5BSymbol.iterator%5D()%20method.%22)%7Dfunction%20_unsupportedIterableToArray(r%2Ct)%7Bif(r)%7Bif(%22string%22%3D%3Dtypeof%20r)return%20_arrayLikeToArray(r%2Ct)%3Bvar%20e%3DObject.prototype.toString.call(r).slice(8%2C-1)%3Breturn%22Object%22%3D%3D%3De%26%26r.constructor%26%26(e%3Dr.constructor.name)%2C%22Map%22%3D%3D%3De%7C%7C%22Set%22%3D%3D%3De%3FArray.from(r)%3A%22Arguments%22%3D%3D%3De%7C%7C%2F%5E(%3F%3AUi%7CI)nt(%3F%3A8%7C16%7C32)(%3F%3AClamped)%3FArray%24%2F.test(e)%3F_arrayLikeToArray(r%2Ct)%3Avoid%200%7D%7Dfunction%20_arrayLikeToArray(r%2Ct)%7B(null%3D%3Dt%7C%7Ct%3Er.length)%26%26(t%3Dr.length)%3Bfor(var%20e%3D0%2Ca%3Dnew%20Array(t)%3Be%3Ct%3Be%2B%2B)a%5Be%5D%3Dr%5Be%5D%3Breturn%20a%7Dfunction%20_iterableToArrayLimit(r%2Ct)%7Bif(%22undefined%22!%3Dtypeof%20Symbol%26%26Symbol.iterator%20in%20Object(r))%7Bvar%20e%3D%5B%5D%2Ca%3D!0%2Cn%3D!1%2Co%3Dvoid%200%3Btry%7Bfor(var%20u%2Cc%3Dr%5BSymbol.iterator%5D()%3B!(a%3D(u%3Dc.next()).done)%26%26(e.push(u.value)%2C!t%7C%7Ce.length!%3D%3Dt)%3Ba%3D!0)%3B%7Dcatch(r)%7Bn%3D!0%2Co%3Dr%7Dfinally%7Btry%7Ba%7C%7Cnull%3D%3Dc.return%7C%7Cc.return()%7Dfinally%7Bif(n)throw%20o%7D%7Dreturn%20e%7D%7Dfunction%20_arrayWithHoles(r)%7Bif(Array.isArray(r))return%20r%7Dfunction%20convertObject2Array(r)%7Bvar%20t%3D%5B%5D%3Breturn%20Object.keys(r).sort((function(r%2Ct)%7Breturn%2B(extractNumbers(r)%7C%7C0)-%2B(extractNumbers(t)%7C%7C0)%7D)).forEach((function(e)%7Bt.push(r%5Be%5D)%7D))%2Ct%7Dfunction%20extractNumbers(r)%7Bfor(var%20t%3D%22%22%2Ce%3D0%3Be%3Cr.length%3Be%2B%2B)isNaN(parseInt(r%5Be%5D))%7C%7C(t%2B%3Dr%5Be%5D)%3Breturn%20t%7DcomModules.u_BwHf0%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%2Ca%3D_slicedToArray(t%2C1)%5B0%5D%3Be%26%26e.id%7C%7C(console.log(%22clear%20userInfo%22)%2Ca(%7Bkey%3A%22userInfo%22%2Cvalue%3A%7B%7D%7D))%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_A35wW%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%2Ca%3D_slicedToArray(t%2C2)%2Cn%3Da%5B0%5D%2Co%3Da%5B1%5D%3Be.length%3Fn(e)%3Ao(!0)%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_mzcsji%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_rCIv4%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_bwazis%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_xWIXP%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_IluwS%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%3B(0%2C_slicedToArray(t%2C1)%5B0%5D)(%7B%22%E6%B4%BB%E5%8A%A8%E5%90%8D%E7%A7%B0%22%3A%22string%22%3D%3Dtypeof%20e%3Fe%3A%22%22%7D)%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_kQbva%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%2Ca%3D_slicedToArray(t%2C2)%2Cn%3Da%5B0%5D%2Co%3Da%5B1%5D%3Be.length%3E0%3Fn(e)%3Ao(!0)%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_mzcsji%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_rCIv4%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_tsaxcj%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_s0c5_%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_bwazis%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_xWIXP%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_bwazis%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_xWIXP%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_sjbtya%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_zF03k%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_jdikkh%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_vuOdw%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_tsaxcj%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_s0c5_%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_5dlPd%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%3B(0%2C_slicedToArray(t%2C1)%5B0%5D)(%7B%22%E7%BB%84%E7%BB%87%E5%90%8D%E7%A7%B0%22%3A%22string%22%3D%3Dtypeof%20e%3Fe%3A%22%22%7D)%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_Xo4CV%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%2Ca%3D_slicedToArray(t%2C2)%2Cn%3Da%5B0%5D%2Co%3Da%5B1%5D%3Be.length%3E0%3Fn(e)%3Ao(!0)%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_yjdyci%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_QlBVy%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_kHssp%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%2Ca%3D_slicedToArray(t%2C2)%2Cn%3Da%5B0%5D%2Co%3Da%5B1%5D%3B%22%E5%AE%A1%E6%A0%B8%E9%80%9A%E8%BF%87%22%3D%3D%3D(null%3D%3De%3Fvoid%200%3Ae%5B%22%E9%98%BF%E9%87%8C%E8%AE%A4%E8%AF%81%E5%AE%A1%E6%A0%B8%E7%8A%B6%E6%80%81%22%5D)%3Fn(%7Bid%3Ae.id%7D)%3Ao()%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_kxhMp%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%3B_slicedToArray(r.inputs%2C1)%5B0%5D%3B(0%2C_slicedToArray(t%2C1)%5B0%5D)(%22%22)%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_jbnnkc%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_pFu3O%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_bwazis%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_xWIXP%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_tjhfmk%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_omaGe%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_sezhjz%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_tzKac%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_k6gNJ%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%2Ca%3D_slicedToArray(t%2C3)%2Cn%3Da%5B0%5D%2Co%3Da%5B1%5D%2Cu%3Da%5B2%5D%3Bn(e%5B%22%E5%A4%B4%E5%83%8F%22%5D%7C%7C%22https%3A%2F%2Fali-ec.static.yximgs.com%2Fudata%2Fpkg%2Feshop%2Fchrome-plugin-upload%2F2023-05-30%2F1685451722186.3a6d5fa5deb9456f.png%22)%2Co(e%5B%22%E6%98%B5%E7%A7%B0%22%5D)%2Cu(e%5B%22%E5%BD%93%E5%89%8D%E5%9F%8E%E5%B8%82%22%5D)%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_Qg7Ki%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%3B(0%2C_slicedToArray(t%2C1)%5B0%5D)(%7Bid%3Ae.id%7D)%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_cKDtI%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%3B(0%2C_slicedToArray(t%2C1)%5B0%5D)(%7B%22%E6%98%B5%E7%A7%B0%22%3A%22string%22%3D%3Dtypeof%20e%3Fe%3A%22%22%7D)%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_miVEq%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%2Ca%3D_slicedToArray(t%2C2)%2Cn%3Da%5B0%5D%2Co%3Da%5B1%5D%3Be.length%3E0%3Fn(e)%3Ao(!0)%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_zjsenn%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_hTHCK%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_oUeiY%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%2Ca%3D_slicedToArray(t%2C8)%2Cn%3Da%5B0%5D%2Co%3Da%5B1%5D%2Cu%3Da%5B2%5D%2Cc%3Da%5B3%5D%2Ci%3Da%5B4%5D%2Cs%3Da%5B5%5D%2Cd%3Da%5B6%5D%2Cl%3Da%5B7%5D%3Bn((e%3De%7C%7C%7B%7D)%5B%22%E5%A4%B4%E5%83%8F%22%5D%7C%7C%22https%3A%2F%2Fali-ec.static.yximgs.com%2Fudata%2Fpkg%2Feshop%2Fchrome-plugin-upload%2F2023-05-30%2F1685451722186.3a6d5fa5deb9456f.png%22)%2Co(e%5B%22%E6%98%B5%E7%A7%B0%22%5D%7C%7C%22-%22)%3Bvar%20h%3D%5B%5D%3Be%5B%22%E5%BD%93%E5%89%8D%E5%85%AC%E5%8F%B8%22%5D%26%26h.push(e%5B%22%E5%BD%93%E5%89%8D%E5%85%AC%E5%8F%B8%22%5D)%2Ce%5B%22%E5%BD%93%E5%89%8D%E8%81%8C%E5%8A%A1%22%5D%26%26h.push(e%5B%22%E5%BD%93%E5%89%8D%E8%81%8C%E5%8A%A1%22%5D)%2Ch.length%3Fu(h.join(%22%20%22))%3Au(%22-%22)%2Cc(e%5B%22%E4%B8%AA%E4%BA%BA%E7%AE%80%E4%BB%8B%22%5D%7C%7C%22%E8%BF%99%E4%B8%AA%E5%AE%B6%E4%BC%99%E5%BE%88%E6%87%92%EF%BC%8C%E4%BB%80%E4%B9%88%E9%83%BD%E6%B2%A1%E7%95%99%E4%B8%8B%22)%2Ci(e%5B%22%E9%98%BF%E9%87%8C%E8%8A%B1%E5%90%8D%22%5D)%2Cs(e%5B%22%E9%98%BF%E9%87%8C%E5%B7%A5%E5%8F%B7%22%5D)%2Cd(e%5B%22%E9%98%BF%E9%87%8C%E9%83%A8%E9%97%A8%22%5D)%2Cl(e%5B%22%E9%98%BF%E9%87%8C%E8%81%8C%E5%8A%A1%22%5D)%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_ytfber%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_TZFll%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_2V_yg%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%2Ca%3D_slicedToArray(t%2C6)%2Cn%3Da%5B0%5D%2Co%3Da%5B1%5D%2Cu%3Da%5B2%5D%2Cc%3Da%5B3%5D%2Ci%3Da%5B4%5D%2Cs%3Da%5B5%5D%3Bif(e)%7Bn(e%5B%22%E6%98%B5%E7%A7%B0%22%5D)%2Co(e%5B%22%E5%A4%B4%E5%83%8F%22%5D%7C%7C%22https%3A%2F%2Fali-ec.static.yximgs.com%2Fudata%2Fpkg%2Feshop%2Fchrome-plugin-upload%2F2023-05-30%2F1685451722186.3a6d5fa5deb9456f.png%22)%2Cu(%22%E5%AE%A1%E6%A0%B8%E9%80%9A%E8%BF%87%22%3D%3D%3De%5B%22%E9%98%BF%E9%87%8C%E8%AE%A4%E8%AF%81%E5%AE%A1%E6%A0%B8%E7%8A%B6%E6%80%81%22%5D%3F%22%E9%98%BF%E9%87%8C%E6%A0%A1%E5%8F%8B%22%3A%22%E6%9C%AA%E8%AE%A4%E8%AF%81%22)%3Bvar%20d%3D%5B%5D%3Be%5B%22%E5%BD%93%E5%89%8D%E5%85%AC%E5%8F%B8%22%5D%26%26d.push(e%5B%22%E5%BD%93%E5%89%8D%E5%85%AC%E5%8F%B8%22%5D)%2Ce%5B%22%E5%BD%93%E5%89%8D%E8%81%8C%E5%8A%A1%22%5D%26%26d.push(e%5B%22%E5%BD%93%E5%89%8D%E8%81%8C%E5%8A%A1%22%5D)%2Cd.length%3Fc(d.join(%22%20%22))%3Ac(%22%22)%2Ci(e%5B%22%E9%98%BF%E9%87%8C%E9%83%A8%E9%97%A8%22%5D%7C%7C%22%22)%2Cs(e%5B%22%E9%98%BF%E9%87%8C%E8%81%8C%E5%8A%A1%22%5D%7C%7C%22%22)%7D%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_lNnKJ%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%2Ca%3D_slicedToArray(t%2C2)%2Cn%3Da%5B0%5D%2Co%3Da%5B1%5D%3Bswitch(e)%7Bcase%22%E9%98%BF%E9%87%8C%E6%A0%A1%E5%8F%8B%22%3An(e)%3Bbreak%3Bcase%22%E6%9C%AA%E8%AE%A4%E8%AF%81%22%3Ao(e)%7D%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_bwazis%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_xWIXP%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_ijJSc%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%3B(0%2C_slicedToArray(t%2C1)%5B0%5D)(%22%E6%B5%B7%E5%A4%96%22%3D%3D%3D(null%3D%3De%3Fvoid%200%3Ae.value)%3F%22text%22%3A%22select%22)%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_bwazis%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_xWIXP%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_sjbtya%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_zF03k%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_bwazis%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_xWIXP%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_sjbtya%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_zF03k%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_7Q5_5%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%2Ca%3D_slicedToArray(t%2C3)%2Cn%3Da%5B0%5D%2Co%3Da%5B1%5D%2Cu%3Da%5B2%5D%3Bn(e%5B%22%E5%A4%B4%E5%83%8F%22%5D%7C%7C%22https%3A%2F%2Fali-ec.static.yximgs.com%2Fudata%2Fpkg%2Feshop%2Fchrome-plugin-upload%2F2023-05-30%2F1685451722186.3a6d5fa5deb9456f.png%22)%2Co(e%5B%22%E6%98%B5%E7%A7%B0%22%5D)%2Cu(e%5B%22%E5%BD%93%E5%89%8D%E5%9F%8E%E5%B8%82%22%5D)%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_AlVIZ%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%2Ca%3D_slicedToArray(t%2C1)%5B0%5D%3Ba(e%3F%7B%22%E6%98%B5%E7%A7%B0%22%3Ae%7D%3A%7B%7D)%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_7b05l%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%2Ca%3D_slicedToArray(t%2C2)%2Cn%3Da%5B0%5D%2Co%3Da%5B1%5D%3Be.length%3E0%3Fn(e)%3Ao(!0)%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_briaty%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3D%5B%22data%22%5D%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_qPy1p%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%2CcomModules.u_3DTHU%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%2Ca%3D_slicedToArray(t%2C3)%2Cn%3Da%5B0%5D%2Co%3Da%5B1%5D%2Cu%3Da%5B2%5D%3Bn(e%5B%22%E5%A4%B4%E5%83%8F%22%5D%7C%7C%22https%3A%2F%2Fali-ec.static.yximgs.com%2Fudata%2Fpkg%2Feshop%2Fchrome-plugin-upload%2F2023-05-30%2F1685451722186.3a6d5fa5deb9456f.png%22)%2Co(e%5B%22%E6%98%B5%E7%A7%B0%22%5D)%2Cu(e%5B%22%E5%BD%93%E5%89%8D%E5%9F%8E%E5%B8%82%22%5D)%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_u9BKu%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%2Ca%3D_slicedToArray(t%2C1)%5B0%5D%3Ba(e%3F%7B%22%E6%98%B5%E7%A7%B0%22%3Ae%7D%3A%7B%7D)%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_71Zyf%3Dfunction(r)%7Bvar%20t%3Dr.env%2Ce%3Dr.data%2Ca%3Dr.inputs%2Cn%3Dr.outputs%2Co%3D(r.logger%2Cr.onError%2Ce.fns%2Ce.runImmediate)%2Cu%3Dfunction(r)%7Bvar%20t%3Dr.outputs%2Ce%3D_slicedToArray(r.inputs%2C1)%5B0%5D%2Ca%3D_slicedToArray(t%2C2)%2Cn%3Da%5B0%5D%2Co%3Da%5B1%5D%3Be.length%3E0%3Fn(e)%3Ao(!0)%7D%2Cc%3D%7Boutputs%3AconvertObject2Array(n)%7D%3Btry%7Bo%26%26t.runtime%26%26u(c)%2Ca.input((function(r)%7Btry%7Bu(_objectSpread(_objectSpread(%7B%7D%2Cc)%2C%7B%7D%2C%7Binputs%3AconvertObject2Array(r)%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D))%7Dcatch(r)%7Bconsole.error(%22js%E8%AE%A1%E7%AE%97%E7%BB%84%E4%BB%B6%E8%BF%90%E8%A1%8C%E9%94%99%E8%AF%AF.%22%2Cr)%7D%7D%2CcomModules.u_jnwmxi%3Dfunction(r%2Ct%2Ce)%7Bvar%20a%3Dt.then%2Cn%3Dt.onError%3Breturn%20function(r%2Ct)%7Bvar%20e%2Co%2Cu%2Cc%2Ci%2Cs%2Cd%2Cl%3D%22POST%22%2Ch%3Dvoid%200%2Cf%3D%5B%5D%3Btry%7Bvar%20p%3D%22%2Fapi%2Fsystem%2Fdomain%2Frun%22%2Cm%3D%7Bparams%3A(d%3Dl.startsWith(%22GET%22)%3F%7Bparams%3Ar%2Curl%3Ap%2Cmethod%3Al%7D%3A%7Bdata%3Ar%2Curl%3Ap%2Cmethod%3Al%7D).params%2Cdata%3Ad.data%2Cheaders%3Ad.headers%2Curl%3Ad.url%2Cmethod%3Ad.method%7D%3Bm.url%3Dm.url%7C%7Cp%2Cm.method%3Dm.method%7C%7Cl%3Bvar%20y%3D(o%3D(e%3Dm).params%2Cu%3De.data%2Cc%3De.headers%2Ci%3De.url%2Cs%3De.method%2C%7Bparams%3Ao%2Cdata%3A_objectSpread(%7Bparams%3A_objectSpread(%7B%7D%2Cu)%7D%2C%7BserviceId%3A%22u_rUxAQ%22%2CfileId%3A%22443522925391941%22%7D)%2Cheaders%3Ac%2Curl%3Ai%2Cmethod%3As%7D)%3By.url%3D(y.url%7C%7Cp).replace(%2F%7B(%5Cw%2B)%7D%2Fg%2C(function(t%2Ce)%7Bvar%20a%3Dr%5Be%5D%7C%7C%22%22%3Breturn%20Reflect.deleteProperty(y.params%7C%7C%7B%7D%2Ce)%2Ca%7D))%2Cy.method%3Dy.method%7C%7Cl%2Ct.ajax(y).then((function(r)%7Breturn%20function(r)%7Bvar%20t%3Dr.response%3Br.config%3Breturn%20t%7D(%7Bresponse%3Ar%2Cconfig%3Ay%7D)%7D)).then((function(r)%7Breturn%20function(r%2Ct)%7Bt.method%2Ct.url%2Ct.params%2Ct.data%2Ct.headers%3Breturn%20r%7D(r%2CObject.assign(%7B%7D%2Cy))%7D)).then((function(r)%7Breturn%200%3D%3D%3Df.length%7C%7Cf.forEach((function(t)%7Bvar%20e%3Dt.split(%22.%22)%3B!function(r%2Ct)%7Bvar%20e%3Dt.length%3B!function%20r(a%2Cn)%7Bif(a%26%26n!%3D%3De)%7Bvar%20o%3Dt%5Bn%5D%3Bn%3D%3D%3De-1%26%26Reflect.deleteProperty(a%2Co)%2CArray.isArray(a)%3Fa.forEach((function(t)%7Br(t%2Cn)%7D))%3Ar(a%5Bo%5D%2Cn%2B1)%7D%7D(r%2C0)%7D(r%2Ce)%7D))%2Cr%7D)).then((function(r)%7Bvar%20t%3DArray.isArray(r)%3F%5B%5D%3A%7B%7D%3Bif(void%200%3D%3D%3Dh%7C%7C0%3D%3D%3Dh.length)t%3Dr%3Belse%20if(h.forEach((function(e)%7B!function(r%2Ct%2Ce)%7Bvar%20a%3Dt.length%3B!function%20r(e%2Cn%2Co)%7Bif(!e%7C%7Cn%3D%3D%3Da)return%20e%3Bvar%20u%3Dt%5Bn%5D%3Breturn%20Array.isArray(e)%3Fe.map((function(t%2Ce)%7Bvar%20a%2Cu%3Do%5Be%5D%3Breturn%20void%200%3D%3D%3Du%3F(a%3D%7B%7D%2Co.push(a))%3Aa%3Du%2Cr(t%2Cn%2Ca)%7D))%3An%3D%3D%3Da-1%3F(o%5Bu%5D%3De%5Bu%5D%2Ce%5Bu%5D)%3A(e%3De%5Bu%5D%2CArray.isArray(e)%3Fo%5Bu%5D%3Do%5Bu%5D%7C%7C%5B%5D%3Ao%5Bu%5D%3Do%5Bu%5D%7C%7C%7B%7D%2Cr(e%2Cn%2B1%2CArray.isArray(o)%3Fo%3Ao%5Bu%5D))%7D(r%2C0%2Ce)%7D(r%2Ce.split(%22.%22)%2Ct)%7D))%2CArray.isArray(h)%26%26h.length%26%26(h.length%3E1%7C%7C1!%3D%3Dh.length%7C%7C%22%22!%3D%3Dh%5B0%5D))try%7Bfor(var%20e%3Dh.map((function(r)%7Breturn%20r.split(%22.%22)%7D))%3B%22%5Bobject%20Object%5D%22%3D%3D%3DObject.prototype.toString.call(t)%26%26e.every((function(r)%7Breturn!!r.length%7D))%26%261%3D%3D%3DObject.values(t).length%3B)t%3DObject.values(t)%5B0%5D%2Ce.forEach((function(r)%7Breturn%20r.shift()%7D))%7Dcatch(r)%7Bconsole.log(%22connector%20format%20data%20error%22%2Cr)%7D%22POST%22%3D%3D%3Dy.method.toUpperCase()%26%26y.url.endsWith(%22%2Fdomain%2Frun%22)%26%26y.data%26%26y.data.fileId%26%26y.data.serviceId%26%26y.data.params%26%26y.data.params.showToplLog%3Fa(%7B__ORIGIN_RESPONSE__%3Ar%2CoutputData%3At%7D)%3Aa(t)%7D)).catch((function(r)%7Bn(r%26%26r.message%7C%7Cr)%7D))%7Dcatch(r)%7Breturn%20n(r)%7D%7D(r%2Ce)%7D%3B",
  "tabBarJson": [
      {
          "pagePath": "pages/main/index",
          "text": "首页",
          "selectedIconPath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAq1BMVEUAAAD7bib7bSX/jjT7bSX7bSb7biX8bib6byX8byf/cyn6bib7bSb/cCb8bSb7biX6bib7biX7byb7cCf/cSb/dzb7bSb6biX6bSb7bif7biX7byX/byj/cy3/cDD6bSX7bib6byb8bib6cCb7biX7bSX7bib6bib6bSX////++PT+6d78t5T6iU7+9O7+6N393s/92cf9zrb7nWz7kVr6f0H6eDb6h038upk5A44ZAAAAKHRSTlMAZvYE/vvvSWxaGdHGLpK13aw/OyEJ56Wai350KBYQ1YBqVzXjuYij7ilB1gAAAjdJREFUWMPt19l2gjAQBuAIisgigrXWvWqXUVDr3vd/sh4C7SloMkzkku+Sc/iVZP6grFKplEUfOZrhjPSy8pYz4DrdcvKaGqS0Zhl5rQb8abQezzPr8E/dfDRvCDnDx/LacKPN1Ol9uKOvPD49D+7yemp5UwcEnKlKnmWDkG3R8546INF5oua5zyD17NLyugYgjC6xviitSasvrtEi1BdBK/YrFDYk1hfXJtYX19fR+hJ5PaS+ZM6UXN9NtA/X63AfbQTFptX3uFv92R2RYuP1PX+tMr7OSLGR+p62q5ztSVxsvL6n35h1GK5XqZOo2Hh9z9skLdoke5Nkbs+CYuP1TdbvcIHU5ZCso6DYaH2P/PZv+OebXzrCPa839X2DrB3/fpBx4NMDWWkdBiy1TL7zfJSbZ75+F8i48HXMTXgwT1Zs+bshfFUXrAkZUXxrBIBftdI9XaSBEyPZ9zFk7ONbr5Bzja/uszOTTp0xYanxy8s4PrqyoxPGTww34mcOM1dmvGc8I2cmuBP5HJ+JeGqBA2HgQO2Ra8LAWoFN2dxuSiAMDNTGxhIGTpQGW2Nihkr1bEmgo3I4+JLAT5Xj60MSOBQcsFdeOsEBW5MELlReAYEk0FV5SVmSwF6d/hrVmMwb/UVvSwPf6T9F/JJ+HOJTw5lAVpMGNoEskP9/AjKLSWlApDE5G4hsJNAHIh8JHAHRHAmcNICkjuwJebQHDKN7QPCuMzzRNKAgw2SF6G6rVoTLKpVy/ADdk7xecwNcaAAAAABJRU5ErkJggg==",
          "selectedIconStyle": {
              "width": "22px",
              "height": "22px",
              "styleEditorUnfold": true
          },
          "selectedTextStyle": {
              "color": "rgba(0,0,0,1)",
              "fontSize": "12px",
              "lineHeight": "14px",
              "styleEditorUnfold": true,
              "fontWeight": "500"
          },
          "normalIconPath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAgVBMVEUAAACMjIyNjY2NjY2NjY2MjIyjo6OOjo6Ojo6NjY2UlJSNjY2Ojo6Ojo6Tk5ONjY2Ojo6VlZWNjY2NjY2NjY2Ojo6NjY2NjY2MjIyNjY2NjY2Pj4+Ojo6NjY2NjY2RkZGNjY2MjIyNjY2QkJCMjIyNjY2NjY2MjIyPj4+NjY2MjIyF0Fo3AAAAKnRSTlMAZvTZ+uwEay6oGPBZPyC+SAjlf4o6k93SyIRUMsS2EJqBdCkUTbDOIl5l0rYyAAACoklEQVRYw+2X23qqMBCFI0cF1IJSW+v5UN15/wfcXwYNrKb9llEv/e8S4gqZWTNB9eLFi2eR7JZ5vtwlz9KrQy2E9XP03gJ9IXh7hl4RaUtUPK6XaiGOtZA+qjfRwntZvmth8pheq9JqP2KXQXvO9vSDu+1TrmwmID+r8j699bL1Cjpoub5HL/to0luDx5tkf2T+eueZNlR9nO5XMj07e0jBD0fqByO7kRd1rg2n7M9Q5D6F3QafJYuD9mB24qCBueEpt5YYKWy+lu9KT/NgXHi8eea4I/y9xctXWGzHYRCE4+1ChqSwafl+hdoSfvkU9jD+pXxHnxr4xKczOBJSB7Z8cRMkHkKQTljYbojjNehFuiEIw0A3RKC4jiCN7u17ghPFzf7zvkRsnjd7dk+dRHBjg02FoDvbxG9wuI4PgyaOqmWvr6RYSJask1+ZmKoOU5nq5PqoLZPuMkFeqBOhUN5PAfKOYTvemfG3xq0XWkjlYU/BdH5AwYPEcYGtZCgRa6eLS1SPeMKtGc7VD+ZmdmuHYzMcXXJaXM2UN3k/S7Hj2r5ze5nZsR0aZ0dJ47o8s6nabPZXC8wghIFyCLpBLKWYOxpIKNvhLwFnn73kRP2FZGvvI4hhFxyXHX2ODMZw6ZnHO5+kbMC6DkPzeONjmzEUl0MmLd3H2BWExcWsjlnpua5BnPay5s2BuQb3r3n7Yq7BNvaPN1jqGjjknF8BzDVosm9+SVHXYNb4NcpcgyuihF/03DXYL8mnCEaIfxziHUtzyL/6UqJDXAO8efzfZK4RRrY5UbhrBOPkiugQ1yDyyVmqFubaE1k0sLcA52jbG0tzNendwKS6xRJZpL2IMkWYai+mipGstAerRHHFNNY3EqeixyX7Re8Gin6iXrx4Cv8Bw2HFQzxxjEQAAAAASUVORK5CYII=",
          "normalIconStyle": {
              "width": "22px",
              "height": "22px"
          },
          "normalTextStyle": {
              "color": "rgba(140,140,140,1)",
              "fontSize": "12px",
              "lineHeight": "14px",
              "styleEditorUnfold": true
          }
      },
      {
          "pagePath": "pages/u_ZcN_w/index",
          "text": "最近活动",
          "selectedIconPath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAh1BMVEUAAAD7bib7bib/dif6biX7biX7bSb8byb/din/fTD7biX7bSX6biX7bif8cSf/cCj/c0D7bSX7biX/cif7bSX7biX6biX6bSX7bSf7bib7bib8bib/dCr7bSb6bSX7bSb7bSX7bSb7bSX6byb8byb8byj7bSf/bin/byz7bib8bib8byb6bSUC4MNKAAAALHRSTlMAwaoa0Pm8XRIK9ePedjQsBuqaIe+rpaCRiX9kDubXyrm1smtXTEAlF3KUUDnApSAAAAIBSURBVFjD7ZjncqMwGEUFphebEmwwuPcs7/98O/YuIZI+3VgkmclMuL+Pjwog3TEb87vi7latEDtanN8jSe2kMpNNKd3FaukU/hszjRRMlsi+tFVl43e+QMlsJaHVqvP6D/FDwCzF/WtB7PzBxIgJPF64a1HibhEgLi9cQdi8I0kLU/JCDDt35IoZU0do3JHJKByFo3AU/kCh/fF56GHhnBdGEF48MWjFCxcQrh+MA5kTLzwj9sV7MEfEhOJVXwD48J8xAHNkQvyNks065rpG97xkfLXp9R56ppnTutRlVPLYdAw+zqL2OGa2LAwh28z12ZhvS3Kd8PE+Y/Nji6iGzpFA89veSu1wY7pgxKmqnxpXgTy9H3g3o2S4P68b7k00xKOInGUSPXnU/ZEHjqhJ1i1K/4sb+XWeZaEDhcu3+SnOt4skTKGw6PYvANuse0nhA7EaJDypiWAyRGgBpBwgzBESDhDeIDPVF+4hE+sLLciUWkKNd1VD+EH/0ReGuCzpCzeQqfSFJmQO+kIXMrm+0EOINeRb3gEkHiKcqYmVz3Q69rbruajj0h0bN0RPhe2ZmOy5/2RmL/QTaeRrGflSv+/ilNHKmZwMTrDPZS2vtyFv+u2T/bmpAv751kyRZUDqQqktTcqwX20M6rDnlqaQeXVKyCYUl4Uzrw45GzPmK/IX6c49trSRWUcAAAAASUVORK5CYII=",
          "selectedIconStyle": {
              "width": "22px",
              "height": "22px"
          },
          "selectedTextStyle": {
              "color": "rgba(0,0,0,1)",
              "fontSize": "12px",
              "lineHeight": "14px",
              "styleEditorUnfold": true,
              "fontWeight": "500"
          },
          "normalIconPath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAe1BMVEUAAACNjY2NjY2Ojo6Ojo6MjIysrKyNjY2NjY2MjIyOjo6NjY2MjIyNjY2Pj4+MjIyNjY2NjY2NjY2Ojo6MjIyNjY2Ojo6SkpKTk5ONjY2NjY2ampqMjIyOjo6NjY2MjIyMjIyVlZWNjY2SkpKNjY2NjY2NjY2SkpKMjIwU2Vv8AAAAKHRSTlMAo1WHbHAE0ttaPfr1wjm+aul+Mq5lJiASX0UK71BHyKkIlRm2S+Uq5LFMEwAAAotJREFUWMPtWNuSgjAMBZRykZsgq3JRwcvy/1+4S6p1CSkzYWaf5Dx1yOGQtiFpYyz4NOwLC+H0hTlfJ8wp9ho5z+kIuLl4U0TiUhzHI+TKXadBfHhxDrGOsytHgqBHIxRP/0I9ZzeabzcBW3LsKQ6etVy/s4kQb/rHWwEObvvxJsYc6beD9hceWsYIPihG/TACPX/MseDl4V4XsFYGgYuaz7EfXSgO+FiMP2JS5FVvSdQSriiOCdPjCK4XwUVwEVwEZwv+b/o6QXnTko+QYLUfhWJ4GpZvXXr/DnoLGPx+FHzrygQ6ErigeFkhmKBXySJVgaKJORfQc9FX8m4CqeSkU5wcCYpYz3UaySkdPScWBsIh1OpdX5yrVjE8GCMIe0tRq7R5c8q0ojhbWxgUROQl6wGSoy8Qxz9ijhcJY8F/QURHGwE2hUATWXleZ3+MjLApMbPMw400BjcPafICGyDSYBCDiSHB+fX++pi52HwmrxXJdHJQqAPiR4nAxE5foPfyKrUi31o9vQ1AkZlgAZn075ap3HqWPsKsWSUAIFzwZ5D60k4dz3lFSr0cFNQNx+MJrmX8VcrbkY/uHMGEvIMZwpFFjy8IoZ+NKXd4mS/YbPp4ISji8Wt48AUjFOMoEq5sQeDUFGcNa8EWTNBrKHJObMFc3UvJKC7YgrV2yva8KWfTx7kDW1AERFyrq747I7Bvv6NWtyftDMH9GVouGI0Du8UVBAiK0UKZYKcvGqr5cocxq4lBQ6xUH4jZZqHlLEc2yMZLKw2hthE0QHY7t3ldr81tB6jgwM5uVSk06Ijhgh63mYZL5Bs7mC+/3QdQxU/Bgf1lNySRi+bjaWx9dstUR43uRXY1FnwmfgAZkPUMqt9x5wAAAABJRU5ErkJggg==",
          "normalIconStyle": {
              "width": "22px",
              "height": "22px"
          },
          "normalTextStyle": {
              "color": "rgba(140,140,140,1)",
              "fontSize": "12px",
              "lineHeight": "14px",
              "styleEditorUnfold": true
          }
      },
      {
          "pagePath": "pages/u_9ffYc/index",
          "text": "加入社群",
          "selectedIconPath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACkCAMAAAAngNUJAAAB/lBMVEUAAAAAAAAJCQkAAAAAAAAjIyNfX19wcHCqqqr+/v7W1taOjo7JyclFRUW+vr5wcHD9/f39/f3Pz8+kpKTa2tr6+vq7u7u1tbWXl5dZWVlQUFD9/f34+Pjv7+/g4ODY2NjU1NTFxcWYmJj19fXp6en+/v7BwcG8vLyIiIj9/f36+vr8/Pzd3d38/Pz29vbQ0ND6+vr19fX39/f09PT19fXx8fHy8vLz8/Pu7u7l5eXl5eXc3NzU1NTFxcWtra3x8fH+/v79/f38/Pzv7+/t7e3t7e3u7u7s7Ozm5ubz8/P6+vr5+fn29vb/ZgD4+Pj3rQD8/Pz19fXv6nf09PT////+/v77+PT+bAr64ajx4mj/aQT89vH85db3uBz3sxP779L9za39u43v53L3vzv+ZgH8/Pn869/9rHb50HHw5m79o2b5zWX+n2D+hTP4uin+dBj3sgz3sAf7+ff79OX8yKT62pH514f9sX7x32L9m1jy1E34xUv0x0j0xzT1viL+cRH/cQb817365LH+iz778+z89+v87uT78tv74M376sX80bP64KL53Zn8wJf51H7x21r0xEb9jUH2tjj5nyb+eyP+eB78gxL+eg377Mr73cf66Lz8w539qG/4yFb9lk/+kEb+iTn+gCv525T5x1LzzlDy0ET3qS/7kxz7kRz8iBUpgFkJAAAASnRSTlMABQkGBwsREyL8RBk3DiwQ+fQ4IEvfJyQXDwzuxopXSDwzHK9n+TArFvHi6ErgsDrVtrWqopaRjXpjYU4/MCOX9enxgIB2d3ZolxvLp8gAABJKSURBVHja7JZ9T9pQFMa37oW2YbRAwLZTUcGhprjFOefe3Myy/dFLmpLefv+vsnvuSx9KNE0H6rL4BFsPYPLzOec5t08e9aj/QU9v0ZN/QBrlGel5KVk+PKVGIzDLsqLQKxVG4g0F+mCQCo7QQi/ob3X23351R3H85Uscj9yvb/c7W/3ACy2LKO+TEXQEF3mB3em5uztn766Pf/iOw4Ucx/9xfP3ubGfX7XXswIsI8l4ZNZ0XbO27n05nXYcXWZYlFYk3Cu50Z6ef3P2twCPGe0KUnSW6YW/3/eCQExljLE3TOZQKsZQRJz8cvN/tDYnx2d0ywjwrCoZ7n7e7BMcAtlgs8nyR02VRkjJGkN3tz3vDILLu0kbgeQdv4vFrLuFSQ6ZfRrmC1W4KSP56HL858O4WUeH1ez9PiiJjjNAMiYECKWqyk7GsKE5+9vqECMI7wLN7O8I8xsi6PJcYtwqYC9lsYeNOzwbiprtLeHsfjnlm6HKQkG6p1VQqxowff9gjRPR5g/ZFB+3v3ULhrSLNIQhf0Z0mxKL7vX0QwcTNdfeoM7nmIhjIBNhul6IzPhJiwq8nnSP0eUN8nu1uK/fg3Q1w6TylCwRIfZEubru2tzlCmr6gfXGYJWxORoBuFS3Vd1NDlWFMk+zwoh3QJG5q+uzRgCdmr6zSiWXI5kzCCS3XbBnSBCinDxI+GNmYxPX4rNb0l0/dRXIrxumLgqMb6qqRZi/mMi3+r2nLAuFa7T0tEibxpEo0YZPGSRmjsxeimhiFqoxaFJZijDavwRf14xOekH3KPZinGkh0kk/9qJuplanU8hUbc5pEPov70VqEYvzCq4lsrwmi6asQXapMWtU6neuvloSIsz+5CsUgrsM3vHQy1V7g0eumxia4VVklInkNRAFJhM7lEIR/wfdy+pHGT4YPeNKT+bJnCSATqkwNzSs7SD9hiDQXH6cvQdiUr/XtnPjQXRCuAiTyZeBQQ6mJOUwUZVKcf2uBsCnfGcVDDQ3oUsSCIGBYovxDbT5n6vsCDo1WC5+icgbChv1VfHklHHKcWFoSGcTEXFCXn2MajYHKRBCiyw32Szg9Jz6kw6yMZQErUe7JX1AbTClkGlmRhOfTkLZNQ76hyEeqD18camqBoIkGQoGQKjUzo4nlg+cJE2aRlCERNtvPV5eST+Jh9ZnkwjJJBbYbajjJ9PYuTTRz6Fxe0cZuMIAv7Imj/cP4IbvwTTPQBQKbQUO2U6YtxLkito0zsV9gDOv5rCD2M8FHWkpvZaUAql5AJC0j6jnM/DiwQFjXYKvVnmV6/2H8sFiEEI06Svis6eiFLqtjj2WzdstCk2sG8FVnzBn80w8sJLA1ksmLgZSAiEouziU+7rzCGNYMYP+3DkiO7VICmnw2R9RzaFZieTTnKsq/+xjDmgEc+erpHs8uq3jNVf5jWvrcI0i9Dv2RHMP6AQzbAxrA6vGB+UNymworEVExWaYxHLRDGsP6DXPBmf4j4GH7/SUeNiQ8JJmgiBniF7Rrag08cn11wiHAZjnX9LfxvsG5rPb1H8qssyeKKIpGDOiibHQBjQUFLFFJLDF+sCQa46fRKW7cYgXFLgqiiBgVu6ISe000JsbyM313Xjlzx3k7vLMQWL7s4dx7zz1v3prWdXkSzmpqKy6PqAG1QbNoZVHPRUPmOAGyTVzk5cW2plk5E9K7Wkww4p/OLonNn4EIv6mXDXyzIN7EH+hVVvdiTmwW3UcrJJH/mH7ZADFiFuUTNQEM6YY8LYj6Gtu1OGPO3U0TgoSg4oGHYGXhJr8ioqjfW4C8KM99Esqud88VJ9EGArZ0L5QF1g6t04sKL9kAKalilCdhaqcEelACb2F3C0loFbB9W4UmBOcP+HND9Qw9RhJ/ZLAkh9gMK9vaSUKrgKX18hCiBpjnvzRAQZJSTAl4b5fQ5EMsZSHh3hJJaO3ArkNMQEXPs8qH3tNC8vdZpYbVIB/q+Cq6sMvahWLJlZYZAZFgMBxPLtc+TEw/4hwhIKCExLjkV1lAruRlJbHwLAL27lMpS08wz1jedZ9Qu/hMkoNaCVLmvcdfKbB8yFbyoX29kJATXLp2Q0RLTupnHBDucsxXeHOfPlGrZAf6MM2R5UOkVwrXG9YuBUG2RNZ1VPZLodUBJGAWKPDG13g4cNSLRs/enx6/OHTu5MATS43ph2EXZeVD7YbowkrHOqwTVuHFq+ItbDJCeoFQjYHTkzUfGJ4YqEaZwJKxxwZMMm3kVYuzajy7aUm3GBETUzHC9I0a21EbOmZn6GWUGQdRk2tis17WvaRpdkaF5+2QI6L1C3g8tROEqENnswiqRs2YEnDUyTB2mh3zUGNUuHnR8ihAhTHBiRU37efgyPgZu4b0izU0UJHjQabUtajZ1BgVbinJNZxIgQGKG2P0sp+LH2dtw2xLDTEwx7SQSy2oMY5KK0SFTQdCvoSAQ/4MMPn8fwEhpMWucSMeW+EKdXziM7yVKqxN0LQgBKyCX+MyD9j6kL6qU/UXU/y0HNMTBgcr3Io5hkv3dEYBtUAMOVtMwKMPwcGNIeLD47HBkPAyFbsCdW2hEkPU2WO8Gi3YusaTAvIYSPTAz53h46kXYy/r/TQ7/ZeuhhI3WJUVRWR/cXoyTQiT2X4o4dL8CS+R/O47oCYd8cyDS1dCheODx0ONwaqpMFYyrFA04XZjNEhaGyOaEe4xGOKTvhPeHyXBRsJs1I18WkFIKB8lbdSZCy5Y7IyTltlyAYsJX474brj4+WdoASoMBfGM/eABWiadRe6E4sZmfuyCZsnxIF1978jv3uu7oR3Hr3GrwZgQKBQunC/ud9iMzGktoAUlO1B0LbD/53D5ZtgAV57ySINMo5ZJoVXchPIZIZsmAbGHEbMeTbrx+10WuNOI4YmvEFBzxPM4smo5JSDY3lVRWTWQMxLoh1kC42783pYJF8JGuFrHmOBOT0Kc4Ctd7ZIg9siWKMCIcBMcHXbmBwmtGEvPSZBowmiL3CUgWNwcBeYwQu2AKOg9d+L3rqxwOGyMB3pE4DQmL0Sbi5xgc08fuQxcWsKLMeHC7+OpsgYGORMj/aYLMSWB3MZeX08zI9i2ab1H2h7MeB44WnPxl5tlg185El6p6uDPm5AS1/pNbUQQF4e79mATxzOCJvziO2AQ/FBjq2Fj4ZF+aMLA27MrccE4i6LCAi/tMurfczLBT6LAwEiYU+RrHr8ONYdPb4GIC4zgyoJRMHEZ7NyCt8EOTWjHeRyehIDGCQXBwkpOcE4HLRLxgoKeDjKXHSakDMBo7DhR1Y2Ok4mMC4WOOSmCFZNlpHxI08OOAgK3wjzUdQumV0klTXAnHUhYC5oin555UL3ACb7KJfhNVtgUWdKjRLgzg6AsMRRUF64zd5m/nB8Cg73GsYIa5mErCPISY4qTcfWD45IDLoS56IcTkv2ayIoSY0jggzTwes+5DMk/1s2upaogCsMgeBDEC/G6G7uvnxAYgsyGTWh+lGZpfhw1M1ORPERokVJhBQWRhhXd9C/ba+aMz8zsM2fPllYmmRe+vrM+3llrzZ/6AGfoZuKEBImfZiZsIcm9oXr6bYQqQqauytWECF2uCdJMmKghkFK8mgxwsT7ApqsHrVyYIFFT6gYlUbcZ9PXgbnIdHk8NEuzU1YM5lWTQK3UiFkY0g0QxpWSudpomzVTanqsHmS6qERELADRyy4qZUA9upRbiEOBBQpBYPUgtLmBoueUDFMHKAwFfD65f9YhfJqQZTw/KcFFYEsEaABTJL+jliMP58KPUQhICfFCJbzvz9KAtdVkh+QHIpamzHlRTr64WxYvVBD4O9aCxjEuTd+101Qxxkp5oPtZ2wd+OHqQNXL522ou7jeLccthuTSfqhU/jaXIQ22nX4tzTg/riHgBsSOsjYJAO+pPEC13dNN2CwFwjpPVh8jRzTt08YgCBD2oSV+6nhfFizRh+H64waDPNIzPzBGDfDfIMJ2xB7icK1jQCuda5/UGkQl603wDoNTBDyapse+tXEsC/9TzwyO8PZjbRdWhgmhawdcKsPMY5mU6lMD2EW0F/sDADUFrAAcBiX0aa6BxxadB+llbt1uwBb1cn6WPl+h9NYGmiD9gTxgmLMQRnjOayFKrVOoG8Nl+nDOferTiXMYR1QZof7VRNLaHatW09vbWwSJGr6gMzDCuMNE3rCCe8OaioJfTgGIadp7rhvQR8G/4+oVWr8vNlFIYLcsYyTMztERMmjh8uLCXVk4NnCUqaUZ0xxKAMEzlhBI0Zx9qbJ4GiHISHCdJwa3em2gH33HkxWVB+vBnHImVwwoYMtNGEQaIx9uZFleRanS2mSxsVCfpbaV7Mrp4MtBu4oBfH15049ufF2OFmt0nn6ts72h7+6NLTOp0qzYshUFYCiGGfQlmqyF3Zn3fcGnz3OTJv/7kwy4zuuNn5oOebO27rVxHDbQJlqQICPYADei2F/kd0L29uv1T5pl8vhJPs5e8bYTRvtz7MBvN2hAxrKQMA9M9YFnuoJm6UtDnEVnbPL75MLxXIvm5erJ+dLLPgI6baHzszzZaZIs4/bZ0ezQZDOuoIBN69PcwJh2Eiq1EI/6CaRHfflAHDJ+9rrTWeL0c2MfXpUkX0ahQhEubq3r5rUOgka5W0fCl/vTUp+VbV3jeb8wafLJf1kqXLFI6okipEGMawKXjka+c/sGD8hQte5pgRCMSgUBYcc3o0QNToohu2zr4guAzIqnVlqrDoBFlwLBNINdErova3QdIQKSG2gEP9Cf4M3gg6+MMDM1kRpYpgUChLtla3eroQR4yyyCd2eMAXJzBzQvgWHtjZC2VNGQqdF2qKdNMNIW4XM488UoyYkjVl44FxCofH9FMNJiasmOGG3SCK2X/GAsRFmWdEyOTYMARGKNSr8lCIIwIyftJ4ZcVuLfmZAzar8hECaWXqxwYg9OAp4FVZ/JCRMGFfumirFlUYAiMU6ucabjJE2KhI1q79noT5q02B9rkGBMYpbBQPXtQl7eRrC+6/vSfRf5CBxYOXBgR2iZOefnkylHPBQ3ahD69iXEIQ0owPiydD/T1ESNdDHhrVr3ZBmIVNzbog0X/cg/0AUZOjQxxwxSHLszXlh7JrdZ0wgz/M8Ac+ebbGAVchlId/uKH5ZWm7Qkbds5UPCOQlRK7k4V81PtL1v3buZqeNGArDcIU6HipnkNqMegGJmEiwQkKoEqKrSqh2xSq9/1upj4+dd+KCcEL+FjmLFpcUHh17PMOPP9trsgLPNUnITAvvfSZrQnkJN36G0dSF3rJFV2QryOFTmWQu5eJIO+eJq44wFbsfF3AsFw+f8pBQtQx//ghCvqW5uqlAZNtRKFbGWeY8lWcXnxzfZQFWCo0cgGaWvfAgSr1/vjhf9Nh4xs8+jQr4bvBVC+UIOcLcQaVC9Kyx1DHGvB8e/eMCvl9s4GO/NsPdWOh5PmQ94uIek8e8n9dHH4kG6rsbDDv0JsL2KQgdB6Bjsd1kIlSXSfxd3Nmijv6p76nFVw+MwuF+tA4jji1nbKRfTCzIcdPVyA04BEEM0QdwE2GI0viS9kMWYoKmrmCAW6iIU5GCF8M+QpQGvi2EEkbifCFkz66vlxUPn5MwEnzbCSXOZSxkIaVVBZSie/llqiuWn8S54Nsyzaqb9jfLVQYd1wo9fHkrb4aBvl6KD+Pc8qafduRbbSts7GT+t5hmLe0PPkXzJs8Er05viBSyDb4PCNvFs04zl/P6npOpGcaY+4YUH0Gm93nR4vuQ8KKLsVaOz6C6jMSpGMa8bC2eybsYa9VdVPiqp/lBmjgmZh0NYsYZI+R/Svse6qa3volGotVKIkX7PGPoxexKtJqhfbsRNiGc7nYJESPXwP9jdHRveRvC6Rp8uxDqSpxNfn+li1oKADMm/il0wtN4P119+HbSxLASjQYkOl8ay6J1lNwFNSDRhNVH+3baxMZoxKRz6ffAQCYnMWDrOsk81YhJ09C+vRBTSKdzkVFTXm4bEtL569t0LzyESpwN/Ty20cWvzN5Q8pNdbd68H2bKw7cvYmdzUGwwelXCZM6jbRUUa7u98UqitNEStRuU6uSP9PRK1K6V5u2Th1DWYjLWhhUn3efDhFNHYjJ2xl5eTXLc83WOe77Occ+Tq0trZGYPEksNEWNANqa1OTC77x8f+z4HZtvWNAGH7oCJ1GpUpDJDN41pY4U3ukZpihPdEUK9QSqTyjRwx4pFRxmhlP7LKeTfE8J/yuH8n06Ydq5znevY9Q+c9YaXIGQYygAAAABJRU5ErkJggg==",
          "selectedIconStyle": {
              "width": "36px",
              "height": "36px",
              "styleEditorUnfold": true
          },
          "selectedTextStyle": {
              "fontSize": "12px",
              "color": "rgba(0,0,0,1)",
              "styleEditorUnfold": true,
              "fontWeight": "500",
              "lineHeight": "14px"
          },
          "normalIconPath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACkCAMAAAAngNUJAAAB/lBMVEUAAAAAAAAJCQkAAAAAAAAjIyNfX19wcHCqqqr+/v7W1taOjo7JyclFRUW+vr5wcHD9/f39/f3Pz8+kpKTa2tr6+vq7u7u1tbWXl5dZWVlQUFD9/f34+Pjv7+/g4ODY2NjU1NTFxcWYmJj19fXp6en+/v7BwcG8vLyIiIj9/f36+vr8/Pzd3d38/Pz29vbQ0ND6+vr19fX39/f09PT19fXx8fHy8vLz8/Pu7u7l5eXl5eXc3NzU1NTFxcWtra3x8fH+/v79/f38/Pzv7+/t7e3t7e3u7u7s7Ozm5ubz8/P6+vr5+fn29vb/ZgD4+Pj3rQD8/Pz19fXv6nf09PT////+/v77+PT+bAr64ajx4mj/aQT89vH85db3uBz3sxP779L9za39u43v53L3vzv+ZgH8/Pn869/9rHb50HHw5m79o2b5zWX+n2D+hTP4uin+dBj3sgz3sAf7+ff79OX8yKT62pH514f9sX7x32L9m1jy1E34xUv0x0j0xzT1viL+cRH/cQb817365LH+iz778+z89+v87uT78tv74M376sX80bP64KL53Zn8wJf51H7x21r0xEb9jUH2tjj5nyb+eyP+eB78gxL+eg377Mr73cf66Lz8w539qG/4yFb9lk/+kEb+iTn+gCv525T5x1LzzlDy0ET3qS/7kxz7kRz8iBUpgFkJAAAASnRSTlMABQkGBwsREyL8RBk3DiwQ+fQ4IEvfJyQXDwzuxopXSDwzHK9n+TArFvHi6ErgsDrVtrWqopaRjXpjYU4/MCOX9enxgIB2d3ZolxvLp8gAABJKSURBVHja7JZ9T9pQFMa37oW2YbRAwLZTUcGhprjFOefe3Myy/dFLmpLefv+vsnvuSx9KNE0H6rL4BFsPYPLzOec5t08e9aj/QU9v0ZN/QBrlGel5KVk+PKVGIzDLsqLQKxVG4g0F+mCQCo7QQi/ob3X23351R3H85Uscj9yvb/c7W/3ACy2LKO+TEXQEF3mB3em5uztn766Pf/iOw4Ucx/9xfP3ubGfX7XXswIsI8l4ZNZ0XbO27n05nXYcXWZYlFYk3Cu50Z6ef3P2twCPGe0KUnSW6YW/3/eCQExljLE3TOZQKsZQRJz8cvN/tDYnx2d0ywjwrCoZ7n7e7BMcAtlgs8nyR02VRkjJGkN3tz3vDILLu0kbgeQdv4vFrLuFSQ6ZfRrmC1W4KSP56HL858O4WUeH1ez9PiiJjjNAMiYECKWqyk7GsKE5+9vqECMI7wLN7O8I8xsi6PJcYtwqYC9lsYeNOzwbiprtLeHsfjnlm6HKQkG6p1VQqxowff9gjRPR5g/ZFB+3v3ULhrSLNIQhf0Z0mxKL7vX0QwcTNdfeoM7nmIhjIBNhul6IzPhJiwq8nnSP0eUN8nu1uK/fg3Q1w6TylCwRIfZEubru2tzlCmr6gfXGYJWxORoBuFS3Vd1NDlWFMk+zwoh3QJG5q+uzRgCdmr6zSiWXI5kzCCS3XbBnSBCinDxI+GNmYxPX4rNb0l0/dRXIrxumLgqMb6qqRZi/mMi3+r2nLAuFa7T0tEibxpEo0YZPGSRmjsxeimhiFqoxaFJZijDavwRf14xOekH3KPZinGkh0kk/9qJuplanU8hUbc5pEPov70VqEYvzCq4lsrwmi6asQXapMWtU6neuvloSIsz+5CsUgrsM3vHQy1V7g0eumxia4VVklInkNRAFJhM7lEIR/wfdy+pHGT4YPeNKT+bJnCSATqkwNzSs7SD9hiDQXH6cvQdiUr/XtnPjQXRCuAiTyZeBQQ6mJOUwUZVKcf2uBsCnfGcVDDQ3oUsSCIGBYovxDbT5n6vsCDo1WC5+icgbChv1VfHklHHKcWFoSGcTEXFCXn2MajYHKRBCiyw32Szg9Jz6kw6yMZQErUe7JX1AbTClkGlmRhOfTkLZNQ76hyEeqD18camqBoIkGQoGQKjUzo4nlg+cJE2aRlCERNtvPV5eST+Jh9ZnkwjJJBbYbajjJ9PYuTTRz6Fxe0cZuMIAv7Imj/cP4IbvwTTPQBQKbQUO2U6YtxLkito0zsV9gDOv5rCD2M8FHWkpvZaUAql5AJC0j6jnM/DiwQFjXYKvVnmV6/2H8sFiEEI06Svis6eiFLqtjj2WzdstCk2sG8FVnzBn80w8sJLA1ksmLgZSAiEouziU+7rzCGNYMYP+3DkiO7VICmnw2R9RzaFZieTTnKsq/+xjDmgEc+erpHs8uq3jNVf5jWvrcI0i9Dv2RHMP6AQzbAxrA6vGB+UNymworEVExWaYxHLRDGsP6DXPBmf4j4GH7/SUeNiQ8JJmgiBniF7Rrag08cn11wiHAZjnX9LfxvsG5rPb1H8qssyeKKIpGDOiibHQBjQUFLFFJLDF+sCQa46fRKW7cYgXFLgqiiBgVu6ISe000JsbyM313Xjlzx3k7vLMQWL7s4dx7zz1v3prWdXkSzmpqKy6PqAG1QbNoZVHPRUPmOAGyTVzk5cW2plk5E9K7Wkww4p/OLonNn4EIv6mXDXyzIN7EH+hVVvdiTmwW3UcrJJH/mH7ZADFiFuUTNQEM6YY8LYj6Gtu1OGPO3U0TgoSg4oGHYGXhJr8ioqjfW4C8KM99Esqud88VJ9EGArZ0L5QF1g6t04sKL9kAKalilCdhaqcEelACb2F3C0loFbB9W4UmBOcP+HND9Qw9RhJ/ZLAkh9gMK9vaSUKrgKX18hCiBpjnvzRAQZJSTAl4b5fQ5EMsZSHh3hJJaO3ArkNMQEXPs8qH3tNC8vdZpYbVIB/q+Cq6sMvahWLJlZYZAZFgMBxPLtc+TEw/4hwhIKCExLjkV1lAruRlJbHwLAL27lMpS08wz1jedZ9Qu/hMkoNaCVLmvcdfKbB8yFbyoX29kJATXLp2Q0RLTupnHBDucsxXeHOfPlGrZAf6MM2R5UOkVwrXG9YuBUG2RNZ1VPZLodUBJGAWKPDG13g4cNSLRs/enx6/OHTu5MATS43ph2EXZeVD7YbowkrHOqwTVuHFq+ItbDJCeoFQjYHTkzUfGJ4YqEaZwJKxxwZMMm3kVYuzajy7aUm3GBETUzHC9I0a21EbOmZn6GWUGQdRk2tis17WvaRpdkaF5+2QI6L1C3g8tROEqENnswiqRs2YEnDUyTB2mh3zUGNUuHnR8ihAhTHBiRU37efgyPgZu4b0izU0UJHjQabUtajZ1BgVbinJNZxIgQGKG2P0sp+LH2dtw2xLDTEwx7SQSy2oMY5KK0SFTQdCvoSAQ/4MMPn8fwEhpMWucSMeW+EKdXziM7yVKqxN0LQgBKyCX+MyD9j6kL6qU/UXU/y0HNMTBgcr3Io5hkv3dEYBtUAMOVtMwKMPwcGNIeLD47HBkPAyFbsCdW2hEkPU2WO8Gi3YusaTAvIYSPTAz53h46kXYy/r/TQ7/ZeuhhI3WJUVRWR/cXoyTQiT2X4o4dL8CS+R/O47oCYd8cyDS1dCheODx0ONwaqpMFYyrFA04XZjNEhaGyOaEe4xGOKTvhPeHyXBRsJs1I18WkFIKB8lbdSZCy5Y7IyTltlyAYsJX474brj4+WdoASoMBfGM/eABWiadRe6E4sZmfuyCZsnxIF1978jv3uu7oR3Hr3GrwZgQKBQunC/ud9iMzGktoAUlO1B0LbD/53D5ZtgAV57ySINMo5ZJoVXchPIZIZsmAbGHEbMeTbrx+10WuNOI4YmvEFBzxPM4smo5JSDY3lVRWTWQMxLoh1kC42783pYJF8JGuFrHmOBOT0Kc4Ctd7ZIg9siWKMCIcBMcHXbmBwmtGEvPSZBowmiL3CUgWNwcBeYwQu2AKOg9d+L3rqxwOGyMB3pE4DQmL0Sbi5xgc08fuQxcWsKLMeHC7+OpsgYGORMj/aYLMSWB3MZeX08zI9i2ab1H2h7MeB44WnPxl5tlg185El6p6uDPm5AS1/pNbUQQF4e79mATxzOCJvziO2AQ/FBjq2Fj4ZF+aMLA27MrccE4i6LCAi/tMurfczLBT6LAwEiYU+RrHr8ONYdPb4GIC4zgyoJRMHEZ7NyCt8EOTWjHeRyehIDGCQXBwkpOcE4HLRLxgoKeDjKXHSakDMBo7DhR1Y2Ok4mMC4WOOSmCFZNlpHxI08OOAgK3wjzUdQumV0klTXAnHUhYC5oin555UL3ACb7KJfhNVtgUWdKjRLgzg6AsMRRUF64zd5m/nB8Cg73GsYIa5mErCPISY4qTcfWD45IDLoS56IcTkv2ayIoSY0jggzTwes+5DMk/1s2upaogCsMgeBDEC/G6G7uvnxAYgsyGTWh+lGZpfhw1M1ORPERokVJhBQWRhhXd9C/ba+aMz8zsM2fPllYmmRe+vrM+3llrzZ/6AGfoZuKEBImfZiZsIcm9oXr6bYQqQqauytWECF2uCdJMmKghkFK8mgxwsT7ApqsHrVyYIFFT6gYlUbcZ9PXgbnIdHk8NEuzU1YM5lWTQK3UiFkY0g0QxpWSudpomzVTanqsHmS6qERELADRyy4qZUA9upRbiEOBBQpBYPUgtLmBoueUDFMHKAwFfD65f9YhfJqQZTw/KcFFYEsEaABTJL+jliMP58KPUQhICfFCJbzvz9KAtdVkh+QHIpamzHlRTr64WxYvVBD4O9aCxjEuTd+101Qxxkp5oPtZ2wd+OHqQNXL522ou7jeLccthuTSfqhU/jaXIQ22nX4tzTg/riHgBsSOsjYJAO+pPEC13dNN2CwFwjpPVh8jRzTt08YgCBD2oSV+6nhfFizRh+H64waDPNIzPzBGDfDfIMJ2xB7icK1jQCuda5/UGkQl603wDoNTBDyapse+tXEsC/9TzwyO8PZjbRdWhgmhawdcKsPMY5mU6lMD2EW0F/sDADUFrAAcBiX0aa6BxxadB+llbt1uwBb1cn6WPl+h9NYGmiD9gTxgmLMQRnjOayFKrVOoG8Nl+nDOferTiXMYR1QZof7VRNLaHatW09vbWwSJGr6gMzDCuMNE3rCCe8OaioJfTgGIadp7rhvQR8G/4+oVWr8vNlFIYLcsYyTMztERMmjh8uLCXVk4NnCUqaUZ0xxKAMEzlhBI0Zx9qbJ4GiHISHCdJwa3em2gH33HkxWVB+vBnHImVwwoYMtNGEQaIx9uZFleRanS2mSxsVCfpbaV7Mrp4MtBu4oBfH15049ufF2OFmt0nn6ts72h7+6NLTOp0qzYshUFYCiGGfQlmqyF3Zn3fcGnz3OTJv/7kwy4zuuNn5oOebO27rVxHDbQJlqQICPYADei2F/kd0L29uv1T5pl8vhJPs5e8bYTRvtz7MBvN2hAxrKQMA9M9YFnuoJm6UtDnEVnbPL75MLxXIvm5erJ+dLLPgI6baHzszzZaZIs4/bZ0ezQZDOuoIBN69PcwJh2Eiq1EI/6CaRHfflAHDJ+9rrTWeL0c2MfXpUkX0ahQhEubq3r5rUOgka5W0fCl/vTUp+VbV3jeb8wafLJf1kqXLFI6okipEGMawKXjka+c/sGD8hQte5pgRCMSgUBYcc3o0QNToohu2zr4guAzIqnVlqrDoBFlwLBNINdErova3QdIQKSG2gEP9Cf4M3gg6+MMDM1kRpYpgUChLtla3eroQR4yyyCd2eMAXJzBzQvgWHtjZC2VNGQqdF2qKdNMNIW4XM488UoyYkjVl44FxCofH9FMNJiasmOGG3SCK2X/GAsRFmWdEyOTYMARGKNSr8lCIIwIyftJ4ZcVuLfmZAzar8hECaWXqxwYg9OAp4FVZ/JCRMGFfumirFlUYAiMU6ucabjJE2KhI1q79noT5q02B9rkGBMYpbBQPXtQl7eRrC+6/vSfRf5CBxYOXBgR2iZOefnkylHPBQ3ahD69iXEIQ0owPiydD/T1ESNdDHhrVr3ZBmIVNzbog0X/cg/0AUZOjQxxwxSHLszXlh7JrdZ0wgz/M8Ac+ebbGAVchlId/uKH5ZWm7Qkbds5UPCOQlRK7k4V81PtL1v3buZqeNGArDcIU6HipnkNqMegGJmEiwQkKoEqKrSqh2xSq9/1upj4+dd+KCcEL+FjmLFpcUHh17PMOPP9trsgLPNUnITAvvfSZrQnkJN36G0dSF3rJFV2QryOFTmWQu5eJIO+eJq44wFbsfF3AsFw+f8pBQtQx//ghCvqW5uqlAZNtRKFbGWeY8lWcXnxzfZQFWCo0cgGaWvfAgSr1/vjhf9Nh4xs8+jQr4bvBVC+UIOcLcQaVC9Kyx1DHGvB8e/eMCvl9s4GO/NsPdWOh5PmQ94uIek8e8n9dHH4kG6rsbDDv0JsL2KQgdB6Bjsd1kIlSXSfxd3Nmijv6p76nFVw+MwuF+tA4jji1nbKRfTCzIcdPVyA04BEEM0QdwE2GI0viS9kMWYoKmrmCAW6iIU5GCF8M+QpQGvi2EEkbifCFkz66vlxUPn5MwEnzbCSXOZSxkIaVVBZSie/llqiuWn8S54Nsyzaqb9jfLVQYd1wo9fHkrb4aBvl6KD+Pc8qafduRbbSts7GT+t5hmLe0PPkXzJs8Er05viBSyDb4PCNvFs04zl/P6npOpGcaY+4YUH0Gm93nR4vuQ8KKLsVaOz6C6jMSpGMa8bC2eybsYa9VdVPiqp/lBmjgmZh0NYsYZI+R/Svse6qa3volGotVKIkX7PGPoxexKtJqhfbsRNiGc7nYJESPXwP9jdHRveRvC6Rp8uxDqSpxNfn+li1oKADMm/il0wtN4P119+HbSxLASjQYkOl8ay6J1lNwFNSDRhNVH+3baxMZoxKRz6ffAQCYnMWDrOsk81YhJ09C+vRBTSKdzkVFTXm4bEtL569t0LzyESpwN/Ty20cWvzN5Q8pNdbd68H2bKw7cvYmdzUGwwelXCZM6jbRUUa7u98UqitNEStRuU6uSP9PRK1K6V5u2Th1DWYjLWhhUn3efDhFNHYjJ2xl5eTXLc83WOe77Occ+Tq0trZGYPEksNEWNANqa1OTC77x8f+z4HZtvWNAGH7oCJ1GpUpDJDN41pY4U3ukZpihPdEUK9QSqTyjRwx4pFRxmhlP7LKeTfE8J/yuH8n06Ydq5znevY9Q+c9YaXIGQYygAAAABJRU5ErkJggg==",
          "normalIconStyle": {
              "width": "36px",
              "height": "36px",
              "styleEditorUnfold": true
          },
          "normalTextStyle": {
              "fontSize": "12px",
              "color": "rgba(140,140,140,1)",
              "styleEditorUnfold": true,
              "lineHeight": "14px"
          }
      },
      {
          "pagePath": "pages/u_79HX_/index",
          "text": "校友名录",
          "selectedIconPath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAk1BMVEUAAAD7biX8bib/ciz/gjX7biX6bSX7biX7biX8byb/djn7bSX7biX7biX7bib7bib7bif7bSX8bib7bib8bib/cSj/diz7bSb7bSX6biX7byb/cij/czD7biX7bib8byb/cSX6bSX7biX7biX7bib8byb7bij7byb/bin/bir7biX7bib8byf+bin6bib6bib6bSWslfeOAAAAMHRSTlMA+o4WBerc46tSCfTNwr2AQLeXhFwfEefJnzcaC7JoWCjTiXtvYEY8KyPudUsxo9jaNf1rAAACxElEQVRYw+1Y3ZprMBQViipKMbRUtTqqv9O8/9OdIxxGRiR79O50XfmSndVk/6zsVHrjjRqud7hGa3//IrqPJW7gLV7B91BxC0uZzqfo+Bvs6YQb3MNusgNxH/pUwk9MIZ5+4teeeUUTOhMJ5zTh50RCnya8k+F9CE4/eUX2UlJ85vbvYGhhJMOqxo0wxsfqy+oTetWYXH1pJfigFqFG3/lUhTgWGJ9ZsyD9kYnIJUMZrvE1E+JbNKkSNXIVmG2Z/MvqXTNkb0X216jVslWWxFOJ047d8ovdGM2Ea+PYG9yf3I++mYMJ5oLFiwKuYVBHS+aYlYjwGRIfp5rxNO7AJzEquGxdsKPRonGaY4jhxnXjBZFkAGpRzIkw2otXvEpyhzmfIKjiFeNxkUm5gmTkUC1ZsUJ8rTMaAoM4KWEkFhE8oHRq1aLb8JxHFESC4VgtOgzPkZAZQMIEV1AGk5CcGNwPWcxtGHVOQSEza8tvZ+BxtplXMEe2WJ7ShmaICJdgwhnJRKZ3zyCyLjkSVoomcEJyspBBiGZwwoxVDnktlnC4ecEQ4NTfSv8ZHo5t2XNDODAfzvpq6vOMdUGscA21EMtoH+EaWjwYKxW3kAE9FaMxIBdYBx/4PkAxp93nX6WnznhQs2PcR8ojXNLNPKfbNzl8IaawoQzWwCeYS9tbPy5sChlPpynonB3ybr87bU9rdkobnCHP3gGdyqj5J7ep4bxSF1fgK3bXt79ux1/a2kLogu9QjD9ko4uA1Oj0E5CG3O3vLCRebWYgh5Gsab29naggBuTY5ob9+0oZZI8uUMy95ctmT2HsCnfkio11Rxmi8xDLa3y9Q1/3/j7DYomAf+DQxYhWfvBIwsX2UgbymrD9ru/L8RiiM7yrkhGTTr39qiNQjtEgndbSgTG7ezqte/JDmoZzkKdPXTVNbZ3mRiK98Yb0B03U04njBqv3AAAAAElFTkSuQmCC",
          "selectedIconStyle": {
              "width": "22px",
              "height": "22px"
          },
          "selectedTextStyle": {
              "fontSize": "12px",
              "color": "rgba(0,0,0,1)",
              "styleEditorUnfold": true,
              "fontWeight": "500",
              "lineHeight": "14px"
          },
          "normalIconPath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAflBMVEUAAACsrKyMjIySkpKPj4+NjY2MjIyMjIyNjY2NjY2Ojo6Ojo6SkpKampqMjIyNjY2NjY2NjY2Tk5ONjY2NjY2NjY2MjIyPj4+NjY2NjY2NjY2NjY2Ojo6SkpKNjY2Ojo6NjY2MjIyNjY2Ojo6NjY2NjY2NjY2QkJCNjY2MjIwHRVBUAAAAKXRSTlMABPoUKV7lj+rMUDwaDJ+Cfb4I4MSyrDT03NC3QR+IV+/WmGlHdW4jpeTnfPAAAAMeSURBVFjD7VfZtqMgEFQUt2jct5ioMdvl/39wxoYJ5h5UiHmb1BNHsGx7qW60L76gOA7n3nFb80N0p5gwDMEn+EqHPHEwtvP5Fpkg0zcT7skLLpsdCDRpZ/j3alxZWwnvI0vvj8sdcO8+8ccRXeef+OdmJPHoOhzX4UbCYiS5T6y9bSRsIf10SKCeW2sqJ6RhN3ceidz4y3EYVygYN12C7ESteq1/sXAJ8BzOrPrGZ/a4qhXirYe00MBERCZwfOpYQCTNx17IWSZyoCM86gjFXq4Qk4YALCZXuCIMVsmOXNijOJCxL2aH/ac+DA44LeKvPzJ2SJdWg2h6VDePu9PrsZAACl2qeAnC2howjZa9cIQHFXnaOq6U8brsQJpu6/bxYFuLRROx35DDDU7/LJx4IDWdpwlWrkQYmfINx4Hcmd9HqoqHl+NiQ7nKyggPYjO32yuVPMADJ/kziTVuVorSWS/I+AAKIs/FE+0s3nOoxKvBJyMMYRLCHyeaItxZMzyaU6qwZ2sr5DvKcc5mWzBWJgRPpaKd+L3RJYFMFJU/9N31OhYnhyi1U7qhjAzyZoYQJeqEHWjizBhTvHVJaLEu1IZbHgbaf4Yyytys8HTpiT50+8oqupkXjIZQOFhyRkOEoi6FLX5yY7J16ZkKgDqBfQ6ZIFS8EaFS3GIBcq30yg/zMXyCkt6YsHn8YcPmCmL4bnsKrq6wlYbgXOPZJaoVLwb85he4ol7kcjHUwZvlSrlNLn4e/LNYu/gVrJPQ6XwisZbIwt1EjzyJmLgs4cBdvw7k3A8mkVDaE+EWQBgL4fB4G/lq2rpXcIaaOmpaYAtv5klP86bIJG/uFwJIXfpiH4iGdY40Wa3kA5kCi7ooh/WQkBqLcAyiT9rP7dqUEq+MMKBoJllzat5FUhB17EJR7ee/b+xwVz7pklnb2jjS2QtHU1aPjZhYoSGiG5DyEMRvBHvvNR8C3CDCS0117gPOJsSlbyTBY4dtF9jem/tasgTLVJ+qbDRL59zemgiMyBLS1ZxOFbo3pL/YUrvUtsHEbX5Onaqqs7z1fO2LL7Q/n4ygyArq1+4AAAAASUVORK5CYII=",
          "normalIconStyle": {
              "width": "22px",
              "height": "22px"
          },
          "normalTextStyle": {
              "fontSize": "12px",
              "color": "rgba(140,140,140,1)",
              "styleEditorUnfold": true,
              "lineHeight": "14px"
          }
      },
      {
          "pagePath": "pages/u_GuCyg/index",
          "text": "我的",
          "selectedIconPath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAkFBMVEUAAAD7biX7bSX/cjH7bSb6bSX6bib7bSX8bib/cSn7bib7bSX7bib8bif7byb/cSb/civ7biX7biX7bib/byj/cCj/cCj/gDL6bSb6biX7bib6biX7byb/dzP7biX6bSX6bSX7biX6biX8cCX6byb6bSX7bib7byb8bSf+cCf7bSf8bib8byj7bij7bib6bSXDN5dTAAAAL3RSTlMAe+4O+9rX95clybtoS0EnFPKxcioiGwaoo3dsPQrl3tK1nVg2zsKHVDGDYVo6jhCTinIAAAHSSURBVFjD7ddZkqMwEATQspCANrttjDe89zrdk/e/3fRE/zhgMCnpc/wOABGqkipLHh6+FZt1EqrIvKw+ruLt6TXEjX38JT7KWKNrthBnkwr/oM+BOAkSDAifnE4vxCCVO3xP4Q6diaUgxF2VbWkSjDClXX0xambVfxXG7YQXgzC1qLAG401Yr6AkwgpB0YFwCpAuwtmAtBLOGqSQviUkRdeE1QpFgVULJQKrEIoBi2zEF5Aq4axAMsL5AOkknCtIqZD24Cwd31f/F/YLlK3QZiAcGqEtNMZ9ioUzRj17BYc+VfhFG/9wk2vcMxdrWYVBei4OFgYDVCZOytlAfQtxtZui5/ApPt4SjVvTbSOegssqVPhWmVO6FEd5Z1q0dRH0/nQq+LOLjvVo6xscW7Zh1PjmsFMAzkJZ7kebt9lE+OsXVYUjfpjBiHo54EdEbBdNctMk+Vh3hq1lmHueLzvnMT/i1to+X5s4zeuyaco638bGdpamsBW9yx2ZhjUTyKBrBAcri3ffb0CXBgT+GNspXB0CLi7wZs4JiZ+CE3jR18733uHJkOsYL+NCK+83tz3xYmI38bkuKTzp7oQ9wUt/ugRneFCp9NWXzcTNJgvk4b/yB2+20CMwCneLAAAAAElFTkSuQmCC",
          "selectedIconStyle": {
              "width": "22px",
              "height": "22px"
          },
          "selectedTextStyle": {
              "fontSize": "12px",
              "color": "rgba(0,0,0,1)",
              "styleEditorUnfold": true,
              "fontWeight": "500",
              "lineHeight": "14px"
          },
          "normalIconPath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAz1BMVEUAAACXl5eYmJiNjY2cnJyampqXl5eXl5eUlJSNjY2kpKSNjY2NjY2NjY2Pj4+YmJiMjIyNjY2NjY2NjY2NjY2Ojo6NjY2SkpKXl5eYmJiNjY2YmJiXl5eXl5eMjIyXl5eNjY2Ojo6ZmZmWlpaampqOjo6WlpaNjY2NjY2NjY2NjY2MjIyMjIyPj4+NjY2YmJiYmJiYmJiMjIyZmZmOjo6YmJiOjo6Ojo6ZmZmbm5uSkpKXl5eXl5eNjY2NjY2Xl5eYmJiYmJiNjY2MjIyXl5cMzWEVAAAAQ3RSTlMA5175CxAfFBh6Be3y2CruzL61k4RVRTv79ODe17KagWRfUkxAMyXl3MWnjW8u6NCvqKB3c2xpUEgsB8e7ua6dlI3RPiS+yQAAAspJREFUWMPtlllX4kAQhXsmCSFsAgFZRRDZFxERFPfp/P/fNMNt8UhIuquTefCB78lzuH1T6bpVkZ04IUj2uuc56z+ZVSZZgwMj7+Ril+am+QHD1TaGnVnK8CPqnch+53MeSD4RzW9qcADw9550hemTan0dX5Zn9q7T7aKxt2/rG7pckN18v9TpvkdlXb/1Z3X+UqwSB0ZPsx+GKK/PjuiKzg+SOn7bOg4VAocjN8CPYx3DlQhxyLD1RPkaL23h6jOhc1YW9dMNxcVPwwWvEJyTDYcYsVS4IIeXblH9cni+dGSXO8WcauggaKY0VngmdQJHO3FRPphoW4loiJyt5ZqxThQNQgtLGsFJ8h0zxW7DZNIMZzC05aIyok8z7MNQsZU7WBA0Q5MSCUQrz2hkCBvUFdGikd2JJ3JNXmf2kLEhIQnUL0sZ6pz6C0Fd2qZ6l+BWRoxKEdtBUmIbBTr0TxSX99AaINY2I1OQV/CiUyDocbBhgUzw49xkGixxxugErUKXA/xGxkRwg+Jt4zoQAi0Sc/+/NmC7SnNQSDFNKhkuGK2/8jtz6lyQtZk2MxwG+fFk5bivQ76nAD9d7BEPwU2xSKScDA+gXmaRsV2D+0hPUywOCef7ixvFtsVik+yUli9/8sVWaWNG9mh21aJuM0nuxpPnXapEl573RL3ON+8fC1M6m4ud5o3md++BK5nmygP3FL/rKrQfctUHRNVrQlDOIH1W6Z4h+5VQLq4bCBvKvFkNCG9UUbqFrPbIlDzWIL2Vq+58DSE05k6meYBkH0J1FMFDuKIvGnLBiFxAftYPbUgTgiZ5AVifB0zNB5JfiX4l9EunN40eC3qs6MGlB58+Wu+iIZLRVAz/u6/AmmR5kNZT7bDEimS9ERdo5fApYhlFBIcP386uejGp2v4piYl/WuxGPL+GfdT9RRy/RSIoUN3fEekm2ImfzF9KTBz2gNiTSAAAAABJRU5ErkJggg==",
          "normalIconStyle": {
              "width": "22px",
              "height": "22px"
          },
          "normalTextStyle": {
              "fontSize": "12px",
              "color": "rgba(140,140,140,1)",
              "styleEditorUnfold": true,
              "lineHeight": "14px"
          }
      }
  ],
  "ci": {
      "appid": "wx5da3574458181b8f",
      "privateKey": "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAtQ2FCenrGx7UVXS7+A8xJSfpAZLB8TLjKebW41aiMGT2xqqb\nAOD3NX8PVCdk7TZwMi5+WMVwxGp1f/q+kPvglcLnRlSUNW9l2KpBtr1HoYOV03q9\nUUoT/JuV53eDGSg0rZA+wqkTZfZZVHXpoHT+WJ3bkTZcWe7JB7YkbwElw3Ls5Fih\ngxLzms54uleZ0e4RasnJQBj/9TRfhxvEcPOFYFz8PdDQel44vD4eUBWxIaZkS1Vd\nGNC7h08qvjK8LjHznhetnWuMzDFKnQaQhkC+OzdooWLAqwY9u3501m6Tz9pLgp7h\nMKbNVuxEosVWChSqEYbylWGC0GL1OAjwxE7EzQIDAQABAoIBAQClEuuOq2lBs+0y\n8RkExY0wbGAEoDMV4CjAJokcg/uilhtt7VUgCv06GFv4hWZ+5ViMWFm4RGRZoRr6\nkbq4Y/5TbX4CYNE0mxnH3wvFOnSZ7Whohgsgl6L7eTvG6+9qu360FMU0JIXcPC0c\nVdmqA6F3WI49qsuu74j47/fuAaTVumQVi22zWxqy1fJZ41ZVMwvTSF+e3v8TCXFO\nDDcY0sS6wOnvkNKzTuHeAzsLnw+7QykcsWCcZ7YVSTK6StY8hozLALkkiSjCNqrE\nwSESehiCMpZUduGhCEkRXcAZV8u4JdjzIXGSXnqfz79KvwQIBq1skPMQY8ouRkTy\nAJ2RAKw9AoGBAOnmLwCv8tY9/Fz7RwCcuLl3Pxdi52E2ZF8HgIeJ21SK5ZvNlzbL\nc+KmfxJgFQuLo2bzbswdRPQlPMLjz1lYXB6LYfEePtSsvfleggrOY0CFZlAWIP/V\nzaXZC4InNeVEvXUa3/T4Nz88Ox6+q4vFqxndyCRTD3rKKsnvMcbVfp2vAoGBAMYp\nB3bRarZ3eqxrX08KOxwxROh9/VsqJALqwBURLO2/fC5Fe0X1dmb6eNOe9//kuBXl\nt7L0KsRrGhzy0J3NirJ2TPVxUEySh4FMqAOmANLinPDXUuGp9EnIf/C2mXSU0G0y\nGa/eRtMB6g07lKOhlrE1FbBNQBT60SOiyXtI7IBDAoGBAL4zZXNsoM8hNs+xsipI\nR1riIlb1IWyG25X/NsCBFO8px88rntR7G3BqrhiWM2bhFW5JdIbdIk5a3Y8py1o/\nJSHdfDajvroZAp7/AEajUEiOcgWcCRehmApOdjJPil82x82rngTJt7tfUkANEtil\nVB7Dn9YSCRtzvNna/aJPyBeXAoGACnxpVLRIPVedOjqEVJ5p+lfxGYxxN73HIhBi\nEbtS8VHMtHYgy9btaQ2gDzK+VOA5jY8WZXXePX6dZyLCP1d9G2x/Lg3M/gBTA1iX\nG3pRWNd9DpGWZTKlJrJhcs9212B4lw6rpU7R2KClTgX1G6OVYdM5TpcH6RRMtOIM\nX2XAfhkCgYBN8mJ0rUiXFZGMKY3itZEBMVGdemJgZOoN6paqQvrmXAFhbEspP6yz\n4Iu9o/VFP1EQCRNAj3YsoVvHI+rW7CU5CSwo95/khvTQMJXjpJl63VNS8x22cntI\nwvfRuNb2j//Qc8GnKF/nVtfLREIbPSmbSRY59PFkB2P/HvXBmVkrSg==\n-----END RSA PRIVATE KEY-----",
      "type": "miniProgram",
      "version": "1.0.0",
      "desc": "版本说明"
  },
  "status": {
      "projectId": 443522790572101,
      "fileId": 458400587018309,
      "apiEnv": "prod",
      "callServiceHost": "https://admin.alialumni.com",
      "appid": "wx5da3574458181b8f",
      "appsecret": "afd66724b7c0695364287aa3b04bd286"
  }
}