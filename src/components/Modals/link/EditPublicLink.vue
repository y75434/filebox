<template>
  <b-modal
    id="EditPublicLink"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.EDITPUBLICLINK')"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    footer-bg-variant="white"
    body-bg-variant="bgmodal"
  >
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
    <div
      class="modal-popout-bg p-0"
    >
      <form class=" p-3">
        <div class="w-100 d-flex align-items-center justify-content-between mb-2">
          <label
            for="Name in link"
            class=""
          >{{ $t("MODAL.NAMEINLINK") }}</label>
          <input
            type="Name in link"
            class="form-control inline-block width-320"
            id="Name in link"
            v-model="tabData.name"
          >
        </div>
      </form>
      <!-- </div> -->
            
      <hr class="">
      <h1 class="text-dark">
        {{ tabData }}
      </h1>


      <div
        class="d-flex flex-column justify-content-between p-3"
      >
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="Usermustchangepasswordatnexttime"
            v-model="tabData.isPublic"
          >
          <label
            class="form-check-label"
            for="Usermustchangepasswordatnexttime"
          >
            {{ $t("MODAL.OPENLINKEDFILE") }}
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="Usercannotchangepassword"
          >
          <label
            class="form-check-label align-items-center d-flex"
            for=""
          >
            {{ $t("MODAL.LINKEXPIRES") }}<input
              type="text"
              class="mx-2 form-control w-25"
            >{{ $t("MODAL.DAYS") }}

          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="Usercannotchangepassword"
          >
          <label
            class="form-check-label align-items-center d-flex"
            for=""
          >
            {{ $t("MODAL.LINKCANBEOPENED") }}<input
              type="text"
              class="mx-2 form-control w-25"
              v-model="tabData.viewableTimes"
            >{{ $t("GENERAL.TIMES") }}


          </label>
        </div>


        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="Changeuserpassword"
          >
          <label
            class="form-check-label"
            for="Changeuserpassword"
          >
            {{ $t("MODAL.PROTECTLINKWITH") }}

          </label>
          <div
            class="w-100 d-flex align-items-center justify-content-between mb-2"
          >
            <label
              for="Password"
              class="form-label"
            >{{ $t("GENERAL.PASSWORD") }}</label><input
              type="Password"
              id="Password"
              placeholder="******"
              class="form-control width-220"
            >
          </div>
          <div
            class="w-100 d-flex align-items-center justify-content-between mb-2"
          >
            <label
              for="Confirmpassword"
              class="form-label"
            >{{ $t("GENERAL.CONFIRMPASSWORD") }}
            </label><input
              type="Confirmpassword"
              id="Confirmpassword"
              placeholder="******"
              class="form-control width-220"
            >
          </div>
        </div>
                

        <hr class="">

        <div class="mb-3">
          <label
            for="Public link"
            class="form-label"
          >{{ $t("GENERAL.PUBLICLINK") }}</label>
          <div class="d-flex justify-content-between">
            <input
              type="url"
              class="form-control w-75"
              id="Public link"
              v-model="tabData.url"
              disabled
            >
            <b-button
              class="bg-green border-0"
            >
              {{ $t("GENERAL.COPYLINK") }}
            </b-button>
          </div>
        </div>
      </div>
    </div>

    <template
      #modal-footer="{ Cancel, Reset, Update }"
    >
      <div class="d-flex w-100 justify-content-between">
        <b-button
          class="cancel-btn"
          @click="Cancel()"
        >
          {{ $t("GENERAL.CANCEL") }}
        </b-button>
        <div class="">
          <b-button
            class="bg-green border-0 mx-2"
            @click="Reset()"
          >
            {{ $t("MODAL.RESET") }}
          </b-button>
          <b-button
            variant="primary"
            @click="Update()"
          >
            {{ $t("GENERAL.OK") }}
          </b-button>
        </div>
      </div>
    </template>
    <!-- </form> -->
  </b-modal>
</template>

<script>

export default {
  name: "EditPublicLink",
  props: { 
    title: { type: String, default: "Edit Public Link" },
    tabData: { type: Object , default() { return {} }}
  },
  components:{ 
   
  },
  data() {
    return {
      showModal: false,
      personData: this.tabData
    };
  },
  methods: {
    // rename + editname
    EditLinkName (id) {  
      this.axios.post(`${process.env.APIPATH}/api/Link/${id}`)
        .then((data) => {

          // {
          //   "linkId": "bd30087c-0e86-4118-8aaa-3f2a195664ce",
          //   "name": "link3",
          //   "expireDays": 3,
          //   "viewableTimes": 10,
          //   "password": "Link3Pass",
          //   "url": "https://localhost:44395/swagger/index.html",
          //   "editor": "jamy"
          // }

 


        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
    },
    createNewLink() {  
      this.axios.post(`${process.env.APIPATH}/api/Link/Create`)
        .then((data) => {

        // {
        //     "name": "mp4link",
        //     "isPublic": true,
        //     "expireDay": 2,
        //     "viewableTimes": 10,
        //     "password": "pass",
        //     "url": "https://localhost:44395/swagger/index.html",
        //     "fileId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        //     "creator": "vr",
        //     "editor": "vr"
        //   }


 


        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
    },
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
    Reset(){
      this.personData = ""
    }
  },
};
</script>
