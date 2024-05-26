<template>
    <MouseFollower />
    <Navbar />

    <div class="grid" style="margin-bottom: 50px;">
        <div class="col" style="margin-top: 30px;  padding-left: 140px;">
            <div class="container" style=" font-family: 'Mohave', sans-serif; font-size: 4rem;">
                <div class="lh-sm">
                    Like what you see?
                    <div
                        style="font-family: 'hey-eloise', sans-serif; font-weight: 400; font-style: normal; font-size: 2rem; text-align: start;">
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
    justify-content:baseline;
    align-items: center;">
            <img src="/layouts/contact.gif" style="width: 480px; height: 265px; border-radius: 41px; " />
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


</style>

<script setup>
import Navbar from '../components/Navbar.vue';
import MouseFollower from '../components/MouseFollower.vue';
import Foot from '../components/Footnote.vue';
</script>