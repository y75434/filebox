<template>
  <b-modal
    id="EditPublicLink"
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
        <div class="w-100 d-flex align-items-center justify-content-between mb-2">
          <label
            for="Name in link"
            class=""
          >Name in link</label>
          <input
            type="Name in link"
            class="form-control inline-block width-320"
            id="Name in link"
          >
        </div>
      </form>
      <!-- </div> -->
            
      <hr class="">


      <div class="d-flex flex-column justify-content-between p-3">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="Usermustchangepasswordatnexttime"
          >
          <label
            class="form-check-label"
            for="Usermustchangepasswordatnexttime"
          >
            Open linked file in the brower
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
            Link expires <input
              type="text"
              class="mx-2 form-control w-25"
            >in days

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
            Link can be opened only <input
              type="text"
              class="mx-2 form-control w-25"
            >times

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
            Protect link with password
          </label>
          <div
            class="w-100 d-flex align-items-center justify-content-between mb-2"
          >
            <label
              for="Password"
              class="form-label"
            >Password</label><input
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
            >Confirm password</label><input
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
          >Public link</label>
          <div class="d-flex justify-content-between">
            <input
              type="password"
              class="form-control w-75"
              id="Public link"
            >
            <b-button
              class="bg-green border-0"
            >
              Copy link
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
          Cancel
        </b-button>
        <div class="">
          <b-button
            class="bg-green border-0 mx-2"
            @click="Reset('forget')"
          >
            Reset
          </b-button>
          <b-button
            variant="primary"
            @click="Update()"
          >
            Update
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
  props: { title: { type: String, default: "Edit Public Link" } },

  data() {
    return {
      showModal: false,
    };
  },
  methods: {
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
