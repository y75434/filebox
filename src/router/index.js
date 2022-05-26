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
    const admin = store.state.isAdmin;

    //跳轉至上述3個頁面
    if (nextRoute.indexOf(to.name) >= 0) {
        if (!auth) {
            router.push({name: 'login'})
        }
      
      console.log(auth);        

        
    }
    //admin
    if (to.name === 'admin') {

      if (!admin) {
            router.push({name: 'home'})
          }
    }
    //已登錄的情況再去登錄頁，跳轉至首頁
    if (to.name === 'login') {
        if (store.state.isLogin) {
            router.push({name: 'home'});
        }
    }
    next();
})

export default router;


