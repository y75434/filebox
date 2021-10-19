<template>
  <div class="dqbz-body">
    <div class="dqbz-fnlist">
      <div class="fn-box">
        <div class="d-flex fn-w-100">
          <div class="d-flex flex-column">
            <img
              src="@/assets/copy@2x.png"
              alt="copy"
            >
            <span class="text-center">Copy</span>
          </div>
          <div class="d-flex flex-column">
            <img
              src="@/assets/paste@2x.png"
              alt="paste"
            >
            <span class="text-center">Paste</span>
          </div>
          <div class="d-flex flex-column">
            <img
              src="@/assets/cut@2x.png"
              alt=""
            >
            <span class="text-center">Cut</span>
          </div>

          
          <div class="paste nav-icon">
            <p>Paste</p>
          </div>
          <div class="cut ">
            <p>Cut</p>
          </div>
          <span>Clipboard</span>
        </div>
        <div class="divider" />
        <div class="fn-w-100">
          <span>Organize</span>
        </div>
        <div class="divider" />
        <div class="fn-w-50">
          <div class="d-flex flex-column">
            <img
              src="@/assets/new folder@2x.png"
              alt=""
            >
            <span class="text-center">New</span>
          </div>
        </div>
        <div class="divider" />
        <div class="fn-w-75 d-flex">
          <div class="d-flex flex-column w-50">
            <img
              src="@/assets/download@2x.png"
              alt=""
            >
            <span class="text-center">Download</span>
          </div>
          <div class="d-flex flex-column w-50">
            <img
              src="@/assets/upload@2x.png"
              alt=""
            >
            <span class="text-center">Upload</span>
          </div>

          <span>Transfer</span>
        </div>
        <div class="divider" />
        <div class="fn-w-100 d-flex">
          <div class="d-flex flex-column w-50">
            <img
              src="@/assets/add to zip@2x.png"
              alt=""
            >
            <span class="text-center">add to zip</span>
          </div>
<div class="d-flex flex-column w-50">
            <img
              src="@/assets/extract all files@2x.png"
              alt=""
            >
            <span class="text-center">extract all files</span>
          </div>

          <span>Compression</span>
        </div>
        <div class="divider" />
        <div class="fn-w-150">
          <span>Share</span>
        </div>
        <div class="divider" />
        <div class="fn-w-120">
          <span>Select</span>
        </div>
        <div class="divider" />
        <div class="fn-w-210">
          <h6>Example heading <span class="badge bg-secondary">New</span></h6>

          <span>Layout</span>
        </div>
        <div class="divider" />
        <div class="fn-w-120">
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

          <span>Show/Hide</span>
        </div>
        <div class="divider" />
      </div>
    </div>
    <div class="dqbz-path-block">
      <button class="dqbz-previous">
        1
      </button>
      <b-form-input
        type="text"
        placeholder="Search"
      />
      <b-button>S</b-button>
      <select
        class="form-select"
        aria-label="Default select example"
      >
        <option selected />
      </select>

      <b-button>S</b-button>
    </div>
    <div />
    <div class="dqbz-main">
      <Splitpanes style="height: 100%">
        <Pane
          :size="paneSize"
          min-size="10"
          max-size="25"
        >
          <Sidebar />
          <span>1</span>
        </Pane>
        <Pane :size="100 - paneSize">
          <span>2</span>
        </Pane>
      </Splitpanes>
    </div>
    <div class="dqbz-footer" />
  </div>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Home",
  components: {
    Splitpanes,
    Pane,
    Sidebar
  },
  data: () => ({
    paneSize: 15,
  }),
  mounted() {},
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
  background-color: rgb(52, 153, 236);
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
