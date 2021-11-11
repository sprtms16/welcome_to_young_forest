<template>
  <section id="Program">
    <article
      class="container program_wrap"
      v-for="(item, index) in reviewData"
      :key="index"
      v-bind:style="{ backgroundImage: 'url(' + item.bgImg + ')' }"
      @click="detail(index)"
    >
      <div class="blur">
        <div class="program_text_box">
          <span>{{ item.date }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.paragraph }}</p>
        </div>
      </div>
    </article>
    <!-- 관리자가 접근했을 때만 버튼이 보임. 일반 사용자는 안보임 -->
    <div class="btn_wrap">
      <router-link to="/write" tag="button">
        <span class="material-icons btn"> edit </span>
      </router-link>
    </div>
  </section>
</template>

<script>
import reviewData from "@/data/reviewData.js";

export default {
  name: "Review",
  data: () => ({
    reviewData: reviewData,
  }),
  methods: {
    detail(index) {
      this.$router.push({
        name: "Detail",
        params: {
          contentId: index,
        },
      });
    },
  },
};
</script>

<style scoped>
.container {
  background-size: cover;
  background-position: center;
  height: 50vh;
}
</style>
