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

<template>
    <div class="mouse-follower">

    </div>
</template>

<style scoped>
.mouse-follower {
    position: fixed;
    width: 15px;
    height: 15px;
    background-color: orange;
    /* Adjust the color as needed */
    border-radius: 50%;
    pointer-events: none;
    /* Ensure the cursor doesn't interfere with other elements */
    z-index: 9999;
    /* ensures that pointer appears above elements */
}
</style>