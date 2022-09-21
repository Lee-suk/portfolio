<template>
  <div class="header">
    <v-layout>
      <div class="logo">이수경의 포트폴리오</div>
      <v-spacer></v-spacer>
      <v-btn text>프로젝트 1</v-btn>
      <v-btn text>프로젝트 2</v-btn>
      <v-btn text>프로젝트 3</v-btn>
    </v-layout>
  </div>
</template>

<style scoped>
/* 헤더 모양 설정 */
.header {
  padding: 20px;
  box-shadow: 0 6px 6px #eee;
}
/* 로고 글씨 크기 및 진하기 */
.header .logo {
  font-size: 20px;
  font-weight: bold;
}
</style>
