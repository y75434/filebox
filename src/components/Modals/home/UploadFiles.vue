<template>
  <b-modal
    id="UploadFiles"
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
  >
    <div class="modal-popout-bg  p-0">
      <p class="m-0">
        <img src="@/assets/images/cmd/upload@2x.png">
        {{ $t("MODAL.SELECTFILESUPLOADED") }}
      </p>

      <div class="bg-white p-5 text-center">
        <!-- <input
          type="file"
          @change="onFileChange"
        > -->
        <div class="w-100 d-flex justify-content-start">
          <div
            v-for="item in image"
            :key="item.id"
            class=""
          >
            <img
              :src="item"
              class="folder-icon"
            >
            <img
              @click="del(item)"
              src="@/assets/images/cmd/del.png"
              class="icon-20px"
            >
            <!--  <h6 class="text-dark text-center">
              {{ file.name }}
            </h6> -->
          </div>
        </div>

        <p
          v-if="!url"
          class="m-5 hr-gray"
        >
          {{ $t("MODAL.DRAGFILE") }}
        </p>
      </div>
    </div>
    <form>
      <!-- <div
          class=""
          :key="item.name"
          v-for="item in this.file"
        >  -->

      <!-- 
        <div
          class=""
          v-for="this.file.length==0"
        >     
          <img  :src="item.url" alt="">
            <p class="m-5 hr-gray">
              {{ item.name }}
            </p>
          <p v-else>目前沒有圖片</p> 
        </div>
        -->
      <!-- </div> -->
    </form>
   

    <template #modal-footer="{ }">
      <div class="d-flex w-100 justify-content-between">
        <div class="">
          <b-button
            class="cancel-btn mx-1"
            @change="onFileChange"
          >
            <label
              for="inputFile"
              class="button"
            >
              <span>{{ $t("GENERAL.ADDFILES") }}</span>
            </label>
            <input
              type="file"
              id="inputFile"
              class="d-none"
              multiple="multiple"
              accept="file"
            >
          </b-button>


          <b-button
            class="cancel-btn mx-1"
            @change="onFolderChange"
          >
            <label
              for="inputFolder"
              class="button"
            >
              <span>{{ $t("GENERAL.ADDFOLDER") }}</span>
            </label>
            <input
              type="file"
              id="inputFolder"
              class="d-none"
              webkitdirectory
              directory
              multiple
            >
          </b-button>
          <b-button
            class="cancel-btn mx-1"
            @click="Remove()"
          >
            {{ $t("GENERAL.REMOVE") }}
          </b-button>
          <b-button
            class="cancel-btn mx-1"
            @click="clear()"
          >
            {{ $t("GENERAL.CLEAR") }}
          </b-button>
          <b-button
            class="cancel-btn mx-1"
            @click="FilesConflict()"
          >
            UploadFilesConflict
          </b-button>
        </div>

         
        <b-button
          variant="primary"
          @click="upload()"
        >
          {{ $t("HOME.UPLOAD") }}
        </b-button>
      </div>
    </template>
    <UploadFilesConflict ref="UploadFilesConflict" :file="this.files[0]" />
  </b-modal>
</template>

<script>
import UploadFilesConflict from '@/components/Modals/home/UploadFilesConflict.vue';
import cmqRequest from '@/http/cmqRequest'

export default {
  name: "UploadFiles",
  props: { 
    title: { type: String, default: "Upload Files - Root Folder" },

  },
  components: {
    UploadFilesConflict
  },
  data() {
    return {
      url: [],
      files:{},
      image:[],
      formData:{},
    };
  },
  methods: {
    FilesConflict(){
      this.$bvModal.show('UploadFilesConflict');

    },
    //ok
    upload(){
 
      const formData = new FormData(); 

      
      // this.files.forEach((x,i)=>{
      //     console.log(x);
      //     formData.append('file'+i,x);//依據數量給檔名所以＋i

      // })

      //console.log(this.files);

       formData.append('file0', this.files[0]);
       console.log(this.files[0]);

     

      formData.append('uploadData',JSON.stringify({
          DestinationFolderId: this.$store.getters.nowFolderId,
          UploadedBy: this.$store.getters.userId,
          UploaderName:  this.$store.getters.currentUser,
          ConflictType: 0,
          groups: this.$store.getters.group

      }));

      // console.log(formData);


      // "headers": {
      //   'Content-Type': 'application/json',
      //   'Authorization': 'Bearer ' + getToken(url)
      // }


      cmqRequest.upload(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement`,
      formData,)
      .then((data) => { 
        console.log(data);

        if(data.data.code == 1005){
          this.$swal.fire({ title: data.data.msg, icon: 'info' })
          this.$bvModal.show('UploadFilesConflict');

        }else{
          this.$swal.fire({ title: data.data.msg, icon: 'success' })
          this.$bvModal.hide('UploadFiles');

        }


      }).catch(error => {
        console.log(error.response.data);     
   
      })

      this.clear()
      // setTimeout(() => {this.$emit('reload');},2000)

    },
    onFileChange(e) {
      const file = e.target.files;
      console.log(file);
      this.files = file;

      this.files.forEach((x)=>{
          this.image.push(URL.createObjectURL(x));
      })
     
     
    },
    onFolderChange(e) {
      const file = e.target.files;
      console.log(file);
      this.files = file;
 
      
      this.files.forEach(x=>{
          console.log(x);
          this.image.push(URL.createObjectURL(x));

      })

        
    },
    del(url){
      this.image = this.image.filter(x=>x!==url);
    },
    clear(){
      this.image = []
    },
    
  },
};
</script>
