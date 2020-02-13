import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueCompositionApi from '@vue/composition-api';
import VueElUi from 'element-ui';

import './assets/scss/main.scss'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueCompositionApi);
Vue.use(VueElUi);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
