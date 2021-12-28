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
        <div class="col-8 overflow-scroll">
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
                  <!-- @change="item.roleId == 1" -->
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  >
                </th>
                <td>
                  <!-- @change="item.roleId == 2" -->
                  <input
                    type="checkbox" 
                    class="form-check-input"
                  >
                </td>
                <td>{{ item.userName }}</td>
                <td>{{ item.userName }}</td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>

        <ul class="list-group col-4 p-0  bg-white border overflow-auto overflow-scroll">
          <li class="list-group-item  d-flex align-items-center border-0" />
          <li class="list-group-item bg-white  border-0">
            <button
              type="button"
              class="table-btn  d-flex align-items-center"
            >
              <img
                src="@/assets/images/icon/admin-solid.png"
                class="icon-16px"
              >
              David
              <img
                src="@/assets/images/cmd/del.png"
                class="icon-20px"
              >
            </button>
          </li>
        </ul>
      </div>
      <div class="d-flex justify-content-end p-3">
        <p>
          <span>{{ $t("MODAL.TOTAL") }}

          </span>
          <span class=" fw-bold">{{ this.count }}</span>
        </p>
        <p class="ms-3">
          <span class="dark-blue fw-bold">4
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
      group:{}
    };
  },
  methods: {
    start() {
      this.getGroupSettings(this.personData.groupId)
      this.getUserTable()
      console.log('888');
      
    },
    // addADGroup () {  
    //   this.axios.post(`${process.env.APIPATH}/api/AD/SaveADGroupsToDB`)
    //     .then((data) => {

    //     console.log(data);
    //   }).catch(error => {
    //       console.log(error);          
    //     })
    //   },
      addNewGroup () {  
      this.axios.post(`${process.env.VUE_APP_USER_APIPATH}/api/Groups/CreateGroup`,this.group)
        .then((data) => {
      
        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      },
      addUsersToGroup() {  
      this.axios.post(`${process.env.VUE_APP_USER_APIPATH}/api/AD/SaveADUsersToDB`)
        .then((data) => {
       


        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      },
      
      updateGroup() {  
      this.axios.post(`${process.env.VUE_APP_USER_APIPATH}/api/Groups/EditGroup`)
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
            console.log('',this.useritems);
            
            this.count = this.useritems.length       
          }).catch(error => {
            console.log(error);        
          })
      },
    
  },
};
</script>


