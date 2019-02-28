<template>
  <div class="products-card">
    <img class="products-card-img" src="../assets/tees.png" :alt="name">
    <p class="products-card-name">{{name}}</p>
    <p class="products-card-price">$ {{price}}</p>
    <p class="products-card-button">
      <a class="button_small_green" href="#">Buy now</a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      requred: true
    },
    name: {
      type: String,
      requred: true
    },
    price: {
      type: Number,
      requred: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
