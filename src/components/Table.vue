<template>
  <div class="row w-100">
    <div class="col-12">
      <b-table
        hover
        :items="items"
        class="h5"
      />
    </div>
  </div>
</template>

<script>


export default {
  name: "Home",
  components: {
   
  },
  data: () => ({
    items: [
          { Name: 'Rachel',FullName:'rrrrr', LoginCount: 'Rachel Lee',LastLoginTime:'25/02/2007 10:52 AM', DateCreated:'25/02/2007 10:52 AM', DateModified:'25/02/2007 10:52 AM',Status:'active'},
          { Name: 'Rachel',FullName:'rrrrr', LoginCount: 'RachelLee',LastLoginTime:'25/02/2007 10:52 AM', DateCreated:'25/02/2007 10:52 AM',DateModified:'25/02/2007 10:52 AM',Status:'active'},
          { Name: 'Rachel',FullName:'rrrrr', LoginCount: 'RachelLee',LastLoginTime:'25/02/2007 10:52 AM', DateCreated:'25/02/2007 10:52 AM',DateModified:'25/02/2007 10:52 AM',Status:'active'}

        ],

    paneSize: 200,
  }),
  mounted() {

  },
};
</script>

<style>

thead{
  background-color: #fafafa;
}

</style>
