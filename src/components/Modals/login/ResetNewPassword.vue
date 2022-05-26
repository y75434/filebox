<template>
  <b-modal
    id="ResetNewPassword"
    class="modal-content p-0"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.RESETNEWPASSWORD')"
    header-bg-variant="bgheader"
    body-bg-variant="bgmodal"
    footer-bg-variant="bgmodal"
    hide-footer
  >
    <div class="modal-body ">
      <validation-observer class="modal-popout-bg  p-0">
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
            v-slot="{ errors,classes,invalid }"
            :rules="{ regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/, min:8, password: true }"
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
            <div class="w-100 d-flex justify-content-center mt-5">
              <button
                :disabled="invalid || !newPassword"
                type="button"
                @click="changePassword"
                class="modal-btn px-5 btn  justify-content-center d-flex btn-lg"
              >
                {{ $t("GENERAL.UPDATEPASSWORD") }}
              </button>
            </div>
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
          :disabled="errors"
          type="button"
          class="modal-btn px-5 btn  justify-content-center d-flex btn-lg"
        >
          {{ $t("GENERAL.UPDATEPASSWORD") }}
        </button>
      </div> -->
      </validation-observer>
    </div>
  </b-modal>
</template>

<script>
import { extend } from 'vee-validate';
import { regex } from 'vee-validate/dist/rules';
import i18n from '@/common/plugins/vue-i18n';
import cmqRequest from "@/http/cmqRequest"

// import { password  } from 'vee-validate/dist/rules';

// extend('password', password);
extend('regex', {
    ...regex,
    message: i18n.t('MODAL.PWPOLICY')
    
})

export default {
  name: "ResetNewPassword",
  props: { title: { type: String, default: "ResetNewPassword" } },

  data() {
    return {
      oldPassword: "",
      newPassword: "",
      status: ""
    };
  },
  

  methods: {
   changePassword(){
        
      const data = JSON.stringify({
        username: this.$store.getters.currentUser,
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        editedBy:  this.$store.getters.userId,
        editor:  this.$store.getters.currentUser
      })
       
      cmqRequest.put(`${process.env.VUE_APP_USER_APIPATH}/api/Users/ChangePassword`,
      data)
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

<style scoped>


::v-deep .modal-body {
  border-bottom-right-radius: 10px !important;
	border-bottom-left-radius: 10px !important;

}
</style>

