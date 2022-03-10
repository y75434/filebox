<template>
  <!-- :form="form" -->
  <b-modal
    id="EditUserProperties"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.EDITUSERPROPERTIES')"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    footer-bg-variant="bgmodal"
    body-bg-variant="bgmodal"
    @ok="editUser"
  >
    <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    >
      <validation-observer
        class="col-md-8"
      >
        <div class="modal-popout-bg p-0">
          <form class=" p-3">
            <div class="w-100 d-flex align-items-center justify-content-between mb-2">
              <label
                for="Username"
                class=""
              >{{ $t("MODAL.USERNAME") }}</label>
              <input
                type="Username"
                class="form-control inline-block width-320"
                id="Username"
                disabled
                v-model="personData.firstName"
              >
            </div>
            <p class="text-dark">
              {{ tabData }}
            </p>
                
            <div class="w-100 d-flex align-items-center justify-content-between mb-2 ">
              <label
                for="Fullname"
                class="form-label"
              >{{ $t("MODAL.FULLNAME") }}</label>
              <input
                v-model="personData.userName"
                type="Fullname"
                class="form-control width-320"
                id="Fullname"
              >
            </div>
            <validation-provider
              v-slot="{ errors,classes}"
              rules="required|email"
            >
              <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                <label
                  for="Email"
                  class="col-form-label"
                >{{ $t("MODAL.EMAIL") }} </label>
                <span class="text-danger">{{ $t("GENERAL.REQUIRE") }}</span>
                <input
                  type="Email"
                  id="Email"
                  class="form-control width-320"
                  v-model="personData.email"
                  :class="classes"
                >
              </div>
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
            <validation-provider
              v-slot="{ errors, classes }"
              rules="required|min:8|numeric"
            >
              <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                <label
                  for="tel"
                  class="col-form-label"
                >telephone  <span class="text-danger">{{ $t("GENERAL.REQUIRE") }}</span></label>
                  
                <input
                  type="number"
                  id="telephone"
                  class="form-control width-320"
                  v-model="personData.telephone"
                  :class="classes"
                >
              </div>
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>

            <div class="w-100 d-flex align-items-center justify-content-between mb-2">
              <label
                for="Description"
                class="col-form-label"
              >{{ $t("MODAL.DESCRIPTION") }}</label>
                  
              <input
                type="Description"
                id="Description"
                class="form-control width-320"
                v-model="personData.description"
              >
            </div>
          </form>
          <!-- </div> -->
            
          <hr class="">


          <div class="d-flex flex-column justify-content-between p-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="Changeuserpassword"
              >
              <label
                class="form-check-label"
                for="Changeuserpassword"
              >
                {{ $t("GENERAL.CHANGEPASSWORD") }}
              </label>
              <validation-provider
                v-slot="{ errors,classes}"
                :rules="{ required: true, regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/, min:8,}"
                vid="password"
              >
                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="Password"
                    class="form-label"
                  >{{ $t("GENERAL.PASSWORD") }}</label>
                  <input
                    type="Password"
                    class="form-control width-220"
                    id="Password"
                    placeholder="******"
                    v-model="personData.password"
                    :class="classes"
                  >
                </div>

                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
              <validation-provider
                v-slot="{ errors, classes}"
                rules="confirmed:password"
              >
                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="ConfirmPassword"
                    class="form-label"
                  >{{ $t("GENERAL.CONFIRMPASSWORD") }}</label>
                  <input
                    type="Password"
                    class="form-control width-220"
                    id="ConfirmPassword"
                    placeholder="******"
                    v-model="personData.confirmPassword"
                    :class="classes"
                  >
                </div>
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
          
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="Usermustchangepasswordatnexttime"
                  v-model="personData.mustChangePasswordOnNextLogin"
                >
                <label
                  class="form-check-label"
                  for="Usermustchangepasswordatnexttime"
                >
                  {{ $t("MODAL.USERMUSTCHANGEPASSWORDATNEXTTIME") }}
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="Usercannotchangepassword"
                  v-model="personData.cannotChangePassword"
                >
                <label
                  class="form-check-label"
                  for="Usercannotchangepassword"
                >
                  {{ $t("MODAL.USERCANNOTCHANGEPASSWORD") }}
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="Passwordneverexpires"
                  v-model="personData.passwordNeverExpires"
                >
                <label
                  class="form-check-label"
                  for="Passwordneverexpires"
                >
                  {{ $t("MODAL.PASSWORDNEVEREXPIRES") }}
                </label>
              </div>

              <hr class="">



              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="ACCOUNTISDISABLED"
                  v-model="personData.isEnabled"
                >
                <label
                  class="form-check-label"
                  for="ACCOUNTISDISABLED"
                >
                  {{ $t("MODAL.ACCOUNTISDISABLED") }}

                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="islockedAccount"
                  v-model="personData.islockedAccount"
                >
                <label
                  class="form-check-label"
                  for="islockedAccount"
                >
                  {{ $t("MODAL.ACCOUNTISLOCKEDOUT") }}
                </label>
              </div>
            </div>
          </div>
        </div>
      </validation-observer>
    </form>
    <template
      #modal-cancel
      variant="danger"
    >
      {{ $t("GENERAL.CANCEL") }}
    </template>

    <template #modal-ok>
      {{ $t("GENERAL.OK") }}
    </template>
  </b-modal>
</template>

<script>
import { extend } from 'vee-validate';
import { regex } from 'vee-validate/dist/rules';
import i18n from '@/common/plugins/vue-i18n';

extend('regex', {
    ...regex,
    message: i18n.t('MODAL.PWPOLICY')
})


export default {
  name: "EditUserProperties",
  props: { 
    title: { type: String, default: "Edit User Properties" } ,
    tabData: { type: Object , default() { return {} }}

  },

  data() {
    return {
      showModal: false,
      personData: {
        editor: this.$store.getters.userId,
        editedBy:this.$store.getters.currentUser
      }
    };
  },
  watch:{ 
    tabData(){ 
      this.personData = this.tabData 
    } 
  },
  methods: {
    editUser () {  



      const data = JSON.stringify({
        
        "id": this.personData.userId,
        "userName": this.personData.userName,
        "firstName": this.personData.firstName,
        "middleName": this.personData.middleName,
        "lastName": this.personData.lastName,
        "email": this.personData.email,
        "description": this.personData.description,
        "telephone": this.personData.telephone,
        "password": this.personData.password,
        "confirmPassword": this.personData.confirmPassword,
        "mustChangePasswordOnNextLogin":this.personData.mustChangePasswordOnNextLogin,
        "cannotChangePassword": this.personData.cannotChangePassword,
        "passwordNeverExpires": this.personData.passwordNeverExpires,
        "isEnabled": this.personData.isEnabled,
        "unlockAccount": this.personData.unlockAccount

      })

      console.log(data);


      this.axios.put(`${process.env.VUE_APP_USER_APIPATH}/api/Users/EditUser`,
      data,{ headers: window.headers })
        .then((data) => {

        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
        this.personData = {}
    },

  },
};
</script>

