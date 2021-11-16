<template>
  <b-modal
    id="AddNewUser"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="title"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    footer-bg-variant="white"
    body-bg-variant="bgmodal"
  >
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
    <div class="modal-popout-bg p-0">
      <form class=" p-3">
        <div class="w-100 d-flex align-items-center justify-content-between mb-2">
          <label
            for="Username"
            class=""
          >User name</label>
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
          >Full name</label>
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
          >Email</label>
                  
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
          >Description</label>
                  
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
            Change user password
          </label>
          <div class="w-100 d-flex align-items-center justify-content-between mb-2">
            <label
              for="Password"
              class="form-label"
            >Password</label>
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
            >Confirm Password</label>
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
            User must change password at next time
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
            User cannot change password
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
            Password never expires
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
            Account is disabled

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
            Account is locked out
          </label>
        </div>
      </div>
    </div>

    <!-- </form> -->
    <template
      #modal-cancel
      variant="outline-primary"

      class="cancel-btn"
    >
      Cancel
    </template>

    <template #modal-ok>
      ok
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
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    },
    handleSubmit() {
      // this.$nextTick(() => {
      this.showModal = false;
      // });
    },
  },
};
</script>

<style></style>
