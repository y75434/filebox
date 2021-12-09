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
    @ok="EditName"
  >
    <div class="modal-popout-bg p-3">
      <p class=" m-0">
        {{ $t("MODAL.ENTERNEWITEM") }}
      </p>
      <input
        type="email"
        class="form-control"
        :placeholder="$t( 'MODAL.PLEASEFILLOUTTHISFIELD')"
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
      personData: this.tabData,
      type: "",

    };
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
        .then((data) => {
          
          console.log(data);

          this.personData.name = data.userName
        }).catch(error => {
          console.log(error);          
        })

      },
    putFolder(){
      this.axios.patch(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement/EditFolder`)
      .then((data) => { 
        this.folderitems = data.data 
      }).catch(error => {
        console.log(error.response.data);        
      })
    },
    handleSubmit() {
      // this.$nextTick(() => {
      this.showModal = false;
      // });
    },
  },
};
</script>
