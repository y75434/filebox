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
      compare: [], //subfolder
      passLog: []
    }
  },
  created(){
   this.getRootFolder()

    //接收子層資料
    this.$bus.$on("sendTree", tree => {
      // 檢查
      if(tree['parentId']){
        this.passLog = []
        this.checkFather(tree.parentId)
        console.log('有father');        
      }else{    
        this.passLog = []
        this.checkFather(tree.folderId)

        console.log('passLog = []', tree);        
      }
      this.passLog.push(tree)
              console.log('this.passLog', this.passLog);        

      this.$emit('treeClick', tree);  //傳到home頁跑路徑

    });

    //子層傳來的值存放以方便做比較
    this.$bus.$on("compare", subitem => {   
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
          // console.log(this.trees,'全部rootfolder');//rootfolder

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
                         
              //比照compare紀錄
              this.now = this.compare.filter(i => i.folderId === this.now.folderId)
              console.log(this.now);        


              if(this.now[0]['parentId']){
          
                console.log('有father');

                this.passLog.unshift(this.now[0])

                this.checkFather(this.now[0].parentId)
              //此條件為根資料夾第一次被點擊
              }else if(this.now == null){
                // console.log( '傳送到sidebar', this.passLog );

                this.$bus.$emit("passSideBar", this.passLog); // include parent 傳給search
                 this.passLog = []

              }    
              // 根資料夾先前已被點擊過
              else{
                this.passLog.unshift(this.now[0])
                console.log( '傳送到sidebar', this.passLog );

                this.$bus.$emit("passSideBar", this.passLog); // include parent 傳給search
                this.passLog = []

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
