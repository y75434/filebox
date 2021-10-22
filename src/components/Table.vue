<template>
  <div
    class="w-100
"
  >
    <Splitpanes
      class=""
      style="height: 10%"
    >
      <!-- <Pane
        :size="paneSize"
        
      >
        <p class="text-dark fw-bold" style="background: #FAFAFA;">
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
      </Pane> -->
    
    
    
    
      <table class="table text-dark">
        <thead>
          <tr>
            <th scope="col">
              #
            </th>
            <th scope="col">
              First
            </th>
            <th scope="col">
              Last
            </th>
            <th scope="col">
              Handle
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              1
            </th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">
              2
            </th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">
              3
            </th>
            <td colspan="2">
              Larry the Bird
            </td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </Splitpanes>
  </div>
</template>

<script>
import { Splitpanes } from "splitpanes";


export default {
  name: "Home",
  components: {
    Splitpanes,
    // Pane
  },
  data: () => ({
    

    paneSize: 200,
  }),
  mounted() {

  },
};
</script>

<style></style>
