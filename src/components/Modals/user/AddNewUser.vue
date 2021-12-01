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
  >
    <form
      class="container"
      ref="form"
      @submit.stop.prevent="addUser"
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
            >
          </div>

                
          <div class="w-100 d-flex align-items-center justify-content-between mb-2 ">
            <label
              for="Fullname"
              class="form-label"
            >{{ $t("MODAL.FULLNAME") }}</label>
            <input
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
            >
          </div>
        </form>
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
              id="Passwordneverexpires"
            >
            <label
              class="form-check-label"
              for="Passwordneverexpires"
            >
              {{ $t("MODAL.ACCOUNTISDISABLED") }}

            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="Passwordneverexpires"
            >
            <label
              class="form-check-label"
              for="Passwordneverexpires"
            >
              {{ $t("MODAL.ACCOUNTISLOCKEDOUT") }}
            </label>
          </div>
        </div>
      </div>
    </form>
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
    };
  },
  methods: {
    addUser () {  
      this.axios.post(`${process.env.APIPATH}/api/AD/SaveADUsersToDB`)
        .then((data) => {

        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      },
      groupAddNewUser () {  
      this.axios.post(`${process.env.APIPATH}/api/Groups/AddUsersInGroup`)
        .then((data) => {

          // Input example:
          // {
          //   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          //   "groupUserRelations": [
          //     {
          //       "groupID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          //       "userID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          //       "roleId": 1
          //     }
          //   ]
          // }

        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      },
      addNewUser() {  
      this.axios.post(`${process.env.APIPATH}/api/Users/CreateUser`)
        .then((data) => {
          // {
          //   "userName": "abc",
          //   "firstName": "abc",
          //   "middleName": "string",
          //   "lastName": "string",
          //   "email": "abc@example.com",
          //   "description": "cdsfsdf",
          //   "telephone": "0986566456",
          //   "password": "H@rs#A14",
          //   "confirmPassword": "H@rs#A14",
          //   "isEnabled": true,
          //   "mustChangePasswordOnNextLogin": true,
          //   "cannotChangePassword": true,
          //   "passwordNeverExpires": true
          // }

          //         userName and password are required.
 

        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      },
       editUser() {  
      this.axios.post(`${process.env.APIPATH}/api/Users/EditUser`)
        .then((data) => {
         //  {
          //   "id": "84c43791-c76c-4240-a85a-d1e54bf7ad7f",
          //   "userName": "string",
          //   "firstName": "string",
          //   "middleName": "string",
          //   "lastName": "string",
          //   "email": "user@example.com",
          //   "description": "string",
          //   "telephone": "0976544666",
          //   "mustChangePasswordOnNextLogin": true,
          //   "cannotChangePassword": false,
          //   "passwordNeverExpires": false,
          //   "isEnabled": true
          // }
          // Note: Only input username and password fields if you want to change otherwise remove them from the list.
        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      },
    handleSubmit() {
      // this.$nextTick(() => {
      this.showModal = false;
      // });
    },
  },
};
</script>

