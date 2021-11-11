<template>
  <section>
    <article
      class="container"
      v-for="(item, index) in reviewData.photo"
      :key="index"
      v-bind:style="{ backgroundImage: 'url(' + item + ')' }"
    ></article>
    <div class="btn_wrap" type="button" @click="goBack">
      <span class="material-icons-outlined btn"> reply </span>
    </div>
  </section>
</template>

<script>
import reviewData from "@/data/reviewData.js";

export default {
  name: "Detail",
  data() {
    const index = this.$route.params.contentId;
    return {
      reviewData: reviewData[index],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
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
