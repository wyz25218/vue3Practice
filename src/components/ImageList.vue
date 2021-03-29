<template>
  <div id="image-list">
    <!-- <image src="../assets/A1.jpg"></image> -->
    <img :src="url" alt="" style="width:100%;height:100%;" class="image-item1">
    <img :src="url2" alt="" style="width:100%;height:100%;" class="image-item2">
  </div>
</template>

<script>
export default {
  name: 'ImageList',
  data() {
    return {
      url: 'https://goss2.cfp.cn/creative/vcg/800/new/VCG41N1209433139.jpg',
      url2: 'https://goss3.cfp.cn/creative/vcg/800/new/VCG41N1208988499.jpg',
      urls: ['https://goss2.cfp.cn/creative/vcg/800/new/VCG41N1209433139.jpg', 'https://goss2.cfp.cn/creative/vcg/800/new/VCG41N1222716030.jpg'],
      urls2: ['https://goss3.cfp.cn/creative/vcg/800/new/VCG41N1208988499.jpg', 'http://www.shijuepi.com/uploads/allimg/200918/1-20091Q10420.jpg'],
      timer1: '',
      timer2: ''
    }
  },
  beforeUnmount() {
    clearInterval(this.timer1)
    clearInterval(this.timer2)
  },
  methods: {
    startTimeout() {
      const that = this
      that.urls.length > 0 && setTimeout(() => {
        let count = that.urls.findIndex((item) => item === that.url)
        that.url = that.urls[++count % that.urls.length]
        that.timer1 = setInterval(() => {
          let count = that.urls.findIndex((item) => item === that.url)
          that.url = that.urls[++count % that.urls.length]
        }, 10000)
      }, 7000)
      that.urls2.length > 0 && setTimeout(() => {
        let count = that.urls2.findIndex((item) => item === that.url2)
        that.url2 = that.urls2[++count % that.urls2.length]
        that.timer2 = setInterval(() => {
          let count = that.urls2.findIndex((item) => item === that.url2)
          that.url2 = that.urls2[++count % that.urls2.length]
        }, 10000)
      }, 12000)
    }
  },
  mounted() {
    let width = document.documentElement.clientWidth
    let height = document.documentElement.clientHeight
    // console.log(width, height)
    const imglist = document.getElementById("image-list")
    // console.log(imglist)
    imglist.style.width = width + 'px'
    imglist.style.height = height + 'px'
    this.url = this.urls[0]
    this.url2 = this.urls2[0]
    this.startTimeout()
  }
}
</script>

<style lang="scss" scoped>
#image-list {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
  .image-item1{
    position: absolute;
    top: 0;
    left: 0;
    animation: changeOne 10s -3.5s linear infinite;
    -webkit-user-drag: none;
  }
  .image-item2{
    position: absolute;
    top: 0;
    left: 0;
    animation: changeOne 10s 1.5s linear infinite;
    -webkit-user-drag: none;
    // animation: name duration timing-function delay iteration-count direction fill-mode;
  }
}
@keyframes changeOne {
  0% {
    opacity: 0%
  }
  15% {
    opacity: 0%
  }
  35% {
    opacity: 100%
    }
  65% {
    opacity: 100%
  }
  85% {
    opacity: 0%;
  }
  100% {
    opacity: 0%
  }
}
@keyframes changeTwo {
  0% {
    opacity: 100%
  }
  25% {
    opacity: 0%
    }
  75% {
    opacity: 0%
  }
  100% {
    opacity: 100%;
  }
}
</style>