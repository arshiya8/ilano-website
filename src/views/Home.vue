<style>
@import url('https://fonts.googleapis.com/css2?family=Mohave:wght@700&display=swap');
@import url('https://use.typekit.net/mvw8cpm.css');
@import url('https://db.onlinewebfonts.com/c/0a3b16ce4d5d730e4db365078351415b?family=Dark+Crow+Italic+PERSONAL+USE');

body {
  background-color: #121212;
  color: white;
}

.flip-card {
  width: 732px;
  height: 350px;
  perspective: 1000px;
  background-color: transparent;
  border: none;
  font-family: "Dark Crow Italic PERSONAL USE";
}

.flip-card-inner {
  border-radius: 15px;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
  
}

.flip-card-front,
.flip-card-back {
  border-radius: 15px;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: none;
  display: flex; /* Add display: flex */
  align-items: center; /* Center items horizontally */
  justify-content: center; /* Center items vertically */
  background-color: rgb(39, 38, 38);
  color: white;
  text-shadow: 0px 0px 1px rgb(217, 206, 206);;
 
}

.flip-card-front {
  

  font-size: 4rem;
}

.flip-card-back {
  color: white;
  transform: rotateY(180deg);
}
</style>

<template>
  <MouseFollower />
  <Navbar />

  <div class="text-center text-white"
    style="margin-top: 80px; margin-bottom: 30px; font-family: 'Mohave', sans-serif; font-size: 4rem;">
    QUIET OFFLINE, <br />
    BABBLES ONLINE, <br />
    <div style="font-family: 'hey-eloise', sans-serif;
font-weight: 400;
font-style: normal; font-size: 4rem;">
      RHYMES TO DESIGN.
    </div>
  </div>

  <div class="text-center text-white" style="font-family: 'Courier New', Courier, monospace; margin-bottom: 120px;">
    Hi, I'm Danielle :)
  </div>

  <div class="container" style="width: 80%; margin: 0 auto; display: flex; justify-content: center;">
    <div class="flip-card" style="margin-right: 20px;">
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

  <div class="container" style="width: 80%; margin: 30px auto; display: flex; justify-content: center;">
    <div class="flip-card" style="margin-right: 20px;">
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
</template>

<script setup>
import MouseFollower from '../components/MouseFollower.vue';
import Navbar from '../components/Navbar.vue';


</script>