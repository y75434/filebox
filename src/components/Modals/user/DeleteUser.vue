<template>
  <b-modal
    id="modal-delete-user"
    centered
    :title="$t('TITLE.DELETE')"
    header-bg-variant="danger"
    header-text-variant="light"
    hide-header-close
    no-close-on-backdrop
    no-close-on-esc
    body-bg-variant="white"
    footer-bg-variant="white"
    cancel-variant="outline-secondary"
    ok-variant="danger"
  >
    <div
      class="radius"
    >
      <div class="p-3">
        <h5 class="text-dark mb-3">
          {{ $t("HOME.DELETE") }}

          <strong class="text-danger"> {{ delData.name || delData.Name || delData.userName || delData.groupName }}</strong>
        </h5>
        <h5 class="text-dark mb-3">
          {{ $t("MODAL.PLEASETYPE") }}
        </h5>
        <h5 class="text-dark mb-3">
          {{ delData }}
        </h5>


        
        <div class="mx-auto">
          <span class="badge px-4 py-2 my-2 bg-danger">{{ delData.name || delData.Name || delData.userName || delData.groupName }}</span>
        </div>

        <input
          class="form-control"
          type="text"
          v-model="userInput"
        >
      </div>
    </div>
 


    <template #modal-footer>
      <div class="w-100 justify-content-end d-flex">
        <button
          @click="cancel"
          type="button"
          class="sm-btn cancel-btn mx-3 btn justify-content-center d-flex"
        >
          {{ $t("GENERAL.CANCEL") }}
        </button>
        <!-- :disabled="delFormValidity" -->

        <button
          @click="handleOk"
          type="button"
          class="sm-btn btn btn-danger text-white justify-content-center d-flex"
        >
          {{ $t("HOME.DELETE") }}
        </button>
      </div>
    </template>
  </b-modal>
</template>
<script>
export default {
	name: 'DeleteUser',
	props: {
    delData: { type: Object , default() { return {} }}

	},
	data() {
		return {
      userInput: '',
      personData: {},
      mulUser:[]

		};
  },
  watch:{ 
    delData(){ 
      this.personData = this.delData
    } 
  },
  //因key不同無法
	// computed: {
	// 	delFormValidity() {
	// 		return this.delData.name || this.delData.userName || this.delData.Name || this.delData.groupName !== this.userInput;
	// 	},
	// },
	methods: {
    handleOk(bvModalEvt) {
        bvModalEvt.preventDefault()

        
  
        if(('userName' in this.personData) && (this.delData.userName === this.userInput)) {
          this.deleteUser(this.delData.userId)    
        }
        else if(('linkId' in this.personData ) && (this.delData.name === this.userInput)) {
          this.deleteLink(this.delData.linkId)
        }
        else if(('groupName' in this.personData) && (this.delData.groupName === this.userInput)){
          this.deleteGroup(this.delData.id) 
        }

        else if(('folderId' in this.personData) && (this.delData.name === this.userInput)){
          this.deleteFolder(this.delData.folderId) 
        }

        this.$nextTick(() => { 
          this.userInput = '';
          this.$bvModal.hide('modal-delete-user'); 
          //this.$parent.getTable()//不能

        });



      },
     deleteGroup(id) {  
      this.axios.delete(`${process.env.VUE_APP_USER_APIPATH}/api/Groups/`,
      {data:{ "id": id,"editedBy": this.$store.getters.userId, "editor":this.$store.getters.currentUser}})
        .then((data) => {
        
        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      },
      deleteUser(id) {  

      this.axios.delete(`${process.env.VUE_APP_USER_APIPATH}/api/Users`
      ,{data:{ "id": id,"editor": this.$store.getters.userId,"editedBy":this.$store.getters.currentUser}})
        .then(() => {
          this.$nextTick(() => { this.userInput = '';
          this.$bvModal.hide('modal-delete-user'); });

          // console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      },
      
      deleteLink(id) {  
        //它不會刪除記錄，而只是將刪除標誌設置為打開或關閉
        console.log('97',id);
        
      this.axios.delete(`${process.env.VUE_APP_LINKS_APIPATH}/api/Link`,
      {data:{ "id": id ,"editor": this.$store.getters.userId, "editorName":this.$store.getters.currentUser}})
        .then((data) => {
          console.log(data);
        this.$nextTick(() => { this.userInput = '';
        this.$bvModal.hide('modal-delete-user'); });

      }).catch(error => {
          console.log(error);          
        })
    },
    deleteFolder(id) {  
      this.axios.delete(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement`,
      {data:{  
        "items": [ { "id": id, "type": 0 }],
        "editor": this.$store.getters.userId,
        "editorName":this.$store.getters.currentUser }})
        .then((data) => {
          console.log(data);

          


        // this.$store.dispatch('users/deleteUser', { userId: this.dataSource.id });
        // this.$nextTick(() => { this.userInput = '';
        // this.$bvModal.hide('modal-delete-user'); });



      }).catch(error => {
          console.log(error);          
        })
    },
		cancel() {
      this.userInput = '';
      this.$bvModal.hide('modal-delete-user');
		},
	},
};
</script>




<style scoped>
code {
	background-color: rgba(255, 0, 0, 0.3);
	border-radius: 5px;
	padding: 5px;
	color: navy;
	font-weight: bold;
}

.modal-content > div > p {
	user-select: none;
}

.btn-sm {
	padding: 0.06rem 0.5rem;
}
</style>
