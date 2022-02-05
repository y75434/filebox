import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store/index.js';

Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

const router = new VueRouter({
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
  
    },
    {
      path: '/modal',
      name: 'modal',
      component: () => import('../views/Modal.vue')
  
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin.vue'),
    },
    {
      path: '/reset',
      name: 'reset',
      component: () => import('../views/Reset.vue')
  
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/Test.vue')
  
    },
    {
      path: '/tree',
      name: 'tree',
      component: () => import('@/components/Modals/home/TreeItem.vue')
  
    },
    // {
    //   path: '*',
    //   redirect: '/',
    //   hidden: true
    // }
  ]
})





// 驗證是否有登入
router.beforeEach(function (to, from, next) {

  const nextRoute = [ 'admin', 'home', 'test'];
    const auth = store.state.isLogin;
    //跳转至上述3个页面
    if (nextRoute.indexOf(to.name) >= 0) {
        //未登录
        if (!auth) {
            router.push({name: 'login'})
        }
    }
    //已登录的情况再去登录页，跳转至首页
    if (to.name === 'login') {
        if (store.state.isLogin) {
            router.push({name: 'home'});
        }
    }
    next();
})

export default router;


