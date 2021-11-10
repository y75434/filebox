<template>
  <b-modal
    id="UploadFiles"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="title"
    header-bg-variant="info"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    hide-footer
  >
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
    <div class="modal-popout-bg p-0">
      <p class="m-0">
        <img src="@/assets/images/cmd/upload@2x.png">
        Select files to be uploaded
      </p>

      <div class="bg-white p-5 text-center">
        <p
          class="m-5 hr-gray"
        >
          Drag and drop files and folders here.
        </p>
      </div>
      <div class="w-100 d-flex my-2">
        <button
          type="button"
          class="cancel-btn btn me-2"
        >
          Add files
        </button>
        <button
          type="button"
          class="cancel-btn btn me-2 "
        >
          Add folder
        </button>
        <button
          type="button"
          class="cancel-btn btn me-2"
        >
          Remove
        </button>

        <button
          type="button"
          class="cancel-btn btn me-2"
        >
          Clear
        </button>
        <button
          type="button"
          class="modal-btn btn me-2"
        >
          Upload
        </button>
      </div>
    </div>
   


    <!-- </form> -->
    
  </b-modal>
</template>

<script>
export default {
  name: "UploadFiles",
  props: { title: { type: String, default: "Upload Files - Root Folder" } },

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
