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
            class="folder-icon mx-auto"
          >
          <h6 class="text-dark text-center">
            1 replace
          </h6>
        </div>
        <div
          @click="skip()"
          class="d-flex flex-column"
        >
          <img
            src="@/assets/images/cmd/upload@2x.png"
            class="folder-icon mx-auto"
          >
          <h6 class="text-dark text-center">
            2 Skip
          </h6>
        </div>
        <div
          @click="keepboth()"
          class="d-flex flex-column"
        >
          <img
            src="@/assets/images/cmd/upload@2x.png"
            class="folder-icon mx-auto"
          >
          <h6 class="text-dark text-center">
            3 keepboth
          </h6>
        </div>
      </div>
    </div>
    <h6 class="text-dark text-center">
      {{ good }}
    </h6>


    <template #modal-ok>
      {{ $t("GENERAL.OK") }}
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "UploadFilesConflict",
  props: { 
    title: { type: String, default: "UploadFilesConflict" },
    file: { type: Object , default() { return {} }},

  },

  data() {
    return {
      obj:{
        DestinationFolderId: this.$store.getters.nowFolderId,
        UploadedBy: this.$store.getters.userId,
        UploaderName:  this.$store.getters.currentUser,
        ConflictType: 0,
      },
      good: ""
      
    }
  },
  watch:{ 
    file(){ 
      this.good = this.file 
    },
  },
  methods: {
    replace(){   
      this.obj.ConflictType = 1
      this.sent()     
    },
    skip() {
      this.obj.ConflictType = 2
      this.sent()    
    },
    keepboth() {
      this.obj.ConflictType = 3
      this.sent()
    },
    close(){
      this.$bvModal.hide('UploadFilesConflict');
    },
    sent(){

      const formData = new FormData(); 

      // this.files.forEach((x,i)=>{
      //     console.log(x);
      //     formData.append('file'+i,x);//依據數量給檔名所以＋i

      // })

    
      formData.append('file0', this.good );

      console.log(this.good);

      formData.append('uploadData',JSON.stringify(this.obj));
       
      console.log(this.obj);

      this.axios.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement`,formData)
      .then((data) => { 
        console.log(data);

      }).catch(error => {
        console.log(error.response.data);        
      })

      // this.$bvModal.close('UploadFilesConflict');

    }
  },
};
</script>
