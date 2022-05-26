<template>
  <b-modal
    id="RenameItem"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.RENAMEITEM')"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    body-bg-variant="bgmodal"
    footer-bg-variant="bgmodal"
    @ok="put"
  >
    <div class="modal-popout-bg p-3">
      <p class=" m-0">
        {{ $t("MODAL.ENTERNEWITEM") }}
      </p>
      <input
        type="email"
        class="form-control"
        :placeholder="$t( 'MODAL.PLEASEFILLOUTTHISFIELD')"
        v-model="personData.name"
      >
    </div>

    <p class="text-dark">
      {{ tabData }}
    </p>

    <template
      #modal-cancel
      variant="outline-primary"
      class="cancel-btn"
    >
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
import cmqRequest from '@/http/cmqRequest'

export default {
  name: "RenameItem",
  props: { 
    title: { type: String, default: "Rename Item" },
    tabData: { type: Object , default() { return {} }}
  },
  data() {
    return {
      showModal: false,
      personData: {},

    };
  },
  watch:{ 
    tabData(){ 
      this.personData = this.tabData 
    } 
  },
  methods: {
    put(){
      
      if(Object.prototype.hasOwnProperty.call(this.personData, "userName")) { 
        
        const data = JSON.stringify({
          "id": this.tabData.userId,
          "name": this.personData.name,
          "editorName": this.$store.getters.currentUser,
          "editor":this.$store.getters.userId,

        })
        console.log(data);

      cmqRequest.put(`${process.env.VUE_APP_USER_APIPATH}/api/Users/EditUserName`,data)
        .then(() => {
             this.personData = {}
            this.$swal.fire({ title: 'success', icon: 'success' })

        }).catch(error => {
            this.$swal.fire({ title: error.response.data, icon: 'error' })
        })


       }else if(Object.prototype.hasOwnProperty.call(this.personData, "groupName")){ 

          const data = JSON.stringify({
            "id": this.personData.id,
            "name": this.personData.name,
            "editor":  this.$store.getters.userId,
            "editorName":  this.$store.getters.currentUser
          })

          cmqRequest.put(`${process.env.VUE_APP_USER_APIPATH}/api/Groups/EditGroupName`,
          data)
          .then(() => { 
            this.$swal.fire({ title: 'success', icon: 'success' })

          }).catch(error => {
            this.$swal.fire({ title: error.response.data, icon: 'error' })
          })


         
         }else {
            const data = JSON.stringify({
              "id": this.personData.id || this.personData.folderId,
              "type": this.personData.type,
              "name": this.personData.name,
              "editor":  this.$store.getters.userId,
              "editorName":  this.$store.getters.currentUser,
              "groups": this.$store.getters.group

            })
            
            console.log('data',data);         


          cmqRequest.patch(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/Rename`,
          data)
          .then(() => { 
            this.$swal.fire({ title: 'success', icon: 'success' })


          }).catch(error => {
            this.$swal.fire({ title: error.response.data, icon: 'error' })
       
          })

         }

     
    },
  },
};
</script>
