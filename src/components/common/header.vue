<template>
  <div class="app-header">
    <div class="title--news" v-show="$route.name == 'commenter'">
      <div class="el-icon-arrow-left"></div>
      <div class="">我的任务列表</div>
      <div class=""></div>
    </div>
    <div class="title--news" v-show="$route.name == 'taskdown'">
      <div class="el-icon-arrow-left" @click="linkToPath('newsmedia')"></div>
      <div class="">任务下发</div>
      <div class=""></div>
    </div>
    <div class="title--news" v-show="$route.name == 'newsmedia'">
      <div class=""></div>
      <div class="">舆情检测</div>
      <div class=""></div>
    </div>
    <div class="title--info"  v-show="$route.name == 'infomation'">
      <div class="el-icon-arrow-left" @click="linkToPath('newsmedia')"></div>
      <div class="">语料</div>
      <div class=""></div>
    </div>
    <div class="title--work"  v-show="$route.name == 'workremind'">
      <div class=""></div>
      <div class="">任务列表</div>
      <div class=""></div>
    </div>
    <!-- 网评员 -->
    <div class="title--news" v-show="$route.name == 'completedetail'">
      <div class="el-icon-arrow-left" @click="linkToPath('commenter')"></div>
      <div class="">已完成--任务详情</div>
      <div class=""></div>
    </div>
    <div class="title--news" v-show="$route.name == 'uncompletedetail'">
      <div class="el-icon-arrow-left" @click="linkToPath('commenter')"></div>
      <div class="">待完成--任务详情</div>
      <div class=""></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    linkToPath (path, param) {
      this.$router.push({
        path: path,
        query: param
      })
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
.app-header{
  height: 2.6rem;
  padding: 0 0.8rem;
  background-color: #20a0ff;
  .title--news,.title--info,.title--work{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 2.6rem;
  }
}
</style>
