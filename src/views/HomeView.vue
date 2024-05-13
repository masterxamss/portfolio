<template>
    <main class="main-container">
        <section class="home-hero" id="home">
            <div class="home-hero__content">
                <h1 class="home-hero__title">Hey, I'm Tiago Machado</h1>
                <div class="home-hero__info">
                    <p>A student Web developer who builds Frontend and Backend Websites, looking for opportunities to learn and grow in order to keep up to date with the latest trends and technologies in the sector.</p>
                </div>
                <div class="home-hero__cta">
                    <a href="#projects" class="btn">Projects</a>
                </div>
                <div class="scroll-animation">
                    <div class="scrollDown">
                        <span></span>
                    </div>
                </div>
            </div>
        </section>
        <!-- ABOUT SECTION -->
        <section class="about-container" id="about">
            <div class="about-container__content">
                <h2 class="section-title">About Me</h2>
                <p class="desc-section">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                <div class="about-separator">
                    <div class="about-details">
                        <h3>Come and get to know me</h3>
                        <p>
                            Since the beginning of my journey in web development, I've been diving headfirst into the study of programming languages such as <i>HTML</i>, <i>CSS</i> and <i>JavaScript</i> to build intuitive and attractive interfaces. At the same time, I've explored popular frameworks and libraries such as <i>React</i>, <i>Vue.js</i> and <i>Angular</i> to create dynamic and responsive experiences that captivate users.
                            As far as the backend is concerned, I have ventured into the world of server and API development, using technologies such as <i>Node.js</i>, <i>Express</i> and <i>MongoDB</i> to create robust and scalable systems that boost the functionality of web applications.
                        </p>
                        <div>
                            <a class="about-details__btn">Contact me</a>
                            <a href="/cv/CV_TiagoMachado.pdf" download="CV_TiagoMachado.pdf" class="about-details__btn">My CV</a>
                        </div>
                    </div>
                    <div class="about-skills">
                        <h3>My Skills</h3>
                        <span class="techs"  v-for="techs in technologies" :key="techs.id">{{ techs.name }}</span>
                    </div>
                </div>
            </div>
        </section>
          <!-- PROJECTS SECTION -->
        <section class="projects-container" id="projects">
            <div class="projects-container__content">
                <h2 class="section-title">Projects</h2>
                <p class="desc-section">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                <div class="projects-cards">    
                    <div class="card" v-for="(project, index) in projects" :key="project.id" >
                        <div class="card-img">
                            <img :src="project.path_img" :alt="project.desc_img">
                        </div>
                        <div class="card-title">
                            <h4>{{ project.name }}</h4>
                            <button id="myBtn" class="modalBtn" @:click="toggleModale" v-on:click.prevent.self="projectObject = projects[index]">View Details</button>
                        </div>
                    </div>    
                </div>
            </div>
            <!-- @close="toggleModale"  -->
            <Modal @close="toggleModale" :modalActive="modalActive" :projectObject="projectObject"/>
            <!-- :projects="projects"  -->

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

<script defer>

    import Modal from '@/components/Modal';
    import {ref} from 'vue';

    export default {
        name: 'HomeView',
        components:{
            Modal
        },
        setup(){
            const modalActive = ref(false);

            const toggleModale = () => {
                modalActive.value = !modalActive.value;
            }

            return{ modalActive, toggleModale};
        },
        data(){
            return{
                technologies: null,
                projects: [],
                projectObject: {}
            }
        },
        methods:{
            async getTechnologies(){
                const req = await fetch('http://localhost:3000/technologies');
                const data = await req.json();
                this.technologies = data;
            },

            async getProjects(){
                const req = await fetch('http://localhost:3000/projects');
                const data = await req.json();
                this.projects = data;
            },

        },
        created(){
            this.getTechnologies();
            this.getProjects();
        },
    }
</script>

