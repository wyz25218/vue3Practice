<template>
  <div class="article-box">
    <header class="title">{{article.title || ''}}</header>
    <main class="body">
      {{article.message || ''}}
    </main>
    <footer>
      <span class="time">{{article.createTime || ''}}</span>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      require: false
    }
  }
}
</script>

<style lang="scss" scoped>
.article-box{
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  .title{
    height: 40px;
    font-size: 20px;
    font-weight: 600;
  }
  .body{
    height: 100px;
  }
  .footer{
    height: 14px;
  }
}
</style>