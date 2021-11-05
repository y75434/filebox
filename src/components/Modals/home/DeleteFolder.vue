<template>
  <b-modal
    id="DeleteFolder"
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
    <div class="modal-popout-bg p-0" />

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
  name: "DeleteFolder",
  props: { title: { type: String, default: "Delete Folder" } },

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
