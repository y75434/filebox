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
          <div class="treeview text-dark d-flex align-items-start h-100">
            <ul class="mb-1 list-unstyled">
              <li class="">
                <h6>Favourites</h6>
              </li>
        
              <li>
                <h6>Favourites</h6>
              </li>
              <li>
                <h6>Feature Tests</h6>
              </li>
              <li>
                <h6>Another Root Folder</h6>
              </li>
            </ul>
          </div>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
          >
            Toggle bottom offcanvas
          </button>

          <div
            :size="paneSize"

            class="offcanvas offcanvas-bottom"
            tabindex="-1"
            id="offcanvasBottom"
            aria-labelledby="offcanvasBottomLabel"
          >
            <div
              class="offcanvas-body text-dark small"
              :size="paneSize"
            >
              <div class="">
                <h5
                  class="offcanvas-title"
                  id="offcanvasBottomLabel"
                >
                  Application Settings
                </h5>
              </div>
              <div class="">
                <h5
                  class="offcanvas-title"
                  id="offcanvasBottomLabel"
                >
                  Application Settings
                </h5>
              </div>
            </div>
          </div>
        </Pane>
        <Pane
          :size="100 - paneSize"
          class="d-flex align-items-start justify-content-start flex-column"
        >
          <Title />
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
import Title from '../components/Title.vue'



export default {
name: "Admin",
  components: {
    Splitpanes,
    Pane,
    AdminNav,
    Table,
    Title
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
