<template>
  <div class="login">
    <div class="container">
      <img src="../assets/avatar.jpg" alt="" class="avatar">
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="username" >
        <el-input v-model="loginForm.username" placeholder="请输入用户名" clearable prefix-icon="icon-user"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input  prefix-icon="icon-key"  clearable placeholder="请输入6-15位密码" type="password" v-model="loginForm.password" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')" class="login-btn">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入6-15位密码', trigger: 'blur' }]
      }
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
