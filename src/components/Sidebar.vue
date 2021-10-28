<template>
  <div class="container">
    <!-- Edit Group Properties-->
    <button
      type="button"
      class="btn modal-btn"
      data-bs-toggle="modal"
      data-bs-target="#EditGroupProperties"
    >
      Edit Group Properties
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="EditGroupProperties"
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
              Edit Group Properties
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
                >Name</label>
                <input
                  type="Username"
                  class="form-control inline-block"
                  id="Username"
                  style="width:320px;"
                >
              </div>

                
              <div class="w-100 d-flex align-items-center justify-content-between mb-2">
                <label
                  for="Fullname"
                  class="form-label"
                >Description</label>
                <input
                  type="Fullname"
                  class="form-control"
                  id="Fullname"
                  style="width:320px;"
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
                <div class="d-flex  mb-2">
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
                </div>
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
  name: 'Sidebar',
  
}
</script>



<style scoped>
/* .fa{
  background-image: url("../assets/folder@2x.png") norepeat;
} */

</style>
