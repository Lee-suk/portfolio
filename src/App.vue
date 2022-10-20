<template>
  <v-app>
    <app-header></app-header>
    <router-view />
    <scrollup-btn></scrollup-btn>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import ScrollupBtn from "@/components/ScrollupBtn";

export default {
  name: "App",

  components: {
    AppHeader,
    AppFooter,
    ScrollupBtn,
  },

  data: () => ({
    //
  }),
};
</script>
