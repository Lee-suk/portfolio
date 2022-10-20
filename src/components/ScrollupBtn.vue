<!-- 메인페이지 -->
<template>
  <div>
    <a v-if="visible" class="link" href="#" v-scroll-to="'#logo'">
      <v-btn fixed bottom right fab>
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </a>
  </div>
</template>

<script>
export default {
  name: "Btn",
  data() {
    return {
      visible: false,
    };
  },

  mounted() {
    document.addEventListener("scroll", (event) => {
      console.log(event);
      const afterScrollValue = document.documentElement.scrollTop;
      console.log(afterScrollValue);
      if (afterScrollValue > 500) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    });
  },
};
</script>

<style scoped lang="less">
.link {
  text-decoration-line: none;
  color: black;
}
</style>
