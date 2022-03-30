<template>
  <ul
    id="root"
    class="text-dark list-unstyled mt-3 ms-2"
  >
    <div
      v-for="(tree,index) in trees"
      :key="index"
    >
      <item
        :tree="tree"
      />
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

    this.$bus.$on("notify:message", tree => {
      // 並將接收到的 message 傳給自己的 methods showAlert 去觸發 alert 事件。
      console.log(tree,'沒法跑到search的值,但可以跳轉路徑');
      this.$emit('treeClick', tree);  
    });

  },
  methods: {
   getRootFolder(){
     if(this.$store.getters.isAdmin != null) {

      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/RootFoldersForAdminPage`)
        .then((data) => { 
          this.trees = data.data;
          this.trees.map(x=>{
            x.hasChildren = false;
            x.subFolders = null;
            return x;
          });
          console.log(this.trees,'全部rootfolder');//rootfolder
        }).catch(error => {
          console.log(error.response.data);        
        })
     }

  },   
 }
}
</script>
