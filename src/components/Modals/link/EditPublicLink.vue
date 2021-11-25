<template>
  <b-modal
    id="EditPublicLink"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.EDITPUBLICLINK')"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    footer-bg-variant="white"
    body-bg-variant="bgmodal"
    @contextmenu="handler($event)"
  >
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
    <div class="modal-popout-bg p-0">
      <form class=" p-3">
        <div class="w-100 d-flex align-items-center justify-content-between mb-2">
          <label
            for="Name in link"
            class=""
          >{{ $t("MODAL.NAMEINLINK") }}</label>
          <input
            type="Name in link"
            class="form-control inline-block width-320"
            id="Name in link"
          >
        </div>
      </form>
      <!-- </div> -->
            
      <hr class="">


      <div class="d-flex flex-column justify-content-between p-3" @contextmenu="showMenu($event)">
        <div class="form-check" @contextmenu="operational($event)">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="Usermustchangepasswordatnexttime"
          >
          <label
            class="form-check-label"
            for="Usermustchangepasswordatnexttime"
          >
            {{ $t("MODAL.OPENLINKEDFILE") }}
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="Usercannotchangepassword"
          >
          <label
            class="form-check-label align-items-center d-flex"
            for=""
          >
            {{ $t("MODAL.LINKEXPIRES") }}<input
              type="text"
              class="mx-2 form-control w-25"
            >{{ $t("MODAL.DAYS") }}

          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="Usercannotchangepassword"
          >
          <label
            class="form-check-label align-items-center d-flex"
            for=""
          >
            {{ $t("MODAL.LINKCANBEOPENED") }}<input
              type="text"
              class="mx-2 form-control w-25"
            >{{ $t("GENERAL.TIMES") }}


          </label>
        </div>


        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="Changeuserpassword"
          >
          <label
            class="form-check-label"
            for="Changeuserpassword"
          >
            {{ $t("MODAL.PROTECTLINKWITH") }}

          </label>
          <div
            class="w-100 d-flex align-items-center justify-content-between mb-2"
          >
            <label
              for="Password"
              class="form-label"
            >{{ $t("GENERAL.PASSWORD") }}</label><input
              type="Password"
              id="Password"
              placeholder="******"
              class="form-control width-220"
            >
          </div>
          <div
            class="w-100 d-flex align-items-center justify-content-between mb-2"
          >
            <label
              for="Confirmpassword"
              class="form-label"
            >{{ $t("GENERAL.CONFIRMPASSWORD") }}
            </label><input
              type="Confirmpassword"
              id="Confirmpassword"
              placeholder="******"
              class="form-control width-220"
            >
          </div>
        </div>
                

        <hr class="">

        <div class="mb-3">
          <label
            for="Public link"
            class="form-label"
          >{{ $t("GENERAL.PUBLICLINK") }}</label>
          <div class="d-flex justify-content-between">
            <input
              type="password"
              class="form-control w-75"
              id="Public link"
            >
            <b-button
              class="bg-green border-0"
            >
              {{ $t("GENERAL.COPYLINK") }}
            </b-button>
          </div>
        </div>
      </div>
    </div>

    <template
      #modal-footer="{ Cancel, Reset, Update }"
    >
      <div class="d-flex w-100 justify-content-between">
        <b-button
          class="cancel-btn"
          @click="Cancel()"
        >
          {{ $t("GENERAL.CANCEL") }}
        </b-button>
        <div class="">
          <b-button
            class="bg-green border-0 mx-2"
            @click="Reset('forget')"
          >
            {{ $t("MODAL.RESET") }}
          </b-button>
          <b-button
            variant="primary"
            @click="Update()"
          >
            {{ $t("GENERAL.OK") }}
          </b-button>
        </div>
      </div>
      <ContextMenu ref="menuLink">
        <ul class="text-dark">   
          <li>
            <img
              src="@/assets/images/icon/user setting@2x.png"
              class="icon24px"
            >{{ $t("GENERAL.ATTRIBUTES") }}
          </li>
          <li @click="DeleteUser">
            <img
              src="@/assets/images/cmd/delete@2x-2.png"
              class="icon24px"
            >{{ $t("HOME.DELETE") }}
          </li>
        </ul>
      </ContextMenu>
      <delete-user ref="DeleteUser" />
    </template>
    <!-- </form> -->
  </b-modal>
</template>

<script>
import ContextMenu from '@/components/ContextMenu.vue';
import DeleteUser from '@/components/Modals/user/DeleteUser.vue';

export default {
  name: "EditPublicLink",
  props: { title: { type: String, default: "Edit Public Link" } },
  components:{ 
    DeleteUser,
    ContextMenu
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    handler(event) { event.preventDefault(); },
    operational(event) {
      event.preventDefault();
      event.stopPropagation();
      this.$refs.menuLink.open(event);
    }, 
    showMenu(event) {
      this.$refs.menuLink.open(event);
    },
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
