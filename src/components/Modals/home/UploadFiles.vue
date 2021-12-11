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
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
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
        </div>

         
        <b-button
          variant="primary"
          @click="Upload()"
        >
          {{ $t("HOME.UPLOAD") }}
        </b-button>
      </div>
    </template>

    <!-- </form> -->
  </b-modal>
</template>

<script>
export default {
  name: "UploadFiles",
  props: { title: { type: String, default: "Upload Files - Root Folder" } },

  data() {
    return {
      url: [],
      files:{
        name:null
      },
      image:[],

    };
  },
  methods: {
    
    handleSubmit() {
      // this.$nextTick(() => {
      this.showModal = false;
      // });
    },
    Addfiles(){

    },
    onFileChange(e) {
      const file = e.target.files;
      console.log(file);
      this.files = file;
      // 
 
      
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
