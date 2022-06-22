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
                
                <!-- <div class=" form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    :disabled="inherit"
                    v-model="inherit"
                  >
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >{{ $t("MODAL.INHERITFROMPARENT") }}</label>
                </div> -->
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


                  <li
                    v-for="item in groupitems"
                    :key="item.id"
                    class="list-group-item border-0 p-0 text-left"
                  >
                    <div class="form-check justify-content-center align-items-center p-0 w-100 d-flex">
                      <img
                        src="@/assets/images/icon/group@2x.png"
                        class="icon24px"
                        @click="groupSelected(item)"
                      >
                      <label
                        class="form-check-label"
                        :for="item.groupName"
                      >
                        {{ item.groupName }}
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
                <li class="form-check list-group-item border-0 p-0">
                  <p
                    type="text"
                    class="form-control fw-bold"
                  >
                    {{ $t("MODAL.SELECTEDGROUPSUSERS") }}
                  </p>
                </li>
                  
                <div>
                  <li 
                    v-for="item in editGroup.settings.members"
                    :key="item.memberId"
                    class="list-group-item border-0 p-0"
                  >
                    <div class="form-check justify-content-center align-items-center p-0 w-100 d-flex">
                      <img
                        v-if="!item.isGroup"
                        @dblclick="userCan(item)"
                        src="@/assets/images/icon/Union.png"
                        class="icon24px"
                      >
                      <img
                        v-else
                        @dblclick="userCan(item)"
                        src="@/assets/images/icon/group@2x.png"
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
                  <p
                    class="ms-3 justify-content-end d-flex align-items-center"
                    v-if="editGroup.settings.members"
                  >
                    <span class="dark-blue fw-bold">{{ editGroup.settings.members.length || 0 }}
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
                      <li class="list-group-item w-100 border-0 p-0 justify-content-end d-flex">
                        <label class="form-check-label w-100" />
                        <div class=" w-100">
                          <span class="mx-2">allow</span>
                          <span>deny</span>
                        </div>
                      </li>                   
                      <li
                        v-for="item in PermissionTypes"
                        :key="item.id"
                        class="list-group-item w-100 border-0 p-0 justify-content-between d-flex"
                      >
                        <label
                          class="form-check-label w-100"
                          :for="item.id"
                        >
                          {{ item.name }}
                        </label>
                        <div class="w-100">
                          <input
                            v-model="item.selected"
                            class="form-check-input mx-3"
                            type="radio"
                            value="allow"
                            @change="permissionSelected(item)"
                            @dblclick="cleanChecked(item)"
                            :id="item.id"
                          >
                          <input
                            v-model="item.selected"
                            class="form-check-input mx-3"
                            type="radio"
                            value="deny"
                            @dblclick="cleanChecked(item)"
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
                      {{ $t("GENERAL.QUATA") }}
                    </p>
                    <div
                      class="form-check overflow-scroll" 
                      style="height:350px" 
                    >
                      <input
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        class="form-check-input"
                        v-model="storageRest"
                      >
                      <label
                        for="flexCheckDefault"
                        class="form-check-label"
                      >{{ $t("MODAL.LIMITDISKSPACETO") }}</label>

                      <div class="d-flex">
                        <input
                          placeholder="enter code"
                          type="number"
                          class="form-control m-0 w-50"
                          :disabled="!storageRest"
                          v-model="editGroup.settings.storage.space"
                        >
                        <select
                          class="form-select w-50"
                          aria-label="Disabled select example"
                          @change="storageSelected($event)"
                        >
                          <option
                            :disabled="!storageRest"
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
                          class="form-check-input"
                          v-model="RESTRICT"
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
                            :disabled="!RESTRICT"
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
import cmqRequest from "@/http/cmqRequest"

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
      groupitems: [],
      searchText:"",
      count:0,
      editGroup:{
        settings:{
          storage: { space: 0, unitId: "" },
          members:[]
        },
      },
      nowUser:{
        memberId: "",
        isGroup: true,
        allow: [],
        deny: []
      },
      haveUser: false,
      storageRest: false,
      RESTRICT: false
    };
  },
  methods: {  
    start() {
      this.getPermissionTypes()
      this.getFileTypes()
      this.getStorageUnit()
      this.getUserTable()
      this.getGroupTable()
    },
    //ok
    postFolder(){
      this.editGroup.uploaderName = this.$store.getters.currentUser;
      this.editGroup.uploadedBy = this.$store.getters.userId;

      const data = JSON.stringify(this.editGroup,'post folder')
      console.log(data,'494');

      cmqRequest.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/CreateRootFolder`,
      data)
      .then((data) => { 
        console.log(data);
        this.editGroup = {}

      }).catch(error => {
        console.log(error.response.data);        
      })
      // setTimeout(() => {this.$emit('reload');},2000)
    },
   
    getPermissionTypes(){
      cmqRequest.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/PermissionTypes`)
      .then((data) => {  
        this.PermissionTypes = data.data
        //  console.log(this.PermissionTypes);
         
      }).catch(() => {
        // console.log(error.response.data);        
      })
    },
    permissionSelected(item){
      if(item.selected == "allow"){
        this.nowUser.self.allowPermission.push(item.permissionTypeId) 
        this.nowUser.self.denialPermission = this.nowUser.self.denialPermission.filter(x=>x !== item.permissionTypeId);
      } else {
        this.nowUser.self.denialPermission.push(item.permissionTypeId)
        this.nowUser.self.allowPermission = this.nowUser.self.allowPermission.filter(x=>x !== item.permissionTypeId);
      }
    },
    //add rootfolder 只會有self denialFileTypes永遠為空
    typeSelected(item){
      if(item.active){
        this.nowUser.self.allowFileTypes.push(item.fileTypeId)
      } else {
        this.nowUser.self.allowFileTypes = this.nowUser.self.allowFileTypes.filter(x => x !== item.fileTypeId);
      }

      //  this.nowUser.self.allowFileTypes.forEach(x=>{
      //   this.FileTypes.forEach(item=>{
      //     if(item.fileTypeId == x) {
      //       item.active = true;
      //     }
      //   })
      // });
    },
    //雙點擊取消單選匡
    cleanChecked(item) { 
      // if(this.nowUser.self.allowPermission.indexOf(item.permissionTypeId) != -1){
      //   this.nowUser.self.allowPermission = this.nowUser.allow.filter(x=>x !== item.permissionTypeId);
      //   item.selected = false
      // }else{
      //   this.nowUser.self.denialPermission = this.nowUser.self.denialPermission.filter(x=>x !== item.permissionTypeId);
      //   item.selected = false
      // }

      item.selected = false
      this.$forceUpdate();
    },
    getFileTypes(){
      cmqRequest.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FileTypes`)
      .then((data) => {  
        this.FileTypes = data.data
        //  console.log(this.FileTypes);
          
      }).catch(() => {
        // console.log(error.response.data);        
      })
    },
    getStorageUnit(){
      cmqRequest.get(`${process.env.VUE_APP_FOLDER_APIPATH}/Storage/Unit`)
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
      cmqRequest.get(`${process.env.VUE_APP_USER_APIPATH}/api/Users/GetUsers?searchString=${this.searchText}`)
        .then((data) => {          
          this.useritems = data.data            
          this.count = this.useritems.length + this.groupitems.length      
        }).catch(error => {
          console.log(error);        
        })
      },
      getGroupTable() {  
        cmqRequest.get(`${process.env.VUE_APP_USER_APIPATH}/api/Groups/GetGroups`)
          .then(data => {  
            this.groupitems = data.data 
          }).catch(error => {
            console.log(error.response.data);        
          })
      },
      //點擊針對個人允許行為
      userCan(item){
             
        console.log(item,this.PermissionTypes);
        this.haveUser = true
        this.nowUser = item

        //點擊新用戶全部取消勾選
        this.PermissionTypes.map(x=>{
          x.active = false;
          x.selected = false;  
            return x;
        });

        this.FileTypes.map((x)=>{
          x.active = false;
            return x;
        })
        this.$forceUpdate();

        item.self.allowPermission.forEach(x=>{
          this.PermissionTypes.forEach(permission=>{
            if(permission.permissionTypeId == x) {
              permission.selected = 'allow';
            }
          })
        });

        item.self.denialPermission.forEach(x=>{
          this.PermissionTypes.forEach(permission=>{
            if(permission.permissionTypeId == x) {
              permission.selected = 'deny';
            }
          })
        });

        item.self.allowFileTypes.forEach(x=>{
          this.FileTypes.forEach(item=>{
            if(item.fileTypeId == x) {
              item.active = true;
            }
          })
        });

      },
      //左邊切換
      userSelected(item){   
        console.log(item ,'item');
        if(this.editGroup.settings.members.filter(x=>x.memberId == item.userId).length == 0) {
          this.editGroup.settings.members.push(
          {
            "memberId": item.userId,
            "memberName": item.userName,
            "isGroup": false,
            "self": {
              "allowPermission": [],
              "denialPermission": [],
              "allowFileTypes": [],
              "denialFileTypes": []
            }
          }
          )
        }
      },
      groupSelected(item){
        console.log(item ,'now select group');
        if(this.editGroup.settings.members.filter(x=>x.memberId == item.id).length == 0) {
          this.editGroup.settings.members.push(
            { 
              "memberId": item.id, 
              "memberName": item.groupName, 
              "isGroup": true, 
              "self": {
                "allowPermission": [],
                "denialPermission": [],
                "allowFileTypes": [],
                "denialFileTypes": []
              }
            } 
          );
        }
      }, 
      del(user){
        console.log('user',user);
        this.editGroup.settings.members =this.editGroup.settings.members.filter(x=>x.memberId !== user.memberId);
      },
     
  },
};
</script>

