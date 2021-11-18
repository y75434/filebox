<template>
  <b-modal
    id="ManagePublicLink"
    class="modal-content"
    body-text-variant="warning"
    body-bg-variant="bgmodal"
    centered
    :title="title"
    header-bg-variant="bgheader"
    ok-variant="primary"
    size="lg"
    footer-bg-variant="white"
  >
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
    <div class="modal-popout-bg bg-bgmodal p-3">
      <div class="text-dark d-flex justify-content-between">
        <h4 class="fw-bold">
          photoshop-transparent-image-2.psd
        </h4>
        <div class="d-flex align-items-center">
          <h5 class="fw-bold mx-2">
            25
          </h5>
          <h5>Public Links</h5>
        </div>
      </div>
      <div class="w-100 mt-4 overflow-scroll">
        <table class="table">
          <thead>
            <tr class="modal-tr">
              <th scope="col">
                Name
              </th>
              <th scope="col">
                Linked Item
              </th>
              <th scope="col">
                Created By
              </th>
              <th scope="col">
                Hit Count
              </th>
              <th scope="col">
                Last Hit Time
              </th>
              <th scope="col">
                Expiration
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr>
              <th scope="row">
                5vnak/bemkq/wallpaper-1.jpg
              </th>
              <td>5vnak/bemkq/wallpaper-1.jpg</td>
              <td>https://demos.google.com/admin/public...</td>
              <td>admin</td>
              <td>5</td>
              <td>25/02/2007 10:52 AM</td>
            </tr>
            <tr>
             <th scope="row">
                5vnak/bemkq/wallpaper-1.jpg
              </th>

              <td>5vnak/bemkq/wallpaper-1.jpg</td>
              <td>https://demos.google.com/admin/public...</td>
              <td>admin</td>
              <td>5</td>
              <td>25/02/2007 10:52 AM</td>
            </tr>
            <tr>
              <th scope="row">
                5vnak/bemkq/wallpaper-1.jpg
              </th>

              <td>5vnak/bemkq/wallpaper-1.jpg</td>
              <td>https://demos.google.com/admin/public...</td>
              <td>admin</td>
              <td>5</td>
              <td>25/02/2007 10:52 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- </form> -->
   

    <template #modal-ok>
      Close
    </template>
  </b-modal>
</template>

<script>
export default {
name: 'ImportUser',
props: { title: { type: String, default: 'Manage Public Link' }, 
},

 data() {
     return {
      showModal: false
     }
   },
   created(){
    this.getUser()
   },
   methods: {
     show() {
      this.showModal = true
     },
     hide(){
      this.showModal = false
     },
     getUser(){
      // let promise = this.axios.get('/some/url')
      //   return promise.then((data) => {
      //     const items = data.items       
      //     return(items)
      //   }).catch(error => {
      //     return []
      //   })
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
