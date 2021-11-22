<template>
  <b-modal
    id="ResetNewPassword"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="title"
    header-bg-variant="bgheader"
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
        {{ $t("GENERAL.RESETNEWPASSWORD") }}
      </h3>

      <div class="mb-3">
        <label
          for="Newpassword"
          class="form-label"
        >{{ $t("GENERAL.NEWPASSWORD") }}</label>
        <input
          type="Newpassword"
          class="form-control"
        >
      </div>

      <div class="mb-3">
        <label
          for="Newpassword"
          class="form-label"
        >{{ $t("GENERAL.CONFIRMPASSWORD") }}</label>
        <input
          type="Newpassword"
          class="form-control"
        >
      </div>

      <div class="w-100 d-flex justify-content-center mt-5">
        <button
          type="button"
          class="modal-btn px-5 btn  justify-content-center d-flex btn-lg"
        >
          {{ $t("GENERAL.UPDATEPASSWORD") }}
        </button>
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
      this.showModal = false;
      // });
    },
  },
};
</script>
