<template>
  <b-modal
    id="UploadFilesConflict"
    class="modal-content radius"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.UPLOADFILES')"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    footer-bg-variant="bgmodal"
    body-bg-variant="bgmodal"
    size="lg"
    @ok="close"
  >
    <div class="modal-popout-bg  p-0">
      <div class="w-100 d-flex flex-column justify-content-start">
        <div
          @click="replace()"
          class="d-flex flex-column"
        >
          <img
            src="@/assets/images/cmd/upload@2x.png"
            class="folder-icon"
          >
          <h6 class="text-dark text-center">
            replace
          </h6>
        </div>
        <div
          @click="skip()"
          class="d-flex flex-column"
        >
          <img
            src="@/assets/images/cmd/upload@2x.png"
            class="folder-icon"
          >
          <h6 class="text-dark text-center">
            skip
          </h6>
        </div>
        <div
          @click="keepboth()"
          class="d-flex flex-column"
        >
          <img
            src="@/assets/images/cmd/upload@2x.png"
            class="folder-icon"
          >
          <h6 class="text-dark text-center">
            keepboth
          </h6>
        </div>
      </div>
    </div>


    <template #modal-ok>
      {{ $t("GENERAL.OK") }}
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "UploadFilesConflict",
  props: { title: { type: String, default: "UploadFilesConflict" } },

  data() {
    return {

    }
  },
  methods: {
    replace(){
       const headers = { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": '*' 
        };

      const data = JSON.stringify(this.formData)

      this.axios.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement`,
      data,{ headers: headers })
      .then((data) => { 
        console.log(data);

      }).catch(error => {
        console.log(error.response.data);        
      })
    },
    skip() {
  
     
    },
    keepboth() {
      
     
    },
    close(){
      this.$bvModal.hide('UploadFilesConflict');
    }
  },
};
</script>
