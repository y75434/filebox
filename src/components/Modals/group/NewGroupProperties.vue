<template>
  <b-modal
    id="NewGroupProperties"
    class="modal-content"
    centered
    :title="title"
    header-bg-variant="primary"
    header-text-variant="light"
    @ok="save"
  >
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
    
    <div
      class="p-3 w-100 d-flex align-items-center justify-content-between mb-2"
    >
      <label for="Username">User name</label><input
        type="Username"
        id="Username"
        class="form-control inline-block width-320"
      >
    </div>
    <div
      class="p-3 w-100 d-flex align-items-center justify-content-between mb-2"
    >
      <label for="Username">User name</label><input
        type="Username"
        id="Username"
        class="form-control inline-block width-320"
      >
    </div>


    <hr class="">


              

    <div class="d-flex align-items-center justify-content-between">
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
            type="text"
            placeholder="Please fill out this field"
            class="form-control h-100"
          >
                  
          <button
            type="button"
            id="button-addon2"
            class="btn btn-blue"
          >
            Button
          </button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-8 p-3">
        <table class="table border">
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
                Fulll name
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
            </tr>
          </tbody>
        </table>
      </div>

      <ul class="list-group border-0 col-4 p-3  border">
        <li class="list-group-item  bg-white d-flex align-items-center border-0" />
        <li class="list-group-item bg-white  border-0">
          <button
            type="button"
            class="table-btn btn  d-flex align-items-center"
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
