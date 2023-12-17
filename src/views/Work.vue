<template>
    <MouseFollower />
    <Navbar />

    <div class="container-fluid" >
        <div class="text-center text-white"
            style="margin-top: 200px; margin-bottom: 250px; font-family: 'Mohave', sans-serif; font-size: 5rem;">
            IDEAS THAT HIT.
        </div>
    </div>

    <div class="bg-white" >
        <div class="container-fluid"  >
            <div class="grid" style="padding-top: 100px; padding-bottom: 80px;">
                <div class="card-container1">
                    <div class="flex align-items-center justify-content-center px-0 py-0 sm:col-12 md:col-6 lg:col-6">
                        <div class="flip-card1 px-0 py0">
                            <div class="flip-card-inner1" style="border-top-right-radius: 0; border-bottom-right-radius: 0; border-bottom-left-radius: 0;">
                                <div class="flip-card-front1" style="border-top-right-radius: 0; border-bottom-right-radius: 0; border-bottom-left-radius: 0;">
                                    <img src="/layouts/w1.png" style="border-top-right-radius: 0; border-bottom-right-radius: 0; border-bottom-left-radius: 0;" >
                                </div>
                                <div class="flip-card-back1" style="border-top-right-radius: 0; border-bottom-right-radius: 0; border-bottom-left-radius: 0;" >
                                    <h1>John Doe</h1>
                                    <p>Architect & Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex align-items-center justify-content-center px-0 py-0 sm:col-12 md:col-6 lg:col-6">
                        <div class="flip-card1" >
                            <div class="flip-card-inner1" style="border-top-left-radius: 0; border-bottom-right-radius: 0; border-bottom-left-radius: 0;">
                                <div class="flip-card-front1" style="border-top-left-radius: 0; border-bottom-right-radius: 0; border-bottom-left-radius: 0;">
                                    <img src="/layouts/w2.png" style="border-top-left-radius: 0; border-bottom-right-radius: 0; border-bottom-left-radius: 0;">
                                </div>
                                <div class="flip-card-back1" style="border-top-left-radius: 0; border-bottom-right-radius: 0; border-bottom-left-radius: 0;">
                                    <h1>John Doe</h1>
                                    <p>Architect & Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex align-items-center justify-content-center px-0 py-0 sm:col-12 md:col-6 lg:col-6">
                        <div class="flip-card1" >
                            <div class="flip-card-inner1" style="border-top-right-radius: 0; border-bottom-right-radius: 0; border-top-left-radius: 0;">
                                <div class="flip-card-front1" style="border-top-right-radius: 0; border-bottom-right-radius: 0; border-top-left-radius: 0;">
                                    <img src="/layouts/w3.png" style="border-top-right-radius: 0; border-bottom-right-radius: 0; border-top-left-radius: 0;">
                                </div>
                                <div class="flip-card-back1" style="border-top-right-radius: 0; border-bottom-right-radius: 0; border-top-left-radius: 0;">
                                    <h1>John Doe</h1>
                                    <p>Architect & Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex align-items-center justify-content-center px-0 py-0 sm:col-12 md:col-6 lg:col-6">
                        <div class="flip-card1" >
                            <div class="flip-card-inner1" style="border-top-left-radius: 0; border-top-right-radius: 0; border-bottom-left-radius: 0;">
                                <div class="flip-card-front1" style="border-top-left-radius: 0; border-top-right-radius: 0; border-bottom-left-radius: 0;">
                                    <img src="/layouts/w4.png" style="border-top-left-radius: 0; border-top-right-radius: 0; border-bottom-left-radius: 0;">
                                </div>
                                <div class="flip-card-back1" style="border-top-left-radius: 0; border-top-right-radius: 0; border-bottom-left-radius: 0;">
                                    <h1>John Doe</h1>
                                    <p>Architect & Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer1"> 
    <div class="txt1">
    2023 Danielle Ilano. All Rights Reserved
  </div>
  </div>
</template>
<script setup>

import MouseFollower from '../components/MouseFollower.vue';
import Navbar from '../components/Navbar.vue';

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Mohave:wght@700&display=swap');

body {
  background-color: #121212;
  color: white;
}
/* flip cards  */
.card-container1 {
    display: flex;
    flex-wrap: wrap;
    /* Allow cards to wrap to the next line */
    width: 80%;
    margin: 0 auto;
}

.flip-card1 {
    border: none;
    /* Remove this if you don't want the 3D effect */
    border-radius: 15px;
    width: 701px;
    height: 280px;
    perspective: 1000px;
    background-color: transparent;
    border: none;
    font-family: "Dark Crow Italic PERSONAL USE";
}

/* This container is needed to position the front and back side */
.flip-card-inner1 {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    border-radius: 15px;

}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card1:hover .flip-card-inner1 {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front1,
.flip-card-back1 {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 15px;

    /* border: 1px solid rgba(255, 255, 255, 0.255); */
    display: flex;
    /* Add display: flex */
    align-items: center;
    /* Center items horizontally */
    justify-content: center;
    /* Center items vertically */
    background-color: rgb(39, 38, 38);
    color: white;
    text-shadow: 0px 0px 1px rgb(217, 206, 206);
}

/* Style the front side (fallback if image is missing) */
.flip-card-front1 {
    font-size: 4rem;
}

/* Style the back side */
.flip-card-back1 {
    display: flex;
    justify-content: center;
    font-size: 14px;
    padding: 10px;
    color: white;
    transform: rotateY(180deg);
}

.flip-card1 img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
}

.footer1 {
  position: relative;
  border: none;
  background-color: #3533333c;
  width: 100%;
  height: 150px;
}

.txt1 {
  position: absolute;
  text-align: center;
  left: 40%;
  bottom: 13px;
  font-family: 'Times New Roman', Times, serif;
  font-size: smaller;
  color: white;
}

</style>