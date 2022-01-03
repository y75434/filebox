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
    @ok="Upload"
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


    <template #modal-footer="{ Addfolder, Remove, Clear, Upload }">
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
            @click="Clear()"
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
          @click="Upload()"
        >
          {{ $t("HOME.UPLOAD") }}
        </b-button>
      </div>
    </template>
    <UploadFilesConflict ref="UploadFilesConflict" />
  </b-modal>
</template>

<script>
import UploadFilesConflict from '@/components/Modals/home/UploadFilesConflict.vue';

export default {
  name: "UploadFiles",
  props: { title: { type: String, default: "Upload Files - Root Folder" } },
  components: {
    UploadFilesConflict
  },
  data() {
    return {
      url: [],
      files:{
        name:null
      },
      image:[],
      formData:{}
    };
  },
  methods: {
    FilesConflict(){
      this.$bvModal.show('UploadFilesConflict');
    },
    Upload(){
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
    onFileChange(e) {
      const file = e.target.files;
      console.log(file);
      this.files = file;
      // 
      const formData = new FormData(); 

      
      this.files.forEach((x,i)=>{
          console.log(x);
          this.image.push(URL.createObjectURL(x));
          formData.append('file'+i,x);//依據數量給檔名所以＋i

      })

      console.log(this.files);

         //直接axios 再把formData post過去

     

      formData.append('uploadData',JSON.stringify({
          DestinationFolderId: '195ddee6-fcfa-4ee4-ba61-0c72dafeb289',
          UploadedBy: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          ConflictType: 1,
          type: 1
      }));
      
      console.log('DestinationFolderId: 195ddee6-fcfa-4ee4-ba61-0c72dafeb289');


      this.axios.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement`,
      formData)
      .then((data) => { 
        console.log(data);

      }).catch(error => {
        console.log(error.response.data);        
      })


      //this.url = [...file].map(URL.createObjectURL);


      
     
    },
    onFolderChange(e) {
      const file = e.target.files;
      console.log(file);
      this.files = file;
 
      
      this.files.forEach(x=>{
          console.log(x);
          this.image.push(URL.createObjectURL(x));

      })


      const formData = new FormData();
      formData.append('file',file);

      //直接axios 再把formData post過去
      console.log(this.files);
   


      //this.url = [...file].map(URL.createObjectURL);


      
     
    },
  },
};
</script>
