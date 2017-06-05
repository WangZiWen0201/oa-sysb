<template>
  <div class="commenter">
    <app-header></app-header>
<<<<<<< HEAD
    <el-form ref="form" :model="form" label-width="6rem" style="margin-top: 1rem">
      <el-form-item label="我的任务" prop="region">
        <el-select v-model="form.region" placeholder="全部任务">
          <el-option label="全部任务" value="alltask" class="el-select-option"></el-option>
          <el-option label="已完成任务" value="complete" class="el-select-option"></el-option>
          <el-option label="未完成任务" value="tobedone" class="el-select-option"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div v-show="showloading"><span class="el-icon-loading" ></span>数据加载中</div>
    <div class="commenter-wrap" v-if="comfirmquery()">
        <div class="commenter--item">
          <div class="commenter--item-left">
            <div>编码: 20170407</div>
            <div>类型:  跟帖</div>
            <div>任务描述: 直升机飞行千里救援患病老人</div>
          </div>
          <div class="commenter--item-right">
            <div>发布人: 超管1</div>
            <div>发布时间：2017-04-05 09：30</div>
            <div>结束时间：2017-04-10 09：30</div>
            <div><el-button type="primary" class="btn-detail" @click="linkToPath('completedetail','as')">详情</el-button></div>
          </div>
        </div>
        <div class="commenter--item">
          <div class="commenter--item-left">
            <div>编码: 20170407</div>
            <div>类型:  跟帖</div>
            <div>任务描述: 直升机飞行千里救援患病老人</div>
          </div>
          <div class="commenter--item-right">
            <div>发布人: 超管1</div>
            <div>发布时间：2017-04-05 09：30</div>
            <div>结束时间：2017-04-10 09：30</div>
            <div><el-button type="primary" class="btn-detail" @click="linkToPath('uncompletedetail','as')">详情</el-button></div>
=======
    <el-form ref="form" :model="form" label-width="" style="margin-top: 1rem">
      <el-form-item label="" prop="region">
        <el-select v-model="form.region" placeholder="全部任务" @change="queryListByPage(1, 15, form.region,true)">
          <el-option label="全部任务" value="" class="el-select-option"></el-option>
          <el-option label="已完成任务" value="2" class="el-select-option"></el-option>
          <el-option label="未完成任务" value="1" class="el-select-option"></el-option>
          <el-option label="超时完成" value="3" class="el-select-option"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div v-show="showloading" class="showloading"><span class="el-icon-loading" ></span>数据加载中</div>
    <div class="taskdown--nodata" v-show="nodata">暂无数据</div>
    <div class="commenter-wrap">
        <div class="commenter--item" v-for="(i, value) in commenterArr">
          <div class="commenter--item-w">
            <span class="commenter--item-tip" >
              <span :class="i.state === '未完成' ? 'colorr' : 'colord'">{{i.state}}</span>
              <span :class="i.typeNamecolor">{{i.typeName}}</span>
            </span>
            <div class="commenter--item-title">
              {{i.remarks}}
            </div>
            <div class="commenter--item-sendusername">
              <div class="">发布人:{{i.sendusername}}</div>
            </div>
            <div class="commenter--item-date">
              <div>发布时间：{{i.senddate}}</div>
              <div>结束时间：{{i.enddate}}</div>
            </div>
            <div class="commenter--item-remarks">
               <div>任务描述 : {{i.remarks}}</div>
               <el-button type="info" v-show="i.state === '未完成'"  @click="linkToPath('taskdowndetail',  i.taskuserid, 'commenter')">
                 分发
               </el-button>
            </div>
          </div>
          <div class="arrows el-icon-arrow-right" @click="linkToPath(i.state === '未完成' ? 'uncompletedetail' : 'completedetail', i.taskuserid, 'commenter')">
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
          </div>
        </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import { USER_INFO } from '../../store/storex'
