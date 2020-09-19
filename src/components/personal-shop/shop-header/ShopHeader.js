export default {
    name: "CustomHeader",
  
    components: {},
    data: () => ({ search: "" }),
    methods: {
      searchs() {
        this.$router.push({
          name: "products",
          params: { search: this.search, offset: 0 },
        });
        this.search = "";
      },
      home() {
        this.$router.push({
          name: "MainView",
        });
      },
    },
  };