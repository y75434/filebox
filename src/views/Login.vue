<template>
  <section class="container-fluid  m-0">
    <div class="col-lg-12 d-none d-md-block  login_pic bg-cover vh-100" />
    <div class="row  justify-content-center align-items-center vh-100 pb-4">
      <form class="col-lg-4 col-md-6 col-10 text-muted login-form  p-5">
        <h1
          class=""
        >
          {{ $t("GENERAL.WELCOME_WORD") }}
        </h1>
        <div class="input-group mb-3">
          <div class="input-group-prepend" />
        </div>
          
        <div class="form-group border-info">
          <label
            for="email"
            class="my-2"
          >{{ $t("MODAL.USERNAME") }}</label>
            
          <input
            class="form-control user-icon "
            type="text"
            id="email"
            placeholder=" jeff@doqubiz.com"
          >
        </div>
        <div class="form-group">
          <label
            for="passwords"
            class="my-2"
          >{{ $t("GENERAL.PASSWORD") }}</label>
            
          <input
            class="form-control password-icon position-relative"
            type="text"
            id="passwords"
            placeholder="********"
          >
        </div>

        <div class="d-flex justify-content-between my-2">
          <span class="text-danger">
            {{ $t("GENERAL.PASSWORDERRORMSG") }}
          </span>
          <a
            @click="ForgotPassword"
            class=" float-end light-blue"
          >{{ $t("GENERAL.FORGOTPASSWORD") }}</a>
        </div>
          
        <!-- <router-link :to="{ path: '/' }"> -->
        <a
          class="dqbz-btn btn btn-primary col-12"
        >{{ $t("GENERAL.LOGIN") }}</a>
        <!-- </router-link> -->

        <p class="my-4">
          <span>{{ $t("GENERAL.OR") }}</span>
        </p>

        <a
          href="#"
          class="login-btn dqbz-btn btn col-12"
        >{{ $t("GENERAL.USESECUREDONGLELOGIN") }}</a>
        <a class="float-end my-3 light-blue">{{ $t("GENERAL.LOSTUSBTOKEN") }}</a>
      </form>
    </div>
    <forgot-password ref="ForgotPassword" />
    <request-email-sent ref="RequestEmailSent" />
    <reset-new-password ref="ResetNewPassword" />
    <reset-success ref="ResetSuccess" />
  </section>
</template>

<script>
import ForgotPassword from '../components/Modals/login/ForgotPassword.vue';
import RequestEmailSent from '../components/Modals/login/RequestEmailSent.vue';
import ResetNewPassword from '../components/Modals/login/ResetNewPassword.vue';
import ResetSuccess from '../components/Modals/login/ResetSuccess.vue';



export default {
	name: 'Login',
	components: {
    ForgotPassword,
    RequestEmailSent, 
    ResetNewPassword, 
    ResetSuccess
  },
	data: () => ({
    loginForm:{
      account: "",
      password: "",
      ip: ""
    }
  }),
  methods:{
    login(){
      // this.$api.auth.login({
      //   account:this.loginForm.account,
      //   password:this.loginForm.password
      // }).then((res) => {
      //   let res = res.data;
      //   let token = "Hello JWT";//res.result.token;
      //   this.$store.dispatch('auth/setAuth', {
      //     "token": token,
      //     "isLogin": true
      //   });
      //   this.loginForm = {
      //     "account": "",
      //     "password": ""
      //   }
      //   this.$router.push('/home');
      // })
       
      this.axios.post(`${process.env.APIPATH}/api/Users/IsDBUserAuthenticated`,
      {account:this.loginForm.account,password:this.loginForm.password})
        .then((data) => {
         

        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      
    },
    connectad(){
     
     const headers = { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": '*' 
        };
        
      const data = JSON.stringify(
        {
          account:this.account,
          password:this.password,
          ip:this.ip
        })
       
      this.axios.post(`${process.env.APIPATH}api/AD/connectDynamicAD`,
      data,{ headers: headers })
        .then((data) => {
         

        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      
    },
    ForgotPassword(){ this.$bvModal.show('ForgotPassword');},
    RequestEmailSent(){ this.$bvModal.show('RequestEmailSent');},
    ResetNewPassword(){ this.$bvModal.show('ResetNewPassword');},
    ResetSuccess(){ this.$bvModal.show('ResetSuccess');},


  },
};
</script>


