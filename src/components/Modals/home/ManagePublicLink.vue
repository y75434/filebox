<template>
  <b-modal
    id="ManagePublicLink"
    class="modal-content"
    body-text-variant="warning"
    body-bg-variant="bgmodal"
    centered
    :title="$t('TITLE.MANAGEPUBLICLINK')"
    header-bg-variant="bgheader"
    ok-variant="primary"
    size="lg"
    footer-bg-variant="white"
    @contextmenu="handler($event)"
    ok-only
  >
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
    <div
      class="modal-popout-bg bg-bgmodal p-3"
    >
      <div class="text-dark d-flex justify-content-between">
        <h4 class="fw-bold">
          photoshop-transparent-image-2.psd
        </h4>
        <div class="d-flex align-items-center">
          <h5 class="fw-bold mx-2">
            25
          </h5>
          <h5>Public Links</h5>
        </div>
      </div>
      <div
        class="w-100 mt-4 overflow-scroll"
        @contextmenu="showMenu($event)"
      >
        <!-- @contextmenu="operational($event)" @row-selected="rowSelected" -->
        <table class="table">
          <thead>
            <tr class="modal-tr">
              <th scope="col">
                Name
              </th>
              <th scope="col">
                Linked Item
              </th>
              <th scope="col">
                Created By
              </th>
              <th scope="col">
                Hit Count
              </th>
              <th scope="col">
                Last Hit Time
              </th>
              <th scope="col">
                Expiration
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr>
              <th scope="row">
                5vnak/bemkq/wallpaper-1.jpg
              </th>
              <td>5vnak/bemkq/wallpaper-1.jpg</td>
              <td>https://demos.google.com/admin/public...</td>
              <td>admin</td>
              <td>5</td>
              <td>25/02/2007 10:52 AM</td>
            </tr>
            <tr>
              <th scope="row">
                5vnak/bemkq/wallpaper-1.jpg
              </th>

              <td>5vnak/bemkq/wallpaper-1.jpg</td>
              <td>https://demos.google.com/admin/public...</td>
              <td>admin</td>
              <td>5</td>
              <td>25/02/2007 10:52 AM</td>
            </tr>
            <tr>
              <th scope="row">
                5vnak/bemkq/wallpaper-1.jpg
              </th>

              <td>5vnak/bemkq/wallpaper-1.jpg</td>
              <td>https://demos.google.com/admin/public...</td>
              <td>admin</td>
              <td>5</td>
              <td>25/02/2007 10:52 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- </form> -->
   
    <ContextMenu ref="menuLink">
      <ul class="text-dark">   
        <li @click="EditPublicLink">
          <img
            src="@/assets/images/icon/user setting@2x.png"
            class="icon24px"
          >{{ $t("GENERAL.ATTRIBUTES") }}
        </li>
        <li @click="DeleteUser">
          <img
            src="@/assets/images/cmd/delete@2x-2.png"
            class="icon24px"
          >{{ $t("HOME.DELETE") }}
        </li>
      </ul>
    </ContextMenu>
    <EditPublicLink ref="EditPublicLink" />
    <delete-user ref="DeleteUser" />

    <template #modal-ok>
      {{ $t("GENERAL.CLOSE") }}
    </template>
  </b-modal>
</template>

<script>
import ContextMenu from '@/components/ContextMenu.vue';
import EditPublicLink from'@/components/Modals/link/EditPublicLink.vue';
import DeleteUser from '@/components/Modals/user/DeleteUser.vue';

export default {
  name: 'ImportUser',
  props: { title: { type: String, default: 'Manage Public Link' }, 
  },
  components:{ 
    DeleteUser,
    ContextMenu,
    EditPublicLink

  },
  data() {
     return {
      showModal: false
     }
   },
   created(){
    this.getUser()
   },
   methods: {
    handler(event) { event.preventDefault(); },//todo無法右鍵
    operational(event) {
      event.preventDefault();
      event.stopPropagation();
    }, 
    DeleteUser(){ this.$bvModal.show('modal-delete-user'); },
    EditPublicLink(){ this.$bvModal.show('EditPublicLink'); },
    rowSelected(items) {
      this.selected = items[0]
      console.log(this.selected);
    
    },
    showMenu(event) {
      this.$refs.menuLink.open(event);
    },
     getUser(){
      // let promise = this.axios.get('/some/url')
      //   return promise.then((data) => {
      //     const items = data.items       
      //     return(items)
      //   }).catch(error => {
      //     return []
      //   })
     },
     handleSubmit() {
			// this.$nextTick(() => {
        this.showModal = false
			// });
		},
   }
}
</script>

