// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/checkbox.css'
import './assets/style/button.css'
import { Button, Select, Checkbox } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// 设置语言
locale.use(lang)

Vue.config.productionTip = false

Vue.prototype.$ELEMENT = { size: 'small' };
Vue.use(Button)
Vue.use(Select)
Vue.use(Checkbox)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
