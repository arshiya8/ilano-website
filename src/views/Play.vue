<template>
  <MouseFollower />
  <Navbar />
  <div class="container-fluid">
    <div class="text-center text-white"
      style="margin-top: 150px; margin-bottom: 200px; font-family: 'Mohave', sans-serif; font-size: 5rem;">
      HYPERFIXATIONS TURNED <br />
      INTO COMMISIONS
    </div>
  </div>
  <link href="https://db.onlinewebfonts.com/c/0a3b16ce4d5d730e4db365078351415b?family=Dark+Crow+Italic+PERSONAL+USE"
    rel="stylesheet">
  <div class="container-fluid">
    <div class="grid">
      <div class="card-container2">
        <div class="flex align-items-center justify-content-center pr-3 sm:col-12 md:col-4 lg:col-4">
          <div class="flip-card2">
            <div class="flip-card2-inner">
              <div class="flip-card2-front">
                  <img src="/layouts/erudapyon.png">
                  <div class="wd">
                    Erudapyon
                    <button type="button" class="btn btn-outline-light"
                      style="font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; padding: 0 10px; font-size: large;">
                      FANART</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex align-items-center justify-content-center pr-3 sm:col-12 md:col-4 lg:col-4">
          <div class="flip-card2">
            <div class="flip-card2-inner">
              <div class="flip-card2-front">
                <img src="/layouts/lock.png" />
                <!-- <div class="wd2" style="line-height: 95%;">
                  Edits <br>
                  <button type="button" class="btn btn-outline-light"
                    style="font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; padding: 0px 10px; font-size: large;">
                    FAN EDITS</button>
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="flex align-items-center justify-content-center pr-3 sm:col-12 md:col-4 lg:col-4">
          <div class="flip-card2">
            <div class="flip-card2-inner">
              <div class="flip-card2-front">
                <img src="/layouts/lock.png" />
                <!-- <div class="wd2" style="line-height: 95%;">
                  Poetry <span style="font-size: 2.8rem;"> BookBinding</span>
                  <button type="button" class="btn btn-outline-light "
                    style="font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; padding: 0px 10px; font-size: large;">
                    CREATIVE CRAFT</button>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer2">
    <div class="txt2">
      2023 Danielle Ilano. All Rights Reserved
    </div>
  </div>
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
import MouseFollower from '../components/MouseFollower.vue';
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Mohave:wght@700&display=swap');


body {
  background-color: #121212;
  color: white;
}

/* .wd2 {
  font-size: 3.5rem;
} */

/* flip cards  */
.card-container2 {
  display: flex;
  flex-wrap: wrap;
  /* Allow cards to wrap to the next line */
  justify-content: space-between;
  /* Distribute cards evenly within each row */
  width: 80%;
  margin: 0 auto;
}

.flip-card2 {
  border: none;
  /* Remove this if you don't want the 3D effect */
  border-radius: 50px;
  width: 508px;
  height: 320px;
  perspective: 1000px;
  background-color: transparent;
  border: none;
  font-family: "Dark Crow Italic PERSONAL USE";
}

/* This container is needed to position the front and back side */
.flip-card2-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  font-family: "Dark Crow Italic PERSONAL USE";
  border-radius: 50px;

}


/* Position the front and back side */
.flip-card2-front {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 50px;
  font-family: "Dark Crow Italic PERSONAL USE";
  border: 1px solid rgba(255, 255, 255, 0.255);
  display: flex;
  /* Add display: flex */
  align-items: center;
  /* Center items horizontally */
  justify-content: center;
  /* Center items vertically */
  background-color: rgb(39, 38, 38);
  color: white;
  text-shadow: 3px 3px 1.5px rgb(14, 13, 13);
  font-size: 2.5rem;
  overflow: hidden;
}



.flip-card2-front img {
  width: 100%;
  height: 100%;
  object-fit: cover;
   /* Ensure the image covers the entire container  */
  position: relative;
}


.flip-card2-front .wd {
  position: absolute;
  font-family: 'Dark Crow Italic PERSONAL USE';
}

.flip-card2-front .wd button {
  position: absolute;
  top: 60px;
  right: 40px;
}

.footer2 {
  position: relative;
  border: none;
  background-color: #3533333c;
  width: 100%;
  height: 80px;
  margin-top: 150px;
}

.txt2 {
  position: absolute;
  text-align: center;
  left: 40%;
  bottom: 20px;
  font-family: 'Times New Roman', Times, serif;
  font-size: smaller;
}
</style>