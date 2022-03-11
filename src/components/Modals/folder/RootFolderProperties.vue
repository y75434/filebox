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
          <hr>
          editSetting{{ editSetting }}
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
                    :disabled="validateFather"
                    v-model="editSetting.inhert"
                    @change="checkInhert($event)"
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
                  v-if="this.editSetting"
                >
                  <!--  -->
                  <li
                    v-for="item in this.editSetting.settings.accessPermissions.self"
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
                          <!-- :disabled="this.FolderSettings.settings.accessPermissions.parent" -->
                          <input
                            v-model="item.selected"
                            class="form-check-input mx-3"
                            type="radio"
                            value="allow"
                            :disabled="item.inFather"
                            :checked="item.inFather"
                            @change="permissionSelected(item)"
                            @dblclick="cleanchecked(item)"
                            :id="item.id"
                          >
                          <input
                            v-model="item.selected"
                            class="form-check-input mx-3"
                            type="radio"
                            value="deny"
                            :disabled="item.inFather"
                            :checked="item.inFather"
                            @dblclick="cleanchecked(item)"
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
                          type="number"
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
import { mapGetters } from 'vuex';

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
      nowUser:{
        memberId: "",
        memberName: "",
        isGroup: true,
        allow: [],
        deny: []
      },
      haveUser: false,
      unitId: "",
      space: 0,
      editSetting: {
        settings:{
          accessPermissions:{
            self:[]
          }
        }
      },
      testTree: {},
      arr:[],
      // storeChanged: this.$store.getters.liselected
    };
  },
  computed:{ 
    
    validateFather(){
     return this.$store.getters.liselected.folderId === this.FolderSettings.folderId 
    },
    ...mapGetters(['liselected'])
  },
  watch: {
    liselected(){
        this.editSetting = this.$store.getters.liselected
        // console.log(this.editSetting.folderId);

        this.PermissionTypes.map((x)=>{
          this.$set(this.PermissionTypes, x.active, false)         
            return x;
        })

        // this.PermissionTypes.map(x=>x.active = false);

        //arr為該rootfolder整個tree
        this.arr.forEach((item,index)=>{

          if(this.editSetting.folderId == item.folderId && this.arr[index - 1] !== undefined){
            console.log(this.arr[index - 1],'上一層');
            let id = this.arr[index - 1].folderId
            //更改foldersetting 物件資料
            this.getFolderSettings(id)
          }else{
            //如果this.arr[index - 1] == undefined 直接讓 editsetting 值給 foldersetting
            this.FolderSettings = this.editSetting
          }
        })

        if(this.editSetting.inhert){
          this.editSetting.settings.accessPermissions.parent.forEach(x=>{
            this.editSetting.settings.accessPermissions.self.forEach(item=>{
              if(item.memberId == x.memberId) {
                item.inFather = true;
              }else{
                item.inFather = false;
              }
            })
          });
        }

        console.log(this.editSetting.settings.accessPermissions.self);

      }
   },
   created(){
     this.$store.dispatch('setLiselected', null)
   },
  methods: { 
    //inhert checkbox 
    checkInhert(e){
      if(e.target.checked){
        // this.editSetting.settings.accessPermissions.parent = this.$store.getters.liselected.settings.accessPermissions.parent
        this.editSetting.settings.accessPermissions.parent = this.FolderSettings.settings.accessPermissions.self

        console.log(this.editSetting, e.target.checked);
        // this.getSelfSettings()
      }else{
        this.editSetting.settings.accessPermissions.parent = []
        console.log(this.editSetting, e.target.checked);
      }
    },
    start() {
      this.getFolderSettings(this.tabData.folderId)
      this.getPermissionTypes()
      this.getFileTypes()
      this.getStorageUnit()
      this.$store.dispatch('setLiselected', this.tabData.folderId);
      this.arr = []
      this.testTree = {}
      this.getRootTree(this.tabData.folderId)


    },
    //想要一次跑完根資料夾樹狀
    getRootTree(id){
      // console.log('test', id);
      
      const data = JSON.stringify({        
          "folderId": id,
          "uerId": this.$store.getters.userId,
          "groups": this.$store.getters.group
         }) 

        this.axios.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTreeForAdminPage`,
        data,{ headers: window.headers })
          .then((data) => {
            this.testTree = data.data;
            // console.log(this.testTree);          
            this.arr.push(this.testTree)
              if (this.testTree.subFolders.length > 0 ) {
                this.getRootTree(this.testTree.subFolders[0].folderId)
              }
            })
            .catch(() => { // console.log(error.response.data); 
            });
            console.log(this.arr, 'arr');
    },
    getFolderSettings(id){  
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderSettings/${id}`)
      .then((data) => { 
        console.log(id);

        //初始化資料顯示 
        this.FolderSettings = data.data
        //初始化才需要兩物件一樣
        if(this.$store.getters.liselected == id){
          this.editSetting = this.FolderSettings
        }
        console.log(this.FolderSettings, this.editSetting,'初始化資料顯示');
        
        this.getUserTable()
        this.getGroupTable()


      }).catch(() => {
        // console.log(error.response.data);        
      })
    },
    getPermissionTypes(){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/PermissionTypes`)
      .then((data) => {  
        this.PermissionTypes = data.data
        this.PermissionTypes.map(x=>x.active = false);
    
        console.log(this.PermissionTypes);
         
        }).catch(() => {
      })
    },
    permissionSelected(item){
      if(item.selected == "allow"){
        this.nowUser.allow.push(item.permissionTypeId) 
        this.nowUser.deny = this.nowUser.deny.filter(x=>x !== item.permissionTypeId);
      } else {
        this.nowUser.deny.push(item.permissionTypeId)
        this.nowUser.allow = this.nowUser.allow.filter(x=>x !== item.permissionTypeId);
      }
    },
    cleanchecked(item) { 
      if(this.nowUser.allow.indexOf(item.permissionTypeId) != -1){
        this.nowUser.allow = this.nowUser.allow.filter(x=>x !== item.permissionTypeId);
        item.selected = false
      }else{
        this.nowUser.deny = this.nowUser.deny.filter(x=>x !== item.permissionTypeId);
        item.selected = false
      }

    },
    getFileTypes(){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FileTypes`)
      .then((data) => {  
        this.FileTypes = data.data
        this.editSetting.settings.restrictedFileTypes.forEach(x=>{
          this.FileTypes.forEach(Types=>{
            if(Types.fileTypeId == x) {
              Types.active = true;
            }
          })
        });
          
      }).catch(() => {
        // console.log(error.response.data);        
      })
    },
    //檔案類型勾選即加入api
    typeSelected(item){
      if(this.editSetting.settings.restrictedFileTypes == null){
        this.editSetting.settings.restrictedFileTypes = []
      }
      if(item.active){
        this.editSetting.settings.restrictedFileTypes.push(item.fileTypeId)
      } else {
        this.editSetting.settings.restrictedFileTypes = this.editSetting.settings.restrictedFileTypes.filter(x=>x !== item.fileTypeId);
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
      // console.log(event.target.value)   
      this.unitId = event.target.value
      // console.log(this.unitId)
      
    },
    putFolder(){


        const data = JSON.stringify([
          {
            "folderId":this.editSetting.folderId,
            "name":this.editSetting.name,
            "description":"string",
            "inherit": this.editSetting.inhert,
            "settings":{
              "storage":{ "space": this.editSetting.space, "unitId": this.editSetting.unitId },
              "restrictedFileTypes":this.editSetting.settings.restrictedFileTypes,
              "accessPermissions":{
                "self":this.editSetting.settings.accessPermissions.self,
                "parent":this.editSetting.settings.accessPermissions.parent
              }
            },
            "editor": this.$store.getters.userId, 
            "editorName":this.$store.getters.currentUser,
          }
        ])

        console.log(data);


        this.axios.patch(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/EditFolder`,
          data,{ headers: window.headers }).then((data) => { 

            console.log(data);
            this.$swal.fire({ title: 'success', icon: 'success' })

          }).catch(error => {
            console.log(error.response.data);    
            this.$swal.fire({ title: error.response.data, icon: 'error' })
        
          })

      

      //if no parent
      // this.FolderSettings.settings.accessPermissions.parent = []

      this.editSetting = {}
      

    },
    getUserTable(){  
      this.axios.get(`${process.env.VUE_APP_USER_APIPATH}/api/Users/GetUsers?searchString=${this.searchText}`)
        .then((data) => {          
          this.useritems = data.data

          this.count = this.useritems.length + this.groupitems.length     
        }).catch(error => {
          console.log(error);        
        })
    },
    getGroupTable() {  
    this.axios.get(`${process.env.VUE_APP_USER_APIPATH}/api/Groups/GetGroups`)
      .then(data => {  
        this.groupitems = data.data 
      }).catch(error => {
        console.log(error.response.data);        
      })
    },
    //點擊針對個人允許行為
    userCan(item){      
      // console.log('該用戶可用的行為', this.PermissionTypes);
      console.log('now user', item);

      this.PermissionTypes.map(x=>x.active = false);
      this.haveUser = true
      this.nowUser = item

      item.allow.forEach(x=>{
        this.PermissionTypes.forEach(permission=>{
          if(permission.permissionTypeId == x) {
            permission.selected = 'allow';
          }
        })
      });

       item.deny.forEach(x=>{
        this.PermissionTypes.forEach(permission=>{
          if(permission.permissionTypeId == x) {
            permission.selected = 'deny';
          }
        })
      });
      

       if(this.editSetting.settings.accessPermissions.parent[0].allow.length > 0){
          this.editSetting.settings.accessPermissions.parent[0].allow.forEach(x=>{
            this.PermissionTypes.forEach(permission=>{
              if(permission.permissionTypeId == x) {
                permission.inFather = true;
              }
            })
          });
        }

        if(this.editSetting.settings.accessPermissions.parent[0].deny.length > 0){
          this.editSetting.settings.accessPermissions.parent[0].deny.forEach(x=>{
            this.PermissionTypes.forEach(permission=>{
              if(permission.permissionTypeId == x) {
                permission.inFather = true;
              }
            })
          });
        }
        // console.log(this.editSetting.settings.accessPermissions.parent);

      // console.log(this.PermissionTypes);

    },
    //左邊切換
    userSelected(item){
      console.log(item ,'item');

      if(!this.editSetting.settings.accessPermissions.self){
        this.editSetting.settings.accessPermissions.self = []
      }

      if(this.editSetting.settings.accessPermissions.self.filter(x=>x.memberId == item.userId).length==0) {
       this.editSetting.settings.accessPermissions.self.push(
         { 
           "memberId": item.userId, 
           "memberName": item.userName, 
           "isGroup": false, 
           "allow": [], 
           "deny": []
         } 
       );
       console.log('這裡要改');
       console.log('目前選擇名單', this.editSetting.settings.accessPermissions.self);
      }   
    },
    groupSelected(item){
      console.log(item ,'now select group');
      if(this.editSetting.settings.accessPermissions.self.filter(x=>x.memberId == item.id).length==0) {
       this.editSetting.settings.accessPermissions.self.push(
         { 
           "memberId": item.id, 
           "memberName": item.groupName, 
           "isGroup": true, 
           "allow": [], 
           "deny": []
         } 
       );
       console.log('目前選擇名單', this.editSetting.settings.accessPermissions.self);
      }
    },   
    //ok
    del(user){
     console.log('user',this.editSetting.settings.accessPermissions.self);

     this.editSetting.settings.accessPermissions.self = this.editSetting.settings.accessPermissions.self.filter(x=>x.memberId !==user.memberId)    

    },
    
  },
};
</script>

