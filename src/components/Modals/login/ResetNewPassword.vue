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
  >
    <validation-observer class="modal-popout-bg p-3">
      <h3 class="text-center dark-blue">
        {{ $t("GENERAL.RESETNEWPASSWORD") }}
      </h3>

      <div class="mb-3">
        <label
          for="username"
          class="form-label"
        >username</label>
        <input
          disabled
          type="username"
          class="form-control"
          v-model="this.$store.getters.currentUser"
        >
      </div>

      <div class="mb-3">
        <label
          for="oldpassword"
          class="form-label"
        >old password</label>
        <input
          type="password"
          class="form-control"
          v-model="oldPassword"
        >
      </div>


      <div class="mb-3">
        <validation-provider
          v-slot="{ errors,classes}"
          :rules="{ required: true, regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/, min:8,}"
          vid="password"
        >
          <label
            for="Newpassword"
            class="form-label"
          >{{ $t("GENERAL.NEWPASSWORD") }}</label>
          <input
            type="password"
            class="form-control"
            v-model="newPassword"
            :class="classes"
          >
          <span class="text-danger">{{ errors[0] }}</span>
        </validation-provider>
      </div>

      <p
        v-if="this.status != ''"
        class="text-danger"
      >
        {{ status }}
      </p>

      <!-- <div class="w-100 d-flex justify-content-center mt-5">
        <button
          type="button"
          class="modal-btn px-5 btn  justify-content-center d-flex btn-lg"
        >
          {{ $t("GENERAL.UPDATEPASSWORD") }}
        </button>
      </div> -->
    </validation-observer>

    <template
      #modal-cancel
      variant="outline-primary"
      class="cancel-btn"
    >
      {{ $t("GENERAL.CANCEL") }}
    </template>

    <template #modal-ok>
      {{ $t("GENERAL.UPDATEPASSWORD") }}
    </template>

    <template #modal-footer>
      <div class="w-100 justify-content-center d-flex">
        <button
          @click="cancel"
          type="button"
          class="sm-btn cancel-btn mx-3 btn justify-content-center d-flex"
        >
          {{ $t("GENERAL.CANCEL") }}
        </button>

        <button
          @click="changePassword"
          type="button"
          class="sm-btn btn btn-danger text-white justify-content-center d-flex"
        >
          {{ $t("GENERAL.UPDATEPASSWORD") }}
        </button>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "CreateFolder",
  props: { title: { type: String, default: "Create Folder" } },

  data() {
    return {
      oldPassword: "",
      newPassword: "",
      status: ""
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
          username: this.$store.getters.currentUser,
          oldPassword: this.oldPassword,
          newPassword: this.newPassword
        })
       
      this.axios.put(`${process.env.VUE_APP_USER_APIPATH}/api/AD/ADUpdateUserPassword`,
      data,{ headers: headers })
        .then((data) => {
         
         this.status = data.data.message

         if(data.data.success){
            this.cancel();

         }

        console.log(data);
      }).catch(error => {
          console.log(error);          
        })


    },
    cancel() { 
        this.oldPassword = ""
        this.newPassword = ""
        this.status = ""
        this.$bvModal.hide('ResetNewPassword'); 
      },
  },
};
</script>
