<template>
  <b-modal
    id="UploadFiles"
    class="modal-content radius"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.UPLOADFILES')"
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
    <div class="modal-popout-bg  p-0">
      <p class="m-0">
        <img src="@/assets/images/cmd/upload@2x.png">
        {{ $t("MODAL.SELECTFILESUPLOADED") }}
      </p>

      <div class="bg-white p-5 text-center">
        <p
          class="m-5 hr-gray"
        >
          {{ $t("MODAL.DRAGFILE") }}
        </p>
      </div>
    </div>
   

    <template #modal-footer="{ Addfiles, Addfolder, Remove, Clear, Upload }">
      <div class="d-flex w-100 justify-content-between">
        <div class="">
          <b-button
            class="cancel-btn mx-1"
            @click="Addfiles()"
          >
            {{ $t("GENERAL.ADDFILES") }}
          </b-button>
          <b-button
            class="cancel-btn mx-1"
            @click="Addfolder()"
          >
            {{ $t("GENERAL.ADDFOLDER") }}
          </b-button>
          <b-button
            class="cancel-btn mx-1"
            @click="Remove()"
          >
            {{ $t("GENERAL.REMOVE") }}
          </b-button>
          <b-button
            class="cancel-btn mx-1"
            @click="Clear()"
          >
            {{ $t("GENERAL.CLEAR") }}
          </b-button>
        </div>

         
        <b-button
          variant="primary"
          @click="Upload()"
        >
          {{ $t("HOME.UPLOAD") }}
        </b-button>
      </div>
    </template>

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
