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
  >
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
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

    <!-- </form> -->
    <template
      #modal-cancel
      variant="outline-primary"
      class="cancel-btn"
    >
      {{ $t("GENERAL.CANCEL") }}
    </template>

    <template
      @click="EditName"
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
       }else{
         this.type =='Groups/EditGroupName'
       }
      // ${process.env.APIPATH}/api/Groups/EditGroupName

      //if user
      this.axios.post(`${process.env.APIPATH}/api/${this.type}/${this.tabData.id}`)
        .then((data) => {
          // {
          //   "id": "816eb044-087d-43b7-af15-090af7cd0d37",
          //   "userName": "ccnewname"
          // }
          console.log(data);

          this.personData.name = data.userName
        }).catch(error => {
          console.log(error);          
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
