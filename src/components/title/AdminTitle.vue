<template>
  <div class="title d-flex w-100 justify-content-between align-items-center">
    <div class="">
      <div class="d-flex align-items-center">
        <img src="@/assets/images/icon/usermanagement@2x.png">
        <h4 class="light-blue fw-bold">
          Users Management
        </h4>
      </div>
        
      
      <div class="d-flex">
        <button
          data-bs-toggle="modal"
          data-bs-target="#AddNewUser"
          @click="AddNewUser"

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


    <div
      class="input-group mb-2 mt-4 border-0 align-items-end"
    >
      <div class="d-flex flex-column">
        <label
          for="GroupName"
          class="m-2 text-dark"
        >Group Name</label>

        <input
          type="text"
          placeholder="search name"
          class="form-control "
        >
      </div>
        
      <div class="d-flex flex-column">
        <label
          for="MemberName"
          class="m-2 text-dark"
        >Member Name</label>


        <input
          type="text"
          placeholder="Please fill out this field"
          class="form-control"
        >
      </div>
              
      <div class="d-flex flex-column">
        <div class="h-50" />
        <button
          type="button"
          id="button-addon2"
          class="btn btn-blue"
        >
          Button
        </button>
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
    <add-new-user />
  </div>
</template>

<script>
import AddNewUser from '../Modals/user/ImportUser.vue';


export default {
name: "Title",
  components: {
  AddNewUser

    
  },
  data: () => ({
    

    paneSize: 15,
  }),
  mounted() {

  },
  methods:{
    AddNewUser(){
      this.$refs.modal.show()
    }
  }
};
</script>

<style>

</style>
