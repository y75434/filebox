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
          class="d-flex flex-column"
        >
          <!-- <ul class=" list-unstyled w-75 text-dark d-flex flex-column  align-items-start h-100">
            <li 
              v-for="(item, index) in menuItems"
              :key="index"
              @click="redirect(item.id)"
              class="d-flex align-items-center text-left mb-2"
            >
              <img
                :src="`${item.pic}`"
                class="icon28px"
              >
              <p class="m-0">
                {{ item.name }}
              </p>
            </li>
          </ul>
         -->
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
          <Content />
          <!-- <div class="title d-flex w-100 justify-content-between align-items-center">
            <div class="">
              <div class="d-flex align-items-center">
                <img :src="src">
                <h4
                  v-text="this.title"
                  class="light-blue fw-bold"
                />
              </div>
        
      
              <div class="d-flex">
                <button
                  v-if="this.currentSelected != 4"
                  @click="addnew()"
                  type="button"
                  class="title-btn btn d-flex align-items-center m-3"
                  style="background-color: #66acec"
                > 
                  <img
                    class="nav-icon"
                    src="@/assets/images/cmd/add@2x.png"
                    alt=""
                  >
                  <p class="ms-1 m-0">
                    Add new
                  </p>
                </button>

                <button
                  v-if="this.currentSelected === 1"
                  type="button"
                  class="title-btn btn d-flex align-items-center m-3"
                  style="background-color: #6ac1a2"
                  @click="ImportUser"
                  data-bs-toggle="modal" 
                  data-bs-target="#ImportUser"
                > 
                  <img
                    class="nav-icon"
                    src="@/assets/images/cmd/add@2x.png"
                    alt=""
                  >
                  <p class="ms-1 m-0">
                    import user
                  </p>
                </button>
              </div>
            </div>


            <div
              class="input-group mb-2 mt-4 border-0 align-items-end"
            >
              <div class="d-flex flex-column">
                <label
                  for="GroupName"
                  class="m-2 text-dark"
                >Group Name</label>

                <input
                  type="text"
                  placeholder="search name"
                  class="form-control "
                >
              </div>
        
              <div class="d-flex flex-column">
                <label
                  for="MemberName"
                  class="m-2 text-dark"
                >Member Name</label>


                <input
                  type="text"
                  placeholder="Please fill out this field"
                  class="form-control"
                >
              </div>
              
              <div class="d-flex flex-column">
                <div class="h-50" />
                <button
                  type="button"
                  id="button-addon2"
                  class="btn btn-blue"
                >
                  Button
                </button>
              </div>
            </div>


            <div
              class="d-flex flex-column "
            >
              <div
                class=" d-flex group align-items-end " 
              >
                <h2
                  class="fw-bold dark-blue"
                >
                  003
                </h2>
                <h5 class="text-dark slash">
                  Users
                </h5>
              </div>
              <div class="d-flex">
                <button
                  @click="reloadPage"
                  type="button"
                  class="user-btn  btn d-flex align-items-center mr-3"
                > 
                  <img
                    class="nav-icon"
                    src="@/assets/images/cmd/refresh@2x.png"
                    alt=""
                  >
                  <h5 class="ms-1 m-0">
                    Refresh
                  </h5>
                </button>
              </div>
            </div>
          </div>
          <div
            class="row w-100"
            @contextmenu="showMenu(null, $event)"
          >
            <div class="col-12">
              <b-table
                :items="getData()"
                class="grid-row h5"
                @contextmenu="operational($event)"
                hover
              />
            </div>
          </div> -->
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



