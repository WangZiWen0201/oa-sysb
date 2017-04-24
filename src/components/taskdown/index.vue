<template>
  <div class="taskdown">
    <app-header></app-header>
    <div class="taskdown--form-wrap">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm taskdownform">
      <el-form-item label="网址" prop="website">
        <el-input v-model="ruleForm.website"></el-input>
      </el-form-item>
      <el-form-item label="任务类型" prop="tasktype">
        <el-select v-model="ruleForm.tasktype" placeholder="请选择任务类型">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="事故类型" prop="eventtype">
        <el-select v-model="ruleForm.eventtype" placeholder="请选择事故类型">
          <el-option label="事故一" value="event1"></el-option>
          <el-option label="事故二" value="event2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
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
        <el-form-item label="日期选择" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
      </div>
      <div class="taskdown--form-tree">
        <el-form-item label="接收人员" prop="taker" v-model="ruleForm.taker">
          <el-tree :data="eletree" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" :props="defaultProps">
          </el-tree>
        </el-form-item>

      </div>
      <el-form-item class="taskdown--form-submit">
        <el-button type="primary" @click="submitForm('ruleForm')">任务下发</el-button>
        <el-button type="warning"@click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from '../common/header.vue'
import appFooter from '../common/footer.vue'
export default {
  name: 'taskdown',
  data () {
    return {
      showoption: false,
      sendmessage: false,
      sendwechat: false,
      ruleForm: {
        website: '',
        tasktype: '',
        eventtype: '',
        taker: '',
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
          { required: true, message: '请选择任务类型', trigger: 'change' }
        ],
        eventtype: [
          { required: true, message: '请选择事故类型', trigger: 'change' }
        ],
        taker: [
          { required: true, message: '请选择接收人', trigger: 'blur' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      },
      eletree: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  components: {
    appFooter: appFooter,
    appHeader: appHeader
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    showoption () {
      console.log('1')
    }
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
</style>
