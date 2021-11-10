<template>
  <section id="Program">
    <article
      class="container program_wrap"
      v-for="(item, index) in programData"
      :key="index"
      v-bind:style="{ backgroundImage: 'url(' + item.bgImg + ')' }"
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
import programData from "@/data/programData.js";

export default {
  name: "Program",
  data: () => ({
    programData: programData,
  }),
};
</script>

<style scoped>
.program_wrap {
  padding: 0;
  background-size: cover;
}

.blur {
  background-color: rgba(85, 85, 85, 0.2);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border-radius: 30px;
}

.program_text_box {
  padding: 200px 30px 30px 30px;
}

.program_text_box > p {
  color: #000;
}
</style>
