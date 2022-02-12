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
          FolderSettings{{ FolderSettings }}
        </h5>


        <div class="row p-5 modal-sidebar">
          <div class="col-4 h-100 ">
            <div class="bg-white h-100 border">
              <ul class="list-group border-0 text-dark">
                <!-- tree -->
               <rootTreeItem :id="FolderSettings.folderId" />            
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
                    {{ FolderSettings.name }}
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
                      <img
                        src="@/assets/images/icon/Union.png"
                        class="icon24px"
                        @click="userSelected(item)"
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
                  class=""
                >
                  <li
                    v-for="item in FolderSettings.settings.accessPermissions"
                    :key="item.memberId"
                    class="list-group-item border-0 p-0 mb-2"
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
                        {{ item.memberName }}
                        <img
                          @click="del(item)"
                          src="@/assets/images/cmd/del.png"
                          class="icon-20px"
                        >
                      </label>
                    </div>
                  </li>
                </div>
                
                <li class="list-group-item d-flex justify-content-end border p-2">
                  <p class="ms-3 justify-content-end d-flex align-items-center">
                    <span class="dark-blue fw-bold">{{ FolderSettings.settings.accessPermissions.length }}
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
                    <ul
                      class="justify-content-center flex-column d-flex align-items-center"
                    >
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
                      <b-button
                        class="bg-green border-0"
                        @click="addToSettings()"
                      >
                        add to settings
                      </b-button>
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
                          v-model="space"
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
import rootTreeItem from './rootTreeItem.vue';

export default {
  name: "RootFolderProperties",
  components: {
    rootTreeItem
  },
  props: { 
    title: { 
      type: String, default: "Root Folder Properties" },
      folderData: { type: Object , default() { return {} }},
  },
  provide() { return { $fatherSetting: () =>  this.FolderSettings.settings }},

  data() {
    return {
      folderTree: {},
      FolderSettings:{
        settings:{
          accessPermissions: []
        }
      },
      PermissionTypes:[],
      FileTypes:[],
      StorageUnit:{},
      useritems: [],
      searchText:"",
      count:0,
      nowUser:{
        memberId: "",
        memberName: "",
        isGroup: true,
        allow: [],
        deny: []
      },
      haveUser: false,
      unitId: "04510aa7-e1f6-409c-8982-f2ac9de45bd9",
      space: 0
    };
  },
  watch:{ 
    folderData(){ 
      this.FolderSettings = this.folderData
    },
  },
  methods: { 
    start() {
      this.getFolderSettings(this.FolderSettings.folderId)
      this.getPermissionTypes()
      this.getFileTypes()
      this.getStorageUnit()
    },
    getFolderSettings(id){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderSettings/${id}`)
      .then((data) => {  
        this.FolderSettings = data.data
        this.getUserTable()

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
        this.nowUser.allow.push(item.permissionTypeId) 
      } else {
        this.nowUser = this.nowUser.allow.filter(x=>x !== item.permissionTypeId);

      }
      console.log('this.nowUser',this.nowUser);

    },
    getFileTypes(){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FileTypes`)
      .then((data) => {  
        this.FileTypes = data.data
        this.FileTypes.map(x=>x.active = false);
          
      }).catch(() => {
        // console.log(error.response.data);        
      })
    },
    //檔案類型勾選即加入api
    typeSelected(item){
      if(item.active){
        this.FolderSettings.settings.restrictedFileTypes.push(item.fileTypeId)
      } else {
        this.FolderSettings.settings.restrictedFileTypes = this.FolderSettings.settings.restrictedFileTypes.filter(x=>x
          !==item.fileTypeId);
      }
    },
    getStorageUnit(){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/Storage/Unit`)
      .then((data) => {  
        this.StorageUnit = data.data
      }).catch(() => {
        // console.log(error.response.data);        
      })
    },
    storageSelected(event){
      console.log(event.target.value)   
      this.unitId = event.target.value
      console.log(this.FolderSettings)
      
    },
    //目前資料不完整無法更新資料{ "space": 50, "unitId": "04510aa7-e1f6-409c-8982-f2ac9de45bd9" }
    putFolder(){
      // this.deleteNull()

      this.FolderSettings.editorName = this.$store.getters.currentUser;
      this.FolderSettings.editor = this.$store.getters.userId;

      this.FolderSettings.settings.storage = { "space": this.space, "unitId": this.unitId };
      this.FolderSettings.settings.restrictedFileTypes = [ "7f74d92d-4c7f-426a-9568-5a51aec82234" ];

      const data = JSON.stringify(this.FolderSettings)

      console.log(data);

      this.axios.patch(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/EditFolder`,
      data,{ headers: window.headers }).then((data) => { 
        console.log(data);
        this.$swal.fire({ title: 'success', icon: 'success' })

      }).catch(error => {
        console.log(error.response.data);    
        this.$swal.fire({ title: error.response.data, icon: 'error' })
    
      })

      // this.FolderSettings = {}
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
      console.log('usercan', this.PermissionTypes);
      console.log('userCan', item);
      this.haveUser = true
 
   //   this.PermissionTypes.filter(x=>x.permissionTypeId == item.allow).permissionTypeId.active = true
      this.nowUser = item
      item.allow.forEach(x=>{
          this.PermissionTypes.forEach(permission=>{
            if(permission.permissionTypeId == x) {
              permission.active = true;
            }
          })
      });
      
      console.log('nowUser',this.nowUser);
    },
    //左邊切換
    userSelected(item){
      console.log(item ,'item');
      if(this.FolderSettings.settings.accessPermissions.filter(x=>x.memberId == item.userId).length==0) {
       this.FolderSettings.settings.accessPermissions.push(
         { 
           "memberId": item.userId, 
           "memberName": item.userName, 
           "isGroup": true, 
           "allow": [ "cacd02a3-22d0-4df4-b526-d9c4c6f2d50e" ], //之後綁定
           "deny": []

          } 
       );
       console.log('目前選擇名單', this.FolderSettings.settings.accessPermissions);

      }else{
        //取消選取 
      //  this.FolderSettings.settings.accessPermissions = this.FolderSettings.settings.accessPermissions.splice(x=>x.userId == item.userId);
      //  console.log('取消選取', this.FolderSettings.settings.accessPermissions);

      }
   

    },//ok
    del(user){
      console.log('user',this.FolderSettings.settings.accessPermissions);
      // api 的該用戶資料一並刪除 還沒好

    this.FolderSettings.settings.accessPermissions=  this.FolderSettings.settings.accessPermissions.filter(x=>x.memberId !==user.memberId)    

    },
    addToSettings(){
      console.log(this.nowUser,'this.nowUser');
      console.log(this.PermissionTypes,'584');
      const permissions = [];
      this.PermissionTypes.forEach(x=>{
        if(x.active) {
          permissions.push(x.permissionTypeId);
        }
      })
      this.nowUser.allow = permissions;
      // //folder setting有
      if(this.FolderSettings.settings.accessPermissions.filter(x=>x.memberId ==this.nowUser.memberId)) {
       //刪掉舊資料
       this.FolderSettings.settings.accessPermissions = this.FolderSettings.settings.accessPermissions.filter(x=>x.memberId != this.nowUser.memberId)
       //換上新資料
       this.FolderSettings.settings.accessPermissions.push(this.nowUser)


      }else{
        this.FolderSettings.settings.accessPermissions.push(this.nowUser)

      }
      console.log(this.FolderSettings,'新增至設定');
      
    }
  },
};
</script>

