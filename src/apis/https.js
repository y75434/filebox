// import axios from 'axios'
// import router from '../router/index'

// import {tip, toLogin} from './utils'


// const errorHandle = (status, msg) => {
//   switch(status){
//     case 400:
//       tip(msg);
//       break;
//       default:
//         console.log(msg);
        
//   }
// }

// var instance = axios.create({
//   baseURL:'https://192.168.110.180:6100'

// })

// export default axios;


// instance.interceptors.request.use((request) => {
//   //檢查本端目前有無token
//   const token = this.$store.state.auth.token;
//   token && (request.header.Authorization = 'Bearer' + token)
//   return request;
// }, (err) => {
//   return Promise.reject(err)
// })

// instance.interceptors.response.use((response) => {
//   return response;
// }, (err) => {
//   const { res } = err;
//   if(res){
//     errorHandle(res.status, res.data.error)
//     return Promise.reject(err)
//   }else{
//     if(!window.navigator.onLine){
//       console.log('網路斷線 請重試');    
//     } else {
//       return Promise.reject(err);
//     }
//   }
// })
