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
          @page-change="onPageChange"
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
              <Card :data="props.row" />
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
      data: [],
      total: 0,
      loading: false,
      sortField: "vote_count",
      sortOrder: "desc",
      defaultSortOrder: "desc",
      page: 1,
      perPage: 10
    };
  },
  methods: {
    /*
     * Load async datapr
     */
    loadAsyncData() {
      this.loading = true;
      this.$http
        .get(`http://localhost:3000/posts`)
        .then(({ data }) => {
          this.data = [];
          let currentTotal = data.length;
          let postsOnPage = 10;
          if (data.length / this.perPage > postsOnPage) {
            currentTotal = this.perPage * postsOnPage;
          }
          this.total = currentTotal;
          data.forEach(post => {
            this.data.push(post);
            this.$store.commit("setClaps", { claps: post.claps, id: post.id });
          });
          this.loading = false;
        })
        .catch(error => {
          this.data = [];
          this.total = 0;
          this.loading = false;
          throw error;
        });
    },
    /*
     * Handle page-change event
     */
    onPageChange(page) {
      this.page = page;
      this.loadAsyncData();
    }
  },

  mounted() {
    this.loadAsyncData();
  },

  components: {
    Card
  }
};
</script>
