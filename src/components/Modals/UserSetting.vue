<template>
  <b-modal
    id="UserSetting"
    class="modal-content"
    body-text-variant="warning"
    centered
    title="User Setting"
    header-bg-variant="info"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    footer-bg-variant="bgmodal"
  >
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
    <div class="modal-popout-bg p-3">
      <div class="d-flex justify-content-between align-items-center">
        <p class="text-center m-0">
          Display language
        </p>
        <select
          class="form-select form-select-sm" 
          aria-label="Default select example"
        >
          <option selected>
            English
          </option>
        </select>
      </div>
            
      <hr class="">



      <div class="d-flex justify-content-between ">
        <div class="d-flex flex-column justify-content-center ">
          <div
            class="d-flex justify-content-between mb-5"
          >
            <span class="text-dark">
              Password
            </span>
            <p class="mx-5 m-0 text-gray">
              ********
            </p>
          </div>
            
          <div
            class="d-flex justify-content-between mb-5"
          >
            <span class="text-dark">
              Confirm Password
            </span>
            <p class="mx-5 m-0 text-gray">
              ********
            </p>
          </div>
        </div>
        <a
          href="#"
          class="text-decoration-none ml-auto text-primary"
        >Change Password</a>
      </div>
    </div>

    <!-- </form> -->
    <template
      #modal-cancel
      variant="outline-primary"

      class="cancel-btn"
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
name: "UserSetting",
data() {
     return {
      showModal: false
     }
   },
   methods: {
     show() {
      this.showModal = true
     },
     hide(){
      this.showModal = false
     }
   }
}
</script>

<style>

</style>
