/* eslint-disable max-len */
<template>
  <div class="login">
    <!-- 登陆表单 -->
<!-- eslint-disable -->
<el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-loginForm">
	<!-- eslint-enable -->
    <h1 class="title"><i class="el-icon-s-tools"></i>Vuexms-登陆</h1>
    <el-form-item label="账号" prop="username">
        <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登陆</el-button>
        <el-button @click="resetForm('loginForm')">清空</el-button>
      </el-form-item>
  </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      // 登陆表达的数据
      loginForm: {
        username: '',
        password: '',
      },
      // 验证规则
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      // eslint-disable-next-line consistent-return
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 保留this
          // const _this = this;
          // 收集用户名和密码 发送给后端
          let _this = this;
          this.axios.post('/api/checklogin', {
            username: _this.loginForm.username,
            password: _this.loginForm.password,
          })
            // eslint-disable-next-line no-unused-vars
            .then((response) => {
              if (response.data.length) {
                // console.log('接收后端响应请求的',response.data[0]);

                //  把当前登录用户数据存入state
                _this.$store.commit('SAVE_USERINFO',response.data[0])
                _this.$message({
                  message: '恭喜你，登陆成功',
                  type: 'success',
                });
                // 跳转到后台首页
                _this.$router.push('/');
              } else {
                _this.$message.error('请检查用户名或密码！');
              }
            });
        } else {
          // eslint-disable-next-line no-console
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body{margin: 0; padding: 0;}
html, body, #app, .login {
 height: 100%;
}
.login {
 display: flex;
 justify-content: center;
 align-items: center;
}
.el-form {
width: 400px;
border: 1px solid #cccccc;
border-radius: 4px;
padding: 00px 45px 10px 10px;
}
.el-form .title{
  font-size: 22px;
  color: #333;
  font-weight: bold;
  padding: 20px 0 20px 60px;
  }
</style>
