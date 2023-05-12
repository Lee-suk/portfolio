<!-- 메인페이지 -->
<template>
  <div>
    <!-- :options Loop mode -->
    <swiper
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :options="swiperOption"
      class="swiper"
    >
      <swiper-slide
        data-aos="fade-in"
        data-aos-duration="1000"
        class="slide"
        style="background-image: url(image/firstTop.jpg)"
      >
        <!-- v-layout이 swiper-slide 부모의 너비 전체를 차지하고 가운데 위치  -->
        <v-layout
          data-aos="fade-up"
          data-aos-duration="1000"
          fill-height
          align-center
          justify-center
        >
          <!-- slogan -->
          <div class="slog">올바른 방향과 가치를 추구</div>
        </v-layout>
      </swiper-slide>
      <swiper-slide
        class="slide"
        style="background-image: url(image/secondTop.jpg)"
      >
        <v-layout fill-height align-center justify-center>
          <!-- slogan -->
          <div class="slog">변화하는 시대에 적응</div>
        </v-layout>
      </swiper-slide>
      <swiper-slide
        class="slide"
        style="background-image: url(image/thirdTop.png)"
      >
        <v-layout fill-height align-center justify-center>
          <!-- slogan -->
          <div class="slog">끊임없는 피드백으로 성장</div>
        </v-layout>
      </swiper-slide>
    </swiper>
    <!-- ABOUT ME -->
    <div class="section">
      <div class="header" id="about">ABOUT ME</div>
      <v-card>
        <v-responsive :aspect-ratio="16 / 9">
          <div class="bg" style="background-image: url(image/introduce.png)">
            <v-layout fill-height align-center justify-center>
              <v-col align="center">
                <div class="intro">안녕하세요</div>
                <span style="background-color: #aed6f1">
                  <vue-typer
                    class="display-3"
                    :text="[
                      '성장하는',
                      '도전하는',
                      '소통하는',
                      '책임감있는',
                      '변화하는',
                    ]"
                    :repeat="Infinity"
                    initial-action="typing"
                    :pre-type-delay="100"
                    :type-delay="200"
                    :pre-erase-delay="1500"
                    :erase-delay="250"
                    erase-style="clear"
                    :erase-on-complete="false"
                    caret-animation="smooth"
                  >
                  </vue-typer>
                </span>
                <div class="intro">인재 이수경입니다.</div>
              </v-col>
            </v-layout>
          </div>
        </v-responsive>
      </v-card>
    </div>
    <!-- <v-layout class="mx-20" justify-center align-center
      ><text-animate :autoplay="autoplay"
    /></v-layout> -->

    <!-- SK ROOKIES -->
    <div class="section" id="project">
      <div class="header">SK ROOKIES PROJECT</div>

      <v-responsive :aspect-ratio="16 / 9">
        <v-row justify="center">
          <div class="title">진단 사이트 & 앱</div>
          <v-layout wrap>
            <v-flex xs4 class="pa-2" data-aos="slide-right">
              <v-responsive :aspect-ratio="1 / 1">
                <img src="image/sk_rookies/chjinstagram.png" class="image" />
              </v-responsive>
            </v-flex>
            <v-flex xs4 class="pa-2" data-aos="fade-down" data-aos-delay="100">
              <v-responsive :aspect-ratio="1 / 1">
                <img src="image/sk_rookies/ohbank.png" class="image" />
              </v-responsive>
            </v-flex>
            <v-flex xs4 class="pa-2" data-aos="fade-left" data-aos-delay="200">
              <v-responsive :aspect-ratio="1 / 1">
                <img src="image/sk_rookies/rookiebank.png" class="image" />
              </v-responsive>
            </v-flex>
          </v-layout>
          <div class="title">수행 산출물</div>
          <img
            src="image/sk_rookies/examples.png"
            data-aos="fade-down"
            class="image"
          />
        </v-row>
      </v-responsive>
    </div>

    <!-- PROJECT -->
    <div class="section" id="project">
      <div class="header">PROJECT</div>
      <v-layout wrap>
        <v-flex xs4 class="pa-2" data-aos="slide-right">
          <v-responsive :aspect-ratio="1 / 1">
            <img
              src="image/project/petfood.png"
              @click="moveProject1"
              class="image"
            />
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-down" data-aos-delay="100">
          <v-responsive :aspect-ratio="1 / 1">
            <img
              src="image/project/safecheck.png"
              @click="moveProject2"
              class="image"
            />
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-left" data-aos-delay="200">
          <v-responsive :aspect-ratio="1 / 1">
            <img
              src="image/project/localfood.png"
              @click="moveProject3"
              class="image"
            />
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-right">
          <v-responsive :aspect-ratio="1 / 1">
            <img
              src="image/project/nomosquito.png"
              @click="moveProject4"
              class="image"
            />
          </v-responsive>
        </v-flex>
        <v-flex
          xs4
          class="pa-2"
          data-aos="fade-up"
          @click="moveProject5"
          data-aos-delay="100"
        >
          <v-responsive :aspect-ratio="1 / 1">
            <img src="image/project/interior.png" class="image" />
          </v-responsive>
        </v-flex>
        <v-flex
          xs4
          class="pa-2"
          data-aos="fade-left"
          @click="moveProject6"
          data-aos-delay="200"
        >
          <v-responsive :aspect-ratio="1 / 1">
            <img src="image/project/delivery.png" class="image" />
          </v-responsive>
        </v-flex>
      </v-layout>
    </div>

    <!-- SKILLS -->
    <div class="section" id="skills">
      <div class="header">SKILLS</div>

      <v-responsive :aspect-ratio="16 / 9">
        <v-row justify="center">
          <v-flex xs4 class="pa-2" data-aos="flip-down" data-aos-delay="300">
            <v-card class="card" outlined>
              <div align="center">
                <div class="title">LANGUAGE</div>
              </div>
              <v-divider></v-divider>
              <v-row justify="center" wrap>
                <v-col align="center">
                  <img src="image/skills/python.png" class="img" />
                  <div class="sub">Python</div>
                </v-col>
                <v-col align="center">
                  <img src="image/skills/C.png" class="img" />
                  <div class="sub">C</div>
                </v-col>
                <v-col align="center">
                  <img src="image/skills/java.png" class="img" />
                  <div class="sub">java</div>
                </v-col>
                <v-col align="center">
                  <img src="image/skills/javascript.png" class="img" />
                  <div class="sub">javascript</div>
                </v-col>
                <v-col align="center">
                  <img src="image/skills/HTML5.png" class="img" />
                  <div class="sub">HTML5</div>
                </v-col>
                <v-col align="center">
                  <img src="image/skills/CSS.png" class="img" />
                  <div class="sub">CSS</div>
                </v-col>
              </v-row>
            </v-card>
          </v-flex>
          <v-flex xs4 class="pa-2" data-aos="flip-down" data-aos-delay="600">
            <v-card class="card" outlined>
              <div align="center">
                <div class="title">DEVELOP</div>
              </div>
              <v-divider></v-divider>
              <v-row justify="center" wrap>
                <v-col align="center">
                  <img src="image/skills/flask.png" class="img" />
                  <div class="sub">Flask</div>
                </v-col>
                <v-col align="center">
                  <img src="image/skills/nodejs.png" class="img" />
                  <div class="sub">Node.js</div>
                </v-col>
                <v-col align="center">
                  <img src="image/skills/vuejs.png" class="img" />
                  <div class="sub">Vue.js</div>
                </v-col>
                <v-col align="center">
                  <img src="image/skills/swift.png" class="img" />
                  <div class="sub">Swift</div>
                </v-col>
                <v-col align="center">
                  <img src="image/skills/arduino.png" class="img" />
                  <div class="sub">Arduino</div>
                </v-col>
              </v-row>
            </v-card>
          </v-flex>
          <v-flex xs4 class="pa-2" data-aos="flip-down" data-aos-delay="900">
            <v-card class="card" outlined>
              <div align="center">
                <div class="title">CERTIFICATE</div>
              </div>
              <v-divider></v-divider>
              <v-row justify="start" class="certif">
                <v-icon x-large>mdi-file-certificate</v-icon>
                <h4 class="pt-2 pl-3">정보처리기사</h4>
              </v-row>
              <v-row justify="start" class="certif">
                <v-icon x-large>mdi-file-certificate</v-icon>
                <h4 class="pt-2 pl-3">리눅스마스터 2급</h4>
              </v-row>
              <v-row justify="start" class="certif">
                <v-icon x-large>mdi-file-certificate</v-icon>
                <h4 class="pt-2 pl-3">네트워크관리사</h4>
              </v-row>
              <v-row justify="start" class="certif">
                <v-icon x-large>mdi-file-certificate</v-icon>
                <h4 class="pt-2 pl-3">파이썬프로그래밍활용능력 2급</h4>
              </v-row>
              <v-row justify="start" class="certif">
                <v-icon x-large>mdi-file-certificate</v-icon>
                <h4 class="pt-2 pl-3">빅데이터분석실무 2급</h4>
              </v-row>
              <v-row justify="start" class="certif">
                <v-icon x-large>mdi-file-certificate</v-icon>
                <h4 class="pt-2 pl-3">인공지능전문가</h4>
              </v-row>
            </v-card>
          </v-flex>
        </v-row>
      </v-responsive>
    </div>
  </div>
