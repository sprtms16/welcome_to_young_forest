<template>
  <section id="home">
    <article class="index_wrap container">
      <h2>숲속을 거닐 준비가 되었나요?</h2>
    </article>
    <NoticeList />
  </section>
</template>

<script>
import NoticeList from "../components/NoticeList.vue";

export default {
  name: "Home",

  components: {
    NoticeList,
  },
};
</script>

<style scoped>
.index_wrap {
  background-image: url("../assets/img/icon_512.png");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  height: calc(100vh - 170px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.index_wrap > h2 {
  font-family: "NEXON Lv1 Gothic OTF Bold";
  color: #fff;
  text-shadow: 0px 0px 10px #000;
}
</style>
