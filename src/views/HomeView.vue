<template>
    <main class="hero-container">
        <section class="home-hero" id="home">
            <div class="home-hero__content">
                <h1 class="heading-primary">Hey, I'm Tiago Machado</h1>
                <div class="home-hero__info">
                    <p>A Web Developer building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall product</p>
                </div>
                <div class="home-hero__cta">
                    <a class="btn">Projects</a>
                </div>
                <div class="scroll-animation">
                    <div class="scrollDown">
                        <span></span>
                    </div>
                </div>
                
            </div>
        </section>

        <div class="home-hero__socials">
            <a href="https://www.linkedin.com/in/tiago-machado-07a86b1a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                <img src="../assets/img/social_icons/linkedin.png" alt="Logo Linkedin">
            </a>
            <a href="#">
                <img src="../assets/img/social_icons/twitter.png" alt="Logo Twitter" target="_blank">
            </a>
            <a href="https://www.instagram.com/xamssss?igsh=cXR5dnYzb2ttY2Fz" target="_blank">
                <img src="../assets/img/social_icons/instagram.png" alt="Logo Instagram">
            </a>
            <a href="https://www.facebook.com/tiago.machado.7771" target="_blank">
                <img src="../assets/img/social_icons/facebook.png" alt="Logo Facebook">
            </a>
            <a href="https://github.com/masterxamss/portfolio" target="_blank">
                <img src="../assets/img/social_icons/github.png" alt="Logo GitHub">
            </a>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'HomeView'
    }
</script>

<style scoped>

    /* HERO CONTAINER */

    .hero-container{
        background-image: url('../assets/img/bg.webp');
        height: 1000px;
    }

    .home-hero{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .home-hero__content{
        width: 50%;
        margin-top: 10em;
    }

    .heading-primary{
        text-align: center;
        font-size: 3em;
        margin-top: 0em;
        text-transform: uppercase;
        font-weight: bold;
    }

    .home-hero__info{
        text-align: center;
        margin-top: 5em;
        font-size: 1.2em;
        letter-spacing: .1em;
        padding: 1em;
        line-height: 1.5em;
        border: 1px solid var(--main-color);
        border-radius: 5px;
        background-color: hsla(0, 0%, 97%, 0.5);
        font-family: Roboto-regular;
        box-shadow: 0 0 10px #353434;
    }

    .home-hero__cta{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5em;
    }

    .btn{
        font-family: Roboto-Regular;
        text-transform: uppercase;
        background-color:var(--main-color);
        color: white;
        font-size: 1.2em;
        padding: .5em 2em;
        border-radius: 5px;
        text-decoration: none;
        transition:.5s;
        cursor: pointer;
    }

    .btn:hover{
        transform: translateY(-3px);
        box-shadow: 0 10px 20px #aaa8a8;
    }

    /* PANEL SOCIALS */

    .home-hero__socials{
        position: fixed;
        top: 150px;
        left: 1em;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: hsla(0, 3%, 92%);
        width: 50px;
        height: 400px;
        border-radius: 5px;
        border: 1px solid var(--main-color);
    }

    .home-hero__socials img:hover{
        transition: .5s;
        transform: translateY(-8px);
        box-shadow: 0 10px 20px #aaa8a8;
    }

    /* SCROLL DOWN INDICATOR */

    .scroll-animation{
        display: flex;
        justify-content: center;
        margin-top: 8em;
    }

    .scrollDown {
        width: 45px;
        height: 70px;
        border: var(--main-color) solid 2px;
        border-radius: 30px;
        display: flex;
        justify-content: center;
    }

    span {
        background-color: var(--main-color);
        width: 5px;
        height: 10px;
        border-radius: 30px;
        margin-top: 10px;
         position: relative;
    }

    span::before {
        position: absolute;
        content: '';
        width: 15px;
        height: 15px;
        border: none;
        border-right: 2px solid var(--main-color);
        border-top: 2px solid var(--main-color);
        transform: translateY(-10px) rotate(135deg);
        left: -6px;
        margin-top: 10px;
        opacity: 0;
        animation: ani 1.8s infinite linear;
    }

    span::after {
        position: absolute;
        content: '';
        width: 15px;
        height: 15px;
        border: none;
        border-right: 2px solid var(--main-color);
        border-top: 2px solid var(--main-color);
        transform: translateY(-10px) rotate(135deg);
        left: -6px;
        margin-top: 10px;
        opacity: 0;
        animation: ani 1.8s infinite linear;
        animation-delay: 0.8s;
    }

    @keyframes ani {
        0% {
            margin-top: 10px;
            opacity: 0;
        }

        50% {
            margin-top: 25px;
            opacity: 1;
        }

        100% {
            margin-top: 40px;
            opacity: 0;
        }
    } 

</style>
