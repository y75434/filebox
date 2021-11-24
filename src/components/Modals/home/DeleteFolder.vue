<template>
  <b-modal
    id="DeleteFolder"
    class="modal-content justify-content-center d-flex"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.DELETEFOLDER')"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    footer-bg-variant="bgmodal"
    body-bg-variant="bgmodal"
  >
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
    <div class="modal-popout-bg p-5 justify-content-center d-flex flex-column ">
      <img
        class="mx-auto  m-0"
        src="@/assets/images/cmd/alarm@2x.png"
      >
      <h5 class="text-center m-0">
        {{ $t("MODAL.SURETODELETE") }}
      </h5>
           
            
      <h5 class="text-center my-2 font-weight-bold">
        “Folder One (2)”
      </h5>

          
      <input
        type="text"
        class="form-control"
      >
    </div>

    <!-- </form> -->
    

    <template #modal-footer>
      <div class="w-100 justify-content-center d-flex">
        <button
          type="button"
          class="sm-btn cancel-btn mx-3 btn justify-content-center d-flex"
        >
          {{ $t("GENERAL.CANCEL") }}
        </button>

        <button
          type="button"
          class="sm-btn btn btn-danger text-white justify-content-center d-flex"
        >
          {{ $t("HOME.DELETE") }}
        </button>
      </div>
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
