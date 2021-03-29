<template>
  <el-form ref="form" label-position="right" label-width="80px" class="form">
    <el-form-item 
      label="账号"
      prop="acount"
      :rules="[{require: true, message: '账号不能为空'}]"
    >
      <el-input type="acount" v-model="acount" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item 
      label="密码"
      prop="password"
      :rules="[{require: true, message: '密码不能为空'}]"
    >
      <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form')">登录</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  data() {
    return {
      acount: '',
      password: ''
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container{
  width: 500px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  .form{
    // width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
}
</style>
