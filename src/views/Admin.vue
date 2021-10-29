<template>
  <div
    class=""
    @contextmenu="handler($event)"
  >
    <AdminNav />
    <div class="dqbz-body">
      <!-- main -->
    

      <Splitpanes
        class="h-100"
        @contextmenu="showMenu()"
      >
        <Pane
          :size="paneSize"
          min-size="10"
          max-size="25"
          class="d-flex flex-column"
        >
          <ul class=" list-unstyled w-100 text-dark d-flex flex-column  align-items-start h-100">
            <li class="d-flex align-items-center text-center">
              <img
                class="icon28px"
                src="@/assets/images/icon/usermanagement@2x.png"
              >
              <p class="m-0">
                User Management
              </p>
            </li>
        
            <li class="d-flex align-items-center">
              <img
                class="icon28px"
                src="@/assets/images/icon/group management@2x.png"
              >

              <p class="m-0">
                Group Management
              </p>
            </li>
            <li class="d-flex align-items-center">
              <img
                class="icon28px"
                src="@/assets/images/file/root folder@2x.png"
              >

              <p class="m-0">
                Root Folders
              </p>
            </li>
            <li class="d-flex align-items-center">
              <img
                class="icon28px"
                src="@/assets/images/file/publiclink@2x.png"
              >

              <p class="m-0">
                Public Links
              </p>
            </li>
          </ul>
        

          
          <ul
            class="text-dark small bg-f4gray w-100 align-items-start d-flex flex-column m-0 "
          >
            <li class="d-flex align-items-center py-2">
              <img
                src="@/assets/images/file/app setting@2x.png"
                class="icon28px"
              >
              <h5
                class=""
              >
                Application Settings
              </h5>
            </li>
            <li class="d-flex align-items-center py-2">
              <img
                src="@/assets/images/icon/license info@2x.png"
                class="icon28px"
              >

              <h5
                class=""
              >
                License Information
              </h5>
            </li>
            <li class="d-flex align-items-center py-2">
              <img
                src="@/assets/images/icon/about@2x.png"
                class="icon28px"
              >

              <h5
                class=""
              >
                About FileVista
              </h5>
            </li>
          </ul>
        </Pane>
        <Pane
          :size="100 - paneSize"
          class=" flex-column"
        >
          <userTitle />
          <Table />
        </Pane>
      </Splitpanes>
      <ContextMenu ref="menuForUser">
        <ul>
          <li>
            Rename
          </li>
          <li>Properties</li>
          <li>Delete</li>
        </ul>
      </ContextMenu>
      <NewUser />
    </div>
  </div>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import AdminNav from "@/components/AdminNav.vue";
import Table from '../components/Table.vue';
import userTitle from '../components/title/AdminTitle.vue'
import ContextMenu from '@/components/ContextMenu.vue';
import NewUser from '@/components/Modals/NewUser.vue';




export default {
name: "Admin",
  components: {
    Splitpanes,
    Pane,
    AdminNav,
    Table,
    userTitle,
    ContextMenu,
NewUser

  },
  data: () => ({
    selectedRow: null,
    currentSelected: 1,


    paneSize: 15,
  }),
  mounted() {

  },
  methods: {
		handler(event) {
			event.preventDefault();
    },
    showMenu(e) { this.$emit("show-contextmenu", e)
    },

    //顯示彈窗
		// showMenu(itemId, event) {
		// 	const type = itemId === null ? this.currentSelected : itemId;
		// 	switch (type) {
		// 		case 1:
		// 			this.$refs.menuForUser.open(event);
		// 			break;
				// case 2:
				// 	this.$refs.menuForGroup.open(event);
				// 	break;
				// case 3:
				// 	this.$refs.menuForFolder.open(event);
				// 	break;
			// 	default:
			// 		break;
			// }
    
    operational(event) {
			event.preventDefault();
			event.stopPropagation();
			this.$refs.menuForOperational.open(event);
    },
    getRowClass(index) { return index === this.selectedRow ? 'row-selected' : ''; 
    },

  }
};

</script>


