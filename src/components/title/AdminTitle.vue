<template>
  <div class="title d-flex w-100 justify-content-between align-items-center">
    <div class="d-flex ">
      <div class="">
        <div class="d-flex align-items-center">
          <img src="@/assets/images/icon/usermanagement@2x.png">
          <h4 class="light-blue fw-bold">
            Users Management
          </h4>
        </div>
        
      
        <div class="d-flex">
          <button
            type="button"
            class="title-btn btn d-flex align-items-center m-3"
            style="background-color: #66acec"
          > 
            <img
              class="nav-icon"
              src="@/assets/images/cmd/add@2x.png"
              alt=""
            >
            <p class="ms-1 m-0">
              Add new
            </p>
          </button>

          <button
            type="button"
            class="title-btn btn d-flex align-items-center m-3"
            style="background-color: #6ac1a2"
          > 
            <img
              class="nav-icon"
              src="@/assets/images/cmd/add@2x.png"
              alt=""
            >
            <p class="ms-1 m-0">
              import user
            </p>
          </button>
        </div>
      </div>
      <div class="d-flex align-items-end">
        <div class="input-group border-0 d-flex align-items-center">
          <div class="input-group ">
            <input
              type="text"
              class="form-control"
              placeholder="search name"
            >
            <select
              class="form-select "
              id="inputGroupSelect02"
            >
              <option selected>
                All
              </option>
            </select>

            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-column "
    >
      <div
        class=" d-flex group align-items-end " 
      >
        <h2
          class="fw-bold dark-blue"
        >
          003
        </h2>
        <h5 class="text-dark slash">
          Users
        </h5>
      </div>
      <div class="d-flex">
        <button
          type="button"
          class="user-btn  btn d-flex align-items-center mr-3"
        > 
          <img
            class="nav-icon"
            src="@/assets/images/cmd/refresh@2x.png"
            alt=""
          >
          <h5 class="ms-1 m-0">
            Refresh
          </h5>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Title",
  components: {
  
    
  },
  data: () => ({
    

    paneSize: 15,
  }),
  mounted() {

  },
};
</script>

<style>

</style>
