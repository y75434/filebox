<template>
  <ul
    id="root"
    class="text-dark list-unstyled mt-3 ms-2"
  >
    <div
      v-for="(tree,index) in trees"
      :key="index"
    >
      <item
        :tree="tree"
      />
    </div>
  </ul>
</template>

<script>
import item from './Item.vue'
import cmqRequest from "@/http/cmqRequest"


export default {
  components:{item},
  name: "TreeItem",
  data() {
    return{
      trees:[],
      now:{},
      compare: [], //subfolder ,
      passLog: []
    }
  },
  created(){
   this.getRootFolder()

    this.$bus.$on("notify:message", tree => {
      // 並將接收到的 message 傳給自己的 methods showAlert 去觸發 alert 事件。
      if(tree['parentId']){
        this.checkFather(tree.parentId)
      }

      console.log(tree,'當下點擊folder');
      this.passLog.push(tree)
      this.$emit('treeClick', tree);  //only one
      // this.$emit('treeClick', this.passLog);  // include parent 傳給search

    });

    //子層傳來的值存放以方便做比較
    this.$bus.$on("pass", subitem => {
     
      this.compare.push(subitem)
      console.log(this.compare);
      

    });

  },
  methods: {
   getRootFolder(){
     if(this.$store.getters.isAdmin != null) {

      cmqRequest.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/RootFoldersForAdminPage`)
        .then((data) => { 
          this.trees = data.data;
          this.trees.map(x=>{
            x.hasChildren = false;
            x.subFolders = null;
            return x;
          });
          console.log(this.trees,'全部rootfolder');//rootfolder

        }).catch(error => {
          console.log(error.response.data);        
        })
     }

  }, 
  checkFather(item){

      console.log(item, 'start check father');        

         const data = JSON.stringify({        
          "folderId": item,
          "uerId": this.$store.getters.userId,
          "groups": this.$store.getters.group
         }) 

         console.log(data);

        if(this.$store.getters.isAdmin != null) {
            // console.log('檢查');        

            cmqRequest.post(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/FolderTreeForAdminPage`,
            data)
            .then((data) => { 
              console.log(data.data);        

              this.now = data.data;
              console.log(this.now,'跑幾次代表有幾個父層'); 
              

              
              
              //比照compare紀錄
              this.now = this.compare.filter(i => i.folderId === this.now.folderId)
              console.log('108',this.now);

              if(this.now){
                //已經是最上層folder
                this.passLog.unshift(this.now)
                console.log('111',this.now);


              }else{
                //把第一筆符合資料放入
                this.passLog.unshift(this.now[0])
              }

              console.log(this.passLog, 'all tree');

              if(this.now[0]['parentId']){
                console.log('有father');
                this.checkFather(this.now[0].parentId)
              }else{
                this.$bus.$emit("passSideBar", this.passLog); // include parent 傳給search

              }



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
 }
}
</script>
