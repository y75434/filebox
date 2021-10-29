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
              <span class="nav-text text-center">Copy</span>
            </div>
            <div
              class="d-flex flex-column w-30"
            >
              <img
                src="@/assets/images/cmd/paste@2x.png"
                alt="paste"
              >
              <span class="nav-text text-center">Paste</span>
            </div>
            <div
              class="d-flex flex-column w-30"
            >
              <img
                src="@/assets/images/cmd/cut@2x.png"
                alt=""
              >
              <span class=" nav-text text-center">Cut</span>
            </div>

          
         
            <span class="text-center">Clipboard</span>
          </div>
          <div class="divider" />
          <div class="fn-w-100 d-flex align-items-center">
            <div class="d-flex flex-column w-50">
              <img
                src="@/assets/images/cmd/delete@2x-2.png"
                alt=""
              >
              <span class="nav-text text-center">Delete</span>
            </div>
            <div class="d-flex flex-column w-50">
              <img
                src="@/assets/images/cmd/rename@2x.png"
                alt=""
              >
              <span class="nav-text text-center">Rename</span>
            </div>

            <span class="text-center">Organize</span>
          </div>
          <div class="divider" />
          <div class="fn-w-60 align-items-center d-flex">
            <div class="d-flex flex-column ">
              <img
                src="@/assets/images/file/new folder@2x.png"
                alt=""
              >
              <span class="nav-text text-center">New</span>
            </div>
          </div>
          <div class="divider" />
          <div class="fn-w-100 d-flex align-items-center">
            <div class="d-flex flex-column w-50">
              <img
                src="@/assets/images/cmd/download@2x.png"
                alt=""
              >
              <span class="nav-text text-center">Download</span>
            </div>
            <div class="d-flex flex-column w-50">
              <img
                src="@/assets/images/cmd/upload@2x.png"
                alt=""
              >
              <span class="nav-text text-center">Upload</span>
            </div>

            <span class="text-center">Transfer</span>
          </div>
          <div class="divider" />
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
          </div>
          <div class="divider" />
          <div class="fn-w-160 ">
            <h6>
              <img
                src="@/assets/images/file/publiclink@2x.png"
                class="nav-icon"
              >
              Create public link...
            </h6>
            <h6>
              <img
                src="@/assets/images/icon/managepubliclink@2x.png"
                class="nav-icon"
              >
              Manage public links...
            </h6>

            <span class="text-center">Share</span>
          </div>
          <div class="divider" />
          <div class="fn-w-150">
            <h6>
              <img
                src="@/assets/images/cmd/select all@2x.png"
                class="nav-icon"
              >
              Select all
            </h6>
            <h6>
              <img
                src="@/assets/images/cmd/select none@2x.png"
                class="nav-icon"
              >
              Select none
            </h6>
            <h6>
              <img
                src="@/assets/images/icon/invert selection@2x.png"
                class="nav-icon"
              >
              Invert Selection
            </h6>


            <span class="text-center">Select</span>
          </div>
          <div class="divider" />
          <div class="fn-w-210">
            <div class="d-flex">
              <h6>
                <img
                  src="@/assets/images/icon/large icons@2x.png"
                  class="nav-icon"
                >
                Large icons
              </h6>
              <h6>
                <img
                  src="@/assets/images/icon/icons@2x.png"
                  class="nav-icon"
                >
                icons
              </h6>
            </div>
            <div class="d-flex">
              <h6>
                <img
                  src="@/assets/images/file/tile@2x.png"
                  class="nav-icon"
                >
                Tiles
              </h6>
              <h6>
                <img
                  src="@/assets/images/icon/details@2x.png"
                  class="nav-icon"
                >
                Details
              </h6>
            </div>
          


            <span class="text-center">Layout</span>
          </div>
          <div class="divider" />
          <div class="fn-w-150">
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
                  <div class="accordion-body">
                    Placeholder 
                  </div>
                </div>
              </div>
            </div>
          </Pane>
          <Pane
            :size="100 - paneSize"
            class="d-flex align-items-start justify-content-start"
          >
            <div class="d-flex flex-column">
              <img
                src="@/assets/images/file/folder@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark ">
                Folder One
              </h6>
            </div>
            <div class="d-flex flex-column">
              <img
                src="@/assets/images/file/folder@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark ">
                Folder Two
              </h6>
            </div>
            <div class="d-flex flex-column">
              <img
                src="@/assets/images/file/7zip@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark ">
                7Z Archive
              </h6>
            </div>
            <div class="d-flex flex-column">
              <img
                src="@/assets/images/file/ppt@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark ">
                PPTX Sample File
              </h6>
            </div>
            <div class="d-flex flex-column">
              <img
                src="@/assets/images/file/rar@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark ">
                RAR Archive
              </h6>
            </div>
            <div class="d-flex flex-column">
              <img
                src="@/assets/images/file/tar@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark ">
                TAR Archive
              </h6>
            </div>
            <div class="d-flex flex-column">
              <img
                src="@/assets/images/file/word@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark text-center">
                Word
              </h6>
            </div>
          </Pane>
        </Splitpanes>
      </div>
      <div class="dqbz-footer" />
    </div>
  </div>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
// import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
import Search from '../components/Search.vue';


export default {
  name: "Home",
  components: {
    Splitpanes,
    Pane,
    Navbar,
    Search
    // Sidebar
  },
  data: () => ({
    

    paneSize: 15,
  }),
  mounted() {

  },
};
</script>

