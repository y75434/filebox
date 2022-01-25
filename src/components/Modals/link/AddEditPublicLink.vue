<template>
  <b-modal
    id="AddEditPublicLink"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.CREATEPUBLICLINK')"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    footer-bg-variant="white"
    body-bg-variant="bgmodal"
  >
    <validation-observer
      class="col-md-8"
    >
      <div
        class="modal-popout-bg p-0"
      >
        <form class=" p-3">
          <validation-provider
            v-slot="{ errors,classes}"
            rules="required"
          >
            <div class="w-100 d-flex align-items-center justify-content-between mb-2">
              <label
                for="Name in link"
                class=""
              >{{ $t("MODAL.NAMEINLINK") }}</label>
              <input
                type="string"
                class="form-control inline-block width-320"
                id="Name in link"
                v-model="personData.name"
                :class="classes"
              >
            </div>
            <span class="text-danger">{{ errors[0] }}</span>
          </validation-provider>
          <!-- <validation-provider
            v-slot="{ errors, classes }"
            rules="required"
          > -->
          <div class="w-100 d-flex align-items-center justify-content-between mb-2">
            <label
              for="creator"
              class=""
            >{{ $t("MODAL.CREATOR") }}</label>
            <input
              type="string"
              class="form-control inline-block width-320"
              id="creator"
              v-model="this.$store.getters.currentUser"
              disabled
            >
            <!--   :class="classes"-->

            <!-- <span class="text-danger">{{ errors[0] }}</span> -->
          </div>
          <!-- </validation-provider> -->
        </form>

        
        <!-- </div> -->
            
        <p class="text-dark">
          外部{{ tabData }}
        </p>

        <hr class="">

        <p class="text-dark">
          表單{{ personData }}
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
            <validation-provider
              v-slot="{ errors,classes}"
              :rules="{ regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/, min:8,}"
              vid="password"
            >
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
                  :class="classes"
                >
              </div>
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>

            <validation-provider
              v-slot="{ errors, classes}"
              rules="confirmed:password"
            >
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
                  :class="classes"
                >
              </div>
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
          </div>
                

          <hr class="">
          <validation-provider
            v-slot="{ errors, classes}"
            rules="required"
          >
            <div class="mb-3">
              <label
                for="Public link"
                class="form-label"
              >{{ $t("GENERAL.PUBLICLINK") }} </label>
              <div class="d-flex justify-content-between">
                <input
                  type="string"
                  class="form-control w-75 obj"
                  id="Public link"
                  v-model="personData.url"
                  :class="classes"
                >
             
                <b-button
                  class="bg-green border-0"
                  @click="copyText()"
                >
                  {{ $t("GENERAL.COPYLINK") }}
                </b-button>
              </div>

              <b-button
                class="bg-green border-0"
                @click="GenerateURL()"
              >
                GenerateURL
              </b-button>
            </div>
            <span class="text-danger">{{ errors[0] }}</span>
          </validation-provider>
        </div>
      </div>
    </validation-observer>

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
    <openLink :link-url="linkurl" />
  </b-modal>
</template>

<script>
import openLink from'@/components/Modals/link/openLink.vue';


export default {
  name: "EditPublicLink",
  props: { 
    // title: { type: String, default: "Rename Item" },
    tabData: { type: Object , default() { return {} }}
  },
  components:{ 
   openLink

  },
  data() {
    return {
      showModal: false,
      personData: {},
      items: [],
      linkurl: ""
    };
  },
  // 無法馬上更新值
  // computed:{
  //   personData(){
  //     return this.personData
  //   }
  // },
  methods: {
    handleOk(bvModalEvt) {
        bvModalEvt.preventDefault()
        if(this.title == 'Edit Public Link'){
          this.put(this.tabData.linkId)
        }else{
          this.post();
        }
        this.$bvModal.hide('AddEditPublicLink');
      },
    post() { 


        const data = JSON.stringify({
          "name": this.personData.name,
          "isPublic": this.personData.isPublic,
          "expireDay": this.personData.expireDay,
          "viewableTimes": this.personData.viewableTimes,
          "password": this.personData.password,
          "url": this.personData.url,
          "fileId": this.tabData.id,//外部資料id
          "creator": this.$store.getters.userId,
          "creatorName": this.$store.getters.currentUser

        })
        console.log(data);


      this.axios.post(`${process.env.VUE_APP_LINKS_APIPATH}/api/Link/Create`,
      data,{ headers: window.headers }) .then((data) => {
        console.log(data);
      }).catch(error => {
          console.log(error.response.data);          
        })
    },
    // rename + editname
    put(id) { 
     
      this.tabData =  this.personData

      
        const data = JSON.stringify({
          "linkId": this.nowSelected.id,
          "name": this.personData.name,
          "isPublic": this.personData.isPublic,
          "expireDay": this.personData.expireDay,
          "viewableTimes": this.personData.viewableTimes,
          "password": this.personData.password,
          "url": this.personData.url,
          "fileId": this.nowSelected.id,
          "editor": this.$store.getters.userId,
          "editorName": this.$store.getters.currentUser

        })   

      this.axios.put(`${process.env.VUE_APP_LINKS_APIPATH}/api/Link/${id}`,
      data,{ headers: window.headers }) .then((data) => {
        console.log(data);
      }).catch(error => {
          console.log(error.response.data);          
        })

        this.$nextTick(() => { this.personData = {};
        this.$bvModal.hide('AddEditPublicLink'); });

    },
    GenerateURL() { 
      this.axios.get(`${process.env.VUE_APP_LINKS_APIPATH}/api/Link/GenerateURL`) 
        .then((data) => {
          this.personData.url = data.data.url

          console.log(data.data.url);
      }).catch(error => {
          console.log(error.response.data);          
        })
    }, 

     withoutURL() { 
        const data = JSON.stringify({        
          "linkId": this.nowSelected.id,
          "userId": this.$store.getters.userId,
          "username": this.$store.getters.currentUser
        })   


      this.axios.put(`${process.env.VUE_APP_LINKS_APIPATH}/api/Link/OpenLinkUrlWithoutPassword`,
      data,{ headers: window.headers }) 
        .then((data) => {
          if(data.data.message.include('Please')){

            this.$bvModal.show('openLink');

          }

          console.log(data.data.message);
      }).catch(error => {
          console.log(error.response.data);          
        })
    },   
      
    clear(){
      this.personData = ""
    },
    copyText() {
      this.items.push(this.tabData.url);
      console.log('copy url',this.items[0])      
    },
    cancel() { 
      this.$bvModal.hide('AddEditPublicLink');
     },

  },
};
</script>
