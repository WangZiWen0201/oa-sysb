<template>
  <div class="hello">
    <app-header></app-header>
    <!-- <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="search">搜索</el-button> -->
    <div class="infomation">
<<<<<<< HEAD
      <div v-show="showloading" class=""><span class="el-icon-loading" ></span>数据加载中</div>
=======
      <div v-show="showloading" class="showloading"><span class="el-icon-loading" ></span>数据加载中</div>
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
      <div class="infomation--select">
        <div class="infomation--select-ku">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
              <span>&nbsp;语&nbsp;料&nbsp;库&nbsp;</span>
              <el-select v-model="valueselect" @change="changeSelect(valueselect)">
                <el-option v-for="(item, value) in queryCorpusListArr" :key="item.key" :label="item.cname" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <span>语料专题</span>
              <el-select v-model="valueselects" @change="changeSelects(valueselects)">
                <el-option v-for="(item, value)  in querySpecialList"
                   :key="item.key"
                   :label="item.sname"
                   :value="item.id"
                   :corpusid="item.corpusid">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div class="infomation--select-search">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="关键词">
              <el-input v-model="formInline.search" placeholder="搜索"></el-input>
            </el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <el-table :data="tableData" border style="width: 100%">
<<<<<<< HEAD
       <el-table-column  prop="content" label="内容" width="120"></el-table-column>
       <el-table-column  prop="times" label="引用次数" width="115"></el-table-column>
       <el-table-column  label="详情" width="115">
=======
       <el-table-column  prop="content" label="内容"></el-table-column>
       <el-table-column  prop="times" label="引用次数"></el-table-column>
       <el-table-column  label="详情">
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
         <template scope="scope">
           <el-button type="text" size="small" @click.native.prevent="detailid(scope.$index, tableData)">详情</el-button>
         </template>
       </el-table-column>
     </el-table>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import { USER_SIGNIN, USER_INFO } from '../../store/storex'
