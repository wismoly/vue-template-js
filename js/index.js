import Vue from 'vue';
import App from '../components/App.vue';
import { mc, MicoJSBridge,<% if (sentry) { %> initSentry,<% } %> request, getPlatform, proxyUrl } from 'mico-base-common';
<% if (router) { %>import router from '../router';<% } %>
mc.install(MicoJSBridge);
mc.install(request);
mc.install(proxyUrl);
mc.install(getPlatform);
<% if (sentry) { %>mc.install(initSentry);
mc.initSentry(Vue);<% } %>
Vue.prototype.$mc = mc;

new Vue({
  <% if (router) { %>router,<% } %>
  render: h => h(App)
}).$mount('#app')

