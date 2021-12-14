<template>
  <b-modal
    id="DeleteFolder"
    class="modal-content justify-content-center d-flex"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.DELETEFOLDER')"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    footer-bg-variant="bgmodal"
    body-bg-variant="bgmodal"
  >
    <div class="modal-popout-bg p-5 justify-content-center d-flex flex-column ">
      <img
        class="mx-auto  m-0"
        src="@/assets/images/cmd/alarm@2x.png"
      >
      <h5 class="text-center m-0">
        {{ $t("MODAL.SURETODELETE") }}
      </h5>
           
            
      <h5 class="text-center my-2 font-weight-bold">
        {{ tabData.name }}
      </h5>

      <p class="text-dark">
        {{ tabData }}
      </p>

      <input
        type="text"
        class="form-control"
        v-model="personData.name"
      >
    </div>

    

    <template #modal-footer>
      <div class="w-100 justify-content-center d-flex">
        <button
          type="button"
          class="sm-btn cancel-btn mx-3 btn justify-content-center d-flex"
        >
          {{ $t("GENERAL.CANCEL") }}
        </button>

        <button
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
  name: "DeleteFolder",
  props: { 
    title: { type: String, default: "Delete Folder" } ,
    tabData: { type: Object , default() { return {} }}
  },
  data() {
    return {
      personData: {},
    };
  },
   watch:{ 
    tabData(){ 
      this.personData = this.tabData 
    } 
  },
  methods: {
    deleteFolder(){
    const headers = { 
      'Content-Type': 'application/json', 
      'Accept': 'application/json',
      "Access-Control-Allow-Origin": '*' 
      };
    // {"items": [ { id: "item.id", "type": 0 } ], "editor": "vuex.user.id"}

    const data = JSON.stringify(this.personData)

    this.axios.delete(`${process.env.VUE_APP_FOLDER_APIPATH}/DocManagement`,data,{ headers: headers })
      .then((data) => {     
        console.log(data);
      }).catch(() => {
        // console.log(error.response.data);        
      })
    },
  },
};
</script>


