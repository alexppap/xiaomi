<template>
  <div>
    <img class="header-img" src="./img/milogo.png">
    <div class="box">
      <div class="login-area">
        <div class="login-header">
          <a href="#">账号登录</a>
          <span class="line"></span>
          <a href="#">帐号注册</a>
        </div>
        <div class="login-input">
          <div class="input">
            <el-input v-model="username" placeholder="邮箱/手机号码/小米ID"></el-input>
          </div>
          <div class="input">
            <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
          </div>
          <div class="login-button" @click="doLogin">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    doLogin () {
      if (this.username === '') {
        alert('用户名不能为空')
        return false
      }
      if (this.password === '') {
        alert('密码不能为空')
        return false
      }
      var user = this.$store.state.loginData[0].username1
      var psw = this.$store.state.loginData[0].password1
      if (this.username === user && this.password === psw) {
        this.$store.commit('changeloginShow')
        this.$router.push('/')
      } else {
        alert('帐号或密码错误')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.input >>> .el-input__inner
  font-size: .18rem
  height: .6rem
.header-img
  padding-left: 2rem
.box
  position: relative
  width: 100%
  height: 6rem
  background: no-repeat url("./img/bgimg.jpg")
  background-size: 100%
  .login-area
    position: absolute
    right: 2rem
    top: .3rem
    bottom: .3rem
    width: 5rem
    background: #fff
    .login-header
      padding: .27rem 0 .24rem
      text-align: center
      font-size: .24rem
      color: #666
      a:link
        color: #666
      a:visited
        color: #666
      a:hover
        color:#f56600
      .line
        width: .01rem
        height: .24rem
        margin: 0 .35rem 0 .42rem
        border: .01rem solid #e0e0e0
    .login-input
      padding: .1rem .3rem
      font-size: .18rem
      .input
        padding: .13rem 0
        color: #4a4a4a
.login-button
  background-color: #ff6700;
  width: 100%
  height: .5rem
  line-height: .5rem
  display: block
  margin-top: .14rem
  text-align: center
  font-size: .14rem
  color: #fff
</style>
