<template>
  <ul
    id="root"
    class="text-dark list-unstyled mt-3 ms-2"
  >
    <div
      v-for="(tree, index) in trees"
      :key="index"
    >
      <rootItem
        :tree="tree"
        @subClick="treeClick"
      />
    </div>
  </ul>
</template>

<script>
import rootItem from "./rootItem.vue";
import cmqRequest from "@/http/cmqRequest"


export default {
  components: { rootItem },
  props:{
    id: { type: String, default: "" },//folder id
  },
  name: "rootTreeItem",
  data() {
    return {
      trees: [],
      // go: false
    };
  },
  created() {
    this.getRootFolder();
  },
  methods: {
    // start() { this.getRootFolder(); },
    getRootFolder() {
        cmqRequest.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/RootFoldersForAdminPage`)
        .then((data) => {
          console.log(data.data);
          
          this.trees = data.data;
          this.trees.map((x) => {
            x.hasChildren = false;
            x.subFolders = null;
            return x;
          });
          //取得該folder tree
          // console.log(this.id, '51');
          // 更換rootfolder   
          this.id = this.$store.getters.liselected
           
          this.trees = this.trees.filter(i => i.folderId === this.id)

          console.log(this.trees[0],'重新讀取root'); 
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },

    treeClick(tree) {
      this.$emit("treeClick", tree);
      console.log(tree, "father tree");
    },
  },
};
</script>
