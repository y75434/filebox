<template>
<div class="list-unstyled">
    <!--  -->
    <div 
    @click="test(subitem)"
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
    test(subitem){
      console.log(subitem, "被點擊");
      subitem.isDark = true
      this.liselected = subitem.folderId
      this.getSelfSettings(subitem.folderId)

      //  console.log(this.liselected, "this.liselected");
    },
    toggle(subitem) {
      // console.log("toggle");
      // console.log(this.node, "node");
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
    //讓子層繼承父層設定
    // putFolder(){

    //   console.log('self',this.selfSetting);
    //   console.log('全部parent',this.selfSetting.settings.accessPermissions.parent);


    //   const data = JSON.stringify([
    //     {
    //       "folderId":this.selfSetting.folderId,
    //       "name":this.selfSetting.name,
    //       "description":"string",//this.selfSetting.description,
    //       "inherit":true,
    //       "settings":{
    //         "storage":this.selfSetting.settings.storage,
    //         "restrictedFileTypes":this.selfSetting.settings.restrictedFileTypes,
    //         "accessPermissions":{
    //           "self":this.selfSetting.settings.accessPermissions.self,
    //           "parent":this.selfSetting.settings.accessPermissions.parent}
    //       },
    //       "editor": this.$store.getters.userId, 
    //       "editorName":this.$store.getters.currentUser,
    //     }
    //   ])

    //   // const data = JSON.stringify([this.selfSetting])

    //   console.log(data, '子層設定');

    //   this.axios.patch(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/EditFolder`,
    //       this.selfSetting,{ headers: window.headers }).then((data) => { 

    //         console.log(data);
    //         this.$swal.fire({ title: 'success', icon: 'success' })

    //       }).catch(error => {
    //         console.log(error.response.data);    
    //         this.$swal.fire({ title: error.response.data, icon: 'error' })
        
    //       })
    //   },
  },
};
</script>
