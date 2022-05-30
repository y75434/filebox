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
  created(){
    // console.log(this.subitem, 'sub')
    this.start()  
    this.$store.dispatch('setTreeArr', null);

  },
  methods:{ 

    start(){
        this.open = !this.open
      if(this.open) {
          cmqRequest.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTree`)
        .then((data) => { 
          this.subitem = data.data;
          console.log(this.subitem, this.open);
            this.open = !this.open

        }).catch(() => {
          //  console.log(error.response.data);        
        })
      }
    },     
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
              console.log(this.subitem,'admin',this.open);
              
              // console.log(this.subitem.subFolders);

        //  {        
        //   index: x,
        //   groups: this.subitem
        //  }

            // let tempItem = array.find(arrayItem => {
            //   return item.parentId === arrayItem.folderId
            // })


              //陣列加入
              this.subitem.subFolders.forEach((item)=>{
          
  // let tempItem = array.find(arrayItem => {
  //             return item.parentId === arrayItem.folderId
  //           })

                  let self = []
                  self.push(this.subitem)
                  self.push(item)
                  console.log(self);
                  

              })

                console.log(this.arr,'全部包含所有arr');        




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
      //  要去監測該資料夾的上層並傳回search.vue
      
      //  this.$bus.$emit("showAlert", tree);
      //  this.$store.dispatch('setTreeArr', tree);
      //不能刪
      this.$bus.$emit("notify:message", tree);

     
      //要把sidebar的該資料夾樹狀  傳到search.vue
      console.log(tree,'點擊sidebar 當前資料夾',this.subitem);        
    }, 
  }
}
</script>
