import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// index.js
import microApp from '@micro-zoe/micro-app'

const app = createApp(App)
const iframeSrc = encodeURIComponent(
  window.location.origin + window.location.pathname + '/empty.html'
);
console.log(iframeSrc)
microApp.start({
  iframeSrc: iframeSrc,
  excludeAssetFilter(assetUrl) {
    if (
      assetUrl === 'createVerticesFromHeightmap' ||
      assetUrl === 'transferTypedArrayTest' ||
      assetUrl === 'createVerticesFromQuantizedTerrainMesh'
    ) {
      return true // 返回true则micro-app不会劫持处理当前文件
    }
    return false
  },
  plugins: {
    modules: {
      'my-app': [
        {
          loader(code, url) {
            if (url.indexOf('cesium.js') > 0 && code.indexOf('var Cesium=') > -1) {
              code = code.replace('var Cesium=', 'window.Cesium=')
            }
            return code
          },
        },
      ],
    },
  },
})

app.use(createPinia())
app.use(router)

app.mount('#app')
