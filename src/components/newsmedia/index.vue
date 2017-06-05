<template>
  <div class="newsmedia">
    <app-header></app-header>
      <div class="newsmedia--wrap">
        <div class="newsmedia--search">
          <div class="newsmedia--searh-normal"><el-input placeholder="舆情搜索" icon="search" v-model="input" :on-icon-click="handleIconClick">搜索</el-input></div>
          <el-checkbox v-model="checkedmutil">高级搜索</el-checkbox>
        </div>
        <div class="showloading" v-show="showloading"><span class="el-icon-loading"></span>数据正在加载~</div>
<<<<<<< HEAD
        <div class="newsmedia--extend">
          <el-radio-group v-model="extendRadio" @change="changeRadio(extendRadio)">
            <el-radio-button label="上海" value="0"></el-radio-button>
            <el-radio-button label="北京" value="1"></el-radio-button>
            <el-radio-button label="广州" value="2"></el-radio-button>
            <el-radio-button label="深圳" value="3"></el-radio-button>
          </el-radio-group>
=======
        <div class="newsmedia--extend" v-show="checkedmutil">
          <div class="newsmedia--extend-radio">
          <span>搜索范围:</span>
            <el-radio-group v-model="searchParam.radio" @change="changeRadio(searchParam.radio)">
              <el-radio :label="1">全文</el-radio>
              <el-radio :label="2">标题</el-radio>
              <el-radio :label="3">正文</el-radio>
              <el-radio :label="4">作者</el-radio>
            </el-radio-group>
          </div>
          <div class="newsmedia--extend-timer">
            <el-form>
              <el-form-item>
                <span>起止时间:</span>
                <el-select v-model="timeroptionss" @change="changeTimer(timeroptionss)">
                  <el-option
                    v-for="(item, value) in timeroptions"
                    :label="item.label" :key="value.item"
                    :value="item.values">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
          <div class="newsmedia--extend-content">
            <span class="newsmedia--extend-content-span">信息源:</span>
            <div class="">
              <el-checkbox v-for="(item, value) in checkListBox" :key="value.item" :value="item.amsSiteId" v-model="item.keywords">
                {{item.name}}
              </el-checkbox>
            </div>
            <!-- <span v-show="checkList.length === 0">暂无信息源</span> -->
          </div>
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
        </div>
        <div class="newsmedia--list">
         <el-table  :data="tableData" style="width: 100%" class="scrollevent" border height="450" :row-class-name="tableRowClassName">
          <el-table-column   prop="text"  label="内容"></el-table-column>
          <el-table-column  prop="detail" label="详情" width="0.8">
            <template scope="scope">
              <el-button type="text" size="small" @click.native.prevent="detailid(scope.$index, tableData)">详情</el-button>
            </template>
          </el-table-column>
          </el-table>
        </div>
      </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Vue from 'vue'
