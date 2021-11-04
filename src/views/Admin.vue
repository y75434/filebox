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
          <ul class=" list-unstyled w-100 text-dark d-flex flex-column  align-items-start h-100">
            <li 
              v-for="(item, index) in menuItems"
              :key="index"
              @contextmenu="showMenu(item.id, $event)"
              @click="redirect(item.id)"
              class="d-flex align-items-center text-center"
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
          <div class="title d-flex w-100 justify-content-between align-items-center">
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
          </div>
        </Pane>
      </Splitpanes>
      <ContextMenu ref="menuForUser">
        <ul>
          <li @click="Rename">
            <img
              src="@/assets/images/cmd/rename@2x.png"
              class="icon24px"
            >
            Rename
          </li>
          <li @click="Rename">
            <img
              src="@/assets/images/icon/user setting@2x.png"
              class="icon24px"
            >Properties
          </li>
          <li @click="DeleteUser">
            <img
              src="@/assets/images/cmd/delete@2x-2.png"
              class="icon24px"
            >Delete
          </li>
        </ul>
      </ContextMenu>
      <ContextMenu ref="menuForGroup">
        <ul>
          <li
            @click="NewGroupProperties"
            title="Edit Group Properties"
          >
            <img
              src="@/assets/images/cmd/rename@2x.png"
              class="icon24px"
            >
            Rename
          </li>
          <li>
            <img
              src="@/assets/images/icon/user setting@2x.png"
              class="icon24px"
            >Properties
          </li>
          <li>
            <img
              src="@/assets/images/cmd/delete@2x-2.png"
              class="icon24px"
            >Delete
          </li>
        </ul>
      </ContextMenu>
      <ContextMenu ref="menuForFolder">
        <ul>
          <li @click="RootFolderProperties">
            <img
              src="@/assets/images/cmd/rename@2x.png"
              class="icon24px"
            >
            Rename
          </li>
          <li>
            <img
              src="@/assets/images/icon/user setting@2x.png"
              class="icon24px"
            >Properties
          </li>
          <li>
            <img
              src="@/assets/images/cmd/delete@2x-2.png"
              class="icon24px"
            >Delete
          </li>
        </ul>
      </ContextMenu>
    
      <rename ref="EditUserProperties" />
      
      <ImportUser ref="ImportUser" />
      <delete-user ref="DeleteUser" />
      

      <AboutFileVista
        ref="modal"
      />
 
      <NewGroupProperties ref="NewGroupProperties" />
      <AddNewUser ref="AddNewUser" />
      <RootFolderProperties ref="RootFolderProperties" />
    </div>
  </div>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import AdminNav from "@/components/AdminNav.vue";
import ContextMenu from '@/components/ContextMenu.vue';
import ImportUser from '@/components/Modals/user/ImportUser.vue';
import AboutFileVista from '@/components/Modals/AboutFileVista.vue';
import AddNewUser from '@/components/Modals/user/AddNewUser.vue'
import Rename from '@/components/Modals/user/Rename.vue'
import DeleteUser from '../components/Modals/user/DeleteUser.vue';
import NewGroupProperties from '../components/Modals/group/NewGroupProperties.vue';
import RootFolderProperties from '../components/Modals/folder/RootFolderProperties.vue';

