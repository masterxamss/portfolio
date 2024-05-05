<template>
    <footer>
        <section class="footer-container_1">
            <div class="footer-content">
                <h2>Digital Symbiosis</h2>
                <p>A Web Developer building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall product</p>
            </div>
            <div class="footer-social">
                <h2>Social</h2>
                <span>
                    <a href="https://github.com/masterxamss/portfolio" target="_blank">
                        <img src="../assets/img/social_icons/github.png" alt="Logo GitHub">
                    </a>
                </span>
                <span>
                    <a href="https://www.facebook.com/tiago.machado.7771" target="_blank">
                        <img src="../assets/img/social_icons/facebook.png" alt="Logo Facebook">
                    </a>
                </span>
                <span>
                    <a href="https://www.instagram.com/xamssss?igsh=cXR5dnYzb2ttY2Fz" target="_blank">
                        <img src="../assets/img/social_icons/instagram.png" alt="Logo Instagram">
                    </a>
                </span>
                <span>
                    <a href="#">
                        <img src="../assets/img/social_icons/twitter.png" alt="Logo Twitter" target="_blank">
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/tiago-machado-07a86b1a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                        <img src="../assets/img/social_icons/linkedin.png" alt="Logo Linkedin">
                    </a>
                </span>
            </div>
        </section>
        <div class="footer-container_2">
            <p><small>Copyright &copy; 2024 . Made By Tiago Machado</small></p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height:fit-content;
        width: 100%;
        background-color: rgb(0, 0, 0);
        border-top: 2px solid var(--main-color);
        font-family: Roboto-Regular;
        color:var(--main-color);
    }
    
    .footer-container_1{
        display: flex;
        width: 50%;
    }

    .footer-content{
        margin-top: 1em ;
        width:50%;
    }

    .footer-content h2{
        margin-bottom: .5em;
    }

    .footer-social{
        margin-top: 1em;
        width: 50%;
        text-align: right;
    }

    .footer-social span{
        margin-left: .5em;
    }

    .footer-social h2{
        margin-bottom: .5em;
    }

    .footer-container_2{
        margin-top: 1.5em;
        width:50%;
        text-align: center;
        border-top: 1px solid;
        padding: 1em;
    }
</style>