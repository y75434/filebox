<template>
  <div 
    @contextmenu="handler($event)"
    ref="sel"
    style="position: relative;"
    class="sel"
  >
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
                :disabled="this.selectedLength = 0"
                @click="copyCut"
                :style=" this.selectedLength > 0 ? {opacity:'1'} : {opacity:'0.3'}"
              >
              <span class="nav-text text-center">{{ $t("HOME.COPY") }}</span>
            </div>
            <div
              class="d-flex flex-column w-30"
            >
              <img
                src="@/assets/images/cmd/paste@2x.png"
                alt="paste"
                :disabled="this.selectedTrue.length"
                @click="paste"
                :style=" this.selectedTrue.length > 0 ? {opacity:'1'} : {opacity:'0.3'}"
              >
              <span class="nav-text text-center">{{ $t("HOME.PASTE") }}</span>
            </div>
            <div
              class="d-flex flex-column w-30"
            >
              <img
                src="@/assets/images/cmd/cut@2x.png"
                alt=""
                :disabled="this.selectedLength = 0"
                @click="copyCut"
                :style=" this.selectedLength > 0 ?
                  {opacity:'1'} : {opacity:'0.3'}"
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
                :disabled="this.selectedLength = 0"
                @click="paste"
                :style="
                  this.selectedLength > 0 ? {opacity:'1'} : {opacity:'0.3'}"
              >
              <span class="nav-text text-center">
                {{ $t("HOME.DELETE") }}
              </span>
            </li>
            <li 
              @click="RenameItem"
              :disabled="this.nowSelected"

              class="d-flex flex-column w-50"
            >
              <img
                src="@/assets/images/cmd/rename@2x.png"
                alt=""
                :style=" canUse ? {opacity:'1'} : {opacity:'0.3'}"
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
                :disabled="this.selectedLength > 0"
                :style="
                  this.selectedLength == 0 ? {opacity:'1'} : {opacity:'0.3'}"
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
                :disabled="this.selectedLength > 0 || !canUse"
                :style=" this.selectedLength > 0 || canUse ? {opacity:'1'} : {opacity:'0.3'}"
              >
              <span class="nav-text text-center">{{ $t("HOME.DOWNLOAD") }}</span>
            </div>
            <li
              class="d-flex flex-column w-50"
            >
              <img
                src="@/assets/images/cmd/upload@2x.png"
                alt=""
                @click="UploadFiles"
                :disabled="this.selectedTrue.length > 0 || this.firstPage == true"
                :style=" this.selectedTrue.length == 0 || this.firstPage == false ? {opacity:'1'} : {opacity:'0.3'}"
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
            <!-- :disabled="this.selectedLength == 0" -->
            <b-button
              v-b-tooltip.hover
              @click="AddPublicLink"
              title="Create public link..."
              class="bg-light text-dark border-0 p-0 d-flex"
            >
              <img
                src="@/assets/images/file/publiclink@2x.png"
                class="nav-icon pe-1 mx-auto"

                :style=" this.selectedLength > 0 ? {opacity:'1'} : {opacity:'0.3'}"
              >
              <span class="d-sm-none d-md-block d-lg-block text-truncate">{{ $t("HOME.CREATEPUBLICLINK") }}

              </span>
            </b-button>

            <b-button
              @click="ManagePublicLink"
              :disabled="this.selectedLength > 0"
              v-b-tooltip.hover
              title="Manage public links..."
              class="bg-light text-dark border-0 p-0 d-flex"
            >
              <img
                src="@/assets/images/icon/managepubliclink@2x.png"
                class="nav-icon pe-1 mx-auto"
                :style=" this.selectedLength = 0 ? {opacity:'1'} : {opacity:'0.3'}"
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
                @click="renderDetail = !renderDetail"
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
                id="Item check boxes"
                @click="selectAllCheckbox()"
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
        @getRoot="getFolderTable"
      />
      <div
        class="dqbz-main"
      >
        <Splitpanes class="h-100 sel">
          <Pane
            :size="paneSize"
            min-size="10"
            max-size="25"
            class="d-flex align-items-start"
            style="width:20%"
          >
            <TreeItem 
              @treeClick="detectClick"
            />
          </Pane>
      
          <Pane         
            :size="100 - paneSize"
            class=" d-flex align-items-start justify-content-start"
          >  
            <div
              @mousedown="mouseDown($event)"
              @mousemove="mouseMove($event)"
              @mouseup="mouseUp($event)"
              style="background:white;width:100%;height:100%;position:relative"
            >
              <div class="d-flex">
                <div
                  class="mx-2 my-2 folderItem"
                  style="position:relative"
                  :key="item.id"
                  :id="item.id"
                  v-for="item in resultQuery"
                  @dblclick="detectClick(item)"
                  @change="ischecked = !ischecked"
                  :style=" { backgroundColor: (item.ischecked ? '#d3eaff' : 'transparent' ), 
                             opacity: item.changed ? {opacity:'1'} : {opacity:'0.3'},          
                  }"
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
                    :id="item.id"
                    class="folder-icon"
                  >
                  <div
                    class="text-dark text-center text-truncate"
                    style="max-width: 100px;"
                  >
                    {{ item.name }}<span
                      class="text-dark"
                      v-if="extension"
                    >.{{ item.extension }}</span>
                  </div>     
                </div> 
              </div>
              <h6
                class="text-dark text-center text-truncate d-inline-block"
                style="max-width: 100px"
              >
                {{ arr }}
              </h6>
           

              <div
                ref="div"
                style="border: 1px solid #33CCFF;background:#33CCFF;opacity:0.5;position:absolute;z-index:999"
                hidden="0"
              /> 
            </div>
          </Pane>
        </Splitpanes>
      </div>
    </div>

   

        
    
    <!-- v-if="this.selectedLength > 0" -->
    <ContextMenu ref="menu">
      <ul class="text-dark">
        <!-- v-if="this.selectedLength = 0" -->
        <li
          @click="CreateFolder"
        >
          <img
            src="@/assets/images/cmd/add@2x.png"
            class="icon24px"
          >{{ $t("GENERAL.ADDFOLDER") }}
        </li>
        <!-- v-if="canUse || this.selectedLength > 0" -->
        <li
          @click="copyCut()"
        >
          <img
            src="@/assets/images/cmd/copy@2x.png"
            class="icon24px"
          >{{ $t("HOME.COPY") }}
        </li>
        <!-- v-if="canUse || this.selectedLength > 0" -->
        <li
          @click="copyCut()"
        >
          <img
            src="@/assets/images/cmd/cut@2x.png"
            class="icon24px"
          >{{ $t("HOME.CUT") }}
        </li>
        <li
          v-if="this.selectedTrue.length > 0"
          @click="paste()"
        >
          <img
            src="@/assets/images/cmd/paste@2x.png"
            class="icon24px"
          >{{ $t("HOME.PASTE") }}
        </li>
        <li
          @click="download()"
          v-if="canUse || this.selectedLength > 0"
        >
          <img
            src="@/assets/images/cmd/download@2x-1.png"
            class="icon24px"
          >{{ $t("HOME.DOWNLOAD") }}
        </li>
        <li
          @click="RenameItem"
          v-if="canUse || this.selectedLength == 1"
        >
          <img
            src="@/assets/images/cmd/rename@2x.png"
            class="icon24px"
          >{{ $t("HOME.RENAME") }}
        </li>
        <li
          @click="DeleteFolder"
          v-if="canUse || this.selectedLength > 0"
        >
          <img
            src="@/assets/images/cmd/delete@2x-2.png"
            class="icon24px"
          >{{ $t("HOME.DELETE") }}
        </li>
      </ul>
    </ContextMenu>

    <UploadFiles ref="UploadFiles" />
    <create-folder ref="CreateFolder" />
    <rename-item
      ref="RenameItem"
      :tab-data="nowSelected"
    />
    <delete-folder
      @delupdate="delUpdate"
      ref="DeleteFolder"
    />
    <manage-public-link ref="ManagePublicLink" />
    <AddEditPublicLink
      ref="AddEditPublicLink"
      :tab-data="nowSelected"
    />
      
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
import TreeItem from '@/components/Modals/home/TreeItem.vue';
// import Detail from '../components/Display/Detail.vue';


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
    // Detail
    TreeItem
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
    selectedTrue: [],// 勾選的放這
    allFiles:[],//所有檔案過濾後把id放入這個陣列
    extension: false,
    copy: false,//有無複製檔案
    cut: false,
    searchQuery: "",
    folderTree: {},
    rootFolder:[],//sidebar
    nowSelected: {},//hover only one file
    nowRootFolder: {}, //還沒點進任何資料夾時為空
    x1 : 0, y1 : 0, x2 :0, y2 : 0,
    open: false ,  //tree 收縮
    // now: this.$store.getters.nowFile //才不會跳錯
    renderDetail: false,
    firstPage: false
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
    this.$store.dispatch('nowFile', null);

  },
  computed:{
    //數checkbox勾選幾個
    selectedLength:{  
      set(){ },//不能刪
      get(){
       return Object.keys(this.resultQuery).filter(key =>
           this.resultQuery[key].ischecked === true).length            
        }  
    },
    arr:{
      set(){ }, 
      get(){   
        return this.resultQuery.filter(key => key.ischecked === true)
      }
    },
    resultQuery(){
        return this.allFiles.filter(item =>
          item.name.toLowerCase().includes(this.searchQuery))
    },
    canUse() {
      return Object.hasOwn(this.nowSelected, 'id')

      //  this.nowSelected.some(id);  
    },
    Detail() {
      return {
        'width': '20px',
        'height': '20px'
      }
    }
  },

  methods: { 
    //取消顯示checkbox 全選切換會失靈
    selectAllCheckbox(){
      if(this.renderCheckboxs) {
        console.log('620')
        let imgs = document.querySelectorAll('img');
        imgs.forEach(img=>{
            if(img.id!=='') {
              this.resultQuery.filter(x=>x.folderId===img.id)[0].ischecked = false;
              img.setAttribute("style","background-color:white");
              img.setAttribute('data-selected','false')
            }
           
        });
      }
    },
    handler(event) { event.preventDefault(); }, 
    showMenu(event) { this.$refs.menu.open(event); },
    // 子層輸入傳父層
    selfUpdate(val) {
      this.searchQuery = val;
      console.log('子層輸入傳父層',this.searchQuery);
    },
     delUpdate(val) {
      this.selectedTrue = val;
      console.log('selectedTrue',this.selectedTrue);

    },
     //hover一個資料 並將資料傳遞子層 
    rowSelected(items) {
      this.nowSelected = items

    },//@mouseover="selectOut()"
    selectOut(){
      this.nowSelected = {}
      console.log('out',this.nowSelected);
      
    },  
    // modal
    UploadFiles(){ this.$bvModal.show('UploadFiles'); },
    CreateFolder(){ this.$bvModal.show('CreateFolder'); },
    RenameItem(){ this.$bvModal.show('RenameItem'); },
    DeleteFolder(){ 
      this.checkSelected();
      this.$store.dispatch('nowFile', this.selectedTrue);
      this.$bvModal.show('DeleteFolder'); 
    },
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
          this.firstPage = true
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
    checkSelected(){
       console.log(this.arr,'arr');
        this.selectedTrue = Object.entries(this.arr)
        .map(([id, type]) => {
          return {type: type.type, id: type.id, s:id}
        })
       console.log(this.selectedTrue,'selectedTrue');
    },
    download() {   
      // this.$refs.menu.close();
      this.checkSelected()   
      const data =   
      //new
        {
          "items": this.selectedTrue,//array
          "user":  this.$store.getters.userId,
          "userName": this.$store.getters.currentUser,
        }
  
      console.log('download data',data);

      const config = {
        header:{
          Accept: 'application/zip',
        },
        responseType: 'arraybuffer'
      }
      
      // this.axios.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/Download`,
      // data,config)

      this.axios.post('https://192.168.110.180:6102/DocManagement/Download', data,config)

      .then((res) => { 
        const dataFromHeader = res.headers['content-disposition'];

        const buf = Buffer.from(res.data, 'binary');
        const blob = new Blob([buf], { type: 'arraybuffer' });

        const temp = document.createElement('a');
        // console.log('830');
        
        temp.download = this.beforeDownload(dataFromHeader)
        temp.href = URL.createObjectURL(blob)
        document.body.appendChild(temp)
        temp.click();
        document.body.removeChild(temp)

        console.log(data);

      }).catch(error => {
        console.log(error.response.data);        
      })   

      this.$store.dispatch('nowFile', null);
      this.selectedTrue = []

    },
    beforeDownload(dataFromHeader){
      if(dataFromHeader){
        const nameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        const matches = nameRegex.exec(dataFromHeader);
        if(matches != null && matches[1])return matches[1].replace(/['"]/g,'');
      }
      const now = new Date();
      return `${
        this.numberToString(now.getFullYear()) +
        this.numberToString(now.getMonth() +1) +
        this.numberToString(now.getDate()) +
        this.numberToString(now.getHours()) +
        this.numberToString(now.getMinutes()) +
        this.numberToString(now.getSeconds()) 

      }.zip`;
    },
    view(){
      const data =  JSON.stringify({
        "fileId": this.nowSelected.id,
        "userId": this.$store.getters.userId,
        "userName": this.$store.getters.currentUser
      });

      this.axios.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/View`,
      data,{ headers: window.headers })
      .then((data) => { 
      

        console.log(data);


      }).catch(error => {
        console.log(error.response.data);        
      }) 
    },
    copyCut(){
      this.$refs.menu.close();
      this.checkSelected()
      this.$store.dispatch('nowFile', this.selectedTrue);      
    },
    //paste
    paste() {

      this.$refs.menu.close();

      const data =  JSON.stringify(
        {
          "items": this.$store.getters.nowFile,
          "editor":  this.$store.getters.userId,
          "editorName": this.$store.getters.currentUser,
          "destination": this.$store.getters.nowFolderId
        }
      );
      
      console.log(data,'paste');


      if(this.$store.getters.copyFile){
        
        // copy post ok
            this.axios.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/CopyAndPaste`,
          data,{  headers: window.headers })
          .then((data) => {  
            console.log(data);
            this.$swal.fire({ title: data.status, icon: 'success' })
            

          }).catch(error => {
            console.log(error.response.data); 
            this.$swal.fire({ title: error, icon: 'error' })
      
          })

      }else{    
      // cut paste
        this.axios.patch(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/CutAndPaste`,
        data,{  headers: window.headers })
        .then((data) => {  
          console.log(data);
          this.$swal.fire({ title: data.status, icon: 'success' })


        }).catch(error => {
          console.log(error);
          this.$swal.fire({ title: error, icon: 'error' })
    
        })
    }

    this.$store.dispatch('nowFile', null);
    this.selectedTrue = []

    },
    //好像用不到
    //回上頁 如果是root folder 就無法按上一層
    //  getFolderTree(rootFolder,id){
    //   this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTree/${id}`)
    //   .then((data) => { 
    //     this.folderTree = data.data
    //     // rootFolder.subFolders = data.data.subFolders;

    //   }).catch(() => {
    //     //  console.log(error.response.data);        
    //   })
    // },
      new(id){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTree/${id}`)
      .then((data) => { 
        this.folderTree = data.data
        // console.log(rootFolder);
        
      }).catch(() => {
        //  console.log(error.response.data);        
      })
    },
    //點擊跳轉該路徑
    getSelected(id){
      console.log('換路徑囉',id);      
      this.$store.dispatch('setNowFolderId', id);

      //驗證 root
      const result = this.rootFolder.filter(item => id == item.folderId);      
      if(result.length != 0){
        if( 'name' in result[0]){
          this.nowRootFolder = result[0]
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
          this.firstPage = false

          //顯示路徑
         // this.getFolderTree(id)

        //點擊後上層開始顯示路徑
        this.allFiles.map(item=>{ 
          const datapic = this.treeItems.filter(y=>y.extension == item.extension)[0];
          item.pic = datapic.pic;          
          return item 
        });

        }).catch(error => {
          console.log(error);  
            
        })
    },
    detectClick(item) {
      console.log('double click ',item);
       if('folderId' in item ) {
          this.getSelected(item.folderId)
          console.log('第一層資料夾 folderid');
          this.treeSelected = item;
        }
        else if('id' in item ) {
          this.getSelected(item.id)
          console.log('子層資料夾 id');
          //讓search顯示你目前在哪個資料夾裡
          this.treeSelected = item;
        }
        else {
          console.log('err');         
        }
    },
    mouseDown(e){
      // console.log(e);
      let div = this.$refs.div;
      div.hidden = 0;
      this.x1 = e.offsetX >=0? e.offsetX:0; 
      this.y1 = e.offsetY >=0? e.offsetY:0; 
      console.log(e);
      // console.log('按下去',this.x1,this.y1)
      this.reCalc();
    },
    mouseUp(){ 
      let div = this.$refs.div;
      div.hidden = 1;
      // console.log('起來')
     },
    mouseMove(e){ 
      this.x2 = e.offsetX >=0? e.offsetX:0; 
      this.y2 = e.offsetY >=0? e.offsetY:0; 
      let div = this.$refs.div;
      if(div.hidden==0) {
       this.reCalc();
      }
    },
    reCalc() {
      // console.log('計算碰撞');
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

        let imgs = document.querySelectorAll('.folderItem');

        imgs.forEach(img=>{

          if(this.collide(div.getBoundingClientRect(),img.getBoundingClientRect())) {
            img.setAttribute("style","background-color:#d3eaff");
            img.setAttribute('data-selected','true')
            this.resultQuery.map(x=>x.ischecked = false);
            console.log(this.resultQuery.filter(x=>x.name===img.outerText),'被選取的');
            let folders =  this.resultQuery.filter(x=>x.name===img.outerText);
            folders.forEach(x=>x.ischecked = true)

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
  .sel{
    -webkit-user-select:none;
    -moz-user-select:none;
    -o-user-select:none;
    user-select:none;
  }
</style>
