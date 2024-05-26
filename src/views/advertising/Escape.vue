<template>
    <MouseFollower />
    <Navbar />

    <div class="container-fluid text-center lh-sm" style="margin-top: 200px; margin-bottom: 250px; ">
        <div style="font-family: 'Montserrat', sans-serif; font-size: 3rem;">
            Sky Entertainment
        </div>
        <div style="font-family: 'Mohave', sans-serif; font-size: 6rem;">
            The Last Escape
        </div>
        <div style="font-family: 'Montserrat', sans-serif; font-size: 2rem;">
            Discover New Cravings
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
            <div style="font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 2rem;">
                Sky wants to design a new way for their customers <br> to have an immersive experience through the content 
                <br>
                they watch, using innovative technology that feels alive.
                
                
            </div>
        </div>
    </div>

    <div class="flex justify-content-center align-items-center" style="margin: 80px 0px">
        <div class="text-left lh-sm">
            <div style="font-family: 'hey-eloise', sans-serif; font-weight: 400; font-style: normal; font-size: 3rem; ">
                02 | DESCRIPTION
            </div>
            <div style="font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 2.05rem;">
                We decided to use one of Sky’s current popular shows, <br> The Last of Us, and create a horror style escape house<br> 
                where users from all over the world can scare <br> visitors on-site, ONLINE. 
            </div>
        </div>
    </div>

    <div style="margin: 120px 0px;"><br/></div>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

    <div class="bg-white container-fluid text-black"
    style="border-top-right-radius: 85px; border-top-left-radius: 85px; position: relative;">
        <div class="image-wrapper5" >
            <img src="/layouts/assets.png"  width="250px" />
        </div>
        <div class="row" style="padding-top: 80px;" >
            <div class="col" style="margin-left: 40px;">
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
        <div class="logos">
            <div class="logos-slide">
                <img src="/layouts/UI1.png" style="width: 260px; height: 432px;   " />
                <img src="/layouts/UI2.png" style="width: 260px; height: 432px; " />
                <img src="/layouts/TLEPosters.png" style="width: 400px; height: 300px; " />
                <img src="/layouts/UI3.png" style="width: 260px; height: 432px; " />
            </div>
            <div class="logos-slide">
                <img src="/layouts/UI1.png" style="width: 260px; height: 432px;  " />
                <img src="/layouts/UI2.png" style="width: 260px; height: 432px; " />
                <img src="/layouts/TLEPosters.png" style="width: 400px; height: 300px; " />
                <img src="/layouts/UI3.png" style="width: 260px; height: 432px; " />
            </div>
        </div>
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
                <img src="/layouts/escape.png" style="width: 868px; height: 642px;" />
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
                    Copywriters: Danielle Ilano
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
    <div class="footer7">
        <div class="right2">
            <router-link :to="{ name: 'music' }">

                <p
                    style="font-family: 'hey-eloise', sans-serif; font-weight: 400; font-style: normal; font-size: 2rem; display: inline-block; vertical-align: sub;color: white;">
                    Next Work</p>
                <img src="/layouts/right.png" width="50px" height="50px"
                    style="display: inline-block; vertical-align: middle;" />
            </router-link>
        </div>
        <div class="left2">
            <router-link :to="{ name: 'heineken' }">
                <img src="/layouts/left.png" width="50px" height="50px"
                    style="display: inline-block; vertical-align: middle;" />
                <p
                    style="font-family: 'hey-eloise', sans-serif; font-weight: 400; font-style: normal; font-size: 2rem; display: inline-block; vertical-align: sub;color: white;">
                    previous work</p>
            </router-link>
        </div>
        <div class="txt7">
            2023 Danielle Ilano. All Rights Reserved
        </div>
    </div>
</template>
<script setup>
import MouseFollower from '../../components/MouseFollower.vue';
import Navbar from '../../components/Navbar.vue';

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

@keyframes slide {
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
    /* height: 50px; */
    margin: 0 40px;
}


.footer7 {
    position: relative;
    border: none;
    background-color: #3533333c;
    width: 100%;
    height: 150px;
}

.txt7 {
    position: absolute;
    text-align: center;
    left: 40%;
    bottom: 13px;
    font-family: 'Times New Roman', Times, serif;
    font-size: smaller;
    color: white;
}

.left2 {
    position: absolute;
    left: 40px;
    top: 30px;

}

.right2 {
    position: absolute;
    right: 40px;
    top: 30px;
}

.image-wrapper5 {
    position: absolute;
    top: -50px; /* Adjust based on how much you want it to overlap */
    left: 50%; /* Centers the image horizontally */
    transform: translateX(-50%);
}
</style>