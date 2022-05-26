<template>
  <div class="dqbz-path-block">
    <!-- <button class="dqbz-previous">
      <img
        src="@/assets/images/arrow/arrow-left@2x.png"
        class="nav-icon"
      >
    </button>
    <button class="dqbz-previous">
      <img
        src="@/assets/images/arrow/arrow-right@2x.png"
        class="nav-icon"
      >
    </button>
    <button class="dqbz-previous">
      <img
        src="@/assets/images/arrow/down@2x.png"
        class="nav-icon"
      >
    </button> -->


    <!-- 傳入的參數是rootfolder id -->
    <button
      @click="back()"
      class="dqbz-previous bg-light"
    >
      <img
        src="@/assets/images/arrow/arrow-up@2x.png"
        class="nav-icon"
      >
    </button>
    <div class="btn-group dropend">
      <button
        type="button"
        class="btn dqbz-previous bg-light dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      />
      <ul class="dropdown-menu">
        <li>
          <a
            class="dropdown-item"
            href="#"
          >Another action</a>
        </li>
        <li>
          <a
            class="dropdown-item"
            href="#"
          >Something else here</a>
        </li>
      </ul>
    </div>


    <!-- <select
      class="form-select"
      aria-label="Default select example"
    >
      <option selected />
    </select> -->
    <div class="input-group float-left bg-white">
      <div>
        <div
          class="btn-group dropend h-30"
          v-for="item in arr"
          :key="item.folderId"
        >
          <button
            type="button"
            class="btn bg-white "
            @click="getSelected(item.folderId)"
          >
            {{ item.name }}
          </button>
          <button
            type="button"
            class="btn btn-white dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropright</span>
          </button>

          <ul
            class="dropdown-menu"
            v-if="item.subFolders"
          >
            <li
              v-for="sub in item.subFolders"
              :key="sub.folderId"
              @click="getSelected(sub.folderId)"
            >
              <a
                class="dropdown-item"
                href="#"
              >{{ sub.name }}</a>
            </li>
          </ul> 
        </div>
      </div>
    </div>

    
    <button class="dqbz-previous">
      <img
        src="@/assets/images/cmd/refresh@2x.png"
        class="nav-icon"
      >
    </button>
    <b-form-input
      type="text"
      placeholder="Search"
      v-model="searchQuery"
      @change="update"
    />
    <!-- <b-button
      class="text-white"
      style="background-color:#66ACEC;"
    >
      <img
        src="@/assets/images/arrow/arrow-right@2x.png" 
        class="nav-icon"
      >
    </b-button> -->
  </div>
</template>

<script>
import cmqRequest from "@/http/cmqRequest"


export default {
  name: "Search",
  props: { 
    treeSelected: { type: Object, default(){} },//父層
    nowRootFolder: { type: Object, default(){}},//root

  },
  data() {
    return {
      searchQuery: null,
      folderTree:null,
      arr: [],
      testArr:[],
      testTree: null,
      trees:[]

    }
  },
  created(){
   this.getRootFolder()
  },
  watch:{    
    nowRootFolder(){ 
      this.FolderTree = null
      this.arr = []

      console.log('rootFolder changed'); 
      this.getFolderTree(this.nowRootFolder.folderId) 

      this.$store.dispatch(`setRoot`, this.nowRootFolder);
    },
    treeSelected(){
      this.getFolderTree(this.treeSelected.id)
      // this.arr.push(this.FolderTree)
    } 

  },
  methods: {
    showAlert(){
     this.$bus.$on("showAlert", tree => {
      this.getFolderTree(tree.folderId);
      console.log(tree);
      
    });    
   },
   update() {
    this.$emit('update', this.searchQuery);   
    }, 
    //返回上一層 目前返回到該 rootfolder 裏面
    back(){
      this.arr.pop()
      console.log(this.arr,'回上層');

      if(this.arr.length > 0){
        this.$emit('back', this.arr[this.arr.length -1].folderId);
      }else{
        this.$emit('getRoot');
      }

    },
    //點擊到該路徑
    getSelected(id){
      console.log(id,'id傳回 home.vue');
      this.$emit('back', id);
      this.treeSelected.id  = id
    },
   
    //要跑這個func才會顯示路徑
    getFolderTree(id){

        const data = JSON.stringify({        
          "folderId": id,
          "uerId": this.$store.getters.userId,
          "groups": this.$store.getters.group
        })   
        // console.log(data, 'foldertree request');

      if(this.$store.getters.isAdmin != null){
        cmqRequest.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTreeForAdminPage`,
        data).then((data) => { 

          console.log(data, 'admin');
          //先跑回圈看nowrootfolder有無該folder
          this.getRootTree(this.nowRootFolder.folderId)
          this.testArr = []

         
          this.FolderTree = data.data

          //刪除arr重複值
          this.arr = this.arr.filter(x=>x.folderId !== this.FolderTree.folderId);
          this.arr.push(this.FolderTree) 
          
        }).catch((error) => {
          console.log(error.response.data);        
        })
      }else{

        cmqRequest.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTree`,
        data).then((data) => { 

          console.log(data, 'normal');
          this.FolderTree = data.data
          this.arr.push(this.FolderTree)
        
        }).catch((error) => {
          console.log(error.response.data);        
        })
      }
      console.log(this.FolderTree,'目前位置的父層');
      console.log(this.arr,'包含目前位置的tree');

    },
    //檢查根資料夾有無目前sidebar點擊的路徑
    getRootTree(id){
      const data = JSON.stringify({        
        "folderId": id,
        "uerId": this.$store.getters.userId,
        "groups": this.$store.getters.group
      }) 
      if(this.$store.getters.isAdmin != null) {


        cmqRequest.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTreeForAdminPage`,
        data)
          .then((data) => {
            this.testTree = data.data;
            // console.log(this.testTree,'每個資料夾各跑一次');

            //把now root換掉

              //nowrootfolder 有 就要把該id之後的資料夾刪掉
              //loop tree取代現有arr 
              //想把外層傳入值更換 目前無效
              //要找this.tree
                
              // this.nowRootFolder = this.FolderTree

console.log(this.nowRootFolder);

              // console.log('測到rootfolder不同換 tree');
              // this.arr = this.testArr
              // this.arr = this.arr.filter(x=>x.folderId !== this.FolderTree.folderId);


              // this.testArr.push(this.testTree)
              // if (this.testTree.subFolders.length > 0 ) {
              //   this.getRootTree(this.testTree.subFolders[0].folderId)
              // }
            })
            .catch(() => { // console.log(error.response.data); 
            });
        }
          console.log(this.testArr, 'all folder');
    },//一次跑完所有樹狀
    getRootFolder(){
      cmqRequest.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/RootFoldersForAdminPage`)
        .then((data) => { 
          this.trees = data.data;
          
          console.log(this.trees,'全部rootfolder');//rootfolder


          this.trees.forEach((item)=>{
            this.getRootTree(item.folderId)
          
          })

        }).catch(error => {
          console.log(error.response.data);        
        })

        

  },   
  
  }
}


</script>
