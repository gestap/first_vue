<template>
  <footer>
    <section class="footer-menu">
      <div class="conteiner conteiner-footer">
        <div class="footer-menu-list">
          <p>Featured sale</p>
          <ul>
            <li>Alexis Hudson</li>
            <li>American Apparel</li>
            <li>Ben Sherman</li>
            <li>Big Buddha</li>
            <li>Chanel</li>
            <li>Christian Audigier</li>
            <li>Coach</li>
            <li>Cole Haan</li>
          </ul>
        </div>
        <div class="footer-menu-list">
          <p>Mens store</p>
          <ul>
            <li>Alexis Hudson</li>
            <li>American Apparel</li>
            <li>Ben Sherman</li>
            <li>Big Buddha</li>
            <li>Chanel</li>
            <li>Christian Audigier</li>
            <li>Coach</li>
            <li>Cole Haan</li>
          </ul>
        </div>
        <div class="footer-menu-list">
          <p>Women store</p>
          <ul>
            <li>Alexis Hudson</li>
            <li>American Apparel</li>
            <li>Ben Sherman</li>
            <li>Big Buddha</li>
            <li>Chanel</li>
            <li>Christian Audigier</li>
            <li>Coach</li>
            <li>Cole Haan</li>
          </ul>
        </div>
        <div class="footer-menu-list">
          <p>Quick links</p>
          <ul>
            <li>Alexis Hudson</li>
            <li>American Apparel</li>
            <li>Ben Sherman</li>
            <li>Big Buddha</li>
            <li>Chanel</li>
            <li>Christian Audigier</li>
            <li>Coach</li>
            <li>Cole Haan</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="footer-rights">
      <div class="conteiner">
        <p>Copyright © 2013 Css Author</p>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.footer-menu {
  color: white;
  background: var(--main-color);
  font-size: 0.7rem;
}

.conteiner-footer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.footer-menu-list {
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: left;
}

.footer-menu-list p {
  font-size: 1.28rem;
  margin-bottom: 30px;
  text-transform: uppercase;
}

.footer-menu-list ul {
  font-family: "Open Sans";
}

.footer-rights {
  background: #2da89b;
  color: white;
  font-family: "Open Sans";
  font-size: 0.7rem;
}

.footer-rights p {
  margin: 15px 0;
}
</style>

