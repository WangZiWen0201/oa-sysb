<template>
  <div class="taskdown">
    <app-header></app-header>
<<<<<<< HEAD
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
=======
      <div class="taskdown--select">
        <div class="showloading" v-show="showloading"><span class="el-icon-loading"></span>数据正在加载~</div>
        <div class="taskdown--nodata" v-show="nodata">暂无数据</div>
        <div class="taskdown--select-option">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
              <span>状态</span>
              <el-select v-model="select" @change="changeSelect(select, 1,true)">
                <el-option v-for="(item, value) in selectOption" :key="item.key" :label="item.option" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div class="taskdown--nodata" v-show="nodata">暂无数据</div>
        <div class="taskdown--list-listener">
          <div class="taskdown--list">
            <div class="taskdown--list-item" v-for="(item, value) in itemOption">
              <div class="taskdown--list-item-l">
                <div :key="item.key">编码 :{{item.code}}</div>
                <div>类型 :{{item.typeName}}</div>
                <div>状态 :{{item.state}}</div>
                <div>任务描述 :{{item.remarks}}</div>
              </div>
              <div class="taskdown--list-item-r">
                <div>发布人:{{item.sendusername}}</div>
                <div>发布时间:{{item.senddate}}</div>
                <div>结束时间:{{item.enddate}}</div>
                <a class="taskdown--list-item-r-a" :value="item.taskid" @click="linkToPath('taskdetail', item.taskid, 'taskdown')">详情</a>
              </div>
            </div>
          </div>
        </div>
      </div>
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
    <app-footer></app-footer>
  </div>
</template>

<script>
<<<<<<< HEAD
=======
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import { USER_SIGNIN } from '../../store/storex'
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
import appHeader from '../common/header.vue'
import appFooter from '../common/footer.vue'
export default {
  name: 'taskdown',
  data () {
    return {
<<<<<<< HEAD
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
=======
      msg: '',
      showloading: false,
      nodata: false,
      select: {},
      pageindex: 1,
      itemOption: [],
      selectOption: [{
        option: '未完成',
        value: 1
      }, {
        option: '已完成',
        value: 2
      }, {
        option: '超时完成',
        value: 3
      }, {
        option: '全部',
        value: ''
      }]
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
    }
  },
  components: {
    appFooter: appFooter,
    appHeader: appHeader
  },
<<<<<<< HEAD
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
=======
  computed: mapState({
    state: state => state.user.body
  }),
  methods: {
    ...mapActions([USER_SIGNIN]),
    linkToPath (a, b, c) {
      this.showloading = true
      this.$router.push({
        path: a,
        query: {
          taskid: b,
          from: c
        }
      })
    },
    changeSelect (optionstatus, page, arrempty) {
      let sendparam = {
        page: page,
        rows: 15,
        u_userid: '',
        state: optionstatus
      }
      if (this.$store) {
        sendparam.u_userid = ((this.$store.state.user.body || '').resultObj || '').u_userid || ''
        this.showloading = true
        Vue.http.options.emulateJSON = true
        this.$http.post('http://localhost:8088/bms/task/queryListByPage.action', sendparam).then((response) => {
          this.showloading = false
          let data = response.body.rows
          let statas
          if (arrempty) this.itemOption = []
          if (data.length === 0) {
            this.$alert('没有更多数据了')
            this.pageindex = page
            this.nodata = true
            return
          } else {
            this.nodata = false
          }
          for (let i = 0; i < data.length; i++) {
            if (data[i].state === 1) statas = '未完成'
            if (data[i].state === 2) statas = '已经完成'
            if (data[i].state === 3) statas = '超时完成'
            if (data[i].state === '' || data[i].state === null || data[i].state === undefined) statas = '未完成'
            this.itemOption.push({
              code: data[i].code,
              taskid: data[i].taskid,
              typeName: data[i].typeName,
              remarks: data[i].remarks,
              senddate: data[i].senddate,
              enddate: data[i].enddate,
              sendusername: data[i].sendusername,
              state: statas
            })
          }
          if (document.querySelector('.taskdown--list').scrollTop > 0) document.querySelector('.taskdown--list').scrollTop = 0
          this.showloading = false
          if (response.body.rows.length === 0) this.nodata = true
        }, (response) => {
          this.showloading = false
        })
      }
    }
  },
  created () {
    this.changeSelect('', 1, true)
  },
  mounted () {
    let tbodyWrapperEl = document.querySelector('.taskdown--list-listener .taskdown--list')
    let getTbodyScrollToBottom = () => {
      // let tbodyEl = tbodyWrapperEl.lastElementChild
      // let lastTr = [].slice.call(tbodyEl.querySelectorAll('tr'), 0).slice(-1)[0] scrollTop  clientHeight  scrollHeight
      let result = false
      // console.log(tbodyWrapperEl.clientHeight + tbodyWrapperEl.scrollTop + 1)
      // console.log(tbodyWrapperEl.scrollHeight)
      if (tbodyWrapperEl.clientHeight + tbodyWrapperEl.scrollTop + 1 >= tbodyWrapperEl.scrollHeight) {
        result = true
      }
      return result
    }
    tbodyWrapperEl.addEventListener('scroll', (event) => {
      if (getTbodyScrollToBottom()) {
        let a = this.select
        let b = this.pageindex
        this.changeSelect(a, b, false)
        this.pageindex++
      }
    })
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
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
<<<<<<< HEAD
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
=======
.taskdown--nodata{
  margin-top: 1rem;
}
.taskdown--select-option{
  margin-top: 1rem;
  .el-form-item{
    margin: 0;
  }
}
.taskdown--nodata{
  margin-top: 1rem;
}
.taskdown--list{
  margin: 2rem 1rem 3rem 1rem;
  max-height: 28rem;
  width: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &-item{
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding: 0.2rem 0;
    margin: 0.5rem 0;
    border: 1px dashed #eee;
    &-l,&-r{
      display: flex;
      flex-direction: column;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 50%;
      div{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 95%;
      }
    }
    &-r{
      &-a{
        text-align: center;
      }
    }
  }
}
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
</style>
