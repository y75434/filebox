<template>
  <div class="list-unstyled">
    <div 
      @click="selectSelf(subitem)"
      class="li"
      :style=" { backgroundColor: ( subitem.folderId === this.markfolderId ? '#d3eaff' : 'transparent' )}"
    >
      <b-iconstack
        font-scale="1"
        rotate="90"
        @click.stop="toggle(subitem)"
      >
        <b-icon
          stacked
          icon="chevron-right"
          shift-h="0"
          variant="success"
        />
      </b-iconstack>
      <img
        src="@/assets/images/file/single folder@2x.png"
        class="icon24px "
      >
      {{ subitem.name }}
    </div>
   
    <ul
      v-show="open"
    >
      <!-- 簡化就跑不出來  -->
      <rootItem
        v-for="(node, index) in subitem.subFolders"
        :tree="node"
        :key="index"

      ></rootItem>
    </ul>
  
  </div>
 
  
</template>

<script>
import rootItem from "./rootItem.vue";
import cmqRequest from "@/http/cmqRequest"


export default {
  name: "rootItem",
  components: { rootItem },
  props: ["tree"],
  data() {
    return {
      subitem: this.tree,
      open: false,
      selectedId:0,
      selfSetting: [],
      arr:[],
      trees:null,
      isFirst:true
    }
  },
  created(){
    if(this.subitem.createdOn) {
      this.trees = Object.assign({},this.subitem);
      console.log('initTree',this.trees);
      this.$store.dispatch('setMark', { folderId:"aaa" });
    }
  },
  computed:{
    markfolderId(){
      return this.$store.getters.markfolder.folderId
    }
  },
  methods: {
    
    findObj(data, name) {
      // 如果是Array則進一步往下判斷
      if (Array.isArray(data)) {
        // 判斷外層的名稱是否為要找的物件
        var arrayItem = data.filter((x) => x.name == name);
        if (arrayItem.length > 0) {
          return arrayItem[0];
        } else {
          return null;
        }
      } else {
        // 如果不是Array 則判斷名稱與要找的物件是否相符合，不符則再往下找
        if (data.name == name) {
          return data;
        } else {
          if (data.subFolders != null) {
            return this.findObj(data.subFolders, name);
          } else {
            return null;
          }
        }
      }       
    },
    selectSelf(subitem){

      this.getSelfSettings(subitem.folderId)
      this.$forceUpdate();
    },
    
    toggle(subitem) {
      
      this.open = !this.open;
        const data = JSON.stringify({        
          "folderId": subitem.folderId,
          "uerId": this.$store.getters.userId,
          "groups": this.$store.getters.group
         }) 

      if (this.open) {
        cmqRequest.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTreeForAdminPage`,
        data)
          .then((data) => {
            console.log('nowTree',data.data);
            this.subitem = data.data;
   

            var item =  this.findObj(this.trees,data.data.name);
              console.log('被點擊的folder',item);
              if(item !== null){
                item.subFolders = data.data.subFolders
              }
              console.log('root folder',this.trees);
            
           
          })
          .catch(() => {
            //  console.log(error.response.data);
          });
      }
    },
    //把點擊到的li 傳到vuex
     getSelfSettings(id){
      cmqRequest.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderSettings/${id}`)
      .then((data) => {  
        this.selfSetting = data.data
        this.$store.dispatch('setMark',this.selfSetting );
        this.$store.dispatch('setLiselected',this.selfSetting );

      }).catch(() => {
        // console.log(error.response.data);        
      })
    },
    
  },
};
</script>


