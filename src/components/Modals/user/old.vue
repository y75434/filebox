<template>
  <div class="">
    <!-- Import User-->
    <!-- <button
      type="button"
      class="btn modal-btn"
      data-bs-toggle="modal"
      data-bs-target="#ImportUser"
    >
      Import User
    </button> -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="ImportUser"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div
          class="modal-content "
          style="width:1000px"
        >
          <div class="modal-header bg-blue p-3">
            <h5
              class="modal-title"
              id="EditGroupProperties"
            >
              Import User
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div
            class="modal-body bg-gray p-5"
          >
            <div class="w-50 d-flex align-items-center justify-content-center mb-2">
              <label
                for="Connectto"
                class="m-2"
              >Connect to</label>
              <input
                type="Connect to"
                class="form-control inline-block disable width-320"
                id="Connectto"
              >
            </div>


            <div class="w-100 d-flex align-items-center justify-content-between mb-2">
              <div class="w-50 d-flex align-items-center justify-content-center">
                <label
                  for="Connectas"
                  class="m-2"
                >Connect as</label>
                <input
                  type="Connectas"
                  class="form-control inline-block width-320"
                  id="Connectas"
                  placeholder=""
                >
              </div>
                
              <div
                class="w-50 d-flex align-items-center justify-content-center"
              >
                <label
                  for="Password"
                  class="m-2"
                >Password</label><input
                  type="Password"
                  id="Password"
                  placeholder="********"
                  class="form-control inline-block width-320"
                >
              </div>
            </div>
            


            <div class="">
              <div
                class="input-group mb-2 mt-4 border-0"
              >
                <div class="d-flex flex-column">
                  <label
                    for="Name"
                    class="m-2"
                  >Name</label>

                  <input
                    type="text"
                    placeholder="Please fill out this field"
                    class="form-control "
                  >
                </div>
                <div class="d-flex flex-column">
                  <label
                    for="Full name"
                    class="m-2"
                  >Full name</label>

                  <input
                    type="text"
                    placeholder="Please fill out this field"
                    class="form-control h-100"
                  >
                </div>
                <div class="d-flex flex-column">
                  <label
                    for="Email"
                    class="m-2"
                  >Email</label>


                  <input
                    type="text"
                    placeholder="Please fill out this field"
                    class="form-control h-100"
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
            </div>
              


            


            <div class="w-100 mt-4">
              <table class="table">
                <thead>
                  <tr class="modal-tr">
                    <th scope="col ">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      >
                    </th>
                    <th scope="col">
                      Name
                    </th>
                    <th scope="col">
                      Fulll name
                    </th>
                    <th scope="col">
                      Email
                    </th>
                    <th scope="col">
                      Description
                    </th>
                    <th scope="col">
                      Import result
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
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Rachellee@doqubiz.com</td>
                    <td />
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
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Davidkang@doqubiz.com</td>
                    <td />
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
                    <td colspan="2">
                      Peter
                    </td>
                    <td>Peterlin@doqubiz.com</td>
                    <td />
                    <td />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="modal-footer bg-white">
            <div class="d-flex bg-white">
              <button
                type="button"
                class="modal-btn btn "
              >
                Import selected users
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "ImportUser",
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