export default {
name: "Admin",
  components: {
    Splitpanes,
    Pane,
    AdminNav,
    ContextMenu,
    ImportUser,
    AboutFileVista,
    AddNewUser,
    Rename,
    DeleteUser,
    NewGroupProperties,
    RootFolderProperties





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
    
    items: [
        { Name: 'Rachel',FullName:'rrrrr', LoginCount: 'Rachel Lee',LastLoginTime:'25/02/2007 10:52 AM', DateCreated:'25/02/2007 10:52 AM', DateModified:'25/02/2007 10:52 AM',Status:'active'},
        { Name: 'Rachel',FullName:'rrrrr', LoginCount: 'RachelLee',LastLoginTime:'25/02/2007 10:52 AM', DateCreated:'25/02/2007 10:52 AM',DateModified:'25/02/2007 10:52 AM',Status:'active'},
        { Name: 'Rachel',FullName:'rrrrr', LoginCount: 'RachelLee',LastLoginTime:'25/02/2007 10:52 AM', DateCreated:'25/02/2007 10:52 AM',DateModified:'25/02/2007 10:52 AM',Status:'active'}

      ],
      groupitems: [
        { GroupName: 'RD',Members:5,DateCreated:'25/02/2007 10:52 AM',DateModified:'25/02/2007 10:52 AM'},
        { GroupName: 'HR',Members:5,DateCreated:'25/02/2007 10:52 AM',DateModified:'25/02/2007 10:52 AM'},

      ],
      folderitems: [
        { Name: 'Rachel',DateCreated:'25/02/2007 10:52 AM',DateModified:'25/02/2007 10:52 AM'},
        { Name: 'chel',DateCreated:'25/02/2022 10:52 AM',DateModified:'25/02/2007 10:52 AM'},

      ],
      linkitems: [
        { Name: 'Rachel',LinkedItem:'https://demos.google.com/admin/public...', CreatedBy:'admin', HitCount:'2',LastHitTime:'25/02/2007 10:52 AM',Expiration:'25/02/2007 10:52 AM'},
      
      ],

    paneSize: 15,
  }),
  
  methods: {
		handler(event) {
			event.preventDefault();
    },

    //顯示各頁選單
		showMenu(itemId, event) {
      const type = itemId === null ? this.currentSelected : itemId;
      console.log('showMenu');
      
			switch (type) {
				case 1:
					this.$refs.menuForUser.open(event);
					break;
				case 2:
					this.$refs.menuForGroup.open(event);
					break;
				case 3:
					this.$refs.menuForFolder.open(event);
					break;
				default:
					break;
      }
    },
   
    //顯示sidebar的頁面資料
    getData() {
      console.log('getData');
      
			const type = this.currentSelected;
			switch (type) {
				case 1:
          this.$set(this,'title', 'User Management')
          this.$set(this,'src', require('@/assets/images/icon/usermanagement@2x.png'))
					return this.items;
				case 2:
          this.pagename === 'Group'
          this.$set(this,'title', 'Group Management')
          this.$set(this,'src', require('@/assets/images/icon/group management@2x.png'))
					return this.groupitems;
				case 3:
          this.$set(this,'title', 'Root Folders')
          this.$set(this,'src', require('@/assets/images/file/root folder@2x.png'))
          return this.folderitems;
          
        case 4: 
          this.$set(this,'title', 'Public Links')
          this.$set(this,'src', require('@/assets/images/file/publiclink@2x.png'))
          return this.linkitems;

				default:
          return [];

      }
    },
   
    // 跳轉到該頁
    redirect(index) {
      
			this.currentSelected = index;
			this.selectedRow = null;
    },
    // 表格資料設定
    operational(event) {
			event.preventDefault();
      event.stopPropagation();
      this.$refs.menuForUser.open(event);

    },
  
    //選取哪一個資料
    rowSelected(index) {
			this.selectedRow = index;
		},
    
    AboutFileVista() { this.$refs.modal.show() },
    AddNewUser() {
      this.$refs.menuForUser.close();

        this.$bvModal.show('AddNewUser');
      },
      Rename(){
        
        this.$refs.menuForUser.close();

        this.$bvModal.show('EditUserProperties');

      },
     
      
      ImportUser(){
        this.$bvModal.show('ImportUser');

      },
      DeleteUser(){
        this.$bvModal.show('modal-delete-user');

      },
      NewGroupProperties(){
        this.$bvModal.show('NewGroupProperties');

      },
      RootFolderProperties(){
        this.$bvModal.show('RootFolderProperties');

      },
       addnew(){
        if (this.currentSelected === 1) {
          this.$bvModal.show('AddNewUser');

        }
        if (this.currentSelected === 2) {
          this.$bvModal.show('NewGroupProperties');

        }

    }

  }
};

</script>



