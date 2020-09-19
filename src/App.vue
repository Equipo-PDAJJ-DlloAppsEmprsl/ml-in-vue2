<template>
  <div>
    <ShopHeader/>
    <router-view></router-view>
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