<style scoped>

    .main-container{
        background-image: url('../assets/img/bg.webp');
        /* position: relative; */
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

    /* HERO CONTAINER */

    .home-hero{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: fit-content;
    }

    .home-hero__content{
        width: 50%;
        margin-top: 10em;
    }

    .home-hero__title{
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

    .scrollDown span {
        background-color: var(--main-color);
        width: 5px;
        height: 10px;
        border-radius: 30px;
        margin-top: 10px;
        position: relative;
    }

    .scrollDown span::before {
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

    .scrollDown span::after {
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
    
    /* ABOUT SECTION */

    .about-container{
        display: flex;
        justify-content: center;
        width: 100%;
        padding-top:10em;
    }

    .about-container__content{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .about-separator{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 3em;
        gap: 2em;
        width: 80%;
    }

    .about-details{
        flex: 1 0 300px;
        font-family: Roboto-Regular;
        font-size: 1.2em;
        letter-spacing: .1em;
        text-align: justify;
        padding: 1em;
        border: 1px solid var(--main-color);
        border-radius: 15px;
        background-color: hsla(0, 0%, 97%, 0.5);
        box-shadow: 0 0 10px #353434;
        margin-bottom: 3em;
        color: #747272
    }

    .about-details i{
        color: var(--main-color);
    }

    .about-details h3{
        margin-bottom: .5em;
        color: black;
        font-family: Roboto-Bold;
    }

    .about-details p{
        margin-bottom: 2em;
    }

    .about-details div{
        display: flex;
        justify-content: space-between;
    }

    .about-details__btn{
        font-family: Roboto-Regular;
        text-transform: uppercase;
        background-color:var(--main-color);
        color: white;
        font-size: .8em;
        padding: .5em 2em;
        border-radius: 5px;
        text-decoration: none;
        transition:.5s;
        cursor: pointer;
    }

    .about-details__btn:hover{
        transform: translateY(-3px);
        box-shadow: 0 10px 20px #aaa8a8;
    }
    .about-skills{
        flex: 1 0 300px;
        font-family: Roboto-Regular;
        font-size: 1.2em;
        letter-spacing: .1em;
        padding: 1em;
        border: 1px solid var(--main-color);
        border-radius: 15px;
        background-color: hsla(0, 0%, 97%, 0.5);
        box-shadow: 0 0 10px #353434;
        margin-bottom: 3em;
    }

    .about-skills h3{
        margin-bottom: .5em;
        font-family: Roboto-Bold;
    }

    .techs{
        display: inline-block;
        padding: 1em;
        border-radius: 5px;
        background-color: var(--header-bg-color);
        margin: 6px ;
        border: 1px solid var(--main-color);
    }

    /* PROJECTS SECTION */

    .projects-container{
        width: 100%;
        padding-top:10em;
    }

    .projects-container__content{
        display: flex;
        align-items: center;
        flex-direction: column;
        
    }

    .projects-cards{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width:80%;
        padding: 2em;
        gap: 2em;
        margin-top: 2em;
    }

    .card{
        flex-grow: 1;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        height: 300px;
        border-radius: 5px;
        border: 1.5px solid var(--main-color);
        font-family: Roboto-Regular;
        color:rgb(15, 15, 15);
    }

    .card:hover{
        transform: translateY(-10px) scale(1.005) translateZ(0);
        transition: ease-in-out .5s;
        box-shadow: 5px 5px 15px #353434;
    }

    .card-img{
        width: 100%;
        height: 90%;
    }
    .card-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .1px;
        padding: .5em;
        height: 10%;
        background-color: var(--header-bg-color);
        border-radius: 0 0 5px 5px;
        border-top: 1px solid var(--main-color);
    }

    .card img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        /* opacity: 0; */
    }

    .modalBtn{
        background-color: var(--main-color);
        border: 1px solid var(--main-color);
        border-radius: 5px;
        padding: .2em 1em;
        cursor: pointer;
        color:#fff;
    }

    .modalBtn:hover{
        background-color: #eb5f286b;
    }



    /* .modal-content{
        background-color: rgba(0, 0, 0, 0.329);
        position:absolute;
        top:0;
        right: 0;
        left: 0;
        bottom: 0;
    } */

</style>
