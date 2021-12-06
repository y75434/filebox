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
            >11/15/2021</label>
          </div>
          <div class="w-50 d-flex align-items-center mb-2">
            <label
              for="Type"
              class="col-form-label me-5 fw-bold"
            >{{ $t("GENERAL.TIME") }}</label>
            <label
              for=""
              class="col-form-label"
            >{{ tabData.datetime }}</label>
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
export default {
  name: "EventProperties",
  props: { 
    title: { type: String, default: "Event Properties" } ,
    tabData: { type: Object , default() { return {} }}

  },

  data() {
    return {
      showModal: false,
      personData: this.tabData
    };
  },
  
  methods: {
    // getUser (id) {
    //   const url = `${id}`
    //   this.$http.get(url).then(res => {
    //     this.user = res.data.data   
    //   }).catch((err) => {
    //     console.log(err);
    //   })
    // },
    addLog(id) {  



      this.axios.post(`${process.env.APIPATH}/Log/GetLogProperty/${id}`)
        .then((data) => {

          // {
          //   "logId": "a186c7ca-f0be-49f6-b9da-0c0ffe8ac2d1",
          //   "actionTypeId": "bddb88fd-ea7c-4997-9f74-f3d1be2de263",
          //   "actionType": "nameone2",
          //   "datetime": "2021-11-15T08:54:28.022107",
          //   "user": "userreadone",
          //   "description": "this is for read"
          // }

        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      },
    // update() {
    //   let url = `product`
    
    //   this.$http.post(url, this.user).then(() => {
    //     this.$emit('update')
        
    //   }).catch(err => {
    //     console.log(err);
        
    //   })
    // },
    handleSubmit() {
      // this.$nextTick(() => {
      this.showModal = false;
      // });
    },
  },
};
</script>

<style></style>
