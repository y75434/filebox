// let getToken = function (url) {
//   console.log(url);
//   console.log(sessionStorage);

//   let scope = url.split(':')[2].substr(0, 4)
//     console.log(scope);
//   let token = sessionStorage.getItem('orgToken')
//   switch (scope) {
//     case '5099': //org
//       token = sessionStorage.getItem('orgToken')
//       break;
//     case '6102': //doc
//       token = sessionStorage.getItem('docToken')
//       break;
//     case '6100': //event
//       token = sessionStorage.getItem('eventToken')
//       break;
//     case '6101': //link
//       token = sessionStorage.getItem('linkToken')
//       break;
//   }
//   return token
// }

const headers = { 
    'Content-Type': 'application/json', 
    'Accept': 'application/json',
    "Access-Control-Allow-Origin": '*',
    // 'Authorization': 'Bearer ' + getToken()
};

export default headers
