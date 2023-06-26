module.exports = {
  env: {
    NODE_ENV: '"production"',
  },
  defineConstants: {},
  mini: {
    webpackChain (chain) {
      // chain.resolve.alias.set('./tabBar.json', './tabBarConfig.json')

      // chain.output.library({
      //   type: "module",
      // }) 


      // chain.experiments.set('outputModule', true)

      chain.optimization.minimize(true)

      chain.optimization.set('moduleIds', 'named')
      chain.optimization.set('chunkIds', 'named')
      // chain.optimization.set('mangleExports', false)

      // chain.optimization.splitChunks({
      //   chunks: 'all',
      //   maxInitialRequests: Infinity,
      //   minSize: 0,
      //   cacheGroups: {
      //     /** 这两行不能乱删除，删除就跑不起来了 */
      //     'default': false, 
      //     defaultVendors: false,
      //     /** 这两行不能乱删除，删除就跑不起来了 */
      //     common: {
      //       name: 'common',
      //       minChunks: 2,
      //       priority: 1
      //     },
      //     vendors: {
      //       name: 'vendors',
      //       minChunks: 2,
      //       test: module => /[\\/]node_modules[\\/]/.test(module.resource),
      //       priority: 10
      //     },
      //     taro: {
      //       name: 'taro',
      //       test: module => /@tarojs[\\/][a-z]+/.test(module.context),
      //       priority: 100
      //     },
      //     comDefIndex: {
      //       name: 'allComDefs',
      //       // reuseExistingChunk: true,
      //       // enforce: true,
      //       minSize: 0,
      //       minChunks: 2,
      //       test: /comDefs\.ts/,
      //       priority: 1
      //     },
      //     data: {
      //       test: /tabBar\.json/,
      //       filename: '[name].js',
      //       name(module) {
      //         const filename = module.rawRequest.replace(/^.*[\\/]/, '');
      //         return filename.substring(0, filename.lastIndexOf('.'));
      //       },
      //     }
      //     // // json: {
      //     // //   name: 'mybricks',
      //     // //   type: 'json',
      //     // // },
      //     // comDefs: {
      //     //   name: 'allComDefs',
      //     //   reuseExistingChunk: true,
      //     //   enforce: true,
      //     //   minSize: 0,
      //     //   minChunks: 1,
      //     //   test: /mybricks_taro_/,
      //     //   priority: 1000
      //     // }
      //   }
      // })

      // chain.plugin('analyzer')
      //   .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
    }
  },
  h5: {
    /**
     * WebpackChain 插件配置
     * @docs https://github.com/neutrinojs/webpack-chain
     */
    // webpackChain (chain) {
    //   /**
    //    * 如果 h5 端编译后体积过大，可以使用 webpack-bundle-analyzer 插件对打包体积进行分析。
    //    * @docs https://github.com/webpack-contrib/webpack-bundle-analyzer
    //    */
    //   chain.plugin('analyzer')
    //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])

    //   /**
    //    * 如果 h5 端首屏加载时间过长，可以使用 prerender-spa-plugin 插件预加载首页。
    //    * @docs https://github.com/chrisvfritz/prerender-spa-plugin
    //    */
    //   const path = require('path')
    //   const Prerender = require('prerender-spa-plugin')
    //   const staticDir = path.join(__dirname, '..', 'dist')
    //   chain
    //     .plugin('prerender')
    //     .use(new Prerender({
    //       staticDir,
    //       routes: [ '/pages/index/index' ],
    //       postProcess: (context) => ({ ...context, outputPath: path.join(staticDir, 'index.html') })
    //     }))
    // }
  },
};
