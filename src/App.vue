<template>
    <div>
        <navbar
            :cart="cart"
            :cart-total="cartTotal"
            :cart-qty="cartQty"
            @delete-item="deleteItem"
        />
        <div class="container">
            <suspense>
                <router-view
                    :cart="cart"
                    @addItem="addItem"
                    @delete-item="deleteItem"
                />
            </suspense>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref, reactive, computed } from 'vue';

import Navbar from '@/components/Navbar.vue';
import HelloWorld from './components/HelloWorld.vue';

const cart = reactive([]);

function addItem(product) {
    let whichProduct;
    let existing = cart.filter(function (item, index) {
        if (item.product.id == Number(product.id)) {
            whichProduct = index;
            return true;
        } else {
            return false;
        }
    });
    if (existing.length) {
        cart[whichProduct].qty++;
    } else {
        cart.push({ product: product, qty: 1 });
    }
}

function deleteItem(id) {
    if (cart[id].qty > 1) {
        cart[id].qty--;
    } else {
        cart.splice(id, 1);
    }
}

const cartTotal = computed(() => {
    let sum = 0;
    for (let key in cart) {
        sum = sum + cart[key].product.price * cart[key].qty;
    }
    return sum;
});

const cartQty = computed(() => {
    let qty = 0;
    for (let key in cart) {
        qty = qty + cart[key].qty;
    }
    return qty;
});
</script>

<!-- <script lang="ts">
import Navbar from '@/components/Navbar.vue';
export default {
    data: function () {
        return {
            cart: [],
            products: [],
        };
    },
    components: {
        Navbar,
    },
    created() {
        fetch('https://hplussport.com/api/products/order/price')
            .then((response) => response.json())
            .then((data) => {
                this.products = data;
            });
    },
    methods: {
        addItem(product) {
            let whichProduct;
            let existing = this.cart.filter(function (item, index) {
                if (item.product.id == Number(product.id)) {
                    whichProduct = index;
                    return true;
                } else {
                    return false;
                }
            });

            if (existing.length) {
                this.cart[whichProduct].qty++;
            } else {
                this.cart.push({ product: product, qty: 1 });
            }
        },
        deleteItem: function (id) {
            if (this.cart[id].qty > 1) {
                this.cart[id].qty--;
            } else {
                this.cart.splice(id, 1);
            }
        },
    },
    computed: {
        cartTotal() {
            let sum = 0;
            for (let key in this.cart) {
                sum = sum + this.cart[key].product.price * this.cart[key].qty;
            }
            return sum;
        },
        cartQty: function () {
            let qty = 0;
            for (let key in this.cart) {
                qty = qty + this.cart[key].qty;
            }
            return qty;
        },
    },
};
</script> -->

<style lang="scss">
$primary: #6f42c1;
@import 'node_modules/bootstrap/scss/bootstrap';
</style>
