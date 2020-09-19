<template>
  <div>

    <v-card v-if="results.length>0"
        max-width="1000px"
        class="mx-auto">
    <v-container fluid>
      <v-row dense>
        <v-col v-bind:key="result.thumbnail" v-for="result in results " cols="9" sm="4">
          <v-card dark @click="details(result.id)">
              <v-img :src="result.thumbnail" height="200px" >
                <v-card-title v-text="result.price"></v-card-title>
              </v-img>
              <div>
                <v-card-subtitle v-text="result.title"></v-card-subtitle>
              </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
      <div class="text-center">
        <v-container>
          <v-row justify="center">
            <v-col cols="8">
              <v-container class="max-width">
                <v-pagination
                  v-model="page"
                  class="my-4"
                  :length="pagination"
                  @input="changePage(index)"
                ></v-pagination>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
  </div>
</template>

<script src="./ProductList.js">

</script>