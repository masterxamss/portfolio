<template>
    <header class="main-header">
        <a href="#home">
            <img :src="logo" :alt="alt" id="logo">
        </a>
        <nav>
            <!-- <router-link to="/">Home</router-link> -->
            <ul class="menu">
                <li>
                    <a href="#home" class="menu-item">HOME</a>
                </li>
                <li>
                    <a href="#about" class="menu-item">ABOUT</a>
                </li>
                <li>
                    <a href="#projects" class="menu-item">PROJECTS</a>
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
        height: 8em;
        background-color: var(--header-bg-color);
        box-shadow: 0 1px 10px #353434;
        position: sticky;
        top: 0px;
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
        font-family: Roboto-Regular;
        font-size: 18px;
        letter-spacing: .2em;
        color:var(--main-color);
        transition: .5s;
        margin:.2em;
    }

    .menu-item:hover{
        color: #000;
        text-decoration: underline;
        background-color:var(--main-color);
        border-radius: 5px;
    }

    #logo{
        width: 20em;
        margin-left: 5em;
    }

</style>