import appFooter from '../common/footer.vue'
import appHeader from '../common/header.vue'
export default {
  name: 'commenter',
  data () {
    return {
      msg: 'commenter here',
      showloading: false,
<<<<<<< HEAD
=======
      nodata: false,
      pageindex: 1,
      commenterArr: [],
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
      form: {
        region: ''
      }
    }
  },
  components: {
    appHeader: appHeader,
    appFooter: appFooter
  },
  computed: mapState({
    user: state => state.user
  }),
  methods: {
    ...mapActions([USER_INFO]),
<<<<<<< HEAD
    linkToPath (path, a) {
      this.$router.push({path: path, query: { type: a }})
=======
    linkToPath (path, taskuserid, from) {
      this.$router.push({
        path: path,
        query: {
          taskuserid: taskuserid,
          from: from
        }
      })
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
    },
    comfirmquery () {
      let comfirmType = this.user.body
      if (comfirmType) {
        if (comfirmType.resultObj.roleValue === 'SUPER' || comfirmType.resultObj.roleValue === 'ADMIN') {
          return true
        } else {
          return false
        }
      } else {
        this.$alert('建议重新登录')
        this.$router.push({path: 'login'})
      }
    },
<<<<<<< HEAD
    queryListByPage (a, b) {
      this.showloading = true
      Vue.http.options.emulateJSON = true
      this.$http.post('http://localhost:8088/bms/task/queryListByPage.action', { page: a, rows: b, u_userid: 11 }).then((response) => {
        console.log(response)
        // for (let i = 0; i < data.length; i++) {
        //   this.tableData.push({text: data[i].text, detail: '详情'})
        // }
        // this.showloading = false
        // if (data.lenght === 0) {
        //   this.$message('这是最后一条了')
        // }
=======
    queryListByPage (page, srows, states, arrEmpty) {
      let listpageparam = {
        page: page,
        rows: srows,
        u_userid: '',
        state: states
      }
      listpageparam.u_userid = this.$store.state.user.body.resultObj.u_userid || ''
      this.showloading = true
      Vue.http.options.emulateJSON = true
      let prefix = this.$store.state.user.CHECKED_STATUS + '/bms/taskUser/queryListByPage.action'
      this.$http.post(prefix, listpageparam).then((response) => {
        let res = response.body.rows
        let renlen = res.length
        let states = ''
        let typeNamecolor = ''
        if (arrEmpty) this.commenterArr = []
        if (response.body.totals === 0) {
          this.showloading = false
          this.nodata = true
          return
        }
        if (renlen === 0) {
          this.showloading = false
          this.$alert('已展示全部数据')
          return
        }
        for (let i = 0; i < renlen; i++) {
          if (res[i].state === 1) {
            states = '未完成'
          } else if (res[i].state === 2) {
            states = '已经完成'
          } else {
            states = '超时完成'
          }
          if (res[i].typeName === '跟帖') {
            typeNamecolor = 'typeNamecolorf'
          } else if (res[i].typeName === '发帖') {
            typeNamecolor = 'typeNamecolors'
          } else {
            typeNamecolor = 'typeNamecolorp'
          }
          this.commenterArr.push({
            code: res[i].code,
            sendusername: res[i].sendusername,
            typeNamecolor: typeNamecolor,
            typeName: res[i].typeName,
            senddate: res[i].senddate,
            enddate: res[i].enddate,
            state: states,
            taskuserid: res[i].taskUserId,
            taskid: res[i].taskid,
            remarks: res[i].remarks
          })
        }
        this.showloading = false
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
      })
    }
  },
  created () {
<<<<<<< HEAD
    this.queryListByPage(1, 15)
    this.comfirmquery()
=======
    this.queryListByPage(1, 15, '')
    this.comfirmquery()
  },
  mounted () {
    let tbodyWrapperEl = document.querySelector('.commenter-wrap')
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
        let a = this.form.region
        let b = this.pageindex
        this.queryListByPage(b, 15, a, false)
        this.pageindex++
        this.showloading = false
      }
    })
    // if (tbodyWrapperEl.children.length === 0) this.nodata = true
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<<<<<<< HEAD
<style rel="stylesheet/scss" lang="scss">
=======
<style rel="stylesheet/scss" lang="scss" scoped>
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
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

=======
.commenter{
  background-color: #f6f6f6;
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
.taskdown--nodata{
  margin-top: 1rem;
}
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
.commenter-wrap{
   height: 28rem;
   overflow-y: scroll;
}
<<<<<<< HEAD

.commenter--item{
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;
  padding: 0.2rem 1rem 0 1rem;
  border: 1px dashed #13CE66;
    &-left,&-right{
      display: flex;
      flex-direction: column;
      div{
        width: 10rem;
        text-align: left;
        white-space: nowrap;
        text-overflow:ellipsis;
         overflow:hidden;
      }
    }
    &-right{
      .btn-detail{
        margin-top: 0.5rem;
        padding: 0.4rem 0.5rem;
        width: 6rem;
        float: right;
      }
    }
=======
.commenter--item{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #fff;
  margin: 0 0.5rem 0.5rem 0.5rem;
  text-align: left;
  &-remarks{
    display: flex;
    justify-content: space-between;
  }
  &-tip{
    display: flex;
    justify-content: space-between;
  }
}
.commenter--item-w{
  width: 90%;
  padding: 0 0.5rem 0.5rem 0.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #fff;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  div{
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
.commenter--item-title{
  font-size: 36px;
  color: #000;
}
.commenter--item-sendusername{
  color: #000;
}
.commenter--item {
  flex-direction: row;
  .arrows{
    width: 10%;
    font-size: 22px;
    line-height: 9rem;
  }
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
}
.btn-link{
  color: #fff;
  text-decoration: none;
}
<<<<<<< HEAD
=======
.colord{
  display: table;
  padding: 2px 4px;
  color: #fff;
  background-color: #c8c8c8;
}
.colorr{
  display: table;
  padding: 2px 4px;
  color: #fff;
  background-color: #ec2a2a;
}
.typeNamecolorf{
  color: #E9911f;
}
.typeNamecolors{
  color: #27ca27;
}
.typeNamecolorp{
  color: #ec2a2a;
}
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
</style>
