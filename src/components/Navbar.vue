<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const logoUrl = computed(() => {
  return `layouts/webLogo.png`;
});

// Menu
const items = ref([
  {
    label: "Works",
    routeName: "work",
  },
  {
    label: "Play",
    routeName: "play",
  },
  {
    label: "About",
    routeName: "about",
  },
  {
    label: "Contact",
    routeName: "contact",
  },
]);
</script>

<template>
  <div class="grid align-items-center justify-content-center">
    <div class="col-12 md:12 lg:10">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <!-- Logo on the left -->
        <div class="d-flex align-items-center">
          <router-link :to="{name: 'home'}" ><img alt="logo" :src="logoUrl" /></router-link>
          <!-- Instagram -->
          <a href="https://www.instagram.com/lostinhelle?igshid=OGQ5ZDc2ODk2ZA=="><img src="/layouts/Instagram.png" /></a>
          <!-- Linkedin -->
          <a href="https://www.linkedin.com/in/danielle-ilano-8b3482226/"><img src="/layouts/Linkedin.png" /></a>
        </div>
        
        <!-- Menu items on the right -->
        <Menubar :model="items" class="border-none" style="font-family: 'hey-eloise', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: xx-large; margin: 0px 15px;">
          <template #item="{ label, item, props, root, hasSubmenu }" class="p-menuitem-active text-white">
            <router-link v-if="item.routeName" v-slot="routerProps" :to="{ name: item.routeName }" custom :exact="true">
              <a :href="routerProps.href" v-bind="props.action">
                <span v-bind="props.label">{{ label }}</span>
              </a>
            </router-link>
            <a v-else :href="item.url" :target="item.target" v-bind="props.action">
              <span v-bind="props.label">{{ label }}</span>
              <span :class="[
                hasSubmenu &&
                (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right'),
              ]" v-bind="props.submenuicon" />
            </a>
          </template>
        </Menubar>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://use.typekit.net/mvw8cpm.css');

body {
  background-color: #121212;
  color: white;
}

a {
  text-decoration: none !important;
}

span.p-menuitem-text {
  color: white;
}

span.p-menuitem-text:hover {
  border-bottom: 2px solid white; /* White underline on hover */
}

ul#pv_id_1.p-menubar-root-list {
  background-color: #121212;
  color: white;
  width: auto !important; /* Set submenu width to auto */
  max-width: none !important; /* Allow submenu to expand */
  white-space: nowrap; /* Prevent submenu item from wrapping */
  padding-left: 0; /* Remove default padding */
  margin: 0;
}

a.p-menubar-button {
  color: white;
}

a img {
  width: 45.54px;
  height: 45.32px;
  vertical-align: baseline;
}

/* Adjust margin between logos and images */
.d-flex.align-items-center a:not(:last-child) {
  margin-right: 15px;
}

/* Adjust margin between last image and first text */
.d-flex.align-items-center .p-menubar-root-list {
  margin-left: 15px;
}
</style>
