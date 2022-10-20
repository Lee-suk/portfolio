<template>
  <div class="header">
    <v-layout>
      <div class="logo" id="logo" @click="moveHome">Sukyung's Portfolio</div>
      <v-spacer></v-spacer>
      <a class="link" href="#" v-scroll-to="'#about'"
        ><v-btn text @click="moveMain">ABOUT ME</v-btn></a
      >
      <a class="link" href="#" v-scroll-to="'#project'"
        ><v-btn text @click="moveMain">PROJECT</v-btn></a
      >
      <a class="link" href="#" v-scroll-to="'#skills'"
        ><v-btn text @click="moveMain">SKILLS</v-btn></a
      >
    </v-layout>
  </div>
</template>

<script>
export default {
  methods: {
    moveHome() {
      this.$router.push("/");
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    moveMain() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
/* 헤더 모양 설정 */
.header {
  padding: 20px;
  box-shadow: 0 6px 6px #bac0cc44;
  position: fixed;
  z-index: 100;
  background: white;
  left: 0;
  right: 0;
  top: 0;
}
/* 로고 글씨 크기 및 진하기 */
.header .logo {
  font-size: 20px;
  font-weight: bold;
}
.link {
  text-decoration-line: none;
  color: black;
}
</style>
