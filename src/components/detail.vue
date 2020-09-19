<template>
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
        <h3>{{seller.nickname}}</h3>
        <h4></h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: 0,
      result: {},
      seller: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    axios
      .get(`https://api.mercadolibre.com/items/${this.id}`)
      .then((result) => {
        this.result = result.data;
        axios
          .get("https://api.mercadolibre.com/users/" + result.data.seller_id)
          .then((response) => {
            this.seller = response.data;
            console.log(this.seller);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
