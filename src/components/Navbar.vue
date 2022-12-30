<template>
    <nav class="navbar navbar-light sticky-top mr-3">
        <div
            v-if="cart.length"
            class="w-100 navbar-text ml-auto d-flex justify-content-end position-relative"
        >
            <div
                class="mr-auto d-flex align-items-end flex-column bd-highlight mb-3 position-absolute"
            >
                <div class="mb-2">
                    <span class="font-weight-bold bg-white">
                        <curr :amt="cartTotal"></curr>
                    </span>
                    <button
                        @click="toggleCartMenu"
                        class="btn btn-sm btn-success ml-3"
                        id="cartDropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <fa icon="shopping-cart" />
                        {{ cartQty }}
                    </button>
                </div>
                <cart-dropdown :cart="cart" :displayCart="displayCart" />
            </div>
        </div>
    </nav>
</template>

<script setup>
import Curr from '@/components/Curr.vue';
import CartDropdown from '@/components/CartDropdown.vue';

import { ref } from 'vue';

const displayCart = ref(false);
defineProps(['cart', 'cartTotal', 'cartQty']);

function toggleCartMenu() {
    displayCart.value = !displayCart.value;
}
</script>

<!-- <script>
import Curr from '@/components/Curr.vue'
import CartDropdown from '@/components/CartDropdown.vue'
export default {
  data: function() {
    return {
      displayCart: false
    }
  },
  props: ['cart', 'cartTotal', 'cartQty'],
  components: {
    Curr,
    CartDropdown
  },
  methods: {
    toggleCartMenu() {
      this.displayCart = !this.displayCart
    }
  }
}
</script> -->
