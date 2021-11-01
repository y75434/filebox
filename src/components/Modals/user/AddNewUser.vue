<template>
  <div class="">
    <!-- Add New User-->
    <!-- <button
      type="button"
      class="btn modal-btn"
      data-bs-toggle="modal"
      data-bs-target="#AddNewUser"
    >
      Add New User + Edit User Properties
    </button> -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="AddNewUser"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-blue p-3">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >
              Add New User
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div
            class="modal-body bg-gray p-0"
          >
            <!-- <div class="w-100 d-flex justify-content-between align-items-center"> -->
            <form class=" p-3">
              <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                <label
                  for="Username"
                  class=""
                >User name</label>
                <input
                  type="Username"
                  class="form-control inline-block width-320"
                  id="Username"
                >
              </div>

                
              <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                <label
                  for="Fullname"
                  class="form-label"
                >Full name</label>
                <input
                  type="Fullname"
                  class="form-control width-320"
                  id="Fullname"
                >
              </div>
              <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                <label
                  for="Email"
                  class="col-form-label"
                >Email</label>
                  
                <input
                  type="Email"
                  id="Email"
                  class="form-control width-320"
                >
              </div>
              <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                <label
                  for="Description"
                  class="col-form-label"
                >Description</label>
                  
                <input
                  type="Description"
                  id="Description"
                  class="form-control width-320"
                >
              </div>
            </form>
            <!-- </div> -->
            
            <hr class="">


            <div class="d-flex flex-column justify-content-between p-3">
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
                  Change user password
                </label>
                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="Password"
                    class="form-label"
                  >Password</label>
                  <input
                    type="Password"
                    class="form-control width-220"
                    id="Password"
                    placeholder="******"
                  >
                </div>
                <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                  <label
                    for="ConfirmPassword"
                    class="form-label"
                  >Confirm Password</label>
                  <input
                    type="Password"
                    class="form-control width-220"
                    id="ConfirmPassword"
                    placeholder="******"
                  >
                </div>



                <!-- <div class="d-flex  mb-2">
                    <span class="text-dark">
                      Password
                    </span>
                    <p class="mx-5 m-0 text-gray">
                      ********
                    </p>
                  </div>
                  <div class="d-flex mb-2">
                    <span class="text-dark">
                      Confirm Password
                    </span>
                    <p class=" m-0 text-gray">
                      ********
                    </p>
                  </div> -->
              </div>
              <div class="form-check">
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
                  User must change password at next time
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
                  class="form-check-label"
                  for="Usercannotchangepassword"
                >
                  User cannot change password
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="Passwordneverexpires"
                >
                <label
                  class="form-check-label"
                  for="Passwordneverexpires"
                >
                  Password never expires
                </label>
              </div>

              <hr class="">



              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="Passwordneverexpires"
                >
                <label
                  class="form-check-label"
                  for="Passwordneverexpires"
                >
                  Account is disabled

                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="Passwordneverexpires"
                >
                <label
                  class="form-check-label"
                  for="Passwordneverexpires"
                >
                  Account is locked out
                </label>
              </div>
            </div>

            <div class="modal-footer bg-white">
              <div class="d-flex bg-white">
                <button
                  type="button"
                  class="cancel-btn btn sm-btn me-2"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  class="modal-btn btn sm-btn"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'AddNewUser',
 data() {
     return {
      showModal: false
     }
   },
   methods: {
     show() {
      this.showModal = true
     },
     hide(){
      this.showModal = false
     }
   }
}
</script>

<style>

</style>
