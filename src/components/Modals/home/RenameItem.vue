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
      type: "",

    };
  },
  watch:{ 
    tabData(){ 
      this.personData = this.tabData 
    } 
  },
  methods: {
    put(){
      const headers = { 
        'Content-Type': 'application/json', 
        'Accept':'application/json', 
        'Access-Control-Allow-Origin': '*' 
      }; 


      if(Object.prototype.hasOwnProperty.call(this.personData, "userName")) { 
        

          const data = JSON.stringify({
            "id": this.tabData.userId,
            "name": this.personData.name
          })
          console.log(data);

      this.axios.put(`${process.env.VUE_APP_USER_APIPATH}/api/Users/EditUserName`,data,{ headers: headers })
        .then(() => {
             this.personData = {}
            console.log('success');

        }).catch(error => {
          console.log(error);          
        })

       }else if(Object.prototype.hasOwnProperty.call(this.personData, "folderId")){
            const data = JSON.stringify({
              "id": this.personData.folderId,
              "name": this.personData.name,
              "editor": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
            })
          //editor之後改

          this.axios.patch(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/RenameFolder`,
          data,{ headers: headers })
          .then(() => { 
          }).catch(error => {
            console.log(error.response.data);        
          })

       }else if(Object.prototype.hasOwnProperty.call(this.personData, "name")){ 

          const data = JSON.stringify({
            "id": this.personData.id,
            "name": this.personData.name,
          })

          this.axios.put(`${process.env.VUE_APP_USER_APIPATH}/api/Groups/EditGroup`,
          data,{ headers: headers })
          .then(() => { 
          }).catch(error => {
            console.log(error.response.data);        
          })


         console.log('group');
         
         }


     
    },
  },
};
</script>
