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

          
         
            <span class="text-center">Clipboard</span>
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
            <span class="text-center">Organize</span>
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
            <span class="text-center">Transfer</span>
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
          <div class="fn-w-150 d-flex align-items-center flex-column">
            <b-button
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

            <span class="text-center">Share</span>
          </div>
          <div class="divider" />
          <div class="fn-w-150 d-flex flex-column">
            <b-button
              v-b-tooltip.hover
              title="Select all"
              class="bg-light text-dark border-0 p-0 d-flex"
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
              class="bg-light text-dark border-0 p-0 d-flex"
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
          <div class="fn-w-210">
            <div class="d-flex">
              <b-button
                v-b-tooltip.hover
                title="Large icons"
                class="bg-light text-dark border-0 p-0"
              >
                <img
                  src="@/assets/images/icon/large icons@2x.png"
                  class="nav-icon pe-1"
                >
                <span class="">Large icons</span>
              </b-button>
              <b-button
                v-b-tooltip.hover
                title="icons"
                class="bg-light text-dark border-0 p-0"
              >
                <img
                  src="@/assets/images/icon/icons@2x.png"
                  class="nav-icon pe-1"
                >
                <span class="">icons</span>
              </b-button>
            </div>
            <div class="d-flex">
              <b-button
                v-b-tooltip.hover
                title="Tiles"
                class="bg-light text-dark border-0 p-0"
              >
                <img
                  src="@/assets/images/file/tile@2x.png"
                  class="nav-icon pe-1"
                >  
                <span class="">Tiles</span>
              </b-button>
              <b-button
                v-b-tooltip.hover
                title="Details"
                class="bg-light text-dark border-0 p-0"
              >
                <img
                  src="@/assets/images/icon/details@2x.png"
                  class="nav-icon pe-1 "
                >
                <span class="">Details</span>
              </b-button>
            </div>
            <span class="text-center">Layout</span>
          </div>
          <div class="divider" />
          <div class="fn-w-150 d-md-none d-lg-block">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="Item check boxes"
              >
              <label
                class="form-check-label"
                for="Item check boxes"
              >
                Item check boxes
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="File extensions"
              >
              <label
                class="form-check-label"
                for="File extensions"
              >
                File extensions
              </label>
            </div>

            <span class="text-center">Show/Hide</span>
          </div>
          <div class="divider" />
        </div>
      </div>
      <Search />
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
                      <img :src="picture.treeview.folder" class="nav12px">
                      Folder One
                    </h6>
                    <h6 class="text-dark">
                      Folder Two
                    </h6>
                    <h6 class="text-dark">
                      7Z Archive
                    </h6>
                    <h6 class="text-dark">
                      Deadlines
                    </h6>
                    <h6 class="text-dark">
                      RAR Archive
                    </h6>
                    <h6 class="text-dark">
                      Deadlines
                    </h6>
                    <h6 class="text-dark">
                      Favourites
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
            <li class="d-flex flex-column">
              <img
                src="@/assets/images/file/folder@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark text-center">
                Folder One
              </h6>
            </li>
            <li class="d-flex flex-column">
              <img
                src="@/assets/images/file/folder@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark text-center">
                Folder Two
              </h6>
            </li>
            <li class="d-flex flex-column">
              <img
                src="@/assets/images/file/7zip@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark text-center">
                7Z Archive
              </h6>
            </li>
            <li class="d-flex flex-column">
              <img
                src="@/assets/images/file/ppt@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark text-center">
                PPTX Sample File
              </h6>
            </li>
            <li class="d-flex flex-column">
              <img
                src="@/assets/images/file/rar@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark text-center">
                RAR Archive
              </h6>
            </li>
            <li class="d-flex flex-column">
              <img
                src="@/assets/images/file/tar@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark text-center">
                TAR Archive
              </h6>
            </li>
            <li
              @change="!selected"
              class="d-flex flex-column "
              :style="selected ? 'border: 1px solid red;' : 'border: 1px solid white;'"
            >
              <img
                src="@/assets/images/file/word@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark text-center">
                Word
              </h6>
            </li>
          </Pane>
        </Splitpanes>
      </div>
      <div class="dqbz-footer" />
      <UploadFiles ref="UploadFiles" />
      <create-folder ref="CreateFolder" />
      <rename-item ref="RenameItem" />
      <delete-folder ref="DeleteFolder" />
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

  },
  data: () => ({
    allItems: 7,
    selected: false,
    selectMode: 'single',
    paneSize: 15,
    fileSelected:{ border: '2px solid blue' },
    selectedItems: [],
    
  }),
  computed:{
    //數目前有幾個檔案
    selectedLength(){ return this.selectedItems.length; }

  },
  methods: {
    UploadFiles(){ this.$bvModal.show('UploadFiles'); },
    CreateFolder(){ this.$bvModal.show('CreateFolder'); },
    RenameItem(){ this.$bvModal.show('RenameItem'); },
    DeleteFolder(){ this.$bvModal.show('DeleteFolder'); },
    //選擇檔案後有邊匡
    selectFile(){
      this.selected = true;
    }
  },
};
</script>

