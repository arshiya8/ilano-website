<template>
  <MouseFollower />
  <Navbar />

  <div class="grid">
    <div class="col">
      <img src="/layouts/About.png" />
    </div>
    <div class="col">
      <div class="container">
        <div style="margin-top: 80px; margin-bottom: 30px; font-family: 'Mohave', sans-serif; font-size: 4rem;">
          &nbsp &nbsp "ADHD IS KEY <br />
          TO SUCCESS."<br />
          <div style="font-family: 'hey-eloise', sans-serif;
font-weight: 400;
font-style: normal; font-size: 2rem; text-align: start;">
            Said by nobody. </div>
        </div>
      </div>
      <div style="font-family: 'Montserrat', sans-serif;">
        <strong>Danielle (Dani, David, Ilano) is an Advertising creative <br> who specialises in copywriting. </strong>
        Sensationally quiet, <br> she puts her voice into her work and hopes for the best. <br> Kidding, <span
          style="font-size:xx-small;">not really.</span>
      </div>

      <div style="font-family: 'Montserrat', sans-serif; margin-top: 20px;">
        A <strong>Bright Spark</strong> who flips from hobby to hobby, she's <br> gained *a level* of credibility in the
        field of illustrations, <br>
        UI/UX, video editing and creative writing.
      </div>
    </div>
  </div>
  <Foot/>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mohave:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://use.typekit.net/mvw8cpm.css');

body {
  background-color: #121212;
  color: white;
}

.col img {
  max-width: 100%;
  max-height: 100%;
}


</style>

<script setup>
import Navbar from '../components/Navbar.vue';
import MouseFollower from '../components/MouseFollower.vue';
import Foot from '../components/Footnote.vue';
</script>
