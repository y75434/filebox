<style>
  img {
    -webkit-user-select:none;
    -moz-user-select:none;
    -o-user-select:none;
    user-select:none;
  }
</style>
<template>
  <div
    @mousedown="mouseDown($event)"
    @mousemove="mouseMove($event)"
    @mouseup="mouseUp($event)"
    style="background:white;position: relative;width:100vw;height:100vh"
  >
    <div class="d-flex">
                <div
                  class="mx-2 my-2 folderItem"
                  style="position:relative"
                  :key="item.id"
                  :id="item.id"
                  v-for="item in resultQuery"
                  @dblclick="detectClick(item)"
                  @change="ischecked = !ischecked"
                  :style=" { backgroundColor: (item.ischecked ? '#d3eaff' : 'transparent' ), 
                             opacity: item.changed ? {opacity:'1'} : {opacity:'0.3'},          
                  }"
                  @mouseover="rowSelected(item)"
                >
                  <input
                    class="form-check-input itemCheckbox"
                    type="checkbox"
                    v-model="item.ischecked"
                    v-if="renderCheckboxs"
                    @change="setSelectNumber()"
                  >
                  <img
                    :src="item.pic"
                    :id="item.id"
                    class="folder-icon"
                  >
                  <div
                    class="text-dark text-center text-truncate"
                    style="max-width: 100px;"
                  >
                    {{ item.name }}<span
                      class="text-dark"
                      v-if="extension"
                    >.{{ item.extension }}</span>
                  </div>     
                </div> 
              </div>
    <div
      ref="div"
      style="border: 1px solid #33CCFF;background:#33CCFF;opacity:0.5;position:absolute;z-index:999"
      hidden=0
    />
    <button @click="selected()">SelectedImg</button>
  </div>
</template>

<script >

export default {
  name: "Test",
  data:() =>({
   x1 : 0, y1 : 0, x2 :0, y2 : 0,
   resultQuery:[
    {
        "folderId": "a9602080-f4fc-4356-abe3-145d05fab9ac",
        "name": "cat",
        "createdOn": "2021-12-09T03:12:26.773025",
        "modifiedOn": "2022-02-10T03:39:10.551138",
        "pic": "data:image/png;base64,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",
        "ischecked": false
    },
    {
        "folderId": "2a9749ff-e248-4154-b793-cdb7492e1487",
        "name": "mickey",
        "createdOn": "2022-01-04T07:39:40.840352",
        "modifiedOn": "2022-02-15T03:36:35.58932",
        "pic": "data:image/png;base64,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",
        "ischecked": false
    },
    {
        "folderId": "4ddb9c06-5f94-40bc-8def-9382c5a30f4d",
        "name": "kaoh",
        "createdOn": "2021-12-10T03:05:36.505794",
        "modifiedOn": "2022-02-21T03:50:59.900446",
        "pic": "data:image/png;base64,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",
        "ischecked": true
    },
    {
        "folderId": "fc05ea82-0a51-4753-a92b-1604c06b8c53",
        "name": "string",
        "createdOn": "2022-01-05T10:55:48.346036",
        "modifiedOn": "2022-02-21T03:51:15.474868",
        "pic": "data:image/png;base64,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",
        "ischecked": true
    }
]
  }),
  computed: {
	
	},
  mounted() {
  
  },
  methods:{
    selected(){
      let selected = []
      let imgs = document.querySelectorAll('img');
      imgs.forEach(x=>{
         if(x.dataset.selected==='true'){
           selected.push(x);
         }
      })
      console.log(selected);
    }
    ,
    mouseDown(e){
      let div = this.$refs.div;
      div.hidden = 0;
      this.x1 = e.clientX; 
      this.y1 = e.clientY;
      this.reCalc();
    },
    mouseUp(){ 
      let div = this.$refs.div;
      div.hidden = 1;

     },
    mouseMove(e){ 
      this.x2 = e.clientX; 
      this.y2 = e.clientY;
      this.reCalc();

    },

    reCalc() { 
     
      let div = this.$refs.div;
      //let img = this.$refs.img;
      if(div.hidden==0) {
        var x3 = Math.min(this.x1,this.x2); 
        var x4 = Math.max(this.x1,this.x2); 
        var y3 =Math.min(this.y1,this.y2); 
        var y4 = Math.max(this.y1,this.y2); 
        div.style.left = x3 + 'px';
        div.style.top = y3 + 'px'; 
        div.style.width = x4 - x3 + 'px'; 
        div.style.height =y4 - y3 + 'px'; 

        let imgs = document.querySelectorAll('img');
        imgs.forEach(img=>{
          if(this.collide(div.getBoundingClientRect(),img.getBoundingClientRect())) {
            img.setAttribute("style","background-color:red");
            img.setAttribute('data-selected','true')
          } else {
            img.setAttribute("style","background-color:none");
            img.setAttribute('data-selected','false')
          }
        })
       
      }
     
      },

      collide(rect1, rect2) {
        // let rect1_leftbottom = rect1.x;
        // let rect1_lefttop = rect1.x+rect1.height;
        // let rect1_rightbottom = rect1.x+rect1.width;
        // let rect1_righttop = rect1_rightbottom+
        

        const maxX = Math.max(rect1.x + rect1.width, rect2.x + rect2.width);
        const maxY = Math.max(rect1.y + rect1.height, rect2.y + rect2.height);
        const minX = Math.min(rect1.x, rect2.x);
        const minY = Math.min(rect1.y, rect2.y);
        // console.log("DIV:",rect1.x,rect1.y)
        // console.log("IMG:",rect2.x,rect2.y)
        // console.log("maxX:",maxX,"minX",minX,"rect1.width",rect1.width,"rect2.width:",rect2.width)
        if (maxX - minX <= rect1.width + rect2.width && maxY - minY <= rect1.height + rect2.height) {
          return true;
        } else {
          return false;
        }
}
      
  }
}





</script>
