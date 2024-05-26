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
/* .flip-cardp:hover .flip-cardp-inner {
    transform: rotateY(180deg);
} */

/* Position the front and back side */
.flip-cardp-front

/*,
.flip-cardp-back*/
    {
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
/* .flip-cardp-back {
    background-color: rgb(105, 105, 105);
     border: 1px solid grey; 
    color: black;
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    font-size: 14px;
    padding: 10px;
} */

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
            style="margin-top: 210px; margin-bottom: 250px; font-family: 'Mohave', sans-serif; font-size: 5rem;">
            DESIGNER DOING GRAPHIC THINGS
        </div>

        <div class="bg-white text-black" style="border-top-right-radius: 85px; border-top-left-radius: 85px;">
            <div
                style="font-family: 'Mohave', sans-serif; font-size: 5rem; padding-top: 90px; padding-left: 80px; padding-right:50px;">
                PRINT </div>

            <!-- <div class="container-fluid mx-3"> -->
            <div class="grid">
                <div class="card-containerp mt-5">
                    <div class="flex align-items-center justify-content-center pb-5 sm:col-12 md:col-6 lg:col-3">
                        <div class="flip-cardp">
                            <div class="flip-cardp-inner">
                                <div class="flip-cardp-front" @click="artful = true">
                                    <img src="/layouts/pc1.jpg"
                                        style="width: 300px; height: 400px; border-radius: 15px;" />
                                    <div class="ttp lh-1" style="font-size: 2.0rem;">
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
                                <div class="flip-cardp-front" @click="hunger = true">
                                    <img src="/layouts/pc2.jpg"
                                        style="width: 300px; height: 400px; border-radius: 15px;" />
                                    <div class="ttp lh-1" style="font-size: 1.8rem;">
                                        The Ballad of Songbirds And Snakes
                                    </div>
                                    <div class="btp " style="font-size: 1.3rem;">
                                        Film
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex align-items-center justify-content-center pb-5 sm:col-12 lg:col-3">
                        <div class="flip-cardp">
                            <div class="flip-cardp-inner">
                                <div class="flip-cardp-front" @click="murder = true">
                                    <img src="/layouts/pc3.jpg"
                                        style="width: 300px; height: 400px; border-radius: 15px;" />
                                    <div class="ttp lh-1" style="font-size: 2.2rem;">
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
                                <div class="flip-cardp-front" @click="visible = true">
                                    <img src="/layouts/pc4.jpg"
                                        style="width: 300px; height: 400px; border-radius: 15px;" />
                                    <div class="ttp lh-1" style="font-size: 2.2rem;">
                                        Generational Debate
                                    </div>
                                    <div class="btp" style="font-size: 1.3rem;">
                                        Spotify
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Dialog v-model:visible="visible" modal :style="{ width: '65vw' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true"
                :showItemNavigators="true" :showThumbnails="false" :showItemNavigatorsOnHover="true"
                :showIndicators="false" :autoPlay="false" :transitionInterval="1000">
                <template #item="slotProps">
                    <img :src="slotProps.item" :alt="slotProps.item.alt"
                        style="width: 100%; display: block; height: 500px;" />
                </template>
               <template #footer>
                <p class="text-center" style="margin-top: 20px; margin-bottom: 0px; font-family: Georgia, 'Times New Roman', Times, serif">Generational Debate</p>
               </template>
               
            </Galleria>
        </Dialog>
        <Dialog v-model:visible="artful" modal :style="{ width: '55vw', height: '200vh'}"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <div class="d-flex justify-content-center align-items-center">
                <img src="/layouts/art.jpg" style="width: 350px; height: 550px;"/> 
                
            </div>
            <p class="text-center" style="margin-top: 20px; margin-bottom: 0px; font-family: Georgia, 'Times New Roman', Times, serif">The Artful Dodger (2024)</p>
            
        </Dialog>
        <Dialog v-model:visible="hunger" modal :style="{ width: '55vw', height: '200vh'}"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <div class="d-flex justify-content-center align-items-center">
                <img src="/layouts/hunger.jpg" style="width: 350px; height: 550px;"/> 
                
            </div>
            <p class="text-center" style="margin-top: 20px; margin-bottom: 0px; font-family: Georgia, 'Times New Roman', Times, serif">The Ballad of Songbirds & Snakes</p>
            
        </Dialog>
        <Dialog v-model:visible="murder" modal :style="{ width: '55vw', height: '200vh'}"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <div class="d-flex justify-content-center align-items-center">
                <img src="/layouts/build.jpg" style="width: 350px; height: 550px;"/> 
                
            </div>
            <p class="text-center" style="margin-top: 20px; margin-bottom: 0px; font-family:Georgia, 'Times New Roman', Times, serif">Only Murders in the Building</p>
            
        </Dialog>
       <Foot/>
    </div>




</template>

<script setup>
import MouseFollower from '../../components/MouseFollower.vue';
import Navbar from '../../components/Navbar.vue';
import Foot from '../../components/Footnote.vue';
import { ref } from "vue";


const images = [
    "/layouts/s1.png",
    "/layouts/s2.png",
    "/layouts/s3.png",
];
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);

const visible = ref(false);
const artful = ref(false);
const hunger = ref(false);
const murder = ref(false);

</script>