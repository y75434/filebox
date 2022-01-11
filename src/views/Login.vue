<template>
  <section class="container-fluid  m-0">
    <div class="col-lg-12 d-none d-md-block  login_pic bg-cover vh-100" />
    <div class="row  justify-content-center align-items-center vh-100 pb-4">
      <form 
        class="col-lg-4 col-md-6 col-10 text-muted login-form  p-5"
      >
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
            v-model="loginForm.username"
          >
        </div>
        <div class="form-group">
          <label
            for="passwords"
            class="my-2"
          >{{ $t("GENERAL.PASSWORD") }}</label>
            
          <input
            class="form-control password-icon position-relative"
            type="password"
            id="passwords"
            placeholder="********"
            v-model="loginForm.password"
          >
        </div>

        <div class="d-flex justify-content-between my-2">
          <span
            v-if="wrong"
            class="text-danger"
          >
            {{ $t("GENERAL.PASSWORDERRORMSG") }}
          </span>
          <a
            @click="ForgotPassword"
            class=" float-end light-blue"
          >{{ $t("GENERAL.FORGOTPASSWORD") }}</a>
        </div>
          
        <a
          @click="login"
          class="dqbz-btn btn btn-primary col-12"
        >{{ $t("GENERAL.LOGIN") }}</a>

        <p class="my-4">
          <span>{{ $t("GENERAL.OR") }}</span>
        </p>

        <a
          href="#"
          class="login-btn dqbz-btn btn col-12"
        >{{ $t("GENERAL.USESECUREDONGLELOGIN") }}</a>
        <a class="float-end my-3 light-blue">{{ $t("GENERAL.LOSTUSBTOKEN") }}</a>
        <a @click="ResetNewPassword" class="my-3 light-blue">重設密碼</a>
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
      username: "",
      password: "",
      ip: ""
    },
    wrong: false,
    userId: ""
  }),
  methods:{
    ResetNewPassword(){ this.$bvModal.show('ResetNewPassword'); },
    getUserTable (name) {

    this.axios.get(`${process.env.VUE_APP_USER_APIPATH}/api/Users/GetUsers`)
    .then((data) => {
      this.useritems = data.data
      const ans = this.useritems.filter(item=>item.userName == name)[0];
      this.userId = ans.userId;
      this.$store.dispatch('setUserId', this.userId);

      }).catch(error => {
      console.log(error);
      })

    },
    login(){
      const data = JSON.stringify({username:this.loginForm.username,password:this.loginForm.password})

      this.axios.post(`${process.env.VUE_APP_USER_APIPATH}/api/AD/LoginADUser`,
      data,{ headers: window.headers }).then((data) => {
     
        if(data.data.success == true){
          

        this.$store.dispatch('setAuth', data.data.success);
        this.$store.dispatch('setUser', this.loginForm.username);
        this.getUserTable(this.loginForm.username)

        // this.$store.dispatch('setToken', res.token);


          this.loginForm = {
            username: "",
            password: ""
          }
          
          this.$router.push('/');
        }else{
          this.wrong = true
        }
        
        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      
    },
    connectad(){
      const data = JSON.stringify({
        account:this.account,
        password:this.password,
        ip:this.ip
      })
       
      this.axios.post(`${process.env.APIPATH}api/AD/connectDynamicAD`,
      data,{ headers: window.headers })
        .then((data) => {
         
        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      
    },
    ForgotPassword(){ this.$bvModal.show('ForgotPassword');},
    RequestEmailSent(){ this.$bvModal.show('RequestEmailSent');},
    ResetSuccess(){ this.$bvModal.show('ResetSuccess');},


  },
};
</script>


