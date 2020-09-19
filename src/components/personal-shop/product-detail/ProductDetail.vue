<template>
<div class="product-list-cont">
  <v-container>
    <v-row>
      <v-col>
        <v-card max-width="400px">
          <v-carousel :show-arrows="false" height="400px">
            <v-carousel-item v-for="(item,i) in result.pictures" :key="i" :src="item.url"></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <v-col>
        <h1>{{result.title}}</h1>
        <h2>${{new Intl.NumberFormat().format(result.price)}}</h2>
        <div v-if="result.original_price">
          <h3>Se encuentra en descuento:</h3>
          <h3>Precio original: {{new Intl.NumberFormat().format(result.original_price)}}</h3>
        </div>
        <h3>{{reseller.nickname}}</h3>
        <h4></h4>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script src="./ProductDetail.js">
</script>
<style scoped>
@import url('./ProductDetail.css');
</style>