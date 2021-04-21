import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
 
    //重定向到首页
  { path: '/', redirect: '/home' },
  
  {
    path: '/home',//首页
    name: 'Home',
    component: () => import( '../views/Home.vue'),
    children:[
     {path: '/home/searchpopup',//点击搜索框出现的弹出框路由
      name: 'SearchPopup',
      component: () => import( '../views/SearchPopup.vue') 
     }  
    ] 
  },

]

const router = new VueRouter({
  routes
})

export default router
