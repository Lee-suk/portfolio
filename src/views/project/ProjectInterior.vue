<template>
  <div>
    <div
      class="top"
      style="background-image: url(image/project/interiorfull.png)"
    >
      <v-layout fill-height align-center justify-center>
        <v-col align="start">
          <div class="intro">
            <span style="background-color: #ffffff">작은공간</span>
          </div>
          <div class="sub">
            <span style="background-color: #ffffff">
              - 인테리어에 관심이 있는 사용자를 위한 웹사이트
            </span>
          </div>
        </v-col>
      </v-layout>
    </div>
    <div class="section">
      <div class="header">웹사이트 디자인</div>
      <v-layout align-center justify-center>
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
              style="background-image: url(image/project/interior/HOME.png)"
            ></swiper-slide>
            <swiper-slide
              class="slide"
              style="background-image: url(image/project/interior/IDEA.png)"
            ></swiper-slide>
            <swiper-slide
              class="slide"
              style="background-image: url(image/project/interior/INFO.png)"
            ></swiper-slide>
            <swiper-slide
              class="slide"
              style="background-image: url(image/project/interior/GUIDE.png)"
            ></swiper-slide>
            <swiper-slide
              class="slide"
              style="background-image: url(image/project/interior/F.A.Q.png)"
            ></swiper-slide>
          </swiper>
        </v-card>
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
  margin: 20px auto;
  width: 750px;
  height: 750px;
  max-width: 750px;
  max-height: 750px;
  .image {
    background-size: contain;
    background-position: center center;
    height: 100vh;
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
}
</style>

