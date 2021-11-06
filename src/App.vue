<template>
  <v-app>
    <v-app-bar app title="모여봐요, 청년의 숲">
      <v-spacer/>
      <v-app-bar-title class="logo">
        모여봐요, 청년의 숲
      </v-app-bar-title>
      <v-spacer/>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
      <!-- <header>
        <div class="nav_container">
          <div class="logo text-center">어서와요, 청년의 숲</div>
        </div>
        <ul class="nav_bottom">
          <li>
            <router-link to="/">홈</router-link>
          </li>
          <li>
            <router-link to="/review">후기</router-link>
          </li>
          <li>
            <router-link to="/community">커뮤니티</router-link>
          </li>
          <li>
            <router-link to="/mypage">내 공간</router-link>
          </li>
        </ul>
      </header> -->

      <v-bottom-navigation app v-model="value">
        <v-btn value="recent" to="/">
          <span>홈</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn value="favorites" to="/review">
          <span>후기</span>
          <v-icon>mdi-message-draw</v-icon>
        </v-btn>
        <v-btn value="nearby" to="/community">
          <span>커뮤니티</span>
          <v-icon>mdi-account-group</v-icon>
        </v-btn>
        <v-btn value="nearby" to="/mypage">
          <span>내공간</span>
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </v-bottom-navigation>
<!--      <v-footer app>© 2021. Hyeona Co. all rights reserved.</v-footer>-->
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    accountToggle() {
      document
        .getElementsByClassName("account-menu")[0]
        .classList.toggle("active");
    },
  },
};
</script>
<style>
</style>
