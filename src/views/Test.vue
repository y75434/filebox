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
    <div class="" style="text-align:center;">
      <img
        ref="img"
        src="@/assets/images/icon/user@2x.png"
        class="icon32px"
        
        style="margin-right:20px;marign-top:30px;user-select: none;"
      >
       <img
        id="img2"
        ref="img"
        src="@/assets/images/icon/user@2x.png"
        class="icon32px"
        style="margin-right:20px;marign-top:30px;user-select: none;"

      >
       <img
        ref="img"
        src="@/assets/images/icon/user@2x.png"
        class="icon32px"
        style="margin-right:20px;marign-top:30px;user-select: none;"
      >
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
