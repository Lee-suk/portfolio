<template>
  <div>
    <div
      class="top"
      style="background-image: url(image/project/localfoodfull.png)"
    >
      <v-layout fill-height align-center justify-center>
        <v-col align="start">
          <div class="intro">
            <span style="background-color: #ffffff">동네푸드</span>
          </div>
          <div class="sub">
            <span style="background-color: #ffffff">
              - 사용자 배달음식 및 식자재 거래와
            </span>
          </div>
          <div class="sub">
            <span style="background-color: #ffffff">
              동네 주민간 소통을 위한 앱
            </span>
          </div>
        </v-col>
      </v-layout>
    </div>

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
                  단절된 이웃관계로 인해 최근 여러 사회적인 문제점을 낳고
                  있는데, 이러한 문제는 소통 및 교류 활성화를 통해 극복해야
                  한다. 하지만 코로나로 인해 사회적 거리두기가 심화되면서 소통
                  및 교류가 더욱 불가능해졌다.
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
                  배달 수수료 증가와 최소 주문 금액이 생기면서 1인분 주문이 거의
                  불가능해졌다. 또한 점주들은 배달앱 수수료 부담으로 음식 가격은
                  인상하고 음식 양은 줄이는 방식으로 수수료 부담을 경감하고 있어
                  소비자 및 점주들에게 서로 부담이 되고있다.
                </div>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex xs4 class="pa-2" data-aos="flip-down" data-aos-delay="900">
            <v-card class="card2" outlined>
              <div align="center">
                <div class="title">OBJECT3</div>
              </div>
              <v-divider class="mb-3"></v-divider>
              <v-layout wrap justify-start align-center class="ml-5 mr-5">
                <div>
                  음식 재료를 살 때 내가 필요한 양보다 많이 사게 되는 경우나
                  1인가구가 먹기엔 배달음식의 양이 많은 경우 재료 및 음식이 남아
                  음식물 쓰레기가 증가하게 된다.
                </div>
              </v-layout>
            </v-card>
          </v-flex>
        </v-row>
      </v-layout>
    </div>

    <div class="section">
      <div class="header">앱구성도</div>
      <v-layout justify-center align-center>
        <img src="image/project/localfood/appstructure.png" class="image" />
      </v-layout>
    </div>

    <div class="section">
      <div class="header">앱 시연 영상</div>
      <v-layout justify-center align-center>
        <video controls class="video">
          <source src="video/local1.mp4" type="video/mp4" />
        </video>
        <video controls class="video">
          <source src="video/local2.mp4" type="video/mp4" />
        </video>
        <video controls class="video">
          <source src="video/local3.mp4" type="video/mp4" />
        </video>
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
                <li>IDE: 안드로이드 스튜디오</li>
                <li>언어: Java</li>
                <li>데이터베이스: Firebase Database</li>
                <li>
                  로그인: Firebase authentication
                  <ul>
                    -> 이메일/구글 계정 로그인
                  </ul>
                </li>
                <li>이미지 : Storage</li>
              </v-col>
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
.video {
  margin: 40px 20px;
  width: 300px;
  height: 300px;
}
.card3 {
  margin: auto 30px;
  width: 350px;
  height: 250px;
  max-width: 350px;
  max-height: 250px;
}
</style>


