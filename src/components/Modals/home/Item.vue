<template>
     <li class=" list-unstyled" @click.stop="toggle">
        <img
          src="@/assets/images/file/single folder@2x.png"
          class="icon24px"
          @dblclick="treeClick(tree)"
        >
      {{subitem.name}}
      <ul v-show="open" v-if="subitem.hasChildren && subitem.subFolders!=null">
        <item  @dblclick="treeClick(tree)"
          v-for="(node, index) in subitem.subFolders" :tree="node" :key="index" >
        </item>
      </ul>
    </li>
</template>

<script>
import item from './Item.vue'

export default {
 name:'item',
 components:{item},
  props:['tree'],
  data(){
    return {
        subitem:this.tree,
        open: false   
    }
  },
  created(){
      console.log(this.subitem, 'sub')
      
  },
  methods:{
    
    toggle(){
        console.log('toggle');
         this.open = !this.open
         if(this.open) {
             this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTree/${this.subitem.folderId}`)
            .then((data) => { 
              this.subitem = data.data;
            }).catch(() => {
              //  console.log(error.response.data);        
            })
         }
    },
    
    treeClick(tree) {
    this.$emit('treeClick', tree);  
    console.log(tree,'item tree');        
    }, 
  }
}
</script>
