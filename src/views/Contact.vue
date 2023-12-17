<template>
    <MouseFollower />
    <Navbar />

    <div class="grid" style="margin-bottom: 20px;">
        <div class="col" style="margin-top: 30px; margin-left: 60px;">
            <div class="container"
                style=" font-family: 'Mohave', sans-serif; font-size: 4rem;">
                <div class="lh-sm">
                    Like what you see?
                <div style="font-family: 'hey-eloise', sans-serif; font-weight: 400; font-style: normal; font-size: 2rem; text-align: start;">
                    *Wink Wink* </div>
                </div>
                
                  
                <div style="font-family: 'Montserrat', sans-serif; font-size: medium;margin-top: 30px;">
                    <strong>Here are some direct ways to contact me.
                    </strong><br>
                    Work? Collab? Coffee? Chat? Drop by my DMs!
                </div>
                <div style="font-family: 'Montserrat', sans-serif; font-size: medium;margin-top: 20px;">
                    <strong>Email
                    </strong><br>
                    Danielle.ilano@gmail.com
                </div>
                <div style="font-family: 'Montserrat', sans-serif; font-size: medium;margin-top: 20px;">
                    <strong>LinkedIn
                    </strong><br>
                    Danielle Ilano
                </div>
                <div style="font-family: 'Montserrat', sans-serif; font-size: medium;margin-top: 20px;">
                    <strong>Instagram
                    </strong><br>
                    @lostinhelle
                </div>
                
            </div>



        </div>
        <div class="col" style="display: flex;
    justify-content: center;
    align-items: center;">
            <img src="/layouts/contact.GIF" style="width: 490px; height: 255px; border-radius: 41px; " />
        </div>
    </div>

    <div class="footer4">
        <div class="txt4">
            2023 Danielle Ilano. All Rights Reserved
        </div>
    </div>
</template>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Mohave:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mohave:wght@700&family=Montserrat&display=swap');

body {
    background-color: #121212;
    color: white;
}


.footer4 {
    position: relative;
    border: none;
    background-color: #3533333c;
    width: 100%;
    height: 120px;
}

.txt4 {
    position: absolute;
    text-align: center;
    left: 40%;
    bottom: 20px;
    font-family: 'Times New Roman', Times, serif;
    font-size: smaller;
}
</style>
  
<script setup>
import Navbar from '../components/Navbar.vue';
import MouseFollower from '../components/MouseFollower.vue';
</script>
  