import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 {
		path: '/login',
    name: 'Login',
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
    // 須登入才能訪問
    // meta:{
    //   needLogin:true
    // }
  },
  {
		path: '/reset',
    name: 'reset',
    component: () => import('../views/Reset.vue')

  },
  {
    path: 'Search/:treeSelected',
    name: 'Search',
    props: true,
    component: () => import('@/components/Search.vue')

  }


]

// 驗證是否有登入
// router.beforeEach(async (to, from, next) => {
//   let isLogin = await this.$store.dispatch('isLogin')
//   // needLogin 定義須登入才能訪問
//   let needLogin = to.matched.some(match=>match.meta.needLogin)
  
//   if(needLogin){
//     // 查看 vuex 狀態是否為登入
//     if(isLogin){
//       next()
//     }else{
//       next("/login")
//     }
//   }
// })



const router = new VueRouter({
  routes
})

export default router
