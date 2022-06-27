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
            v-slot="{ errors,classes }"
            rules="required"
          >
            <div class="w-100 d-flex align-items-center justify-content-between mb-2">
              <label
                for="Name in link"
                class=""
              >{{ $t("MODAL.NAMEINLINK") }}<span class="text-danger">{{ $t("GENERAL.REQUIRE") }}</span>
              </label>
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
          <div class="form-check mb-2">
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
          <div class="form-check mb-2">
            <label
              class="form-check-label align-items-center d-flex"
              for=""
            >
              <input
                class="form-check-input me-1"
                type="checkbox"
                v-model="expireDay"
              >
              {{ $t("MODAL.LINKEXPIRES") }}<input
                v-model="personData.expireDay"
                :disabled="!expireDay"
                type="number"
                class="mx-2 form-control w-25"
              >{{ $t("MODAL.DAYS") }}

            </label>
          </div>
          <div class="form-check mb-2">
            <label
              class="form-check-label align-items-center d-flex"
              for=""
              style="vertical-align:middle"
            >
              <input
                class="form-check-input me-1"
                type="checkbox"
                v-model="viewableTimes"
                style="vertical-align:middle"
              >
              {{ $t("MODAL.LINKCANBEOPENED") }}<input
                type="number"
                class="mx-2 form-control w-25"
                v-model="personData.viewableTimes"
                :disabled="!viewableTimes"
              >{{ $t("GENERAL.TIMES") }}


            </label>
          </div>


          <div class="form-check">
            <input
              class="form-check-input mb-2"
              type="checkbox"
              v-model="password"
            >
            <label
              class="form-check-label mb-2"
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
                  class="form-control width-220"
                  :class="classes"
                  :disabled="!password"
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
                  type="password"
                  id="Confirmpassword"
                  class="form-control width-220"
                  :class="classes"
                  v-model="cfpassword"
                  :disabled="!password"
                >
              </div>
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
          </div>
                

          <hr class="">
          <!-- <validation-provider
            v-slot="{ errors, classes}"
            rules="required"
          > -->
          <div class="mb-3">
            <label
              for="Public link"
              class="form-label"
            >{{ $t("GENERAL.PUBLICLINK") }} </label>
            <div class="d-flex justify-content-between">
              <!-- <input
                type="text"
                class="form-control w-75 obj"
                id="Public link"
                v-model="personData.url"
              > -->
              <span class="text-truncate">{{ personData.url }}</span>
            </div>

            <b-button
              class="bg-green border-0 mb-2"
              @click="copyText()"
            >
              {{ $t("GENERAL.COPYLINK") }}
            </b-button>

            <!-- <b-button
              class="bg-green border-0"
              @click="GenerateURL()"
            >
              GenerateURL
            </b-button> -->
          </div>
          <!-- <span class="text-danger">{{ errors[0] }}</span> -->
          <!-- </validation-provider> -->
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
            :disabled="pwValidity && password"
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
import cmqRequest from "@/http/cmqRequest"

export default {
  name: "EditPublicLink",
  props: { 
    tabData: { type: Object , default() { return {} }}
  },
 
  data() {
    return {
      showModal: false,
      personData: {},
      items: [],
      linkurl: "",
      cfpassword: "",
      expireDay: false,
      viewableTimes: false,
      password: false,

    };
  },
  computed: {
		pwValidity() {
      return this.personData.password !== this.cfpassword;
		},
	},
  methods: {
    handleOk(bvModalEvt) {
        bvModalEvt.preventDefault()       
        this.post();
        this.$bvModal.hide('AddEditPublicLink');
      },
    post() { 
        if(this.personData.password === ""){
          this.personData.password = null
        }


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


      cmqRequest.post(`${process.env.VUE_APP_LINKS_APIPATH}/api/Link/Create`,
      data).then((data) => {
        console.log(data);
        }).catch(error => {
            console.log(error.response.data);          
        })

        // setTimeout(() => {this.$emit('reload');},2000)
    }, 
    GenerateURL() { 
      cmqRequest.get(`${process.env.VUE_APP_LINKS_APIPATH}/api/Link/GenerateURL`) 
        .then((data) => {
          // this.personData.url = data.data.url
          this.$set(this.personData, 'url', data.data.url)

          // this.$forceUpdate
          // this.personData.url = this.url

          console.log(data.data.url);
      }).catch(error => {
          console.log(error.response.data);          
        })
    }, 
    clear(){
      this.personData = ""
    },
    copyText() {
      this.items.push(this.personData.url);
      console.log('copy url',this.items[0])      
    },
    cancel() { 
      this.$bvModal.hide('AddEditPublicLink');
     },

  },
};
</script>
