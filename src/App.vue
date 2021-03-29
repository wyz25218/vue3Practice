<template>
  <Head :list="list" @change=changeNav></Head>
  <router-view/>
  <Footer></Footer>
  <ImageList></ImageList>
</template>

<script>
import head from './components/Head'
import Footer from './components/Footer'
import ImageList from './components/ImageList'
export default {
  components: {
    Head: head,
    Footer,
    ImageList
  },
  data() {
    return {
      list: ['首页', '文章', '其他', '关于'],
    }
  },
  mounted() {
    document.body.addEventListener('click', (e) => {
      // console.log(e)
      let x = e.x, y = e.y
      console.log(x, y)
    })
  },
  methods: {
    changeNav(index) {
      console.log(index)
      switch(index) {
        case 0: 
          this.toPage('/home') 
          break
        case 1: 
          this.toPage('/article') 
          break
        case 2: 
          this.toPage('/other') 
          break
        case 3: 
          this.toPage('/about') 
          break
      }
    },
    toPage(path) {
      this.$router.push(path)
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
