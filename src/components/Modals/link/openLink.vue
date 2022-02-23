<template>
  <b-modal
    id="openLink"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="$t('GENERAL.WELCOME_WORD')"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    body-bg-variant="bgmodal"
    footer-bg-variant="bgmodal"
  >
    <validation-observer class="modal-popout-bg p-3">
      <h3 class="text-center dark-blue">
        {{ $t("GENERAL.WELCOME_WORD") }}
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
          for="password"
          class="form-label"
        >password</label>
        <input
          type="password"
          class="form-control"
          v-model="password"
        >
      </div>
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
          @click="openLink"
          type="button"
          class="sm-btn btn btn-danger text-white justify-content-center d-flex"
        >
          {{ $t("GENERAL.OK") }}
        </button>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "OpenLink",
  props: { 
    title: { type: String, default: "openLink" },
    linkId: { type: String , default: ""}

  
  },

  data() {
    return {
      password: "",
    };
  },
  

  methods: {
    openLink() { 
        const data = JSON.stringify({
          "linkId": this.linkId,
          "userId": this.$store.getters.userId,
          "username": this.$store.getters.currentUser,
          "password": this.password
          })   

          console.log(data);
          


      this.axios.put(`${process.env.VUE_APP_LINKS_APIPATH}/api/Link/OpenLinkUrlWithPassword`,
      data,{ headers: window.headers }) 
        .then((data) => {


          console.log(data.data.message);
      }).catch(error => {
          console.log(error.response.data);          
        })

        this.password = ""

    }, 
    cancel() { 
        this.password = ""
        this.$bvModal.hide('openLink'); 
      },
  },
};
</script>
