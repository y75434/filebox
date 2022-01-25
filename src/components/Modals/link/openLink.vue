<template>
  <b-modal
    id="openLink"
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
        >password</label>
        <input
          type="password"
          class="form-control"
          v-model="password"
        >
      </div>


      <p
        v-if="this.status != ''"
        class="text-danger"
      >
        {{ status }}
      </p>
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
  name: "OpenLink",
  props: { 
    title: { type: String, default: "openLink" },
    linkUrl: { type: String , default: ""}

  
  },

  data() {
    return {
      password: "",
      status: ""
    };
  },
  

  methods: {
    withURL() { 
        const data = JSON.stringify({
          "linkId": this.linkUrl,
          "userId": this.$store.getters.userId,
          "username": this.$store.getters.currentUser,
          "password": this.password
          })   


      this.axios.put(`${process.env.VUE_APP_LINKS_APIPATH}/api/Link/OpenLinkUrlWithPassword`,
      data,{ headers: window.headers }) 
        .then((data) => {

          this.personData.url = data.data.url

          console.log(data.data.url);
      }).catch(error => {
          console.log(error.response.data);          
        })
    }, 
    cancel() { 
        this.oldPassword = ""
        this.newPassword = ""
        this.status = ""
        this.$bvModal.hide('openLink'); 
      },
  },
};
</script>
