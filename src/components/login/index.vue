<template>
<<<<<<< HEAD
  <div class="app-login">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="4rem" class="demo-ruleForm" style="padding: 0 2rem">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm2.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass"></el-input>
      </el-form-item>
      <el-form-item class="rememberpw"><el-checkbox v-model="checked">记住用户</el-checkbox></el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">登录<span v-show="loadshow" class="el-icon-loading"></span></el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
=======
  <div class="">
    <div class="bg-bms">
      <img src="./../../img/bms.png" alt="">
    </div>
    <div class="app-login">
      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="4rem" class="demo-ruleForm" style="padding: 0 2rem;color:#fff">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm2.username" class="sessionname"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass"></el-input>
        </el-form-item>
        <!-- <el-form-item class="rememberpw"><el-checkbox v-model="checked">记住用户</el-checkbox></el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">登录<span v-show="loadshow" class="el-icon-loading"></span></el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex'
import { USER_SIGNIN, USER_INFO, CHECKED_STATUS } from '../../store/storex'
import md5 from 'md5'
let validateUser = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('用户名不能为空'))
  }
  callback()
}
let validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  }
  callback()
}
export default {
  name: 'login',
  data () {
    return {
      msg: 'login here',
      btn: false,
      loadshow: false,
<<<<<<< HEAD
      checked: false,
=======
      // checked: false,
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
      checkedbtn: false,
      form: {
        userName: '',
        userPassword: ''
      },
      ruleForm2: {
        pass: '',
        username: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        username: [
          { validator: validateUser, trigger: 'blur' }
        ]
      }
    }
  },
<<<<<<< HEAD
  watch: {
    'checked' () {
      this.checked === true ? localStorage.setItem('rememberbtn', true) : localStorage.setItem('rememberbtn', false)
    }
  },
=======
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
  methods: {
    ...mapActions([USER_SIGNIN]),
    ...mapActions([USER_INFO]),
    ...mapActions([CHECKED_STATUS]),
    submitForm (formName) {
      this.loadshow = true
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = {
            userName: this.ruleForm2.username,
            userPassword: md5(this.ruleForm2.pass)
          }
          Vue.http.options.emulateJSON = true
          this.$http.post('http://localhost:8088/bms/loginApp/loginUserApp.action', data).then((response) => {
<<<<<<< HEAD
            if (response.status) {
              if (this.checked === true) {
                localStorage.setItem('checked', true)
                localStorage.setItem('userName', this.ruleForm2.username)
                localStorage.setItem('userPassword', md5(this.ruleForm2.pass))
              } else {
                localStorage.setItem('checked', false)
=======
            if (!response.body.status) {
              this.$alert(response.body.message)
              this.loadshow = false
              return
            }
            if (response.status) {
              if (this.checked === true) {
                // localStorage.setItem('checked', true)
                localStorage.setItem('userName', this.ruleForm2.username)
                localStorage.setItem('userPassword', md5(this.ruleForm2.pass))
              } else {
                // localStorage.setItem('checked', false)
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
                localStorage.removeItem('userName')
                localStorage.removeItem('userPassword')
              }
              this.USER_SIGNIN(data)
              this.CHECKED_STATUS('http://localhost:8088')
              this.USER_INFO(response)
              this.loadshow = false
              let objdata = this.$store.state.user.body.resultObj || ''
<<<<<<< HEAD
              if (objdata.roleValue === 'ADMIN' || objdata.roleValue === 'SUPER') {
                this.$router.push({
                  path: 'newsmedia',
                  query: {
                    u_userid: objdata.u_userid,
                    u_roleId: objdata.u_roleId
                  }
                })
              } else {
                this.$router.push({
                  path: 'commenter',
                  query: {
                    u_userid: objdata.u_userid,
                    u_roleId: objdata.u_roleId
                  }
=======
              sessionStorage.setItem('userName', this.ruleForm2.username)
              if (objdata.roleValue === 'ADMIN' || objdata.roleValue === 'SUPER') {
                this.$router.push({
                  path: 'newsmedia'
                })
              } else {
                this.$router.push({
                  path: 'commenter'
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
                })
              }
            } else {
              this.loadshow = false
              this.$message('网络错误')
              return false
            }
          })
        } else {
          this.loadshow = false
          this.$alert('用户名或密码提交有误')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    resetuser () {
      if (this.checked === true && localStorage.getItem('userName') && localStorage.getItem('userPassword')) {
        this.ruleForm2.pass = localStorage.getItem('userPassword')
        this.ruleForm2.username = localStorage.getItem('userName')
      } else {
        this.ruleForm2.pass = ''
        this.ruleForm2.username = ''
      }
<<<<<<< HEAD
      console.log(this.ruleForm2.pass)
      console.log(this.ruleForm2.username)
      console.log(this.checked)
=======
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
    }
  },
  created () {
    if (localStorage.getItem('rememberbtn') === true) {
      this.checked = true
    } else {
      this.checked = false
    }
<<<<<<< HEAD
=======
  },
  mounted () {
    this.resetForm('ruleForm2')
    if (sessionStorage.getItem('userName')) {
      this.ruleForm2.username = sessionStorage.getItem('userName')
    }
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<<<<<<< HEAD
<style rel="stylesheet/scss" lang="scss" scoped>
=======
<style rel="stylesheet/scss" lang="scss">
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
<<<<<<< HEAD
.app-login{
  margin-top: 15rem;
  .rememberpw{
    text-align: left;
  }
=======
.bg-bms{
  position: absolute;
  text-align: center;
  width: 100%;
  top: 12%;
  z-index: 111;
}
.app-login{
  background: url('./../../img/background.jpg') no-repeat center center fixed;
  position:absolute;
  z-index:-1;
  width:100%;
  height:100%;
  top:0px;
  left:0px;
  .demo-ruleForm{
    margin-top: 15rem;
  }
  .rememberpw{
    text-align: left;
  }
  label.el-form-item__label{
    color: #fff;
  }
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
}
.login {
	padding: 50px;
	text-align: center;
	.line {
		padding: 5px;
		input {
			padding: 0 10px;
			line-height: 28px;
		}
	}
	button {
		padding: 0 20px;
		margin-top: 20px;
		line-height: 28px;
	}
}
</style>