</template>

<script>
// 애니메이션 텍스트
import TextAnimate from "@/components/TextAnimate.vue";

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
  name: "Home",
  data() {
    return {
      autoplay: true,
      // loop mode & auto
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      },
    };
  },

  methods: {
    moveProject1() {
      this.$router.push("/petfood");
    },
    moveProject2() {
      this.$router.push("/safecheck");
    },
    moveProject3() {
      this.$router.push("/localfood");
    },
    moveProject4() {
      this.$router.push("/patent");
    },
    moveProject5() {
      this.$router.push("/interior");
    },
    moveProject6() {
      this.$router.push("/delivery");
    },
  },
  mounted() {
    AOS.init();
  },

  components: {
    Swiper,
    SwiperSlide,
    TextAnimate,
  },
};
</script>

<style scoped lang="less">
/* css less */
// slide
.swiper {
  height: 100vh;
  .slide {
    background-size: cover;
    background-position: center center;
  }
  .slog {
    font-size: 60px;
    font-weight: bold;
    color: white;
  }
}

// section
.section {
  // 너비, 여백 기본 지정
  width: 1180px;
  margin: 0 auto; // 위아래, 좌우
  padding-top: 40px;
  padding-bottom: 40px;

  .bg {
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .intro {
    font-size: 60px;
    font-weight: bold;
  }

  .header {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
  }

  .title {
    text-align: center;
    padding: 10px;
    font-size: 35px;
    font-weight: bold;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card {
    margin: 60px 30px;
    width: 300px;
    height: 750px;
    max-width: 300px;
    max-height: 750px;

    .title {
      text-align: center;
      padding: 20px;
      font-size: 100px;
      font-weight: bold;
    }
    .certif {
      margin: 20px 10px;
    }
    .img {
      margin: 20px 10px;
      max-height: 80px;
      max-width: 80px;

      .sub {
        text-align: center;
        padding: 10px 10px;
        font-weight: bold;
      }
    }
  }
}
</style>
