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
  >
    <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
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
              v-model="tabData.Name"
            >
          </div>
          <h1 class="text-dark">
            {{ tabData }}
          </h1>
                
          <div class="w-100 d-flex align-items-center justify-content-between mb-2 ">
            <label
              for="Fullname"
              class="form-label"
            >{{ $t("MODAL.FULLNAME") }}</label>
            <input
              v-model="tabData.FullName
              "
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
export default {
  name: "EditUserProperties",
  props: { 
    title: { type: String, default: "Edit User Properties" } ,
    tabData: { type: Object , default() { return {} }}

  },

  data() {
    return {
      showModal: false,
      personData: this.tabData
    };
  },
  
  methods: {
    handleSubmit() {
      // this.$nextTick(() => {
      this.showModal = false;
      // });
    },
  },
};
</script>

