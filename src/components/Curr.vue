<template>
    {{ dollar(amt) }}
</template>

<script setup>
defineProps(['amt']);
function dollar(value) {
    return '$' + Number.parseFloat(value).toFixed(2);
}
</script>

<!-- <script>
export default {
  props: ['amt'],
  methods: {
    dollar(value) {
      return '$' + Number.parseFloat(value).toFixed(2)
    }
  }
}
</script> -->

<style></style>
