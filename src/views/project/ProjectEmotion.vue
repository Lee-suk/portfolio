<template>
  <div>
    <div
      class="top"
      style="background-image: url(image/project/emotionsongfull.png)"
    >
      <v-layout fill-height align-center justify-center>
        <v-col align="start">
          <div class="intro">
            <span style="background-color: #ffffff">EmojiSong</span>
          </div>
          <div class="sub">
            <span style="background-color: #ffffff">
              - 이모티콘 별 노래 추천 앱(ios)
            </span>
          </div>
        </v-col>
      </v-layout>
    </div>
  </div>
</template>

<script>
</script>

<style scoped scoped lang="less">
/* css less */
// slide
.swiper {
  height: 100vh;
  .slide {
    background-size: cover;
    background-position: center center;
  }
}

.top {
  background-size: cover;
  background-position: center center;
  height: 100vh;
  position: relative;
  opacity: 0.7;
  .intro {
    font-size: 50px;
    font-weight: bold;
    color: black;
  }
  .sub {
    font-size: 30px;
    font-weight: bold;
    color: black;
  }
}
.card {
  margin: -450px 100px 200px 200px; //상우하좌
  width: 800px;
  height: 600px;
  max-width: 800px;
  max-height: 600px;
  .image {
    background-size: cover;
    background-position: center center;
    height: 90vh;
    position: relative;
  }
}

// section
.section {
  // 너비, 여백 기본 지정
  width: 1180px;
  margin: 0 auto; // 위아래, 좌우
  padding-top: 40px;
  padding-bottom: 20px;

  .header {
    padding-bottom: 30px;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
  }

  .card2 {
    margin: 60px 30px;
    width: 300px;
    height: 300px;
    max-width: 300px;
    max-height: 300px;

    .title {
      text-align: center;
      padding: 20px;
      font-size: 100px;
      font-weight: bold;
    }
  }
}
</style>

