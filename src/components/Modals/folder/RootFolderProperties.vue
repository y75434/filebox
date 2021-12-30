<template>
  <b-modal
    id="RootFolderProperties"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.ROOTFOLDERPROPERTIES')"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    body-bg-variant="bgmodal"
    footer-bg-variant="white"
    size="xl"
    @ok="putFolder"
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
              v-model="FolderSettings.name"
              disabled
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
              v-model="FolderSettings.description"
            >
          </div>
        </div>
            
        <h5 class="text-dark">
          {{ FolderSettings }}
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
                    {{ this.folderTree.name }}
                  </p>
                </li>

                <li 
                  v-for="item in this.folderTree.subFolders"
                  :key="item.id"
                  class="ms-4 list-group-item d-flex align-items-center border-0"
                >
                  <img
                    src="@/assets/images/file/folder@2x.png"
                    class="icon32px px-1"
                  >
                  <p class="text-dark m-0">
                    {{ item.name }}
                  </p>
                </li>
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
                    {{ this.folderTree.name }}
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
              <ul class=" list-group d-flex flex-column justify-content-between bg-white col-3 p-0 h-100 border">
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
                    class="list-group-item border-0 p-0 text-left"
                  >
                    <div class="form-check justify-content-center align-items-center p-0 w-100 d-flex">
                      <input
                        class="form-check-input m-0"
                        type="checkbox"
                        v-model="item.active"
                        @change="userSelected(item)"
                        :id="item.userName"
                      >
                      <img
                        src="@/assets/images/icon/Union.png"
                        class="icon24px"
                      >
                      <label
                        class="form-check-label"
                        :for="item.userName"
                      >
                        {{ item.userName }}
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
                <li                
                  class="form-check list-group-item border-0 p-0"
                >
                  <p
                    type="text"
                    class="form-control fw-bold"
                  >
                    {{ $t("MODAL.SELECTEDGROUPSUSERS") }}
                  </p>
                </li>
                <div
                  v-if="editGroup.groupUserRelations.length>0"
                  class=""
                >
                  <li
                    v-for="item in editGroup.groupUserRelations"
                    :key="item.userId"
                    class="list-group-item border-0 p-0"
                  >
                    <div class="form-check justify-content-center align-items-center p-0 w-100 d-flex">
                      <img
                        @click="userCan(item)"

                        src="@/assets/images/icon/Union.png"
                        class="icon24px"
                      >
                      <label
                        class="form-check-label"
                        for="flexCheckDefault"
                      >
                        {{ item.userName }}
                      </label>
                    </div>
                  </li>
                </div>
                
                <li class="list-group-item d-flex justify-content-end border p-2">
                  <p class="ms-3 justify-content-end d-flex align-items-center">
                    <span class="dark-blue fw-bold">{{ editGroup.groupUserRelations.length }}
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
                            v-model="item.active"
                            class="form-check-input m-0"
                            type="checkbox"
                            @change="permissionSelected(item)"
                            :id="item.id"
                          >
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="tab-pane fade "
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
                          disabled
                        >
                          <option
                            v-for="item in StorageUnit"
                            :key="item.id"
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
  name: "RootFolderProperties",
  props: { 
    title: { type: String, default: "Root Folder Properties" },
    folderData: { type: Object , default() { return {} }},
  },
  data() {
    return {
      personData: {},
      folderTree: {},
      FolderSettings:{},
      PermissionTypes:[],
      FileTypes:[],
      StorageUnit:{},
      useritems: [],
      searchText:"",
      count:0,
      editGroup:{
        groupUserRelations: []
      },
      aUserInfo:{}
    };
  },
  watch:{ 
    folderData(){ 
      this.personData = this.folderData 
    }
  },  
  
  methods: { 
  
    start() {
      this.getFolderTree(this.personData.folderId)
      this.getFolderSettings(this.personData.folderId)
      this.getPermissionTypes()
      this.getFileTypes()
      this.getStorageUnit()
      this.getUserTable()
    },
    getFolderTree(id){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTree/${id}`)
      .then((data) => { 
        this.folderTree = data.data
      }).catch(() => {
        //  console.log(error.response.data);        
      })
    },
    getFolderSettings(id){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderSettings/${id}`)
      .then((data) => {  
        this.FolderSettings = data.data
        // console.log(this.FolderSettings.settings.restrictedFileTypes);
         
      }).catch(() => {
        // console.log(error.response.data);        
      })
    },
    getPermissionTypes(){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/PermissionTypes`)
      .then((data) => {  
        this.PermissionTypes = data.data
        this.PermissionTypes.map(x=>x.active = false);
        //  console.log(this.PermissionTypes);
         
      }).catch(() => {
        // console.log(error.response.data);        
      })
    },
    permissionSelected(item){
      if(item.active){
        this.FolderSettings.settings.accessPermissions.push(item.permissionTypeId) 
      } else {
        this.FolderSettings.settings.accessPermissions=this.FolderSettings.settings.accessPermissions.filter(x=>x
          !==item.permissionTypeId);

      }
    },
    getFileTypes(){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FileTypes`)
      .then((data) => {  
        this.FileTypes = data.data
        //  console.log(this.FileTypes);
        this.FileTypes.map(x=>x.active = false);
        //  console.log(this.FileTypes);
          
      }).catch(() => {
        // console.log(error.response.data);        
      })
    },
    // todo api為null 等格式確定再改
    typeSelected(item){
      if(item.active){
        this.FolderSettings.settings.push(item.fileTypeId)
      } else {
        this.FolderSettings.settings.restrictedFileTypes=this.FolderSettings.settings.restrictedFileTypes.filter(x=>x
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
    //目前資料不完整無法更新資料
    putFolder(){
      const headers = { 
        'Content-Type': 'application/json', 
        'Accept':'application/json', 
        'Access-Control-Allow-Origin': '*' 
      }; 
      const data = JSON.stringify(this.FolderSettings)

      this.axios.patch(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/EditFolder`,
      data,{ headers: headers }).then((data) => { 
        console.log(data);

      }).catch(error => {
        console.log(error.response.data);        
      })
    },
    getUserTable () {  
      this.axios.get(`${process.env.VUE_APP_USER_APIPATH}/api/Users/GetUsers?searchString=${this.searchText}`)
        .then((data) => {          
          this.useritems = data.data
          console.log(this.useritems);

          this.count = this.useritems.length       
        }).catch(error => {
          console.log(error);        
        })
    },//目前沒有欄位
    userSelected(item){
      if(item.active){
          const data = { "userId": item.userId, "roleId": 1 , "userName": item.userName}
          // console.log(data);

          this.editGroup.groupUserRelations.push(data)
          console.log('add normal', this.editGroup);
            
        }else{            
            if(this.editGroup.groupUserRelations.indexOf(item)){ 
               console.log(this.editGroup.groupUserRelations);
              //目前remove不掉
              this.editGroup.groupUserRelations = this.editGroup.groupUserRelations.filter(x=>x!==item.userId)
              console.log(this.editGroup.groupUserRelations);
       
            }

            console.log('remove user', this.editGroup);
        }
    },
  },
};
</script>

