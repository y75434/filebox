<style>
  img {
    -webkit-user-select:none;
    -moz-user-select:none;
    -o-user-select:none;
    user-select:none;
  }
</style>
<template>
  <div>
    <div class="col-4 h-100 ">
      <div class="bg-white h-100 border">
        <ul class="list-group border-0 text-dark">
          <!-- tree -->

          <div
            v-for="item in trees"
            :key="item.id"
            @click="selectSelf(item)"
            :style="{ backgroundColor: item.liselected ? '#d3eaff' : 'transparent' }"
          >
            <img
              src="@/assets/images/file/single folder@2x.png"
              class="icon24px "
            >
            {{ item.name }}
          </div>   
        </ul>
      </div>
    </div>
    <div class="col-8 ">
      <div
        class="d-flex flex-column height-70px"
      >
        <button @click="clean()">
          clean
        </button>

       

        <div class="d-flex justify-content-between align-items-center">
          <div class=" form-check">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="editSetting.settings.inherit"
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
            v-if="this.members.length > 0"
          >
            <!--  -->
            <li
              v-for="item in this.members"
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

                disabled="this.editSetting.settings.accessPermissions.parent != []" -->
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
                      :selected=" index == 0"
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
</template>

<script >

export default {
  name: "Test",
  data:() =>({
    FolderSettings:[],
    PermissionTypes:[],
    tempTypes:[],
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
    testTree: {},
    arr:[],
    members:[],
    trees: []
  }),
  computed: {
	
	},
  created() {
    this.getFolderSettings()
    this.getPermissionTypes()
    this.getFileTypes()
    this.getStorageUnit()
    this.arr = []
    this.testTree = {}
    this.getRootTree()
    this.getRootFolder()
  
  },
  methods:{
    clean(){
      this.type = false;
      this.PermissionTypes.map(x=>x.selected = false);
    },
    checked(){
      this.type='allow'
    },
    unchecked(){
      this.type='deny'
    },
    getRootFolder(){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/RootFoldersForAdminPage`)
        .then((data) => { 
          this.trees = data.data;
          
          console.log(this.trees,'全部rootfolder');//rootfolder
        }).catch(error => {
          console.log(error.response.data);        
        })

    },   
    selectSelf(item){
      // this.$forceUpdate(); //强制刷新，解决页面不会重新渲染的问题

      this.trees.forEach(item => {
        item.liselected = false;
      })

      item.liselected = true
      console.log(item, "被點擊", this.trees);
           
      
      this.$forceUpdate(); //强制刷新，解决页面不会重新渲染的问题


      //  console.log(this.liselected, "this.liselected");
    },
    //inhert checkbox變動
    checkInhert(e){
      this.editSetting.inherit = !this.editSetting.inherit
      if(e.target.checked){
        this.members.forEach(item => {
          this.FolderSettings.settings.members.forEach(x => {
            if(item == x) {
              //繼承父層打勾的話 parent換成父層資料 self變成空陣列
              item.parent = x.self
              item.self = []
            }
          })
          console.log(this.members,'checked');
        })
      }else{
        this.members.forEach(item => {
          this.FolderSettings.settings.members.forEach(x => {
            console.log(x);
            if(item == x) {
              //繼承父層取消打勾的話 parent改 [] self換成父層資料
              item.parent = []
              console.log(item.self,x.self);
              item.self = x.self
            }
          })
        console.log(this.members,'unchecked');
        })
      }
    },
  
    //想要一次跑完根資料夾樹狀
    getRootTree(){
      // console.log('test', id);
      
      // const data = JSON.stringify({        
      //   "folderId": "9faab3d8-efa1-491e-848e-fdebb804fb1c",
      //   "uerId": this.$store.getters.userId,
      //   "groups": this.$store.getters.group
      //   }) 

      // this.axios.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTreeForAdminPage`,
      // data,{ headers: window.headers })
      //   .then((data) => {
      //     this.testTree = data.data;
      //     // console.log(this.testTree);          
      //     this.arr.push(this.testTree)
      //       if (this.testTree.subFolders.length > 0 ) {
      //         this.getRootTree(this.testTree.subFolders[0].folderId)
      //       }
      //     })
      //     .catch(() => { // console.log(error.response.data); 
      //     });
      //     console.log(this.arr, 'arr');
    },
    getFolderSettings(){  
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderSettings/9faab3d8-efa1-491e-848e-fdebb804fb1c`)
      .then((data) => { 

        //初始化資料顯示 
        this.FolderSettings = data.data        

          //初始化才需要兩物件一樣
          this.editSetting = this.FolderSettings
      

        this.space = this.editSetting.settings.storage.space
        this.unitId = this.editSetting.settings.storage.unitId

        this.members = this.editSetting.settings.members

    
        
        this.getUserTable()
        this.getGroupTable()


      }).catch(() => {
        // console.log(error.response.data);        
      })
    },
    getPermissionTypes(){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/PermissionTypes`)
      .then((data) => {  
        this.PermissionTypes = data.data;
        this.tempTypes = data.data;
        this.PermissionTypes.map(x=>x.active = false);
    
        // console.log(this.PermissionTypes);
         
        }).catch(() => {
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
    //檔案類型勾選即加入api
    typeSelected(item){
      if(this.nowUser.self.allowFileTypes == null){
        this.nowUser.self.allowFileTypes = []
      }
      if(item.active){
        this.nowUser.self.allowFileTypes.push(item.fileTypeId)
      } else {
        this.nowUser.self.allowFileTypes = this.nowUser.self.allowFileTypes.filter(x=>x !== item.fileTypeId);
      }

      this.nowUser.self.allowFileTypes.forEach(x=>{
        this.FileTypes.forEach(item=>{
          if(item.fileTypeId == x) {
            item.active = true;
          }
        })
      });

    },
    //雙點擊取消單選匡
    cleanChecked(item) { 
      console.log(item);

      // if(this.nowUser.self.allowPermission.indexOf(item.permissionTypeId) != -1){
      //   this.nowUser.self.allowPermission = this.nowUser.self.allowPermission.filter(x=>x !== item.permissionTypeId);
      //   item.selected = false
      // }else{
      //   this.nowUser.self.denialPermission = this.nowUser.self.denialPermission.filter(x=>x !== item.permissionTypeId);
      //   item.selected = false
      // }

      //檢查self有無資料
      if(this.nowUser.self.allowPermission){

        // console.log(this.nowUser.self);

        Object.values(this.nowUser.self).forEach((x)=>{
          let keys = Object.keys(x);
          keys.forEach(key=>{
            
            if(x[key].indexOf(item.permissionTypeId) != -1) {
              item.selected = false
            }
          })
        });
      }
     
      //檢查parent有無資料
      if(this.nowUser.parent.allowPermission){

        Object.values(this.nowUser.parent).forEach((x)=>{
          let keys = Object.keys(x);
          keys.forEach(key=>{
            
            if(x[key].indexOf(item.permissionTypeId) != -1) {
              console.log(item);
              item.selected = false
            }
          })
        });
      }
      this.$forceUpdate();

    },
    getFileTypes(){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FileTypes`)
      .then((data) => {  
        this.FileTypes = data.data
              
      }).catch(() => {
        // console.log(error.response.data);        
      })
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
      console.log('now user', item);
      console.log('PermissionTypes', this.PermissionTypes);
      //點擊後重新設定勾取匡
      this.PermissionTypes.map((x)=>{
        x.active = false;
        x.selected = false;   
          return x;
      })


      this.FileTypes.map((x)=>{
        this.$set(this.FileTypes, x.active, false)         
          return x;
      })

      this.haveUser = true
      this.nowUser = item

      this.PermissionTypes.map(x=>{
        let temps = this.nowUser.self.allowPermission.filter(permission=>permission==x.permissionTypeId);
        if(temps.length>0) {
          x.selected = 'allow';
        }else {
          x.selected = false;
        }
        return x;
      })
      console.log(this.PermissionTypes);

      //依據繼承與否進行函式
      if(this.editSetting.settings.inherit == true) {
        this.inheritParent()
      }else{
        console.log('notInherit');
        this.notInherit()
      }
      this.$forceUpdate();
    
    },
    inheritParent(){
      //顯示radio匡 inFather狀態
      if(this.nowUser.parent.allowPermission.length > 0){
        this.nowUser.parent.allowPermission.forEach(x=>{
          this.PermissionTypes.forEach(item=>{
            if(x == item.permissionTypeId) {
              item.inFather = true;
            }else{
              item.inFather = false;
            }
          })          
        });
      }

      console.log('檢查infather',this.PermissionTypes,);

       if(this.nowUser.parent.denialPermission.length > 0){
        this.nowUser.parent.denialPermission.forEach(x=>{
            this.PermissionTypes.forEach(item=>{
              if(x == item.permissionTypeId) {
                item.inFather = true;
              }else{
                item.inFather = false;
              }
          })  
        });
      }

       if(this.nowUser.parent.allowFileTypes.length > 0){
        this.nowUser.parent.allowFileTypes.forEach(x=>{
          this.FileTypes.forEach(item=>{
            if(x == item.permissionTypeId) {
              item.inFather = true;
            }else{
              item.inFather = false;
            }
          })
        })
       }

       //parent radio 設定

        if(!this.nowUser.parent.allowPermission){
          this.nowUser.parent.allowPermission = []
        }

       this.nowUser.parent.allowPermission.forEach(x=>{
        this.PermissionTypes.forEach(permission=>{
          if(permission.permissionTypeId == x) {
            permission.selected = 'allow';
          }
        })
      });
      
      if(!this.nowUser.parent.denialPermission){
        this.nowUser.self.denialPermission = []
      }

       this.nowUser.parent.denialPermission.forEach(x=>{
        this.PermissionTypes.forEach(permission=>{
          if(permission.permissionTypeId == x) {
            permission.selected = 'deny';
          }
        })
      });
  
     if(!this.nowUser.parent.allowFileTypes){
        this.nowUser.parent.allowFileTypes = []
      }

      this.nowUser.parent.allowFileTypes.forEach(x=>{
        this.FileTypes.forEach(item=>{
          if(item.fileTypeId == x) {
             item.active = true;
          }
        })
      });

      // console.log(this.nowUser,'self  user');
    },
    notInherit(){
      if(!this.nowUser.self.allowPermission){
        this.nowUser.self.allowPermission = []
      }

      console.log(this.nowUser);

      this.nowUser.self.allowPermission.forEach(x=>{
        this.PermissionTypes.forEach(permission=>{
          if(permission.permissionTypeId == x) {
            permission.selected = 'allow';
          }
        })
      });
      
      if(!this.nowUser.self.denialPermission){
        this.nowUser.self.denialPermission = []
      }

       this.nowUser.self.denialPermission.forEach(x=>{
        this.PermissionTypes.forEach(permission=>{
          if(permission.permissionTypeId == x) {
            permission.selected = 'deny';
          }
        })
      });
  
     if(!this.nowUser.self.allowFileTypes){
        this.nowUser.self.allowFileTypes = []
      }

      this.nowUser.self.allowFileTypes.forEach(x=>{
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

      if(!this.editSetting.settings.members){
        this.editSetting.settings.members = []
      }

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
              "allowPermission": [],
              "denialPermission": [],
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
            "allowPermission": [],
            "denialPermission": [],
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
     console.log('user',this.editSetting.settings.members);

     this.editSetting.settings.members = this.editSetting.settings.members.filter(x => x.memberId !== user.memberId)    
    //  this.members = this.editSetting.settings.members

    },

   
    
   
    
      
  }
}





</script>
