<template>
  <b-modal
    id="modal-delete-user"
    centered
    title="Delete Account"
    header-bg-variant="danger"
    header-text-variant="light"
    hide-header-close
    no-close-on-backdrop
    no-close-on-esc
    @ok="handleOk"
    @cancel="cancel"
  >
    <div class="p-3">
      <h5 class="text-dark mb-3">
        Delete
        <!-- <strong class="text-danger"> {{ dataSource.name }}</strong> -->
        , are you sure?
      </h5>
      <h5 class="text-dark mb-3">
        Please type the following to confirm:
      </h5>
      <p>
      <!-- <code>{{ dataSource.name }}</code> -->
      </p>
      <input
        class="form-control"
        type="text"
        v-model="userInput"
      >
    </div>
    
    <template #modal-ok>
      Yes
    </template>
  </b-modal>
</template>
<script>
export default {
	name: 'DeleteUser',
	props: {
		// dataSource: { type: Object, require: true },
	},
	data() {
		return {
			userInput: '',
		};
	},
	computed: {
		// delFormValidity() {
		// 	return this.dataSource.name !== this.userInput;
		// },
	},
	methods: {
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
