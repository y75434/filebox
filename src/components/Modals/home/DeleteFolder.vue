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
        <strong class="text-danger"> {{ delData.name }}</strong>
      </h5>

      <p class="text-dark">
        {{ folderData }}
      </p>

      <input
        type="text"
        class="form-control"
        v-model="userInput"
      >
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
          :disabled="delFormValidity"

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
      id: "", //區分是資料夾還是一般文件
      type: 0
    };
  },
   watch:{ 
    delData(){ 
      this.folderData = this.delData 
    } 
  },
  computed: {
		delFormValidity() {
			return this.delData.name !== this.userInput;
		},
	},
  methods: {
    deleteDoc(){
      
      if(this.folderData.extension == null && this.delData.name === this.userInput) {
              this.id = this.delData.id

        }
        else if('id' in this.folderData  && this.delData.name === this.userInput) {
              this.id = this.delData.id
              this.type = 1
        }

        else {
          console.log('err');
          this.$swal.fire({ title: '{{ $t("MODAL.FAILURE") }}', icon: 'error' })

        }
    


      const pl =  JSON.stringify({ 
        "items": [{ "id": this.id, "type": this.type }], 
        "editor":this.$store.getters.userId,
        "editorName":this.$store.getters.currentUser
      })

     console.log(pl);


      //刪一般file , folder ok 

      this.axios.delete(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement`,{ data: { 
        "items": [{ "id": this.id, "type": this.type }], 
        "editor":this.$store.getters.userId,
        "editorName":this.$store.getters.currentUser
      }, headers: window.headers })
        .then(() => {     
          this.$swal.fire({ title: '$t("GENERAL.DELSUCCESS")', icon: 'success' })
        }).catch(() => {
          this.$swal.fire({ title: '{{ $t("MODAL.FAILURE") }}', icon: 'error' })
      
        })

        this.$nextTick(() => { 
          this.userInput = '';
          this.type = 0;
          this.$bvModal.hide('DeleteFolder'); 

        });
      },
      cancel() { 
        this.userInput = '';
        this.$bvModal.hide('DeleteFolder'); 
      },

  },
};
</script>


