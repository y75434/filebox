<template>
<div class="list-unstyled">
    <!--  -->
    <div 
    @click="selectSelf(subitem)"
    :style=" { backgroundColor: ( subitem.folderId == this.liselected ? '#d3eaff' : 'transparent' )}">
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
      liselected: "",
      selectedId:0,
      selfSetting: []
    }
  },
  created() {
    // console.log(this.subitem, "sub");
  },
 
  methods: {
    selectSelf(subitem){
      console.log(subitem, "被點擊");
      subitem.isDark = true
      this.liselected = subitem.folderId
      // this.liselected = this.liselected.filter(x=>x.folderId == subitem.folderId)
      
      this.getSelfSettings(subitem.folderId)


      //  console.log(this.liselected, "this.liselected");
    },
    //想要一次跑完根資料夾樹狀
    test(){
      const data = JSON.stringify({        
          "folderId": "3d6555db-0d52-4226-a976-ed8e6124daf2",
          "uerId": this.$store.getters.userId,
          "groups": this.$store.getters.group
         }) 


        this.axios.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTreeForAdminPage`,
        data,{ headers: window.headers })
          .then((data) => {
            this.testTree = data.data;

            if (this.testTree.subFolders ) {

              const data = JSON.stringify({ "folderId":
"3d6555db-0d52-4226-a976-ed8e6124daf2", "uerId": this.$store.getters.userId,
"groups": this.$store.getters.group })


              this.axios.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTreeForAdminPage`,
              data,{ headers: window.headers }) .then((data) => {

            console.log(this.subitem, '沒東西');
            }) .catch(() => { // console.log(error.response.data); });

            

          })
          .catch(() => {
            //  console.log(error.response.data);
          });
      }
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
            console.log(this.subitem, '沒東西');

          })
          .catch(() => {
            //  console.log(error.response.data);
          });
      }
    },
     getSelfSettings(id){
      this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderSettings/${id}`)
      .then((data) => {  
        console.log('tree更改store',data.data);
        this.selfSetting = data.data
        this.$store.dispatch('setLiselected', this.selfSetting);

        // this.putFolder()

      }).catch(() => {
        // console.log(error.response.data);        
      })
    },
    
  },
};
</script>
