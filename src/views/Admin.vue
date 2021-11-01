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
            <li 
              v-for="(item, index) in menuItems"
              :key="index"
              :class="getMenuItemClass(item.id)"
              @contextmenu="showMenu(item.id, $event)"
              @click="redirect(item.id)"
              class="d-flex align-items-center text-center"
            >
              <img src="">
              <p class="m-0">
                {{ item.name }}
              </p>
            </li>
            <!-- <li class="d-flex align-items-center text-center">
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
            </li> -->
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

            <li
              data-bs-toggle="modal"
              data-bs-target="#c"

              @click="AboutFileVista"
              class="d-flex align-items-center py-2"
            >
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
          <AdminTitle />
          <Table />
        </Pane>
      </Splitpanes>
      <ContextMenu ref="menuForUser">
        <ul>
          <li>New User</li>
          <li>Import Users</li>
          <li>Refresh</li>
        </ul>
      </ContextMenu>
      <ContextMenu ref="menuForGroup">
        <ul>
          <li>
            New Group
          </li>
          <li>Refresh</li>
        </ul>
      </ContextMenu>
      <ContextMenu ref="menuForFolder">
        <ul>
          <li>
            New Folder
          </li>
          <li>Refresh</li>
        </ul>
      </ContextMenu>
      <ContextMenu ref="menuForOperational">
        <ul>
          <li>Delete</li>
          <li>
            Rename
          </li>
          <li>Properties</li>
        </ul>
      </ContextMenu>

      <NewUser />
      <AboutFileVista
        ref="modal"
      />
    </div>
  </div>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import AdminNav from "@/components/AdminNav.vue";
import Table from '../components/Table.vue';
import AdminTitle from '../components/title/AdminTitle.vue'
import ContextMenu from '@/components/ContextMenu.vue';
import NewUser from '@/components/Modals/NewUser.vue';
import AboutFileVista from '@/components/Modals/AboutFileVista.vue';



export default {
name: "Admin",
  components: {
    Splitpanes,
    Pane,
    AdminNav,
    Table,
    AdminTitle,
    ContextMenu,
    NewUser,
    AboutFileVista


  },
  data: () => ({
    selectedRow: null,
    currentSelected: 1,
    menuItems: [
        { id: 1, name: 'User Management' },
        { id: 2, name: 'Group Management' },
        { id: 3, name: 'Root Folders' },
        { id: 4, name: 'Public Links' },

      ],


    paneSize: 15,
  }),
  mounted() {

  },
  methods: {
		handler(event) {
			event.preventDefault();
    },

    //顯示彈窗
		showMenu() {
      // const type = itemId === null ? this.currentSelected : itemId;
      console.log('22222');
      
			// switch (type) {
			// 	case 1:
			// 		this.$refs.menuForUser.open(event);
			// 		break;
			// 	case 2:
			// 		this.$refs.menuForGroup.open(event);
			// 		break;
			// 	case 3:
			// 		this.$refs.menuForFolder.open(event);
			// 		break;
			// 	default:
			// 		break;
      // }
    },
    // 重置
    redirect(index) {
			this.currentSelected = index;
			this.selectedRow = null;
		},
    operational(event) {
			event.preventDefault();
			event.stopPropagation();
			this.$refs.menuForOperational.open(event);
    },
    getRowClass(index) { return index === this.selectedRow ? 'row-selected' : ''; 
    },
    getMenuItemClass(index) {
			return index === this.currentSelected ? 'menu-item menu-item-selected' : 'menu-item';
		},
    
    AboutFileVista() { this.$refs.modal.show() }

  }
};

</script>


