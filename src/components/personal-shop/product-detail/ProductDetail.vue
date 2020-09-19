<template>
<div class="product-list-cont">
  <v-container>
       <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-card max-width="1000px">
          <v-carousel :show-arrows="false" height="400px">
            <v-carousel-item v-for="(item,i) in result.pictures" :key="i" :src="item.url"></v-carousel-item>
          </v-carousel>
        </v-card>
    <v-card-subtitle class="pb-0">{{result.title}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{reseller.nickname}}</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

  </v-card>
  </v-container>
  </div>
</template>

<script src="./ProductDetail.js">
</script>
<style scoped>
@import url('./ProductDetail.css');
</style>