<template>
  <div>
    <v-footer height="auto" dark padless>
      <v-card flat tile class="card">
        <v-layout align-center justify-start>
          <div class="pt-5 pl-5">
            <!-- email -->
            <v-row>
              <v-btn icon x-large>
                <v-icon>mdi-email</v-icon>
              </v-btn>
              <div class="mt-3">xlvl369@gmail.com</div>
            </v-row>
            <!-- phone-->
            <v-row>
              <v-btn icon x-large>
                <v-icon>mdi-cellphone</v-icon>
              </v-btn>
              <div class="mt-3">010-9061-8957</div>
            </v-row>
            <!-- github -->
            <v-row class="mb-5">
              <v-btn icon x-large @click="moveGit">
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <div class="mt-3">github</div>
            </v-row>
          </div>
        </v-layout>
        <div class="close">Thank you for visiting!</div>
        <v-divider></v-divider>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Sukyung's PORTFOLIO</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  methods: {
    moveGit() {
      window.open("https://github.com/Lee-suk?tab=repositories", "_blank");
    },
  },
};
</script>

<style scoped>
.close {
  text-align: right;
  font-size: 40px;
  margin: -100px 50px 30px 100px;
}
.card {
  background-color: #292929;
  width: 100%;
  color: white;
}
</style>
