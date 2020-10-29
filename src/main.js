import Vue from 'vue'
import App from './App.vue'
import router from './router/routers'
import store from './store'
import moment from 'moment'
import Cookies from 'js-cookie'
import echarts from 'echarts'
import Vue2OrgTree from 'vue2-org-tree'

import 'normalize.css/normalize.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en'
// import chinese from 'element-ui/lib/locale/lang/zh-CN'

import animate from 'animate.css'

import './assets/icons' // icon
import './assets/style/org-tree.less'
import './assets/style/index.scss';
import i18n from './lang'

// 侧睡 tree-shaking
import { cube } from './math.js'

import { getPerformanceTiming } from './utils/performance';

var component  = ()=> {
  var element = document.createElement('pre')

  element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + cube(5)].join(
    '\n\n'
  )

  console.log(element);
  return element
}
console.log(document.getElementById('app'));
document.getElementById('app').appendChild(component())


// import zh from './lang/zh-cn.json';
// import en from './lang/en.json';

moment.locale('zh-cn')
Vue.prototype.$echarts = echarts

Vue.use(Element, {
  size: Cookies.get('size') || 'medium',
  i18n: (key, value) => i18n.t(key, value),
})
Vue.use(animate)
Vue.use(Vue2OrgTree)

Vue.use(getPerformanceTiming)
// Vue.use(VueI18n)

// const i18n = new VueI18n({
//   locale: 'zh',
//   messages: {
//     'zh': zh,
//     'en': en
//   }
// })

export var bus = new Vue()

Vue.config.productionTip = false


new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
