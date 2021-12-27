<template>
  <div
    @mousedown="mouseDown($event)"
    @mousemove="mouseMove($event)"
    @mouseup="mouseUp($event)"
    style="background:white;position: relative;width:100vw;height:100vh"
  >
    <div class="">
      <img
        ref="img"
        src="@/assets/images/icon/user@2x.png"
        class="icon32px"
      >
    </div>
    <div
      ref="div"
      style="border: 1px solid #33CCFF;background:#33CCFF;opacity:0.5;position:absolute"
    />
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
    mouseDown(e){
      let div = this.$refs.div;
      div.hidden = 0;
      this.x1 = e.clientX; 
      this.y1 = e.clientY;
      console.log(this.x1,this.y1)
      this.reCalc();
    },
    mouseUp(){ 
      let div = this.$refs.div;
      div.hidden = 1;

     },
    mouseMove(e){ 
      this.x2 = e.clientX; 
      this.y2 = e.clientY;
      console.log(this.x2,this.y2)
      this.reCalc();

    },

    reCalc() { 
      let div = this.$refs.div;
      let img = this.$refs.img;
      var x3 = Math.min(this.x1,this.x2); 
      var x4 = Math.max(this.x1,this.x2); 
      var y3 =Math.min(this.y1,this.y2); 
      var y4 = Math.max(this.y1,this.y2); 
      div.style.left = x3 + 'px';
      div.style.top = y3 + 'px'; 
      div.style.width = x4 - x3 + 'px'; 
      div.style.height =y4 - y3 + 'px'; 

      console.log(this.collide(div,img));
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
        if (maxX - minX <= rect1.width + rect2.width && maxY - minY <= rect1.height + rect2.height) {
          return true;
        } else {
          return false;
        }
}
      
  }
}





</script>
