<template>
  <div
    class="w-100 h-100 overflow-scroll"
    @contextmenu="handler($event)"
  >
    <div 

      class="title d-flex w-100 justify-content-between align-items-center my-3"
    >
      <div class=" col-3">
        <div class="d-flex align-items-center">
          <img :src="this.src">
          <h4
            v-text="this.title"
            class="light-blue fw-bold"
          />
        </div>
      
        <div class="d-flex">
          <button
            @click="addnew()"
            v-if="(this.currentSelected != 4 && this.currentSelected != 5)"
            type="button"
            class="modal-btn title-btn d-flex align-items-center m-3"
          > 
            <img
              class="nav-icon"
              src="@/assets/images/cmd/Vector.png"
              alt=""
            >
            <p class="ms-1 m-0">
              {{ $t("GENERAL.ADDNEW") }}
            </p>
          </button>

          <button
            @click="ImportUser"
            v-if="this.currentSelected === 1"
            type="button"
            class="title-btn btn m-3 bg-green"
            data-bs-toggle="modal" 
            data-bs-target="#ImportUser"
          > 
            <img
              class="nav-icon"
              src="@/assets/images/cmd/Vector.png"
              alt=""
            >
            <p class="ms-1 m-0">
              {{ $t("GENERAL.IMPORTUSER") }}
            </p>
          </button>
        </div>
      </div>


      <div class="col-7 d-none d-sm-none d-md-block">
        <div
          class="input-group mb-2 mt-4 border-0 align-items-end "
        >
          <div class="d-flex flex-column">
            <div class="h-50" />
            <!-- 別刪 -->
            <!-- <button
              type="button"
              id="button-addon2"
              class="btn left-radius btn-primary"
              :disabled="!filter"
              @click="filter = ''"
            >
              Search
            </button> -->
          </div>

          <div
            v-if="this.currentSelected === 4"
            class="d-flex flex-column"
          >
            <div>
              <b-dropdown
                :text="$t('GENERAL.PLEASESELECTFIELD')"
                class="m-0 border eventdrop"
                menu-class="w-100"
                variant="white"
              >
                <template>
                  <div>
                    <b-form-group>
                      <template #label>
                        <b-form-checkbox

                          class="text-dark"
                          v-model="allSelected"
                          aria-describedby="events"
                          aria-controls="events"
                          @change="toggleAll"
                        >
                          {{ allSelected ? $t('GENERAL.UNSELECTALL') : $t('GENERAL.SELECTALL') }}
                        </b-form-checkbox>
                        <hr>
                      </template>
                      <template #default="{ ariaDescribedby }">
                        <div
                          class="w-100 row"
                        >
                          <b-form-checkbox-group
                            id="events"
                            v-model="eventsSelected"
                            :options="events"
                            value-field="actionTypeId"
                            text-field="name"

                            :aria-describedby="ariaDescribedby"
                            class="mx-1"
                            aria-label="events"
                            stacked
                            @change="search()"
                          />
                        </div>
                      </template>
                    </b-form-group>
                  </div>
                </template>
              </b-dropdown>
            </div>
          </div>
         
          


          <div class="d-flex flex-column">
            <label
              for="GroupName"
              class="m-2 text-dark"
            >{{ $t("GENERAL.SEARCH") }}</label>
            <input
              v-model="searchText"
              @keyup="search()"
              type="text"
              :placeholder="$t( 'GENERAL.SEARCH')"
              class="form-control "
            >
          </div>        
          <div
            v-if="this.currentSelected === 1"
            class="d-flex flex-column"
          >
            <label
              for="MemberName"
              class="m-2 text-dark"
            >{{ $t("GENERAL.STATUS") }}</label>

            <select
              class="form-select"
              aria-label="Default select example"
              v-model="status"
              @change="search()"
            >
              <option 
                selected
                value="0"
              >
                All
              </option>
              <option
                value="1"
              >
                active
              </option>
              <option value="2">
                disabled
              </option>
            </select>
          </div>
          <!-- datepicker -->
          <div 
            v-if="this.currentSelected === 4"
            class="d-flex flex-column"
          >
            <label
              class="text-dark m-2"
              for="datepicker-dateformat1"
            >{{ $t("GENERAL.DATERANGE") }}</label>
            <b-form-datepicker
              id="datepicker-dateformat1"
              :placeholder="$t('GENERAL.NODATESELECTED')"
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"

              locale="en"
              @input="search()"
              v-model="startdate"
            />
          </div>
          <div 
            v-if="this.currentSelected === 4"

            class="d-flex flex-column"
          >
            <label
              class="text-dark m-2"
              for="datepicker-dateformat2"
            >{{ $t("GENERAL.DATERANGE") }}</label>
            <b-form-datepicker
              class=""
              :placeholder="$t('GENERAL.NODATESELECTED')"
              id="datepicker-dateformat2"
              :date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              }"
              locale="en"
              v-model="enddate"
              @change="search()"
            />
          </div>
    
        

          <div class="d-flex flex-column">
            <div class="h-50" />
            <button
              type="button"
              id="button-addon2"
              class="btn btn-blue"
              :disabled="!filter"
              @click="filter = ''"
                            @change="search()"

            >
              <img
                src="@/assets/images/icon/magnifier.png"
                class="nav-icon"
              >
            </button>
          </div>
        </div>
      </div>


      <div
        class="d-flex flex-column"
      >
        <div
          class=" d-flex group align-items-end " 
        >
          <h2
            class="fw-bold dark-blue"
          >
            {{ count }}
          </h2>
          <h5 
            v-text="this.countName"
            class="text-dark slash"
          />
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
              {{ $t("GENERAL.REFRESH") }}
            </h5>
          </button>
        </div>
      </div>
    </div>
    <div
      class="row w-100"
      @contextmenu="showMenu(null, $event)"
    >
      <div class="">
        <b-col xs="12">
          <!-- <b-table
            responsive="true"
            :items="getTable()"
            class="col-12 b-col"
            @contextmenu="operational($event)"
            @row-hovered="rowSelected"
            ref="selectableTable"
            :select-mode="selectMode"      
            hover
            :filter="filter"
          /> -->
          <div v-if="this.currentSelected === 1">
            <b-table
              :fields="usersfields"
              responsive="true"
              :items="useritems"
              :per-page="perPage"
              :current-page="currentPage"
              class="col-12 b-col text-dark"
              @contextmenu="operational($event)"
              @row-hovered="rowSelected"
              ref="selectableTable"
              :select-mode="selectMode"
              hover
            >
              <template #cell(firstName)="data">
                <img
                  src="@/assets/images/icon/user@2x.png"
                  class="icon32px"
                >
                {{ data.item.firstName }}
              </template>
              <template #cell(userName)="data">
                {{ data.item.userName }}
              </template>
              <template #cell(loginCount)="data">
                {{ data.item.loginCount }}
              </template>
              <template #cell(lastLogon)="data">
                {{ data.item.lastLogon }}
              </template>
              <template #cell(createdOn)="data">
                {{ data.item.createdOn }}
              </template>
              <template #cell(modifiedOn)="data">
                {{ data.item.modifiedOn }}
              </template>
              <template #cell(isEnabled)="data">
                {{ data.item.isEnabled }}
              </template>
            </b-table>

            <!-- 不用這個會跳頁 :pages="useritems" -->

            <b-pagination-nav
              :pages="useritems"
              v-model="currentPage"
              :total-rows="Math.ceil(useritems.length / 10)"
              :per-page="perPage"
            />
          </div>


          <div v-if="this.currentSelected === 2">
            <b-table
              :fields="groupsfields"
              responsive="true"
              :items="groupitems"
              class="col-12 b-col text-dark"
              @contextmenu="operational($event)"
              @row-hovered="rowSelected"
              ref="selectableTable"
              :select-mode="selectMode"
              hover
              :filter="filter"
              :per-page="perPage"
              :current-page="currentPage"
            >
              <template #cell(groupName)="data">
                <img
                  src="@/assets/images/icon/group@2x.png"
                  class="icon32px"
                >
                {{ data.item.groupName }}
              </template>
              <template #cell(membersCount)="data">
                {{ data.item.membersCount }}
              </template>
              <template #cell(createdOn)="data">
                {{ data.item.createdOn }}
              </template>
              <template #cell(modifiedOn)="data">
                {{ data.item.modifiedOn }}
              </template>
            </b-table>

            <b-pagination-nav
              :pages="groupitems"
              v-model="currentPage"
              :per-page="perPage"
            />
          </div>

          <div v-if="this.currentSelected === 3">
            <b-table
              :fields="folderfields"
              responsive="true"
              :items="folderitems"
              class="col-12 b-col text-dark"
              @contextmenu="operational($event)"
              @row-hovered="rowSelected"
              ref="selectableTable"
              :select-mode="selectMode"
              hover
              :filter="filter"
              :per-page="perPage"
              :current-page="currentPage"
            >
              <template #cell(name)="data">
                <img
                  src="@/assets/images/file/folder@2x.png"
                  class="icon32px"
                >
                {{ data.item.name }}
              </template>
              <template #cell(createdOn)="data">
                {{ data.item.createdOn }}
              </template>
              <template #cell(modifiedOn)="data">
                {{ data.item.modifiedOn }}
              </template>
            </b-table>

            <b-pagination-nav
              :pages="folderitems"
              v-model="currentPage"
              :per-page="perPage"
            />
          </div>

          <div
            v-if="this.currentSelected === 4"
          >
            <b-table
              :fields="eventfields"
              responsive="true"
              :items="eventsitems"
              class="col-12 b-col text-dark"
              @contextmenu="operational($event)"
              @row-hovered="rowSelected"
              ref="selectableTable"
              :select-mode="selectMode"
              hover
              :filter="filter"
              :per-page="perPage"
              :current-page="currentPage"
            >
              <template #cell(user)="data">
                {{ data.item.user }} 
              </template>

              <template #cell()="data">
                <img
                  :src="data.item.pic"
                  class="icon32px"
                >
                {{ data.item.actionType }}
              </template>
              
              <template #cell(description)="data">
                {{ data.item.description }}
              </template>
            </b-table>

            <b-pagination-nav
              :pages="eventsitems"
              v-model="currentPage"
              :per-page="perPage"
            />
          </div>


          <div v-if="this.currentSelected === 5">
            <b-table
              :fields="linkfields"
              responsive="true"
              :items="linkitems"
              class="col-12 b-col text-dark"
              @contextmenu="operational($event)"
              @row-hovered="rowSelected"
              ref="selectableTable"
              :select-mode="selectMode"
              hover
              :filter="filter"
              :per-page="perPage"
              :current-page="currentPage"
            >
              <template #cell(name)="data">
                <img
                  src="@/assets/images/file/publiclink@2x.png"
                  class="icon32px"
                >
                {{ data.item.name }} 
              </template>

              <template #cell(linkId)="data">
                {{ data.item.linkId }}
              </template>
              
              <template #cell(creator)="data">
                {{ data.item.creator }}
              </template>
              <template #cell(viewed)="data">
                {{ data.item.viewed }}
              </template>
              <template #cell(expire)="data">
                {{ data.item.expire }}
              </template>
              <template #cell(viewableTimes)="data">
                {{ data.item.viewableTimes }}
              </template>
            </b-table>

            <b-pagination-nav
              :pages="linkitems"
              v-model="currentPage"
              :per-page="perPage"
            />
          </div>
        </b-col>
      </div>
      <ContextMenu ref="menuForUser">
        <ul class="text-dark">
          <li @click="Rename">
            <img
              src="@/assets/images/cmd/rename@2x.png"
              class="icon24px"
            >
            {{ $t("HOME.RENAME") }}
          </li>
          <li @click="property">
            <img
              src="@/assets/images/icon/user setting@2x.png"
              class="icon24px"
            >{{ $t("GENERAL.ATTRIBUTES") }}
          </li>
          <li @click="DeleteUser">
            <img
              src="@/assets/images/cmd/delete@2x-2.png"
              class="icon24px"
            >{{ $t("HOME.DELETE") }}
          </li>
        </ul>
      </ContextMenu>
      <ContextMenu ref="menuForGroup">
        <ul class="text-dark">
          <li
            @click="Rename"
            title="Edit Group Properties"
          >
            <img
              src="@/assets/images/cmd/rename@2x.png"
              class="icon24px"
            >
            {{ $t("HOME.RENAME") }}
          </li>
          <li @click="EditGroupProperties">
            <img
              src="@/assets/images/icon/user setting@2x.png"
              class="icon24px"
            >{{ $t("GENERAL.ATTRIBUTES") }}
          </li>
          <li @click="DeleteUser">
            <img
              src="@/assets/images/cmd/delete@2x-2.png"
              class="icon24px"
            >{{ $t("HOME.DELETE") }}
          </li>
        </ul>
      </ContextMenu>
      <ContextMenu ref="menuForFolder">
        <ul class="text-dark">
          <li @click="Rename">
            <img
              src="@/assets/images/cmd/rename@2x.png"
              class="icon24px"
            >
            {{ $t("HOME.RENAME") }}
          </li>
          <li @click="RootFolderProperties">
            <img
              src="@/assets/images/icon/user setting@2x.png"
              class="icon24px"
            >{{ $t("GENERAL.ATTRIBUTES") }}
          </li>
          <li @click="DeleteUser">
            <img
              src="@/assets/images/cmd/delete@2x-2.png"
              class="icon24px"
            >{{ $t("HOME.DELETE") }}
          </li>
        </ul>
      </ContextMenu>
      <ContextMenu ref="menuForEvents">
        <ul class="text-dark">
          <li
            @click="EventProperties"
          >
            <img
              src="@/assets/images/icon/user setting@2x.png"
              class="icon24px"
            >{{ $t("GENERAL.ATTRIBUTES") }}
          </li>
        </ul>
      </ContextMenu>
      <ContextMenu ref="menuForLink">
        <ul class="text-dark">
          <li @click="EditPublicLink">
            <img
              src="@/assets/images/icon/user setting@2x.png"
              class="icon24px"
            >{{ $t("GENERAL.ATTRIBUTES") }}
          </li>
          <li @click="DeleteUser">
            <img
              src="@/assets/images/cmd/delete@2x-2.png"
              class="icon24px"
            >{{ $t("HOME.DELETE") }}
          </li>
        </ul>
      </ContextMenu>
      <EditUserProperties
        ref="EditUserProperties"
        :tab-data="selected"
      />
      <ImportUser ref="ImportUser" />
      <delete-user
        ref="DeleteUser"
        :del-data="selected"
      />
      <NewGroupProperties ref="NewGroupProperties" />
      <EditGroupProperties 
        :tab-data="selected"
        ref="EditGroupProperties"
      />
      <AddNewUser ref="AddNewUser" />
      <RootFolderProperties
        ref="RootFolderProperties"
        :folder-data="selected"
      />
      <AddRootFolderProperties
        ref="AddRootFolderProperties"
        :title="'Add Root Folder'"
      />
      <EditPublicLink
        ref="EditPublicLink"
        :tab-data="selected"
      />
      <EventProperties
        ref="EventProperties"
        :tab-data="selected"
      />
      <rename-item
        ref="RenameItem" 
        :tab-data="selected"
      />
    </div>
  </div>
