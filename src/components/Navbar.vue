<style>
@import url('https://use.typekit.net/mvw8cpm.css');

body {
  background-color: #121212;

}
ul li {
  list-style: none;
  display: inline;
  padding-left: 15px;
  position: relative;
  color: white;

}
div a img {
  width: 45.54px;
  height: 45.32px;
  vertical-align: middle;
  padding-left: 5px;
}

div a {
  text-decoration: none;
}


ul li::after {
  content: '';
  height: 2px;
  width: 0;
  background: white;
  position: absolute;
  left: 15px;
  bottom: 0;
  transition: 0.5s;
}
ul li:hover::after {
    width: 80%;
  }
  ul li.active::after {
    width: 80%;
  }
 
</style>

<template>
  <Menubar style="border: none; font-family: 'hey-eloise', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: xx-large; margin: 0px 15px;">
    <template #start>
        <div >
          <router-link :to="{name: 'home'}"> <span style="vertical-align: middle; color: white;" @click="underline(-1)">DANIELLE ILANO</span></router-link>
          <a href="https://www.instagram.com/lostinhelle?igshid=OGQ5ZDc2ODk2ZA=="><img src="/layouts/Instagram.png" /> </a>
          <a href="https://www.behance.net/danielleilano"><img src="/layouts/Behance.png" /></a>
          <a href="https://www.linkedin.com/in/danielle-ilano-8b3482226/"><img src="/layouts/Linkedin.png" /></a>
        </div>
        
    </template>
    <template #end >
      <ul>
        <li @click="underline(0)">Work</li>
        <li @click="underline(1)">PLAY</li>
        <router-link :to="{ name: 'about' }">
          <li @click="underline(2)">ABOUT</li>
        </router-link>
        <li @click="underline(3)">CONTACT</li>
      </ul>
    </template>
  </Menubar>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const activeLink = ref(null);

onMounted(() => {
  // Retrieve the active link from localStorage on component mount
  activeLink.value = parseInt(localStorage.getItem('activeLink')) || null;

  // Apply the "active" class to the corresponding li element
  if (activeLink.value !== null && activeLink.value !== -1) {
    const lis = document.querySelectorAll('ul li');
    const clickedLi = lis[activeLink.value];
    clickedLi.classList.add('active');
  }
});

function underline(index) {
  // Reset the styles for all li elements
  const lis = document.querySelectorAll('ul li');
  lis.forEach(li => li.classList.remove('active'));

  // Apply the styles only to the clicked li element (except for index -1)
  if (index !== -1) {
    const clickedLi = lis[index];
    clickedLi.classList.add('active');
  }

  localStorage.setItem('activeLink', index);
  activeLink.value = index;
}
</script>