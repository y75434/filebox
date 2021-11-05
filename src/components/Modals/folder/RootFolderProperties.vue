<template>
  <b-modal
    id="RootFolderProperties"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="title"
    header-bg-variant="info"
    cancel-variant="outline-secondary"
    ok-variant="primary"

    size="xl"
  >
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
    <div class="modal-popout-bg ">
      <div
        class="modal-body bg-gray p-3"
      >
        <div class="w-100 d-flex align-items-center justify-content-between mb-2">
          <div class="w-50 d-flex align-items-center justify-content-center">
            <label
              for="Foldername"
              class="m-2"
            >Folder name</label>
            <input
              type="Name"
              class="form-control inline-block width-320"
              id="Name"
              placeholder="Design Team"
              disabled
            >
          </div>
          <div class="w-50 d-flex align-items-center justify-content-center">
            <label
              for="Description"
              class="m-2"
            >Description</label>
            <input
              type="Description"
              class="form-control inline-block width-320"
              id="Description"
              placeholder=""
            >
          </div>
        </div>
            


        <div class="row p-5 modal-sidebar">
          <div class="col-4 h-100 ">
            <div class="bg-white h-100 border">
              <ul class="list-group border-0">
                <li class="list-group-item d-flex align-items-center border-0">
                  <img
                    src="@/assets/images/file/single folder@2x.png"
                    class="icon32px"
                  >
                  <p class="text-dark m-0">
                    3. Another Root Folder
                  </p>
                </li>

                <li class="list-group-item d-flex align-items-center border-0">
                  <img
                    src="@/assets/images/file/folder@2x.png"
                    class="icon32px px-1"
                  >
                  <p class="text-dark m-0">
                    Subfolder
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-8 ">
            <div
              class="d-flex flex-column height-70px"
            >
              <h5 class="m-0 fw-bold">
                Access Control for
              </h5>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <img
                    src="@/assets/images/file/single folder@2x.png"
                    class="icon32px"
                  >
                  <p class="fw-bold m-0">
                    3. Another Root Folder
                  </p>
                </div>
                
                <div class=" form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  >
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >Inherit from parent</label>
                </div>
              </div>
            </div>

            <div class="row modal-selectuser">
              <ul class="list-group d-flex flex-column justify-content-between bg-white col-3 p-0 h-100 border">
                <div class="">
                  <li class="form-check list-group-item border-0 p-0">
                    <input
                      type="text"
                      placeholder="Selected Groups/users"
                      class="form-control"
                      id=""
                    >
                  </li>

                  <li class="list-group-item border-0 p-0">
                    <div class="form-check justify-content-center align-items-center p-0 w-100 d-flex">
                      <input
                        class="form-check-input m-0"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      >
                      <img
                        src="@/assets/images/icon/Union.png"
                        class="icon24px"
                      >
                      <label
                        class="form-check-label"
                        for="flexCheckDefault"
                      >
                        <!-- <p class="text-dark m-0"> -->
                        Design group

                      <!-- </p> -->
                      </label>
                    </div>
                  </li>
                </div>
              
                <li class="list-group-item d-flex justify-content-end border p-2">
                  <p>
                    <span>Total
                    </span>
                    <span class=" fw-bold">500</span>
                  </p>
                </li>
              </ul>
              <ul class="list-group d-flex flex-column justify-content-between bg-white col-3 p-0 h-100 border">
                <div class="">
                  <li class="form-check list-group-item border-0 p-0">
                    <p
                      type="text"
                      class="form-control fw-bold"
                      id=""
                    >
                      Selected Groups/users
                    </p>
                  </li>

                  <li class="list-group-item border-0 p-0">
                    <div class="form-check justify-content-center align-items-center p-0 w-100 d-flex">
                      
                      <img
                        src="@/assets/images/icon/Union.png"
                        class="icon24px"
                      >
                      <label
                        class="form-check-label"
                        for="flexCheckDefault"
                      >
                        <!-- <p class="text-dark m-0"> -->
                        Design group

                      <!-- </p> -->
                      </label>
                    </div>
                  </li>
                </div>
                
                <li class="list-group-item d-flex justify-content-end border p-2">
                  <p class="ms-3 justify-content-end d-flex align-items-center">
                    <span class="dark-blue fw-bold">4
                    </span>
                    <span>Selected</span>
                  </p>
                </li>
              </ul>

              <div class="bg-white border col-6 p-0 h-100">
                <div
                  class="nav nav-tabs"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    class="nav-link w-50 active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Permissions
                  </button>
                  <button
                    class="nav-link w-50"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Files Setting
                  </button>
                </div>
                <div
                  class="tab-content"
                  id="nav-tabContent"
                >
                  <div
                    class="tab-pane fade show active justify-content-center flex-column d-flex align-items-center"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <li class="list-group-item w-50 border-0 p-0 justify-content-between d-flex">
                      <div class="justify-content-center align-items-center p-0  d-flex">
                        <label
                          class="form-check-label w-50"
                          for="flexCheckDefault"
                        >
                          <!-- <p class="text-dark m-0"> -->
                          Full

                          <!-- </p> -->
                        </label>
                      </div>
                      <div class="">
                        <input
                          class="form-check-input m-0"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        >
                      </div>
                    </li>
                    <li class="list-group-item w-50 border-0 p-0 justify-content-between d-flex">
                      <div class="justify-content-center align-items-center p-0  d-flex">
                        <label
                          class="form-check-label w-50"
                          for="flexCheckDefault"
                        >
                          <!-- <p class="text-dark m-0"> -->
                          Full

                          <!-- </p> -->
                        </label>
                      </div>
                      <div class="">
                        <input
                          class="form-check-input m-0"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        >
                      </div>
                    </li>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <p class="fw-bold">
                      Quata
                    </p>
                    <div
                      class="form-check"
                    >
                      <input
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        class="form-check-input"
                      >
                      <label
                        for="flexCheckDefault"
                        class="form-check-label"
                      > Limit disk space to</label>
                      <input
                        placeholder="enter code"
                        type="text"
                        id="promoCode"
                        class="form-control m-0"
                        value=""
                      >
                      <p class="fw-bold">
                        File Type
                      </p>
                      <div
                        class="form-check"
                      >
                        <input
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          class="form-check-input"
                        >
                        <label
                          for="flexCheckDefault"
                          class="form-check-label"
                        > Restrict file types
                        </label>
                      </div>
                      <div
                        class="d-flex width-350"
                      >
                        <div class="form-check">
                          <input
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            class="form-check-input"
                          >
                          <label
                            for="flexCheckDefault"
                            class="form-check-label"
                          > docx
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            class="form-check-input"
                          >
                          <label
                            for="flexCheckDefault"
                            class="form-check-label"
                          > pdf
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            class="form-check-input"
                          >
                          <label
                            for="flexCheckDefault"
                            class="form-check-label"
                          > pdf
                          </label>
                        </div>
                      </div>
                      <div class="d-flex">
                        <div class="form-check">
                          <input
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            class="form-check-input"
                          >
                          <label
                            for="flexCheckDefault"
                            class="form-check-label"
                          > docx
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            class="form-check-input"
                          >
                          <label
                            for="flexCheckDefault"
                            class="form-check-label"
                          > pdf
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            class="form-check-input"
                          >
                          <label
                            for="flexCheckDefault"
                            class="form-check-label"
                          > pdf
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   

    <!-- </form> -->
    <template
      #modal-cancel
      variant="danger"
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
  name: "RootFolderProperties",
  props: { title: { type: String, default: "Root Folder Properties" } },

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
    }

  },
};
</script>

