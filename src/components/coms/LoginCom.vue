<template>
  <div class="login-box clearfix">
    <span class="logo-box clearfix">
      <img src="../../assets/images/perfect365_logo.png" alt="">
    </span>
    <div class="line-box">
      <span class="line-title">Login with Perfect365</span>
    </div>
    <div class="login-input clearfix">
        <div class="username-box">
          <span class="username-icon"></span>
          <input type="text" class="username">
        </div>
        <div class="password-box">
          <span class="password-icon"></span>
          <input type="text" class="password">
        </div>
    </div>
    <div class="remember-box">
        <span class="chk-box"><el-checkbox v-model="checked">Remember Me</el-checkbox></span>
        <span class="right-box">Forgot Password?</span>
    </div>
    <div class="btn-box">
      <el-button type="primary" class="btn-self">Login</el-button>
    </div>
  </div>
</template>

<script>
  import {
    Checkbox,
    CheckboxButton,
    CheckboxGroup } from "element-ui";

  export default {
    name: "LoginCom",
    components: {
      Checkbox
    },
    data() {
      return {
        checked: true
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/scss/public.scss";

  @mixin input-public{
      width: 350px;
      height: 50px;
      float: right;
      border: none;
      font-size: 18px;
      outline-color: none;
      outline-style: none;
      outline-width: none;
      background-color: #FAFFBD;
  }

  @mixin icon-public{
    display: block;
    width: 50px;
    height: 50px;
    float: left;
  }

  .login-box{
    width: 475px;
    height: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .logo-box{
    display: block;
    width: 200px;
    height: auto;
    margin: 0 auto;
    text-align: center;
    margin-top: 50px;
  }
  .logo-box{
    display: block;
    width: 150px;
    height: 32px;
  }
  .line-box{
    width: 400px;
    height: 20px;
    margin: 0 auto;
    position: relative;
    border-bottom: 1px solid #7a7979;
  }
  .line-box .line-title{
    color: #818a91;
    display: block;
    height: 20px;
    width: 140px;
    text-align: center;
    line-height: 20px;
    padding: 10px 0;
    position: absolute;
    bottom: -20px;
    left: 50%;
    background: white;
    z-index: 100;
    transform: translateX(-50%);
  }
  .login-input{
    width: 400px;
    height: auto;
    margin: 0 auto;
    margin-top: 70px;
  }

  .username-box{
    width: 100%;
    height: auto;
    overflow: hidden;
    border: none;
    border: 1px solid #c0c0c0;
    border-radius: 5px 5px 0 0;
    background-color: #FAFFBD;
  }

  .password-box{
    width: 100%;
    height: auto;
    overflow: hidden;
    border: none;
    border: 1px solid #c0c0c0;
    border-top: 0;
    border-radius: 0 0 5px 5px;
    background-color: #FAFFBD;
  }

  .username-icon{
    @include icon-public;
  }
  .password-icon{
    @include icon-public;
  }

  .username{
    @include input-public;
  }

  .password{
    @include input-public;
  }

  .remember-box{
    width: 400px;
    height: auto;
    margin: 20px auto;
  }

  .remember-box .chk-box{
    display: block;
    width: 120px;
    float: left;
    height: auto;
    overflow: hidden;
  }
  .right-box{
    display: block;
    float: right;
    width: 150px;
    text-align: right;
    color: $publicColor;
    font-size: 14px;
  }
  .btn-box{
    width: 400px;
    height: auto;
    margin: 60px auto;
  }
  .btn-box .btn-self{
    width: 100%;
    height: 50px;

  }
</style>

