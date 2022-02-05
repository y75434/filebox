<template>
     <li @click.stop="toggle">
      {{subitem.name}}
      <ul v-show="open" v-if="subitem.hasChildren && subitem.subFolders!=null">
        <item v-for="(node, index) in subitem.subFolders" :tree="node" :key="index" >
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
      console.log(this.subitem)
      
  },
  methods:{
    
    toggle(){
        console.log('A');
         this.open = !this.open
         if(this.open) {
             this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTree/${this.subitem.folderId}`)
            .then((data) => { 
              this.subitem = data.data;
            }).catch(() => {
              //  console.log(error.response.data);        
            })
         }
    }
  }
}
</script>
