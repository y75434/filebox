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
    @ok="handleOk"
    @cancel="cancel"
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

          <strong class="text-danger"> {{ delData.name || delData.Name || delData.userName }}</strong>
        </h5>
        <h5 class="text-dark mb-3">
          {{ $t("MODAL.PLEASETYPE") }}
        </h5>
      

        
        <div class="mx-auto">
          <span class="badge px-4 py-2 my-2 bg-danger">{{ delData.name || delData.Name || delData.userName }}</span>
        </div>

        <input
          class="form-control"
          type="text"
          v-model="userInput"
        >
      </div>
    </div>
    <template #modal-cancel>
      {{ $t("GENERAL.CANCEL") }}
    </template>

    <template
      #modal-ok
    >
      {{ $t("GENERAL.OK") }}
    </template>
  </b-modal>
</template>
<script>
export default {
	name: 'DeleteUser',
	props: {
    // dataSource: { type: Object, require: true },
    delData: { type: Object , default() { return {} }}

	},
	data() {
		return {
      userInput: '',
      personData: this.delData

		};
	},
	// computed: {
	// 	delFormValidity() {
	// 		return this.delData.name || this.delData.userName !== this.userInput;
	// 	},
	// },
	methods: {
    handleOk(bvModalEvt) {
        bvModalEvt.preventDefault()

        
  
        if('userName' in this.delData && this.delData.userName === this.userInput) {
          this.deleteUser(this.delData.userId)    
        }
        else if('linkId' in this.delData && this.delData.username === this.userInput) {//check
          this.deleteLink(this.delData.linkId)
        }
        else {
          this.deleteFolder(this.delData.folderId)
        }


      },
     deleteGroup(id) {  
      this.axios.delete(`/api/Groups/${id}`)
        .then((data) => {
        
        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      },
      deleteUser(id) {  

      this.axios.delete(`${process.env.VUE_APP_USER_APIPATH}/api/Users`
      ,{data:{ "id": id }})
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
        
      this.axios.delete(`${process.env.VUE_APP_LINKS_APIPATH}/api/Link/${id}`)
        .then((data) => {
          console.log(data);
        // this.$store.dispatch('users/deleteUser', { userId: this.dataSource.id });
        this.$nextTick(() => { this.userInput = '';
        this.$bvModal.hide('modal-delete-user'); });

      }).catch(error => {
          console.log(error);          
        })
    },
    deleteFolder(id) {  
        console.log('97',id);
        //目前不能刪資料夾
      this.axios.delete(`${process.env.VUE_APP_FOLDER_APIPATH}/api/Link/${id}`)//沒api
        .then((data) => {
        //Input parameters: userId
          console.log(data);


        // this.$store.dispatch('users/deleteUser', { userId: this.dataSource.id });
        this.$nextTick(() => { this.userInput = '';
        this.$bvModal.hide('modal-delete-user'); });



      }).catch(error => {
          console.log(error);          
        })
    },
		cancel() {
			this.userInput = '';
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
