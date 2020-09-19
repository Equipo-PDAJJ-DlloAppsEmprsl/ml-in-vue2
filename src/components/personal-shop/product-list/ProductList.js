import axios from "axios";

export default {
  data() {
    return {
      pagination: 0,
      search: 0,
      offset: 0,
      total: 0,
      loading: true,
      results: {},
      page: 1,
    };
  },
  created() {
    this.consult(this.$route.params.search, this.$route.params.offset);
  },
  watch: {
    $route(to) {
      this.consult(to.params.search, to.params.offset);
      console.log(to.params.search);
      this.search = to.params.search;
      this.offset = to.params.offset;
    },
  },
  methods: {
    details(id) {
      this.$router.push({
        name: "detail",
        params: { id },
      });
    },
    consult(search, offset) {
      axios
        .get(
          `https://api.mercadolibre.com/sites/MCO/search?q=${search}&offset=${offset}`
        )
        .then((result) => {
          this.total = result.data.paging.total;
          this.pagination = Math.ceil(result.data.paging.total / 50);
          this.results = result.data.results;
          this.loading = false;
        })
        .catch((err) => {
          console.log("falllo");
          console.log(err);
          this.loading = false;
        });
    },
    changePage(index) {
      const busqueda = this.$route.params.search;
      console.log(busqueda);
      const offset = (index - 1) * 50;
      console.log(offset);
      this.$router.push({
        name: "search",
        params: { search: busqueda, offset: offset },
      });
    },
  },
};