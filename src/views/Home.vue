<style>
@import url('https://fonts.googleapis.com/css2?family=Mohave:wght@700&display=swap');
@import url('https://use.typekit.net/mvw8cpm.css');
@import url('https://db.onlinewebfonts.com/c/0a3b16ce4d5d730e4db365078351415b?family=Dark+Crow+Italic+PERSONAL+USE');


body {
  background-color: #121212;
  color: white;
}



/* flip cards  */
.card-container {
  display: flex;
  flex-wrap: wrap;
  /* Allow cards to wrap to the next line */
  justify-content: space-between;
  /* Distribute cards evenly within each row */
  width: 80%;
  margin: 0 auto;
}

.flip-card {
  border: none;
  /* Remove this if you don't want the 3D effect */
  border-radius: 15px;

  width: 732px;
  height: 320px;
  perspective: 1000px;
  background-color: transparent;
  border: none;
  font-family: "Dark Crow Italic PERSONAL USE";
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  border-radius: 15px;

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

  border: 1px solid rgba(255, 255, 255, 0.255);
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
.flip-card-front {
  font-size: 4rem;
}

/* Style the back side */
.flip-card-back {
  display: flex;
  justify-content: center;
  font-size: 14px;
  padding: 10px;
  color: white;
  transform: rotateY(180deg);
}

.footer {
  position: relative;
  border: none;
  background-color: #3533333c;
  width: 100%;
  height: 150px;
  margin-top: 150px;
}

.txt {
  position: absolute;
  text-align: center;
  left: 40%;
  bottom: 13px;
  font-family: 'Times New Roman', Times, serif;
  font-size: smaller;
}


</style>

<template>
  <MouseFollower />
  <Navbar />

  <div class="container-fluid">
    <div class="text-center text-white"
      style="margin-top: 80px; margin-bottom: 30px; font-family: 'Mohave', sans-serif; font-size: 4rem;">
      QUIET OFFLINE, <br />
      BABBLES ONLINE<br />
      <div style="font-family: 'hey-eloise', sans-serif;
font-weight: 400;
font-style: normal; font-size: 4rem;">
        RHYMES TO DESIGN.
      </div>
    </div>

    <div class="text-center text-white" style="font-family: 'Courier New', Courier, monospace; margin-bottom: 120px;">
      Hi, I'm Danielle :)
    </div>
  </div>


  <div class="container-fluid">
    <div class="grid">
      <div class="card-container">
        <div class="flex align-items-center justify-content-center pb-3 sm:col-12 md:col-6 lg:col-6">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                Advertising
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex align-items-center justify-content-center pb-3 sm:col-12 md:col-6 lg:col-6">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                Rebranding
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex align-items-center justify-content-center pb-3 sm:col-12 md:col-6 lg:col-6">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                Videos
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex align-items-center justify-content-center pb-3 sm:col-12 md:col-6 lg:col-6">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                UI/UX
              </div>
              <div class="flip-card-back">
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

  <div class="footer"> 
    <div class="txt">
    2023 Danielle Ilano. All Rights Reserved
  </div>
  </div>
  
</template>

<script setup>
import MouseFollower from '../components/MouseFollower.vue';
import Navbar from '../components/Navbar.vue';


</script>