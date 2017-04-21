<template>
  <div class="commenter">
    <app-header></app-header>
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
    linkToPath (path, a) {
      this.$router.push({path: path, query: { type: a }})
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
      })
    }
  },
  created () {
    this.queryListByPage(1, 15)
    this.comfirmquery()
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

.commenter-wrap{
   height: 28rem;
   overflow-y: scroll;
}

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
}
.btn-link{
  color: #fff;
  text-decoration: none;
}
</style>
