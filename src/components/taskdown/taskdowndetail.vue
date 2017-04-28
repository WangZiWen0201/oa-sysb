<template>
  <div class="taskdown">
    <div class="newsmedia--taskdetail-title">
      <div class="el-icon-arrow-left" @click="linkToPath()"></div>
      <div class="">任务下发</div>
      <div class=""></div>
    </div>
    <div v-show="showloading" class="showloading"><span class="el-icon-loading" ></span>数据加载中</div>
    <div class="taskdown--form-wrap">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm taskdownform">
        <el-form-item label="网址" prop="website">
          <el-input v-model="ruleForm.website"></el-input>
        </el-form-item>
        <el-form-item label="任务类型" prop="tasktype">
          <el-select v-model="ruleForm.tasktype" placeholder="请选择任务类型" @change="showtasktype(ruleForm.tasktype)">
            <el-option v-for="(key, value) in tasktypeArr" :label="key.name" :value="key.value" :key="key"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="事故类型" prop="eventtype">
          <el-select v-model="ruleForm.eventtype" placeholder="请选择事故类型" @change="showeventtype(ruleForm.eventtype)">
            <el-option v-for="(key, value) in eventypeArr" :label="key.basename" :value="key.value" :key="key"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="任务描述">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="高级选项" prop="delivery">
          <el-switch on-text="" off-text="" v-model="ruleForm.delivery">
          </el-switch>
        </el-form-item>
        <div class="taskdown--form-option" v-show="ruleForm.delivery">
          <div class="option-ale">
            <el-checkbox v-model="sendmessage">短信提醒</el-checkbox>
            <el-checkbox v-model="sendwechat">微信提醒</el-checkbox>
          </div>
          <el-form-item label="日期选择">
            <el-col :span="11">
              <el-form-item>
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
        </div>
        <div class="taskdown--form-tree">
          <el-form-item label="下发人员" prop="taskerArr">
            <el-select v-model="ruleForm.taskerArr" multiple placeholder="请选择">
              <el-option
                v-for="item in optionsArr"
                :label="item.label"
                :value="item.value" :key="item">
              </el-option>
            </el-select>
          </el-form-item >
        </div>
        <el-form-item class="taskdown--form-submit">
          <el-button type="primary" @click="submitForm('ruleForm')">任务下发</el-button>
          <el-button type="warning" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import { USER_SIGNIN } from '../../store/storex'
