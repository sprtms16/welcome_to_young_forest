<template>
  <!-- 글쓰기 버튼을 누르면 이 페이지가 아래에서 위로 올라오게 구현하고 싶은데 어떻게 하는지 모르겠습니다아아악 -->
  <section id="Write">
    <form action="#" method="#">
      <ul>
        <li class="select">
          <!-- 고르는 게시판에 따라 게시물 업로드 반영.. 을 못하겠습니다 ㅠ -->
          <!-- v-if 쓰려다가 실패ㅠ 옵션 두 가지니까 if, else로 해서 조건문으로 데이터 전송 위치를 바꾸는건가 했어요-->
          <select>
            <option disabled value="">게시판을 고르세요</option>
            <option>프로그램</option>
            <option>활동후기</option>
          </select>
        </li>
        <li>
          <input
            v-model="date"
            type="text"
            placeholder="작성 날짜를 입력하세요"
          />
        </li>
        <li>
          <input v-model="title" type="text" placeholder="제목을 입력하세요." />
        </li>
        <li>
          <!-- 이미지 버튼을 눌렀을 때 이미지를 저장하고 보내는 방법도 모르겠어요...ㅠㅠ -->
          <span
            class="material-icons-outlined upload_img_btn"
            type="button"
            @click="uploadingImg"
          >
            image
          </span>
        </li>
        <li>
          <textarea placeholder="내용을 입력하세요"> </textarea>
        </li>
        <li class="write_btn_wrap">
          <button class="btn write_btn" @click="write">작성</button>
        </li>
      </ul>
    </form>
    <div class="btn_wrap" type="button" @click="goBack">
      <span class="material-icons-outlined btn"> reply </span>
    </div>
  </section>
</template>

<script>
import programData from "@/data/programData.js";
//import reviewData from "@/data/reviewData.js";

export default {
  name: "Write",
  data() {
    return {
      programData: programData,
      //reviewData: reviewData,
      bgImg: "",
      date: "",
      title: "",
      paragraph: "",
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    write() {
      this.programData.push({
        bgImg: this.bgImg,
        date: this.date,
        title: this.title,
        paragraph: this.paragraph,
      });
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
select {
  padding: 10px;
  border: 3px solid #e2e2e2;
  font-family: inherit;
  font-size: 0.875rem;
  background: url("../assets/img/expand_more_black_24dp.svg") no-repeat 95% 50%;
  border-radius: 0px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.select {
  margin-bottom: 10px;
}

input[type="text"] {
  width: 100%;
}

textarea {
  height: 50vh;
}

.upload_img_btn {
  padding: 10px;
}
</style>
