<template>
 <ul id="root">
   <div v-for="(tree,index) in trees" :key="index">
    <item :tree="tree"></item>
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
  methods: {
   
 }
}
</script>

<style>

</style>