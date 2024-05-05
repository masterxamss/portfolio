<template>
    <header class="main-header">
        <a href="#teste">
            <img :src="logo" :alt="alt" id="logo">
        </a>
        <nav>
            <!-- <router-link to="/">Home</router-link> -->
            <ul class="menu">
                <li>
                    <a href="#teste" class="menu-item">HOME</a>
                </li>
                <li>
                    <a href="#" class="menu-item">ABOUT</a>
                </li>
                <li>
                    <a href="#" class="menu-item">PROJECTS</a>
                </li>
                <li>
                    <a href="#" class="menu-item">CONTACT</a>
                </li>
            </ul>
        </nav>    
    </header>
</template>

<script>
    export default {
        name: 'Header',
        props:["logo","alt"],
    }
</script>


<style scoped>
    .main-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 7em;
        background-color: #ecebeb;
        box-shadow: 10px 0px 10px #353434;
        z-index: 1;
    }

    .menu{
        display: flex;
        list-style: none;
        margin-right:5em;
    }

    .menu-item{
        padding: 1em;
        text-decoration: none;
        font-weight: bold;
        font-family: Roboto-Bold;
        font-size: 18px;
        letter-spacing: .2em;
        color:#EB5E28;
        transition: .5s;
        margin:.2em;
    }

    .menu-item:hover{
        color: #000;
        text-decoration: underline;
        background-color: #eb5f28;
        border-radius: 5px;
    }

    #logo{
        width: 20em;
        margin-left: 5em;
    }

</style>