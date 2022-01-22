<template>
  <b-modal
    id="AddNewUser"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.ADDNEWUSER')"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    footer-bg-variant="white"
    body-bg-variant="bgmodal"
    @ok="addUser"
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
            >{{ $t("MODAL.USERNAME") }}required</label>
            <input
              type="Username"
              class="form-control inline-block width-320"
              id="Username"
              v-model="personData.userName"
            >
          </div>
          <!-- <validation-provider
            v-slot="{ errors, classes }"
            rules="required"
          >
            <div class="w-100 d-flex align-items-center justify-content-between mb-2 ">
              <label
                for="Fullname"
                class="form-label"
              >{{ $t("MODAL.FULLNAME") }}</label>
              <input
                v-model="personData.userName"
                :class="classes"

                type="Fullname"
                class="form-control width-320"
                id="Fullname"
              >
            </div>
            <span class="text-danger">{{ errors[0] }}</span>
          </validation-provider> -->
          <validation-provider
            v-slot="{ errors,classes}"
            rules="email"
          >
            <div class="w-100 d-flex align-items-center justify-content-between mb-2">
              <label
                for="Email"
                class="col-form-label"
              >{{ $t("MODAL.EMAIL") }}</label>
                  
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
            rules="min:8|numeric"
          >
            <div class="w-100 d-flex align-items-center justify-content-between mb-2">
              <label
                for="tel"
                class="col-form-label"
              >telephone </label>
                  
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
            >{{ $t("MODAL.DESCRIPTION") }}required</label>
                  
            <input
              type="Description"
              id="Description"
              class="form-control width-320"
              v-model="personData.description"
            >
          </div>
          <!-- </form> -->
          <!-- </div> -->
            
          <hr class="">


          <div class="d-flex flex-column justify-content-between p-3">
            <div class="form-check mb-2">
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
                {{ $t("MODAL.CHANGEUSERPASSWORD") }}

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
                  >{{ $t("GENERAL.PASSWORD") }}required</label>
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
                rules="confirmed:password|required"
              >
                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="ConfirmPassword"
                    class="form-label"
                  >{{ $t("GENERAL.CONFIRMPASSWORD") }}required</label>
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
            </div>
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
        </form>
      </div>
    </validation-observer>

    <template
      #modal-cancel
      variant="outline-primary"

      class="cancel-btn"
    >
      {{ $t("GENERAL.CANCEL") }}
    </template>

    <template
      #modal-ok
    >
      {{ $t("GENERAL.OK") }}
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "AddNewUser",
  props: { title: { type: String, default: "Add New User" } },

  data() {
    return {
      showModal: false,
      personData: {
        creator: this.$store.getters.userId,
        createdBy:this.$store.getters.currentUser
      }
    };
  },
  methods: {
    addUser () {  

      

      const data = JSON.stringify(this.personData)

      console.log(data);


      this.axios.post(`${process.env.VUE_APP_USER_APIPATH}/api/Users/CreateUser`,
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

