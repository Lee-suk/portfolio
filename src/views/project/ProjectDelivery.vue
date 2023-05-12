<template>
  <div>
    <div
      class="top"
      style="background-image: url(image/project/deliveryfull.png)"
    >
      <v-layout fill-height align-center justify-center>
        <v-col align="start">
          <div class="intro">
            <span style="background-color: #ffffff">배달중개</span>
          </div>
          <div class="sub">
            <span style="background-color: #ffffff">
              - 1인가구를 위한 배달비 중개 웹앱
            </span>
          </div>
        </v-col>
      </v-layout>
    </div>

    <v-layout align-center justify-end>
      <v-card class="card">
        <swiper
          :autoplay="{
            delay: 3500,
            disableOnInteraction: false,
          }"
          :options="swiperOption"
          class="swiper"
        >
          <swiper-slide
            data-aos="fade-in"
            data-aos-duration="1000"
            class="slide"
            style="background-image: url(image/project/delivery/delivery01.png)"
          ></swiper-slide>
          <swiper-slide
            class="slide"
            style="background-image: url(image/project/delivery/delivery02.png)"
          ></swiper-slide>
          <swiper-slide
            class="slide"
            style="background-image: url(image/project/delivery/delivery03.png)"
          ></swiper-slide>
          <swiper-slide
            class="slide"
            style="background-image: url(image/project/delivery/delivery04.png)"
          ></swiper-slide>
          <swiper-slide
            class="slide"
            style="background-image: url(image/project/delivery/delivery05.png)"
          ></swiper-slide>
          <swiper-slide
            class="slide"
            style="background-image: url(image/project/delivery/delivery06.png)"
          ></swiper-slide>
          <swiper-slide
            class="slide"
            style="background-image: url(image/project/delivery/delivery07.png)"
          ></swiper-slide>
          <swiper-slide
            class="slide"
            style="background-image: url(image/project/delivery/delivery08.png)"
          ></swiper-slide>
        </swiper>
      </v-card>
    </v-layout>

    <div class="section">
      <div class="header">개발 배경</div>
      <v-layout justify-center align-center>
        <v-row justify="center">
          <v-flex xs4 class="pa-2" data-aos="flip-down" data-aos-delay="300">
            <v-card class="card2" outlined>
              <div align="center">
                <div class="title">REASON1</div>
              </div>
              <v-divider class="mb-3"></v-divider>
              <v-layout wrap justify-start align-center class="ml-5 mr-5">
                <div>
                  배달비 인상으로 인한 소비자의 부담을 낮추기 위해 개발하게 됨.
                </div>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex xs4 class="pa-2" data-aos="flip-down" data-aos-delay="600">
            <v-card class="card2" outlined>
              <div align="center">
                <div class="title">REASON2</div>
              </div>
              <v-divider class="mb-3"></v-divider>
              <v-layout wrap justify-start align-center class="ml-5 mr-5">
                <div>
                  같은 공동주택 거주자들끼리 단체 대화방을 통해 함께 주문하여
                  배달비 부담을 낮추는 것을 보고, 이러한 기능을 배달앱 자체에
                  도입하기로 함
                </div>
              </v-layout>
            </v-card>
          </v-flex>
        </v-row>
      </v-layout>
    </div>

    <div class="section">
      <div class="header">적용기술</div>
      <v-row justify="center">
        <v-flex xs4 class="pa-2" data-aos="flip-down">
          <v-card class="card3" outlined>
            <v-layout wrap justify-start align-center class="ml-5">
              <v-col>
                <li>형상관리: Git</li>
                <li>IDE: Visual Studio Code, Vue.js</li>
                <li>언어: JavaScript</li>
                <li>데이터베이스: MySQL</li>
              </v-col>
            </v-layout>
          </v-card>
        </v-flex>
      </v-row>
    </div>

    <div class="section">
      <div class="header">앱 프로세스</div>
      <v-layout justify-center align-center>
        <img src="image/project/delivery/process.png" class="image" />
      </v-layout>
    </div>

    <div class="section">
      <div class="header">기대효과</div>
      <v-layout justify-center align-center>
        <v-row justify="center">
          <v-flex xs4 class="pa-2" data-aos="flip-down" data-aos-delay="300">
            <v-card class="card2" outlined>
              <div align="center">
                <div class="title">RESULT1</div>
              </div>
              <v-divider class="mb-3"></v-divider>
              <v-layout wrap justify-start align-center class="ml-5 mr-5">
                <div>웹앱 형태로 제작하여 접근이 다양함.</div>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex xs4 class="pa-2" data-aos="flip-down" data-aos-delay="600">
            <v-card class="card2" outlined>
              <div align="center">
                <div class="title">RESULT2</div>
              </div>
              <v-divider class="mb-3"></v-divider>
              <v-layout wrap justify-start align-center class="ml-5 mr-5">
                <div>
                  배달비를 나누어 결제하기 때문에 배달비 부담이 줄어 개발한
                  배달앱의 수요가 높아짐.
                </div>
              </v-layout>
            </v-card>
          </v-flex>
        </v-row>
      </v-layout>
    </div>
  </div>
</template>

<script>
// 슬라이드
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default {
  data() {
    return {
      // loop mode & auto
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    AOS.init();
  },
};
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
    width: 300px;
    height: 300px;
    max-width: 300px;
    max-height: 300px;
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

