<template>
    <Header/>  
    <router-view/>
    <Footer />
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components:{
      Header,
      Footer
    }
  }
</script>

<style>

  :root{
    --main-color: #EB5E28;
    --header-bg-color: #ecebeb;
  }

  @font-face{
    font-family: 'Slabo-Regular';
    src: url(/src/assets/fonts/SlaboRegular/Slabo-Regular.ttf) format("truetype");
  }

  @font-face{
    font-family: 'Roboto-Regular';
    src: url(/src/assets/fonts/Roboto/Roboto-Regular.ttf) format("truetype");
  }

  @font-face{
    font-family: 'Roboto-Bold';
    src: url(/src/assets/fonts/Roboto/Roboto-Bold.ttf) format("truetype");
  }

  @font-face{
    font-family: 'Ubuntu-Regular';
    src: url(/src/assets/fonts/Ubuntu_Sans_Mono/static/UbuntuSansMono-Regular.ttf) format("truetype");
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  #app{
    font-family: Slabo-Regular;
    display: flex;
    flex-direction: column;
    min-width: 428px;
  }

  /* USEFUL CLASSES */
  .desc-section{
    text-align: center;
    font-family: Roboto-Regular;
    font-size: 1.2em;
    letter-spacing: .1em;
    margin-top: 2em;
  }


  .section-title{
    text-align: center;
    font-family: Slabo-Regular;
    font-size: 2em;
    border-bottom: 2px solid var(--main-color);
    width: fit-content;
  }
</style>
