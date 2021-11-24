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
              >
              <span class="nav-text text-center">{{ $t("HOME.COPY") }}</span>
            </div>
            <div
              class="d-flex flex-column w-30"
            >
              <img
                src="@/assets/images/cmd/paste@2x.png"
                alt="paste"
              >
              <span class="nav-text text-center">{{ $t("HOME.PASTE") }}</span>
            </div>
            <div
              class="d-flex flex-column w-30"
            >
              <img
                src="@/assets/images/cmd/cut@2x.png"
                alt=""
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
              @click="ManagePublicLink"
              v-b-tooltip.hover
              title="Create public link..."
              class="bg-light text-dark border-0 p-0 d-flex"
            >
              <img
                src="@/assets/images/file/publiclink@2x.png"
                class="nav-icon pe-1 mx-auto"
              >
              <span class="d-sm-none d-md-block d-lg-block text-truncate">{{ $t("HOME.MANAGEPUBLICLINKS") }}
              </span>
            </b-button>

            <b-button
              v-b-tooltip.hover
              title="Manage public links..."
              class="bg-light text-dark border-0 p-0 d-flex"
            >
              <img
                src="@/assets/images/icon/managepubliclink@2x.png"
                class="nav-icon pe-1 mx-auto"
              >
              <span class="d-sm-none d-md-block d-lg-block ">{{ $t("HOME.CREATEPUBLICLINK") }}</span>
            </b-button>

            <span class="text-center">{{ $t("HOME.SHARE") }}</span>
          </div>
          <div class="divider" />
          <div class="fn-w-150 d-flex flex-column py-3">
            <b-button
              v-b-tooltip.hover
              title="Select all"
              class="bg-light text-dark border-0 p-0 mb-1 d-flex"
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
      </div>//todo search
      <Search :route="tree-selected" />
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
              <div class="accordion-item">
                <h2
                  class="accordion-header"
                  id="flush-headingTwo"
                >
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <img
                      :src="`${this.treeItems[0].pic}`"
                      class="icon24px"
                    >
                    Feature Tests
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder   actual content.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
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
                    @click="this.treeSelected = 'Another Root Folder'"
                  >
                    //TODO click
                    <img
                      :src="`${this.treeItems[0].pic}`"
                      class="icon24px"
                    >
                    Another Root Folder
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
                      <div class="accordion-item">
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
                            #1
                          </button>
                        </h2>
                        <div
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
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2
                          class="accordion-header"
                          id="headingTwo"
                        >
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            #2
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <h6 class="text-dark">
                              aaaa
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2
                          class="accordion-header"
                          id="headingThree"
                        >
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            #3
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <h6 class="text-dark">
                              ddddd
                            </h6>
                          </div>
                        </div>
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
            <label
              class="d-flex flex-column position-relative"
              for="flexCheckDefault1"
            >
              <input
                class="form-check-input itemCheckbox"
                type="checkbox"
                value="1"
                id="flexCheckDefault1"
                v-if="renderCheckboxs"
                v-model="checkboxSelected"
              >
              <img
                src="@/assets/images/file/folder@2x.png"
                class="folder-icon"
              >           
              <h6 class="text-dark text-center">
                Folder One
              </h6>
            </label>
            <label
              class="d-flex flex-column position-relative"
              for="flexCheckDefault2"
            >
              <input
                class="form-check-input itemCheckbox"
                type="checkbox"
                value="2"
                id="flexCheckDefault2"
                v-if="renderCheckboxs"
                v-model="checkboxSelected"
              >
              <img
                src="@/assets/images/file/folder@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark text-center">
                Folder Two
              </h6>
            </label>
            <label
              class="d-flex flex-column position-relative"
              for="flexCheckDefault3"
            >
              <input
                class="form-check-input itemCheckbox"
                type="checkbox"
                value="3"
                id="flexCheckDefault3"
                v-if="renderCheckboxs"
                v-model="checkboxSelected"
              >
              <img
                src="@/assets/images/file/7zip@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark text-center">
                7Z Archive
              </h6>
            </label>
            <label
              class="d-flex flex-column position-relative"
              for="flexCheckDefault4"
            >
              <input
                class="form-check-input itemCheckbox"
                type="checkbox"
                value="4"
                id="flexCheckDefault4"
                v-if="renderCheckboxs"
                v-model="checkboxSelected"
              >
              <img
                src="@/assets/images/file/ppt@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark text-center">
                PPTX Sample File
              </h6>
            </label>
            <label
             
              class="d-flex flex-column position-relative"
              for="flexCheckDefault5"
            >
              <input
                class="form-check-input itemCheckbox"
                type="checkbox"
                value="5"
                id="flexCheckDefault5"
                v-if="renderCheckboxs"
                v-model="checkboxSelected"
              >
              <img
                src="@/assets/images/file/rar@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark text-center">
                RAR Archive
              </h6>
            </label>
            <label
              class="d-flex flex-column position-relative"
              for="flexCheckDefault6"
            >
              <input
                class="form-check-input itemCheckbox"
                type="checkbox"
                value="6"
                id="flexCheckDefault6"
                v-if="renderCheckboxs"
                v-model="checkboxSelected"
              >
              <img
                src="@/assets/images/file/tar@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark text-center">
                TAR Archive
              </h6>
            </label>
            <label
              @change="!selected"
              class="d-flex flex-column position-relative"
              for="flexCheckDefault7"
              :style=" selected ? {backgroundColor: '#d3eaff'} : {backgroundColor: '#f0f0f0'}"
            >//todo bindstyle
              <!-- :style="selected ? 'border: 1px solid red;' : 'border: 1px solid white;'" -->

              <input
                class="form-check-input itemCheckbox"
                type="checkbox"
                value="7"
                id="flexCheckDefault7"
                v-if="renderCheckboxs"
                v-model="checkboxSelected"
              >
              <img
                src="@/assets/images/file/word@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark text-center">
                Word
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
    </div>
    <div class="dqbz-footer">
      <p class="mx-3">
        {{ allItems }} items
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
    ManagePublicLink

  
  },
  data: () => ({
    allItems: 7,
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
    checkboxSelected: [],//checkbox
    treeSelected: 'ccc'
  }),
  computed:{
    //數checkbox勾選幾個
    selectedLength(){ 
      return this.checkboxSelected.length; 
    }
  },
  methods: {
    // passRoute(){
    //   eventBus.$emit('treeSelected', this.treeSelected);
    // },
    // clickcheckbox(e){
    //   const { value,checked } = e.target
    //   if (checked) {

    //   this.checkboxSelected.push(value)
    //   }
    //   console.log('754',this.checkboxSelected);
    // },
    
    UploadFiles(){ this.$bvModal.show('UploadFiles'); },
    CreateFolder(){ this.$bvModal.show('CreateFolder'); },
    RenameItem(){ this.$bvModal.show('RenameItem'); },
    DeleteFolder(){ this.$bvModal.show('DeleteFolder'); },
    ManagePublicLink(){this.$bvModal.show('ManagePublicLink');},
    //選擇檔案後有邊匡
    selectFile(){
      this.selected = true;
      
    }
  },
};
</script>

