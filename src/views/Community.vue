<template>
  <section id="commnunity">
    <article class="container">
      <ul class="commnunity_textbox_wrap">
        <li class="textbox_personal">
          <input type="text" placeholder="이름" />
          <input type="password" placeholder="비밀번호" />
        </li>
        <li class="textbox_write">
          <textarea placeholder="당신의 이야기를 들려주세요"> </textarea>
        </li>
        <li class="write_btn_wrap">
          <button class="btn write_btn">올리기</button>
        </li>
      </ul>
    </article>
    <!-- 댓글과 내용의 데이터가 분리 되어야 할 거 같아서 분리 했는데 데이터가 두 개 있는 상황에서는 어떻게 해야할 지 모르겠어요..ㅠ -->
    <!-- 두 개를 끌어와서 동시에 쓰는 방법은 어려워서 communityData 쪽은 데이터만 만들어두고 타이핑 했습니다! -->
    <article class="container community_container">
      <h3>홍길동</h3>
      <span>2021.10.01</span>
      <p>같이 도서관 가실 분 구해봅니다!</p>
      <div class="comment_list_wrap">
        <ul
          class="comment_list"
          v-for="(comment, index) in commentData"
          :key="index"
        >
          <li class="comment_name">{{ comment.nickName }}</li>
          <li class="comment_contants">{{ comment.contants }}</li>
        </ul>
      </div>
      <div class="comment_wrap">
        <div class="comment_input">
          <input type="text" placeholder="이름" />
          <input type="text" placeholder="댓글" />
        </div>
        <button class="btn write_btn">올리기</button>
      </div>
    </article>
    <article class="container community_container">
      <h3>홍길동</h3>
      <span>2021.10.01</span>
      <p>같이 도서관 가실 분 구해봅니다!</p>
      <div class="comment_list_wrap">
        <ul
          class="comment_list"
          v-for="(comment, index) in commentData"
          :key="index"
        >
          <li class="comment_name">{{ comment.nickName }}</li>
          <li class="comment_contants">{{ comment.contants }}</li>
        </ul>
      </div>
      <div class="comment_wrap">
        <div class="comment_input">
          <input type="text" placeholder="이름" />
          <input type="text" placeholder="댓글" />
        </div>
        <button class="btn write_btn">올리기</button>
      </div>
    </article>
    <article class="container community_container">
      <h3>홍길동</h3>
      <span>2021.10.01</span>
      <p>같이 도서관 가실 분 구해봅니다!</p>
      <div class="comment_list_wrap">
        <ul
          class="comment_list"
          v-for="(comment, index) in commentData"
          :key="index"
        >
          <li class="comment_name">{{ comment.nickName }}</li>
          <li class="comment_contants">{{ comment.contants }}</li>
        </ul>
      </div>
      <div class="comment_wrap">
        <div class="comment_input">
          <input type="text" placeholder="이름" />
          <input type="text" placeholder="댓글" />
        </div>
        <button class="btn write_btn">올리기</button>
      </div>
    </article>
  </section>
</template>

<script>
import communitiyData from "@/data/communityData.js";
import commentData from "@/data/commentData.js";

export default {
  name: "Community",
  data: () => ({
    communitiyData: communitiyData,
    commentData: commentData,
  }),
};
</script>

<style scoped>
.textbox_personal {
  display: flex;
  justify-content: space-between;
}

.textbox_personal > input {
  width: 49%;
}

.textbox_write {
  margin-top: 15px;
}

.textbox_write > textarea {
  min-height: 100px;
}

.community_container > h3 {
  margin: 0;
}

.community_container > span {
  color: #8c8c8c;
}

.community_container > p {
  margin: 15px 0;
}

.comment_list {
  display: flex;
  line-height: 1.3;
}

.comment_name {
  font-size: 0.625rem;
  font-family: "NEXON Lv1 Gothic OTF Bold";
  margin-right: 5px;
}

.comment_contants {
  font-size: 0.625rem;
}

.comment_wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.comment_input {
  width: calc(100% - 90px);
  display: flex;
  justify-content: space-between;
}

.comment_input > input:first-child {
  max-width: 60px;
  margin-right: 10px;
}

.comment_input > input:last-child {
  width: calc(100% - 70px);
}
</style>
