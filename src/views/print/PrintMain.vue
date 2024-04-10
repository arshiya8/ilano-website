<style>
@import url('https://fonts.googleapis.com/css2?family=Mohave:wght@700&display=swap');
@import url('https://use.typekit.net/mvw8cpm.css');
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Mohave:wght@700&family=Permanent+Marker&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');

body {
    background-color: #121212;
    color: white;
}

div.container-fluid {
    padding: 0px 0px;
}

/* flip cards  */
.card-containerp {
    display: flex;
    flex-wrap: wrap;
    /* Allow cards to wrap to the next line */
    justify-content: space-between;
    /* Distribute cards evenly within each row */
    width: 90%;
    margin: 0 auto;
}

.flip-cardp {
    background-color: transparent;
    width: 300px;
    height: 400px;
    border: none;
    perspective: 1000px;
    /* Remove this if you don't want the 3D effect */
    border-radius: 15px;
}

/* This container is needed to position the front and back side */
.flip-cardp-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-cardp:hover .flip-cardp-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-cardp-front,
.flip-cardp-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 15px;
}

/* Style the front side (fallback if image is missing) */
.flip-cardp-front {
    color: black;
    /* border: 1px solid grey; */
}


/* Style the back side */
.flip-cardp-back {
    background-color: rgb(105, 105, 105);
    /* border: 1px solid grey; */
    color: black;
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    font-size: 14px;
    padding: 10px;
}

/* div.card-containerm.mt-5{
    margin: 48px 0px 0px;
} */
.ttp {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-family: "Acme", sans-serif;
    font-weight: 900;
    font-style: normal;
    text-align: center;
    z-index: 10;
}
.btp {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(211, 211, 211);
    padding: 10px;
    border-radius: 5px;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    z-index: 10;
}


</style>

<template>
    <MouseFollower />
    <Navbar />

    <div class="container-fluid">
        <div class="text-center text-white"
            style="margin-top: 180px; margin-bottom: 200px; font-family: 'Permanent Marker', cursive; font-weight: 400; font-style: normal; font-size: 3rem;">
            DESIGNER DOING GRAPHIC THINGS
        </div>

        <div class="bg-white text-black" style="border-top-right-radius: 85px; border-top-left-radius: 85px;">
            <div
                style="font-family: 'Mohave', sans-serif; font-size: 5rem; padding-top: 90px; padding-left: 50px; padding-right:50px;">
                PRINT </div>

            <!-- <div class="container-fluid mx-3"> -->
            <div class="grid">
                <div class="card-containerp mt-5">
                    <div class="flex align-items-center justify-content-center pb-5 sm:col-12 md:col-6 lg:col-3">
                        <div class="flip-cardp">
                            <div class="flip-cardp-inner">
                                <div class="flip-cardp-front">
                                    <img src="/layouts/pc1.jpg"
                                        style="width: 300px; height: 400px; border-radius: 15px;" />
                                    <div class="ttp lh-1" style="font-size: 2.0rem;">
                                        The Artful Dodger
                                    </div>
                                    <div class="btp" style="font-size: 1.3rem;">
                                        TV show
                                    </div>
                                </div>
                                <div class="flip-cardp-back">
                                    <div class="ttp lh-1" style="font-size: 2.0rem;color: rgb(211, 211, 211)">
                                        The Artful Dodger
                                    </div>
                                    <div class="btp" style="font-size: 1.3rem;">
                                        TV show
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex align-items-center justify-content-center pb-5 sm:col-12 md:col-6 lg:col-3">
                        <div class="flip-cardp">
                            <div class="flip-cardp-inner">
                                <div class="flip-cardp-front">
                                    <img src="/layouts/pc2.jpg"
                                        style="width: 300px; height: 400px; border-radius: 15px;" />
                                    <div class="ttp lh-1" style="font-size: 1.8rem;">
                                        The Ballad of Songbirds And Snakes
                                    </div>
                                    <div class="btp " style="font-size: 1.3rem;">
                                        Film
                                    </div>
                                </div>
                                <div class="flip-cardp-back">
                                    <div class="ttp lh-1" style="font-size: 1.8rem;color: rgb(211, 211, 211)">
                                        The Ballad of Songbirds And Snakes
                                    </div>
                                    <div class="btp" style="font-size: 1.3rem;">
                                        Film
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex align-items-center justify-content-center pb-5 sm:col-12 lg:col-3">
                        <div class="flip-cardp">
                            <div class="flip-cardp-inner">
                                <div class="flip-cardp-front">
                                    <img src="/layouts/pc3.jpg"
                                        style="width: 300px; height: 400px; border-radius: 15px;" />
                                    <div class="ttp lh-1" style="font-size: 2.2rem;">
                                        Only Murders in the Building
                                    </div>
                                    <div class="btp" style="font-size: 1.3rem;">
                                        TV show
                                    </div>
                                </div>
                                <div class="flip-cardp-back">
                                    <div class="ttp lh-1" style="font-size: 2.2rem;color: rgb(211, 211, 211)">
                                        Only Murders in the Building
                                    </div>
                                    <div class="btp" style="font-size: 1.3rem;">
                                        TV show
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex align-items-center justify-content-center pb-5 sm:col-12 lg:col-3">
                        <div class="flip-cardp">
                            <div class="flip-cardp-inner">
                                <div class="flip-cardp-front">
                                    <img src="/layouts/pc4.jpg"
                                        style="width: 300px; height: 400px; border-radius: 15px;" />
                                    <div class="ttp lh-1" style="font-size: 2.2rem;">
                                        Generational Debate
                                    </div>
                                    <div class="btp" style="font-size: 1.3rem;">
                                        Spotify
                                    </div>
                                </div>
                                <div class="flip-cardp-back">
                                    <div class="ttp lh-1" style="font-size: 2.2rem;color: rgb(211, 211, 211)">
                                        Generational Debate
                                    </div>
                                    <div class="btp" style="font-size: 1.3rem;c">
                                        Spotify
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- </div> -->
    </div>




</template>

<script setup>
import MouseFollower from '../../components/MouseFollower.vue';
import Navbar from '../../components/Navbar.vue';


</script>