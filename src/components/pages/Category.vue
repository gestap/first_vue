<template>
  <div>
    <custom-product-card v-for="product in objCategory" :key="product.index" :name="product.name"></custom-product-card>
  </div>
</template>

<script>
import CustomProductCard from "../CustomProductCard.vue";
import axios from "axios";
export default {
  data() {
    return {
      categoryName: this.$route.params.categoryName,
      objCategory: null
    };
  },
  components: {
    CustomProductCard
  },
  created() {
    axios
      .get(`https://test-proj.free.beeceptor.com/${this.categoryName}`)
      .then(data => {
        this.objCategory = data.data;
        console.log(this.objCategory);

        return this.objCategory;
      });
  }
};
</script>