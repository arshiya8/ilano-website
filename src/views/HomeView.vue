<style>
@import url('https://use.typekit.net/mvw8cpm.css');

.flip-card-inner {
  font-family: "hey-eloise", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: xx-large;
}
</style>
<style scoped>
.mouse-follower {
  position: fixed;
  width: 15px;
  height: 15px;
  background-color: black;
  /* Adjust the color as needed */
  border-radius: 50%;
  pointer-events: none;
  /* Ensure the cursor doesn't interfere with other elements */
  z-index: 9999;
  /* ensures that pointer appears above elements */
}


.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  border-radius: 15px;
  perspective: 1000px;
  /* Remove this if you don't want the 3D effect */
}


.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1.0s;
  transform-style: preserve-3d;
}


.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}


.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  /* Safari */
  backface-visibility: hidden;
}

/* Style the front side */
.flip-card-front {
  background-color: #bbb;
  color: black;
  border-radius: 15px;
  display: flex;
  align-items: center;
  /* Vertically center the content */
  justify-content: center;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
  border-radius: 15px;
  display: flex;
  align-items: center;
  /* Vertically center the content */
  justify-content: center;
}
.example {
  position: relative;
  padding: 0;
  display: block;
  cursor: pointer;
  overflow: hidden;
}
.content {
  position: absolute;
  top: 40%;
  right: 35%;
  color: #1c87c9;

}

.flip-card:hover .flip-card-front .example .content .text {
  transform: translateX(90px); /* Adjust this value as needed */
}


</style>
<template>
  <div class="mouse-follower">

</div>
  <router-link :to="{name: 'about'}"><Button> help </Button></router-link>
  <h2>Hello World</h2>
  <p>The red line moved across the page.
    With each millimeter it advanced forward,
    something changed in the room. The actual change
    taking place was difficult to perceive,
    but the change was real. The red line continued
    relentlessly across the page and the room would never be the same.</p>
  <p>The red line moved across the page.
    With each millimeter it advanced forward,
    something changed in the room. The actual change
    taking place was difficult to perceive,
    but the change was real. The red line continued
    relentlessly across the page and the room would never be the same.</p>
  <p>The red line moved across the page.
    With each millimeter it advanced forward,
    something changed in the room. The actual change
    taking place was difficult to perceive,
    but the change was real. The red line continued
    relentlessly across the page and the room would never be the same.</p>
  <p>The red line moved across the page.
    With each millimeter it advanced forward,
    something changed in the room. The actual change
    taking place was difficult to perceive,
    but the change was real. The red line continued
    relentlessly across the page and the room would never be the same.</p>
  <p>The red line moved across the page.
    With each millimeter it advanced forward,
    something changed in the room. The actual change
    taking place was difficult to perceive,
    but the change was real. The red line continued
    relentlessly across the page and the room would never be the same.</p>
  <p>The red line moved across the page.
    With each millimeter it advanced forward,
    something changed in the room. The actual change
    taking place was difficult to perceive,
    but the change was real. The red line continued
    relentlessly across the page and the room would never be the same.</p>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <div class="example">
          <img
            src="https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000"
            width="200px" height="200px">
          <div class="content">
            <div class="text">test 1</div>
          </div>
        </div>
      </div>
      <div class="flip-card-back">
        test 2
      </div>
    </div>
  </div>

</template>

<script >
import { gsap } from 'gsap';

export default {
  data() {
    return {
      follower: null,

    };
  },
  mounted() {
    this.follower = document.querySelector('.mouse-follower');
    this.setupMouseFollower();
  },
  methods: {
    setupMouseFollower() {
      window.addEventListener('mousemove', this.updateMouseFollower);
    },
    updateMouseFollower(event) {
      gsap.to(this.follower, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.9,
        ease: 'power2.out',
      });
    },
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.updateMouseFollower);
  },
};
</script>