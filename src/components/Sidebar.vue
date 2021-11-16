<template>
  <ul
    class="
      list-unstyled
      w-75
      text-dark
      d-flex
      flex-column
      align-items-start
      h-100
    "
    @contextmenu="handler($event)"
  >
    <li 
      v-for="(item, index) in menuItems"
      :key="index"
      @click="redirect(item.id)"
      class="d-flex align-items-center text-left mb-2"
    >
      <img
        :src="`${item.pic}`"
        class="icon28px"
      >
      <p class="m-0">
        {{ item.name }}
      </p>
    </li>
  </ul>
</template>

<script>
import eventBus from "@/bus.js";

export default {
  name: 'Sidebar',
  data() {
    return {
      menuItems: [
        { id: 1, name: 'User Management',pic: require('@/assets/images/icon/usermanagement@2x.png'), countName: 'Users'},
        { id: 2, name: 'Group Management', pic: require('@/assets/images/icon/group management@2x.png'), countName: 'Groups'},
        { id: 3, name: 'Root Folders', pic: require('@/assets/images/file/root folder@2x.png') , countName: 'Root Folders'},
        { id: 4, name: 'Events' , pic: require('@/assets/images/icon/event@2x.png'), countName: 'Events'},
        { id: 5, name: 'Public Links' , pic:require('@/assets/images/file/publiclink@2x.png'), countName: 'Public Links'},
      ],
      selectedRow: null, 
      // currentSelected: 1,
   };
  },
  methods:{
    handler(event) { event.preventDefault(); },
     // 跳轉到該頁
    redirect(index) {    
      eventBus.$emit('menuItems', this.menuItems[index-1]);
      // this.currentSelected === index;
      // console.log(this.currentSelected);
      
    },
  }
}
</script>



<style scoped>

</style>
