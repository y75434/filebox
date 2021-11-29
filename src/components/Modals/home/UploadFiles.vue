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
          <div class="">
            <img
              v-if="url"
              :src="url"
              class="folder-icon"
            >
            <h6 class="text-dark text-center">
              {{ file.name }}
            </h6>
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
    <form
      action="/somewhere/to/upload"
      enctype="multipart/form-data"
    >
      <input
        type="file"
        id="TWInput"
        accept="image/gif, image/jpeg, image/png"
        multiple
        @change="readURL"
      >
      <div
        id="TW"
        style="width:100%; height: 300px; overflow:scroll;"
      >
      <div v-if="" class="" v-for="item in files">
        <img :src="e.target.result" alt="">
      </div>
        <p v-else>目前沒有圖片</p>
      </div>
    </form>


    <template #modal-footer="{ Addfiles, Addfolder, Remove, Clear, Upload }">
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
            @submit.prevent="Addfolder()"
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
      showModal: false,
      url: null,
      file:{
        name:null
      },
      files:[]
    };
  },
  methods: {
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    },
    handleSubmit() {
      // this.$nextTick(() => {
      this.showModal = false;
      // });
    },
    Addfiles(){

    },
    onFileChange(e) {
      const file = e.target.files;
      // this.file.name = file.name
      console.log(file);
      this.url = [...file].map(URL.createObjectURL);

      // this.url = URL.createObjectURL(file);
    },
    readURL(input){
      if (input.files && input.files.length >= 0) {
        for(let i = 0; i < input.files.length; i ++){
          let reader = new FileReader();
          // reader(e){
            
          // }
          reader.readAsDataURL(input.files[i]);
        }
      
}

  },
};
</script>
