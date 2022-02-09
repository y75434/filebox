<template>
  <li class="list-unstyled"
      
  >
    <!--  -->

    <b-iconstack
      font-scale="1"
      rotate="90"
      @click.stop="toggle"
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
      @dblclick="selectSub(subitem)"
      :style=" { backgroundColor: (subitem.clicked ? '#d3eaff' : 'transparent' )}"
    >
    {{ subitem.name }}
    <ul
      v-show="open"
    >
      <!-- 簡化就跑不出來 -->
      <rootItem
        v-for="(node, index) in subitem.subFolders"
        :tree="node"
        :key="index"
      ></rootItem>
    </ul>
  </li>
</template>

<script>
import rootItem from "./rootItem.vue";

export default {
  name: "rootItem",
  components: { rootItem },
  props: ["tree"],
  inject: ['$fatherSetting'],
  data() {
    return {
      subitem: this.tree,
      open: false,
    };
  },
  created() {
    // console.log(this.subitem, "sub");
  },
  computed: {
    fatherSetting() {
      return this.$fatherSetting()
    }
  },
  methods: {
    toggle() {
      // console.log("toggle");
      this.open = !this.open;
      if (this.open) {
        this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTree/${this.subitem.folderId}`)
          .then((data) => {
            this.subitem = data.data;
          })
          .catch(() => {
            //  console.log(error.response.data);
          });
      }
    },
    selectSub(subitem) {
      console.log(subitem, "被選取的子資料夾 ");
      subitem.clicked = true

      this.putFolder(subitem)
      const a = Object.assign({}, this.fatherSetting);

      console.log(a, "hi" ,this.fatherSetting);

    },
    //讓子層繼承父層設定
    putFolder(subitem){

      const data = JSON.stringify({
          "folderId": subitem.folderId,
          "name": subitem.name,
          // "description": "string",
          "editor": this.$store.getters.userId,
          "editorName": this.$store.getters.currentUser,        
          "settings":this.fatherSetting
      })

      console.log(data);

      this.axios.patch(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/EditFolder`,
          data,{ headers: window.headers }).then((data) => { 

            console.log(data);
            this.$swal.fire({ title: 'success', icon: 'success' })

          }).catch(error => {
            console.log(error.response.data);    
            this.$swal.fire({ title: error.response.data, icon: 'error' })
        
          })
      },
  },
};
</script>
