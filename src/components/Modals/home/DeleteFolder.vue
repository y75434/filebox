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
    hide-footer
  >
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
    <div class="modal-popout-bg p-5 justify-content-center d-flex flex-column">
      <img
        class="mx-auto  m-0"
        src="@/assets/images/cmd/alarm@2x.png"
      >
      <h5 class="text-center m-0">
        Are you sure you want to delete this folder?
      </h5>
           
            
      <h5 class="text-center my-2 font-weight-bold">
        “Folder One (2)”
      </h5>

          
      <input
        type="text"
        class="form-control"
      >




      <div class="w-100 d-flex justify-content-center mt-5">
        <button
          type="button"
          class="sm-btn cancel-btn mx-3 px-5 btn justify-content-center d-flex"
        >
          Cancel
        </button>

        <button
          type="button"
          class="sm-btn px-5 btn btn-danger text-white justify-content-center d-flex "
        >
          Delete
        </button>
      </div>
    </div>

    <!-- </form> -->
    <!-- <template
      #modal-cancel
      variant="outline-primary"
      class="cancel-btn"
    >
      Cancel
    </template>

    <template #modal-ok>
      ok
    </template> -->
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
