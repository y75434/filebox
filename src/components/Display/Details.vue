<template>
  <div class="d-flex flex-column">
    <h1>Details</h1>
    <li class="d-flex">
      <input
        class="form-check-input itemCheckbox"
        type="checkbox"
        v-model="item.ischecked"
        v-if="renderCheckboxs"
      >


      <h6
        class="text-dark text-center text-truncate d-inline-block"
        style="max-width: 100px"
      >
        {{ item.name }}<span
          class="text-dark"
          v-if="extension"
        >.{{ item.extension }}</span>
      </h6>
    </li>
    <label
      class="d-flex flex-column mx-2 my-2 position-relative"
      :key="item.id"
      v-for="item in resultQuery"
      @dblclick="detectClick(item)"
      @change="ischecked = !ischecked"
      :style="{
        backgroundColor: item.ischecked ? '#d3eaff' : 'transparent',
        opacity: item.changed ? { opacity: '1' } : { opacity: '0.3' },
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
  </div>
</template>

<script>


export default {
name: "Details",
  components: {
    



  },
  data: () => ({
    
      
     
      
      
      

  }),
  methods: {

  }


}
</script>

