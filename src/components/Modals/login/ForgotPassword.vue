<template>
  <b-modal
    id="ForgotPassword"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.FORGOTPASSWORD')"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    body-bg-variant="bgmodal"
    footer-bg-variant="bgmodal"
  >
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
    <div class="modal-popout-bg p-3">
      <h3 class="text-center dark-blue">
        {{ $t("GENERAL.FORGOTPASSWORD") }}
      </h3>
      <h5 class="text-center fw-bold">
        {{ $t("MODAL.SENDYOUANEMAIL") }}
      </h5>

      <div class="mb-3">
        <label
          for="exampleInputEmail1"
          class="form-label"
        >{{ $t("MODAL.EMAIL") }}</label>
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
      {{ $t("GENERAL.CANCEL") }}
    </template>

    <template #modal-ok>
      {{ $t("MODAL.REQUESTEMAILSENT") }}
    </template>
  </b-modal>
</template>

<script>

export default {
  name: "CreateFolder",
  props: { title: { type: String, default: "Forgot Password" } },

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
