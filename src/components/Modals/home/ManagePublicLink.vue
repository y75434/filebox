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
        <h4 class="fw-bold">
          {{ tabData.name }}
        </h4>
        <div class="d-flex align-items-center">
          <h5 class="fw-bold mx-2">
            {{ count }}
          </h5>
          <h5>
            {{ this.$t('GENERAL.PUBLICLINK') }}
          </h5>
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
                {{ this.$t('MODAL.NAMEINLINK') }}
              </th>
              <th scope="col">
                {{ this.$t('MODAL.CREATOR') }}
              </th>
              <th scope="col">
                Url
              </th>
              <!-- <th scope="col">
                {{ this.$t('MODAL.PASSWORDSWILLEXPIRE') }}
              </th> -->
            </tr>
          </thead>
          <tbody class="bg-white ">
            <tr
              v-for="item in linkitems"
              :key="item.id"
              @mouseover="rowSelected(item)"
              @dblclick="checkOpen(item)"
            >
              <th scope="row">
                {{ item.name }}
              </th>
              <td>{{ item.creatorName }}</td>
              <td>{{ item.url }}</td>
              <!-- <td>{{ item.viewed }}</td> -->
              <!-- <td>{{ item.expire }}</td> -->
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
      :del-data="selected"
    />

    <template #modal-ok>
      {{ $t("GENERAL.CLOSE") }}
    </template>
    <openLink :link-id="selected.linkId" />
  </b-modal>
</template>

<script>
import ContextMenu from '@/components/ContextMenu.vue';
import EditPublicLink from'@/components/Modals/link/EditPublicLink.vue';
import DeleteUser from '@/components/Modals/user/DeleteUser.vue';
import openLink from'@/components/Modals/link/openLink.vue';
import cmqRequest from "@/http/cmqRequest"

export default {
  name: 'ImportUser',
  props: {
    tabData: { type: Object , default() { return {} }}
  },
  components:{ 
    DeleteUser,
    ContextMenu,
    EditPublicLink,
    openLink
  },
  data() {
     return {
      count: 0,
      linkitems: {},
      selected: {},
     }
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
    start(){
      console.log(this.tabData);        
      const id = this.tabData.id
      this.getLinkTable(id)
    },
    getLinkTable(id){
      cmqRequest.get(`${process.env.VUE_APP_LINKS_APIPATH}/api/Link/LinksByFile/${id}`)
        .then((data) => { 
          console.log(data);        

          this.linkitems = data.data 
          this.count = this.linkitems.length
        }).catch(error => {
          console.log(error.response.data);        
        })
    },
    checkOpen(item) { 
      console.log(item);

      window.open(item.url,'_blank').focus();
      
      }

    },   
  //  }
}
</script>

