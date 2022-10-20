<template>
  <div class="TextAnime1">
    <!-- <textarea v-model.lazy="editor" style="width: 80%; height: 40px"></textarea> -->
    <transition-group tag="div" class="title">
      <span v-for="el in text" :key="el.id" class="item" v-text="el.text" />
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    autoplay: Boolean,
  },
  data() {
    return {
      timer: null,
      index: 0,
      // 원본 메시지
      original: [
        "차분하지만 빠른 열정으로 오류를 잡아내고 끝까지 해결합니다.",
        "변화에 빠르게 적응하고 다양한 생각을 공유할 수 있는 선도적이고 창의적이며 유연한 사람입니다.",
        "자신감 있는 분야에서 최선을 다할 뿐만 아니라 AI와 보안 분야에서 학습에 대한 열정으로 지평을 넓히고 있습니다.",
      ],
      // 분해한 메시지
      messages: [],
      text: "",
    };
  },
  computed: {
    editor: {
      get() {
        return this.text.map((e) => e.text).join("");
      },
      set(text) {
        this.text = this.convText(text);
      },
    },
  },
  watch: {
    autoplay(val) {
      clearTimeout(this.timer);
      if (val) {
        this.ticker();
      }
    },
  },
  methods: {
    // 데모 전용 타이머
    ticker() {
      this.timer = setTimeout(() => {
        if (this.autoplay) {
          this.index =
            this.index < this.messages.length - 1 ? this.index + 1 : 0;
          this.text = this.messages[this.index];
          this.ticker();
        }
      }, 5000);
    },
    // 텍스트를 분리해서 객체로 리턴하기
    convText(text) {
      const alms = {};
      const result = text.split("").map((el) => {
        alms[el] = alms[el] ? ++alms[el] : 1;
        return { id: `${el}_${alms[el]}`, text: el };
      });
      return Object.freeze(result); // 감시하지 않음
    },
  },
  created() {
    this.messages = this.original.map((el) => this.convText(el));
    this.text = this.messages[0];
    this.ticker();
  },
};
</script>

<style scoped>
.title {
  font-size: 2rem;
}
.item {
  display: inline-block;
  min-width: 0.3em;
}
/* 트랜지션 전용 스타일 */
.v-enter-active,
.v-leave-active,
.v-move {
  transition: all 1s;
}
.v-leave-active {
  position: absolute;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>