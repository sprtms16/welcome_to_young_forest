<template>
  <footer>
    <div class="footer_top">
      <div class="text_area">
        <p>별가람 행복주택 청년회</p>
        <p>모여봐요, 청년의 숲</p>
      </div>
      <div class="sns_area">
        <ul class="sns_logo_warp">
          <li v-for="(item, index) in logoData" :key="index">
            <a href="#">
              <img :src="item.img" :art="item.title" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer_bottom">
      <p>경기도 남양주시 덕송 3로 30</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footers",
  data: () => ({
    logoData: [
      {
        img: require("../assets/img/ico_talkch.svg"),
        title: "kakao talk logo",
      },
      {
        img: require("../assets/img/ico_facebook.svg"),
        title: "facebook logo",
      },
      {
        img: require("../assets/img/ico_instagram.svg"),
        title: "instagram logo",
      },
    ],
  }),
};
</script>

<style>
footer {
  width: 100vw;
  background-color: #e2e2e2;
}

.footer_top {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.text_area > p {
  font-size: 14px;
  font-family: "NEXON Lv1 Gothic OTF Bold";
  color: #adadad;
}

.sns_logo_warp {
  display: flex;
}

.sns_logo_warp > li {
  width: 30px;
  margin-left: 10px;
}

.sns_logo_warp img {
  width: 100%;
  vertical-align: center;
}

.footer_bottom > p {
  text-align: center;
  padding: 20px;
  font-size: 10px;
  color: #adadad;
}
</style>
