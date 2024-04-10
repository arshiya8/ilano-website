<style>
@import url('https://fonts.googleapis.com/css2?family=Mohave:wght@700&display=swap');
@import url('https://use.typekit.net/mvw8cpm.css');
@import url('https://db.onlinewebfonts.com/c/0a3b16ce4d5d730e4db365078351415b?family=Dark+Crow+Italic+PERSONAL+USE');


body {
  background-color: #121212;
  color: white;
}

div.container-fluid {
  padding: 0px 0px;
}

/* flip cards  */
.card-container {
  display: flex;
  flex-wrap: wrap;
  /* Allow cards to wrap to the next line */
  justify-content: space-between;
  /* Distribute cards evenly within each row */
  width: 90%;
  margin: 0 auto;
}

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 358px;
  border: none;
  perspective: 1000px;
  /* Remove this if you don't want the 3D effect */
  border-radius: 15px;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 15px;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  color: black;
  border: 1px solid grey;
}

/* Style the back side */
.flip-card-back {
  background-color: #ffffff;
  border: 1px solid grey;
  color: black;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  font-size: 14px;
  padding: 10px;
}

.tth {
  position: absolute;
  top: 12%;
  left: 21%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 800;
  font-size: 0.6rem;
  text-align: left;
  z-index: 10;
}

.ft {
  background-color: #121212;
  border: solid 1px #121212;
  margin: 60px;
  color: grey;
  font-family: 'Times New Roman', Times, serif;
}
</style>

<template>
  <MouseFollower />
  <Navbar />

  <div class="container-fluid">
    <div class="text-center text-white"
      style="margin-top: 80px; margin-bottom: 30px; font-family: 'Mohave', sans-serif; font-size: 3rem;">
      QUIET OFFLINE, <br />
      BABBLES ONLINE,<br />
      <div style="font-family: 'hey-eloise', sans-serif;
        font-weight: 400;
        font-style: normal; font-size: 4rem;">
        RHYMES TO DESIGN.
      </div>
    </div>

    <div class="text-center text-white" style="font-family: 'Courier New', Courier, monospace; margin-bottom: 120px;">
      Hi, I'm Danielle :)
    </div>
    <div class="bg-white text-black" style="border-top-right-radius: 85px; border-top-left-radius: 85px;">
      <div
        style="font-family: 'Mohave', sans-serif; font-size: 5rem; padding-top: 90px; padding-left: 50px; padding-right:50px;">
        WORKS </div>

      <!-- <div class="container-fluid mx-3"> -->
      <div class="grid">
        <div class="card-container mt-5">
          <div class="flex align-items-center justify-content-center pb-5 sm:col-12 md:col-6 lg:col-3">
            <div class="row">
              <div class="col-12">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="/layouts/a1.jpg" style="width: 300px; height: 358px; border-radius: 15px;" />
                      <div class="tth lh-1">
                        GYMSHARK <br />
                        EBAY <br />
                        WATTPAD <br />
                        KRAFT MAC & CHEESE <br />
                        NETFLIX <br />
                        SKY
                      </div>
                    </div>
                    <div class="flip-card-back">
                      <div class="justify-content-center">
                        <router-link :to="{ name: 'adMain' }"><Button label="See More" rounded></Button></router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 ml-1">
                <p style="margin-bottom: 0px; font-family:'Courier New', Courier, monospace; font-size: 0.9rem;">
                  CAMPAIGNS,ART DIRECTION,COPY</p>
                <p style="font-family: 'Mohave', sans-serif; font-size: 1.2rem;">ADVERTISING</p>
              </div>
            </div>
          </div>
          <div class="flex align-items-center justify-content-center pb-5 sm:col-12 md:col-6 lg:col-3">
            <div class="row">
              <div class="col-12">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="/layouts/a2.jpg" style="width: 300px; height: 358px; border-radius: 15px;" />
                      <div class="tth lh-1" style="left: 33%; top: 10%;">
                        SPOTIFY <br />
                        THE ARTFUL DODGER <br />
                        ONLY MURDERS IN THE BUILDING <br />
                        THE BALLADS OF SONGBIRDS AND SNAKES
                      </div>
                    </div>
                    <div class="flip-card-back">
                      <div class="justify-content-center">
                        <router-link :to="{ name: 'printMain' }"><Button label="See More"
                            rounded></Button></router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 ml-1">
                <p style="margin-bottom: 0px;font-family:'Courier New', Courier, monospace; font-size: 0.9rem;">ART
                  DIRECTION</p>
                <p style="font-family: 'Mohave', sans-serif; font-size: 1.2rem;">PRINT</p>
              </div>
            </div>
          </div>
          <div class="flex align-items-center justify-content-center pb-5 sm:col-12 md:col-6 lg:col-3">
            <div class="row">
              <div class="col-12">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="/layouts/lock.png" style="width: 300px; height: 358px; border-radius: 15px;" />
                    </div>
                    <div class="flip-card-back">
                      <div class="justify-content-center">
                        <router-link :to="{ name: 'home' }"><Button label="See More" rounded></Button></router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 ml-1">
                <p style="margin-bottom: 0px;font-family:'Courier New', Courier, monospace; font-size: 0.9rem;">VIDEO
                  EDITING</p>
                <p style="font-family: 'Mohave', sans-serif; font-size: 1.2rem;">VIDEOS</p>
              </div>
            </div>
          </div>
          <div class="flex align-items-center justify-content-center pb-5 sm:col-12 md:col-6 lg:col-3">
            <div class="row">
              <div class="col-12">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="/layouts/lock.png" style="width: 300px; height: 358px; border-radius: 15px;" />
                    </div>
                    <div class="flip-card-back">
                      <div class="justify-content-center">
                        <router-link :to="{ name: 'home' }"><Button label="See More" rounded></Button></router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 ml-1">
                <p style="margin-bottom: 0px;font-family:'Courier New', Courier, monospace; font-size: 0.9rem;">WEBSITE
                  DESIGN</p>
                <p style="font-family: 'Mohave', sans-serif; font-size: 1.2rem;">UI/UX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
    <div class="ft" style="text-align: center;">
      2023 Danielle Ilano. All Rights Reserved     
    </div>
  </div>




</template>

<script setup>
import MouseFollower from '../components/MouseFollower.vue';
import Navbar from '../components/Navbar.vue';


</script>