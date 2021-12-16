<template>
  <div @contextmenu="handler($event)">
    <Navbar />
    <div class="dqbz-body">
      <div class="dqbz-fnlist">
        <div class="fn-box bg-light">
          <div class="d-flex fn-w-150 align-items-center">
            <div
              class="d-flex flex-column w-30"
            >
              <img
                src="@/assets/images/cmd/copy@2x.png"
                alt="copy"
                :style=" selectedLength>0 ? {opacity:'1'} : {opacity:'0.3'}"
              >
              <span class="nav-text text-center">{{ $t("HOME.COPY") }}</span>
            </div>
            <div
              class="d-flex flex-column w-30"
            >
              <img
                src="@/assets/images/cmd/paste@2x.png"
                alt="paste"
                :style=" copy ? {opacity:'1'} : {opacity:'0.3'}"
              >
              <span class="nav-text text-center">{{ $t("HOME.PASTE") }}</span>
            </div>
            <div
              class="d-flex flex-column w-30"
            >
              <img
                src="@/assets/images/cmd/cut@2x.png"
                alt=""
                :style=" cut ? {opacity:'1'} : {opacity:'0.3'}"
              >
              <span class=" nav-text text-center">{{ $t("HOME.CUT") }}</span>
            </div>    
            <span class="text-center">{{ $t("HOME.CLIPBOARD") }}</span>
          </div>
          <div class="divider" />
          <div class="fn-w-100 d-flex align-items-center">
            <li 
              @click="DeleteFolder"
              class="d-flex flex-column w-50"
            >
              <img
                src="@/assets/images/cmd/delete@2x-2.png"
                alt=""
                :style=" selectedLength>0 ? {opacity:'1'} : {opacity:'0.3'}"
              >
              <span class="nav-text text-center">
                {{ $t("HOME.DELETE") }}
              </span>
            </li>
            <li 
              @click="RenameItem"
              class="d-flex flex-column w-50"
            >
              <img
                src="@/assets/images/cmd/rename@2x.png"
                alt=""
                :style=" selectedLength==1 ? {opacity:'1'} : {opacity:'0.3'}"
              >
              <span class="nav-text text-center">{{ $t("HOME.RENAME") }}</span>
            </li>
            <span class="text-center">{{ $t("HOME.ORGANIZE") }}</span>
          </div>
          <div class="divider" />
          <div class="fn-w-60 align-items-center d-flex">
            <li
              @click="CreateFolder"
              class="d-flex flex-column "
            >
              <img
                src="@/assets/images/file/new folder@2x.png"
                alt=""
                :style=" selectedLength==0 ? {opacity:'1'} : {opacity:'0.3'}"
              >

              <span class="nav-text text-center">{{ $t("HOME.NEW") }}</span>
            </li>
            <span class="nav-text text-center">{{ $t("HOME.NEW") }}</span>
          </div>
          <div class="divider" />
          <div class="fn-w-100 d-flex align-items-center">
            <div class="d-flex flex-column w-50">
              <img
                src="@/assets/images/cmd/download@2x.png"
                alt=""
                :style=" selectedLength>0 ? {opacity:'1'} : {opacity:'0.3'}"
              >
              <span class="nav-text text-center">{{ $t("HOME.DOWNLOAD") }}</span>
            </div>
            <li
              @click="UploadFiles"
              class="d-flex flex-column w-50"
            >
              <img
                src="@/assets/images/cmd/upload@2x.png"
                alt=""
                :style=" selectedLength==0 ? {opacity:'1'} : {opacity:'0.3'}"
              >
              <span class="nav-text text-center">{{ $t("HOME.UPLOAD") }}</span>
            </li>
            <span class="text-center">{{ $t("HOME.TRANSFER") }}</span>
          </div>
          <!-- 留著 -->
          <!-- <div class="divider" />
          <div class="fn-w-100 d-flex align-items-center">
            <div class="d-flex flex-column w-50">
              <img
                src="@/assets/images/file/add to zip@2x.png"
                alt=""
              >
              <span class="nav-text text-center">add to zip</span>
            </div>
            <div class="d-flex flex-column w-50">
              <img
                src="@/assets/images/file/extract all files@2x.png"
                alt=""
              >
              <span class="nav-text text-center">extract all files</span>
            </div>

            <span class="text-center">Compression</span>
          </div> -->
          <div class="divider" />
          <div class="fn-w-160 d-flex align-items-center flex-column py-3">
            <b-button
              v-b-tooltip.hover
              @click="AddPublicLink"
              title="Create public link..."
              class="bg-light text-dark border-0 p-0 d-flex"
            >
              <img
                src="@/assets/images/file/publiclink@2x.png"
                class="nav-icon pe-1 mx-auto"
                :style=" selectedLength==0 ? {opacity:'1'} : {opacity:'0.3'}"
              >
              <span class="d-sm-none d-md-block d-lg-block text-truncate">{{ $t("HOME.CREATEPUBLICLINK") }}

              </span>
            </b-button>

            <b-button
              @click="ManagePublicLink"
              v-b-tooltip.hover
              title="Manage public links..."
              class="bg-light text-dark border-0 p-0 d-flex"
            >
              <img
                src="@/assets/images/icon/managepubliclink@2x.png"
                class="nav-icon pe-1 mx-auto"
                :style=" selectedLength>0 ? {opacity:'1'} : {opacity:'0.3'}"
              >
              <span class="d-sm-none d-md-block d-lg-block ">{{ $t("HOME.MANAGEPUBLICLINKS") }}</span>
            </b-button>

            <span class="text-center">{{ $t("HOME.SHARE") }}</span>
          </div>
          <div class="divider" />
          <div class="fn-w-150 d-flex flex-column py-3">
            <b-button
              v-b-tooltip.hover
              title="Select all"
              class="bg-light text-dark border-0 p-0 mb-1 d-flex"
              @click="selectAll"
            >
              <img
                src="@/assets/images/cmd/select all@2x.png"
                class="nav-icon pe-1 "
              >
              <span class="d-sm-none d-md-block">{{ $t("HOME.SELECTALL") }}</span>
            </b-button>

            <b-button
              v-b-tooltip.hover
              title="Select none"
              class="bg-light text-dark border-0 p-0 mb-1 d-flex"
              @click="selectNone"
            >
              <img
                src="@/assets/images/cmd/select none@2x.png"
                class="nav-icon pe-1 "
              >
              <span class="d-sm-none d-md-block">{{ $t("HOME.SELECTNONE") }}</span>
            </b-button>
            <b-button
              v-b-tooltip.hover
              title="Invert Selection"
              class="bg-light text-dark border-0 p-0 d-flex"
              @click="invert"
            >
              <img
                src="@/assets/images/icon/invert selection@2x.png"
                class="nav-icon pe-1 "
              >
              <span class="d-sm-none d-md-block">{{ $t("HOME.INVERTSELECTION") }}</span>
            </b-button>
            <span class="text-center">{{ $t("GENERAL.SELECT") }}</span>
          </div>
          <div class="divider" />
          <div class="fn-w-180">
            <div class="d-flex justify-content-between py-2">
              <b-button
                v-b-tooltip.hover
                title="Large icons"
                class="window-btn bg-light text-dark border-0 p-0 flex-column d-flex align-items-center"           
              >
                <img
                  src="@/assets/images/icon/large icons@2x.png"
                  class="nav-icon pe-1"
                >
                <span class="">{{ $t("HOME.LARGE") }}</span>
              </b-button>
              <b-button
                v-b-tooltip.hover
                title="icons"
                class="window-btn bg-light text-dark border-0 p-0 flex-column d-flex align-items-center"
              >
                <img
                  src="@/assets/images/icon/icons@2x.png"
                  class="nav-icon pe-1"
                >
                <span class="">{{ $t("HOME.ICONS") }}</span>
              </b-button>
            </div>
            <div class="d-flex justify-content-between my-2">
              <b-button
                v-b-tooltip.hover
                title="Tiles"
                class="window-btn bg-light text-dark border-0 p-0 flex-column d-flex align-items-center"
              >
                <img
                  src="@/assets/images/file/tile@2x.png"
                  class="nav-icon pe-1"
                >  
                <span class="">{{ $t("HOME.TILES") }}</span>
              </b-button>
              <b-button
                v-b-tooltip.hover
                title="Details"
                class="window-btn bg-light text-dark border-0 p-0 flex-column d-flex align-items-center"
              >
                <img
                  src="@/assets/images/icon/details@2x.png"
                  class="nav-icon pe-1 "
                >
                <span class="">{{ $t("HOME.DETAILS") }}</span>
              </b-button>
            </div>
            <span class="text-center">{{ $t("HOME.LAYOUT") }}</span>
          </div>
          <div class="divider" />
          <div class="fn-w-150 d-md-none d-lg-block py-2">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="1"
                id="Item check boxes"
                v-model="renderCheckboxs"
              >
              <label
                class="form-check-label"
                for="Item check boxes"
              >
                {{ $t("HOME.ITEMCHECKBOXES") }}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="2"
                id="File extensions"
                v-model="extensions"
              >
              <label
                class="form-check-label"
                for="File extensions"
              >
                {{ $t("HOME.FILEEXTENSIONS") }}

              </label>
            </div>

            <span class="text-center">{{ $t("HOME.SHOWHIDE") }}</span>
          </div>
          <div class="divider" />
        </div>
      </div>
      <Search
        :tree-selected="treeSelected"
        :sub-tree="[this.folderitems]"
        @update="selfUpdate"
      />
      <div />
      <!-- main -->
      <div class="dqbz-main">
        <Splitpanes class="h-100">
          <Pane
            :size="paneSize"
            min-size="10"
            max-size="25"
            class="d-flex align-items-start"
          >
            <div
              class="accordion accordion-flush d-flex flex-column w-100"
              id="accordionFlushExample"
            >
              <div class="accordion-item">
                <h2
                  class="accordion-header"
                  id="flush-headingOne"
                >
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <img
                      :src="`${this.treeItems[0].pic}`"
                      class="icon24px"
                    >
                    Root Folder
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <h6 class="text-dark">
                      <img
                        :src="`${this.treeItems[0].pic}`"
                        class="icon24px"
                      >
                      Folder One
                    </h6>
                    <h6 class="text-dark">
                      <img
                        :src="`${this.treeItems[0].pic}`"
                        class="icon24px"
                      >

                      Folder Two
                    </h6>
                    <h6 class="text-dark">
                      <img
                        :src="`${this.treeItems[1].pic}`"
                        class="icon24px"
                      >

                      7Z Archive
                    </h6>
                    <h6 class="text-dark">
                      <img
                        :src="`${this.treeItems[4].pic}`"
                        class="icon24px"
                      >

                      ZIP Archive
                    </h6>
                    <h6 class="text-dark">
                      <img
                        :src="`${this.treeItems[2].pic}`"
                        class="icon24px"
                      >

                      RAR Archive
                    </h6>
                    <h6 class="text-dark">
                      <img
                        :src="`${this.treeItems[3].pic}`"
                        class="icon24px"
                      >

                      TAR Archive
                    </h6>
                    <h6 class="text-dark">
                      <img
                        :src="`${this.treeItems[2].pic}`"
                        class="icon24px"
                      >

                      RAR Archive
                    </h6>
                  </div>
                </div>
              </div>
              
              <div
                
                class="accordion-item"
              >
                <h2
                  class="accordion-header"
                  id="flush-headingThree"
                >
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                    @click="passRoute($event)"                   
                    :value="this.folderTree.name"
                  >
                    <img
                      :src="`${this.treeItems[0].pic}`"
                      class="icon24px"
                    >
                    {{ folderTree.name }}
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body p-1">
                    <!-- new -->

                    <div
                      class="accordion"
                      id="accordionExample"
                    >
                      <div
                        class="accordion-item"
                        v-for="item in this.folderTree.subFolders"
                        :key="item.id"
                        @click="passRoute($event)"                   
                        :value="item.name"
                      >
                        <h2
                          class="accordion-header"
                          id="headingOne"
                        >
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            {{ item.name }}
                          </button>
                        </h2>
                        <!-- <div
                          id="collapseOne"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body ">
                            <h6 class="text-dark">
                              ccc
                            </h6>
                          </div>
                        </div> -->
                      </div>
                    </div>
                    <!-- new -->
                  </div>
                </div>
              </div>
            </div>
          </Pane>
          <Pane
            :size="100 - paneSize"
            class="d-flex align-items-start justify-content-start"
          >
            <!-- v-for="item in items" :key="item.message" -->
            
            

            <!-- 原版 -->
            <!-- <label      
              v-for="item in allFiles"
              :key="item.id"
              class="d-flex flex-column position-relative"
              @change="ischecked = !ischecked"
              :style="item.ischecked ? {backgroundColor: '#d3eaff'} : {backgroundColor:'transparent'}"
            >
              <input
                class="form-check-input itemCheckbox"
                type="checkbox"
                v-model="item.ischecked"
                v-if="renderCheckboxs"
              >
              <img
                :src="item.pic"
                class="folder-icon"
              >
              <h6 class="text-dark text-center">
                {{ item.name }}<span
                  class="text-dark"
                  v-if="extensions"
                >.{{ item.extensions }}</span>
              </h6>     
            </label> -->
            


            
            <label
              class="d-flex flex-column position-relative"
              :key="item.id"
              v-for="item in resultQuery"
              @change="ischecked = !ischecked"
              :style="item.ischecked ? {backgroundColor:
                '#d3eaff'} : {backgroundColor:'transparent'}"
            >
              <input
                class="form-check-input itemCheckbox"
                type="checkbox"
                v-model="item.ischecked"
                v-if="renderCheckboxs"
              >
              <img
                :src="item.pic"
                class="folder-icon"
              >
              <h6 class="text-dark text-center">
                {{ item.name }}<span
                  class="text-dark"
                  v-if="extensions"
                >.{{ item.extensions }}</span>
              </h6>     
            </label>
          </Pane>
        </Splitpanes>
      </div>
      <div class="dqbz-footer" />
      <UploadFiles ref="UploadFiles" />
      <create-folder ref="CreateFolder" />
      <rename-item ref="RenameItem" />
      <delete-folder ref="DeleteFolder" />
      <manage-public-link ref="ManagePublicLink" />
    
      <AddEditPublicLink
        ref="AddEditPublicLink"
      />
    </div>
    <div class="dqbz-footer">
      <p class="mx-3">
        {{ allFiles.length }} items
      </p>
      <p>{{ selectedLength || 0 }} item selected</p>
    </div>
  </div>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import Navbar from "@/components/Navbar.vue";
