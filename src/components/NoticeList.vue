<template>
  <article id="NoticeList">
    <div
      v-for="(item, index) in noticeData"
      :key="index"
      class="container noticelist_wrap"
    >
      <div class="notice_img_box">
        <img :src="item.img" :art="item.title" />
      </div>
      <div class="notice_text_box">
        <span>SPECIAL</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.paragraph }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "NoticeList",
  data: () => ({
    noticeData: [
      {
        img: require("@/assets/img/thumb_kakaotalk.png"),
        title: "청년의 숲을 소개합니다!",
        paragraph: "청년의 숲 오픈 카카오톡을 소개합니다",
      },
      {
        img: require("@/assets/img/쉼표문화센터_logo.png"),
        title: "쉼표 문화센터",
        paragraph: "가끔은 나를 보살피는 날도 있어야죠",
      },
      {
        img: require("@/assets/img/취업.png"),
        title: "찾아가는 로드맵 컨설팅",
        paragraph: "취업이 막막하다면 여기를 주목!",
      },
      {
        img: require("@/assets/img/취업.png"),
        title: "취업특강",
        paragraph: "채용 트랜드 및 유형별 대비 전략",
      },
    ],
  }),
};
</script>

<style scoped>
.notice_img_box {
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
}

.notice_img_box > img {
  width: 75px;
  height: 75px;
  border-radius: 20px;
}
</style>
