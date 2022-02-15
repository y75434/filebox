<template>
  <b-modal
    id="AddRootFolderProperties"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="title"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    body-bg-variant="bgmodal"
    footer-bg-variant="white"
    size="xl"
    @ok="postFolder"
  >
    <div class="modal-popout-bg ">
      <div
        class="modal-body bg-gray p-3"
      >
        <div class="w-100 d-flex align-items-center justify-content-between mb-2">
          <div class="w-50 d-flex align-items-center justify-content-center">
            <label
              for="Foldername"
              class="m-2"
            >{{ $t("MODAL.FOLDERNAME") }}</label>
            <input
              type="Name"
              class="form-control inline-block width-320"
              id="Name"
              v-model="editGroup.name"
            >
          </div>
          <div class="w-50 d-flex align-items-center justify-content-center">
            <label
              for="Description"
              class="m-2"
            >{{ $t("MODAL.DESCRIPTION") }}</label>
            <input
              type="Description"
              class="form-control inline-block width-320"
              id="Description"
              placeholder=""
              v-model="editGroup.description"
            >
          </div>
        </div>
            
        <h5 class="text-dark">
          {{ editGroup }}
        </h5>



        <div class="row p-5 modal-sidebar">
          <div class="col-4 h-100 ">
            <div class="bg-white h-100 border">
              <ul class="list-group border-0">
                <li class="list-group-item d-flex align-items-center border-0">
                  <img
                    src="@/assets/images/file/single folder@2x.png"
                    class="icon32px"
                  >
                  <p class="text-dark m-0">
                    {{ editGroup.name }}
                  </p>
                </li>
                <!-- <li 
                  v-for="item in this.folderTree"
                  :key="item.id"
                  class="list-group-item d-flex align-items-center border-0"
                >
                  <img
                    src="@/assets/images/file/single folder@2x.png"
                    class="icon32px"
                  >
                  <p class="text-dark m-0">
                    {{ item.name }}
                  </p>
                </li> -->


                <!-- 目前無全部資料夾樹狀api -->
                <!-- <li 
                  class="ms-4 list-group-item d-flex align-items-center border-0"
                >
                  <img
                    src="@/assets/images/file/folder@2x.png"
                    class="icon32px px-1"
                  >
                  <p class="text-dark m-0">
                    樹狀
                  </p>
                </li> -->
              </ul>
            </div>
          </div>
          <div class="col-8 ">
            <div
              class="d-flex flex-column height-70px"
            >
              <h5 class="m-0 fw-bold">
                {{ $t("MODAL.ACCESSCONTROLFOR") }}
              </h5>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <img
                    src="@/assets/images/file/single folder@2x.png"
                    class="icon32px"
                  >
                  <p class="fw-bold m-0">
                    {{ editGroup.name }}
                  </p>
                </div>
                
                <div class=" form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  >
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >{{ $t("MODAL.INHERITFROMPARENT") }}</label>
                </div>
              </div>
            </div>

            <div class="row modal-selectuser">
              <ul class="list-group d-flex flex-column justify-content-between bg-white col-3 p-0 h-100 border">
                <div class="overflow-scroll">
                  <li class="form-check list-group-item border-0 p-0">
                    <input
                      type="text"
                      placeholder="Selected Groups/users"
                      class="form-control"
                      v-model="searchText"
                      @keyup="getUserTable()"
                    >
                  </li>

                  <li 
                    v-for="item in useritems"
                    :key="item.id"
                    class="list-group-item border-0 p-0"
                  >
                    <div class="form-check justify-content-center align-items-center p-0 w-100 d-flex">
                      <img
                        src="@/assets/images/icon/Union.png"
                        class="icon24px"
                        @click="userSelected(item)"
                      >
                      <label
                        class="form-check-label"
                        :for="item.userName"
                      >
                        <!-- <p class="text-dark m-0"> -->
                        {{ item.userName }}

                      <!-- </p> -->
                      </label>
                    </div>
                  </li>
                </div>
              
                <li class="list-group-item d-flex justify-content-end border p-2">
                  <p>
                    <span>{{ $t("MODAL.TOTAL") }}
                    </span>
                    <span class=" fw-bold">{{ this.count }}</span>
                  </p>
                </li>
              </ul>
              <ul class="list-group d-flex flex-column justify-content-between bg-white col-3 p-0 h-100 border">
                <div class="">
                  <li class="form-check list-group-item border-0 p-0">
                    <p
                      type="text"
                      class="form-control fw-bold"
                    >
                      {{ $t("MODAL.SELECTEDGROUPSUSERS") }}
                    </p>
                  </li>

                  <li 
                    v-for="item in editGroup.settings.accessPermissions"
                    :key="item.userId"
                    class="list-group-item border-0 p-0"
                  >
                    <div class="form-check justify-content-center align-items-center p-0 w-100 d-flex">
                      <img
                        @dblclick="userCan(item)"
                        src="@/assets/images/icon/Union.png"
                        class="icon24px"
                      >
                      <label
                        class="form-check-label"
                        for="flexCheckDefault"
                      >
                        <!-- <p class="text-dark m-0"> -->
                        {{ item.memberName }}
                        <img
                          @click="del(item)"
                          src="@/assets/images/cmd/del.png"
                          class="icon-20px"
                        >
                      <!-- </p> -->
                      </label>
                    </div>
                  </li>
                </div>
                
                <li class="list-group-item d-flex justify-content-end border p-2">
                  <p class="ms-3 justify-content-end d-flex align-items-center" v-if="editGroup.settings.accessPermissions">
                    <span class="dark-blue fw-bold">{{ editGroup.settings.accessPermissions.length || 0 }}
                    </span>
                    <span>{{ $t("MODAL.SELECTED") }}</span>
                  </p>
                </li>
              </ul>
              

              <div class="bg-white border col-6 p-0 h-100">
                <div
                  class="nav nav-tabs"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    class="nav-link w-50 active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    {{ $t("MODAL.PERMISSIONS") }}
                  </button>
                  <button
                    class="nav-link w-50"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    {{ $t("MODAL.FILESSETTING") }}
                  </button>
                </div>
                <div
                  class="tab-content h-100 overflow-scroll"
                  id="nav-tabContent"
                >
                  <div
                    class="tab-pane fade show active "
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <ul class="justify-content-center flex-column d-flex align-items-center">
                      <li
                        v-for="item in PermissionTypes"
                        :key="item.id"
                        class="list-group-item w-50 border-0 p-0 justify-content-between d-flex"
                      >
                        <div class="justify-content-start align-items-center p-0  d-flex">
                          <label
                            class="form-check-label w-50"
                            :for="item.id"
                          >
                            {{ item.name }}
                          </label>
                        </div>
                        <div class="">
                          <input
                            class="form-check-input m-0"
                            type="checkbox"
                            v-model="item.active"
                            @change="permissionSelected(item)"
                            :id="item.id"
                          >
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <p class="fw-bold">
                      Quata
                    </p>
                    <div
                      class="form-check"
                    >
                      <input
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        class="form-check-input"
                      >
                      <label
                        for="flexCheckDefault"
                        class="form-check-label"
                      >{{ $t("MODAL.LIMITDISKSPACETO") }}</label>

                      <div class="d-flex">
                        <input
                          placeholder="enter code"
                          type="text"
                          id="promoCode"
                          class="form-control m-0 w-50"
                          value=""
                        >
                        <select
                          class="form-select w-50"
                          aria-label="Disabled select example"
                          @change="storageSelected($event)"
                        >
                          <option
                            v-for="(item,index) in StorageUnit"
                            :key="item.id"
                            :value="item.storageUnitId"
                            :selected="index === 0"
                          >
                            {{ item.unit }}
                          </option>
                        </select>
                      </div>

                      <p class="fw-bold">
                        {{ $t("MODAL.FILETYPE") }}
                      </p>
                      <div
                        class="form-check"
                      >
                        <input
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          class="form-check-input"
                        >
                        <label
                          for="flexCheckDefault"
                          class="form-check-label"
                        > {{ $t("MODAL.RESTRICTFILETYPES") }}
                        </label>
                      </div>                 
                      <div
                        class="d-flex flex-wrap "
                        style="width:300px"
                      >
                        <div
                          v-for="item in FileTypes"
                          :key="item.id"
                          class="form-check mx-2 "
                          :id="item.id"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            v-model="item.active"
                            @change="typeSelected(item)"
                            :id="item.id"
                          >
                          <label
                            :for="item.id"
                            class="form-check-label"
                          > {{ item.extension }}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <template
      #modal-cancel
      variant="danger"
    >
      {{ $t("GENERAL.CANCEL") }}
    </template>

    <template #modal-ok>
      {{ $t("GENERAL.OK") }}
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "AddRootFolderProperties",
  props: { 
    title: { type: String, default: "Add Root Folder Properties" },
  },
  data() {
    return {
      PermissionTypes:[],
      FileTypes:[],
      StorageUnit:{},
      useritems: [],
      searchText:"",
      count:0,
      editGroup:{
        editor: this.$store.getters.currentUser,
        settings:{
          storage: { space: 0, unitId: "3fa85f64-5717-4562-b3fc-2c963f66afa6" },
          accessPermissions:[],
          restrictedFileTypes: [],
        },
      },
      nowUser:{
        memberId: "",
        isGroup: true,
        allow: [],
        deny: []
      },
      haveUser: false,
    };
  },
  methods: {  
    start() {
      this.getPermissionTypes()
      this.getFileTypes()
      this.getStorageUnit()
      this.getUserTable()
    },
    //ok
    postFolder(){
      this.editGroup.uploaderName = this.$store.getters.currentUser;
      this.editGroup.uploadedBy = this.$store.getters.userId;

      
      const data = JSON.stringify(this.editGroup)
      console.log(data);

      this.axios.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/CreateRootFolder`,
      data,{ headers:  window.headers })
      .then((data) => { 
        console.log(data);
        this.editGroup = {}

      }).catch(error => {
        console.log(error.response.data);        
      })
    },
   
    getPermissionTypes(){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/PermissionTypes`)
      .then((data) => {  
        this.PermissionTypes = data.data
        //  console.log(this.PermissionTypes);
         
      }).catch(() => {
        // console.log(error.response.data);        
      })
    },
     permissionSelected(item){
      if(item.active){
        this.nowUser.allow.push(item.permissionTypeId) 
      } else {
        this.nowUser.allow = this.nowUser.allow.filter(x=>x !== item.permissionTypeId);

      }
      console.log('this.nowUser',this.nowUser);
    },
    getFileTypes(){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FileTypes`)
      .then((data) => {  
        this.FileTypes = data.data
        //  console.log(this.FileTypes);
          
      }).catch(() => {
        // console.log(error.response.data);        
      })
    },
    typeSelected(item){
      if(item.active){
        this.editGroup.settings.restrictedFileTypes.push(item.fileTypeId)
      } else {
        this.editGroup.settings.restrictedFileTypes=this.editGroup.settings.restrictedFileTypes.filter(x=>x
          !==item.fileTypeId);
      }
    },
    getStorageUnit(){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/Storage/Unit`)
      .then((data) => {  
        this.StorageUnit = data.data
        //  console.log(this.StorageUnit);
          
      }).catch(() => {
        // console.log(error.response.data);        
      })
    },
    storageSelected(event){
      console.log(event.target.value)
      
        this.editGroup.settings.storage.unitId = event.target.value
      
    },
    getUserTable () {  
        this.axios.get(`${process.env.VUE_APP_USER_APIPATH}/api/Users/GetUsers?searchString=${this.searchText}`)
          .then((data) => {          
            this.useritems = data.data            
            this.count = this.useritems.length       
          }).catch(error => {
            console.log(error);        
          })
      },
      //點擊針對個人允許行為
      userCan(item){
        
        
        console.log('該用戶可用的行為',this.PermissionTypes);
        this.haveUser = true
        this.nowUser = item

        //點擊新用戶全部取消勾選
        // this.PermissionTypes.map(x=>{
        //   this.$set(this.PermissionTypes, x.active, false)
        // });
        item.allow.forEach(x=>{
          this.PermissionTypes.forEach(permission=>{
            if(permission.permissionTypeId == x) {
              permission.active = true;
            }
          })
      });

      },
      //左邊切換
      userSelected(item){
        
          console.log(item ,'item');
          if(this.editGroup.settings.accessPermissions.filter(x=>x.memberId == item.userId).length==0) {
          this.editGroup.settings.accessPermissions.push(
            { 
              "memberId": item.userId, 
              "memberName": item.userName, 
              "isGroup": true, 
              "allow": [], 
              "deny": []
            } 

          );
          console.log('目前選擇名單', this.editGroup.settings.accessPermissions);

          }
      
      
      },
      del(user){
        console.log('user',user);
        this.editGroup.settings.accessPermissions =this.editGroup.settings.accessPermissions.filter(x=>x.memberId !== user.memberId);
      },
     
  },
};
</script>

