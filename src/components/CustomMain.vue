<template>
  <main>
    <section class="slider-top">
      <div class="conteiner" id="slick-slider_top">
        <div class="slider-element slider-element_marginBig">
          <div class="slider-element-photo">
            <img src="../assets/levis.png" alt="shirt" class="img_big">
          </div>
          <div class="slider-element-info">
            <h1>Cowhide
              <br>Standard Crew
            </h1>
            <p class="slider-element-info_smallText">
              White coloured, short-sleeved, printed T-shirt for men by Levi's.
              This crew-neck T-shirt is made of organic cotton and comes in a regular fit.
            </p>
            <p class="button_conteiner_big">
              <a href="#" class="button_big">Shop now</a>
            </p>
          </div>
        </div>
        <!-- <div class="slider-element slider-element_marginBig">
          <div class="slider-element-photo">
            <img src="../assets/levis.png" alt="shirt">
          </div>
          <div class="slider-element-info">
            <h1>Cowhide
              <br>Standard Crew
            </h1>
            <p class="slider-element-info_smallText">
              White coloured, short-sleeved, printed T-shirt for men by Levi's.
              This crew-neck T-shirt is made of organic cotton and comes in a regular fit.
            </p>
            <p class="button_conteiner_big">
              <a href="#" class="button_big">Shop now</a>
            </p>
          </div>
        </div>
        <div class="slider-element slider-element_marginBig">
          <div class="slider-element-photo">
            <img src="../assets/levis.png" alt="shirt">
          </div>
          <div class="slider-element-info">
            <h1>Cowhide
              <br>Standard Crew
            </h1>
            <p class="slider-element-info_smallText">
              White coloured, short-sleeved, printed T-shirt for men by Levi's.
              This crew-neck T-shirt is made of organic cotton and comes in a regular fit.
            </p>
            <p class="button_conteiner_big">
              <a href="#" class="button_big">Shop now</a>
            </p>
          </div>
        </div>
        <div class="slider-element slider-element_marginBig">
          <div class="slider-element-photo">
            <img src="../assets/levis.png" alt="shirt">
          </div>
          <div class="slider-element-info">
            <h1>Cowhide
              <br>Standard Crew
            </h1>
            <p class="slider-element-info_smallText">
              White coloured, short-sleeved, printed T-shirt for men by Levi's.
              This crew-neck T-shirt is made of organic cotton and comes in a regular fit.
            </p>
            <p class="button_conteiner_big">
              <a href="#" class="button_big">Shop now</a>
            </p>
          </div>
        </div>-->
      </div>
      <div class="slider-controls"></div>
    </section>

    <section class="slider-bottom">
      <div class="conteiner conteiner-grid" id="slick-slider">
        <div class="slider-element slider-element_border">
          <div class="slider-element-photo">
            <img src="../assets/shoes.png" alt>
          </div>
          <div class="slider-element-info">
            <p class="element_grey">Branded
              <br>shoes
            </p>
            <p class="button_conteiner_small">
              <a href class="button_small_green">Shop</a>
            </p>
          </div>
        </div>
        <div class="slider-element slider-element_border">
          <div class="slider-element-photo">
            <img src="../assets/tshirts.png" alt>
          </div>
          <div class="slider-element-info">
            <p class="element_grey">Branded
              <br>tshirts
            </p>
            <p class="button_conteiner_small">
              <a href class="button_small_green">Shop</a>
            </p>
          </div>
        </div>
        <div class="slider-element slider-element_border">
          <div class="slider-element-photo">
            <img src="../assets/pants.png" alt>
          </div>
          <div class="slider-element-info">
            <p class="element_grey">Branded
              <br>pants
            </p>
            <p class="button_conteiner_small">
              <a href class="button_small_green">Shop</a>
            </p>
          </div>
        </div>
        <div class="slider-element slider-element_border">
          <div class="slider-element-photo">
            <img src="../assets/shoes.png" alt>
          </div>
          <div class="slider-element-info">
            <p class="element_grey">Branded
              <br>shoes
            </p>
            <p class="button_conteiner_small">
              <a href class="button_small_green">Shop</a>
            </p>
          </div>
        </div>
        <div class="slider-element slider-element_border">
          <div class="slider-element-photo">
            <img src="../assets/tshirts.png" alt>
          </div>
          <div class="slider-element-info">
            <p class="element_grey">Branded
              <br>tshirts
            </p>
            <p class="button_conteiner_small">
              <a href class="button_small_green">Shop</a>
            </p>
          </div>
        </div>
        <div class="slider-element slider-element_border">
          <div class="slider-element-photo">
            <img src="../assets/pants.png" alt>
          </div>
          <div class="slider-element-info">
            <p class="element_grey">Branded
              <br>pants
            </p>
            <p class="button_conteiner_small">
              <a href class="button_small_green">Shop</a>
            </p>
          </div>
        </div>
      </div>
      <p class="prev"></p>
      <p class="next"></p>
    </section>

    <section class="name">
      <div class="conteiner">
        <h2>Featured products</h2>
      </div>
    </section>

    <section class="products">
      <custom-card-test></custom-card-test>
    </section>
  </main>
