<template>
  <header>
    <div class="main-header">
      <router-link to="/">
        <img class="logo" src="../assets/img/logo.png" alt="logo" />
      </router-link>
      <nav>
        <ul class="menu">
          <li>
            <img :src="require('../assets/img/' + menuOpen)" alt="image menu" id="menu-icon" @click="openMenu()">
          </li>
          <li class="menu-item">
            <a href="#home">HOME</a>
          </li>
          <li class="menu-item">
            <a href="#about">ABOUT</a>
          </li>
          <li class="menu-item">
            <a href="#projects">PROJECTS</a>
          </li>
          <li class="menu-item">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuOpen: "burger-bar.png",
    };
  },

  methods: {
    openMenu() {
      const items = document.querySelectorAll(".menu-item");
      const menu = document.querySelector("#menu-icon");

      items.forEach((item) => {
        if (item.style.display === "block") {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }
      });

      if (this.menuOpen === "burger-bar.png") {
        this.menuOpen = "close.png";
        menu.src = require("../assets/img/" + this.menuOpen);
      } else {
        this.menuOpen = "burger-bar.png";
        menu.src = require("../assets/img/" + this.menuOpen);
      }
    },
    resizeMenu() {
      window.onresize = () => {
        const w = window.innerWidth;
        const items = document.querySelectorAll(".menu-item");
        const menu = document.querySelector("#menu-icon");

        if (w >= 811) {
          items.forEach((item) => {
            item.style.display = "block";
            this.menuOpen = "burger-bar.png";
            menu.src = require("../assets/img/" + this.menuOpen);
          });
        } else {
          items.forEach((item) => {
            item.style.display = "none";
            this.menuOpen = "burger-bar.png";
            menu.src = require("../assets/img/" + this.menuOpen);
          });
        }
      };
    },
  },
  mounted() {
    this.resizeMenu();
  },
};
</script>

<style scoped>
@media screen and (min-width: 811px) {
  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 8em;
    background-color: var(--header-bg-color);
    box-shadow: 0 1px 10px #353434;
    position: fixed;
    top: 0px;
    z-index: 1;
    overflow: scroll;
  }

  .menu {
    display: flex;
    list-style: none;
    margin-right: 5em;
  }

  .menu li:first-child {
    display: none;
  }

  .menu-item a {
    padding: 1em;
    text-decoration: none;
    font-family: Ubuntu-Regular;
    font-size: 18px;
    letter-spacing: 0.2em;
    color: var(--main-color);
    transition: 0.5s;
    margin: 0.2em;
  }

  .menu-item a:hover {
    color: #000;
    text-decoration: underline;
    background-color: var(--main-color);
    border-radius: 5px;
  }

  .logo {
    width: 300px;
    margin-left: 5em;
  }
}

@media screen and (max-width: 810px) {
  .main-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    background-color: var(--header-bg-color);
    box-shadow: 0 1px 10px #353434;
    position: fixed;
    top: 0px;
    z-index: 1;
  }

  .logo {
    width: 150px;
    position: fixed;
    top:3px;
    left:10px;
  }

  .main-header nav {
    width: 100%;
    font-family: Ubuntu-Regular;
  }

  .menu {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
  }

  .menu li {
    margin-right: 1em;
  }

  .menu-item {
    align-self: flex-start;
    display: none;
    width: 100%;
  }

  .menu-item a {
    display: block;
    text-decoration: none;
    color: var(--main-color);
    padding: .3em;
    width: 100%;
    
  }

  .menu-item a:hover {
    color: #ffff;
    background-color: var(--main-color);
    transition: .5s;
  }

  #menu-icon {
    cursor: pointer; }
}
</style>
