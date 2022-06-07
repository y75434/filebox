<template>
  <b-modal
    id="ApplicationSettings"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="$t('GENERAL.APPLICATIONSETTINGS')"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    body-bg-variant="bgmodal"
    footer-bg-variant="white"
  >
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
    <div
      class="modal-popout-bg p-3"
      style="height:500px"
    >
      <ul
        class="nav nav-tabs"
        id="myTab"
        role="tablist"
      >
        <li
          class="nav-item"
          role="presentation"
        >
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#General"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            {{ $t("MODAL.GENERAL") }}
          </button>
        </li>
        <li
          class="nav-item"
          role="presentation"
        >
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            {{ $t("MODAL.LOGGING") }}
          </button>
        </li>
        <li
          class="nav-item"
          role="presentation"
        >
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            {{ $t("MODAL.EMAIL") }}
          </button>
        </li>
      </ul>
      <div
        class="tab-content height-400"
        id="myTabContent"
      >
        <div
          class="tab-pane fade show active"
          id="General"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div class="col-12 py-3">
            <div class="form-check align-items-center">
              <label
                class="form-check-label align-items-center d-flex"
                for=""
              >
                {{ $t("MODAL.PASSWORDSWILLEXPIRE") }} <input
                  v-model="Settings.general.passwordExpireAfter"
                  type="text"
                  class=" form-control w-25 mx-2"
                >{{ $t("MODAL.DAYS") }}

              </label>
            </div>
            <div class="form-check">
              <label
                class="form-check-label align-items-center d-flex"
                for=""
              >
                {{ $t("MODAL.WILLBELOCKEDOUT") }}
                <input
                  v-model="Settings.general.lockedAfter"
                  type="text"
                  class=" form-control w-25 mx-2"
                >{{ $t("MODAL.INVALIDLOGIN") }}


              </label>
            </div>
            <div class="form-check">
              <label
                class="form-check-label align-items-center d-flex"
                for=""
              >
                {{ $t("MODAL.MAXIMUMPUBLICLINKAGE") }}
                <input
                  v-model="Settings.general.maximumLinkPeriod"
                  type="text"
                  class=" form-control w-25 mx-2"
                >{{ $t("MODAL.DAYS") }}
              </label>
            </div>
            <div
              class="form-check align-items-center
