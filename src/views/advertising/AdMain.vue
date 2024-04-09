<style>
@import url('https://fonts.googleapis.com/css2?family=Mohave:wght@700&display=swap');
@import url('https://use.typekit.net/mvw8cpm.css');
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Mohave:wght@700&family=Permanent+Marker&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');


body {
    background-color: #121212;
    color: white;
}

div.container-fluid {
    padding: 0px 0px;
}

/* flip cards  */
.card-containerm {
    display: flex;
    flex-wrap: wrap;
    /* Allow cards to wrap to the next line */
    justify-content: space-between;
    /* Distribute cards evenly within each row */
    width: 90%;
    margin: 0 auto;
}

.flip-cardm {
    background-color: transparent;
    width: 350px;
    height: 358px;
    border: none;
    perspective: 1000px;
    /* Remove this if you don't want the 3D effect */
    border-radius: 15px;
}

/* This container is needed to position the front and back side */
.flip-cardm-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-cardm:hover .flip-cardm-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-cardm-front,
.flip-cardm-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 15px;
}

/* Style the front side (fallback if image is missing) */
.flip-cardm-front {
    color: black;
    /* border: 1px solid grey; */
}


/* Style the back side */
.flip-cardm-back {
    background-color: #ffffff;
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
.tt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-family: "Anton", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2.8rem;
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
            IDEAS THAT HIT
        </div>

        <div class="bg-white text-black" style="border-top-right-radius: 85px; border-top-left-radius: 85px;">
            <div
                style="font-family: 'Mohave', sans-serif; font-size: 5rem; padding-top: 90px; padding-left: 50px; padding-right:50px;">
                ADVERTISING </div>

            <!-- <div class="container-fluid mx-3"> -->
            <div class="grid">
                <div class="card-containerm mt-5">
                    <div class="flex align-items-center justify-content-center pb-5 sm:col-12 md:col-6 lg:col-4">
                        <div class="flip-cardm">
                            <div class="flip-cardm-inner">
                                <div class="flip-cardm-front">
                                    <img src="/layouts/gc.jpg"
                                        style="width: 350px; height: 358px; border-radius: 15px;" />
                                    <div class="tt">
                                        Gymface
                                    </div>
                                </div>
                                <div class="flip-cardm-back">
                                    <img src="/layouts/gn.jpg"
                                        style="width: 350px; height: 358px; border-radius: 15px;" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex align-items-center justify-content-center pb-5 sm:col-12 md:col-6 lg:col-4">
                        <div class="flip-cardm">
                            <div class="flip-cardm-inner">
                                <div class="flip-cardm-front">
                                    <img src="/layouts/ec.jpg"
                                        style="width: 350px; height: 358px; border-radius: 15px;" />
                                    <div class="tt" style="font-size: 2.2rem;">
                                        eBay Your Privilege
                                    </div>
                                </div>
                                <div class="flip-cardm-back">
                                    <img src="/layouts/en.jpg"
                                        style="width: 350px; height: 358px; border-radius: 15px;" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex align-items-center justify-content-center pb-5 sm:col-12 lg:col-4">
                        <div class="flip-cardm">
                            <div class="flip-cardm-inner">
                                <div class="flip-cardm-front">
                                    <img src="/layouts/dc.jpg"
                                        style="width: 350px; height: 358px; border-radius: 15px;" />
                                        <div class="tt" style="font-size: 2.2rem;">
                                        Operation: Save Rex
                                    </div>
                                </div>
                                <div class="flip-cardm-back">
                                    <img src="/layouts/dn.jpg"
                                        style="width: 350px; height: 358px; border-radius: 15px;" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex align-items-center justify-content-center pb-5 sm:col-12 lg:col-4">
                        <div class="flip-cardm">
                            <div class="flip-cardm-inner">
                                <div class="flip-cardm-front">
                                    <img src="/layouts/mc.jpg"
                                        style="width: 350px; height: 358px; border-radius: 15px;" />
                                        <div class="tt" style="font-size: 2.2rem;">
                                        Heineken Matched
                                    </div>
                                </div>
                                <div class="flip-cardm-back">
                                    <img src="/layouts/hn.jpg"
                                        style="width: 350px; height: 358px; border-radius: 15px;" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="flex align-items-center justify-content-center pb-5 sm:col-12 md:col-6 lg:col-3">
                        <div class="flip-cardm">
                            <div class="flip-cardm-inner">
                                <div class="flip-cardm-front">
                                    <img src="/layouts/zc.jpg"
                                        style="width: 350px; height: 358px; border-radius: 15px;" />
                                        <div class="tt" style="font-size: 2.2rem;">
                                        The Last Escape
                                    </div>
                                </div>
                                <div class="flip-cardm-back">
                                    <img src="/layouts/zn.jpg"
                                        style="width: 350px; height: 358px; border-radius: 15px;" />
                                </div>
                            </div>
                        </div>
                    </div> -->
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