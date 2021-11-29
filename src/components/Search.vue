<template>
  <div class="dqbz-path-block">
    <!-- <button class="dqbz-previous">
      <img
        src="@/assets/images/arrow/arrow-left@2x.png"
        class="nav-icon"
      >
    </button>
    <button class="dqbz-previous">
      <img
        src="@/assets/images/arrow/arrow-right@2x.png"
        class="nav-icon"
      >
    </button>
    <button class="dqbz-previous">
      <img
        src="@/assets/images/arrow/down@2x.png"
        class="nav-icon"
      >
    </button> -->
    <button class="dqbz-previous bg-light">
      <img
        src="@/assets/images/arrow/arrow-up@2x.png"
        class="nav-icon"
      >
    </button>
    <div class="btn-group dropend">
      <button
        type="button"
        class="btn dqbz-previous bg-light dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      />
      <ul class="dropdown-menu">
        <li>
          <a
            class="dropdown-item"
            href="#"
          >Another action</a>
        </li>
        <li>
          <a
            class="dropdown-item"
            href="#"
          >Something else here</a>
        </li>
      </ul>
    </div>


    <!-- <select
      class="form-select"
      aria-label="Default select example"
    >
      <option selected />
    </select> -->
    <div class="input-group float-left">
      <div class="btn-group dropend treeviewRoute">
        <button
          type="button"
          class="btn bg-white dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ treeSelected }}
          <!-- {{ new }} -->
        </button>
        <ul class="dropdown-menu">
          <li>
            <a
              class="dropdown-item"
              href="#"
            >Another action</a>
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
            >Something else here</a>
          </li>
        </ul>
      </div>
      <div class="btn-group dropend treeviewRoute">
        <button
          type="button"
          class="btn bg-white dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Folder One
        </button>
        <ul class="dropdown-menu">
          <li>
            <a
              class="dropdown-item"
              href="#"
            >Another action</a>
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
            >Something else here</a>
          </li>
        </ul>
      </div>



      <input
        type="text"
        class="form-control treeviewRoute"
      >
    </div>

    <button class="dqbz-previous">
      <img
        src="@/assets/images/cmd/refresh@2x.png"
        class="nav-icon"
      >
    </button>
    <!-- @change -->
    <b-form-input
      type="text"
      placeholder="Search"
    />


    <!-- <b-button
      class="text-white"
      style="background-color:#66ACEC;"
    >
      <img
        src="@/assets/images/arrow/arrow-right@2x.png" 
        class="nav-icon"
      >
    </b-button> -->
  </div>
</template>

<script>
// import eventBus from "@/bus.js";

export default {
  name: "Search",
  props: { treeSelected: { type: String, default: "aaa" } },

  data() {
    return {
      showModal: false,
      new: this.treeSelected,
    };

  },
  mounted(){
    // this.get();
    this.new = this.treeSelected;

  },
  watch:{
    
  },
  methods: {
   
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    },
    handleSubmit() {
      // this.$nextTick(() => {
      this.showModal = false;
      // });
    },
  },
}
</script>
