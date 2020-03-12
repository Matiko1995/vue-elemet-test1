<template>
  <div class="home">
    <!-- 首页头部 -->
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="username">
        <!-- 从state里获取用户名 -->
        <!-- {{ $store.state.userinfo.username }} -->
        {{ username }}
      </span>
    </el-header>
    <!-- 首页主体 -->
    <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户信息卡</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮</el-button
          >
        </div>
        <div class="text item">用户账号: {{ userinfo.username }}</div>
        <div class="text item">用户密码: {{ userinfo.password }}</div>
        <div class="text item">真实实名: {{ userinfo.realname }}</div>
        <div class="text item">证件号码: {{ userinfo.idType }}</div>
      </el-card>
    </el-main>
  </div>
</template>
<script>
// 引入 mapState
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    // 用户名
    // username () {
    //     return this.$store.state.userinfo.username
    // },
    // 辅助函数的形式，获取state数据
    ...mapState({
      userinfo: (state) => state.userinfo,
      username: (state) => state.userinfo.username,
    }),

    // 获取用户信息
    // userinfo (){
    //     return this.$store.state.userinfo
    // }
  },
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.home {
  width: 100%;
}
.username {
  font-size: 20px;
  color: #409eff;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
