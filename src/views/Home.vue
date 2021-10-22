<template>
  <div>
    <Navbar />
    <div class="dqbz-body">
      <div class="dqbz-fnlist">
        <div class="fn-box bg-light">
          <div class="d-flex fn-w-150 align-items-center">
            <div
              class="d-flex flex-column"
              style="width:30%;"
            >
              <img
                src="@/assets/copy@2x.png"
                alt="copy"
              >
              <span class="nav-text text-center">Copy</span>
            </div>
            <div
              class="d-flex flex-column"
              style="width:30%;"
            >
              <img
                src="@/assets/paste@2x.png"
                alt="paste"
              >
              <span class="nav-text text-center">Paste</span>
            </div>
            <div
              class="d-flex flex-column"
              style="width:30%;"
            >
              <img
                src="@/assets/cut@2x.png"
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
                src="@/assets/delete@2x-2.png"
                alt=""
              >
              <span class="nav-text text-center">Delete</span>
            </div>
            <div class="d-flex flex-column w-50">
              <img
                src="@/assets/rename@2x.png"
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
                src="@/assets/new folder@2x.png"
                alt=""
              >
              <span class="nav-text text-center">New</span>
            </div>
          </div>
          <div class="divider" />
          <div class="fn-w-100 d-flex align-items-center">
            <div class="d-flex flex-column w-50">
              <img
                src="@/assets/download@2x.png"
                alt=""
              >
              <span class="nav-text text-center">Download</span>
            </div>
            <div class="d-flex flex-column w-50">
              <img
                src="@/assets/upload@2x.png"
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
                src="@/assets/add to zip@2x.png"
                alt=""
              >
              <span class="nav-text text-center">add to zip</span>
            </div>
            <div class="d-flex flex-column w-50">
              <img
                src="@/assets/extract all files@2x.png"
                alt=""
              >
              <span class="nav-text text-center">extract all files</span>
            </div>

            <span class="text-center">Compression</span>
          </div>
          <div class="divider" />
          <div class="fn-w-150 ">
            <h6>
              <img
                src="@/assets/select all@2x.png"
                class="nav-icon"
              >
              Select all
            </h6>
            <h6>
              <img
                src="@/assets/select all@2x.png"
                class="nav-icon"
              >
              Select all
            </h6>

            <span class="text-center">Share</span>
          </div>
          <div class="divider" />
          <div class="fn-w-150">
            <h6>
              <img
                src="@/assets/select all@2x.png"
                class="nav-icon"
              >
              Select all
            </h6>
            <h6>
              <img
                src="@/assets/select none@2x.png"
                class="nav-icon"
              >
              Select none
            </h6>
            <h6>
              <img
                src="@/assets/invert selection@2x.png"
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
                  src="@/assets/large icons@2x.png"
                  class="nav-icon"
                >
                Large icons
              </h6>
              <h6>
                <img
                  src="@/assets/icons@2x.png"
                  class="nav-icon"
                >
                icons
              </h6>
            </div>
            <div class="d-flex">
              <h6>
                <img
                  src="@/assets/tile@2x.png"
                  class="nav-icon"
                >
                Tiles
              </h6>
              <h6>
                <img
                  src="@/assets/details@2x.png"
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
        <Splitpanes style="height: 100%">
          <Pane
            :size="paneSize"
            min-size="10"
            max-size="25"
          >
            <ul class="list-unstyled">
              <li
                class="btn-links text-dark"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Root Folder
              </li>
              <li
                class="collapse"
                id="collapseExample"
              >
                <h6 class="text-dark">
                  Folder One
                </h6>
              </li>
              <li
                class="collapse"
                id="collapseExample"
              >
                <h6 class="text-dark">
                  Folder Two
                </h6>
              </li>
            </ul>
            


            
            <div
              class="treeview text-dark d-flex align-items-start h-100"
            >
              <ul class="mb-1 list-unstyled">
                <li class="">
                  <ul class="nested list-unstyled">
                    <li>
                      <h6>Folder One</h6>
                    </li>
                    <li><h6>Folder Two</h6></li>
                    <li>
                      <span><h6>7Z Archive</h6></span>
                      <ul class="list-unstyled">
                        <li><h6>Deadlines</h6></li>
                      </ul>
                    </li>
                    <li>
                      <span><h6>RAR Archive</h6></span>
                      <ul class="list-unstyled">
                        <li><h6>Deadlines</h6></li>
                      </ul>
                    </li>
                  </ul>
                </li>
        
                <li>
                  <h6>Favourites</h6>
                </li>
                <li>
                  <h6>Feature Tests</h6>
                </li>
                <li>
                  <h6>Another Root Folder</h6>
                </li>
              </ul>
            </div>
          </Pane>
          <Pane
            :size="100 - paneSize"
            class="d-flex align-items-start justify-content-start"
          >
            <div class="d-flex flex-column">
              <img
                src="@/assets/folder@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark ">
                Folder One
              </h6>
            </div>
            <div class="d-flex flex-column">
              <img
                src="@/assets/folder@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark ">
                Folder Two
              </h6>
            </div>
            <div class="d-flex flex-column">
              <img
                src="@/assets/7zip@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark ">
                7Z Archive
              </h6>
            </div>
            <div class="d-flex flex-column">
              <img
                src="@/assets/ppt@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark ">
                PPTX Sample File
              </h6>
            </div>
            <div class="d-flex flex-column">
              <img
                src="@/assets/rar@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark ">
                RAR Archive
              </h6>
            </div>
            <div class="d-flex flex-column">
              <img
                src="@/assets/tar@2x.png"
                class="folder-icon"
              >
              <h6 class="text-dark ">
                TAR Archive
              </h6>
            </div>
            <div class="d-flex flex-column">
              <img
                src="@/assets/word@2x.png"
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

<style scoped>

</style>
