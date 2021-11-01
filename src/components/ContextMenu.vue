<template>
  <div
    class="context-menu"
    v-show="show"
    :style="style"
    ref="context"
    tabindex="0"
    @blur="close"
  >
    <slot />
  </div>
</template>
<script>
export default {
	name: 'CmpContextMenu',
	props: {
		dropdown: { type: Boolean, default: false },
	},
	data() {
		return {
			left: 0,
			top: 0,
			show: false,
		};
	},
	computed: {
		style() {
			return {
				top: `${this.top}px`,
				left: `${this.left}px`,
			};
		},
	},
	methods: {
		close() {
			this.show = false;
			this.left = 0;
			this.top = 0;
		},
		open(evt) {
			const xSpace = this.dropdown ? 20 : 0;
			const ySpace = this.dropdown ? 15 : 0;
			this.left = (evt.pageX || evt.clientX) + xSpace;
			this.top = (evt.pageY || evt.clientY) - ySpace;

			this.$nextTick(() => this.$el.focus());
			console.log('1111111');
			
			this.show = true;
		},
	},
};
</script>
<style>
.context-menu {
	position: fixed;
	background: rgb(243, 245, 245);
	z-index: 999;
	outline: none;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	cursor: pointer;
	width: 150px;
}

.context-menu > ul {
	list-style-type: none;
	padding: 0px;
	margin: 3px;
}

.context-menu > ul > li {
	margin-bottom: 3px;
	padding: 5px;
	text-align: left;
	line-height: 1;
}

.context-menu > ul > li:hover {
	background-color: rgb(179, 219, 252);
}
</style>
