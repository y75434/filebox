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

          <!-- <strong class="text-danger"> {{ dataSource.name }}</strong> -->
        </h5>
        <h5 class="text-dark mb-3">
          {{ $t("MODAL.PLEASETYPE") }}
        </h5>
      

        <p>
          <!-- <code>{{ dataSource.name }}</code> -->
        </p>
        <div class="mx-auto">
          <span class="badge px-4 py-2 my-2 bg-danger">{{ tabData.FullName }}</span>
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

    <template #modal-ok>
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
		// delFormValidity() {
		// 	return this.dataSource.name !== this.userInput;
		// },
	},
	methods: {
     deleteGroup(id) {  
      this.axios.delete(`${process.env.APIPATH}/api/Groups/${id}`)
        .then((data) => {
        
        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      },
      deleteUser(id) {  
      this.axios.delete(`${process.env.APIPATH}/api/Users/${id}`)
        .then((data) => {
        //Input parameters: userId
        console.log(data);
      }).catch(error => {
          console.log(error);          
        })
      },
       deleteLink(id) {  
         //它不會刪除記錄，而只是將刪除標誌設置為打開或關閉
        this.axios.delete(`${process.env.APIPATH}/api/Link/${id}`)
          .then((data) => {
          //Input parameters: userId
          console.log(data);
        }).catch(error => {
            console.log(error);          
          })
      },
		handleOk(bvModalEvt) {
			bvModalEvt.preventDefault();
			this.handleSubmit();
		},
		handleSubmit() {
			// this.$store.dispatch('users/deleteUser', { userId: this.dataSource.id });
			this.$nextTick(() => {
				this.userInput = '';
				this.$bvModal.hide('modal-delete-user');
			});
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
