<template>
  <b-modal
    id="NewGroupProperties"
    class="modal-content modal-popout-bg"
    centered
    :title="$t('TITLE.NEWGROUPPROPERTIES')"
    body-text-variant="warning"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    footer-bg-variant="white"
    body-bg-variant="bgmodal"
    @ok="addNewGroup()"
  >
    <div class="modal-popout-bg p-0">
      <div
        class="p-3 w-100 d-flex align-items-center justify-content-between mb-2"
      >
        <label for="Name">{{ $t("MODAL.USERNAME") }}required</label>
        <input
          type="Name"
          id="Name"
          class="form-control inline-block width-320"
          v-model="group.groupName"
        >
      </div>
      <div
        class="p-3 w-100 d-flex align-items-center justify-content-between mb-2"
      >
        <label for="Username">{{ $t("MODAL.DESCRIPTION") }}required</label>
        <input
          type="Username"
          id="Username"
          class="form-control inline-block width-320"
          v-model="group.groupDescription"
        >
      </div>




      <hr class="">


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

      {{ group }}

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
                <th scope="row ">
                  <input
                    v-model="item.selected"
                    :name="item.userId"
                    value="1"
                    class="form-check-input"
                    type="radio"
                    @change="userSelected(item)"
                  >
                </th>
                <td>
                  <input
                    v-model="item.selected"
                    value="2"
                    :name="item.userId"
                    type="radio"
                    class="form-check-input"
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
          class="list-group col-4 p-0  bg-white border overflow-auto overflow-scroll"
        >
          <div v-if="editGroup.groupUserRelations.length>0">
            <!-- <li class="list-group-item  d-flex align-items-center border-0 overflow-scroll" /> -->
            <li 
              v-for="item in editGroup.groupUserRelations"
              :key="item.userId"
              class="list-group-item bg-white  border-0"
            >
              <button
                type="button"
                class="table-btn  d-flex align-items-center"
              >
                <img
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
        <p class="ms-3">
          <span class="dark-blue fw-bold">{{ editGroup.groupUserRelations.length }}
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
export default {
  name: "NewGroupProperties",
  props: { title: { type: String, default: "New Group Properties" } },

  data() {
    return {
      showModal: false,
      filter: null,
      useritems: {},
      searchText:"",
      count:0,
      group:{ 
        
      },
      editGroup:{
        id: "",
        groupUserRelations: []
      },
      groupUsers:{}//目前成員

    };
  },
  methods: {
    start() {
      this.getUserTable()
      this.editGroup.groupUserRelations = []
    },
     del(user){
        this.editGroup.groupUserRelations =this.editGroup.groupUserRelations.filter(x=>x.userId !== user.userId);

      },//ok
      addNewGroup () {  
      this.axios.post(`${process.env.VUE_APP_USER_APIPATH}/api/Groups/CreateGroup`,this.group)
        .then((data) => {
        //接著把選擇名單放入群組
        this.addUsersToGroup(data.data)

      }).catch(error => {
          console.log(error);          
        })
      },//ok
      addUsersToGroup(id) {  
        const headers = { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": '*' 
        };

       
      const data = JSON.stringify({
        "id": id, 
        "groupUserRelations": this.editGroup.groupUserRelations

      })

      console.log(data);


      this.axios.put(`${process.env.VUE_APP_USER_APIPATH}/api/Groups/AddUsersInGroup`,
      data,{ headers: headers } )
        .then((data) => {
          console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      },
      
    
      getUserTable () {  
        this.axios.get(`${process.env.VUE_APP_USER_APIPATH}/api/Users/GetUsers?searchString=${this.searchText}`)
          .then((data) => {          
            this.useritems = data.data
            
            this.count = this.useritems.length       
          }).catch(error => {
            console.log(error);        
          })
      },
     userSelected(item){
        // console.log('317', item);
          // console.log(data);
          this.editGroup.groupUserRelations = this.editGroup.groupUserRelations.filter(x=>x.userId !== item.userId);
          const data = { "groupID": this.group.id, "userID": item.userId, "roleId": item.selected ,"userName": item.userName}

          this.editGroup.groupUserRelations.push(data)
          console.log('目前選擇名單',this.editGroup.groupUserRelations);
          
      
      },
      

  },
};
</script>


