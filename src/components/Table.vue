<template>
  <div class="w-100">
    <Splitpanes
      class="text-dark"
      style="height: 100%"
    >
      <Pane
        :size="paneSize"
        style="background: #FAFAFA;"
      >
        <p
          class="text-dark fw-bold"
          style="background: #FAFAFA;"
        >
          Name
        </p>
        <ul>
          <li>
            <p class="text-dark">
              Rachel
            </p>
          </li>
        </ul>
      </Pane>
      <Pane
        :size="paneSize"
        

        class=""
      >
        <p class="text-dark fw-bold">
          Full Name
        </p>
        <ul>
          <li>
            <p class="text-dark">
              Rachel Lee
            </p>
          </li>
        </ul>
      </Pane>
      <Pane
        :size="paneSize"
       

        class=""
      >
        <p class="text-dark fw-bold">
          Login Count
        </p>
        <ul>
          <li>
            <p class="text-dark">
              Rachel Lee
            </p>
          </li>
        </ul>
      </Pane>
      <Pane
        :size="paneSize"
        

        class=""
      >
        <p class="text-dark fw-bold">
          Last Login Time
        </p>
        <ul>
          <li>
            <p class="text-dark">
              25/02/2007 10:52 AM
            </p>
          </li>
        </ul>
      </Pane>
      <Pane
        :size="paneSize"
        

        class=""
      >
        <p class="text-dark fw-bold">
          Date Created
        </p>
        <ul>
          <li>
            <p class="text-dark">
              25/02/2007 10:52 AM
            </p>
          </li>
        </ul>
      </Pane>
      <Pane
        :size="paneSize" 
       

        class=""
      >
        <p class="text-dark fw-bold">
          Date Modified
        </p>
        <ul>
          <li>
            <p class="text-dark">
              25/02/2007 10:52 AM
            </p>
          </li>
        </ul>
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
