<template>
  <!-- <div
    class="box"
    @mousedown="handleMouseDown"
  >
    <div
      class="mask"
      v-show="is_show_mask"
      :style="style"
    />
    <div class="aa" v-model="select_list">
      <div
        v-for="(item,index) in data_list"
        :label="item.city_id"
        :key="index"
        class="form-check form-check-inline"
      >
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
        >
        <label
          @click.stop.prevent

          class="form-check-label"
          for="inlineCheckbox1"
        >{{ item.city_name }}</label>
      </div>
    </div>
  </div> -->

  <div
    style="height:100vh;width:100%"
    id="app"
  >
    <div
      style=""

      class="dragstartzone"
      @mousedown="startDrag"
      @mousemove="doDrag"
    >
      Start dragging here
    </div>

    <div
      class="box"
      @mousedown="handleMouseDown"
    >
      <div class="d-flex flex-column w-30">
        <img
          src="@/assets/images/cmd/paste@2x.png"
          alt="paste"
        >
        <span class="nav-text text-center">{{ $t("HOME.PASTE") }}</span>
      </div>

      <div
        class="mask"
        v-show="this.is_show_mask"
        :style="'width:'+this.mask_width+'left:'+this.mask_left+'height:'+this.mask_height+'top:'+this.mask_top"
      />
    </div>
  </div>
</template>

<script >

export default {
  name: "Test",
  data:() =>({
    // x1 : 0, 
    // y1: 0, 
    // x2 : 0, 
    // y2 : 0,
    // data_list:[
    //   { city_id: 35, city_name: '香港特別行政區' },
    //   { city_id: 34, city_name: '北京市' },
    //   { city_id: 33, city_name: '江苏省' },
    //   { city_id: 32, city_name: '吉林省' },
    //   { city_id: 31, city_name: '内蒙古自治区' },
    // ],
    // select_list:[],
    is_show_mask : false,
    box_screen_left : 0,
    box_screen_top : 0,
    start_x : 0,
    start_y : 0,
    end_x : 0,
    end_y : 0,
    mask_width: 0,
    mask_height: 0,
    mask_left: 0,
    mask_top: 0,
    dragging: false,
    x: 'no',
    y: 'no'
  }),
  computed: {
		style() {
			return {
				
        mask_width:`${Math.abs(this.end_x - this.start_x)}px;`, 
        mask_left:`${Math.abs(this.end_y - this.start_y)}px;`, 
        mask_height:`${Math.min(this.start_x, this.end_x) - this.box_screen_left}px;`, 
        mask_top:`${Math.min(this.start_y, this.end_y) - this.box_screen_top}px;`,

			};
		},
	},
  mounted() {
    const dom_box = document.querySelector('.box');
    this.box_screen_left = dom_box.getBoundingClientRect().left;
    this.box_screen_top = dom_box.getBoundingClientRect().top;
    // window.addEventListener('mouseup', this.stopDrag);

  },
  methods:{
    handleMouseDown(event) {
      console.log('5555');

      // if (event.target.tagName === 'SPAN') return false;
      
      this.is_show_mask = true;
      this.start_x = event.clientX;
      this.start_y = event.clientY;
      this.end_x = event.clientX;
      this.end_y = event.clientY;
      document.body.addEventListener('mousemove', this.handleMouseMove);
      document.body.addEventListener('mouseup', this.handleMouseUp);
    },
    handleMouseMove(event) {
      this.end_x = event.clientX;
      this.end_y = event.clientY;
    },
    handleMouseUp() {
      document.body.removeEventListener('mousemove', this.handleMouseMove);
      console.log('mousemove');
      document.body.removeEventListener('mouseup', this.handleMouseUp);
      this.is_show_mask = false;
      this.handleDomSelect();
      this.resSetXY();
    },
    handleDomSelect() {
      const dom_mask = window.document.querySelector('.mask');
      const rect_select = dom_mask.getClientRects()[0];
      console.log(rect_select);
      
      // const add_list = [];
      // const del_list = [];
      // document
      //   .querySelectorAll('.aa .form-check')
      //   .forEach((node, index) => {
      //     const rects = node.getClientRects()[0];
      //     if (this.collide(rects, rect_select) === true) {
      //       if (this.select_list.includes(this.data_list[index].city_id)) {
      //         del_list.push(this.data_list[index].city_id);
      //       } else {
      //         add_list.push(this.data_list[index].city_id);
      //       }
      //     }
      //   });
      // this.select_list = this.select_list.concat(add_list).filter((item) => !del_list.includes(item));
    
      console.log(this.select_list);

    
    },
    collide(rect1, rect2) {
      const maxX = Math.max(rect1.x + rect1.width, rect2.x + rect2.width);
      const maxY = Math.max(rect1.y + rect1.height,rect2.y + rect2.height);
      const minX = Math.min(rect1.x, rect2.x);
      const minY = Math.min(rect1.y, rect2.y);
      if (maxX - minX <= rect1.width + rect2.width && maxY - minY <= rect1.height + rect2.height) {
        return true;
      } else {
        return false;
      }
    },
    resSetXY() {
      this.start_x = 0;
      this.start_y = 0;
      this.end_x = 0;
      this.end_y = 0;
    },

    startDrag() {
      this.dragging = true;
      this.x = this.y = 0;
    },
    stopDrag() {
      this.dragging = false;
      this.x = this.y = 'no';
    },
    doDrag(event) {
      if (this.dragging) {
        this.x = event.clientX;
        this.y = event.clientY;
      }
    }

  }
}





</script>

<style>
  .dragstartzone { background-color: ; }

  .box {
    width: 800px;
    height: 100vh;
    margin: 20px auto;
    position: relative;
    overflow: hidden;
    user-select: none;
  }
  .mask {
    position: absolute;
    background: #409eff;
    opacity: 0.4;
  }

</style>

