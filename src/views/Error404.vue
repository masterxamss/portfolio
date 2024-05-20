<template>
  <div class="container-error">
    <div class="error-404">
      <img src="../assets/img/404.png" alt="image 404">
      <router-link to="/" class="back-btn"> Retour Home page </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error404",
};
</script>

<style>
.container-error {
  display: flex;
  justify-content: center;
  width: 100vw;
  background-image: url("../assets/img/bg.webp");
}

.error-404 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10em;
}

.back-btn {
  background-color: aqua;
  width: fit-content;
  margin: 3em;
  font-family: Roboto-Regular;
  text-transform: uppercase;
  background-color: var(--main-color);
  color: white;
  font-size: 0.8em;
  padding: 0.5em 2em;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.5s;
  cursor: pointer;
}

.back-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px #aaa8a8;
}

@media screen and (max-width: 810px) {
  .error-404 img{
    width: 80%;
  }
}
</style>
