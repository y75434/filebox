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
    :ok-disabled="delFormValidity"
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

          <strong class="text-danger"> {{ tabData.FullName || tabData.name || tabData.Name }}</strong>
        </h5>
        <h5 class="text-dark mb-3">
          {{ $t("MODAL.PLEASETYPE") }}
        </h5>
      

        
        <div class="mx-auto">
          <span class="badge px-4 py-2 my-2 bg-danger">{{ tabData.FullName || tabData.name || tabData.Name }}</span>
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
    tabData: { type: Object , default() { return {} }}

	},
	data() {
		return {
      userInput: '',
      personData: this.tabData

		};
	},
	computed: {
		delFormValidity() {
			return this.tabData.name !== this.userInput;
		},
	},
	methods: {
    handleOk(bvModalEvt) {
        bvModalEvt.preventDefault()
        //之後要加判斷 link group user

       
    
        if('FullName' in this.tabData) {
          console.log('');      
        }
        else if('linkId' in this.tabData) {
          this.deleteLink(this.tabData.linkId)
        }
        else {
          this.deleteFolder(this.tabData.folderId)
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
      this.axios.delete(`/api/Users/${id}`)
        .then((data) => {
        //Input parameters: userId
        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      },
      deleteLink(id) {  
        //它不會刪除記錄，而只是將刪除標誌設置為打開或關閉
        console.log('97',id);
        
      this.axios.delete(`${process.env.VUE_APP_LINKS_APIPATH}/api/Link/${id}`)
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
    deleteFolder(id) {  
        console.log('97',id);
        //目前不能刪資料夾
      this.axios.delete(`${process.env.VUE_APP_FOLDER_APIPATH}/api/Link/${id}`)
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
