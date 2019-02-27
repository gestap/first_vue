<template>
  <div class="conteiner conteiner-products">
    <div class="products-card" v-for="product in products" :key="product">
      <img class="products-card-img" :src="product.img" :alt="product.title">
      <p class="products-card-name">{{product.title}}</p>
      <p class="products-card-price">$ {{product.price}}</p>
      <p class="products-card-button">
        <a class="button_small_green" href="#">Buy now</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          img: "@assets/shoes.png",
          title: "shoes",
          price: "200",
          count: "0"
        },
        {
          img: "../assets/tees.png",
          title: "tees",
          price: "150",
          count: "0"
        },
        {
          img: "../assets/pants.png",
          title: "pants",
          price: 250,
          count: 0
        },
        {
          img: "../assets/tshirts.png",
          title: "tshirts",
          price: 300,
          count: 0
        }
      ]
    };
  }
};
</script>

<style>
</style>
