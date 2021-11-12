import router from '../router/index'

// 錯誤提示
export const tip = msg => {
  console.log(msg);
  
}

// 登入後跳轉
export const toLogin = () => {
  router.replace({
    name: 'Login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

