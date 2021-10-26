<template>
  <div class="w-100">
    <Splitpanes
      class="text-dark table"
      style="height: 100%"
    >
      <Pane
        :size="paneSize"
        class="d-flex align-items-start flex-column"
        min-size="10"
        max-size="25"
      >
        <div
          class="text-dark fw-bold w-100"
          style="background: #FAFAFA;"
        >
          <p class="text-center ">
            Name
          </p>
        </div>
        <div class="w-100">
          <p class="text-dark text-center">
            Rachel
          </p>
        </div>
      </Pane>
      <Pane
        :size="paneSize"
        class="d-flex align-items-start flex-column"
        min-size="10"
        max-size="25"
      >
        <div
          class="text-dark fw-bold w-100"
          style="background: #FAFAFA;"
        >
          <p class="text-center ">
            Full Name
          </p>
        </div>
        <div class="w-100">
          <p class="text-dark text-center">
            Rachel Lee
          </p>
        </div>
      </Pane>
      <Pane
        :size="paneSize"
        class="d-flex align-items-start flex-column"
        min-size="10"
        max-size="25"
      >
        <div
          class="text-dark fw-bold w-100"
          style="background: #FAFAFA;"
        >
          <p class="text-center ">
            Login Count
          </p>
        </div>
        <div class="w-100">
          <p class="text-dark text-center">
            Rachel Lee
          </p>
        </div>
      </Pane>
      <Pane
        :size="paneSize"
        class="d-flex align-items-start flex-column"
        min-size="10"
        max-size="25"
      >
        <div
          class="text-dark fw-bold w-100"
          style="background: #fafafa"
        >
          <p class="text-center ">
            Last Login Time
          </p>
        </div>
        <div class="w-100">
          <p class="text-dark text-center">
            25/02/2007 10:52 AM
          </p>
        </div>
      </Pane>
      <Pane
        :size="paneSize"
        class="d-flex align-items-start flex-column"
        min-size="10"
        max-size="25"
      >
        <div
          class="text-dark fw-bold w-100"
          style="background: #fafafa"
        >
          <p class="text-center ">
            Date Created
          </p>
        </div>
        <div class="w-100">
          <p class="text-dark text-center">
            25/02/2007 10:52 AM
          </p>
        </div>
      </Pane>
      <Pane
        :size="paneSize" 
        class="d-flex align-items-start flex-column"
        min-size="10"
        max-size="25"
      >
        <div
          class="text-dark fw-bold w-100"
          style="background: #fafafa"
        >
          <p class="text-center ">
            Date Modified
          </p>
        </div>
        <div class="w-100">
          <p class="text-dark text-center">
            25/02/2007 10:52 AM
          </p>
        </div>
      </Pane>
      <Pane
        :size="paneSize"
        min-size="10"
        max-size="25"
        class="d-flex align-items-start flex-column"
      >
        <div
          class="text-dark fw-bold w-100"
          style="background: #fafafa"
        >
          <p class="text-center ">
            Status
          </p>
        </div>
        <div class="w-100">
          <!-- <img
            src=""
            class=""
          > -->
          <p class="text-dark text-center">
            active
          </p>
        </div>
      </Pane>
    </Splitpanes>
  </div>
</template>

<script>
import { Splitpanes,Pane } from "splitpanes";


export default {
  name: "Home",
  components: {
    Splitpanes,
    Pane
  },
  data: () => ({
    

    paneSize: 200,
  }),
  mounted() {

  },
};
</script>

<style></style>
