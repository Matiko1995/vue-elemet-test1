<template>
  <div class='userlist'>
    <el-header style='text-align: right; font-size: 12px'>
      <el-dropdown>
        <i class='el-icon-setting' style='margin-right: 15px'></i>
        <el-dropdown-menu slot='dropdown'>
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    <el-main>
      <!-- 账号列表 -->
      <el-card class='box-card'>
        <div slot='header' class='clearfix'>
          <span>用户账号列表</span>
          <el-button
            style='float: right; padding: 3px 0'
            type='text'
          ></el-button>
        </div>
        <div class='text item'>
          <!-- 表格 -->
          <el-table :data='tableData' border stripe style='width: 100%'>
            <el-table-column prop='username' label='账号' width='180'>
            </el-table-column>
            <el-table-column prop='realname' label='实名' width='180'>
            </el-table-column>
            <el-table-column prop='age' label='年龄'> </el-table-column>
            <el-table-column prop='idType' label='证件号'> </el-table-column>
            <el-table-column fixed='right' label='操作' width='100'>
              <template slot-scope='scope'>
                <el-button
                  @click='handleEdit(scope.row.id)'
                  type='text'
                  size='small'
                  >修改</el-button
                >
                <el-button
                  @click='handleDel(scope.row.id)'
                  type='text'
                  size='small'
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </el-main>
  </div>
</template>
<script>
// 引入辅助函数
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      tableData: [
      ],
    };
  },
  created() {
    // this.$store.dispatch('GET_USERLIST').then(() => {
    //   // console.log(this.$store.state.userlist);
    //   // 把全局的userlist赋值 给tableData
    //   // this.tableData = this.$store.state.userlist;
    //   this.tableData = this.userList;
    // });
    this.getUserList().then(() => {
      this.tableData = this.userList;
    });
  },
  methods: {
    // ...mapActions(['GET_USERLIST']),
    ...mapActions({
      getUserList: 'GET_USERLIST',
    }),
    handleEdit(id) {
      console.log(`修改${id}`);
    },
    handleDel(id) {
      console.log(`删除${id}`);
    },
  },
  computed: {
    ...mapState({
      userList: (state) => state.userList,
    }),
  },
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.userlist {
  width: 100%;
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
  content: '';
}
.clearfix:after {
  clear: both;
}
</style>
