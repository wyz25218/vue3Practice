<template>
  <div class="footer">
    <el-button type="text" @click="visible=true">站长登录</el-button>
    <el-dialog title="站长登录" v-model="visible" center>
      <Login></Login>
    </el-dialog>
  </div>
</template>

<script>
import Login from '../components/Login'
export default {
  name: 'Footer',
  components: {
    Login
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.footer{
  background-color: #333;
  // position: absolute;
  // bottom: 0;
}
</style>