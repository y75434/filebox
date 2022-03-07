<template>
  <b-modal
    id="DeleteFolder"
    class="modal-content justify-content-center d-flex"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.DELETEFOLDER')"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    footer-bg-variant="bgmodal"
    body-bg-variant="bgmodal"
  >
    <div class="modal-popout-bg p-5 justify-content-center d-flex flex-column ">
      <img
        class="mx-auto  m-0"
        src="@/assets/images/cmd/alarm@2x.png"
      >
      <h5 class="text-center m-0">
        {{ $t("MODAL.SURETODELETE") }}
      </h5>
      

            
      <h5 class="text-center my-2 font-weight-bold">
        <strong class="text-danger"> {{ this.$store.getters.nowFile }}</strong>
      </h5>

      <p class="text-dark">
        {{ this.$store.getters.nowFile }}
      </p>
    </div>

    

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
          @click="deleteDoc"
          type="button"
          class="sm-btn btn btn-danger text-white justify-content-center d-flex"
        >
          {{ $t("HOME.DELETE") }}
        </button>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "DeleteFolder",
  props: { 
    title: { type: String, default: "Delete Folder" } ,
    delData: { type: Object , default() { return {} }}

  },
  
  data() {
    return {
      userInput: '',
      folderData: {},
     
    };
  },
  
  methods: {
    deleteDoc(){

      // console.log('nowFile',this.$store.getters.nowFile)


      //刪一般file , folder ok 

      this.axios.delete(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement`,{ data: { 
        "items": this.$store.getters.nowFile, 
        "editor":this.$store.getters.userId,
        "editorName":this.$store.getters.currentUser,
        "groups": this.$store.getters.group
      }, headers: window.headers })
        .then(() => {     
          this.$swal.fire({ title: '$t("GENERAL.DELSUCCESS")', icon: 'success' })
        }).catch(() => {
          this.$swal.fire({ title:  '$t("MODAL.FAILURE")', icon: 'error' })
      
        })

        this.$nextTick(() => { 
          // this.userInput = '';
          this.$bvModal.hide('DeleteFolder'); 

        });

        this.$store.dispatch('nowFile', null);
        this.$emit('delupdate', null);
        this.$emit('getSelected', this.$store.getters.nowFolderId);

      },
      cancel() { 
        // this.userInput = '';
        this.$bvModal.hide('DeleteFolder'); 
      },

  },
};
</script>


