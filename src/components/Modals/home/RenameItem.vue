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
    @ok="putFolder"
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
    
     EditName () {  
      console.log(this.personData.name);

      if(Object.prototype.hasOwnProperty.call(this.personData, "userName")) { 
        this.type =='Users/EditUserName'
       }else if(Object.prototype.hasOwnProperty.call(this.personData, "userName")){
         this.type =='Groups/EditGroupName'
       }else if(Object.prototype.hasOwnProperty.call(this.personData, "userName")){ 
         this.type =='Groups/EditGroupName' 
         }

      // ${process.env.APIPATH}/api/Groups/EditGroupName

      //if user
      this.axios.post(`${process.env.APIPATH}/api/${this.type}/${this.tabData.id}`)
        .then(() => {
          
      
        }).catch(error => {
          console.log(error);          
        })

      },
    putFolder(){
      const headers = { 
        'Content-Type': 'application/json', 
        'Accept':'application/json', 
        'Access-Control-Allow-Origin': '*' 
      }; 
      const data = JSON.stringify(
        {
          "id": this.personData.folderId,
          "name": this.personData.name,
          "editor": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        }
        )
      //editor之後改

      this.axios.patch(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/RenameFolder`,
      data,{ headers: headers })
      .then(() => { 
      }).catch(error => {
        console.log(error.response.data);        
      })
    },
  },
};
</script>
