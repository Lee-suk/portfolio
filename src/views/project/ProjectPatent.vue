<template>
  <div>
    <div
      class="top"
      style="background-image: url(image/project/nomosquitofull.png)"
    >
      <v-layout fill-height align-center justify-center>
        <v-col align="start">
          <div class="intro">
            <span style="background-color: #ffffff"
              >휴대용 회전형 모기퇴치기</span
            >
          </div>
          <div class="sub">
            <span style="background-color: #ffffff">
              - 이산화티타늄 볼을 이용한 특허출원 제품
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
                  매년 모기로 인한 사망자 수는 70만명 이상이고, 그 중 5세 미만의
                  영유아 비율이 무려 86%에 달한다. 그리고 국내 연간 모기로 인한
                  병원 방문자 수는 2천명 이상이고, 매년 모기로 인한 전염병
                  보균자 비율은 55%이다. 이렇게 모기로 인한 심각성은 크다.
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
                  어지러움, 두통 유발하고 시체처리의 번거로움, 전기로 인한 위험
                  증가 등 기존 제품의 문제점들을 해결하고자 개발함.
                </div>
              </v-layout>
            </v-card>
          </v-flex>
        </v-row>
      </v-layout>
    </div>

    <div class="section">
      <div class="header">제품 도면</div>
      <v-layout justify-center align-center>
        <img src="image/project/patent/drawing.png" class="image" />
        <img src="image/project/patent/detail.png" class="image" />
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

