import Vue from 'vue';
import App from '../components/App.vue';
import router from '../router';

import { mc, MicoJSBridge, request, getPlatform, proxyUrl } from 'mico-base-common';
mc.install(MicoJSBridge);
mc.install(request);
mc.install(proxyUrl);
mc.install(getPlatform);
Vue.prototype.$mc = mc;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

