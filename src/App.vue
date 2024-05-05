<template>
    <Header :logo="logo_src" :alt="alt_name"/>  
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
    },

    data(){
      return{
        logo_src: '/logo.png',
        alt_name: 'Logo'
      }
    }
  }
</script>

<style>
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

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  #app{
    font-family: Slabo-Regular;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
