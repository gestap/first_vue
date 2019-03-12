<template>
  <header>
    <section class="top">
      <div class="conteiner-top">
        <p class="top-logo">Aditii</p>

        <input class="search" type="search">

        <div class="cart">
          <img src="../assets/cart.png" alt="cart">
          <p>$300</p>
        </div>
      </div>
    </section>
    <section class="navigation">
      <div class="conteiner">
        <nav class="nav">
          <ul>
            <router-link tag="li" to="/">
              <a>Home</a>
            </router-link>
            <router-link tag="li" to="/category/jeans">
              <a>Jeans</a>
            </router-link>
            <router-link tag="li" to="/category/handbags">
              <a>Handbags</a>
            </router-link>
            <router-link tag="li" to="/category/wallets">
              <a>Wallets</a>
            </router-link>
            <router-link tag="li" to="/category/accessories">
              <a>Accessories</a>
            </router-link>
            <router-link tag="li" to="/category/men_store">
              <a>Men Store</a>
            </router-link>
            <router-link tag="li" to="/category/shoes">
              <a>Shoes</a>
            </router-link>
            <router-link tag="li" to="/category/vintage">
              <a>Vintage</a>
            </router-link>
            <router-link tag="li" to="/services">
              <a>Services</a>
            </router-link>
            <router-link tag="li" to="/contact_us">
              <a>Contact us</a>
            </router-link>
          </ul>
        </nav>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.conteiner-top {
  display: flex;
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  max-width: 1024px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.top-logo {
  font-size: 2.3rem;
  color: var(--main-color);
  font-family: "Lobster1.4";
  padding-left: 20px;
}

.search {
  background: url(../assets/search_icon.png) no-repeat;
  background-position: right;
  background-size: contain;
  height: 30px;
  border: 1px solid #e1e1e1;
  width: 100%;
  max-width: 435px;
}

.cart {
  display: flex;
  align-items: center;
  color: #a1a1a1;
}

.cart p {
  font-size: 1.57rem;
  padding: 0 15px;
}

.conteiner {
  display: flex;
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.navigation {
  background: #4ccfc1;
  color: white;
  padding: 10px;
}

.nav ul {
  display: flex;
  justify-content: center;
}

.nav ul a {
  padding: 0 20px;
}

.nav ul li::after {
  content: "";
  border-left: 1px solid white;
}

.nav ul li:last-child::after {
  content: none;
}
</style>

