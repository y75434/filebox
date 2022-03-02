<template>
  <b-modal
    id="DeleteMul"
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
        <!-- <h5 class="text-dark mb-3">
          {{ $t("HOME.DELETE") }}

          <strong class="text-danger"> {{ mulData }}3333</strong>
        </h5> -->
        <h5 class="text-dark mb-3">
          確認刪除？
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
    deleteMul(bvModalEvt) {
      bvModalEvt.preventDefault()
      //只有user group有muti
      if('userName' in this.mul[0]) {
        this.deleteMulUser(this.mul)    
      }
      else if('groupName' in this.mul[0]){
        this.deleteMulGroup(this.mul) 
      }

        this.$bvModal.hide('DeleteMul'); 
        //this.$parent.getTable()//不能

      
    },
    deleteMulUser() {  
      this.mul = this.mul.map(x=>x.userId) 
      console.log(this.mul);

      this.axios.delete(`${process.env.VUE_APP_USER_APIPATH}/api/Users/DeleteMultipleUser`
      ,{data:{ "guids": this.mul,"editor": this.$store.getters.currentUser,"editedBy":this.$store.getters.userId}})
        .then(() => {
          this.$nextTick(() => { this.$bvModal.hide('DeleteMul'); });

          // console.log(data);
      }).catch(error => {
          console.log(error);          
        })
     
     
     setTimeout(() => {this.$emit('reload');},2000)
       

    },
    deleteMulGroup() {

      this.mul = this.mul.map(x=>x.groupId)
      console.log(this.mul);
      
  
      this.axios.delete(`${process.env.VUE_APP_USER_APIPATH}/api/Users/DeleteMultipleGroups`
      ,{data:{ "guids": this.mul,"editor": this.$store.getters.currentUser,"editedBy":this.$store.getters.userId}})
        .then(() => {
          this.$nextTick(() => { this.$bvModal.hide('DeleteMul'); });

          // console.log(data);
      }).catch(error => {
          console.log(error);          
        })

      setTimeout(() => {this.$emit('reload');},2000)

    },
		cancel() {
      this.$bvModal.hide('DeleteMul');
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
