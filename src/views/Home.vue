<template>
  <div class="home">
    <div class="img_wrap">
      <img src="@/assets/img/주요공지배너.png" alt="notice_banner">
    </div>
    <div class="notice_list_wrap">
      <NoticeList />
    </div>
  </div>
</template>

<script>
  import NoticeList from '@/components/NoticeList'

  export default {
    name: 'Home',

    components: {
      NoticeList,
    },
  }

</script>