<<<<<<< HEAD
import { mapState } from 'vuex'
=======
import { mapActions, mapState } from 'vuex'
import { USER_INFO } from '../../store/storex'
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
import appHeader from '../common/header.vue'
import appFooter from '../common/footer.vue'
export default {
  name: 'newsmedia',
  data () {
    return {
      input: '',
      checkedmutil: false,
      tableData: [],
<<<<<<< HEAD
      pageindex: 0,
      showloading: false,
      extendRadio: ''
=======
      showloading: false,
      extendRadio: '',
      pager: 1,
      searchParam: {
        radio: '',
        content: ''
      },
      timeroptionss: {},
      timeroptions: [{
        values: '1',
        label: '一天内'
      }, {
        values: '2',
        label: '两天内'
      }, {
        values: '3',
        label: '三天内'
      }, {
        values: '4',
        label: '四天内'
      }, {
        values: '5',
        label: '五天内'
      }, {
        values: '6',
        label: '六天内'
      }, {
        values: '7',
        label: '七天内'
      }],
      checkList: [],
      checkListBox: []
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
    }
  },
  components: {
    appFooter: appFooter,
    appHeader: appHeader
  },
<<<<<<< HEAD
  methods: {
    handleIconClick () {
      console.log('search event')
      console.log(this.checkedmutil)
    },
    changeRadio (a) {

=======
  computed: mapState({
    state: state => state.user
  }),
  methods: {
    ...mapActions([USER_INFO]),
    changeRadio (a) {
      this.searchParam.radio = a
    },
    changeTimer (b) {
      console.log(b)
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
    },
    tableRowClassName (row, index) {
      if (index % 2) {
        return 'info-row'
      } else {
        return 'positive-row'
      }
    },
    remoteMethod (query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options4 = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options4 = []
      }
    },
<<<<<<< HEAD
    getSentiment (a, b) {
      this.showloading = true
      Vue.http.options.emulateJSON = true
      this.$http.post('http://localhost:8088/bms/comment/getSentimentMonitorData.action', { page: a, rows: b }).then((response) => {
        let data = response.body.hits.display
        for (let i = 0; i < data.length; i++) {
          this.tableData.push({text: data[i].text, mid: data[i].mid})
        }
        this.showloading = false
        this.pageindex++
      })
    },
    detailid (index, value) {
      console.log(value[index].mid)
    }
  },
  computed: mapState({
    checktatus: state => state.user.CHECKED_STATUS
  }),
  created () {
    this.getSentiment(1, 20)
=======
    getSentiment (a, b, c, d) {
      let sentimentparam = {
        page: a,
        rows: b,
        u_userid: '',
        content: c || '',
        sendtimentType: '',
        sendtimentTime: '',
        sentimentCheck: ''
      }
      sentimentparam.content = this.input
      this.showloading = true
      Vue.http.options.emulateJSON = true
      if (this.checkedmutil) {
        let checkboxcol = document.querySelectorAll('.newsmedia--extend-content .el-checkbox__original')
        // let len_col = checkboxcol.length
        for (let i = 0; i < checkboxcol.length; i++) {
          if (checkboxcol[i].checked === true) {
            sentimentparam.sentimentCheck = sentimentparam.sentimentCheck + checkboxcol[i].parentElement.parentElement.getAttribute('value') + ','
          }
        }
        sentimentparam.sendtimentType = this.searchParam.radio || ''
        sentimentparam.sendtimentTime = this.timeroptionss || ''
      }
      if (this.$store.state.user) {
        sentimentparam.u_userid = this.$store.state.user.body.resultObj.u_userid || ''
        this.$http.post('http://localhost:8088/bms/comment/getSentimentMonitorData.action', sentimentparam).then((response) => {
          let data = response.body.hits.display
          this.tableData = []
          for (let i = 0; i < data.length; i++) {
            this.tableData.push({text: data[i].text, mid: data[i].mid})
          }
          this.showloading = false
        }, (response) => {
          this.showloading = false
          this.alert('网络异常,请检查')
        })
      }
    },
    handleIconClick () {
      this.getSentiment(1, 15, this.input)
    },
    checkListArr (a) {
      console.log(a)
    },
    checkboxsinfo () {
      // /comment/queryAmsSiteList.action
      this.showloading = true
      if (this.$store.state.user) {
        let prefix = this.$store.state.user.CHECKED_STATUS + '/bms/comment/queryAmsSiteList.action'
        this.$http.post(prefix).then((response) => {
          let resdata = response.body
          let len = resdata.length
          for (let i = 0; i < len; i++) {
            this.checkListBox.push({amsSiteId: resdata[i].amsSiteId, name: resdata[i].name})
            // this.checkList.push(resdata[i].name)
          }
          this.showloading = false
        }, (response) => {
          this.showloading = false
          this.alert('网络异常,请检查')
        })
      }
    },
    detailid (index, value) {
      console.log(value)
      let mid = value[index].mid
      this.$router.push({
        path: 'newsmediadetail',
        query: {
          id: mid
        }
      })
    }
  },
  created () {
    this.getSentiment(1, 15)
    this.checkboxsinfo()
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
        this.pager++
        let param = {
          page: this.pager,
          rows: 15,
          content: '',
          sendtimentTime: '',
          sendtimentType: '',
          sentimentCheck: ''
        }
        this.showloading = true
        if (this.$store.state.user) {
          param.content = this.input
          if (this.checkedmutil) {
            param.sendtimentType = this.searchParam.radio || ''
            param.sendtimentTime = this.timeroptionss || ''
            param.sentimentCheck = ''
          }
          let prefix = this.$store.state.user.CHECKED_STATUS
          let queryCorpusUserList = prefix + '/bms/comment/getSentimentMonitorData.action'
          this.$http.post(queryCorpusUserList, param).then((response) => {
            let pagetoals = response.body.hits.total
            let data = response.body.hits.display
            let len = data.length
            if (pagetoals > 0) {
              for (let i = 0; i < len; i++) {
                this.tableData.push({text: data[i].text, mid: data[i].mid})
              }
              this.showloading = false
              if (len === 0) {
                this.$alert('全部数据在这里啦')
              }
            } else {
              this.$alert('暂无数据')
            }
            this.showloading = false
          })
        } else {
          this.showloading = false
          this.$alert('建议重新登录!')
        }
      }
    })
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  rel="stylesheet/scss" lang="scss">
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
.newsmedia--searh-normal{
  .el-icon-search{
    background: #20a0ff;
    border-radius: 5px;
    color: #fff;
  }
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
.newsmedia--extend{
  &-timer,&-content,&-radio{
    display: flex;
  }
  &-timer,&-content{
    margin-top: 0.5rem;
    line-height: 2rem;
  }
  &-content{
    &-span{
      white-space: nowrap;
    }
  }
  &-radio{
    .el-radio-group{
      margin-left: 3px;
    }
  }
  &-timer{
    .el-form-item{
      margin: 0;
      .el-form-item__content{
        span{
          font-size: 16px;
        }
      }
    }
  }
  &-content{
    .el-inputs{
      width: auto;
      margin-left: 3px;
    }
  }
}
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
.newsmedia--wrap{
  padding:0 1rem;
}

.newsmedia--search{
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  line-height: 2.4rem;
  &-normal{
    width: 12rem;
  }
}

.newsmedia--list{
<<<<<<< HEAD
  margin-top: 1rem;
=======
  margin: 1rem 0 5rem;
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
  .table-th-t,.table-th-d{
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .el-table th>.cell{
    text-align: center;
  }
  .el-table .cell{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.el-table .info-row {
  background: #c9e5f5;
}

.el-table .positive-row {
  background: #e2f0e4;
}
</style>