export default {
  name: 'taskdowndetail',
  data () {
    return {
      showloading: false,
      sendmessage: false,
      sendwechat: false,
      tasktypeArr: [],
      eventypeArr: [],
      optionsArr: [],
      ruleForm: {
        website: '',
        tasktype: '',
        eventtype: '',
        taskerArr: [],
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        website: [
          { required: true, message: '请输入网址', trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        tasktype: [
          { type: 'number', required: true, message: '请选择任务类型', trigger: 'change' }
        ],
        eventtype: [
          { type: 'number', required: true, message: '请选择事故类型', trigger: 'change' }
        ],
        taskerArr: [
          { type: 'array', required: true, message: '请选择接收人', trigger: 'blur' }
        ]
      }
    }
  },
  computed: mapState({
    state: state => state.user.body
  }),
  methods: {
    ...mapActions([USER_SIGNIN]),
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.showloading = true
          Vue.http.options.emulateJSON = true
          if (this.$store.state.user) {
            let prefix = this.$store.state.user.CHECKED_STATUS
            let eventTypeUrl = prefix + '/bms/task/add.action'
            let param = {
              url: '',
              type: '',
              receivename: '',
              eventtype: '',
              remarks: '',
              remind: '',
              wechat: '',
              enddate: ''
            }
            param.url = this.ruleForm.website
            param.type = this.ruleForm.tasktype
            param.eventtype = this.ruleForm.eventtype
            param.remarks = this.ruleForm.desc
            if (this.ruleForm.delivery) {
              if (this.sendmessage) {
                param.remind = 1
              } else {
                param.remind = 0
              }
              if (this.sendwechat) {
                param.wechat = 1
              } else {
                param.wechat = 0
              }
              param.enddate = document.querySelector('.taskdown--form-option .el-input__inner').value || ''
            }
            let strtasker = this.ruleForm.taskerArr
            param.receivename = strtasker.join(',')
            console.log(param)
            this.$http.post(eventTypeUrl, param).then((response) => {
              console.log(response)
              if (!response.body.status) {
                this.$alert(response.body.message)
                this.showloading = false
                return
              } else if (response.body.status) {
                this.$alert('发送成功!')
              }
              this.showloading = false
            }, (response) => {
              this.$alert('网络异常!')
              this.showloading = false
            })
          } else {
            this.$alert('建议重新登录')
          }
        } else {
          this.$alert('网络错误!请检查网络。')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    linkToPath () {
      this.showloading = true
      let a = this.$route.query.from ? this.$route.query.from : 'taskdown'
      this.$router.push({
        path: a
      })
    },
    getTypeList () {
      this.showloading = true
      Vue.http.options.emulateJSON = true
      if (this.$store.state.user) {
        let prefix = this.$store.state.user.CHECKED_STATUS
        let userid = this.$store.state.user.body.resultObj.u_userid || ''
        let taskid = this.$route.query.taskid || ''
        let eventTypeUrl = prefix + '/bms/eventType/eventTypeList.action'
        let findAllDatabasesUrl = prefix + '/bms/database/findAllDatabases.action'
        let getSonUserUrl = prefix + '/bms/taskApp/getSonUser.action'
        this.$http.post(eventTypeUrl).then((response) => {
          let resdata = response.body
          let reslen = resdata.length
          for (var i = 0; i < reslen; i++) {
            this.tasktypeArr.push({name: resdata[i].name, value: resdata[i].id})
          }
          this.showloading = false
        }, (response) => {
          this.$alert('网络异常!')
          this.showloading = false
        })
        this.$http.post(findAllDatabasesUrl).then((response) => {
          console.log(response)
          let resdata = response.body
          let reslen = resdata.length
          for (var i = 0; i < reslen; i++) {
            this.eventypeArr.push({basename: resdata[i].basename, value: resdata[i].id})
          }
          this.showloading = false
        }, (response) => {
          this.$alert('网络异常!')
          this.showloading = false
        })
        this.$http.post(getSonUserUrl, {u_userid: userid, taskid: taskid}).then((response) => {
          console.log(response)
          let resdata = response.body
          let reslen = resdata.length
          for (var i = 0; i < reslen; i++) {
            this.optionsArr.push({label: resdata[i].u_name, value: resdata[i].u_userid})
          }
          this.showloading = false
        }, (response) => {
          this.$alert('网络异常!')
          this.showloading = false
        })
      }
    },
    showtasktype (a) {
      console.log(a)
    },
    showeventtype (a) {
      console.log(a)
    }
  },
  mounted () {
    let comUrl = this.$route.query.articlurl || ''
    if (comUrl) {
      this.ruleForm.website = comUrl
    }
    this.getTypeList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss">
h1, h2 {
  font-weight: normal;
}

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

.showloading{
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 111;
  span{
    position: relative;
    margin-left: -100%;
  }
}

.newsmedia--taskdetail-title{
  height: 2.6rem;
  padding: 0 0.8rem;
  background-color: #20a0ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 2.6rem;
}
.taskdown--form-wrap{
  padding: 1rem;
  margin-bottom: 3rem;
}
.option-ale{
  text-align: left;
  padding: 0;
  margin: 12px;
  label {
    padding: 0 1rem;
  }
}
.el-scrollbar,.el-select-dropdown{
  width: 8rem;
}
.taskdownform {
  .el-form-item__content{
    text-align: left;
  }
  .el-select{
    float: left;
  }
  .el-select-dropdown__list{
    width: 10rem;
  }
  .el-date-editor--date{
    .el-input__inner{
      width: 8rem;
    }
  }
}
.taskdown--form-tree{
  display: flex;
  .el-tree{
    text-align: left;
    min-width: 12rem;
  }
}
.taskdown--form-submit{
  margin-top: 1rem;
}
.taskdown--form-tree {
  .el-tree{
    min-width: 14rem;
  }
}
</style>
