<template>
  <div>
    <!-- :options Loop mode -->
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide
        data-aos="fade-in"
        data-aos-duration="1000"
        class="slide"
        style="background-image: url(image/top1.jpg)"
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
          <div class="slog">안녕하세요.</div>
        </v-layout>
      </swiper-slide>
      <swiper-slide class="slide" style="background-image: url(image/top2.jpg)">
        <v-layout fill-height align-center justify-center>
          <!-- slogan -->
          <div class="slog">이수경입니다.</div>
        </v-layout>
      </swiper-slide>
      <swiper-slide class="slide" style="background-image: url(image/top3.jpg)">
        <v-layout fill-height align-center justify-center>
          <!-- slogan -->
          <div class="slog">열심히 하겠습니다.</div>
        </v-layout>
      </swiper-slide>
    </swiper>

    <!-- section -->
    <div class="section">
      <div class="header">프로젝트 목록</div>
      <!-- wrap 다음줄로 넘어감 -->
      <v-layout wrap>
        <!-- pa-2 여백 -->
        <v-flex xs4 class="pa-2" data-aos="slide-right">
          <!-- 비율 정사각형 -->
          <v-responsive :aspect-ratio="1 / 1">
            <img src="/image/top1.jpg" class="image" />
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-down" data-aos-delay="100">
          <v-responsive :aspect-ratio="1 / 1">
            <img src="/image/top2.jpg" class="image" />
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-left" data-aos-delay="200">
          <v-responsive :aspect-ratio="1 / 1">
            <img src="/image/top3.jpg" class="image" />
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-right">
          <v-responsive :aspect-ratio="1 / 1">
            <img src="/image/top3.jpg" class="image" />
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-up" data-aos-delay="100">
          <v-responsive :aspect-ratio="1 / 1">
            <img src="/image/top1.jpg" class="image" />
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-left" data-aos-delay="200">
          <v-responsive :aspect-ratio="1 / 1">
            <img src="/image/top2.jpg" class="image" />
          </v-responsive>
        </v-flex>
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

export default {
  name: "Home",

  data() {
    return {
      // loop mode & auto
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
        },
      },
    };
  },

  mounted() {
    AOS.init();
  },

  components: {
    Swiper,
    SwiperSlide,
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
  width: 1190px;
  margin: 0 auto; // 위아래, 좌우
  padding-top: 40px;
  padding-bottom: 40px;

  .header {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
