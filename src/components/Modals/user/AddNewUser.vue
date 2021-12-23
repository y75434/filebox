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
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="addUser"
    > -->
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
            v-model="personData.firstName"
          >
        </div>

                
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
          >
        </div>
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
              >
            </div>
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
              >
            </div>
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
    <!-- </form> -->
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
      personData: {}
    };
  },
  methods: {
    addUser () {  

      const headers = { 
      'Content-Type': 'application/json', 
      'Accept': 'application/json',
      "Access-Control-Allow-Origin": '*' 
      };

      const data = JSON.stringify(this.personData)

      console.log(data);


      this.axios.post(`${process.env.VUE_APP_USER_APIPATH}/api/Users/CreateUser`,
      data,{ headers: headers })
        .then((data) => {

        console.log(data);
      }).catch(error => {
          console.log(error);          
        })

        this.personData = {}
      },
      // groupAddNewUser () {  
      // this.axios.post(`${process.env.APIPATH}/api/Groups/AddUsersInGroup`)
      //   .then((data) => {

         
      //   console.log(data);
      // }).catch(error => {
      //     console.log(error);          
      //   })
      // },
      // addNewUser() {  
      // this.axios.post(`${process.env.APIPATH}/api/Users/CreateUser`)
      //   .then((data) => {
       
      //   console.log(data);
      // }).catch(error => {
      //     console.log(error);          
      //   })
      // },
     
    handleSubmit() {
      // this.$nextTick(() => {
      this.showModal = false;
      // });
    },
  },
};
</script>

