<template>
  <li class=" list-unstyled">
    <!-- {{ subitem }} -->
    <b-iconstack font-scale="1" rotate="90" @click.stop="toggle(subitem)"
    >
    <!--  -->
      <b-icon
        stacked
        icon="chevron-right"
        shift-h="0"
        variant="success"
        v-if="subitem.hasChildren "    
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
import cmqRequest from "@/http/cmqRequest"


export default {
 name:'item',
 components:{item},
  props:['tree'],
  data(){
    return {
      subitem:this.tree,
      open: false,
      arr:[]  
    }
  },
 
  methods:{ 
     
    toggle(subitem){
        this.open = !this.open
         const data = JSON.stringify({        
          "folderId": subitem.folderId,
          "uerId": this.$store.getters.userId,
          "groups": this.$store.getters.group
         }) 

        //  console.log(data);

        if(this.$store.getters.isAdmin != null) {
            cmqRequest.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTreeForAdminPage`,
            data)
            .then((data) => { 
              this.subitem = data.data;
              // console.log(this.subitem, 'toggle folder');
           
      
              //子資料夾加入index和parentId
              this.subitem.subFolders.forEach((item)=>{

                item.parentId = this.subitem.folderId  
                this.$bus.$emit("compare", item);

              })
              //根資料夾也順便傳
              this.$bus.$emit("compare", this.subitem);

          }).catch(() => {
            //  console.log(error.response.data);        
          })
        }else{
           cmqRequest.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTree`,
           data)
          .then((data) => { 
            this.subitem = data.data;
            console.log(this.subitem, 'normal',this.open);

          }).catch(() => {
            //  console.log(error.response.data);        
          })
        }
    },   
    subClick(tree) {
      
      //傳給 TreeItem.vue 做資料過濾
      this.$bus.$emit("sendTree", tree);
     
      // console.log(tree,'當前資料夾');        
    }, 
  }
}
</script>
