<template>
  <div
    id="div"
    hidden
  >
  
  <p class="text-dark">rrrrrrrr</p>
  </div>
</template>

<script >
var div = document.getElementById('div')

export default {
  name: "Test",
  data:() =>({
    // var div = document.getElementById('div'), 
    x1 : 0, 
    y1: 0, 
    x2 : 0, 
    y2 : 0,

  }),
  methods:{
    reCalc() { //This will restyle the div
      var x3 = Math.min(this.x1,this.x2); //Smaller X
      var x4 = Math.max(this.x1,this.x2); //Larger X
      var y3 = Math.min(this.y1,this.y2); //Smaller Y
      var y4 = Math.max(this.y1,this.y2); //Larger Y
      div.style.left = x3 + 'px';
      div.style.top = y3 + 'px';
      div.style.width = x4 - x3 + 'px';
      div.style.height = y4 - y3 + 'px';
    },
    onmousedown(e) {
      div.hidden = 0; //Unhide the div
      this.x1 = e.clientX; //Set the initial X
      this.y1 = e.clientY; //Set the initial Y
      this.reCalc();
    },
    onmousemove(e) {
      this.x2 = e.clientX; //Update the current position X
      this.y2 = e.clientY; //Update the current position Y
      this.reCalc();
    },
    onmouseup() {
      div.hidden = 1; //Hide the div
    }
  }
}





</script>

<style scoped>
#div { border: 1px solid #000; position: absolute; }

</style>
