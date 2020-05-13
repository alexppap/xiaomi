<template>
  <div class="login clearfix">
    <div class="login-wrap">
      <div class="img-wrapper">
      <img src="./imgs/logo.png">
    </div>
      <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="user" status-icon label-width="80px">
          <h3>注册</h3>
          <hr>
          <el-form-item prop="username" label="用户名">
            <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="email" label="邮箱">
            <el-input v-model="user.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="设置密码">
            <el-input v-model="user.password" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item prop="cpassword" label="确认密码">
            <el-input v-model="user.cpassword" show-password placeholder="请确认密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon @click="doRegister()">注册账号</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'RigisterPage',
  data () {
    return {
      user: {
        username: '',
        email: '',
        password: '',
        cpassword: ''
      }
    }
  },
  methods: {
    doRegister () {
      if (!this.user.username) {
        this.$message.error('请输入用户名！')
      } else if (!this.user.email) {
        this.$message.error('请输入邮箱！')
      } else if (this.user.email != null) {
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (!reg.test(this.user.email)) {
          this.$message.error('请输入有效的邮箱！')
        } else if (!this.user.password) {
          this.$message.error('请输入密码！')
        } else if (this.user.password !== this.user.cpassword) {
          this.$message.error('两次密码不一致')
        }
      } if (this.user.username && this.user.email && this.user.password && this.user.cpassword) {
        // this.$router.push({ path: '/' }) // 无需向后台提交数据，方便前台调试
        axios({
          method: 'post',
          url: 'http://localhost:3000',
          data: { name: this.user.username,
            email: this.user.email,
            password: this.user.password
          }
        })
          .then(res => {
            console.log(this.data)
            console.log(res)
            if (res.data.status === 200) {
            } else {
              alert('您输入的用户名已存在！')
            }
          })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.login >>> .el-button--primary
  background: #ff6700
  border-color: #ff6700
.img-wrapper
  margin: auto 350px
.login
  width: 100%
  height: 740px
  overflow: hidden
.login-wrap
  width: 800px
  height: 600px
  margin: 215px auto
  overflow: hidden
  padding-top: 10px
  line-height: 20px
h3
  color: #ff6700
  font-size: 24px
hr
  background-color: #444
  margin: 20px auto
.el-button
  width: 80%;
  margin-left: -50px
</style>
