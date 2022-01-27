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
        >
          <button
            type="button"
            class="btn bg-white "
            @click="getSelected(item.folderId)"
            v-for="item in arr"
            :key="item.folderId"
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
          >
            <li
              v-for="item in arr.subFolders"
              :key="item.folderId"
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
      folderTree:null,
      arr: []
    }
  },
  watch:{    
    nowRootFolder(){ 
      this.FolderTree = null
       this.arr = []
      // this.$set(this.arr, [])

      console.log('rootFolder changed'); 
      this.getFolderTree(this.nowRootFolder.folderId) 
    },
    treeSelected(){
      this.getFolderTree(this.treeSelected.id)
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

        this.FolderTree = data.data
        console.log(this.FolderTree, 'this.FolderTree');
        
        // let check = this.arr.filter(x=>x.folderId != id)

        // if(check){
           this.arr.push(this.FolderTree)
         //}

        console.log(this.FolderTree,'目前 folderTree 242');
        console.log(this.arr,'arr 243');

       
      }).catch((error) => {
         console.log(error.response.data);        
      })
    },
    
  }
}


</script>
