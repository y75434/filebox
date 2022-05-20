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

        <a
          @click="test"
          class="dqbz-btn btn btn-primary col-12"
        >test</a>

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
import Cookies from 'js-cookie'
import Mgr from '../services/authService'
// import cmqRequest from "@/http/cmqRequest";
// import { UserManager, WebStorageStateStore } from 'oidc-client';




export default {
	name: 'Login',
	components: {
    ForgotPassword,
    RequestEmailSent, 
    ResetNewPassword, 
    ResetSuccess
  },
	data: () => ({
    mgr: new Mgr(),
    loginForm:{
      username: "",
      password: "",
      ip: ""
    },
    wrong: false,
    userId: ""
  }),
  methods:{
    saveAccount(t = "", b = "") {
      window.localStorage.setItem("savedAccount", JSON.stringify({t, b}));
    },
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
    test() {
     



      // const authorizationHeader = 'Authorization';
      // this.mgr.getAcessToken().then((userToken) => {
      //   this.axios.defaults.headers.common[authorizationHeader] = `Bearer ${userToken}`;

      //   this.axios.get('https://192.168.110.180:6102/DocManagement/RootFoldersForAdminPage')
      //     .then((response) => {
      //         // this.dataEventRecordsItems = response.data;
      //         console.log(response.data);
              
      //     })
      //     .catch((error) => {
      //         alert(error);
      //     });
      // });

      this.mgr.signIn()

//       this.axios.get(`https://cmqtest.doqubiz.com:5098/connect/authorize?response_type=code&client_id=SPA.Filebox.Client&scope=openid%20profile%20OrgApi%20LogApi%20LinkApi%20DocApi%20offline_access&redirect_uri=https%3A%2F%2Fcmqtest.doqubiz.com%2Fcallback.html&code_challenge=N2cTSUHl78Qtw6ykd3zkftlLaKvb2Ne-FsTXeRiLfDA&code_challenge_method=S256`,
//       { headers: window.headers }).then((data) => {
     
       
        
//         console.log(data);
//       }).catch(error => {
          
//           console.log(error);          
      
//       })

//       this.axios.get(`https://cmqtest.doqubiz.com:5098/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Dcode%26client_id%3DSPA.Filebox.Client%26scope%3Dopenid%2520profile%2520OrgApi%2520LogApi%2520LinkApi%2520DocApi%2520offline_access%26redirect_uri%3Dhttps%253A%252F%252Fcmqtest.doqubiz.com%252Fcallback.html%26code_challenge%3DN2cTSUHl78Qtw6ykd3zkftlLaKvb2Ne-FsTXeRiLfDA%26code_challenge_method%3DS256
// 200`,
//       { headers: window.headers }).then((data) => {
     
       
        
//         console.log(data);
//       }).catch(error => {
          
//           console.log(error);          
      
//       })


        // sessionStorage.setItem('orgToken', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ3MUEwODdBRkU2NDkwQTYwMjM1QUYzMEE2MEZDOTNBIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NDg0NTA2NTMsImV4cCI6MTY0ODQ1NDI1MywiaXNzIjoiaHR0cHM6Ly9jbXF0ZXN0LmRvcXViaXouY29tOjUwOTgiLCJhdWQiOiJPcmdBcGkiLCJjbGllbnRfaWQiOiJvcmdfYXBpX3N3YWdnZXJ1aSIsInN1YiI6ImVmMjQxZGZlLThiMzYtNDVlMi04Y2QzLTAzZWY1OGU0MWNkYSIsImF1dGhfdGltZSI6MTY0ODQ0MTg3NSwiaWRwIjoibG9jYWwiLCJJc0FkbWluIjp0cnVlLCJHcm91cHMiOlsiMmZkMjE4OGEtMGJjZi00ODdiLTlkZWYtZTNiOWQzYWFiZWJlIiwiZjU2NWIzOTUtYjFkYi00ODUyLThkODEtMWEzZThiNTJiMGExIl0sImp0aSI6Ijk5RjYwNkQ2MUNCMDkwNzNENDVBM0E2QTcwREFCREYyIiwic2lkIjoiNjBFNzJCNDZDNEJENDEyMUFDRUJGNEMyMjQ0NjRGMEEiLCJpYXQiOjE2NDg0NTA2NTMsInNjb3BlIjpbIk9yZ0FwaSJdLCJhbXIiOlsicHdkIl19.PAgtwWc1BsNfpxhcq0sYIK_W4cL_mTS0MEKLxdg58Z4ys1qwPqcdfBhTNhGzChmHNelpL82IR_xZc_JKVgJOUwsc0bUS9hYLbY2nAbSNe1PQzEETzMtVobOymT7MLEoCRctYjqlhoco3tB2H4p6ultJzTNQxjw3NDdKOzKVgtN5XU1TZ9zb9Uc7eEtPwg-ALUMYnoNMfCs3iAuNmlcC9HEPXU7ccEBxcFbMEo9dZgbcmrbHeeUUl8DnnaAoat6AOtKQhToKMB-iV2sgJ_LgDgvCiRUoHwzAJk6pVvlUC2qOtdKW2H9EebzFDGZSXyRjbsiCzR56x2wnCqLHW1XYtmg')
        // sessionStorage.setItem('docToken', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ3MUEwODdBRkU2NDkwQTYwMjM1QUYzMEE2MEZDOTNBIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NDg0NTA2OTQsImV4cCI6MTY0ODQ1NDI5NCwiaXNzIjoiaHR0cHM6Ly9jbXF0ZXN0LmRvcXViaXouY29tOjUwOTgiLCJhdWQiOiJEb2NBcGkiLCJjbGllbnRfaWQiOiJkb2NfYXBpX3N3YWdnZXJ1aSIsInN1YiI6ImVmMjQxZGZlLThiMzYtNDVlMi04Y2QzLTAzZWY1OGU0MWNkYSIsImF1dGhfdGltZSI6MTY0ODQ0MTg3NSwiaWRwIjoibG9jYWwiLCJJc0FkbWluIjp0cnVlLCJHcm91cHMiOlsiMmZkMjE4OGEtMGJjZi00ODdiLTlkZWYtZTNiOWQzYWFiZWJlIiwiZjU2NWIzOTUtYjFkYi00ODUyLThkODEtMWEzZThiNTJiMGExIl0sImp0aSI6IjkzODkwQUVFRkNFN0Q4NjMwOURBMUFFOUIwNTdBMTZCIiwic2lkIjoiNjBFNzJCNDZDNEJENDEyMUFDRUJGNEMyMjQ0NjRGMEEiLCJpYXQiOjE2NDg0NTA2OTQsInNjb3BlIjpbIkRvY0FwaSJdLCJhbXIiOlsicHdkIl19.YXnTnqauIcn90y95VZAKrLu4y8CLrwAb9_EvTstx7bUWUcU1ibAorldaodblELKBBFr0VsKROrEyIOi6WhaHg4Ij98jgSINVHaQFDzH_pE6UvuorgBaW41YHxh_V_S0Lps-Y58D_POwGevvNlYsKwf8D2WNJwfUWBYHbZkcNqhpUQPbZczVfxY56p2NBknchXNTt6QMKNv8iQg8d8BdNfalgvhPG-MhdyxN63kL6ne9YLnTvwIdDcaqkA7CZZwJUI28bzUJ8JmUwTgt-ckA62iJVt9dlR3HUDc_72hgFwZdCXlVVzeAfESLA92K6mBHYjYSCU1H9fYxFXgjI5mA83w')
        // sessionStorage.setItem('eventToken', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE2REVDOTBCODA2MzE5MUE5MzZEQzI5NDU4NTNEMTA5IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NDgyNTUxMDMsImV4cCI6MTY0ODI1ODcwMywiaXNzIjoiaHR0cHM6Ly9jbXF0ZXN0LmRvcXViaXouY29tOjUwOTgiLCJhdWQiOiJMb2dBcGkiLCJjbGllbnRfaWQiOiJsb2dfYXBpX3N3YWdnZXJ1aSIsInN1YiI6ImVmMjQxZGZlLThiMzYtNDVlMi04Y2QzLTAzZWY1OGU0MWNkYSIsImF1dGhfdGltZSI6MTY0ODA4NDkwNSwiaWRwIjoibG9jYWwiLCJqdGkiOiJBMkRCREJBODMxNkVFOUE0MkZCRUI1NTJBM0JEMzJFRSIsInNpZCI6Ijc5MTc3Q0Y0Q0I1M0UyQTE0MzM4RTZCOTU5QTY0ODczIiwiaWF0IjoxNjQ4MjU1MTAzLCJzY29wZSI6WyJMb2dBcGkiXSwiYW1yIjpbInB3ZCJdfQ.XALoJ6Yqh7WvyIphJHUQu7oc-adAx62pxoRi2b7O1uoKZFeq8xTWrCLI4Dqv2noBv1DWSMR0w44f-4aL5lU5zHK03nemQxqSthrIZLCQvsiv6NZX5UWHqRJncSRqkfQzROvAmb8rwm2LQHq146RdBg_KH1taIhqn6Y-LqJ_gYuRlnVUY6nynphyfhe62UPYXm_hOQsqPxo50CGP1diRTbfDwuy8p-6RDG7ZthSxL2QneUP-DalpwHbf6iCLkkeAGs85BM5vwCMn_zRn3lzwMbQfOc9sU0aCHzKdlaPky6IvYFOqMnn03jd2cv3JjZgrZLj0ZwBBz7gqvgptDezBXkw')
        // sessionStorage.setItem('linkToken', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE2REVDOTBCODA2MzE5MUE5MzZEQzI5NDU4NTNEMTA5IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NDgwOTk5ODIsImV4cCI6MTY0ODEwMzU4MiwiaXNzIjoiaHR0cHM6Ly9jbXF0ZXN0LmRvcXViaXouY29tOjUwOTgiLCJhdWQiOiJEb2NBcGkiLCJjbGllbnRfaWQiOiJkb2NfYXBpX3N3YWdnZXJ1aSIsInN1YiI6ImVmMjQxZGZlLThiMzYtNDVlMi04Y2QzLTAzZWY1OGU0MWNkYSIsImF1dGhfdGltZSI6MTY0ODA4NDkwNSwiaWRwIjoibG9jYWwiLCJqdGkiOiI3RUQwNjVEOUVDQUIyQkVGN0I3RDI4MTE1RUVDM0IyNyIsInNpZCI6Ijc5MTc3Q0Y0Q0I1M0UyQTE0MzM4RTZCOTU5QTY0ODczIiwiaWF0IjoxNjQ4MDk5OTgyLCJzY29wZSI6WyJEb2NBcGkiXSwiYW1yIjpbInB3ZCJdfQ.JCygEmTrJLb1uQ41p-z3eKCJB0W7d8mMB7Z6HtZ0z9F8R1c8ezUaxxxDXtD1982vDLE_jZaLWqqj7Nkl24ENlvuVncKvP2sjY2NdwSZAVa72GrHG93xBBMKtV2M-rQpF46zx3mRGhxbZxVWOsGxiJ8ZvPwtBjJckb2y52FVRsizoMLyelGw5g3NZeI2tNN2GgW09FWfRFx4_eyOQZdvDWgaCQN19Atwz5s9MsnQKANOTtmW20823JPSeBaKF6-7bsAVW2yZPHu2w3aFbuIVKD9nBi3yZ-7CgwKJzG6ZGR3GoOYdDDcWYY3ddnegyQ_SPgsxEXyCbrEaCh0FU90LNgw')

      // const data = JSON.stringify({username:this.loginForm.username,password:this.loginForm.password})

      // cmqRequest.post(`https://cmqtest.doqubiz.com:5099/api/AD/LoginADUser`, {username:this.loginForm.username,password:this.loginForm.password})
      //   .then(data => {
        // if(data.data.success == true){

          

        // this.$store.dispatch('setAuth', data.data.success);
        // this.$store.dispatch('setGroup', data.data.groups);
        // this.$store.dispatch('setUser', this.loginForm.username);

        // if(data.data.isAdmin == true){
        //   this.$store.dispatch('setAdmin', true);
        // }else{
        //   this.$store.dispatch('setAdmin', false);

        // }

        // this.getUserTable(this.loginForm.username)


        // Cookies.set('loginAccount', JSON.stringify(this.loginForm))
        // Cookies.set('loginFromLocal', true) //local登录
        // this.$store.dispatch('setToken', sessionStorage.getItem('orgToken'));
             
          // this.saveAccount(
          //   this.loginForm.username,
          //   this.loginForm.password
          // );

          // this.loginForm = {
          //   username: "",
          //   password: ""
          // }
          
          // this.$router.push('/');
        // }else{
        //   this.wrong = true
        // }
        
      //   console.log(data);
          
      // });

    },



    login(){
      const data = JSON.stringify({username:this.loginForm.username,password:this.loginForm.password})

      this.axios.post(`${process.env.VUE_APP_USER_APIPATH}/api/AD/LoginADUser`,
      data,{ headers: window.headers }).then((data) => {
     
        if(data.data.success == true){
          

        this.$store.dispatch('setAuth', data.data.success);
        this.$store.dispatch('setGroup', data.data.groups);

        this.$store.dispatch('setUser', this.loginForm.username);

        if(data.data.isAdmin == true){
          this.$store.dispatch('setAdmin', true);
        }else{
          this.$store.dispatch('setAdmin', false);

        }

        this.getUserTable(this.loginForm.username)


        Cookies.set('loginAccount', JSON.stringify(this.loginForm))
        Cookies.set('loginFromLocal', true) //local登录
        this.$store.dispatch('setToken', sessionStorage.getItem('orgToken'));
             
          this.saveAccount(
            this.loginForm.username,
            this.loginForm.password
          );

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


