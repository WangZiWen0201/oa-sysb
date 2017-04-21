<template>
  <div class="">
    <app-header></app-header>
    <div class="complete-detail">
        <div class="complete-detail-title">深圳公交失物招领系统上线</div>
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
          </div>
        </div>
        <textarea class="complete-detail-text"></textarea>
        <div class="complete-detail-pic">
          <div class="">pic1</div>
          <div class="">pic2</div>
          <div class="">pic3</div>
        </div>
    </div>
  </div>
</template>

<script>
import appHeader from '../../common/header.vue'
export default {
  name: 'completedetail',
  data () {
    return {
      msg: 'completedetail here'
    }
  },
  components: {
    appHeader: appHeader
  },
  methods: {
    linkToPath (path) {
      this.$router.push({path: path})
    }
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
.complete-detail{
  padding: 0 0.8rem;
  &-title{
    text-align: left;
    margin: 1rem 0;
  }
  &-text{
    margin-top: 1rem;
    width: 100%;
    height: 20rem;
    overflow-y: scroll;
  }
  &-pic{
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
  }
}
.commenter--item{
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
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
        width: 6rem;
        float: right;
      }
    }
}
</style>
