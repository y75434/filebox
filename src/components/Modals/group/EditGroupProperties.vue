<template>
  <b-modal
    id="EditGroupProperties"
    class="modal-content modal-popout-bg"
    centered
    :title="$t('TITLE.NEWGROUPPROPERTIES')"
    body-text-variant="warning"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    footer-bg-variant="white"
    body-bg-variant="bgmodal"
    @ok="updateGroup()"
  >
    <div class="modal-popout-bg p-0">
      <div
        class="p-3 w-100 d-flex align-items-center justify-content-between mb-2"
      >
        <label for="Name">{{ $t("MODAL.USERNAME") }} <span class="text-danger">{{ $t("GENERAL.REQUIRE") }}</span></label>
        <input
          type="Name"
          id="Name"
          class="form-control inline-block width-320"
          v-model="group.groupName"
          disabled
        >
      </div>
      <div
        class="p-3 w-100 d-flex align-items-center justify-content-between mb-2"
      >
        <label for="Username">{{ $t("MODAL.DESCRIPTION") }}<span class="text-danger">{{ $t("GENERAL.REQUIRE") }}</span></label>
        <input
          type="Username"
          id="Username"
          class="form-control inline-block width-320"
          v-model="group.groupDescription"
        >
      </div>

      group
      {{ group }}

      <hr class="">

      api
      {{ api }}


      <div class="p-2 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <span>{{ $t("MODAL.SELECTGROUPMEMBER") }}</span>
          <img
            src="@/assets/images/cmd/Group.png"
            class="ms-2 icon20px"
          >
        </div>
        <div class="border-0">
          <div class="d-flex ">
            <input
              v-model="searchText"
              type="text"
              placeholder="Name, Fullname"
              class="form-control "
              @keyup="getUserTable"
            >
                  
            <button
              @click="getUserTable()"
              type="button"
              id="button-addon2"
              class="btn btn-blue"
            >
              <img
                src="@/assets/images/icon/magnifier.png"
                class="nav-icon"
              >
            </button>
          </div>
        </div>
      </div>

      <div class="row p-4">
        <div class="col-8 overflow-scroll height-400">
          <table
            class="table border h-100 overflow-auto"
          >
            <thead>
              <tr>
                <th scope="col">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    >
                    <label
                      class="form-check-label"
                      for="flexCheckDefault"
                    >
                      <img
                        src="@/assets/images/icon/Union.png"
                        class="icon-16px"
                      >
                    </label>
                  </div>
                </th>
                <th scope="col">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    >
                    <label
                      class="form-check-label"
                      for="flexCheckDefault"
                    >
                      <img
                        src="@/assets/images/icon/admin-solid.png"
                        class="icon-16px"
                      >
                    </label>
                  </div>
                </th>
                <th scope="col">
                  {{ $t("MODAL.USERNAME") }}
                </th>
                <th scope="col">
                  {{ $t("MODAL.FULLNAME") }}
                </th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr
                v-for="item in useritems"
                :key="item.id"
              >
                <th scope="row">
                  <input
                    v-model="item.selected"
                    @change="userSelected(item)"
                    class="form-check-input"
                    type="radio"
                    value="1"
                    :name="item.userId"
                  >
                </th>
                <td>
                  <input
                    type="radio"
                    :name="item.userId"
                    class="form-check-input"
                    v-model="item.selected"
                    value="2"
                    @change="userSelected(item)"
                  >
                </td>
                <td>{{ item.userName }}</td>
                <td>{{ item.userName }}</td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>

        <ul
          class="list-group col-4 p-0  bg-white border overflow-auto "
        >
          <div v-if=" api">
            <!-- <li class="list-group-item  d-flex align-items-center border-0 overflow-scroll" /> -->
            <li
              v-for="item in api.users"
              :key="item.userId"

              class="list-group-item bg-white  border-0"
            >
              <button
                type="button"
                class="table-btn  d-flex align-items-center"
              >
                <img
                  v-if="item.roleId == 1"
                  src="@/assets/images/icon/Union.png"
                  class="icon-16px"
                >
                <img
                  v-else
                  src="@/assets/images/icon/admin-solid.png"
                  class="icon-16px"
                >
                {{ item.userName }}
                <img
                  @click="del(item)"
                  src="@/assets/images/cmd/del.png"
                  class="icon-20px"
                >
              </button>
            </li>
          </div>
        </ul>
      </div>
      <div class="d-flex justify-content-end p-3">
        <p>
          <span>{{ $t("MODAL.TOTAL") }}

          </span>
          <span class=" fw-bold">{{ this.count }}</span>
        </p>
        <p class="ms-3" v-if="api.users !== undefined && api.users.length > 0">
          <span class="dark-blue fw-bold">{{ api.users.length || 0 }}
          </span>
          <span>{{ $t("MODAL.SELECTED") }}</span>
        </p>
      </div>
    </div>
    <template
      #modal-cancel
      variant="outline-primary"
      class="cancel-btn"
    >
      {{ $t("GENERAL.CANCEL") }}
    </template>

    <template #modal-ok>
      {{ $t("GENERAL.OK") }}
    </template>
  </b-modal>
