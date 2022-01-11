<template>
  <div @contextmenu="handler($event)">
    <Navbar />
    <div
      class="dqbz-body"
      @contextmenu="showMenu($event)"
    >
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
        @update="selfUpdate"
        :folder-tree="this.folderTree"
        :now-root-folder="nowRootFolder"
        @back="getSelected"
      />
      <!--  -->

      <div />
      <!-- main -->
      <div
        class="dqbz-main"
        @mousedown="mouseDown($event)"
        @mousemove="mouseMove($event)"
        @mouseup="mouseUp($event)"
        style="background:white;position: relative;width:100vw;height:100vh"
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
                  v-for="item in rootFolder"
                  :key="item.folderId"

                  :id="item.folderId"
                >
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="['#'+ item.folderId]"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                    @click="passRoute($event,item)"                   
                    :value="item.name"
                  >
                    <!-- <img
                      :src="`${this.treeItems[0].pic}`"
                      class="icon24px"
                    > -->
                    {{ item.name }}
                  </button>
                </h2>


                <div
                  v-if="this.folderTree.subFolders>0"
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

              <!-- 先註解 -->
              <!-- <div
                
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
              </div> -->
            </div>
          </Pane>
          <Pane         
            :size="100 - paneSize"
            class="d-flex align-items-start justify-content-start"
          >
            <p class="text-dark">
              目前所在的資料夾{{ this.folderTree.name }} 
            </p>
            <div
              v-if="this.folderTree.subFolders !== null"
              class=""
            >
              <p
                v-for="item in this.folderTree.subFolders"
                :key="item.folderId"
                class="text-dark"
              >
                所有子資料夾{{ item.name }} 
              </p>
            </div>

            <label
              ref="sel"
              class="d-flex flex-column  mx-2 my-2"
              :key="item.id"
              v-for="item in resultQuery"
              @dblclick="detectClick(item)"
              @change="ischecked = !ischecked"
              :style="item.ischecked ? {backgroundColor:
                '#d3eaff'} : {backgroundColor:'transparent'}"
              @mouseover="rowSelected(item)"
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
            <div
              ref="div"
              style="border: 1px solid #33CCFF;background:#33CCFF;opacity:0.5;position:absolute;z-index:999"
              hidden="0"
            />
          </Pane>
        </Splitpanes>
      </div>
      <div class="dqbz-footer" />

      <ContextMenu ref="menu">
        <ul class="text-dark">
          <li @click="CreateFolder">
            <img
              src="@/assets/images/icon/user setting@2x.png"
              class="icon24px"
            >{{ $t("GENERAL.ADDFOLDER") }}
          </li>
          <li @click="copyFile(nowSelected)">
            <img
              src="@/assets/images/cmd/download@2x-1.png"
              class="icon24px"
            >{{ $t("HOME.COPY") }}
          </li>
          <li @click="cutFile(nowSelected)">
            <img
              src="@/assets/images/cmd/download@2x-1.png"
              class="icon24px"
            >{{ $t("HOME.CUT") }}
          </li>
          <li @click="download(nowSelected)">
            <img
              src="@/assets/images/cmd/download@2x-1.png"
              class="icon24px"
            >{{ $t("HOME.DOWNLOAD") }}
          </li>
          <li @click="DeleteFolder">
            <img
              src="@/assets/images/cmd/delete@2x-2.png"
              class="icon24px"
            >{{ $t("HOME.DELETE") }}
          </li>
        </ul>
      </ContextMenu>


      <UploadFiles ref="UploadFiles" />
      <create-folder ref="CreateFolder" />
      <rename-item ref="RenameItem" />
      <delete-folder
        ref="DeleteFolder"
        :del-data="nowSelected"
      />
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
    render: {},
    rootFolder:[],//sidebar
    nowSelected: {},
    nowRootFolder: "", //還沒點進任何資料夾時為空
    fileType: 0,
    x1 : 0, y1 : 0, x2 :0, y2 : 0,

  }),
  
  created(){
      this.resultQuery.map((x,index)=>{

      this.$set(this.resultQuery, x.ischecked, false)
      this.$set(this.resultQuery, x.showCheckbox, false)
      this.$set(this.resultQuery, x.id, index)
      return x;
    })
     this.getFolderTable()
     this.$store.dispatch('setNowFolderId', null);

  },
  computed:{
    //數checkbox勾選幾個
    selectedLength(){      
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
    showMenu(event) { this.$refs.menu.open(event); },
    // 子層輸入傳父層
    selfUpdate(val) {
      this.searchQuery = val;
      // console.log('885',this.searchQuery);
    },
     //hover一個資料 並將資料傳遞子層 
    rowSelected(items) {
      this.nowSelected = items
      console.log(this.nowSelected);     
    },
    passRoute(e,item){
      const buttonValue = e.target.value;   
      this.treeSelected = buttonValue;
      //點擊某資料夾在傳資料到search
      console.log(item);     
      this.getFolderTree(item.folderId)
      this.getSelected(item.folderId)

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
      this.resultQuery.map(item =>{
        item.ischecked = true
        return item;
      })
    },
    selectNone(){
      this.resultQuery.map(item =>{
      item.ischecked = false;
      return item;
      })
    },
    invert(){
        this.resultQuery.map(item =>{
        item.ischecked = !item.ischecked; 
        return item;
      })
    },
    //預設畫面在這
    getFolderTable(){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/RootFolders`)
        .then((data) => { 
          this.allFiles = data.data
          this.rootFolder = this.allFiles

        this.allFiles.map(item=>{
          const datapic = this.treeItems.filter(y=>y.extension == item.extension)[0];
          item.pic = datapic.pic;
          return item
          });        
        }).catch(error => {
          console.log(error.response.data);        
        })
    },//success
    download(item) {    
         if(item.extension){
          this.fileType = 1
        }else{
          this.fileType = 0

        }
       
      const data =  JSON.stringify(
        {
          "items":[
            {
              "id": item.id,
              "type": this.fileType
            }
          ],
          "user":  this.$store.getters.userId
        }
      );
      
      this.axios.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/Download`,
      data,{ headers: window.headers })
      .then((data) => { 
        console.log(data);
      }).catch(error => {
        console.log(error.response.data);        
      })   
    },
    copyFile(item) {
       if(item.extension){
          this.fileType = 1
        }else{
          this.fileType = 0

        }
     
      const data =  JSON.stringify(
        {
          "items":[
            {
              "id": item.id,
              "type": this.fileType
            }
          ],
          "editor":  this.$store.getters.userId,
          "editorName": this.$store.getters.currentUser,
          "destination": this.$store.getters.nowFolderId
        }
      );
      
      console.log(data);


      this.axios.patch(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/CopyAndPaste`,
      data,{  headers: window.headers })
      .then((data) => {  
        console.log(data);

      }).catch(error => {
        console.log(error.response.data);        
      })
  
    },
    cutFile(item) {
       if(item.extension){
          this.fileType = 1
        }else{
          this.fileType = 0

        }
     
      const data =  JSON.stringify(
        {
          "items":[
            {
              "id": item.id,
              "type": this.fileType
            }
          ],
          "editor":  this.$store.getters.userId,
          "editorName": this.$store.getters.currentUser,
          "destination": this.$store.getters.nowFolderId
        }
      );
      
      console.log(data);


      this.axios.patch(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/CutAndPaste`,
      data,{  headers: window.headers })
      .then((data) => {  
        console.log(data);

      }).catch(error => {
        console.log(error.response.data);        
      })
  
    },
    //點擊某資料夾在傳資料到search
    //回上頁 如果是root folder 就無法按上一層
     getFolderTree(id){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTree/${id}`)
      .then((data) => { 
        this.folderTree = data.data
        console.log(this.folderTree,'folderTree');
      }).catch(() => {
        //  console.log(error.response.data);        
      })
    },
    //點擊跳轉該路徑
    //到kaoh資料夾
    // ${process.env.VUE_APP_FOLDER_APIPATH}/GetItems/${folderId}/${userId}
    getSelected(id){
      console.log('換路徑囉',id);
      
      this.$store.dispatch('setNowFolderId', id);


      //驗證 root
      const result = this.rootFolder.filter(item => id == item.folderId);      
      if(result.length != 0){
        if( 'name' in result[0]){
          this.nowRootFolder = result[0].name
        }
      }
      
      if(!id){
        id = this.id
        //把預設路經歸0 避免跳錯
        this.id = ''
        console.log('預設路徑', );
        
      }
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/GetItems/${id}/${this.$store.getters.userId}`)
        .then((data) => { 
          this.allFiles = data.data
          //顯示路徑
          this.getFolderTree(id)

          //點擊後上層開始顯示路徑


        this.allFiles.map(item=>{ 
          const datapic = this.treeItems.filter(y=>y.extension == item.extension)[0];
        
          item.pic = datapic.pic;          
          return item 
        });

        }).catch(error => {
          console.log(error);  
          //  if(!id){
          //     id = this.id
          //     console.log('預設路徑', );
              
          //   }      
        })
    },

    detectClick(item) {
      console.log('double click ',item);
       if('folderId' in item ) {
          this.getSelected(item.folderId)
          this.treeSelected = item.name;

        }
        else if('id' in item ) {
          this.getSelected(item.id)
          this.treeSelected = item.name;
        }
        else {
          console.log('err');         
        }
    },
 
    selected(){
      let selected = []
      let imgs = document.querySelectorAll('img');
      imgs.forEach(x=>{
         if(x.dataset.selected==='true'){
           selected.push(x);
         }
      })
      console.log(selected);
    },
    mouseDown(e){
      let div = this.$refs.div;
      div.hidden = 0;
      this.x1 = e.clientX; 
      this.y1 = e.clientY;
      this.reCalc();
    },
    mouseUp(){ 
      let div = this.$refs.div;
      div.hidden = 1;
     },
    mouseMove(e){ 
      this.x2 = e.clientX; 
      this.y2 = e.clientY;
      this.reCalc();
    },
    reCalc() {
      let div = this.$refs.div;
      if(div.hidden==0) {
        var x3 = Math.min(this.x1,this.x2); 
        var x4 = Math.max(this.x1,this.x2); 
        var y3 =Math.min(this.y1,this.y2); 
        var y4 = Math.max(this.y1,this.y2); 
        div.style.left = x3 + 'px';
        div.style.top = y3 + 'px'; 
        div.style.width = x4 - x3 + 'px'; 
        div.style.height =y4 - y3 + 'px'; 

        let imgs = document.querySelectorAll('img');
        imgs.forEach(img=>{
          if(this.collide(div.getBoundingClientRect(),img.getBoundingClientRect())) {
            img.setAttribute("style","background-color:red");
            img.setAttribute('data-selected','true')
          } else {
            img.setAttribute("style","background-color:none");
            img.setAttribute('data-selected','false')
          }
        })
       
      }
     
      },

      collide(rect1, rect2) {

        const maxX = Math.max(rect1.x + rect1.width, rect2.x + rect2.width);
        const maxY = Math.max(rect1.y + rect1.height, rect2.y + rect2.height);
        const minX = Math.min(rect1.x, rect2.x);
        const minY = Math.min(rect1.y, rect2.y);
       
        if (maxX - minX <= rect1.width + rect2.width && maxY - minY <= rect1.height + rect2.height) {
          return true;
        } else {
          return false;
        }
      } 
  }
  
};
</script>

<style>
  sel{
    -webkit-user-select:none;
    -moz-user-select:none;
    -o-user-select:none;
    user-select:none;
  }
</style>