import Search from '../components/Search.vue';
import UploadFiles from '../components/Modals/home/UploadFiles.vue';
import CreateFolder from '../components/Modals/home/CreateFolder.vue';
import DeleteFolder from '../components/Modals/home/DeleteFolder.vue';
import RenameItem from '../components/Modals/home/RenameItem.vue';
import ManagePublicLink from '../components/Modals/home/ManagePublicLink.vue';
import AddEditPublicLink from'@/components/Modals/link/AddEditPublicLink.vue';

export default {
  name: "Home",
  components: {
    Splitpanes,
    Pane,
    Navbar,
    Search,
    UploadFiles,
    CreateFolder,
    RenameItem,
    DeleteFolder,
    ManagePublicLink,
    AddEditPublicLink,
  },
  data: () => ({
    selected: false,
    selectMode: 'single',
    paneSize: 15,
    fileSelected: false,
    selectedItems: [],//邊框
    treeItems: [
      { id: 0, name: 'Folder',pic: require('@/assets/images/file/single folder@2x.png')},
      { id: 1, name: '7Z', pic: require('@/assets/images/file/7zip@2x.png')},
      { id: 2, name: 'RAR', pic: require('@/assets/images/file/rar@2x.png')},
      { id: 3, name: 'TAR' , pic: require('@/assets/images/file/tar@2x.png')},
      { id: 4, name: 'ZIP' , pic:require('@/assets/images/file/addtozip@2x.png')},
    ],
    renderCheckboxs: false,
    treeSelected: null,
    allSelected: false,
    allFiles:[{
        name:'word',
        extensions:'docx',
        pic: require('@/assets/images/file/single folder@2x.png')
    },
    {
        name:'abc',
        extensions:'pdf',
        pic: require('@/assets/images/file/single folder@2x.png')
    },],//所有檔案過濾後把id放入這個陣列
    extensions: false,
    copy: false,//有無複製檔案
    cut: false,
    searchQuery: "",
    folderTree: {},
    folderitems: [],
    render: {}
  }),
  
  created(){
    // this.allFiles.map((x,index)=>{
      this.resultQuery.map((x,index)=>{

      // this.$set(this.allFiles, x.ischecked, false)
      // this.$set(this.allFiles, x.showCheckbox, false)
      // this.$set(this.allFiles, x.id, index)
      this.$set(this.resultQuery, x.ischecked, false)
      this.$set(this.resultQuery, x.showCheckbox, false)
      this.$set(this.resultQuery, x.id, index)
      return x;
    })
     this.getFolderTree('a9602080-f4fc-4356-abe3-145d05fab9ac')
     this.getFolderTable();
  
    
  },
  computed:{
    //數checkbox勾選幾個
    selectedLength(){ 
      // return Object.keys(this.allFiles).filter(key =>
      //     this.allFiles[key].ischecked === true).length
      return Object.keys(this.resultQuery).filter(key =>
          this.resultQuery[key].ischecked === true).length
    },
    resultQuery(){
        return this.allFiles.filter(item =>
          item.name.toLowerCase().includes(this.searchQuery))
    },
    
  },
  methods: { 
    handler(event) { event.preventDefault(); }, 
    // 子層輸入傳父層
    selfUpdate(val) {
      this.searchQuery = val;
      console.log('885',this.searchQuery);
      
    },
    passRoute(e){
      const buttonValue = e.target.value;   
      this.treeSelected = buttonValue;
      // console.log(this.treeSelected);     
    },
   
    // modal
    UploadFiles(){ this.$bvModal.show('UploadFiles'); },
    CreateFolder(){ this.$bvModal.show('CreateFolder'); },
    RenameItem(){ this.$bvModal.show('RenameItem'); },
    DeleteFolder(){ this.$bvModal.show('DeleteFolder'); },
    ManagePublicLink(){this.$bvModal.show('ManagePublicLink');},
    AddPublicLink(){ this.$bvModal.show('AddEditPublicLink'); },
    // checkbox func
    selectAll() {   
      // this.allFiles.map(item =>{
      this.resultQuery.map(item =>{

        item.ischecked = true
        return item;
      })
    },
    selectNone(){
    //this.allFiles.map(item =>{ 
      this.resultQuery.map(item =>{

      item.ischecked = false;
      return item;
      })
    },
    invert(){
      //this.allFiles.map(item =>{ 
        this.resultQuery.map(item =>{

        item.ischecked = !item.ischecked; 
        return item;
      })
    },
     getFolderTree(id){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTree/${id}`)
      .then((data) => { 
        this.folderTree = data.data
      }).catch(() => {
        //  console.log(error.response.data);        
      })
    },
    getFolderTable(){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/RootFolders`)
        .then((data) => { 
          this.folderitems = data.data 
          // console.log(this.folderitems);
          
        }).catch(error => {
          console.log(error.response.data);        
        })
    },
    //到某資料夾
    // getSelected(folderId){
    //   this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/GetItems/${folderId}/${userId}`)
    //     .then((data) => { 
    //       this.render = data.data 
    //       // console.log(this.folderitems);
          
    //     }).catch(error => {
    //       console.log(error.response.data);        
    //     })
    // },
    // @click="getSelected(folderId)"
  },
};
</script>

