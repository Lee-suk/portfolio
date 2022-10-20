<template>
  <div>
    <div
      class="top"
      style="background-image: url(image/project/petfoodfull.png)"
    >
      <v-layout fill-height align-center justify-center>
        <v-col align="start">
          <div class="intro">
            <span style="background-color: #ffffff">PetFoodChecking</span>
          </div>
          <div class="sub">
            <span style="background-color: #ffffff">
              - 반려동물 음식 성분 분석 웹사이트
            </span>
          </div>
        </v-col>
      </v-layout>
    </div>

    <!-- <v-layout align-center justify-end>
      <v-card class="card">
        <div
          fill-height
          class="image"
          style="background-image: url(image/project/petfood/search.png)"
        ></div>
      </v-card>
    </v-layout> -->

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
            style="background-image: url(image/project/petfood/select.png)"
          ></swiper-slide>
          <swiper-slide
            class="slide"
            style="background-image: url(image/project/petfood/simple.png)"
          ></swiper-slide>
          <swiper-slide
            class="slide"
            style="
              background-image: url(image/project/petfood/simpleresult.png);
            "
          ></swiper-slide>
          <swiper-slide
            class="slide"
            style="background-image: url(image/project/petfood/image.png)"
          ></swiper-slide>
          <swiper-slide
            class="slide"
            style="background-image: url(image/project/petfood/imageresult.png)"
          ></swiper-slide>
          <swiper-slide
            class="slide"
            style="background-image: url(image/project/petfood/userDB.png)"
          ></swiper-slide>
          <swiper-slide
            class="slide"
            style="background-image: url(image/project/petfood/managerDB.png)"
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
                  최근 핵가족화 및 1인 가구 증가로 반려동물을 키우는 가구가
                  늘면서 관련 펫푸드 시장과 반려동물 헬스케어 시장이 함께
                  비례적으로 확대되고, 이에 따라 펫푸드 관련 영양성분에 대한
                  관심이 커지고 있음.
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
                  수업 시간에 공부한 딥러닝을 이용하여 이미지 인식, 문자 인식
                  기술을 기반으로, 반려동물이 섭취해도 되는 식품과 섭취하면 안
                  되는 식품을 구별하는 반려동물의 헬스케어를 위한 프로그램을
                  제작하기로 함
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
        <img src="image/project/petfood/system.png" class="image" />
      </v-layout>

      <v-row justify="center">
        <v-flex xs4 class="pa-2">
          <v-card class="card2" outlined>
            <div align="center">
              <div class="title">Database</div>
            </div>
            <v-divider class="mb-3"></v-divider>
            <v-layout wrap justify-start align-center class="ml-5">
              <li>사용자 인증 및 정보 관리</li>
              <li>사진 분석 결과 정보 관리</li>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="flip-down" data-aos-delay="600">
          <v-card class="card2" outlined>
            <div align="center">
              <div class="title">API</div>
            </div>
            <v-divider class="mb-3"></v-divider>
            <v-layout wrap justify-start align-center class="ml-5">
              <li>사진 업로드</li>
              <li>
                OpenCV와 EasyOCR로 업로드된 식품의 성분표 사진을 분석하여
                섭취해도 되는 성분과 섭취하면 안 되는 성분을 구분
              </li>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="flip-down" data-aos-delay="900">
          <v-card class="card2" outlined>
            <div align="center">
              <div class="title">WEB</div>
            </div>
            <v-divider class="mb-3"></v-divider>
            <v-layout wrap justify-start align-center class="ml-5">
              <li>시스템 기능 및 동작</li>
            </v-layout>
          </v-card>
        </v-flex>
      </v-row>
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
}
</style>