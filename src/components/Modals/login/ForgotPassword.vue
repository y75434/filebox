<template>
  <b-modal
    id="ForgotPassword"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="title"
    header-bg-variant="info"
    cancel-variant="outline-secondary"
    ok-variant="primary"
  >
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
    <div class="modal-popout-bg p-3">
      <h3 class="text-center dark-blue">
        Forgot Password
      </h3>
      <h5 class="text-center fw-bold">
        Enter your email address below, and we’ll send you an email allowing you to
        reset password.
      </h5>

      <div class="mb-3">
        <label
          for="exampleInputEmail1"
          class="form-label"
        >Email</label>
        <input
          type="email"
          class="form-control"
        >
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
      Request Email Sent
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "CreateFolder",
  props: { title: { type: String, default: "Create Folder" } },

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
      this.$emit.$bvModal.show('RequestEmailSent'); 

      this.showModal = false;
      // });
    },
  },
};
</script>
