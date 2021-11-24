<template>
  <b-modal
    id="CreateFolder"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.CREATEFOLDER')"
    header-bg-variant="bgheader"
    footer-bg-variant="bgmodal"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    body-bg-variant="bgmodal"
  >
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
    <div class="modal-popout-bg p-3">
      <p class=" m-0">
        {{ $t("MODAL.ENTERANAMEFORTHENEWFOLDER") }}
      </p>
      <input
        type="email"
        class="form-control"
        :placeholder="$t(
          'MODAL.PLEASEFILLOUTTHISFIELD')"
      >
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
