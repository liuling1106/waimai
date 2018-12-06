import Vue from "vue";
import VueRouter from 'vue-router';
import App from "./App.vue";
import goods from "./components/goods.vue"
import comments from "./components/comments.vue"
import business from "./components/business.vue"

Vue.config.productionTip = false;

Vue.use(VueRouter);

var router= new VueRouter({
routes : [
    {path:'/goods',component:goods},
    {path:'/comments',component:comments},
    {path:'/business',component:business},
    ],
    linkActiveClass:'active'
});

new Vue({
  el:"#app",
  router,
  render: h =>h(App)
}).$mount('#app');

router.go('/comments');