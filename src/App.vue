<template>
  <div>
    <custom-header></custom-header>
    <router-view></router-view>
    <custom-footer></custom-footer>
  </div>
</template>



<script>
import CustomHeader from "./components/CustomHeader.vue";
import CustomFooter from "./components/CustomFooter.vue";

export default {
  components: {
    CustomHeader,
    CustomFooter
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  box-sizing: border-box;
  font-family: "Bebas Neue";
}
html {
  font-size: 21px;
}
:root {
  --main-color: #3cc3b5;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
