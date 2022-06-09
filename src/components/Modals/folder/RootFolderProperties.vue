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
            
        <p class="text-dark">
          FolderSettings{{ FolderSettings }}
          ------------------
          editSetting {{ editSetting }}
        </p>

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
                    {{ editSetting.name }}
                  </p>
                </div>
              
                <div class=" form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    :disabled="validateFather"
                    v-model="editSetting.inherit"
                    @change="checkInhert($event)"
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
                  v-if="this.editSetting.settings.members"
                >
                  <!--  -->
                  <li
                    v-for="item in this.editSetting.settings.members"
                    :key="item.id"
                    class="list-group-item border-0 p-0 mb-2"
                  >
                    <div class="form-check justify-content-center align-items-center p-0 w-100 d-flex">
                      <!--  -->
                      <img
                        v-if="!item.isGroup"
                        @dblclick="userCan(item)"
                        src="@/assets/images/icon/Union.png"
                        class="icon24px"
                        :style=" item.inFather ? {opacity:'0.3'} : {opacity:'1'}"
                      >
                      <!--  -->
                      <img
                        v-else
                        @dblclick="userCan(item)"
                        src="@/assets/images/icon/group@2x.png"
                        class="icon24px"
                        :style=" item.inFather ? {opacity:'0.3'} : {opacity:'1'}"
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
                          v-if="!item.inFather"
                        >
                      </label>
                    </div>
                  </li>
                </div>
                
                <li class="list-group-item d-flex justify-content-end border p-2">
                  <p class="ms-3 justify-content-end d-flex align-items-center">
                    <!-- <span class="dark-blue fw-bold">{{ FolderSettings.settings.accessPermissions.self.length || 0 }}
                    </span> -->
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
                      <li class="list-group-item w-100 border-0 p-0 justify-content-end d-flex">
                        <label
                          class="form-check-label w-100"
                        />

                        <div class=" w-100">
                          <span class="mx-2">allow</span>
                          <span>deny</span>
                        </div>
                      </li>
                      <!-- disabled="this.editSetting.settings.accessPermissions.parent != []" -->
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
                        <div class=" w-100">
                          <input
                            v-model="item.selected"
                            class="form-check-input mx-3"
                            type="radio"
                            value="allow"
                            :name="item.permissionTypeId"
                            :disabled="item.inFather"
                            @change="permissionSelected(item)"
                            @dblclick="cleanChecked(item)"
                            :id="item.id"
                          >
                          <input
                            v-model="item.selected"
                            class="form-check-input mx-3"
                            type="radio"
                            value="deny"
                            :name="item.permissionTypeId"
                            :disabled="item.inFather"
                            @dblclick="cleanChecked(item)"
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
                      {{ $t("GENERAL.QUATA") }}
                    </p>
                    <div
                      class="form-check"
                    >
                      <input
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        class="form-check-input"
                        v-model="storageRest"
                        :disabled="this.editSetting.folderId != this.FolderSettings.folderId"
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
                          v-model="space"
                          :disabled="this.editSetting.inherit || !storageRest"
                        >
                        <select
                          class="form-select w-50"
                          aria-label="Disabled select example"
                          @change="storageSelected($event)"
                        >
                          <option
                            :disabled="!storageRest"
                            v-for="(item) in StorageUnit"
                            :key="item.id"
                            :value="item.storageUnitId"
                            :selected=" item.storageUnitId == FolderSettings.settings.storage.unitId"
                          >
                            <!-- editSetting.settings.storage.unitId || -->
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
                          :disabled="this.editSetting.inherit"
                          id="flexCheckDefault2"
                        >
                        <label
                          for="flexCheckDefault2"
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
import rootTreeItem from './rootTreeItem.vue';
import { mapGetters } from 'vuex';
import cmqRequest from '@/http/cmqRequest'

