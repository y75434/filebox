<template>
  <!-- :form="form" -->
  <b-modal
    id="EventProperties"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="title"
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
            >Type</label>
            <label
              for=""
              class="col-form-label"
            >Preview</label>
          </div>
          <div class="w-50 d-flex align-items-center  mb-2">
            <label
              for="Type"
              class="col-form-label me-5 fw-bold"
            >User</label>
            <label
              for=""
              class="col-form-label"
            >Admin</label>
          </div>
        </div>
        <div class="d-flex">
          <div class="w-50 d-flex align-items-center  mb-2">
            <label
              for="Type"
              class="col-form-label me-5 fw-bold"
            >Date</label>
            <label
              for=""
              class="col-form-label"
            >11/15/2021</label>
          </div>
          <div class="w-50 d-flex align-items-center mb-2">
            <label
              for="Type"
              class="col-form-label me-5 fw-bold"
            >Time</label>
            <label
              for=""
              class="col-form-label"
            >09:21:00 PM</label>
          </div>
        </div>
      </form>
      <!-- </div> -->
            
      <hr class="">


      <div class="d-flex flex-column justify-content-between p-3">
        <label for="">Description
        </label>

        <div class="bg-white modal-event p-1">
          <p
            class=" text-dark"
          >
            Path: [1. Root Folder]:\Folder Two\Test Previewed File: Sand Castle - Quincas
            Moreira.mp3 Previewer: MediaPlayer Browser: Chrome 95.0 IP:
          </p>
        </div>
      </div>
    </div>

    <!-- </form> -->
    <template
      #modal-cancel
      variant="danger"
    >
      Cancel
    </template>

    <template #modal-ok>
      ok
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
    getUser (id) {
      const url = `${id}`
      this.$http.get(url).then(res => {
        this.user = res.data.data   
      }).catch((err) => {
        console.log(err);
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

<style></style>
