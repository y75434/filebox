<template>
  <div class="title d-flex w-100 justify-content-between align-items-center">
    <div class="d-flex ">
      <div class="d-flex align-items-center">
        <img src="@/assets/images/icon/user@2x.png">
        <h5 class="light-blue fw-bold">
          Users Management
        </h5>
      
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
          <h5 class="m-0">
            Add new
          </h5>
        </button>

        <button
          type="button"
          class="title-btn btn d-flex align-items-center m-3"
          style="background-color:#6AC1A2;"
        > 
          <img
            class="nav-icon"
            src="@/assets/images/cmd/add@2x.png"
            alt=""
          >
          <h5 class="m-0">
            import user
          </h5>
        </button>

        <div class="input-group border-0 d-flex align-items-center">
          <div class="input-group ">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
            >
              Search
            </button>
            <input
              type="text"
              class="form-control h-0"
              placeholder="search name"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            >
            <select
              class="form-select"
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
        class="border d-flex group align-items-end justify-content-between" 
        style="border-color: #999"
      >
        <h5 style="color: #666">
          Total
        </h5>
        <h3
          class="fw-bold"
          style="color: #007fa9"
        >
          3
        </h3>
        <h5 class="text-dark">
          Groups
        </h5>
      </div>
      <div class="d-flex">
        <button
          type="button"
          class="user-btn btn d-flex align-items-center mr-3"
        > 
          <img
            class="nav-icon"
            src="@/assets/images/cmd/refresh@2x.png"
            alt=""
          >
          <h5 class="m-0">
            Refresh
          </h5>
        </button>

        <button
          type="button"
          class="user-btn btn d-flex align-items-center"
        > 
          <img
            class="nav-icon"
            src="@/assets/images/cmd/add@2x.png"
            alt=""
          >
          <h5 class="m-0">
            Show all
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
