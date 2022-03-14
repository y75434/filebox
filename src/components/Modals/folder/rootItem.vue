<template>
<div class="list-unstyled">
    <!--  -->
    <div 
    @click="selectSelf(subitem)"
    :style=" { backgroundColor: ( subitem.liselected ? '#d3eaff' : 'transparent' )}">
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
      arr:[]
    }
  },
  mounted() {
    console.log(this.subitem, "sub");
    //把li加入到arr
    this.arr.push(this.subitem)
  },
 
  methods: {
    selectSelf(subitem){
      // this.$forceUpdate(); //强制刷新，解决页面不会重新渲染的问题
      subitem.liselected = true
      console.log(subitem, "被點擊",this.arr);
           
      this.arr.forEach(item => {
        item.liselected = false;
      })

      this.getSelfSettings(subitem.folderId)

      //  console.log(this.liselected, "this.liselected");
    },
    
    toggle(subitem) {
      
      this.open = !this.open;
        const data = JSON.stringify({        
          "folderId": subitem.folderId,
          "uerId": this.$store.getters.userId,
          "groups": this.$store.getters.group
         }) 

      if (this.open) {
        this.axios.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTreeForAdminPage`,
        data,{ headers: window.headers })
          .then((data) => {
            this.subitem = data.data;
            console.log(this.subitem, 'li');
           
          })
          .catch(() => {
            //  console.log(error.response.data);
          });
      }
    },
    //把點擊到的li 傳到vuex
     getSelfSettings(id){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderSettings/${id}`)
      .then((data) => {  
        console.log('tree更改store',data.data);
        this.selfSetting = data.data
        this.$store.dispatch('setLiselected', this.selfSetting);


      }).catch(() => {
        // console.log(error.response.data);        
      })
    },
    
  },
};
</script>
