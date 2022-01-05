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
      <div class="btn-group dropend ">
        <button
          type="button"
          class="btn bg-white "
        >
          {{ nowRootFolder }}
        </button>
        <button
          type="button"
          class="btn btn-white dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="visually-hidden">Toggle Dropright</span>
        </button>
        
        <!-- 不行 -->
        <!-- v-if="this.treeSelected.subFolders!== undefined && this.treeSelected.subFolders.length>0" -->
        <!-- v-if="this.folderTree.subFolders !== null" -->

        <ul class="dropdown-menu">
          <!-- Dropdown menu links -->

          <li
            v-for="item in this.folderTree.subFolders"
            :key="item.id"
          >
            <a
              class="dropdown-item"
              href="#"
            >{{ item.name }}</a>
          </li>
        </ul>
      </div>


      <!-- 子層  this.folderTree.subFolders != null-->
      <div v-if="treeSelected != nowRootFolder">
        <div class="btn-group dropend ">
          <button
            type="button"
            class="btn bg-white "
          >
            {{ treeSelected }}
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
            v-if="this.folderTree.subFolders != null"
            class="dropdown-menu"
          >
            <!-- Dropdown menu links -->

            <li
              v-for="item in this.folderTree.subFolders"
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
    treeSelected: { type: String, default: "" },//父層
    folderTree:{ type: Object, default() { }},
    nowRootFolder: { type: String, default: "" },//root

  },
  data() {
    return {
      searchQuery: null,
      personData: {},
      tree:{}
    }
  },
  watch:{ 
   
    folderTree(){ 
      this.tree = this.folderTree
      console.log('tree',this.tree);
      
    } 
  },
  methods: {

   update() {
    this.$emit('update', this.searchQuery);   
    },
    
  
    //返回上一層
    back(){
      this.$emit('back', this.nowfolder);

    }
  }
}
</script>
