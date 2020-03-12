<template>
    <div class="index">
        <!-- {{ $store.state.userinfo }} -->
        <el-container style="height: 500px; border: 1px solid #eee">
            <!-- 左侧内容 -->
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
               <el-menu default-action = "/"  :default-openeds="['1']" text-color="#fff" background-color='#545c64' router >
                <!-- 默认首页 -->
                <el-menu-item index="/" style="background: #333;">
                    <i class="el-icon-setting"></i>
                    vuexms系统首页
                </el-menu-item>
                <!-- 导航1 -->
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>账号管理</template>
                    <el-menu-item index="userlist">账号列表</el-menu-item>
                    <el-menu-item index="vipuser">vip账号</el-menu-item>
                    <el-menu-item index="passwordedit">修改密码</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                    <el-menu-item index="3-3">选项3</el-menu-item>
                </el-submenu>
                </el-menu>
            </el-aside>

            <!-- 右侧内容 -->
            <el-container>
                 <router-view>

                 </router-view>
            </el-container>
        </el-container>
    </div>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      },
      ],
    };
  },
});
</script>


<style scope>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }
    .el-menu {
        border-right: 0px;
    }
    .el-aside {
        background-color: #545c64!important;
    }
    html,body,#app, .index {
        height: 100%;
    }
    .el-container {
        height: 100%!important;
    }
    .top-text {
        text-align: center;
        padding: 20px 0px;
        background-color: #333;
    }
</style>
