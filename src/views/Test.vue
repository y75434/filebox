<style>
  img {
    -webkit-user-select:none;
    -moz-user-select:none;
    -o-user-select:none;
    user-select:none;
  }
</style>
<template>

  <div>
    <input type="radio" name="permission" value="allow" v-model="type">
    <input type="radio" name="permission" value="deny"  v-model="type">
     <button @click="checked()">checked</button>
    <button @click="unchecked()">unchecked</button>
      <button @click="clean()">clean</button>



<div class="col-8 ">
            <div
              class="d-flex flex-column height-70px"
            >
              <h5 class="m-0 fw-bold">
                {{ $t("MODAL.ACCESSCONTROLFOR") }}
              </h5>
              <button @click="clean()">clean</button>

              <li
                v-for="item in tempTypes"
                :key="item.id"
                class="list-group-item w-100 border-0 p-0 justify-content-between d-flex"
              >
                <label
                  class="form-check-label w-100"
                >
                  {{ item.name }}
                </label>
                <div class=" w-100">
                  <input
                    v-model="item.selected"
                    class="form-check-input mx-3"
                    type="radio"
                    value="allow"
                    :name="item.name"
                  >
                  <input
                    v-model="item.selected"
                    class="form-check-input mx-3"
                    type="radio"
                    value="deny"
                    :name="item.name"
                  >
                </div>
              </li>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <img
                    src="@/assets/images/file/single folder@2x.png"
                    class="icon32px"
                  >
                  <p class="fw-bold m-0">
                    {{ FolderSettings.name }}
                  </p>
                </div>
              
                <div class=" form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    :disabled="validateFather"
                    v-model="editSetting.settings.inherit"
                    @change="checkInhert($event)"
                  >
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >{{ $t("MODAL.INHERITFROMPARENT") }}</label>
                </div>
              </div>
            </div>

            <div class="row modal-selectuser">
              <ul class=" list-group d-flex flex-column justify-content-between bg-white col-3 p-0 h-100 border">
                <div class="overflow-scroll">
                  <li class="form-check list-group-item border-0 p-0">
                    <input
                      type="text"
                      placeholder="Selected Groups/users"
                      class="form-control"
                      v-model="searchText"
                      @keyup="getUserTable()"
                    >
                  </li>

                  <li
                    v-for="item in useritems"
                    :key="item.id"
                    class="list-group-item border-0 p-0 text-left"
                  >
                    <div class="form-check justify-content-center align-items-center p-0 w-100 d-flex">
                      <img
                        src="@/assets/images/icon/Union.png"
                        class="icon24px"
                        @click="userSelected(item)"
                      >
                      <label
                        class="form-check-label"
                        :for="item.userName"
                      >
                        {{ item.userName }}
                      </label>
                    </div>
                  </li>

                  <li
                    v-for="item in groupitems"
                    :key="item.id"
                    class="list-group-item border-0 p-0 text-left"
                  >
                    <div class="form-check justify-content-center align-items-center p-0 w-100 d-flex">
                      <img
                        src="@/assets/images/icon/group@2x.png"
                        class="icon24px"
                        @click="groupSelected(item)"
                      >
                      <label
                        class="form-check-label"
                        :for="item.groupName"
                      >
                        {{ item.groupName }}
                      </label>
                    </div>
                  </li>
                </div>
              
                <li class="list-group-item d-flex justify-content-end border p-2">
                  <p>
                    <span>{{ $t("MODAL.TOTAL") }}
                    </span>
                    <span class=" fw-bold">{{ this.count }}</span>
                  </p>
                </li>
              </ul>
              <ul class="list-group d-flex flex-column justify-content-between bg-white col-3 p-0 h-100 border">
                <li                
                  class="form-check list-group-item border-0 p-0"
                >
                  <p
                    type="text"
                    class="form-control fw-bold"
                  >
                    {{ $t("MODAL.SELECTEDGROUPSUSERS") }}
                  </p>
                </li>
                <div
                  class=""
                  v-if="this.members.length > 0"
                >
                  <!--  -->
                  <li
                    v-for="item in this.members"
                    :key="item.id"
                    class="list-group-item border-0 p-0 mb-2"
                  >
                    <div class="form-check justify-content-center align-items-center p-0 w-100 d-flex">
                      <!--  -->
                      <img
                        v-if="!item.isGroup"
                        @dblclick="userCan(item)"
                        src="@/assets/images/icon/Union.png"
                        class="icon24px"
                        :style=" item.inFather ? {opacity:'0.3'} : {opacity:'1'}"
                      >
                      <!--  -->
                      <img
                        v-else
                        @dblclick="userCan(item)"
                        src="@/assets/images/icon/group@2x.png"
                        class="icon24px"
                        :style=" item.inFather ? {opacity:'0.3'} : {opacity:'1'}"
                      >
                      <label
                        class="form-check-label"
                        for="flexCheckDefault"
                      >
                        {{ item.memberName }}
                        <img
                          @click="del(item)"
                          src="@/assets/images/cmd/del.png"
                          class="icon-20px"
                          v-if="!item.inFather"
                        >
                      </label>
                    </div>
                  </li>
                </div>
                
                <li class="list-group-item d-flex justify-content-end border p-2">
                  <p class="ms-3 justify-content-end d-flex align-items-center">
                    <!-- <span class="dark-blue fw-bold">{{ FolderSettings.settings.accessPermissions.self.length || 0 }}
                    </span> -->
                    <span>{{ $t("MODAL.SELECTED") }}</span>
                  </p>
                </li>
              </ul>
              

              <div class="bg-white border col-6 p-0 h-100">
                <div
                  class="nav nav-tabs"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    class="nav-link w-50 active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    {{ $t("MODAL.PERMISSIONS") }}
                  </button>
                  <button
                    class="nav-link w-50"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    {{ $t("MODAL.FILESSETTING") }}
                  </button>
                </div>
                <div
                  class="tab-content h-100 overflow-scroll"
                  id="nav-tabContent"
                >
                  <div
                    class="tab-pane fade show active "
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <ul
                      class="justify-content-center flex-column d-flex align-items-center"
                    >
                      <li class="list-group-item w-100 border-0 p-0 justify-content-end d-flex">
                        <label
                          class="form-check-label w-100"
                        />

                        <div class=" w-100">
                          <span class="mx-2">allow</span>
                          <span>deny</span>
                        </div>
                      </li>
                      <!-- disabled="this.editSetting.settings.accessPermissions.parent != []" -->
                      <!-- <li
                        v-for="item in PermissionTypes"
                        :key="item.id"
                        class="list-group-item w-100 border-0 p-0 justify-content-between d-flex"
                      >
                        <label
                          class="form-check-label w-100"
                          :for="item.id"
                        >
                          {{ item.name }}
                        </label>
                        <div class=" w-100">
                          <input
                            v-model="item.selected"
                            class="form-check-input mx-3"
                            type="radio"
                            value="allow"
                            :name="item.permissionTypeId"
                            :disabled="item.inFather"
                            @change="permissionSelected(item)"
                            @dblclick="cleanChecked(item)"
                            :id="item.id"
                          >
                          <input
                            v-model="item.selected"
                            class="form-check-input mx-3"
                            type="radio"
                            value="deny"
                            :name="item.permissionTypeId"
                            :disabled="item.inFather"
                            @dblclick="cleanChecked(item)"
                            @change="permissionSelected(item)"
                            :id="item.id"
                          >
                        </div>
                      </li> -->
                    </ul>
                  </div>
                  <div
                    class="tab-pane fade "
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <p class="fw-bold">
                      Quata
                    </p>
                    <div
                      class="form-check"
                    >
                      <input
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        class="form-check-input"
                      >
                      <label
                        for="flexCheckDefault"
                        class="form-check-label"
                      >{{ $t("MODAL.LIMITDISKSPACETO") }}</label>
                      <div class="d-flex">
                        <input
                          placeholder="enter code"
                          type="number"
                          class="form-control m-0 w-50"
                          v-model="space"
                        >
                        <select
                          class="form-select w-50"
                          aria-label="Disabled select example"
                          @change="storageSelected($event)"
                        >
                          <option
                            v-for="(item,index) in StorageUnit"
                            :key="item.id"
                            :value="item.storageUnitId"
                            :selected=" index == 0"
                          >
                            <!-- editSetting.settings.storage.unitId || -->
                            {{ item.unit }}
                          </option>
                        </select>
                      </div>

                      <p class="fw-bold">
                        {{ $t("MODAL.FILETYPE") }}
                      </p>
                      <div
                        class="form-check"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                        >
                        <label
                          for="flexCheckDefault"
                          class="form-check-label"
                        > {{ $t("MODAL.RESTRICTFILETYPES") }}
                        </label>
                      </div>
                      <div
                        class="d-flex flex-wrap "
                        style="width:300px"
                      >
                        <div
                          v-for="item in FileTypes"
                          :key="item.id"
                          class="form-check mx-2 "
                          :id="item.id"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            v-model="item.active"
                            @change="typeSelected(item)"
                            :id="item.id"
                          >
                          <label
                            :for="item.id"
                            class="form-check-label"
                          > {{ item.extension }}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

  </div>

 



  <!-- <div
    @mousedown="mouseDown($event)"
    @mousemove="mouseMove($event)"
    @mouseup="mouseUp($event)"
    style="background:white;position: relative;width:100vw;height:100vh"
  >
    <div class="d-flex">
                <div
                  class="mx-2 my-2 folderItem"
                  style="position:relative"
                  :key="item.id"
                  :id="item.id"
                  v-for="item in resultQuery"
                  @dblclick="detectClick(item)"
                  @change="ischecked = !ischecked"
                  :style=" { backgroundColor: (item.ischecked ? '#d3eaff' : 'transparent' ), 
                             opacity: item.changed ? {opacity:'1'} : {opacity:'0.3'},          
                  }"
                  @mouseover="rowSelected(item)"
                >
                  <input
                    class="form-check-input itemCheckbox"
                    type="checkbox"
                    v-model="item.ischecked"
                    v-if="renderCheckboxs"
                    @change="setSelectNumber()"
                  >
                  <img
                    :src="item.pic"
                    :id="item.id"
                    class="folder-icon"
                  >
                  <div
                    class="text-dark text-center text-truncate"
                    style="max-width: 100px;"
                  >
                    {{ item.name }}<span
                      class="text-dark"
                      v-if="extension"
                    >.{{ item.extension }}</span>
                  </div>     
                </div> 
              </div>
    <div
      ref="div"
      style="border: 1px solid #33CCFF;background:#33CCFF;opacity:0.5;position:absolute;z-index:999"
      hidden=0
    />
    <button @click="selected()">SelectedImg</button>
  </div> -->
</template>

<script >

export default {
  name: "Test",
  data:() =>({
   x1 : 0, y1 : 0, x2 :0, y2 : 0,type:'',
   
  }),
  computed: {
	
	},
  mounted() {
  
  },
  methods:{
    clean(){
      this.type = false;
    },
    checked(){
      this.type='allow'
    },
    unchecked(){
      this.type='deny'
    }
    ,
    selected(){
      let selected = []
      let imgs = document.querySelectorAll('img');
      imgs.forEach(x=>{
         if(x.dataset.selected==='true'){
           selected.push(x);
         }
      })
      console.log(selected);
    }
    
   
    
      
  }
}





</script>
