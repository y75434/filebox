<template>
  <div>
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
            <div
              @click="download()"
              class="d-flex flex-column w-50"
            >
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
                v-model="extension"
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
        :folder-tree="folderTree"
      />
      <div />
      <!-- main -->
      <div
        class="dqbz-main"
        @contextmenu="showMenu(null, $event)"
      >
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

                <!-- id="flush-collapseThree" 原因出在這 -->

                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
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
                      >
                        <h2
                          class="accordion-header"
                        >
                          <button
                            class="accordion-button"
                            type="button"
                          >
                            {{ item.name }}
                          </button>
                        </h2>
                      </div>
                    </div>
                    <!-- new -->
                  </div>
                </div>
              </div>

              <!-- :data-bs-target="['#'+ item.name]" -->

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
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                    v-for="item in folderitems"
                    :key="item.id"
                    @click="passRoute($event)"                   
                    :value="item.name"
                  >
                    <img
                      class="icon24px"
                      src="@/assets/images/file/single folder@2x.png"
                    >
                    {{ item.name }}
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="z"
                >
                  <div class="accordion-body p-1">
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
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </Pane>
          <Pane
            :size="100 - paneSize"
            class="d-flex align-items-start justify-content-start"
            @contextmenu="handler($event)"
          >     
            <label
              class="d-flex flex-column position-relative"
              :key="item.id"
              v-for="item in resultQuery"
              @change="ischecked = !ischecked"
              :style="item.ischecked ? {backgroundColor:
                '#d3eaff'} : {backgroundColor:'transparent'}"
              @contextmenu="operational($event)"
              @row-hovered="rowSelected"
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
              <h6
                class="text-dark text-center text-truncate d-inline-block"
                style="max-width: 100px;"
              >
                {{ item.name }}<span
                  class="text-dark"
                  v-if="extension"
                >.{{ item.extension }}</span>
              </h6>     
            </label>
          </Pane>
        </Splitpanes>
      </div>
      <div class="dqbz-footer" />

      <ContextMenu ref="menu">
        <ul class="text-dark">
          <li
            @click="CreateFolder"
          >
            <img
              src="@/assets/images/icon/user setting@2x.png"
              class="icon24px"
            >{{ $t("GENERAL.ADDFOLDER") }}
          </li>
        </ul>
      </ContextMenu>


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
import ContextMenu from '@/components/ContextMenu.vue';

// import saveAs from 'file-saver';

export default {
  name: "Home",
  components: {
    ContextMenu,
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
      { id: 0, name: 'Folder',pic: require('@/assets/images/file/single folder@2x.png'),extension:'.folder'},
      { id: 1, name: '7Z', pic: require('@/assets/images/file/7zip@2x.png'),extension:'.7zip'},
      { id: 2, name: 'RAR', pic: require('@/assets/images/file/rar@2x.png'),extension:'.rar'},
      { id: 3, name: 'TAR' , pic: require('@/assets/images/file/tar@2x.png'),extension:'.tar'},
      { id: 4, name: 'ZIP' , pic:require('@/assets/images/file/addtozip@2x.png'),extension:'.zip'},
      { id: 5, name: 'html' ,pic:require('@/assets/images/file/addtozip@2x.png'),extension:'.html'},
      { id: 6, name: 'png',pic:require('@/assets/images/file/tile@2x.png'),extension:'.png'},
      { id: 7, name:'jpeg',pic:require('@/assets/images/file/tile@2x.png'),extension:'.jpeg'},
      { id: 8,name:'ppt',pic:require('@/assets/images/file/ppt@2x.png'),extension:'.ppt'},
      { id: 9,name:'word',pic:require('@/assets/images/file/word@2x.png'),extension:'.word'},
      { id: 10, name:'excel',pic:require('@/assets/images/file/excel@2x.png'),extension:'.excel'},
      { id: 11, name:'null',pic:require('@/assets/images/file/single folder@2x.png'),extension:null},


    ],
    renderCheckboxs: false,
    treeSelected: null,
    allSelected: false,
    allFiles:[],//所有檔案過濾後把id放入這個陣列
    extension: false,
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
     this.getFolderTable();
     this.getSelected()

    
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
    showMenu(event) {this.$refs.menu.open(event); },
    // 子層輸入傳父層
    selfUpdate(val) {
      this.searchQuery = val;
      // console.log('885',this.searchQuery);
      
    },
     //hover一個資料 並將資料傳遞子層 
    rowSelected(items) {
      this.selected = items
      //  console.log(this.selected);     
    },
    passRoute(e){
      const buttonValue = e.target.value;   
      this.treeSelected = buttonValue;
      //點擊某資料夾在傳資料到search
      this.getFolderTree('a9602080-f4fc-4356-abe3-145d05fab9ac')
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
    //點擊某資料夾在傳資料到search
     getFolderTree(id){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTree/${id}`)
      .then((data) => { 
        this.folderTree = data.data
        // console.log(this.folderTree);
        // console.log(this.folderTree.subFolders);
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
    download() {

      // const data =  JSON.stringify(
      //   {
      //     "items":[
      //       {
      //         "id": `${file.id}`,
      //         "type": `${file.type}`
      //       }
      //     ],
      //     "user": `${'user' .id}`
      //   }
      // );
      


      // this.axios.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/Download`,
      // data)
      // .then((data) => { 

      //   const blob = new Blob(data, { type: '' })
      //   const link = document.createElement('a')
      //   link.href = URL.createObjectURL(blob)
      //   link.download = label
      //   link.click()

      //   //調用URL.createObjectURL()方法產生的 URL 對象
      //   URL.revokeObjectURL(link.href)
      //   console.log(data);

      // }).catch(error => {
      //   console.log(error.response.data);        
      // })


      //this.url = [...file].map(URL.createObjectURL);


      
     
    },
    //到kaoh資料夾
    // ${process.env.VUE_APP_FOLDER_APIPATH}/GetItems/${folderId}/${userId}
    getSelected(){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/GetItems/4ddb9c06-5f94-40bc-8def-9382c5a30f4d/3fa85f64-5717-4562-b3fc-2c963f66afa6`)
        .then((data) => { 
          this.allFiles = data.data
          console.log(this.allFiles);
          

        this.allFiles.map(item=>{ 
          const datapic = this.treeItems.filter(y=>y.extension == item.extension)[0];
        
          item.pic = datapic.pic;          
          return item 
        });

        }).catch(error => {
          console.log(error.response.data);        
        })
    },
    // @click="getSelected(folderId)"
  },
};
</script>

