<template>
  <div class="newsmedia--taskdetail">
    <div class="showloading" v-show="showloading"><span class="el-icon-loading"></span>数据正在加载~</div>
    <div class="newsmedia--taskdetail-title">
      <div class="el-icon-arrow-left" @click="linkToPath('newsmedia')"></div>
      <div class="">详情</div>
      <div class=""></div>
    </div>
    <div class="newsmedia--taskdetail-content">
      <div class="title">
        {{sentdata.title}}
      </div>
      <div class="resource">
        <span>{{sentdata.location}}</span>
        <span>{{sentdata.update}}</span>
        <span>信息来源:{{sentdata.source}}</span>
      </div>
      <div class="text">
        <span>原标题:<p class="text-p">{{sentdata.text}}</p></span>
      </div>
      <div class="btnEvent">
        <el-button type="info" @click="taskDown(sentdata.articleUrl)">任务下发</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { USER_SIGNIN } from '../../store/storex'
export default {
  name: 'newsmediadetail',
  data () {
    return {
      showloading: false,
      sentdata: {
        title: '',
        location: '',
        update: '',
        source: '',
        articleUrl: '',
        text: ''
      }
    }
  },
  computed: mapState({
    user: state => state.user
  }),
  methods: {
    ...mapActions([USER_SIGNIN]),
    showsuper () {
      let comfirmType = this.user.body
      if (comfirmType) {
        if (comfirmType.resultObj.roleValue === 'SUPER' || comfirmType.resultObj.roleValue === 'ADMIN') {
          return true
        } else {
          return false
        }
      } else {
        this.$router.push({path: 'login'})
      }
    },
    getSentimentMonitorById (a) {
      this.showloading = true
      if (this.$store.state.user && a) {
        let prefix = this.$store.state.user.CHECKED_STATUS
        let getSentimentMonitorByIdUrl = prefix + '/bms/comment/getSentimentMonitorById.action'
        this.$http.post(getSentimentMonitorByIdUrl, {id: a}).then((response) => {
          console.log(response)
          let msgResponse = response.body.hits.display[0]
          this.sentdata.title = msgResponse.title || response.webName
          if (!msgResponse.text_loc_city || !msgResponse.text_loc_province) {
            this.sentdata.location = (msgResponse.text_loc_country + msgResponse.text_loc) || ''
          } else {
            this.sentdata.location = (msgResponse.text_loc_province + msgResponse.text_loc_city) || ''
          }
          this.sentdata.update = msgResponse.updatetime.slice(0, -4)
          this.sentdata.source = response.webName || ' 佚名'
          this.sentdata.articleUrl = msgResponse.article_url || msgResponse.weibo_url
          this.sentdata.text = msgResponse.text || ''
          this.showloading = false
        })
      } else {
        this.showloading = false
        this.$alert('网络出错,建议重新登录!')
      }
    },
    taskDown (a) {
      this.$router.push({
        path: 'taskdowndetail',
        query: {
          articlurl: a,
          from: 'newsmedia'
        }
      })
    },
    linkToPath (a) {
      this.showloading = true
      this.$router.push({
        path: a
      })
    }
  },
  created () {
    let queryid = this.$route.query.id
    this.getSentimentMonitorById(queryid)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
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
.newsmedia--taskdetail{
  height: 2.6rem;
  padding: 0 0.8rem;
  background-color: #20a0ff;
  &-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 2.6rem;
  }
  &-content{
    .title,.resource{
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .title{
      width: 65%;
      margin: 1rem auto;
    }
    .resource{
      display: flex;
      justify-content: space-between;
    }
    .text{
      margin-top: 1rem;
      span{
        text-align: left;
      }
    }
    .text-p{
      height: 24rem;
      overflow-y: scroll;
    }
    .btnEvent{
      margin-top: 1rem;
    }
  }
}
</style>
