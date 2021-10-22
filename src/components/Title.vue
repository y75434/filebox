<template>
  <div class="d-flex align-items-center">
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
        <input
          type="text"
          class="form-control"
          placeholder="search name"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        >
        <select
          class="form-select"
          id="inputGroupSelect02"
        >
          <option selected>
            Please select field
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

      <div
        class="d-flex align-items-center"
        style="background-color:#BBBBBB;"
      >
        <h3 class="text-dark fw-bold">
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
