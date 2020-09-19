<template>
  <v-card class="overflow-hidden">
    <v-app-bar>
      <div>
        <v-img class="ml-logo" :src="require('@/assets/ml.png')" />
      </div>
      <v-toolbar-title @click="home" class="titulo" >Gallito Shop</v-toolbar-title>
      <v-spacer></v-spacer>
     <v-text-field
        class="mx-4"
        flat
        hide-details
        solo-inverted
        v-model="search"
         v-on:keyup.enter="searchs"
        
      ></v-text-field>
        <v-btn icon v-on:click="searchs">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <div>
        <v-img class="aniversario" :src="require('@/assets/aniversario.png')" />
      </div>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-8"
      class="overflow-y-auto"
      max-height="600"
    >
    </v-sheet>
  </v-card>
</template>
<script>
export default {
  name: "CustomHeader",

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
<style scoped>
@import "./ShopHeader.css";
</style>