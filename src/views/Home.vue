<template>
  <div>
    <Navbar />
    <div class="dqbz-body">
      <div class="dqbz-fnlist">
        <div class="fn-box bg-gray">
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
          <div class="fn-w-100 d-flex">
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
          <div class="fn-w-50">
            <div class="d-flex flex-column">
              <img
                src="@/assets/new folder@2x.png"
                alt=""
              >
              <span class="nav-text text-center">New</span>
            </div>
          </div>
          <div class="divider" />
          <div class="fn-w-100 d-flex">
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
          <div class="fn-w-100 d-flex">
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
                src="@/assets/select all@2x.png"
                class="nav-icon"
              >
              Select all
            </h6>

            <span class="text-center">Share</span>
          </div>
          <div class="divider" />
          <div class="fn-w-120">
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
      <div class="dqbz-path-block">
        <button class="dqbz-previous">
          <img
            src="@/assets/arrow-left@2x.png"
            class="nav-icon"
          >
        </button>
        <button class="dqbz-previous">
          <img
            src="@/assets/arrow-right@2x.png"
            class="nav-icon"
          >
        </button>
        <button class="dqbz-previous">
          <img
            src="@/assets/down@2x.png"
            class="nav-icon"
          >
        </button>
        <button class="dqbz-previous">
          <img
            src="@/assets/arrow-up@2x.png"
            class="nav-icon"
          >
        </button>

        <b-form-input
          type="text"
          placeholder="Search"
        />
        <button class="dqbz-previous">
          <img
            src="@/assets/refresh@2x.png"
            class="nav-icon"
          >
        </button>
        <select
          class="form-select"
          aria-label="Default select example"
        >
          <option selected />
        </select>

        <b-button
          class="text-white"
          style="background-color:#66ACEC;"
        >
          <img
            src="@/assets/arrow-right@2x.png" 
            class="nav-icon"
          >
        </b-button>
      </div>
      <div />
      <!-- main -->
    

      <div class="dqbz-main">
        <Splitpanes style="height: 100%">
          <Pane
            :size="paneSize"
            min-size="10"
            max-size="25"
          >
            <div
              class="treeview text-dark d-flex align-items-start"
            >
              <ul class="mb-1 list-unstyled">
                <li class="">
                  <ul class="nested list-unstyled">
                    <li><h6>Folder One</h6></li>
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


export default {
  name: "Home",
  components: {
    Splitpanes,
    Pane,
    Navbar
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
.dqbz-body {
  width: 100vw;
  height: calc(100vh - 35px);
  position: relative;
}

.dqbz-fnlist {
  width: 100vw;
  height: 120px;
}

.dqbz-path-block {
  width: 100vw;
  height: 40px;
  padding: 4px 10px;
  display: flex;
}

.dqbz-main {
  width: 100vw;
  height: calc(100vh - 225px);
}

.dqbz-footer {
  width: 100vw;
  height: 30px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
}

.tabs,
.tabs > div {
  line-height: 0.5;
}

.tab-content,
.tab-pane {
  height: 90px;
}

.fn-w-50,
.fn-w-75,
.fn-w-100,
.fn-w-120,
.fn-w-150,
.fn-w-210 {
  height: 100%;
  position: relative;
}

.fn-w-50 > span,
.fn-w-75 > span,
.fn-w-100 > span,
.fn-w-120 > span,
.fn-w-150 > span,
.fn-w-210 > span {
  position: absolute;
  display: block;
  width: 100%;
  bottom: 8px;
  font-size: 5px;
  color: rgb(172, 174, 175);
}

.fn-w-50 {
  width: 50px;
}

.fn-w-75 {
  width: 75px;
}

.fn-w-100 {
  width: 100px;
}

.fn-w-120 {
  width: 120px;
}

.fn-w-150 {
  width: 150px;
}

.fn-w-210 {
  width: 210px;
}

.fn-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background: rgb(253, 253, 253);
}

.divider {
  height: 90%;
  border-right: 1px solid rgb(216, 218, 219);
  margin-top: 4px;
}

.dqbz-previous {
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  margin-right: 5px;
}

.dqbz-previous:hover {
  border: 1px solid rgb(52, 153, 236);
  background-color: rgba(114, 170, 216, 0.2);
}

.input-group {
  border: 1px solid rgb(225, 226, 228);

  position: relative;
}

.input-group:hover,
.input-group:focus {
  border: 1px solid rgb(52, 153, 236);
}

.input-group > input.form-control {
  border-style: none;
  height: 30px;
}

.input-group > input.form-control:focus {
  box-shadow: none;
}

.input-group-prepend {
  position: absolute;
  top: 0;
  right: 0;
}

.input-group-prepend > button {
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  color: #000;
  border-color: transparent;
  height: 100%;
  width: 36px;
  text-align: center;
  vertical-align: middle;
  background-color: transparent;
}

.input-group-prepend > button:focus,
.input-group-prepend > button:hover {
  box-shadow: none;
  background-color: transparent;
}

#input-search {
  margin-left: 10px;
  width: 270px;
}


</style>