import appHeader from '../common/header.vue'
import appFooter from '../common/footer.vue'
export default {
  name: 'infomation',
  data () {
    return {
      msg: '',
      types: 1,
      showloading: false,
      valueselect: {},
      valueselects: {},
      queryCorpusListArr: [],
      querySpecialList: [],
      tableData: [],
<<<<<<< HEAD
=======
      pager: 1,
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
      formInline: {
        search: '',
        user: '',
        region: ''
      }
    }
  },
  components: {
    appFooter: appFooter,
    appHeader: appHeader
  },
  computed: mapState({
    user: state => state.user
  }),
  methods: {
    ...mapActions([USER_SIGNIN]),
    ...mapActions([USER_INFO]),
    detailid (index, rows) {
<<<<<<< HEAD
      console.log(index)
=======
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
      this.$alert(this.tableData[index].content, '复制板', {
        confirmButtonText: '确定'
      })
    },
    queryCorpusUserList (a, b) {
      this.showloading = true
      Vue.http.options.emulateJSON = true
      if (this.user.CHECKED_STATUS) {
        let prefix = this.user.CHECKED_STATUS
        var param = {
          orgId: '',
          roleValue: ''
        }
        let queryCorpusUserList = prefix + '/bms/corpusUser/queryCorpusUserList.action'
        let queryCorpusList = prefix + '/bms/loginApp/queryCorpusList.action'
        this.$http.post(queryCorpusUserList, { page: a, rows: b }).then((response) => {
          let pagetoals = response.body.totals
          let arrtoals = response.body.rows
          if (pagetoals > 0) {
            for (let i = 0; i < arrtoals.length; i++) {
              this.tableData.push({ times: arrtoals[i].frequency, content: arrtoals[i].content })
            }
            this.showloading = false
          }
        })
        if (this.user.body) {
          param.orgId = this.user.body.resultObj.u_orgid
          param.roleValue = this.user.body.resultObj.roleValue
          this.$http.post(queryCorpusList, param).then((response) => {
            let res = response.body
            for (var i = 0; i < res.length; i++) {
              this.queryCorpusListArr.push({cname: response.body[i].cname, id: response.body[i].id})
            }
<<<<<<< HEAD
            console.log(this.queryCorpusListArr)
=======
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
          })
        }
      } else {
        this.showloading = false
      }
    },
    onSubmit () {
      let paramsearch = {
<<<<<<< HEAD
        page: 1,
=======
        page: this.pager,
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
        rows: 15,
        corpusid: '',
        specialid: '',
        content: ''
      }
      paramsearch.corpusid = this.valueselect || ''
      paramsearch.specialid = this.valueselects || ''
      paramsearch.content = this.formInline.search || ''
      this.showloading = true
      if (this.user.CHECKED_STATUS) {
        let prefix = this.user.CHECKED_STATUS
        let queryCorpusUserList = prefix + '/bms/corpusUser/queryCorpusUserList.action'
        this.$http.post(queryCorpusUserList, paramsearch).then((response) => {
          let pagetoals = response.body.totals
          let arrtoals = response.body.rows
          if (pagetoals > 0) {
            this.tableData = []
            for (let i = 0; i < arrtoals.length; i++) {
              this.tableData.push({ times: arrtoals[i].frequency, content: arrtoals[i].content })
            }
          } else if (pagetoals === 0) {
            this.tableData = []
          }
          this.showloading = false
        })
      } else {
        this.$alert('建议重新登录!')
      }
    },
    changeSelect (a) {
      this.showloading = true
      if (this.user.CHECKED_STATUS) {
        let prefix = this.user.CHECKED_STATUS
        let queryCorpusUserList = prefix + '/bms/corpusUser/queryCorpusUserList.action'
        let querySpecialListurl = prefix + '/bms/special/querySpecialList.action'
        this.$http.post(queryCorpusUserList, {page: 1, rows: 15, corpusid: a}).then((response) => {
          let pagetoals = response.body.totals
          let arrtoals = response.body.rows
          if (pagetoals > 0) {
            this.tableData = []
            for (let i = 0; i < arrtoals.length; i++) {
              this.tableData.push({ times: arrtoals[i].frequency, content: arrtoals[i].content })
            }
          } else if (pagetoals === 0) {
            this.tableData = []
          }
        })
        this.$http.post(querySpecialListurl, {corpusid: a}).then((response) => {
          let res = response.body
          this.querySpecialList = []
          for (var i = 0; i < res.length; i++) {
            this.querySpecialList.push({sname: response.body[i].sname, id: response.body[i].id, corpusid: response.body[i].corpusid})
          }
          this.showloading = false
        })
      } else {
        this.showloading = false
      }
    },
    changeSelects (a) {
      this.showloading = true
      if (this.user.CHECKED_STATUS) {
        let prefix = this.user.CHECKED_STATUS
        let queryCorpusUserList = prefix + '/bms/corpusUser/queryCorpusUserList.action'
        this.$http.post(queryCorpusUserList, {page: 1, rows: 15, specialid: a}).then((response) => {
          let pagetoals = response.body.totals
          let arrtoals = response.body.rows
          if (pagetoals > 0) {
            this.tableData = []
            for (let i = 0; i < arrtoals.length; i++) {
              this.tableData.push({ times: arrtoals[i].frequency, content: arrtoals[i].content })
            }
          } else if (pagetoals === 0) {
            this.tableData = []
          }
          this.showloading = false
        })
      }
    }
  },
  created () {
    this.queryCorpusUserList(1, 15)
<<<<<<< HEAD
=======
  },
  mounted () {
    let tbodyWrapperEl = document.querySelector('.el-table__body-wrapper')
    let getTbodyScrollToBottom = () => {
      let tbodyEl = tbodyWrapperEl.lastElementChild
      // let lastTr = [].slice.call(tbodyEl.querySelectorAll('tr'), 0).slice(-1)[0]
      let result = false
      if (tbodyWrapperEl.clientHeight + tbodyWrapperEl.scrollTop >= tbodyEl.clientHeight) {
        result = true
      }
      return result
    }
    tbodyWrapperEl.addEventListener('scroll', (event) => {
      if (getTbodyScrollToBottom()) {
        // this.tableData3.push()
        let param = {
          page: this.pager,
          rows: 15,
          corpusid: '',
          specialid: '',
          content: ''
        }
        param.corpusid = this.valueselect || ''
        param.specialid = this.valueselects || ''
        param.content = this.formInline.search || ''
        this.showloading = true
        if (this.user.CHECKED_STATUS) {
          let prefix = this.user.CHECKED_STATUS
          let queryCorpusUserList = prefix + '/bms/corpusUser/queryCorpusUserList.action'
          this.$http.post(queryCorpusUserList, param).then((response) => {
            let pagetoals = response.body.totals
            let arrtoals = response.body.rows
            if (pagetoals > 0) {
              for (let i = 0; i < arrtoals.length; i++) {
                this.tableData.push({ times: arrtoals[i].frequency, content: arrtoals[i].content })
              }
              if (arrtoals.length === 0) {
                this.$alert('全部数据在这里啦')
              }
            }
            this.showloading = false
          })
        } else {
          this.$alert('建议重新登录!')
        }
        this.pager++
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
=======

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

>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
.infomation--select{
  &-search{
    .el-input{
      width: 8rem;
      .el-input__inner{
        padding: 2px;
        // width: 8rem;
      }
    }
  }
}
.el-dropdown-menu{
  width: 5rem;
  text-align: center;
}
.infomation{
  padding: 1rem 1rem 5rem;
  .cell{
    text-align: center;
  }
  .el-table__body-wrapper{
<<<<<<< HEAD
    max-height: 18rem;
=======
    max-height: 20rem;
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
  }
  table tbody tr .cell{
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .el-table__body-wrapper{
    overflow: hidden;
  }
}
.infomation .el-table__body-wrapper{
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
