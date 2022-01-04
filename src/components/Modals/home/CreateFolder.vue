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
    <p class="text-dark">
      {{ parentFolderId }}
    </p>

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
    parent: { type: String , default: ""}
  },

  data() {
    return {
      name: "",
      parentFolderId: this.parent
    };
  },
 
  methods: {
    //success
   postFolder(){
      const headers = { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": '*' 
      };

      const data = JSON.stringify(
        { "parentFolderId": this.parentFolderId, 
          "name": this.name,
          "uploadedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6" //之後改
        }

      )
      console.log(data);
      

      this.axios.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/CreateFolder`,
      data,{ headers: headers })
      .then((data) => { 
        console.log(data);


      }).catch(error => {
        console.log(error.response.data);        
      })

      this.$nextTick(() => { 
        this.name = ""
        this.$bvModal.hide('CreateFolder'); 
      });
    },
  },
};
</script>
