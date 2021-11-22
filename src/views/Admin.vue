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
      >
        <Pane
          :size="paneSize"
          min-size="10"
          max-size="25"
          class="d-flex flex-column d-xs-none"
        >
          <Sidebar />          
          <ul
            class="text-dark small bg-f4gray w-100 align-items-start d-flex flex-column m-0 "
          >
            <li
              @click="ApplicationSettings"
              class="d-flex align-items-center py-2"
            >
              <img
                src="@/assets/images/file/app setting@2x.png"
                class="icon28px"
              >
              <h5
                class=""
              >
                {{ $t("GENERAL.APPLICATIONSETTINGS") }}
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
                {{ $t("GENERAL.LICENSEINFORMATION") }}
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
                {{ $t("MODAL.ABOUTFILEVISTA") }}
              </h5>
            </li>
          </ul>
        </Pane>
        <Pane
          :size="100 - paneSize"
          class=" flex-column content"
        >
          <Content />
        </Pane>
      </Splitpanes>
      <AboutFileVista ref="modal" />
      <ApplicationSettings ref="ApplicationSettings" />
    </div>
  </div>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import AdminNav from "@/components/AdminNav.vue";
import AboutFileVista from '@/components/Modals/AboutFileVista.vue';
import ApplicationSettings from '../components/Modals/ApplicationSettings.vue';
import Sidebar from '../components/Sidebar.vue'
import Content from '../components/Content.vue'

export default {
name: "Admin",
  components: {
    Splitpanes,
    Pane,
    AdminNav,
    AboutFileVista,
    ApplicationSettings,
    Sidebar,
    Content
  },
  data: () => ({
    msg: 'Edit Group Properties',
    title:'User Management',
    src: require('@/assets/images/icon/usermanagement@2x.png'),
    selectedRow: null,
    currentSelected: 1,
  
    menuItems: [
        { id: 1, name: 'User Management',pic: require('@/assets/images/icon/usermanagement@2x.png') },
        { id: 2, name: 'Group Management', pic: require('@/assets/images/icon/group management@2x.png')},
        { id: 3, name: 'Root Folders', pic: require('@/assets/images/file/root folder@2x.png') },
        { id: 4, name: 'Public Links' , pic: require('@/assets/images/file/publiclink@2x.png')},

      ],
    paneSize: 15,
  }),
  methods: {
    handler(event) { event.preventDefault(); },  
    // 跳轉到該頁
    redirect(index) {     
			this.currentSelected = index;
			this.selectedRow = null;
    },  
    //選取哪一個資料
    rowSelected(index) {
			this.selectedRow = index;
		},   
    AboutFileVista() { this.$refs.modal.show() },
    ApplicationSettings(){
      this.$bvModal.show('ApplicationSettings');
    },
  }
};

</script>



