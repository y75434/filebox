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
                          style=""
                        >
                          <b-form-checkbox-group
                            style=""

                            id="events"
                            v-model="eventsSelected"
                            :options="events"
                            :aria-describedby="ariaDescribedby"
                            name="events"
                            class="mx-1"
                            aria-label="events"
                            stacked
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
              type="text"
              :placeholder="$t( 'GENERAL.SEARCH')"
              class="form-control "
              v-model="filter"
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
              v-model="filter"
            >
              <option 
                selected
              >
                All
              </option>
              <option>
                active
              </option>
              <option>
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
              :date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              }"
              locale="en"
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
          <b-table
            responsive="true"
            :items="getTable()"
            class="col-12 b-col"
            @contextmenu="operational($event)"
            @row-selected="rowSelected"
            ref="selectableTable"
            :select-mode="selectMode"
            selectable
            hover
            :filter="filter"
          />
          <div
            v-if="this.currentSelected === 4"
          >
            <b-table-simple
              hover
              small
              responsive
              class="my-2"
            >
              <b-thead>
                <b-tr>
                  <b-th>
                    {{ $t("GENERAL.TYPE") }}
                  </b-th>
                  <b-th>
                    {{ $t("GENERAL.DATE") }}
                  </b-th>
                  <b-th>
                    {{ $t("GENERAL.TIME") }}
                  </b-th>
                  
                  <b-th>
                    {{ $t("GENERAL.USER") }}
                  </b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-if="eventsSelected.indexOf($t('GENERAL.BROWSE')) !== -1">
                  <b-th>
                    <img
                      src="@/assets/images/icon/browse@2x.png"
                      class="icon32px"
                    >
                    <span
                      v-if="$i18n.locale === 'en'"
                      class="m-0"
                    >
                      {{ events[0] }}
                    </span>
                    <span
                      v-if="$i18n.locale === 'tw'"
                      class="m-0"
                    >
                      {{ $t("GENERAL.BROWSE") }}
                    </span>
                  </b-th>
                  <b-td>
                    22/11/2007 09:23 AM
                  </b-td>
                  <b-td>12:23:50 AM</b-td>
                  <b-td>
                    Keng
                  </b-td>
                </b-tr>
                <b-tr v-if="eventsSelected.indexOf($t('GENERAL.LOGIN')) !== -1">
                  <b-th class="text-right">
                    <img
                      src="@/assets/images/file/publiclink@2x.png"
                      class="icon32px"
                    >
                    <span
                      v-if="$i18n.locale === 'en'"
                      class="m-0"
                    >
                      {{ events[1] }}
                    </span>
                    <span
                      v-if="$i18n.locale === 'tw'"
                      class="m-0"
                    >
                      {{ $t("GENERAL.LOGIN") }}
                    </span>
                  </b-th>
                  <b-td>
                    22/11/2007 09:23 AM
                  </b-td>
                  <b-td>12:23:50 AM</b-td>
                  <b-td>
                    Keng
                  </b-td>
                </b-tr>
                <b-tr v-if="eventsSelected.indexOf($t('GENERAL.PREVIEW')) !== -1">
                  <b-th class="text-right">
                    <img
                      src="@/assets/images/cmd/preview@2x.png"
                      class="icon32px"
                    >
                    <span
                      v-if="$i18n.locale === 'en'"
                      class="m-0"
                    >
                      {{ events[2] }}
                    </span>
                    <span
                      v-if="$i18n.locale === 'tw'"
                      class="m-0"
                    >
                      {{ $t("GENERAL.PREVIEW") }}
                    </span>
                  </b-th>
                  <b-td>
                    22/11/2007 09:23 AM
                  </b-td>
                  <b-td>12:23:50 AM</b-td>
                  <b-td>
                    Keng
                  </b-td>
                </b-tr>
                <b-tr v-if="eventsSelected.indexOf($t('HOME.DOWNLOAD')) !== -1">
                  <b-th class="text-right">
                    <img
                      src="@/assets/images/cmd/download@2x.png"
                      class="icon32px"
                    >
                    <span
                      v-if="$i18n.locale === 'en'"
                      class="m-0"
                    >
                      {{ events[3] }}
                    </span>
                    <span
                      v-if="$i18n.locale === 'tw'"
                      class="m-0"
                    >
                      {{ $t("HOME.DOWNLOAD") }}
                    </span>
                  </b-th>                
                  <b-td>
                    22/11/2007 09:23 AM
                  </b-td>
                  <b-td>12:23:50 AM</b-td>
                  <b-td>
                    Keng
                  </b-td>
                </b-tr>
                <b-tr v-if="eventsSelected.indexOf($t('GENERAL.PUBLICLINK')) !== -1">
                  <b-th class="text-right">
                    <img
                      src="@/assets/images/file/publiclink@2x.png"
                      class="icon32px"
                    >
                    <span
                      v-if="$i18n.locale === 'en'"
                      class="m-0"
                    >
                      {{ events[4] }}
                    </span>
                    <span
                      v-if="$i18n.locale === 'tw'"
                      class="m-0"
                    >
                      {{ $t("GENERAL.PUBLICLINK") }}
                    </span>
                  </b-th>
                  <b-td>
                    22/11/2007 09:23 AM
                  </b-td>
                  <b-td>12:23:50 AM</b-td>
                  <b-td>
                    Keng
                  </b-td>
                </b-tr>
                <b-tr v-if="eventsSelected.indexOf($t('GENERAL.CREATEMOVE')) !== -1">
                  <b-th class="text-right">
                    <img
                      src="@/assets/images/file/folder@2x.png"
                      class="icon32px"
                    >
                    <span
                      v-if="$i18n.locale === 'en'"
                      class="m-0"
                    >
                      {{ events[5] }}
                    </span>
                    <span
                      v-if="$i18n.locale === 'tw'"
                      class="m-0"
                    >
                      {{ $t("GENERAL.CREATEMOVE") }}
                    </span>
                  </b-th>
                  <b-td>
                    22/11/2007 09:23 AM
                  </b-td>
                  <b-td>12:23:50 AM</b-td>
                  <b-td>
                    Keng
                  </b-td>
                </b-tr>
                <b-tr v-if="eventsSelected.indexOf($t('HOME.RENAME')) !== -1">
                  <b-th class="text-right">
                    <img
                      src="@/assets/images/cmd/rename@2x.png"
                      class="icon32px"
                    >
                    <span
                      v-if="$i18n.locale === 'en'"
                      class="m-0"
                    >
                      {{ events[6] }}
                    </span>
                    <span
                      v-if="$i18n.locale === 'tw'"
                      class="m-0"
                    >
                      {{ $t("HOME.RENAME") }}
                    </span>
                  </b-th>
                  <b-td>
                    22/11/2007 09:23 AM
                  </b-td>
                  <b-td>12:23:50 AM</b-td>
                  <b-td>
                    Keng
                  </b-td>
                </b-tr>
                <b-tr v-if="eventsSelected.indexOf($t('GENERAL.MOVE')) !== -1">
                  <b-th class="text-right">
                    <img
                      src="@/assets/images/cmd/cut@2x.png"
                      class="icon32px"
                    >
                    <span
                      v-if="$i18n.locale === 'en'"
                      class="m-0"
                    >
                      {{ events[7] }}
                    </span>
                    <span
                      v-if="$i18n.locale === 'tw'"
                      class="m-0"
                    >
                      {{ $t("GENERAL.MOVE") }}
                    </span>
                  </b-th>
                  <b-td>
                    22/11/2007 09:23 AM
                  </b-td>
                  <b-td>12:23:50 AM</b-td>
                  <b-td>
                    Keng
                  </b-td>
                </b-tr>
                <b-tr v-if="eventsSelected.indexOf($t('GENERAL.EXTRACT')) !== -1">
                  <b-th class="text-right">
                    <img
                      src="@/assets/images/file/extractallfiles@2x.png"
                      class="icon32px"
                    >
                    <span
                      v-if="$i18n.locale === 'en'"
                      class="m-0"
                    >
                      {{ events[8] }}
                    </span>
                    <span
                      v-if="$i18n.locale === 'tw'"
                      class="m-0"
                    >
                      {{ $t("GENERAL.EXTRACT") }}
                    </span>
                  </b-th>
                  <b-td>
                    22/11/2007 09:23 AM
                  </b-td>
                  <b-td>12:23:50 AM</b-td>
                  <b-td>
                    Keng
                  </b-td>
                </b-tr>
                <b-tr v-if="eventsSelected.indexOf($t('GENERAL.LOGOUT')) !== -1">
                  <b-th class="text-right">
                    <img
                      src="@/assets/images/cmd/logout@2x.png"
                      class="icon32px"
                    >
                    <span
                      v-if="$i18n.locale === 'en'"
                      class="m-0"
                    >
                      {{ events[9] }}
                    </span>
                    <span
                      v-if="$i18n.locale === 'tw'"
                      class="m-0"
                    >
                      {{ $t("GENERAL.LOGOUT") }}
                    </span>
                  </b-th>
                  <b-td>
                    22/11/2007 09:23 AM
                  </b-td>
                  <b-td>12:23:50 AM</b-td>
                  <b-td>
                    Keng
                  </b-td>
                </b-tr>
                <b-tr v-if="eventsSelected.indexOf($t('HOME.DELETE')) !== -1">
                  <b-th class="text-right">
                    <img
                      src="@/assets/images/cmd/delete@2x-2.png"
                      class="icon32px"
                    >
                    <span
                      v-if="$i18n.locale === 'en'"
                      class="m-0"
                    >
                      {{ events[10] }}
                    </span>
                    <span
                      v-if="$i18n.locale === 'tw'"
                      class="m-0"
                    >
                      {{ $t("HOME.DELETE") }}
                    </span>
                  </b-th>
                  <b-td>
                    22/11/2007 09:23 AM
                  </b-td>
                  <b-td>12:23:50 AM</b-td>
                  <b-td>
                    Keng
                  </b-td>
                </b-tr>
                <b-tr v-if="eventsSelected.indexOf($t('HOME.COPY')) !== -1">
                  <b-th class="text-right">
                    <img
                      src="@/assets/images/cmd/copy@2x.png"
                      class="icon32px"
                    >
                    <span
                      v-if="$i18n.locale === 'en'"
                      class="m-0"
                    >
                      {{ events[11] }}
                    </span>
                    <span
                      v-if="$i18n.locale === 'tw'"
                      class="m-0"
                    >
                      {{ $t("HOME.COPY") }}
                    </span>
                  </b-th>
                  <b-td>
                    22/11/2007 09:23 AM
                  </b-td>
                  <b-td>12:23:50 AM</b-td>
                  <b-td>
                    Keng
                  </b-td>
                </b-tr>
                <b-tr v-if="eventsSelected.indexOf($t('GENERAL.COMPRESS')) !== -1">
                  <b-th class="text-right">
                    <img
                      src="@/assets/images/file/addtozip@2x.png"
                      class="icon32px"
                    >
                    <span
                      v-if="$i18n.locale === 'en'"
                      class="m-0"
                    >
                      {{ events[12] }}
                    </span>
                    <span
                      v-if="$i18n.locale === 'tw'"
                      class="m-0"
                    >
                      {{ $t("GENERAL.COMPRESS") }}
                    </span>
                  </b-th>
                  <b-td>
                    22/11/2007 09:23 AM
                  </b-td>
                  <b-td>12:23:50 AM</b-td>
                  <b-td>
                    Keng
                  </b-td>
                </b-tr>
                <b-tr v-if="eventsSelected.indexOf($t('HOME.UPLOAD')) !== -1">
                  <b-th class="text-right">
                    <img
                      src="@/assets/images/cmd/upload@2x.png"
                      class="icon32px"
                    >
                    <span
                      v-if="$i18n.locale === 'en'"
                      class="m-0"
                    >
                      {{ events[13] }}
                    </span>
                    <span
                      v-if="$i18n.locale === 'tw'"
                      class="m-0"
                    >
                      {{ $t("HOME.UPLOAD") }}
                    </span>
                  </b-th>
                  <b-td>
                    22/11/2007 09:23 AM
                  </b-td>
                  <b-td>12:23:50 AM</b-td>
                  <b-td>
                    Keng
                  </b-td>
                </b-tr>
              </b-tbody>
              <b-tfoot />
            </b-table-simple>
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
          <li @click="Rename">
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
            @click="NewGroupProperties"
            title="Edit Group Properties"
          >
            <img
              src="@/assets/images/cmd/rename@2x.png"
              class="icon24px"
            >
            {{ $t("HOME.RENAME") }}
          </li>
          <li @click="NewGroupProperties">
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
          <li @click="RootFolderProperties">
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
          <li @click="EventProperties">
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
              src="@/assets/images/cmd/rename@2x.png"
              class="icon24px"
            >
            {{ $t("HOME.RENAME") }}
          </li>
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
      <!-- @update="getUserTable" --> 
      <rename
        ref="EditUserProperties"
        :tab-data="selected"
      />
      <ImportUser ref="ImportUser" />
      <delete-user
        ref="DeleteUser"
        :tab-data="selected"
      />
      <NewGroupProperties
        ref="NewGroupProperties"
      />

      <AddNewUser ref="AddNewUser" />
      <RootFolderProperties ref="RootFolderProperties" />
      <EditPublicLink ref="EditPublicLink" />
      <EventProperties ref="EventProperties" />
    </div>
  </div>
