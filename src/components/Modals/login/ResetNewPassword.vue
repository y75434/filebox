<template>
  <b-modal
    id="ResetNewPassword"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.RESETNEWPASSWORD')"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    body-bg-variant="bgmodal"
    footer-bg-variant="bgmodal"
    @ok="changePassword"
  >
    <div class="modal-popout-bg p-3">
      <h3 class="text-center dark-blue">
        {{ $t("GENERAL.RESETNEWPASSWORD") }}
      </h3>

      <div class="mb-3">
        <label
          for="username"
          class="form-label"
        >username</label>
        <input
          type="username"
          class="form-control"
          v-model="username"
        >
      </div>

      <div class="mb-3">
        <label
          for="oldpassword"
          class="form-label"
        >oldpassword</label>
        <input
          type="password"
          class="form-control"
          v-model="oldPassword"
        >
      </div>


      <div class="mb-3">
        <label
          for="Newpassword"
          class="form-label"
        >{{ $t("GENERAL.NEWPASSWORD") }}</label>
        <input
          type="password"
          class="form-control"
          v-model="newPassword"
        >
      </div>

      

      <div class="w-100 d-flex justify-content-center mt-5">
        <button
          type="button"
          class="modal-btn px-5 btn  justify-content-center d-flex btn-lg"
        >
          {{ $t("GENERAL.UPDATEPASSWORD") }}
        </button>
      </div>
    </div>

    <template
      #modal-cancel
      variant="outline-primary"
      class="cancel-btn"
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
  name: "CreateFolder",
  props: { title: { type: String, default: "Create Folder" } },

  data() {
    return {
      username: "",
      oldPassword: "",
      newPassword: ""

    };
  },
  methods: {
   changePassword(){
     
     const headers = { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": '*' 
        };
        
      const data = JSON.stringify(
        {
          username: this.username,
          oldPassword: this.oldPassword,
          newPassword: this.newPassword
        })
       
      this.axios.post(`${process.env.VUE_APP_USER_APIPATH}/api/AD/ADUpdateUserPassword`,
      data,{ headers: headers })
        .then((data) => {
         

        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      
    },
  },
};
</script>
