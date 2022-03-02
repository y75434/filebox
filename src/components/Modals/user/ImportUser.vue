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
    @ok="importUser"
  >
    <div class="modal-popout-bg bg-bgmodal p-3">
      <div class="w-100 d-flex align-items-center justify-content-between mb-2">
        <div class="w-50 d-flex align-items-center justify-content-center mb-2">
          <label
            for="Connectto"
            class="m-2 w-50"
          >{{ $t("MODAL.CONNECTTO") }}</label>
          <input
            type="Connect to"
            class="form-control inline-block disable width-320"
            id="Connectto"
            v-model="ad.adminDn"
            placeholder="adminDn"
          >
        </div>
        <b-button
          class="bg-green border-0"
          @click="connectAD()"
        >
          test connectAD
        </b-button>
      </div>

      <div class="w-100 d-flex align-items-center justify-content-between mb-2">
        <div class="w-50 d-flex align-items-center justify-content-center mb-2">
          <label
            class="m-2 w-50"
          >domainName</label>
          <input
            type="Connect to"
            class="form-control inline-block disable width-320"
            id="Connectto"
            v-model="ad.domainName"
            placeholder="AD Domain (required, eg. Contoso)"
          >
        </div>

        <div class="w-50 d-flex align-items-center justify-content-center mb-2">
          <label class="m-2 w-50">baseContainerDn</label>

          <input
            class="form-control inline-block disable width-320"
            v-model="ad.baseContainerDn"
            placeholder="baseContainerDn"
          >
        </div>
      </div>

      <div class="w-100 d-flex align-items-center justify-content-between mb-2">
        <div class="w-50 d-flex align-items-center justify-content-center mb-2">
          <label class="m-2 w-50">domainIP</label>
          <input
            class="form-control inline-block disable width-320"
            v-model="ad.domainIP"
            placeholder="domainIP"
          >
        </div>

        <div class="w-50 d-flex align-items-center justify-content-center mb-2">
          <label class="m-2 w-50">port</label>
          <input
            class="form-control inline-block disable width-320"
            v-model="ad.port"
            placeholder="port"
          >
        </div>
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
            placeholder="user"
            v-model="ad.user"
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
            placeholder="********"
            class="form-control inline-block width-320"
            v-model="ad.password"
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
              @keyup="getUser()"
              v-model="searchText"
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
            >
          </div>
          <div class="d-flex flex-column">
            <label
              for="Email"
              class="m-2"
            >{{ $t("MODAL.EMAIL") }}</label>
            <input
              type="text"
              :placeholder="$t('MODAL.PLEASEFILLOUTTHISFIELD')"
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
              


            


      <div class="w-100 mt-4 overflow-scroll height-200">
        <table class="table ">
          <thead>
            <tr class="modal-tr">
              <th scope="col ">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
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
          <tbody class="bg-white ">
            <tr
              v-for="item in allUser"
              :key="item.id"
            >
              <th scope="row">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="item.active"
                  @change="userSelected(item)"
                >
              </th>
              <td>{{ item.firstName }}</td>
              <td>{{ item.userName }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.description }}</td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
      allUser:{},
      selected: {},
      ad:{ 
        domainIP: "192.168.110.179", 
        user: "administrator",
        password:"p@ssw0rd@82923262", 
        baseContainerDn:"OU=doqubiz,DC=doqubiz,DC=local", 
        adminDn:"CN=administrator,CN=Users,DC=doqubiz,DC=local",
        domainName:"AD.doqubiz.local",
        port: "636" 
      },
      searchText:"",
      addUser: []
    }
   },
   created(){
    this.getUser()
   },
   methods: {
     userSelected(item){
      if(item.active){
        this.addUser.push(item.userId)
        console.log('import 274',this.addUser);
      } else {
        this.addUser = this.addUser.filter(x=>x
          !==item.userId);
      }
    },//success
     importUser () {  
      
      const data = JSON.stringify({
        "userIDs": this.addUser,
        "userId": this.$store.getters.userId,
        "username":this.$store.getters.currentUser
      })

      console.log(data);

      this.axios.post(`${process.env.VUE_APP_USER_APIPATH}/api/AD/SaveADUsersToDB`,
      data,{  headers: window.headers }).then((data) => {

        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
        setTimeout(() => {this.$emit('reload');},2000)
      },
      getUser(){
       
        this.axios.get(`${process.env.VUE_APP_USER_APIPATH}/api/AD/GetUsers?searchString=${this.searchText}`)
        .then((data) => {  
          this.allUser = data.data
          //  console.log(this.allUser);
            
        }).catch(() => {
          // console.log(error.response.data);        
        })
      },
      connectAD() {
       
        const data = JSON.stringify(this.ad)

        this.axios.post(`${process.env.VUE_APP_USER_APIPATH}/api/AD/connectDynamicAD`,
        data,{ headers: window.headers })
          .then((data) => {


          console.log(data);
        }).catch(error => {
            console.log(error);          
          })


    },
   }
}
</script>

