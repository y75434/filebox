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
    ok-only
  >
    <div
      class="modal-popout-bg bg-bgmodal p-3"
    >
      <div class="text-dark d-flex justify-content-between">
        <!-- 會跳紅先註解 -->
        <!-- <h4 class="fw-bold" v-if="linkitems[0].name !== undefined">
          {{ linkitems[0].name }}
        </h4> -->
        <div class="d-flex align-items-center">
          <h5 class="fw-bold mx-2">
            {{ count }}
          </h5>
          <h5>Public Links</h5>
        </div>
      </div>
      <div
        class="w-100 mt-4 overflow-scroll height-400"
        @contextmenu.prevent="handler($event)"
      >
        <table
          class="table overflow-scroll "
          @contextmenu="showMenu($event)"
        >
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
          <tbody class="bg-white ">
            <tr
              v-for="item in linkitems"
              :key="item.id"
              @mouseover="rowSelected(item)"
              @dblclick="EditPublicLink"
            >
              <th scope="row">
                {{ item.name }}
              </th>
              <td>{{ item.creator }}</td>
              <td>{{ item.url }}</td>
              <td>{{ item.viewed }}</td>
              <td>{{ item.dateModified }}</td>
              <td>{{ item.expire }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

   
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
    <EditPublicLink
      ref="EditPublicLink"
      :tab-data="selected"
    />
    <delete-user
      ref="DeleteUser"
      :tab-data="selected"
    />

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
      count: 0,
      linkitems: {},
      selected: {},
     }
   },
   created(){
    this.getLinkTable()
   },
   methods: {
    handler(event) { event.preventDefault(); },
    operational(event) {
      event.preventDefault();
      event.stopPropagation();
    }, 
    DeleteUser(){ this.$bvModal.show('modal-delete-user'); },
    EditPublicLink(){ this.$bvModal.show('EditPublicLink'); },
    rowSelected(item) {
      this.selected = item
      // console.log('147' ,this.selected); 
    },
    showMenu(event) {
      this.$refs.menuLink.open(event);
    },
    
    getLinkTable(){
      this.axios.get(`${process.env.VUE_APP_LINKS_APIPATH}/api/Link/GetAll`)
        .then((data) => { 
          this.linkitems = data.data 
          this.count = this.linkitems.length
        }).catch(error => {
          console.log(error.response.data);        
        })
    }
   }
}
</script>

