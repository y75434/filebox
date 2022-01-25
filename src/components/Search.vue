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
      <div class="btn-group dropend h-30">
        <button
          type="button"
          class="btn bg-white "
          @click="getSelected(nowRootFolder.folderId)"
        >
          {{ nowRootFolder.name }}
        </button>
        <button
          type="button"
          class="btn btn-white dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="visually-hidden">Toggle Dropright</span>
        </button>
        

        <ul v-if="this.rootFolderTree.subFolders"  class="dropdown-menu">
          <!-- rootfolder sub -->

          <!-- 傳入的參數是 id -->

          <li
            @click="getSelected(item.folderId)"
            v-for="item in this.rootFolderTree.subFolders"
            :key="item.id"
          >
            <a
              class="dropdown-item"
              href="#"
            >{{ item.name }}</a>
          </li>
        </ul>
      </div>


      <!-- 子層  this.folderTree.subFolders != null   v-if="treeSelected.folderId != nowRootFolder.folderId"-->
      <div v-if="this.treeSelected && this.treeSelected.name != this.nowRootFolder.name">
        <div class="btn-group dropend h-30">
          <button
            type="button"
            class="btn bg-white "
            @click="getSelected(treeSelected.id)"
          >
            {{ treeSelected.name }}
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
          >
            <!-- subfolder sub -->

            <li
              v-for="item in this.treeSelected.subFolders"
              :key="item.id"
            >
              <a
                class="dropdown-item"
                href="#"
              >{{ item.name }}</a>
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


export default {
  name: "Search",
  props: { 
    treeSelected: { type: Object, default(){} },//父層
    nowRootFolder: { type: Object, default(){}},//root

  },
  data() {
    return {
      searchQuery: null,
      personData: {},
      folderTree:{},
      rootFolderTree:{},
      nowfolder: ""
    }
  },
  watch:{   
    // folderTree(){ 
    //   this.tree = this.folderTree
    //   console.log('外部傳進來的子層',this.tree);   
    // },
    nowRootFolder(){ 
      this.rootFolderTree = this.nowRootFolder
      console.log('rootFolderTree',this.rootFolderTree);  
      // this.getFolderTree(this.nowRootFolder.folderId) 
    } 
  },
  methods: {

   update() {
    this.$emit('update', this.searchQuery);   
    },
    
  
    //返回上一層 目前返回到該 rootfolder 裏面
    back(){
      this.$emit('back', this.rootFolderTree.folderId);
      console.log(this.rootFolderTree);

    },
    //點擊到該路徑
    getSelected(id){
      console.log(id,'id傳回 home.vue');
      this.$emit('back', id);
      this.treeSelected.id  = id


    },
    getFolderTree(id){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTree/${id}`)
      .then((data) => { 
        console.log(this.FolderTree,'hi');
        this.FolderTree = data.data
        console.log(this.FolderTree,'子資料夾每次更改folderTree');
       
      }).catch((error) => {
         console.log(error.response.data);        
      })
    },
  }
}
</script>
