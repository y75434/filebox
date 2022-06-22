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
    @ok="putTest"
  >
    <!--     :ok-disabled="unchecked" -->
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
                      >
                      <!-- :style=" editSetting.inherit ? {opacity:'0.3'} : {opacity:'1'}"  -->
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
                        {{ item.memberName }}
                        <img
                          @click="del(item)"
                          src="@/assets/images/cmd/del.png"
                          class="icon-20px"
                          v-if="!editSetting.inherit"
                        >
                        <!-- item.canDelete -->
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
                      class="form-check overflow-scroll" 
                      style="height:350px"                  
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
                          <!--   :disabled="item.inFather" -->
                          <input
                            :disabled="item.inFather"
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
      storageRest: false,
      RESTRICT: false,
      rootStorage: []
      // unchecked: false
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

          //更換資料夾時要把資料暫存到
            const target = this.rootStorage.find(item => item.folderId === this.editSetting.folderId);

            if(target){

              //第二次以後撈rootStorage資料
              //更新rootStorage舊資料
              
              Object.assign(target,JSON.parse(JSON.stringify(this.editSetting)));
              console.log(this.rootStorage,'取代',this.editSetting.name);
              //取消勾選
              // this.editSetting.inherit.active == false
              //資料夾第一次點擊時要抓vuex資料
              let api = this.$store.getters.liselected
              this.editSetting = api
            }else{        

              this.rootStorage.push(this.editSetting)
              this.editSetting = this.$store.getters.liselected
              console.log(this.rootStorage,'加入',this.editSetting.name);
            }

          // console.log(this.editSetting,'liselected');
          // console.log(this.FolderSettings.settings.members);

        }else{
          //第一次點擊才需撈後端資料
          this.editSetting = this.$store.getters.liselected
          console.log(this.editSetting.name,'點開modal');
        }

        this.reset()

    },
   },
   created(){
     this.$store.dispatch('setLiselected', {folderId:""})
   },
   methods: { 
   
    //inhert checkbox變動
    checkInhert(e){
      if(e.target.checked){

        //
          if (this.editSetting.settings.members.length != 0) { 
            this.editSetting.settings.members.forEach(x=>{
              this.FolderSettings.settings.members.forEach(item=>{
                
                if(x.memberId == item.memberId) {
                  x.parent = item.self
                  // 子資料夾未繼承的成員
                  // x.canDelete = false
    
                  console.log(x,'子資料夾有該用戶');
                }else{
                  //子資料夾無該用戶 直接加入子資料夾
                  // let temp = JSON.parse(JSON.stringify(item));
                  // temp.parent = temp.self
                  // temp.self = {
                  //   allowPermission: [],
                  //   denialPermission: [],
                  //   allowFileTypes: [],
                  //   denialFileTypes: []
                  // }
                  // this.editSetting.settings.members.push(temp)
                }
              })
            })

          }else{
            //editSetting.length = 0
            //直接把根資料夾資料搬過來

            this.editSetting.settings.members = JSON.parse(JSON.stringify(this.FolderSettings.settings.members))
            // console.log(this.editSetting.settings.members,'541');

            this.editSetting.settings.members.forEach(x=>{
                // x.canDelete = false
                x.parent = x.self
                x.self = {
                  allowPermission: [],
                  denialPermission: [],
                  allowFileTypes: [],
                  denialFileTypes: []
                }
            })

            console.log(this.editSetting.settings.members);
          }
            
        this.reset()
        console.log( this.editSetting.settings.members,'checked');

      }else{
    
        //把根資料夾的成員從子資料夾成員刪除
        this.editSetting.settings.members = this.editSetting.settings.members.filter(item => !this.FolderSettings.settings.members.includes(item));
        //子資料夾的成員可自由刪除
        // this.editSetting.settings.members.forEach(item => item.canDelete = true);

        this.reset()
        this.$forceUpdate();

        console.log(this.editSetting.settings.members,'unchecked',
        this.FolderSettings.settings.members);
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
        x.inFather = false; 
          return x;
      })

      this.FileTypes.map((x)=>{
        x.active = false;
        x.inFather = false; 

        return x;
      })
    },
    getFolderSettings(id){  
      cmqRequest.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderSettings/${id}`)
      .then((data) => { 
        // console.log(id,this.$store.getters.liselected,'579');
        // console.log('初始化');

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
      console.log(this.nowUser, item, this.editSetting.inherit)

      if(item.selected == "allow" ){
        console.log('allow');
        this.nowUser.self.allowPermission.push(item.permissionTypeId) 
        this.nowUser.self.denialPermission = this.nowUser.self.denialPermission.filter(x=>x !== item.permissionTypeId);
      
      } else if(item.selected == "deny"){
        console.log('deny');
        this.nowUser.self.denialPermission.push(item.permissionTypeId)
        this.nowUser.self.allowPermission = this.nowUser.self.allowPermission.filter(x=>x !== item.permissionTypeId);
      
      }
      else{
        console.log('err');
        
      }
      console.log(this.nowUser)

    },
    //檔案類型勾選即加入api
    typeSelected(item){

      console.log(item);  
  
      if(item.active == true){
        this.nowUser.self.allowFileTypes.push(item.fileTypeId)
      }else{
        console.log('delete filetype');  

        this.nowUser.self.allowFileTypes = this.nowUser.self.allowFileTypes.filter(x=>x !== item.fileTypeId); 
      }
     

    },
    //雙點擊取消單選匡
    cleanChecked(item) { 
      console.log(item,'cleanChecked')

      if(item.selected == "allow" ){
        console.log('allow');
        this.nowUser.self.allowPermission = this.nowUser.self.allowPermission.filter(x=>x !== item.permissionTypeId);  
      } else if(item.selected == "deny"){
        console.log('deny');
        this.nowUser.self.denialPermission = this.nowUser.self.denialPermission.filter(x=>x !== item.permissionTypeId);
      }
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
    
     putTest(){

      //記得加入最後一次點擊的資料夾 並取代它在rootStorage的資料
      let temp = this.editSetting
      this.rootStorage = this.rootStorage.filter(x => x.folderId != temp.folderId)    
      this.rootStorage.push(temp)

      console.log(temp,'temp');
      
      let root = this.rootStorage.filter(x => x.folderId == this.FolderSettings.folderId)[0]   
      console.log(root,'root');

      let son = this.rootStorage.filter(x => x.folderId != this.FolderSettings.folderId)    
      console.log(son,'son');

      son.forEach(x=>{
        //所有的parent 為空
        let temp = x.settings.members
        // console.log(temp);

        temp.forEach(item => {
          let keys = Object.keys(item.parent);
          keys.forEach(key=>{
            item.parent[key] = [];
            
          })
          // console.log(item,'816');

        });
            
      });

      console.log(son,'delete parent');


      son.push(root)


       son.forEach((item) => {
        item.editor = this.$store.getters.userId;
        item.editorName = this.$store.getters.currentUser;
        item.settings.storage = { space: this.space, unitId: this.unitId };

      });


      const loop = Promise.all(
        son.map((item) => new Promise((resolve) => {

          item  = JSON.stringify([item])

          console.log(item ,'put obj');


          cmqRequest.patch(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/EditFolder`,item).then((data) => { 
            console.log(data);
            // this.$swal.fire({ title: 'success', icon: 'success' })

          }).catch(error => {
            console.log(error.response);    

            console.log(error.response.data.error);    
            // this.$swal.fire({ title: error.response.data.error, icon: 'error' })
        
          })
          resolve();
        }))
      );

      loop.then(() => {
        console.log('loop finished');
      });
  
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
      // console.log('inFather',this.nowUser);

      this.PermissionTypes.map(x=>{
        //parent allow
        let temps = this.nowUser.parent.allowPermission.filter(permission=>permission==x.permissionTypeId);
          if(temps.length > 0) {
            x.selected = 'allow';
            x.inFather = true;

          }
        //parent deny
        let denytemps = this.nowUser.parent.denialPermission.filter(permission=>permission==x.permissionTypeId);
          if(denytemps.length > 0) {
            x.selected = 'deny';
            x.inFather = true;

          }

        let selfallow = this.nowUser.self.allowPermission.filter(permission=>permission==x.permissionTypeId);
        if(selfallow.length > 0) {
          x.selected = 'allow';

        }

        let selfdeny = this.nowUser.self.denialPermission.filter(permission=>permission==x.permissionTypeId);
          if(selfdeny.length > 0) {
            x.selected = 'deny';
          }
        return x;
      })


       this.FileTypes.map(x=>{
        //parent file
        let temps = this.nowUser.parent.allowFileTypes.filter(item=> item == x.fileTypeId);
          if(temps.length > 0) {
            x.active = true;
            x.inFather = true;
          }

        //self file
        let selffile = this.nowUser.self.allowFileTypes.filter(item=> item == x.fileTypeId);
          if(selffile.length > 0) {
            x.active = true;
          }

        return x;
      })
      console.log(this.PermissionTypes);   

    },
    notInherit(){ 

       this.PermissionTypes.map(x => {
        let allow = this.nowUser.self.allowPermission.filter(item => item == x.permissionTypeId);
        if(allow.length>0) {
          x.selected = 'allow';
        }

        let deny = this.nowUser.self.allowPermission.filter(item => item == x.permissionTypeId);
          if(deny.length>0) {
            x.selected = 'deny';
          }

        return x;
      })

      console.log(this.nowUser);

      this.nowUser.self.allowPermission.forEach(x=>{
        this.PermissionTypes.forEach(permission=>{
          if(permission.permissionTypeId == x) {
            permission.selected = 'allow';
            permission.inFather = false;

          }
        })
      });

       this.nowUser.self.denialPermission.forEach(x=>{
        this.PermissionTypes.forEach(permission=>{
          if(permission.permissionTypeId == x) {
            permission.selected = 'deny';
            permission.inFather = false;
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
            },
            "parent": {
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
           },
           "parent": {
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

     this.reset()

    },
    
  },
};
</script>

