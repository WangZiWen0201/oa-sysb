<template>
  <div class="app-header">
    <div class="title--news" v-show="$route.name == 'commenter'">
<<<<<<< HEAD
      <div class="el-icon-arrow-left"></div>
=======
      <div><div class="el-icon-arrow-left" @click="loginOut()" v-show="roleValueComfirm"></div></div>
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
      <div class="">我的任务列表</div>
      <div class=""></div>
    </div>
    <div class="title--news" v-show="$route.name == 'taskdown'">
<<<<<<< HEAD
      <div class="el-icon-arrow-left" @click="linkToPath('newsmedia')"></div>
      <div class="">任务下发</div>
      <div class=""></div>
    </div>
    <div class="title--news" v-show="$route.name == 'newsmedia'">
      <div class=""></div>
=======
      <div></div>
      <div class="">任务下发</div>
      <div class="" @click="linkToPath('taskdowndetail')">新建</div>
    </div>
    <div class="title--news" v-show="$route.name == 'taskdetail'">
      <div class="el-icon-arrow-left" @click="linkToPath('taskdown')"></div>
      <div class="">任务下发列表</div>
      <div class=""></div>
    </div>
    <div class="title--news" v-show="$route.name == 'newsmedia'">
      <div class="el-icon-arrow-left" @click="loginOut()"></div>
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
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
<<<<<<< HEAD
=======
import { mapActions, mapState } from 'vuex'
import { USER_SIGNOUT, USER_INFO } from '../../store/storex'
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
export default {
  name: 'app-header',
  data () {
    return {
<<<<<<< HEAD
      msg: ''
    }
  },
  methods: {
=======
      msg: '',
      roleValueComfirm: false
    }
  },
  computed: mapState({
    user: state => state.user
  }),
  methods: {
    ...mapActions([USER_SIGNOUT]),
    ...mapActions([USER_INFO]),
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
    linkToPath (path, param) {
      this.$router.push({
        path: path,
        query: param
      })
<<<<<<< HEAD
=======
    },
    loginOut () {
      this.$confirm('此操作将退出登录, 是否继续?', '提示tips', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
        this.USER_SIGNOUT()
        this.$router.replace({ path: '/login' })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    }
  },
  mounted () {
    if (this.$store.state.user.body.resultObj.roleValue === 'WANGPING' && this.$route.name === 'commenter') {
      this.roleValueComfirm = true
    } else {
      this.roleValueComfirm = false
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
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
