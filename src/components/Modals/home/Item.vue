<template>
  <li class=" list-unstyled">
    <b-iconstack font-scale="1" rotate="90" @click.stop="toggle">
      <b-icon
        stacked
        icon="chevron-right"
        shift-h="0"
        variant="success"    
      />
    </b-iconstack>
    <img
      src="@/assets/images/file/single folder@2x.png"
      class="icon24px"
      @dblclick="subClick(tree)"
    >
    {{ subitem.name }}
    <ul 
      v-show="open" 
      v-if="subitem.hasChildren && subitem.subFolders!=null"
    > 
    <!-- 簡化就跑不出來 -->
      <item
        v-for="(node, index) in subitem.subFolders" 
        :tree="node" 
        :key="index" 
      >
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
    subClick(tree) {
      this.$emit('subClick', tree);  
      console.log(tree,'subitem tree');        
    }, 
  }
}
</script>