</template>

<script>
import ContextMenu from '@/components/ContextMenu.vue';
import eventBus from "@/bus.js";
import ImportUser from '@/components/Modals/user/ImportUser.vue';
import AddNewUser from '@/components/Modals/user/AddNewUser.vue'
import EditUserProperties from './Modals/user/EditUserProperties.vue';
import DeleteUser from '@/components/Modals/user/DeleteUser.vue';
import NewGroupProperties from '@/components/Modals/group/NewGroupProperties.vue';
import EditGroupProperties from'@/components/Modals/group/EditGroupProperties.vue';
import RootFolderProperties from '@/components/Modals/folder/RootFolderProperties.vue';
import AddRootFolderProperties from'@/components/Modals/folder/AddRootFolderProperties.vue';
import EditPublicLink from'@/components/Modals/link/EditPublicLink.vue';
import EventProperties from '@/components/Modals/events/EventProperties.vue';
import RenameItem from '../components/Modals/home/RenameItem.vue';
import picture from '@/common/images.js';

export default {
name: "Content",
components:{
  ContextMenu,
  ImportUser,
  AddNewUser,
  EditUserProperties,
  DeleteUser,
  NewGroupProperties,
  RootFolderProperties,
  EditPublicLink,
  EventProperties,
  RenameItem,
  AddRootFolderProperties,
  EditGroupProperties
},
data() {
  return {
    src: require('@/assets/images/icon/usermanagement@2x.png'),
    title: 'User Management',
    countName:'Users',
    currentSelected:1,
    usersfields: [ 
      { key: 'firstName', label: 'firstName', sortable: true },
      { key: 'userName', label: 'Full Name', sortable: true },
      { key: 'loginCount', label: 'Login Count' },
      { key: 'lastLogon', label: 'Last Login Time' },
      { key: 'createdOn', label: 'Date Created' },
      { key: 'modifiedOn', label: 'Date Modified' },
      { key: 'isEnabled', label: 'Status' },
    ],
    groupsfields: [ 
      { key: 'groupName', label: 'groupName', sortable: true },
      { key: 'membersCount', label: 'membersCount', sortable: true },
      { key: 'createdOn', label: 'Created On'},
      { key: 'modifiedOn', label: 'Modified On' },
    ],
    eventfields: [ 
      { key: 'actionType', label: 'actionType', sortable: true },
      { key: 'user', label: 'User', sortable: true },
      { key: 'description', label: 'description' },
    ],
    folderfields: [ 
      { key: 'name', label: 'Name', sortable: true },
      { key: 'createdOn', label: 'Created On'},
      { key: 'modifiedOn', label: 'Modified On' },
    ],
    linkfields: [ 
      { key: 'name', label: 'Name', sortable: true },
      { key: 'linkId', label: 'Linked Item' },
      { key: 'creator', label: 'Created By'},
      { key: 'viewed', label: 'Hit Count' },      
      { key: 'expire', label: 'Expiration' },
      { key: 'viewableTimes', label: 'Hit Limit' },
    ],   
    useritems: [],
    groupitems: [],
    folderitems: [],
    eventsitems: [],
    eventpics: [ 
      { id: 0,pic: require('@/assets/images/icon/browse@2x.png'), eventName: this.$t('GENERAL.BROWSE'),"actionType": "Browse",},
      { id: 1, pic: require('@/assets/images/file/publiclink@2x.png'), eventName: this.$t('GENERAL.LOGIN'),"actionType": "Login",},
      { id: 2, pic: require('@/assets/images/cmd/preview@2x.png') , eventName: this.$t('GENERAL.PREVIEW'),"actionType": "Preview"},
      { id: 3, pic: require('@/assets/images/cmd/download@2x.png'), eventName: this.$t('HOME.DOWNLOAD'),"actionType": "Download"},
      { id: 4, pic:require('@/assets/images/file/publiclink@2x.png'), eventName: this.$t('GENERAL.PUBLICLINK'),"actionType": "Public links"},
      { id: 5, pic:require('@/assets/images/file/folder@2x.png'), eventName:this.$t('GENERAL.CREATEMOVE'),"actionType": "Create"},
      { id: 6, pic:require('@/assets/images/cmd/rename@2x.png'), eventName:this.$t('HOME.RENAME'),"actionType": "Rename"},
      { id: 7, pic:require('@/assets/images/cmd/cut@2x.png'), eventName:this.$t('GENERAL.MOVE'),"actionType": "Move"},
      { id: 8, pic:require('@/assets/images/file/extractallfiles@2x.png'), eventName:this.$t('GENERAL.EXTRACT'),"actionType": "Extract"},
      { id: 9, pic:require('@/assets/images/cmd/logout@2x.png'), eventName:this.$t('GENERAL.LOGOUT'),"actionType": "Log out"},
      { id: 10, pic:require('@/assets/images/cmd/delete@2x-2.png'), eventName:this.$t('HOME.DELETE'),"actionType": "Delete"},
      { id: 11, pic:require('@/assets/images/cmd/copy@2x.png'), eventName:this.$t('HOME.COPY'),"actionType": "Copy"},
      { id: 12, pic:require('@/assets/images/file/addtozip@2x.png'),eventName:this.$t('GENERAL.COMPRESS'),"actionType": "Compress"},
      { id: 13, pic:require('@/assets/images/cmd/upload@2x.png'),eventName:this.$t('HOME.UPLOAD'),"actionType": "Upload"},
    ],
    linkitems: [],
    // selectedRow : null,
    selected: {},
    selectMode: 'single',
    filter: null,
    sortDirection: 'All',
    events: [],
    //["string","Browse","Login","Preview","Download","Public links","Create","Rename","Move","Extract","Logout","Delete","Copy","Compress","Upload"]
    allSelected: true,
    // eventsSelected:[this.$t('GENERAL.BROWSE'), this.$t("GENERAL.LOGIN"),this.$t("GENERAL.PREVIEW"), this.$t("HOME.DOWNLOAD"),this.$t("GENERAL.PUBLICLINK"),this.$t("GENERAL.CREATEMOVE"),this.$t("HOME.RENAME"),this.$t("GENERAL.MOVE"),this.$t("GENERAL.EXTRACT"),this.$t("GENERAL.LOGOUT"),this.$t("HOME.DELETE"),this.$t("HOME.COPY"),this.$t("GENERAL.COMPRESS"),this.$t('HOME.UPLOAD')],
    eventsSelected:[],
    searchText:"",
    status:"",
    picture:{},
    startdate: "",
    enddate: "",
    value:"",
    eventTypeId:"",
    //nav page
    perPage: 10,
    currentPage: 1,
  };
},
created(){
  this.getData();
  this.getTable();
  this.getEventType();
  this.picture = picture;
},
// computed:{
//    userRows() {
//     return this.useritems.length 
//   }
// },
watch: { //todo undo
  eventsSelected(newValue) {
    //console.log(this.eventsSelected)

    if (newValue.length === 0) {
      this.allSelected = false
    } else if (newValue.length === this.events.length) {
      this.allSelected = true
    } else {
      this.allSelected = false
    }

  }
},
methods: { 
  toggleAll(checked) { 
    this.eventsSelected = checked ? this.events.slice() : [] 
  },
  handler(event) { event.preventDefault(); }, 
  reloadPage() {window.location.reload(); },
  getData() {
    eventBus.$on('menuItems',(item)=>{
    this.currentSelected = item.id;
    this.src = item.pic;
    this.title = item.name;
    this.countName = item.countName
    this.filter = null;
    this.getTable(this.currentSelected);
    // this.selectedRow = null;
    });			
  },
  getTable(){    
    switch (this.currentSelected) {
      case 1:
        this.getUserTable();
        this.count = this.useritems.length        
        return [];
      case 2: 
        this.getGroupTable();       
        this.count = this.groupitems.length
        return [];
      case 3:
        this.getFolderTable();
        this.count = this.folderitems.length
       return [];     
       case 4: 
         this.getEventTable();
         this.eventsitems.map(item=>{ 
          const eventpic = this.eventpics.filter(y=>y.actionType == item.actionType)[0];
        
          item.pic = eventpic.pic;          
          return item 
        });
         this.count = this.eventsitems.length
        return [];    
      case 5: 
        this.getLinkTable();
        this.count = this.linkitems.length
        return [];
      default:
        return [];
    }
  },
  //顯示各頁選單
  showMenu(itemId, event) {
    const type = itemId === null ? this.currentSelected : itemId;      
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
      case 4: 
        this.$refs.menuForEvents.open(event); 
        break;
      case 5: 
        this.$refs.menuForLink.open(event); 
        break;
      default:
        break;
    }
  },
  // 表格資料設定
  operational(event) {
    event.preventDefault();
    event.stopPropagation();
  }, 
  //hover一個資料 並將資料傳遞子層 
  rowSelected(items) {
    this.selected = items
    //  console.log(this.selected);     
  },
  Rename(){      
    this.$bvModal.show('RenameItem');
  },
  property(){      
    this.$bvModal.show('EditUserProperties');
  },
  ImportUser(){
    this.$bvModal.show('ImportUser');
  },
  DeleteUser(){
    this.$bvModal.show('modal-delete-user');
  },
  EditPublicLink(){
    this.$bvModal.show('EditPublicLink');
  },
  addnew(){
    if (this.currentSelected === 1) {
      this.$bvModal.show('AddNewUser');
    }
    if (this.currentSelected === 2) {
      this.$bvModal.show('NewGroupProperties');
      this.$refs.NewGroupProperties.start()

    }
    if (this.currentSelected === 3) {
      this.$bvModal.show('AddRootFolderProperties');
      this.$refs.AddRootFolderProperties.start()

    }
  },
  NewGroupProperties(){
    this.$bvModal.show('NewGroupProperties');
  },
  EditGroupProperties(){
    this.$bvModal.show('EditGroupProperties');
    this.$refs.EditGroupProperties.start()

  },
  RootFolderProperties(){
    this.$bvModal.show('RootFolderProperties');
    this.$refs.RootFolderProperties.start()

  },
  EventProperties(){
    this.$bvModal.show('EventProperties');
  },
  getUserTable () {  
    this.axios.get(`${process.env.VUE_APP_USER_APIPATH}/api/Users/GetUsers`)
      .then((data) => {          
        this.useritems = data.data
        // console.log(this.useritems);
        
        this.count = this.useritems.length       
      }).catch(error => {
        console.log(error);        
      })
  },
  getGroupTable () {  
    this.axios.get(`${process.env.VUE_APP_USER_APIPATH}/api/Groups/GetGroups`)
      .then(data => {  
        this.groupitems = data.data 
        this.count = this.groupitems.length      
      }).catch(error => {
        console.log(error.response.data);        
      })
  },
  getEventTable(){
    this.axios.get(`${process.env.VUE_APP_EVENTS_APIPATH}/Log/GetAll`)
      .then(data => {  
        this.eventsitems = data.data 
        this.count = this.eventsitems.length  
        // console.log(this.eventsitems.data);
      return this.eventsitems;

      }).catch(error => {
        console.log(error.response.data);        
      })
  },
  // change this.eventsSelected value 
  getEventType(){ 
    this.axios.get(`${process.env.VUE_APP_EVENTS_APIPATH}/ActionType/GetAll`,)
      .then((data) => {
        data.data.forEach(item =>{
          this.events.push(item)
      // console.log('766',item);     
    });
    }).catch(error => {
        console.log(error.response.data);          
      })

  },
  getLinkTable(){
    this.axios.get(`${process.env.VUE_APP_LINKS_APIPATH}/api/Link/GetAll`)
      .then((data) => { 
        this.linkitems = data.data 
        this.count = this.linkitems.length
      }).catch(error => {
        console.log(error.response.data);        
      })
  },
  getFolderTable(){
    this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/RootFolders`)
      .then((data) => { 
        this.folderitems = data.data 
        this.count = this.folderitems.length
      }).catch(() => {
        // console.log(error.response.data);        
      })
  },
  //搜尋
  search(){
    switch (this.currentSelected) {
      case 1:

        this.axios.get(`${process.env.VUE_APP_USER_APIPATH}/api/Users/GetUsers?searchString=${this.searchText}&UserStatus=${this.status}`)
          .then(data => {  
            console.log(data);
            this.useritems = data.data 
            this.count = this.useritems.length  
          // return this.useritems;
          }).catch(error => {
            console.log(error.response.data);        
          })
        break;
      case 2: 
        this.axios.get(`${process.env.VUE_APP_USER_APIPATH}/api/Groups/GetGroups?searchString=${this.searchText}`)
          .then(data => {  
            this.groupitems = data.data 
            this.count = this.groupitems.length  
          // return this.useritems;

          }).catch(error => {
            console.log(error.response.data);        
          })
        break;
      case 3:
        
        this.axios.get(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/RootFolders?searchString=${this.searchText}`)
          .then(data => {  
            console.log(data);
            this.folderitems = data.data 
            this.count = this.folderitems.length  

          // return this.useritems;

          }).catch(error => {
            console.log(error.response.data);        
          })
        break;

      case 4: {
        const eventURL = new URL(`${process.env.VUE_APP_EVENTS_APIPATH}/Log/GetAll`);
        let searchParams = {
          From: this.startdate,
          To: this.enddate,
          SearchString: this.searchText,
          
        }


        Object.keys(searchParams).forEach(key => searchParams[key] === undefined ? delete searchParams[key] : {});


        console.log('976',searchParams)
        
        let a = new URLSearchParams(searchParams);

        console.log('984',a.toString());

          
          eventURL.search = a;

        // `${process.env.VUE_APP_EVENTS_APIPATH}/Log/GetAll?From=${this.value}&To=${this.enddate}&SearchString=${this.searchText}&ActionEventType=${this.eventTypeId}&ActionEventType=${this.eventTypeId}`

        this.axios.get(eventURL.href)
          .then(data => {  
            console.log(eventURL.href);
            this.eventsitems = data.data 
            this.count = this.eventsitems.length  
          return this.useritems;

          }).catch(error => {
            console.log(error.response.data);        
          })
      break;
      }
      case 5: 
      this.axios.get(`${process.env.VUE_APP_LINKS_APIPATH}/api/Users/GetUsers?searchString=${this.searchText}`)
          .then(data => {  
            this.linkitems = data.data 
            this.count = this.linkitems.length  

          return this.useritems;

          }).catch(error => {
            console.log(error.response.data);        
          })
          break;
      default:
        return [];
    } 

      
    },
  }
}
</script>