"
            >
              <label
                class="form-check-label align-items-center d-flex"
                for=""
              >
                {{ $t("MODAL.MAXIMUMPUBLICLINKHITS") }}
                <input
                  v-model="Settings.general.maximumLinkHits"
                  type="text"
                  class=" form-control w-25 mx-2"
                >
              </label>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div class="mt-3">
            <p class="my-1">
              {{ $t("MODAL.LOGEVENTS") }}
            </p>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="All"
              >
              <label
                class="form-check-label"
                for="All"
              >
                {{ $t("GENERAL.ALL") }}

              </label>
            </div>

            <hr class="mt-1">
            <div class="d-flex flex-column align-items-center">
              <div class="col-10 d-flex justify-content-between">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Login"
                    value="Login"
                  >
                  <label
                    class="form-check-label"
                    for="Login"
                  >{{ $t("GENERAL.LOGIN") }}</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Extract"
                    value="Extract"
                  >
                  <label
                    class="form-check-label"
                    for="Extract"
                  >{{ $t("GENERAL.EXTRACT") }}</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Delete"
                    value="Delete"
                  >
                  <label
                    class="form-check-label"
                    for="Delete"
                  >{{ $t("HOME.DELETE") }}</label>
                </div>
              </div>
              <div class="col-10 d-flex justify-content-between">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Failure"
                    value="Failure"
                  >
                  <label
                    class="form-check-label"
                    for="Failure"
                  >{{ $t("MODAL.FAILURE") }}</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Download"
                    value="Download"
                  >
                  <label
                    class="form-check-label"
                    for="Download"
                  >{{ $t("HOME.DOWNLOAD") }}</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Copy"
                    value="Copy"
                  >
                  <label
                    class="form-check-label"
                    for="Copy"
                  >{{ $t("HOME.COPY") }}</label>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <p class="fw-bold">
              {{ $t("MODAL.LOGSIZE") }}
            </p>
            <div class="col-12">
              <div class="d-flex align-items-center">
                <label
                  class="form-check-label align-items-center d-flex"
                  for=""
                >
                  {{ $t("MODAL.MAXIMUMLOGSIZE") }}  
                  <input
                    type="text"
                    class=" form-control mx-3 w-25"
                    v-model="Settings.log.maximumRecord"
                  >{{ $t("MODAL.EVENTS") }}

                </label>
              </div>
              <p class="py-2">
                {{ $t("MODAL.WHENMAXIMUMLOGSIZEISREACHED") }}
              </p>
              <div class="d-flex align-items-center">
                <label
                  class="form-check-label align-items-center d-flex"
                  for=""
                >
                  {{ $t("MODAL.DELETEEVENTSOLDERTHAN") }}
                  <input
                    type="text"
                    class=" form-control mx-3 w-25"
                    v-model="Settings.log.maximumKeepingDays"
                  > {{ $t("MODAL.DAYS") }}



                </label>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <button
                type="button"
                class="cancel-btn btn  me-2"
              >
                {{ $t("MODAL.CLEARLOG") }}
              </button>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div class="form-check py-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="Sendemailnotifications"
              v-model="Settings.smtp.isEnabled"
            >
            <label
              class="form-check-label"
              for="Sendemailnotifications"
            >
              {{ $t("MODAL.SENDEMAILNOTIFICATIONS") }}

            </label>
          </div>

          <hr class="">


          <div class="w-100 d-flex align-items-center justify-content-between mb-2">
            <label
              for="Fromemailaddress"
              class=""
            >{{ $t("MODAL.FROMEMAILADDRESS") }}</label>
            <input
              type="email"
              class="form-control inline-block width-270"
              id="Fromemailaddress"
              v-model="Settings.smtp.address"
            >
          </div>


          <div class="w-100 d-flex align-items-center justify-content-between mb-2">
            <label
              for="Email"
              class="col-form-label"
            >{{ $t("MODAL.SMTPHOST") }}
            </label>
                  
                  
            <select
              class="form-select width-270"
              aria-label="Default select example"
              v-model="Settings.smtp.host"
            >
              <option
                selected        
              >
                {{ $t("MODAL.ANONYMOUS") }}
              </option>
            </select>
          </div>


          <div class="w-100 d-flex align-items-center justify-content-between mb-2">
            <label
              for="SMTPport"
              class=""
            >{{ $t("MODAL.SMTPPORT") }}</label>
            <input
              type="email"
              class="form-control inline-block width-150"
              id="SMTPport"
              v-model="Settings.smtp.port"
            >
          </div>


          <div class="w-100 d-flex align-items-center justify-content-between mb-2">
            <label
              for="SMTPauthentication"
              class="col-form-label"
            >{{ $t("MODAL.SMTPAUTHENTICATION") }}</label>
                  
                  
            <select
              class="form-select  width-270"  
              v-model="Settings.smtp.authType"
              aria-label="Default select example"
            >
              <option selected>
                {{ $t("MODAL.ANONYMOUS") }}
              </option>
            </select>
          </div>



          <div class="w-100 d-flex align-items-center justify-content-between mb-2">
            <label
              for="Username"
              class="form-label"
            >{{ $t("MODAL.USERNAME") }}</label>
            <input
              type="Password"
              class="form-control width-270"
              id="Username"
              v-model="Settings.smtp.user"
              disabled
            >
          </div>
          <div class="w-100 d-flex align-items-center justify-content-between mb-2">
            <label
              for="Password"
              class="form-label"
            >{{ $t("GENERAL.PASSWORD") }}</label>
            <input
              type="Password"
              class="form-control width-270"
              id="Password"
              disabled
              v-model="Settings.smtp.password"
            >
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="UseSSL"
              v-model="Settings.smtp.isEnabledSSL"
            >
            <label
              class="form-check-label"
              for="UseSSL"
            >
              {{ $t("MODAL.USESSL") }}

            </label>
          </div>
          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="cancel-btn btn  me-2"
            >
              {{ $t("MODAL.TESTEMAIL") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- </form> -->
    <template
      #modal-cancel
      variant="outline-primary"
      class="cancel-btn"
    >
      {{ $t("GENERAL.CANCEL") }}
    </template>

    <template #modal-ok>
      {{ $t("GENERAL.OK") }}
    </template>
  </b-modal>
</template>

<script>
import cmqRequest from '@/http/cmqRequest'

export default {
  name: "ApplicationSettings",
  props: { title: { type: String, default: "Application Settings" } },

  data() {
    return {
      showModal: false,
      smtpAuthTypes:[],
      Settings:{     
        general: {
          passwordExpireAfter: 30,
          lockedAfter: 5,
          maximumLinkPeriod: 5,
          maximumLinkHits: 5
        },
        log: {
          maximumRecord: 30000,
          maximumKeepingDays: 30
        },
        smtp: {
          isEnabled: false,
          address: "",
          host: "",
          port: "",
          authType: 1,
          user: "",
          password: "",
          isEnabledSSL: true
        }
      }
    };
  },
  methods: {
    start() {
      this.getSettings()
      this.getSMTPAuthType()
      
    },
    getSMTPAuthType(){
      cmqRequest.get(`${process.env.VUE_APP_SETTING_APIPATH}/Settings/SMTPAuthenticationTypes`)
        .then((data) => {  
          this.smtpAuthTypes = data.data;
    
          console.log(this.smtpAuthTypes);
         
        }).catch(() => {
      })
    },
    getSettings(){
      cmqRequest.get(`${process.env.VUE_APP_SETTING_APIPATH}/Settings`)
        .then((data) => {  
          this.Settings = data.data;
    
          console.log(this.Settings);
         
        }).catch(() => {
      })
    },
    patch(){
      const data = JSON.stringify(this.Settings)
            
      console.log('data',data);         


      cmqRequest.patch(`${process.env.VUE_APP_SETTING_APIPATH}/Settings`,
      data)
      .then(() => { 
        this.$swal.fire({ title: 'success', icon: 'success' })


      }).catch(error => {
        this.$swal.fire({ title: error.response.data, icon: 'error' })
    
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
  },
};
</script>
