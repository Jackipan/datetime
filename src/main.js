import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import Cookies from 'js-cookie'

import 'normalize.css/normalize.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en'
// import chinese from 'element-ui/lib/locale/lang/zh-CN'

import i18n from './lang'

// import zh from './lang/zh-cn.json';
// import en from './lang/en.json';

moment.locale('zh-cn')

Vue.use(Element, {
  size: Cookies.get('size') || 'medium',
  i18n: (key, value) => i18n.t(key, value),
})
// Vue.use(VueI18n)

// const i18n = new VueI18n({
//   locale: 'zh',
//   messages: {
//     'zh': zh,
//     'en': en
//   }
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')


console.log(process.env.VUE_APP_URL);
