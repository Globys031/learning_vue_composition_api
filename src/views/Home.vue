<template>
    <section class="container">
        <range-selector :products="filteredProducts" v-model="max" />
        <product-list :products="filteredProducts" />
    </section>
</template>

<script setup>
import ProductList from '@/components/ProductList.vue';
import RangeSelector from '@/components/RangeSelector.vue';

import { ref, computed, reactive } from 'vue';

let products = reactive([]);

// Straight up doesn't work if it's not wrapped in <suspense>
// (see app.vue)
await fetch('https://hplussport.com/api/products/order/price')
    .then((response) => response.json())
    .then((data) => {
        products = data;
    });

const max = ref(50);

const filteredProducts = computed(() => {
    return products.filter((item) => item.price < Number(max.value));
});
</script>

<!-- <script>
import ProductList from '@/components/ProductList.vue'
import RangeSelector from '@/components/RangeSelector.vue'

export default {
  name: 'Home',
  data: function() {
    return {
      max: 50,
      cart: []
    }
  },
  props: ['products'],
  components: {
    RangeSelector,
    ProductList
  },
  computed: {
    filteredProducts() {
      return this.products.filter(item => item.price < Number(this.max))
    }
  }
}
</script> -->