</template>

<script>
import cmqRequest from "@/http/cmqRequest"

export default {
  name: "EditGroupProperties",
  props: { 
    title: { type: String, default: "Edit Group Properties" },
    tabData: { type: Object , default() { return {} }}

  },

  data() {
    return {
      filter: null,
      useritems: [],
      searchText:"",
      count:0,
      group:{},
      api: {}
    };
  },
  watch:{ 
    tabData(){ 
      this.group = this.tabData 
    } 
  },
 
  
  methods: {
    start() {
      this.getUserTable()
      this.getGroup()

    },
      
    getGroup () {  
      cmqRequest.get(`${process.env.VUE_APP_USER_APIPATH}/api/Groups/${this.group.id}`)
        .then((data) => {          
          this.group.groupDescription = data.data.groupDescription
          this.api = data.data
          // .groupDescription
          console.log('this.group',this.group);
          console.log('this.api',this.api);

        }).catch(error => {
          console.log(error);        
        })
    },
    //編輯資料外也可以設定層級和新增使用者
    updateGroup() {  
      
      const data = JSON.stringify({
          "id": this.group.id,
          // "groupName": this.group.groupName,
          "groupDescription": this.group.groupDescription,
          "groupScope": this.group.groupName,
          "isSecurityGroup": true,
          "usersList": this.api.users,
          "editedBy":  this.$store.getters.userId,
          "editor":  this.$store.getters.currentUser
          //之後設定
          // "parentChildGroupRelations": [
          //   {
          //     "childGroupID": "",
          //     "parentGroupID": ""
          //   }
          // ]
      })
      console.log(data);
        
    cmqRequest.put(`${process.env.VUE_APP_USER_APIPATH}/api/Groups/EditGroup`,
      data)
        .then((data) => {

        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      setTimeout(() => {this.$emit('reload');},2000)

    },
    getUserTable () {  
      cmqRequest.get(`${process.env.VUE_APP_USER_APIPATH}/api/Users/GetUsers?searchString=${this.searchText}`)
        .then((data) => {          
          this.useritems = data.data
          console.log('all user',this.useritems);
          
          // this.count = this.useritems.length       
        }).catch(error => {
          console.log(error);        
        })
    },

    userSelected(item){
      
      //api沒該用戶
      if(this.api.users.filter(x=>x.userId == item.userId).length==0) {
         this.api.users.push({ "userName": item.userName, "userId": item.userId, "roleId": item.selected });
       
      }else{
        //先把api資料刪掉再加入更新資料
        this.api.users = this.api.users.filter(x=>x.userId !== item.userId);
        this.api.users.push({ "userName": item.userName, "userId": item.userId, "roleId": item.selected });

      }

    },
    del(user){
      this.api.users =this.api.users.filter(x=>x.userId !== user.userId);
      // this.count = this.api.users.length

    },
    
  },
};
</script>


