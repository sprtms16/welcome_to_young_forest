<template>
  <header id="Header">
    <div class="nav_title">
      <h1>모여봐요, 청년의 숲</h1>
    </div>
    <nav id="nav">
      <router-link to="/">홈</router-link>
      <router-link to="/program">프로그램</router-link>
      <router-link to="/review">활동후기</router-link>
      <router-link to="/community">커뮤니티</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  width: 100%;
  padding: 0 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.nav_title {
  padding: 15px 0;
  font-family: "NEXON Lv1 Gothic OTF Bold";
  text-align: center;
}

#nav {
  display: flex;
  justify-content: center;
  text-align: center;
}

#nav > a {
  width: 25%;
  padding: 15px 0;
  color: #808080;
}

.router-link-exact-active {
  color: #0d0d0d !important;
  border-bottom: 2px solid #0d0d0d;
  font-family: "NEXON Lv1 Gothic OTF Bold";
}
</style>
