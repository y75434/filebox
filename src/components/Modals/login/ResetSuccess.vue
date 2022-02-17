<template>
  <b-modal
    id="ResetSuccess"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.RESETSUCCESS')"
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
      <h3 class="dark-blue">
        {{ $t("MODAL.RESETSUCCESS") }}
      </h3>
      <h5 class="fw-bold">
        {{ $t("MODAL.PASSWORDHASBEENRESET") }}
      </h5>

      <a
        href="#"
        class="mx-auto"
      >https://www.CyberMetaQ.com/login
      </a>
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