export default {
  name: "RootFolderProperties",
  components: {
    rootTreeItem
  },
  props: { 
    title: { type: String, default: "Root Folder Properties" },
    tabData: { type: Object , default() { return {} }},
  },

  data() {
    return {
      FolderSettings:[],
      PermissionTypes:[],
      FileTypes:[],
      StorageUnit:{},
      useritems: [],
      groupitems: [],
      searchText:"",
      count:0,
      nowUser:{ },
      haveUser: false,
      editSetting: {
        settings:{
          storage: {},
          members: []
        }
      },
      space: 0, 
      unitId: "",
      oldValue: [],
      storageRest: false,
      RESTRICT: false
    };
  },
  computed:{ 
    validateFather(){   
     return this.$store.getters.liselected.folderId == this.FolderSettings.folderId || this.$store.getters.liselected === this.FolderSettings.folderId 
    },
    ...mapGetters(['liselected'])
  },
  watch: {
    liselected(){
      console.log(this.$store.getters.liselected.name,'change');
      if (this.$store.getters.liselected.folderId) {
        this.editSetting = this.$store.getters.liselected

        //  if(this.editSetting.settings.storage == null){
        //   this.editSetting.settings = {
        //     storage:{
        //       space: 0,
        //       unitId: "b48b6ee3-8a0e-4042-80e8-33a33ed10d63"
        //     }
        //   }
        // }

        // if (this.editSetting.settings['members'] === null){
        //   this.editSetting.settings.members = []
        // }

        this.oldValue = this.editSetting.settings.members

        this.reset()
        console.log(this.editSetting,'492222222');


      }
    },
   },
   created(){
     this.$store.dispatch('setLiselected', {folderId:""})
   },
   methods: { 
    //inhert checkbox變動
    checkInhert(e){
      // this.editSetting.inherit = !this.editSetting.inherit
      if(e.target.checked){
        this.editSetting.settings.members =  this.FolderSettings.settings.members
        this.reset()
        console.log( this.editSetting.settings.members,'checked');

      }else{
    
        //恢復原本設定
        this.editSetting.settings.members =  this.oldValue

        this.reset()
        this.$forceUpdate();

        console.log(this.editSetting.settings.members,'unchecked');
      }
    },
    start() {
      this.getFolderSettings(this.tabData.folderId)
      this.getPermissionTypes()
      this.getFileTypes()
      this.getStorageUnit()
      this.$store.dispatch('setLiselected', this.tabData.folderId);
    },
    reset(){
      //點擊後重新設定勾取匡
      this.PermissionTypes.map((x)=>{
        x.active = false;
        x.selected = false;   
          return x;
      })

      this.FileTypes.map((x)=>{
        x.active = false;
          return x;
      })
    },
    getFolderSettings(id){  
      cmqRequest.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderSettings/${id}`)
      .then((data) => { 
        console.log(id,this.$store.getters.liselected,'579');
        console.log('初始化');

        //初始化資料顯示 
        this.FolderSettings = data.data        

        //初始化才需要兩物件一樣
        if(this.$store.getters.liselected == id){
          this.editSetting = this.FolderSettings
        }

        this.space = this.editSetting.settings.storage.space
        this.unitId = this.editSetting.settings.storage.unitId

        this.getUserTable()
        this.getGroupTable()
        this.$forceUpdate();


      }).catch(() => {
        // console.log(error.response.data);        
      })
    },
    getPermissionTypes(){
      cmqRequest.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/PermissionTypes`)
      .then((data) => {  
        this.PermissionTypes = data.data;
        this.PermissionTypes.map(x=>x.active = false);
    
        // console.log(this.PermissionTypes);
         
        }).catch(() => {
      })
    },
    permissionSelected(item){
      // console.log(this.nowUser, item, this.editSetting.inherit)
      if(item.selected == "allow" && this.editSetting.inherit == false){
        console.log('allow');
        this.nowUser.self.allowPermission.push(item.permissionTypeId) 
        this.nowUser.self.denialPermission = this.nowUser.self.denialPermission.filter(x=>x !== item.permissionTypeId);
      
      } else if(item.selected == "deny" && !this.editSetting.inherit == false){
        console.log('deny');
        this.nowUser.self.denialPermission.push(item.permissionTypeId)
        this.nowUser.self.allowPermission = this.nowUser.self.allowPermission.filter(x=>x !== item.permissionTypeId);
      
      }else{
        console.log('err');
        
      }
      console.log(this.nowUser)

    },
    //檔案類型勾選即加入api
    typeSelected(item){

      console.log(item);

      if(this.editSetting.inherit == false){
        this.nowUser.self.allowFileTypes.push(item.fileTypeId)
      } 
      //else if(this.editSetting.inherit == true){
        // this.nowUser.parent.allowFileTypes = this.nowUser.parent.allowFileTypes.filter(x=>x !== item.fileTypeId);
      //}

    },
    //雙點擊取消單選匡
    cleanChecked(item) { 
      
      item.selected = false
      this.$forceUpdate();

    },
    getFileTypes(){
      cmqRequest.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FileTypes`)
      .then((data) => {  
        this.FileTypes = data.data
              
      }).catch(() => {
        // console.log(error.response.data);        
      })
    },    
    getStorageUnit(){
      cmqRequest.get(`${process.env.VUE_APP_FOLDER_APIPATH}/Storage/Unit`)
      .then((data) => {  
        this.StorageUnit = data.data
      }).catch(() => {
        // console.log(error.response.data);        
      })
    },
    storageSelected(event){
      // console.log(event.target.value)   
      this.unitId = event.target.value
      // console.log(this.unitId)
      
    },
    putFolder(){

      //傳送之前先檢查值 如果是null 轉為[]
      console.log(this.editSetting.settings.members,'put method',this.editSetting);
      
      // this.editSetting.settings.members.forEach((x)=>{
      //   //檢查self
      //     let keys = Object.keys(x.self);
      //     keys.forEach(key=>{
      //       if(x.self[key] == null || x.self[key] == undefined) {
      //         x.self[key] = [];
      //       }
      //     })
      // });


      const data = JSON.stringify([
        {
          "folderId": this.editSetting.folderId,
          "name": this.editSetting.name,
          "description": this.editSetting.description,
          "inhert": this.editSetting.inherit,
          "settings":{
            "storage":{ "space": this.space, "unitId": this.unitId },
            "members": this.editSetting.settings.members
          },
          "editor": this.$store.getters.userId, 
          "editorName":this.$store.getters.currentUser,
        }
      ])

      console.log(data);

      cmqRequest.patch(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/EditFolder`,
        data).then((data) => { 

          console.log(data);
          this.$swal.fire({ title: 'success', icon: 'success' })

        }).catch(error => {
          console.log(error.response.data);    
          this.$swal.fire({ title: error.response.data.error, icon: 'error' })
      
        })

      this.editSetting = {}
      

    },
    getUserTable(){  
      cmqRequest.get(`${process.env.VUE_APP_USER_APIPATH}/api/Users/GetUsers?searchString=${this.searchText}`)
        .then((data) => {          
          this.useritems = data.data
          // console.log(this.useritems);        

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
      console.log('now user', item);
      // console.log('PermissionTypes', this.PermissionTypes);
     
      this.reset()
      // console.log('815', this.FileTypes);

      this.$forceUpdate();

      this.haveUser = true
      this.nowUser = item;

      //把 null 改 []
      // var self = Object.keys(this.nowUser.self);
      // self.forEach(key=>{
      //     if(this.nowUser.self[key] == null || this.nowUser.self[key] == undefined) {
      //       this.nowUser.self[key] = [];
      //     }
      // })


      //依據繼承與否進行函式
      if(this.editSetting.inherit) {
        console.log('Inherit');
        this.inheritParent()
      }else{
        console.log('notInherit');
        this.notInherit()
      }

      this.$forceUpdate();

    
    },
    inheritParent(){

      this.PermissionTypes.map(x=>{
        let temps = this.nowUser.self.allowPermission.filter(permission=>permission==x.permissionTypeId);
          if(temps.length > 0) {
            x.selected = 'allow';
          }else {
            x.selected = 'deny';
          }
          return x;
      })
      console.log(this.PermissionTypes);


      // radio匡全部disabled 
       this.PermissionTypes.forEach(item=>{
          item.inFather = true;
       })

      // console.log(this.nowUser.self.allowPermission);

 

    },
    notInherit(){ 
      this.PermissionTypes.map(x=>{
        let temps = this.nowUser.self.allowPermission.filter(permission=>permission==x.permissionTypeId);
        if(temps.length>0) {
          x.selected = 'allow';
        }else {
          x.selected = 'deny';
        }
        return x;
      })
      //console.log(this.PermissionTypes);

      console.log(this.nowUser);

      this.nowUser.self.allowPermission.forEach(x=>{
        this.PermissionTypes.forEach(permission=>{
          if(permission.permissionTypeId == x) {
            permission.selected = 'allow';
          }
        })
      });

       this.nowUser.self.denialPermission.forEach(x=>{
        this.PermissionTypes.forEach(permission=>{
          if(permission.permissionTypeId == x) {
            permission.selected = 'deny';
          }
        })
      });
  
      this.nowUser.self.allowFileTypes.forEach(x=>{
        this.FileTypes.forEach(item=>{
          if(item.fileTypeId == x) {
             item.active = true;
          }
        })
      });

       // disabled取消 
       this.PermissionTypes.forEach(item=>{
          item.inFather = false;
       })
    },
    //左邊切換
    userSelected(item){
      console.log(item ,'item');

      // if(!this.editSetting.settings.members){
      //   this.editSetting.settings.members = []
      // }

      if(this.editSetting.settings.members.filter(x=>x.memberId == item.userId).length == 0) {
       this.editSetting.settings.members.push(
         {
            "memberId": item.userId,
            "memberName": item.userName,
            "isGroup": false,
            "self": {
              "allowPermission": [ ],
              "denialPermission": [ ],
              "allowFileTypes": [],
              "denialFileTypes": []
            }
          }
       );
       console.log('目前選擇名單', this.editSetting.settings.members);
      }   
    },
    groupSelected(item){
      console.log(item ,'now select group');
      if(this.editSetting.settings.members.filter(x=>x.memberId == item.id).length == 0) {
       this.editSetting.settings.members.push(
         { 
           "memberId": item.id, 
           "memberName": item.groupName, 
           "isGroup": true, 
           "self": {
            "allowPermission": [ ],
            "denialPermission": [ ],
            "allowFileTypes": [],
            "denialFileTypes": []
           }
         } 
       );
       console.log('目前選擇名單', this.editSetting.settings.members);
      }
    },   
    //ok
    del(user){
     console.log('user',user);

     this.editSetting.settings.members = this.editSetting.settings.members.filter(x => x.memberId !== user.memberId)    
    //  this.members = this.editSetting.settings.members

    },
    
  },
};
</script>

