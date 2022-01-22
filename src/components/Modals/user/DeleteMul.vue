<template>
  <b-modal
    id="deleteMul"
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

          <strong class="text-danger"> {{ mulData }}</strong>
        </h5>
        <h5 class="text-dark mb-3">
          {{ $t("MODAL.PLEASETYPE") }}
        </h5>
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

        <button
          @click="deleteMul"
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
	name: 'DeleteMul',
	props: {
    mulData: { type: Array , default() { return [] }}

	},
	data() {
		return {   
      mul:[]
		};
  },
  watch:{ 
    mulData(){ 
      this.mul = this.mulData
    } 
  },
 
	methods: {
    deleteMulUser() {  
      this.axios.delete(`${process.env.VUE_APP_USER_APIPATH}/api/Users/DeleteMultipleUser`
      ,{data:{ "guids": this.mul,"editor": this.$store.getters.userId,"editedBy":this.$store.getters.currentUser}})
        .then(() => {
          this.$nextTick(() => { this.userInput = '';
          this.$bvModal.hide('deleteMulUser'); });

          // console.log(data);
      }).catch(error => {
          console.log(error);          
        })
    },
    deleteMulGroup() {  
      this.axios.delete(`${process.env.VUE_APP_USER_APIPATH}/api/Users/DeleteMultipleGroups`
      ,{data:{ "guids": this.mul,"editor": this.$store.getters.userId,"editedBy":this.$store.getters.currentUser}})
        .then(() => {
          this.$nextTick(() => { this.userInput = '';
          this.$bvModal.hide('deleteMulUser'); });

          // console.log(data);
      }).catch(error => {
          console.log(error);          
        })
    },
		cancel() {
      this.$bvModal.hide('deleteMulUser');
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