</template>

<script>
import CustomCardTest from "./CustomCardTest.vue";
export default {
  data() {
    return {};
  },
  components: {
    CustomCardTest
  }
};
</script>

<style>
.slider-top {
  background: var(--main-color);
  color: white;
  position: relative;
}

.slider-bottom {
  position: relative;
}

.slider-element {
  display: grid !important;
  grid-template-columns: 1fr 1fr;
}

.slider-element_marginBig {
  margin-top: 70px;
}

.slider-element-photo {
  margin: 0 auto;
}

.slider-element-info {
  text-align: left;
}

.slider-element-info h1 {
  font-size: 2.9rem;
}

.slider-element-info .slider-element-info_smallText {
  font-size: 0.8rem;
  font-family: "Open Sans";
  margin-top: 25px;
}

.slider-element-info .button_conteiner_big {
  margin-top: 43px;
  margin-bottom: 43px;
}

.slider-element-info .button_big {
  font-size: 1.28rem;
  border: 3px solid white;
  border-radius: 10px;
  padding: 10px 25px;
}

.conteiner-grid .slider-element {
  grid-template-rows: 150px;
  padding: 20px 0;
}

.conteiner-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.slider-element_border {
  border-left: 1px solid #e7e7e7;
}

.slider-element-info .element_grey {
  color: #afafaf;
  font-size: 1.28rem;
  text-transform: uppercase;
}

.button_small_green {
  color: white;
  background: #3cc395;
  padding: 10px 15px;
  border-radius: 3px;
}

.slider-element-info .button_conteiner_small {
  margin-top: 30px;
}

p.prev.slick-arrow,
p.next.slick-arrow {
  height: 100%;
  width: 150px;
  position: absolute;
  cursor: pointer;
  top: 25%;
}

p.prev.slick-arrow {
  background: url(../assets/prev.png) no-repeat;
  left: 30px;
}

p.next.slick-arrow {
  background: url(../assets/next.png) no-repeat;
  right: -50px;
}

.slider-controls {
  height: 40px;
}

.slider-controls .slick-dots {
  position: absolute;
  bottom: 30px;
}

.slider-controls .slick-dots li button::before {
  color: white;
  font-size: 10px;
  opacity: 1;
}

.slider-controls .slick-dots li.slick-active button::before {
  color: white;
  opacity: 0.5;
}

.name {
  background: var(--main-color);
  color: white;
  padding: 20px 0 15px 0;
}

.name .conteiner {
  justify-content: flex-start;
}

.name h2 {
  margin-left: 60px;
  font-size: 1.47rem;
}

.conteiner-products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 25px;
  margin-bottom: 45px;
}

.products-card {
  display: grid;
  grid-template-areas:
    "prod prod"
    "name name"
    "price button";
  grid-template-columns: 1fr 1fr;
  border: 1px solid #e7e7e7;
  border-bottom: 5px solid #3cc395;
  margin: 25px;
  color: #afafaf;
  width: 255px;
  height: 260px;
}

.products-card-img {
  grid-area: prod;
  margin: 20px auto;
  height: 120px;
}

.products-card-name {
  grid-area: name;
  font-size: 1.28rem;
}

.products-card-price {
  grid-area: price;
  margin-top: 20px;
  font-size: 1.28rem;
}

.products-card-button {
  grid-area: button;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>

