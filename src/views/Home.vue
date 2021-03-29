<template>
  <div class="home">
    <ArticleBox v-for="item in list" :key="item.id" :article="item"></ArticleBox>
  </div>
</template>

<script>
import ArticleBox from '../components/ArticleBox'
export default {
  name: 'Home',
  components: {
    ArticleBox
  },
  data() {
    return {
      list: [
        {id: '01', title: '12345', message: '12288127317823718274182741720417209741294', createTime: '2021-1-13'},
        {id: '02', title: '12345', message: '12288127317823718274182741720417209741294', createTime: '2021-1-13'},
        {id: '03', title: '12345', message: '12288127317823718274182741720417209741294', createTime: '2021-1-13'},
        {id: '04', title: '12345', message: '12288127317823718274182741720417209741294', createTime: '2021-1-13'},
        {id: '05', title: '12345', message: '12288127317823718274182741720417209741294', createTime: '2021-1-13'},
        {id: '06', title: '12345', message: '12288127317823718274182741720417209741294', createTime: '2021-1-13'},
        {id: '07', title: '12345', message: '12288127317823718274182741720417209741294', createTime: '2021-1-13'},
        {id: '08', title: '12345', message: '12288127317823718274182741720417209741294', createTime: '2021-1-13'},
      ]
    }
  },
  methods: {
    // toLogin() {
    //   this.$router.push()
    // }
  }
}
</script>

<style lang="scss" scoped>
.home{
  // height: 100vh;
}
</style>
