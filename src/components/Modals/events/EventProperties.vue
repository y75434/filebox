<template>
  <!-- :form="form" -->
  <b-modal
    id="EventProperties"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.EVENTPROPERTIES')"
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
    <div class="modal-popout-bg p-0">
      <form class=" p-3">   
        <div class="d-flex">
          <div class="w-50 d-flex align-items-center  mb-2">
            <label
              for="Type"
              class="col-form-label me-5 fw-bold"
            >{{ $t("GENERAL.TYPE") }}
            </label>
            <label
              for=""
              class="col-form-label"
            >{{ tabData.actionType }}
            </label>
          </div>
          <div class="w-50 d-flex align-items-center  mb-2">
            <label
              for="Type"
              class="col-form-label me-5 fw-bold"
            >{{ $t("GENERAL.USER") }}
            </label>
            <label
              for=""
              class="col-form-label"
            >{{ tabData.user }}
            </label>
          </div>
        </div>
        <div class="d-flex">
          <div class="w-50 d-flex align-items-center  mb-2">
            <label
              for="Type"
              class="col-form-label me-5 fw-bold"
            >{{ $t("GENERAL.DATE") }}</label>
            <label
              for=""
              class="col-form-label"
            >{{ formateDateStr(tabData.datetime) }}</label>
          </div>
          <div class="w-50 d-flex align-items-center mb-2">
            <label
              for="Type"
              class="col-form-label me-5 fw-bold"
            >{{ $t("GENERAL.TIME") }}</label>
            <label
              for=""
              class="col-form-label"
            >{{ formateTimeStr(tabData.datetime) }}</label>
          </div>
        </div>
      </form>
      <!-- </div> -->
            
      <hr class="">
      <h5 class="text-dark">
        {{ tabData }}
      </h5>


      <div class="d-flex flex-column justify-content-between p-3">
        <label for="">{{ $t("MODAL.DESCRIPTION") }}

        </label>

        <div class="bg-white modal-event p-1">
          <p
            class=" text-dark"
          >
            {{ tabData.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- </form> -->
    <template
      #modal-cancel
      variant="danger"
    >
      {{ $t("GENERAL.CANCEL") }}
    </template>

    <template #modal-ok>
      {{ $t("GENERAL.OK") }}
    </template>
  </b-modal>
</template>

<script>
import cmqRequest from "@/http/cmqRequest"

export default {
  name: "EventProperties",
  props: { 
    title: { type: String, default: "Event Properties" } ,
    tabData: { type: Object , default() { return {} }}
  },
  data() {
    return {
      personData: this.tabData
    };
  },
  methods: { 
    addLog(id) {  
      cmqRequest.post(`${process.env.APIPATH}/Log/GetLogProperty/${id}`)
        .then((data) => {

        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      },
    handleSubmit() {
      // this.$nextTick(() => {
      this.showModal = false;
      // });
    },
     formateDateStr(dateStr) {
      if (dateStr === undefined || dateStr === null || dateStr === '') {
        return ''
      } else {
        const date = new Date(dateStr + 'Z'); //.000+0000代表0时区
        return `${(date.getDate()).toString().padStart(2, 0)}/${(date.getMonth() + 1).toString().padStart(2, 0)}/${date.getFullYear()}`
      }
    },

    formateTimeStr(dateStr) {
      if (dateStr === undefined || dateStr === null || dateStr === '') {
        return ''
      } else {
        const date = new Date(dateStr + 'Z'); //.000+0000代表0时区
        return `${(date.getHours()).toString().padStart(2, 0)}:${(date.getMinutes()).toString().padStart(2, 0)}:${(date.getSeconds()).toString().padStart(2, 0)} ${date.getHours() < 12 ? 'AM' : 'PM'}`
      }
    },
  },
};
</script>

