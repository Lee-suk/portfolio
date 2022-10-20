<template>
  <div>
    <div
      class="top"
      style="background-image: url(image/project/safecheckfull.png)"
    >
      <v-layout fill-height align-center justify-center>
        <v-col align="start">
          <div class="intro">
            <span style="background-color: #ffffff">SafeCheck</span>
          </div>
          <div class="sub">
            <span style="background-color: #ffffff">
              - 방문자 발열체크 및 안심번호 팔찌 인식을
            </span>
          </div>
          <div class="sub">
            <span style="background-color: #ffffff">
              통한 개인정보 관리 시스템
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
            style="background-image: url(image/project/safecheck/app1.png)"
          ></swiper-slide>
          <swiper-slide
            class="slide"
            style="background-image: url(image/project/safecheck/app2.png)"
          ></swiper-slide>
          <swiper-slide
            class="slide"
            style="background-image: url(image/project/safecheck/app3.png)"
          ></swiper-slide>
          <swiper-slide
            class="slide"
            style="background-image: url(image/project/safecheck/app4.png)"
          ></swiper-slide>
          <swiper-slide
            class="slide"
            style="background-image: url(image/project/safecheck/app5.png)"
          ></swiper-slide>
          <swiper-slide
            class="slide"
            style="background-image: url(image/project/safecheck/app6.png)"
          ></swiper-slide>
        </swiper>
      </v-card>
    </v-layout>

    <div class="section">
      <div class="header">개발 목적</div>
      <v-layout justify-center align-center>
        <v-row justify="center">
          <v-flex xs4 class="pa-2" data-aos="flip-down" data-aos-delay="300">
            <v-card class="card2" outlined>
              <div align="center">
                <div class="title">OBJECT1</div>
              </div>
              <v-divider class="mb-3"></v-divider>
              <v-layout wrap justify-start align-center class="ml-5 mr-5">
                <div>
                  코로나19의 감염을 사전에 방지하고자 실시하는 발열 체크와
                  전자출입명부 작성을 기존에 각각 실시하던 것과 달리, 발열
                  체크와 출입자 개인의 QR코드 인증 및 재발급의 번거로움을 줄임.
                </div>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex xs4 class="pa-2" data-aos="flip-down" data-aos-delay="600">
            <v-card class="card2" outlined>
              <div align="center">
                <div class="title">OBJECT2</div>
              </div>
              <v-divider class="mb-3"></v-divider>
              <v-layout wrap justify-start align-center class="ml-5 mr-5">
                <div>
                  동시에 개인 정보 유출 우려를 방지하고 안전한 데이터를 활용하여
                  편리함을 증가시키기 위함.
                </div>
              </v-layout>
            </v-card>
          </v-flex>
        </v-row>
      </v-layout>
    </div>

    <div class="section">
      <div class="header">시스템 구성도</div>
      <v-layout justify-center align-center>
        <img src="image/project/safecheck/system.png" class="image" />
      </v-layout>
    </div>

    <div class="section">
      <div class="header">시스템 시연</div>
      <v-layout justify-center align-center>
        <img src="image/project/safecheck/test.png" class="img" />
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
  .img {
    width: 300px;
    height: 300px;
    max-width: 300px;
    max-height: 300px;
  }
}
</style>

