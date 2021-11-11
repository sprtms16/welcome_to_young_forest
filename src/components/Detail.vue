<template>
  <section>
    hello world!
    <div class="btn_wrap" type="button" @click="goBack">
      <span class="material-icons-outlined btn"> reply </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "Detail",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped></style>
