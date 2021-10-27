<template>
  <div class="">
    <AdminNav />
    <div class="dqbz-body">
      <!-- main -->
    

      <Splitpanes style="height: 100%">
        <Pane
          :size="paneSize"
          min-size="10"
          max-size="25"
        >
          <div class="w-100 text-dark d-flex align-items-start h-100">
            <ul class=" list-unstyled w-100">
              <li class="d-flex align-items-center w-100">
                <img
                  class="adminsidebar-icon"
                  src="@/assets/images/icon/usermanagement@2x.png"
                >
                <p class="m-0">
                  User Management
                </p>
              </li>
        
              <li class="d-flex align-items-center">
                <img
                  class="adminsidebar-icon"
                  src="@/assets/images/icon/group management@2x.png"
                >

                <p class="m-0">
                  Group Management
                </p>
              </li>
              <li class="d-flex align-items-center">
                <img
                  class="adminsidebar-icon"
                  src="@/assets/images/file/root folder@2x.png"
                >

                <p class="m-0">
                  Root Folders
                </p>
              </li>
              <li class="d-flex align-items-center">
                <img
                  class="adminsidebar-icon"
                  src="@/assets/images/file/publiclink@2x.png"
                >

                <p class="m-0">
                  Public Links
                </p>
              </li>
            </ul>
          </div>
          <button
            style="background-color:#F4F4F4;width:30px; height:30px;"
            class=""
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
          >
            <img
              src="@/assets/images/arrow/arrow-down@2x.png"
              style=""
            >
          </button>

          <div
            style=" max-width: 25%; background-color:#F4F4F4;"
            class="offcanvas offcanvas-bottom"
            tabindex="-1"
            id="offcanvasBottom"
            aria-labelledby="offcanvasBottomLabel"
          >
            <ul
              class="text-dark small"
              :size="paneSize"
              style=""
            >
              <li class="d-flex align-items-center">
                <img src="@/assets/images/file/app setting@2x.png">
                <h5
                  class="offcanvas-title"
                >
                  Application Settings
                </h5>
              </li>
              <li class="d-flex align-items-center">
                <img src="@/assets/images/icon/license info@2x.png">

                <h5
                  class="offcanvas-title"
                >
                  License Information
                </h5>
              </li>
              <li class="d-flex align-items-center">
                <img src="@/assets/images/icon/about@2x.png">

                <h5
                  class="offcanvas-title"
                >
                  About FileVista
                </h5>
              </li>
            </ul>
          </div>
        </Pane>
        <Pane
          :size="100 - paneSize"
          class=" flex-column"
        >
          <userTitle />
          <Table />
        </Pane>
      </Splitpanes>
    </div>
  </div>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import AdminNav from "@/components/AdminNav.vue";
import Table from '../components/Table.vue';
import userTitle from '../components/title/userTitle.vue'



export default {
name: "Admin",
  components: {
    Splitpanes,
    Pane,
    AdminNav,
    Table,
    userTitle
  },
  data: () => ({
    

    paneSize: 15,
  }),
  mounted() {

  },
};

</script>

<style>

</style>
