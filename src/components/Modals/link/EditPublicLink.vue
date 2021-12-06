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
    <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit(personData.linkId)"
    >
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
              v-model="personData.name"
            >
          </div>
        </form>
        <!-- </div> -->
            
        <hr class="">
        <p class="text-dark">
          {{ tabData }}
        </p>


        <div
          class="d-flex flex-column justify-content-between p-3"
        >
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="Usermustchangepasswordatnexttime"
              v-model="personData.isPublic"
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
                v-model="personData.expireDay"

                type="number"
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
                type="number"
                class="mx-2 form-control w-25"
                v-model="personData.viewableTimes"
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
                v-model="personData.password"
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
                class="form-control w-75 obj"
                id="Public link"
                v-model="personData.url"
              >
              <b-button
                class="bg-green border-0"
                @click="copyText()"
              >
                {{ $t("GENERAL.COPYLINK") }}
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </form>

    <b-button
      class="cancel-btn"
      @click="handleSubmit()"
    >
      test api
    </b-button>

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
      personData: {},
      items: []
    };
  },
  mounted(){
    // this.personData = this.tabData
    setTimeout(()=>{

    
      this.personData =JSON.parse(JSON.stringify(this.tabData));
      console.log("运行记录组件接到的数据",this.tabData);
    
    },800)


  },
  methods: {
    // rename + editname
    handleSubmit(id) { 
      console.log('id',id);
      console.log('this.personData',this.personData);
      const headers = { 
        'Content-Type': 'Content-Type: application/json',
        "Access-Control-Allow-Origin": "*", };

      this.axios.put(`/api/Link/5c96b679-8584-44c6-accb-924810715dc1`, this.personData,{ headers: headers })
        .then((data) => {

          

 


        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
    },
    // createNewLink
    createNewLink() {  
      this.axios.post(`${process.env.VUE_APP_LINKS_APIPATH}/api/Link/Create`)
        .then((data) => {

      


        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
    },
    
    // handleSubmit() {
    //   // this.$nextTick(() => {
    //   this.showModal = false;
    //   // });
    // },
    Reset(){
      this.personData = ""
    },
    copyText() {
      this.items.push(this.tabData.url);
      console.log('copy url',this.items[0])      
    }
  },
};
</script>
