<template>
  <b-modal
    id="CreateFolder"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.CREATEFOLDER')"
    header-bg-variant="bgheader"
    footer-bg-variant="bgmodal"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    body-bg-variant="bgmodal"
    @ok="postFolder"
  >
    <div class="modal-popout-bg p-3">
      <p class=" m-0">
        {{ $t("MODAL.ENTERANAMEFORTHENEWFOLDER") }}
      </p>
      <input
        type="text"
        class="form-control"
        :placeholder="$t('MODAL.PLEASEFILLOUTTHISFIELD')"
        v-model="name"
      >
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
  props: { 
    title: { type: String, default: "Create Folder" },
  },

  data() {
    return {
      name: "",
    };
  },
 
  methods: {
    //success
   postFolder(){
      
      const data = JSON.stringify(
        { 
          "parentFolderId": this.$store.getters.nowFolderId, 
          "name": this.name,
          "uploadedBy": this.$store.getters.userId,
          "uploaderName":  this.$store.getters.currentUser,
          "groups": this.$store.getters.group

        }

      )
      console.log(data);
      

      this.axios.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/CreateFolder`,
      data,{ headers: window.headers })
      .then((data) => { 
        console.log(data);


      }).catch(error => {
        console.log(error.response.data);        
      })

      this.$nextTick(() => { 
        this.name = ""
        this.$bvModal.hide('CreateFolder'); 
        setTimeout(() => {this.$emit('reload');},2000)
      });
    },
  },
};
</script>
