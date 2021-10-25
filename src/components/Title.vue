<template>
  <div class=" align-items-center">
    <div class="d-flex justify-content-start">
      <div class="d-flex align-items-center">
        <img src="@/assets/user@2x.png">
        <h5 class="text-dark fw-bold">
          Users Management
        </h5>
      </div>

      <div class="">
        <button
          type="button"
          class="cancel-btn btn d-flex align-items-center"
          style="background-color:#66acec;"
        > 
          <img
            class="nav-icon"
            src="@/assets/add@2x.png"
            alt=""
          >
          <h5>Add new users</h5>
        </button>
      </div>
      <div class="d-flex align-items-center">
        <button
          type="button"
          class="cancel-btn btn d-flex align-items-center"
          style="background-color:#6AC1A2;"
        > 
          <img
            class="nav-icon"
            src="@/assets/add@2x.png"
            alt=""
          >
          <h5>
            import user
          </h5>
        </button>

        <div class="input-group d-flex align-items-center">
          <div class="input-group mb-3">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
            >
              Button
            </button>
            <input
              type="text"
              class="form-control"
              placeholder=""
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
    

      <div
        class="d-flex align-items-end border"
        style="border-color:#999;"
      >
        <h5 style="color:#666;">
          Total
        </h5>
        <h3
          class=" fw-bold"
          style="color:#007fa9;"
        >
          3
        </h3>
        <h5 class="text-dark fw-bold">
          users
        </h5>
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
