import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: (res) => require(['../components/home'], res)
    },
    {
      name: 'rule',
      path: '/rule',
      component: (res) => require(['../components/rule'], res)
    }
  ]
});
