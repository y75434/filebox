<template>
  <b-modal
    id="NewGroupProperties"
    class="modal-content modal-popout-bg"
    centered
    :title="title"
    body-text-variant="warning"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    footer-bg-variant="white"
    body-bg-variant="bgmodal"

    @ok="Ok"
  >
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
    <div class="modal-popout-bg p-0">
      <div
        class="p-3 w-100 d-flex align-items-center justify-content-between mb-2"
      >
        <label for="Username">User name</label><input
          type="Username"
          id="Username"
          class="form-control inline-block width-320"
          disabled
        >
      </div>
      <div
        class="p-3 w-100 d-flex align-items-center justify-content-between mb-2"
      >
        <label for="Username">Description</label><input
          type="Username"
          id="Username"
          class="form-control inline-block width-320"
        >
      </div>




      <hr class="">


      <div class="p-2 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <span>Select group member</span>
          <img
            src="@/assets/images/cmd/Group.png"
            class="ms-2 icon20px"
          >
        </div>
        <div class="border-0">
          <div class="d-flex ">
            <input
              v-model="filter"
              type="text"
              placeholder="Name, Fullname"
              class="form-control "
            >
                  
            <button
              :disabled="!filter"
              @click="filter = ''"

              type="button"
              id="button-addon2"
              class="btn btn-blue"
            >
              <img
                src="@/assets/images/icon/magnifier.png"
                class="nav-icon"
              >
            </button>
          </div>
        </div>
      </div>

      <div class="row p-4">
        <div class="col-8 ">
          <table
            class="table border h-100 overflow-auto"
            :filter="filter"
          >
            <thead>
              <tr>
                <th scope="col">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    >
                    <label
                      class="form-check-label"
                      for="flexCheckDefault"
                    >
                      <img
                        src="@/assets/images/icon/Union.png"
                        class="icon-16px"
                      >
                    </label>
                  </div>
                </th>
                <th scope="col">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    >
                    <label
                      class="form-check-label"
                      for="flexCheckDefault"
                    >
                      <img
                        src="@/assets/images/icon/admin-solid.png"
                        class="icon-16px"
                      >
                    </label>
                  </div>
                </th>
                <th scope="col">
                  Name
                </th>
                <th scope="col">
                  Full name
                </th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr>
                <th scope="row">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  >
                </th>
                <td>
                  <input
                    type="checkbox" 
                    class="form-check-input"
                  >
                </td>
                <td>Otto</td>
                <td>Rachel Lee</td>
                <td />
              </tr>
              <tr>
                <th scope="row">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  >
                </th>
                <td>
                  <input
                    type="checkbox" 
                    class="form-check-input"
                  >
                </td>

                <td>Thornton</td>
                <td>Rachel Lee</td>
                <td />
              </tr>
              <tr>
                <th scope="row">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  >
                </th>
                <td>
                  <input
                    type="checkbox" 
                    class="form-check-input"
                  >
                </td>
                <td>Rachel Lee</td>
                <td>Rachel Lee</td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>

        <ul class="list-group col-4 p-0  bg-white border overflow-auto">
          <li class="list-group-item  d-flex align-items-center border-0" />
          <li class="list-group-item bg-white  border-0">
            <button
              type="button"
              class="table-btn  d-flex align-items-center"
            >
              <img
                src="@/assets/images/icon/admin-solid.png"
                class="icon-16px"
              >
              David
              <img
                src="@/assets/images/cmd/del.png"
                class="icon-20px"
              >
            </button>
          </li>
        </ul>
      </div>


           

      <div class="d-flex justify-content-end p-3">
        <p>
          <span>Total
          </span>
          <span class=" fw-bold">500</span>
        </p>
        <p class="ms-3">
          <span class="dark-blue fw-bold">4
          </span>
          <span>Selected</span>
        </p>
      </div>
    </div>
    <!-- </form> -->

    <template #modal-ok>
      Save
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "NewGroupProperties",
  props: { title: { type: String, default: "New Group Properties" } },

  data() {
    return {
      showModal: false,
      filter: null,
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

<style></style>
