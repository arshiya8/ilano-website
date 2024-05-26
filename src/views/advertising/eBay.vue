<template>
    <MouseFollower />
    <Navbar />

    <div class="container-fluid text-center lh-sm" style="margin-top: 200px; margin-bottom: 250px; ">
        <div style="font-family: 'Montserrat', sans-serif; font-size: 3rem;">
            eBay
        </div>
        <div style="font-family: 'Mohave', sans-serif; font-size: 5.5rem;">
            eBay Your Privilege
        </div>
        <div style="font-family: 'Montserrat', sans-serif; font-size: 1.5rem;">
            Risk Their Wrath for a cause. 
        </div>
        <button type="button" class="btn btn-outline-light rounded-pill"
            style="margin-top: 20px; font-family: 'Andale Mono', sans-serif; padding: 5px 10px; font-size: medium;">
            Digital, OOH</button>
    </div>

    <div class="flex justify-content-center align-items-center">
        <div class="text-left lh-sm">
            <div style="font-family: 'hey-eloise', sans-serif; font-weight: 400; font-style: normal; font-size: 3rem; ">
                01 | BRIEF
            </div>
            <div style="font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 2.6rem;">
                With the UK being the home of eBay's biggest <br>supporters, eBay wants Gen Z in the UK to sell <br>
                their
                preloved items
                and be the first platform <br> that Gen Z goes to sell their items in an <br> eco friendly way.
            </div>
        </div>
    </div>

    <div class="flex justify-content-center align-items-center" style="margin: 80px 0px; margin-bottom: 180px;">
        <div class="text-left lh-sm">
            <div style="font-family: 'hey-eloise', sans-serif; font-weight: 400; font-style: normal; font-size: 3rem; ">
                02 | DESCRIPTION
            </div>
            <div style="font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 2.5rem;">
               Nepo babies are controversially one of the <br/> most talked about topics for the Gen Z because <br/>
               of their cheat code to success. So, we turned <br/> their attention towards helping UK's <br/> homeless problem.
            </div>
        </div>
    </div>


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

    <div class="bg-white container-fluid text-black"
    style="border-top-right-radius: 85px; border-top-left-radius: 85px;position: relative;">
        <div class="image-wrapper2" >
            <img src="/layouts/assets.png"  width="250px" />
        </div>
        <div class="row" style="padding-top: 80px;" >
            <div class="col" style="margin-left: 50px;">
                <div class="d-flex align-items-center">
                    <i class="material-symbols-outlined"
                        style="background-color: black; color: white; border-radius: 50%; padding: 20px; font-size: 60px;">
                        image</i>
                    <p class="my-auto" style="margin-left: 20px; font-family: 'Mohave', sans-serif; font-size: 2rem; ">
                        OOH/Social Media
                    </p>
                </div>
            </div>
            <div class="col-8" style="margin-top: 30px;">
                <hr>
            </div>
        </div>
        <!-- <div class="logos">
            <div class="logos-slide">
                <img src="/layouts/nepo.png" style="width: 275px; height: 424px; ;" />
                <img src="/layouts/p3.png" style="width: 275px; height: 424px;  " />
                <img src="/layouts/ig3.png" style="width: 275px; height: 290px;  " />
                <img src="/layouts/maya.png" style="width: 275px; height: 424px; " />               
                <img src="/layouts/p2.png" style="width: 275px; height: 424px; " />
                <img src="/layouts/ig1.png" style="width: 275px; height: 290px; " />
                <img src="/layouts/brook.png" style="width: 275px; height: 424px;  " />
                <img src="/layouts/gracie.png" style="width: 275px; height: 424px; " />
                <img src="/layouts/ig2.png" style="width: 275px; height: 290px; " />
                <img src="/layouts/p1.png" style="width: 275px; height: 424px; " />
            </div>
            <div class="logos-slide">
                <img src="/layouts/nepo.png" style="width: 275px; height: 424px; " />
                <img src="/layouts/p3.png" style="width: 275px; height: 424px;  " />
                <img src="/layouts/ig3.png" style="width: 275px; height: 290px;  " />
                <img src="/layouts/maya.png" style="width: 275px; height: 424px; " />               
                <img src="/layouts/p2.png" style="width: 275px; height: 424px;  " />
                <img src="/layouts/ig1.png" style="width: 275px; height: 290px; " />
                <img src="/layouts/brook.png" style="width: 275px; height: 424px;  " />
                <img src="/layouts/gracie.png" style="width: 275px; height: 424px; " />
                <img src="/layouts/ig2.png" style="width: 275px; height: 290px;" />
                <img src="/layouts/p1.png" style="width: 275px; height: 424px; " />
            </div>
        </div> -->

        <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'"
            :coverflowEffect="{
            rotate: 15,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false,
        }" loop="true" :modules="modules" :spaceBetween="30" :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }" :pagination="{
            clickable: true,
        }" :navigation="false" class="mySwiper">
            <swiper-slide> <img src="/layouts/nepo.png" style="width: 275px; height: 424px; " /></swiper-slide>
            <swiper-slide>  <img src="/layouts/p3.png" style="width: 275px; height: 424px;  " /></swiper-slide>
            <swiper-slide>  <img src="/layouts/ig3.png" style="width: 275px; height: 290px;  " /> </swiper-slide>
            <swiper-slide>   <img src="/layouts/maya.png" style="width: 275px; height: 424px; " />   </swiper-slide>
            <swiper-slide>  <img src="/layouts/p2.png" style="width: 275px; height: 424px;  " /> </swiper-slide>
            <swiper-slide>   <img src="/layouts/ig1.png" style="width: 275px; height: 290px; " /></swiper-slide>
            <swiper-slide>   <img src="/layouts/brook.png" style="width: 275px; height: 424px;  " /> </swiper-slide>
            <swiper-slide>   <img src="/layouts/gracie.png" style="width: 275px; height: 424px; " /> </swiper-slide>
            <swiper-slide>   <img src="/layouts/ig2.png" style="width: 275px; height: 290px;" /> </swiper-slide>
            <swiper-slide>    <img src="/layouts/p1.png" style="width: 275px; height: 424px; " /> </swiper-slide>
        </swiper>

        <div class="row">
            <div class="col-12">
                <hr>
            </div>
        </div>
        <div class="row" style="margin-top: 0px;">
            <div class="col-12" style="justify-content: center; align-items: center; display: flex;">
                <video  width="868px" height="642px" controls>
                    <source src="/layouts/ev.mp4" type="video/mp4">
                </video>
            </div>
        </div>
        <div class="row" style="margin-top: 40px;">
            <div class="col-12" style="justify-content: center; align-items: center; display: flex;">
                <img src="/layouts/ebay.jpg" style="width: 868px; height: 642px;" />
            </div>
        </div>
        
        <div class="container" style="margin: 20px 70px;">
            <div class="text-left" style="font-family: 'Mohave', sans-serif; font-size: 1.5rem; font-weight: lighter;">
                CREDITS
                <div style="font-family: 'Montserrat', sans-serif; font-size: 0.9rem;">
                    Made at Nanyang Academy of Fine Arts
                    <br>
                    2023
                    <br>
                    Art Director: Danielle Ilano
                    <br>
                    Copywriters: Danielle Ilano, Abigail Nixon
                </div>
            </div>
            <div class="text-left"
                style="font-family: 'Mohave', sans-serif; font-size: 1.5rem; font-weight: lighter; padding-top: 30px; padding-bottom: 60px;">
                Role
                <div style="font-family: 'Montserrat', sans-serif; font-size: 0.9rem;">
                    Copy, Art, Concept, Video
                </div>
            </div>
        </div>
    </div>
    <div class="footer5">
        <div class="right">
            <router-link :to="{ name: 'rex' }">

                <p
                    style="font-family: 'hey-eloise', sans-serif; font-weight: 400; font-style: normal; font-size: 2rem; display: inline-block; vertical-align: sub;color: white;">
                    next work</p>
                <img src="/layouts/right.png" width="50px" height="50px"
                    style="display: inline-block; vertical-align: middle;" />
            </router-link>
        </div>
        <div class="left">
            <router-link :to="{ name: 'gym' }">
                <img src="/layouts/left.png" width="50px" height="50px"
                    style="display: inline-block; vertical-align: middle;" />
                <p
                    style="font-family: 'hey-eloise', sans-serif; font-weight: 400; font-style: normal; font-size: 2rem; display: inline-block; vertical-align: sub;color: white;">
                    previous work</p>
            </router-link>
        </div>
        <div class="txt5">
            2023 Danielle Ilano. All Rights Reserved
        </div>
    </div>
