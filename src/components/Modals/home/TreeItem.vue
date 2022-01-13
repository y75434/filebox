<template>
  <div class="list-unstyled">
    <li
      class="text-dark"
      v-for="item in tree"
      :key="item.folderId"

                  :id="item.folderId"
      @click.stop="toggle(item)"
        @click="passRoute($event,item)"                   
                    :value="item.name"
    >
      {{ item.name }}
    </li>
    <ul>
      <li
        class="text-dark"
        v-show="open"
        v-if="tree.node && tree.node.length > 0"
      >
      <item v-for="(node, index) in tree.node"  :key="index" >
        </item>
        {{ node.name }}
        333
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TreeItem",
  props: {
    tree: { type: Array , default() { return [] }},

  },
  data() {
    return{
       open: false   
    }
  },
  // computed: {
  //   hasName(item) {
  //       return this.containsKey(item, 'node');
  //   }
  // },
   methods: {
    toggle(item){
      if('node' in item){
        this.open = !this.open
      }
    },
    // containsKey( obj, key) {
    //   return Object.keys(obj).includes(key);
    // }
 }
}
</script>

<style>

</style>