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
      @submit.stop.prevent=""
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
            
        <p class="text-dark">
          {{ tabData }}
        </p>
        <hr class="">

        <p class="text-dark">
          {{ personData }}
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
              id=""
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
              id=""
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
      post
    </b-button>


    <template
      #modal-footer="{}"
    >
      <div class="d-flex w-100 justify-content-between">
        <b-button
          class="cancel-btn"
          @click="cancel"
        >
          {{ $t("GENERAL.CANCEL") }}
        </b-button>
        <div class="">
          <b-button
            class="bg-green border-0 mx-2"
            @click="clear"
          >
            {{ $t("MODAL.RESET") }}
          </b-button>
          <b-button
            variant="primary"
            @click="handleOk"
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
      personData: 
       this.tabData,
      // { 
      //   linkId: "", 
      //   name: "",
      //   expireDays: 0, 
      //   viewableTimes: 0, 
      //   password: "", 
      //   url: "",
      //   editor: "" 
      // },


      items: []
    };
  },
  mounted(){
     this.personData = this.tabData

    // setTimeout(()=>{    
    //   this.personData =JSON.parse(JSON.stringify(this.tabData));
    //   console.log("运行记录组件接到的数据",this.tabData);
    //   console.log('241',this.personData);
    // },800)
  },
  methods: {
    handleOk(bvModalEvt) {
        bvModalEvt.preventDefault()
        console.log('245',this.personData);
        this.put(this.tabData.linkId)
      },
    handleSubmit() { 
      
      const headers = { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": '*' 
        };
        // const data = JSON.stringify(this.personData)

        const data = JSON.stringify(
        {"name": "dmjjjjjjjoqubiz", "isPublic": false, "expireDay": 0, "viewableTimes":
        0, "viewed": 0, "password": "aaa", "url": "string", "fileId":
        "3fa85f64-5717-4562-b3fc-2c963f66afa6", "creator": "linda" }
        );


      this.axios.post(`${process.env.VUE_APP_LINKS_APIPATH}/api/Link/Create`,
      data,{ headers: headers }) .then((data) => {


 


        console.log(data);
      }).catch(error => {
          console.log(error.response.data);          
        })
    },



    // rename + editname
    put(id) { 
     
      this.tabData =  this.personData

      console.log('281',this.tabData);

      const headers = { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": '*' 
        };
        const data = JSON.stringify(this.tabData)   

      this.axios.put(`${process.env.VUE_APP_LINKS_APIPATH}/api/Link/${id}`,
      data,{ headers: headers }) .then((data) => {
        console.log(data);
      }).catch(error => {
          console.log(error.response.data);          
        })

        this.$nextTick(() => { this.personData = {};
        this.$bvModal.hide('EditPublicLink'); });

    },
    
    clear(){
      this.personData = ""
    },
    copyText() {
      this.items.push(this.tabData.url);
      console.log('copy url',this.items[0])      
    },
    cancel() { 
      this.$bvModal.hide('EditPublicLink');

     },

  },
};
</script>
