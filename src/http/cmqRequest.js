import axios from 'axios'
import {Promise} from 'es6-promise'
// import router from '@/router/index'
import store from '@/store/index';


let getToken = function (url) {
  // console.log(url);
  // console.log(sessionStorage);

  let scope = url.split(':')[2].substr(0, 4)
    // console.log(scope);
  let token = sessionStorage.getItem('orgToken')
  switch (scope) {
    case '5099': //org
      token = sessionStorage.getItem('orgToken')
      break;
    case '6102': //doc
      token = sessionStorage.getItem('docToken')
      break;
    case '6100': //event
      token = sessionStorage.getItem('eventToken')
      break;
    case '6101': //link
      token = sessionStorage.getItem('linkToken')
      break;
  }
  return token
}

export default {
  /**
   * fetch 请求方法
   * @param url
   * @param params
   * @return {Promise}
   */
  fetch(url, params = {}, headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + getToken(url)
  }) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params,
        headers: headers
      })
        .then(response => {
          resolve(response)
        }, err => {
          console.log('then err:', err.response)
          reject(err.response)
        })
        .catch(err => {
          console.log('catch err')
          reject(err)
        })
    })
  },

  /**
   * post 请求方法
   * @param url
   * @param data
   * @return {Promise}
   */
  post(url, data = {}, config = {
    "headers": {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getToken(url)
    }
  }) {
    return new Promise((resolve, reject) => {
      axios.post(url, data, config)
        .then(response => {
          resolve(response)
        }, err => {
          reject(err.response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  /**
   * post 请求方法 上传文件专用
   * @param url
   * @param data
   * @return {Promise}
   */
  upload(url, data = {}, config = {
    "headers": {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getToken(url)
    }
  }) {
    // config.onUploadProgress = uploadConfig.onUploadProgress
    return new Promise((resolve, reject) => {
      axios.post(url, data, config)
        .then(response => {
            console.log('success')

          resolve(response)
        }, err => {
            console.log('right')

          reject(err.response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  /**
   * post 请求方法 下载文件专用
   * @param url
   * @param data
   * @return {Promise}
   */
  download(url, data = {},config = {
    "headers": {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getToken(url),
      'Accept': 'application/zip',
    },
    responseType: 'arraybuffer'
  }) {
    // config.onDownloadProgress = downloadConfig.onDownloadProgress
    return new Promise((resolve, reject) => {
      axios.post(url, data, config)
        .then(response => {
          resolve(response)
        }, err => {
          reject(err.response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  /**
   * put 请求方法
   * @param url
   * @param data
   * @return {Promise}
   */
  put(url, data = {}, config = {
    "headers": {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getToken(url)
    }
  }) {
    return new Promise((resolve, reject) => {
      axios.put(url, data, config)
        .then(response => {
          console.log(response)
          resolve(response)
        }, err => {
          reject(err.response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  /**
   * patch 请求方法
   * @param url
   * @param data
   * @return {Promise}
   */
  patch(url, data = {}, config = {
    "headers": {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getToken(url)
    }
  }) {
    return new Promise((resolve, reject) => {
      axios.patch(url, data, config)
        .then(response => {
          console.log(response)
          resolve(response)
        }, err => {
          reject(err.response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  /**
   * get 请求方法
   * @param url
   * @param data
   * @return {Promise}
   */
  get(url, data = {}, headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + getToken(url)
  }) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        data: data,
        headers: headers
      })
        .then(response => {
          console.log(response)
          resolve(response)
        }, err => {
          reject(err.response)
          if (err.response.status === 401) {
              console.log('210000000000');        

              sessionStorage.removeItem('orgToken')
              sessionStorage.removeItem('docToken')
              sessionStorage.removeItem('eventToken')
              sessionStorage.removeItem('linkToken')
              store.state.isLogin = false

          }
        })
        .catch(err => {
          reject(err)

        })
    })
  },
  /**
   * delete 请求方法
   * @param url
   * @param data
   * @return {Promise}
   */
  delete(url, data = {}, headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + getToken(url)
  }) {
    return new Promise((resolve, reject) => {
      axios.delete(url, {
        data: data,
        headers: headers
      })
        .then(response => {
          console.log(response)
          resolve(response)
        }, err => {
          reject(err.response)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

