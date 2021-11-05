<template>
  <b-modal
    id="ImportUser"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="title"
    header-bg-variant="info"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    size="lg"
  >
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
    <div class="modal-popout-bg p-3">
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

    <!-- </form> -->
    <template
      #modal-cancel
    >
      Cancel
    </template>

    <template #modal-ok>
      ok
    </template>
  </b-modal>
</template>

<script>
export default {
name: 'ImportUser',
props: { title: { type: String, default: 'Import User' }, 
},

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
     },
     handleSubmit() {
			// this.$nextTick(() => {
        this.showModal = false
			// });
		},
   }
}
</script>

<style>

</style>
