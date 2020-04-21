<template>
  <section>
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <b-table
          :data="data"
          :loading="loading"
          paginated
          backend-pagination
          :total="total"
          :per-page="perPage"
          @page-change="renderPosts"
          aria-next-label="Next page"
          aria-previous-label="Previous page"
          aria-page-label="Page"
          aria-current-label="Current page"
          backend-sorting
          :default-sort-direction="defaultSortOrder"
          :default-sort="[sortField, sortOrder]"
        >
          <template slot-scope="props">
            <b-table-column field="cards">
              <Card :data="props.row" id:="this.data.id"/>
            </b-table-column>
          </template>
        </b-table>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Card";

export default {
  data() {
    return {
      loading: false,
      sortField: "vote_count",
      sortOrder: "desc",
      defaultSortOrder: "desc",
      page: 1,
      perPage: 10
    };
  },
  methods: {
    renderPosts() {}
  },

  computed: {
    data: function() {
      this.loading = false;
      return this.$store.getters.getPostsState;
    },
    total: function() {
      return this.$store.getters.getPostsState.length;
    }
  },

  mounted() {
    this.loading = true;
    this.$store.dispatch("getPosts");
  },

  components: {
    Card
  }
};
</script>
