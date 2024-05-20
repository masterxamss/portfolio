<template>
  <div v-show="modalActive" v-on:click.prevent.self="close" class="modal-shadow">
    <div class="modal-container">
      <div class="modal-header">
        <h1>{{ projectObject.name }}</h1>
        <span v-on:click.prevent.self="close" class="modal-close">X</span>
      </div>
      <div class="modal-content">
        <div class="modal-content__left">
          <iframe :src="projectObject.path_project"></iframe>
        </div>
        <div class="modal-content__right">
          <article>
            <h2>Technologies utilisées</h2>
              <div class="techs">
                <div v-for="(techs, index) in projectObject.technologies" :key="index">
                  <img id="tech-img" :src="require('../assets/img/technologies/' + techs.tech)" alt="">
                  <p>{{ techs.name }}</p>
                </div>
              </div>
          </article>
          <div class="modal-footer">
            <a v-on:click.stop class="modal-btn" :href="projectObject.path_project" target="_blank">Project</a>
            <a v-on:click.stop class="modal-btn" :href="projectObject.github" target="_blank">GitHub</a>
            <time :datetime="projectObject.date">{{ projectObject.date }}</time>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script defer>

export default {
  name: "Modal",

  props: {
    modalActive: Boolean,
    projectObject: Object,
  },

  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
  },
};
</script>

<style scoped>
.modal-shadow {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.329);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
}

.modal-container {
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
  background-image: url("../assets/img/bg.webp");
  border: 3px solid var(--main-color);
  border-radius: 10px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  background-color: var(--header-bg-color);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 1px 10px #353434;
  padding: 0 2em;
}

.modal-close {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: gray;
  font-family: Roboto-regular;
  font-size: 20px;
  padding: 1em;
}

.modal-close:hover {
  border-radius: 50%;
  background-color: var(--main-color);
  color: #fff;
}

.modal-content {
  display: flex;
  flex-direction: row;
  height: 90%;
  width: 100%;
}

.modal-content__left {
  width: 50%;
  height: 100%;
}

.modal-content__left iframe {
  height: 100%;
  width: 100%;
  border: none;
  border-bottom-left-radius: 10px;
}

.modal-content__right {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  overflow: scroll;
  color: rgb(99, 97, 97);
  border-left: 1px solid black;
}

.modal-content__right article {
  padding: 3em;
  height: 100%;
  font-family: Roboto-Regular;
  overflow: scroll;
}

.modal-content__right article p {
  text-align: justify;
  letter-spacing: 2px;
  line-height: 25px;
  margin-top: 2em;
}

.modal-content__right article h2 {
  font-family: Slabo-Regular;
}

.modal-content__right article h3 {
  margin-top: 2em;
  margin-bottom: 4em;
  font-family: Slabo-Regular;
}

.modal-content__right article ul {
  margin-top: 2em;
  margin-left: 2em;
}

.modal-content__right article li::marker {
  color: var(--main-color);
}

.techs {
  display: flex;
  margin-top:30%;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.techs div p {
  text-align: center;
}

.modal-footer {
  font-family: Roboto-Regular;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  padding: 1em;
  height: max-content;
  background-color: var(--header-bg-color);
  box-shadow: 0 1px 10px #353434;
  border-bottom-right-radius: 10px;
}

.modal-btn {
  font-family: Roboto-Regular;
  width: 100px;
  text-transform: uppercase;
  background-color: var(--main-color);
  color: white;
  font-size: 0.8em;
  padding: 0.5em 2em;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  transition: 0.5s;
  cursor: pointer;
  margin: 0.5em;
}

.modal-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px #aaa8a8;
}

@media screen and (max-width: 810px) {
.modal-content {
  display: flex;
  flex-direction: column;
}

.modal-content__right{
  width: 100%;
  border-top: 1px solid black;
}

.modal-content__left{
  width: 100%;
  border: none;
}

.modal-content__left iframe{
    border-bottom-left-radius: 0;
}

.modal-footer{
  display:flex;
  flex-direction: column;
}

}
</style>
