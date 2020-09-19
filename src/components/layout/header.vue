
<template>
  <v-card color="yellow lighten-1" flat height="200px" tile>
    <v-app-bar color="dyellow lighten-1" dense dark>
      <v-toolbar-title @click="home">Mercado Libre</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" v-on:keyup.enter="searchs" label="Search" />
      <v-btn icon v-on:click="searchs">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
  </v-card>
</template>
<script>
export default {
  name: "Header",
  components: {},
  data: () => ({ search: "" }),
  methods: {
    searchs() {
      this.$router.push({
        name: "search",
        params: { search: this.search, offset: 0 },
      });
      this.search = "";
    },
    home() {
      this.$router.push({
        name: "mainPage",
      });
    },
  },
};
</script>