</template>
<script setup>
import MouseFollower from '../../components/MouseFollower.vue';
import Navbar from '../../components/Navbar.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';

// Export variables needed in the template
const modules = [EffectCoverflow, Autoplay, Pagination, Navigation];

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Mohave:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
@import url('https://fonts.cdnfonts.com/css/andale-mono');
@import url('https://use.typekit.net/mvw8cpm.css');


body {
    background-color: #121212;
    color: white;
}

/* @keyframes slide {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-100%);
    }
}

.logos {
    overflow: hidden;
    white-space: nowrap;
    padding-top: 10px;
    padding-bottom: 50px;
}


.logos:hover .logos-slide {
    animation-play-state: paused;
}

.logos-slide {
    display: inline-block;
    animation: 35s slide infinite linear;
}

.logos-slide img {
    /* height: 50px; 
    margin: 0 40px;

}
 */

 .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    height: 100%;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 250px;

}

.swiper-slide img {
    display: block;
    width: 100%;
    -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, #0002, #0004);
}



.footer5 {
    position: relative;
    border: none;
    background-color: #3533333c;
    width: 100%;
    height: 150px;
}

.txt5 {
    position: absolute;
    text-align: center;
    left: 40%;
    bottom: 13px;
    font-family: 'Times New Roman', Times, serif;
    font-size: smaller;
    color: white;
}

.left {
    position: absolute;
    left: 40px;
    top: 30px;

}

.right {
    position: absolute;
    right: 40px;
    top: 30px;
}

.image-wrapper2 {
    position: absolute;
    top: -50px; /* Adjust based on how much you want it to overlap */
    left: 50%; /* Centers the image horizontally */
    transform: translateX(-50%);
}
</style>