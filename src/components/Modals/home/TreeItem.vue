<template>
 <ul id="root" class="text-dark list-unstyled  mt-3 ms-2">
   <!-- <div class="text-dark mt-3 ms-2 cursor">
      <img
        src="@/assets/images/file/single folder@2x.png"
        class="icon24px"
        @dblclick="getRoot"
      >           
      Root Folder                
    </div> -->
   <div v-for="(tree,index) in trees" :key="index">
    
    <item :tree="tree"  @treeClick="treeClick"></item>
   </div>
  </ul>
</template>

<script>
import item from './Item.vue'
export default {
  components:{item},
  name: "TreeItem",
  data() {
    return{
      trees:[]
    }
  },
  created(){
   this.getRootFolder()
  },
  methods: {
   getRootFolder(){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/RootFolders`)
        .then((data) => { 
          this.trees = data.data;
          this.trees.map(x=>{
            x.hasChildren = false;
            x.subFolders = null;
            return x;
          });
          console.log(this.trees);
        }).catch(error => {
          console.log(error.response.data);        
        })
   },
   
  getRoot(){
    this.$emit('getRoot');  

  },
  treeClick(tree) {
    this.$emit('treeClick', tree);  
    console.log(tree, 'father tree');        
  },
 }
}
</script>

<style>

</style>