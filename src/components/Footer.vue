<template>
    <footer>
        <section class="footer-container_1">
            <div class="footer-content">
                <h2>Digital Symbiosis</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequuntur ad at enim odio tenetur rem hic nulla nihil</p>
            </div>
            <div class="footer-social">
                <h2>Social</h2>
                <span>
                    <a href="#"><img src="../assets/img/social_icons/github.png" alt="Logo GitHub"></a>
                </span>
                <span>
                    <a href="#"><img src="../assets/img/social_icons/facebook.png" alt=""></a>
                </span>
                <span>
                    <a href="#"><img src="../assets/img/social_icons/instagram.png" alt=""></a>
                </span>
                <span>
                    <a href="#"><img src="../assets/img/social_icons/twitter.png" alt=""></a>
                </span>
                <span>
                    <a href="#"><img src="../assets/img/social_icons/linkedin.png" alt=""></a>
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
        height: 15em;
        width: 100%;
        background-color: rgb(0, 0, 0);
        border-top: 2px solid #EB5E28;
        font-family: Roboto-Regular;
        color:#EB5E28;
    }
    
    .footer-container_1{
        display: flex;
        width: 50%;
    }

    .footer-content{
        width:50%;
    }

    .footer-content h2{
        margin-bottom: .5em;
    }

    .footer-social{
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