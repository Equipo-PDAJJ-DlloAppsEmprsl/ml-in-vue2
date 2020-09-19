<template>
  <div>
    <ShopHeader/>
    <div class="product-list-cont">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import ShopHeader from '@/components/personal-shop/shop-header/ShopHeader.vue';

export default {
  name: "App",

  components: {
    ShopHeader
  },
  data: () => ({}),
};
</script>

<style scoped>
.product-list-cont {
    display: flex;
    justify-content: center;
}
</style>