<template>
  <div id="NoticeList">
    <div v-for="(item, index) in noticeData" :key="index" class="noticelist_wrap">
      <div class="notice_img_box">
        <img :src="item.img" :art="item.title"/>
      </div>
      <div class="notice_text_box">
        <h2>{{ item.title }} <span v-if="item.special">SPECIAL</span></h2>
        <p>{{ item.paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoticeList',

  data: () => ({
    noticeData: [
      {img: require("@/assets/img/icon_512.png"), title: "청년의 숲 새로운 앰블럼을 소개합니다!", paragraph: "앰블럼 구경하러 오세요"},
      {img: require("@/assets/img/thumb_kakaotalk.png"), title: "청년의 숲이 궁금하신가요?", paragraph: "청년의 숲 오픈 카카오톡을 소개합니다"},
      {img: require("@/assets/img/쉼표문화센터_logo.png"), title: "쉼표 문화센터", paragraph: "가끔은 나를 보살피는 날도 있어야죠", special: true},
      {img: require("@/assets/img/취업.png"), title: "찾아가는 로드맵 컨설팅", paragraph: "취업이 막막하다면 여기를 주목!"},
      {img: require("@/assets/img/취업.png"), title: "취업특강", paragraph: "채용 트랜드 및 유형별 대비 전략"}
    ]
  }),
}
</script>

<style>
#NoticeList {
  padding: 10px 20px;
}

.noticelist_wrap {
  margin: 10px 0;
  display: flex;
}

.notice_img_box {
  max-width: 75px;
  max-height: 75px;
  margin-right: 15px;
}

.notice_img_box > img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.notice_text_box {
  margin-top: 5px;
}

.notice_text_box > h2 > span {
  color: #F2226E;
  font-size: 10px;
  font-weight: bold;
  padding-bottom: 8px;
}

.notice_text_box > h2 {
  color: #333;
  font-size: 14px;
}

.notice_text_box > p {
  color: #737373;
  font-size: 14px;
}
</style>
