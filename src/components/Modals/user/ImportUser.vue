<template>
  <b-modal
    id="ImportUser"
    class="modal-content"
    body-text-variant="warning"
    body-bg-variant="bgmodal"
    centered
    :title="$t('TITLE.IMPORTUSER')"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    size="lg"
    footer-bg-variant="white"
  >
    <form
      class="container"
      ref="form"
      @submit.stop.prevent="importUser"
    >
      <div class="modal-popout-bg bg-bgmodal p-3">
        <div class="w-50 d-flex align-items-center justify-content-center mb-2">
          <label
            for="Connectto"
            class="m-2 w-50"
          >{{ $t("MODAL.CONNECTTO") }}</label>
          <input
            disabled
            type="Connect to"
            class="form-control inline-block disable width-320"
            id="Connectto"
          >
        </div>


        <div class="w-100 d-flex align-items-center justify-content-between mb-2">
          <div class="w-50 d-flex align-items-center justify-content-center">
            <label
              for="Connectas"
              class="m-2 w-50"
            >{{ $t("MODAL.CONNECTAS") }}</label>
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
              class="m-2 w-50"
            >{{ $t("GENERAL.PASSWORD") }}</label><input
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
              >{{ $t("MODAL.USERNAME") }}</label>

              <input
                type="text"
                :placeholder="$t( 'MODAL.PLEASEFILLOUTTHISFIELD')"
                class="form-control "
              >
            </div>
            <div class="d-flex flex-column">
              <label
                for="Full name"
                class="m-2"
              >{{ $t("MODAL.FULLNAME") }}</label>

              <input
                type="text"
                :placeholder="$t( 'MODAL.PLEASEFILLOUTTHISFIELD')"
                class="form-control h-100"
                v-model="searchQuery"
                @change="update"
              >
            </div>
            <div class="d-flex flex-column">
              <label
                for="Email"
                class="m-2"
              >{{ $t("MODAL.EMAIL") }}</label>


              <input
                type="text"
                :placeholder="$t( 'MODAL.PLEASEFILLOUTTHISFIELD')"
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
                <img
                  src="@/assets/images/icon/magnifier.png"
                  class="nav-icon"
                >
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
                  {{ $t("MODAL.USERNAME") }}
                </th>
                <th scope="col">
                  {{ $t("MODAL.FULLNAME") }}
                </th>
                <th scope="col">
                  {{ $t("MODAL.EMAIL") }}
                </th>
                <th scope="col">
                  {{ $t("MODAL.DESCRIPTION") }}
                </th>
                <th scope="col">
                  {{ $t("MODAL.IMPORTRESULT") }}
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
            </tbody>
          </table>
        </div>
      </div>
    </form>
    <template
      #modal-cancel
    >
      {{ $t("GENERAL.CANCEL") }}
    </template>

    <template #modal-ok>
      {{ $t("GENERAL.IMPORTUSER") }}
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
      searchQuery: null,
      allUser:[],
      selected: [],

    }
   },
   created(){
    this.getUser()
   },
   computed:{
    
    resultQuery(){
        return this.allUser.filter(item =>
          item.name.toLowerCase().includes(this.searchQuery))
    },
    
  },
   methods: {
     //use checkbox
     importUser () {  
      this.axios.post(`${process.env.APIPATH}/api/AD/SaveChildGroupsAndUsersToDB`)
        .then((data) => {

        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      },
     search() {
      this.axios.post(`${process.env.APIPATH}/api/AD/GetUsers?searchString=${this.search}`)
        .then((data) => {

        // description,telephone,loginCount,mustChangePasswordOnNextLogin,cannotChangePassword,passwordNeverExpires
        // and unlockAccount are not imported from AD domain.

        console.log(data);
      }).catch(error => {
          console.log(error);          
        })


    },
     
    getUser(){
      this.axios.get(`${process.env.VUE_APP_USER_APIPATH}/api/AD/GetUsers`)
      .then((data) => {  
        this.allUser = data.data
         console.log(this.allUser);
          
      }).catch(() => {
        // console.log(error.response.data);        
      })
     },
     handleSubmit() {
			// this.$nextTick(() => {
        this.showModal = false
			// });
		},
   }
}
</script>

