<template>
  <div class="newsmedia">
    <app-header></app-header>
      <div class="newsmedia--wrap">
        <div class="newsmedia--search">
          <div class="newsmedia--searh-normal"><el-input placeholder="舆情搜索" icon="search" v-model="input" :on-icon-click="handleIconClick">搜索</el-input></div>
          <el-checkbox v-model="checkedmutil">高级搜索</el-checkbox>
        </div>
        <div class="showloading" v-show="showloading"><span class="el-icon-loading"></span>数据正在加载~</div>
        <div class="newsmedia--extend">
          <el-radio-group v-model="extendRadio" @change="changeRadio(extendRadio)">
            <el-radio-button label="上海" value="0"></el-radio-button>
            <el-radio-button label="北京" value="1"></el-radio-button>
            <el-radio-button label="广州" value="2"></el-radio-button>
            <el-radio-button label="深圳" value="3"></el-radio-button>
          </el-radio-group>
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
import { mapState } from 'vuex'
import appHeader from '../common/header.vue'
import appFooter from '../common/footer.vue'
export default {
  name: 'newsmedia',
  data () {
    return {
      input: '',
      checkedmutil: false,
      tableData: [],
      pageindex: 0,
      showloading: false,
      extendRadio: ''
    }
  },
  components: {
    appFooter: appFooter,
    appHeader: appHeader
  },
  methods: {
    handleIconClick () {
      console.log('search event')
      console.log(this.checkedmutil)
    },
    changeRadio (a) {

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
  margin-top: 1rem;
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
