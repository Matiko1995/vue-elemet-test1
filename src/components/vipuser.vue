<template>
    <div class="useradd">
        <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span class="username">{{ username }}</span>
        </el-header>
        <el-main>
            <el-card class='box-card'>
        <div slot='header' class='clearfix'>
          <span>VIP账号列表</span>
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
                  >修改</el-button>
                <el-button
                  @click='handleDel(scope.row.id)'
                  type='text'
                  size='small'
                  >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
        </el-main>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters} from 'vuex';

export default {
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    // 1.
    // console.log(this.userList);
    // this.getUserList().then(() => {
    //   console.log('数据', this.userList);


    //   this.newUserList = this.userList.filter(v => v.age > 25);
    //   this.tableData = this.newUserList;
    // });

    this.getUserList().then(() => {
      // 2.
      // 获取全局的getters
      // console.log(this.$store.getters.vipUsers);
      // this.tableData = this.$store.getters.vipUsers;

      // 3.
      // 使用辅助函数 获取全局的getters
      console.log(this.vipUsers);
      this.tableData = this.vipUsers;
    });
  },
  methods: {
    ...mapActions({
      getUserList: 'GET_USERLIST',
    }),
  },
  computed: {
    ...mapGetters(['vipUsers']),
    ...mapState({
      userList: (state) => state.userList,
      username: (state) => state.userinfo.username,
    }),
  },
};
</script>
<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }
    .useradd {
        width: 100%;
    }
    .username {
  font-size: 20px;
  color: #409eff;
}
</style>
