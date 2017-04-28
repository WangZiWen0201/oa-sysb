<template>
  <div class="taskdown">
    <app-header></app-header>
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
    <app-footer></app-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import { USER_SIGNIN } from '../../store/storex'
import appHeader from '../common/header.vue'
import appFooter from '../common/footer.vue'
export default {
  name: 'taskdown',
  data () {
    return {
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
    }
  },
  components: {
    appFooter: appFooter,
    appHeader: appHeader
  },
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
</style>