</template>

<script>
import ContextMenu from '@/components/ContextMenu.vue';
import eventBus from "@/bus.js";
import ImportUser from '@/components/Modals/user/ImportUser.vue';
import AddNewUser from '@/components/Modals/user/AddNewUser.vue'
import Rename from './Modals/user/Rename.vue'
import DeleteUser from '@/components/Modals/user/DeleteUser.vue';
import NewGroupProperties from '@/components/Modals/group/NewGroupProperties.vue';
import RootFolderProperties from '@/components/Modals/folder/RootFolderProperties.vue';
import EditPublicLink from'@/components/Modals/link/EditPublicLink.vue';
import EventProperties from '@/components/Modals/events/EventProperties.vue';

export default {
name: "Content",
components:{
  ContextMenu,
  ImportUser,
    AddNewUser,
    Rename,
    DeleteUser,
    NewGroupProperties,
    RootFolderProperties,
    EditPublicLink,
    EventProperties

},
data() {
  return {
    src: require('@/assets/images/icon/usermanagement@2x.png'),
    title: 'User Management',
    countName:'Users',
    currentSelected:1,
    items: [
        { Name: 'Rachel',FullName:'Rachel Lee', LoginCount: '5',LastLoginTime:'25/02/2007 10:52 AM', DateCreated:'25/02/2007 10:52 AM', DateModified:'25/02/2007 10:52 AM',Status:'active'},
        { Name: 'David',FullName:'David Kang', LoginCount: '33',LastLoginTime:'25/02/2007 10:52 AM', DateCreated:'25/02/2007 10:52 AM',DateModified:'25/02/2007 10:52 AM',Status:'active'},
        { Name: 'Peter',FullName:'Peter Lin', LoginCount: '1',LastLoginTime:'25/02/2007 10:52 AM', DateCreated:'25/02/2007 10:52 AM',DateModified:'25/02/2007 10:52 AM',Status:'active'}

      ],
      groupitems: [
        { GroupName: 'RD',Members:5,DateCreated:'25/02/2007 10:52 AM',DateModified:'25/02/2007 10:52 AM'},
        { GroupName: 'HR',Members:5,DateCreated:'25/02/2007 10:52 AM',DateModified:'25/02/2007 10:52 AM'},

      ],
      folderitems: [
        { Name: '1.Root Folder',DateCreated:'25/02/2007 10:52 AM',DateModified:'25/02/2007 10:52 AM'},
        { Name: '2. Features Test Folder',DateCreated:'25/02/2022 10:52 AM',DateModified:'25/02/2007 10:52 AM'},
      ],
      eventsitems: [
      
      ],
      linkitems: [
        { Name: 'Rachel',LinkedItem:'https://demos.google.com/admin/public...', CreatedBy:'admin', HitCount:'2',LastHitTime:'25/02/2007 10:52 AM',Expiration:'25/02/2007 10:52 AM'}, 
      ],
      selectedRow : null,
      selected: {},
      selectMode: 'single',
      filter: null,
      sortDirection: 'All',
      events: [this.$t('GENERAL.BROWSE'), this.$t("GENERAL.LOGIN"), this.$t("GENERAL.PREVIEW"), this.$t("HOME.DOWNLOAD"), this.$t("GENERAL.PUBLICLINK"), this.$t("GENERAL.CREATEMOVE"),this.$t("HOME.RENAME"),this.$t("GENERAL.MOVE"),this.$t("GENERAL.EXTRACT"),this.$t("GENERAL.LOGOUT"),this.$t("HOME.DELETE"),this.$t("HOME.COPY"),this.$t("GENERAL.COMPRESS"),this.$t('HOME.UPLOAD')],
      allSelected: true,
      eventsSelected:[this.$t('GENERAL.BROWSE'), this.$t("GENERAL.LOGIN"),this.$t("GENERAL.PREVIEW"), this.$t("HOME.DOWNLOAD"),this.$t("GENERAL.PUBLICLINK"),this.$t("GENERAL.CREATEMOVE"),this.$t("HOME.RENAME"),this.$t("GENERAL.MOVE"),this.$t("GENERAL.EXTRACT"),this.$t("GENERAL.LOGOUT"),this.$t("HOME.DELETE"),this.$t("HOME.COPY"),this.$t("GENERAL.COMPRESS"),this.$t('HOME.UPLOAD')],
  };
},
created(){
  this.getData();
  this.getTable();
},
watch: {
  eventsSelected(newValue) {
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
    this.selectedRow = null;
    });			
  },
  getTable(){    
    switch (this.currentSelected) {
      case 1:
        this.count = this.items.length        
        return this.items;
      case 2:        
        this.count = this.groupitems.length
        return this.groupitems;
      case 3:
        this.count = this.folderitems.length
        return this.folderitems;         
      case 4: 
        this.count = this.eventsitems.length
        return this.eventsitems;
      case 5: 
        this.count = this.linkitems.length
        return this.linkitems;
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
    this.$refs.menuForUser.open(event);
  }, 
  //選取一個資料 並將資料傳遞子層 
  rowSelected(items) {
    // this.selectedRow = index;
    this.selected = items[0]
    console.log(this.selected);
  
    // this.$refs.selectableTable.selectRow(index) 
    
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
  EditPublicLink(){
    this.$bvModal.show('EditPublicLink');
  },
  addnew(){
    if (this.currentSelected === 1) {
      this.$bvModal.show('AddNewUser');
    }
    if (this.currentSelected === 2) {
      this.$bvModal.show('NewGroupProperties');
    }
    if (this.currentSelected === 3) {
      this.$bvModal.show('RootFolderProperties');
    }
  },
  NewGroupProperties(){
      this.$bvModal.show('NewGroupProperties');
      this.title = 'aaaa'
    },
    RootFolderProperties(){
      this.$bvModal.show('RootFolderProperties');

    },
    EventProperties(){
      this.$bvModal.show('EventProperties');
    }
    //用戶table更新
    // getUserTable(){
    //   const url = ``
    //   this.$http.get(url).then(res => {
    //     this.user = res.data.data
    //   }).catch(err => {
    //    console.log(err);
       
    //   })
    // }
}
}
</script>

<style>

</style>
