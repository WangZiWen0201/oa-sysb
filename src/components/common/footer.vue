<template>
  <div class="app-footer">
    <div class="app-footer-wrap-s">
<<<<<<< HEAD
      <div class="app-footer-wrap" v-if="showsuper()">
        <div @click="linkToPath('newsmedia', {super:1})" :class="{'active':$route.name == 'newsmedia'}"><p><i class="el-icon-menu"></i></p>{{this.newsmedia}}</div>
        <div @click="linkToPath('taskdown', {super:1})" :class="{'active':$route.name == 'taskdown'}"><p><i class="el-icon-message"></i></p>{{this.taskdown}}</div>
        <div @click="linkToPath('commenter', {super:1})" :class="{'active':$route.name == 'commenter'}"><p><i class="el-icon-date"></i></p>{{this.workremind}}</div>
        <div @click="linkToPath('infomation', {super:1})" :class="{'active':$route.name == 'infomation'}"><p><i class="el-icon-document"></i></p>{{this.infomation}}</div>
      </div>
      <div class="app-footer-wrap" v-if="!showsuper()">
        <div @click="linkToPath('commenter')" :class="{'active':$route.name == 'commenter'}"><p><i class="el-icon-date"></i></p>{{this.workremind}}</div>
=======
      <div class="showloading" v-show="showloading"><span class="el-icon-loading"></span>数据正在加载~</div>
      <div class="app-footer-wrap" v-if="showsuper()">
        <div @click="linkToPath('newsmedia')" :class="{'active':$route.name == 'newsmedia'}"><p><i class="el-icon-menu"></i></p>{{this.newsmedia}}</div>
        <div @click="linkToPath('taskdown')" :class="{'active':$route.name == 'taskdown'}"><p><i class="el-icon-message"></i></p>{{this.taskdown}}</div>
        <div @click="linkToPath('commenter')" :class="{'active':$route.name == 'commenter'}"><p><i class="el-icon-date"></i></p>{{this.commenter}}</div>
        <div @click="linkToPath('infomation')" :class="{'active':$route.name == 'infomation'}"><p><i class="el-icon-document"></i></p>{{this.infomation}}</div>
      </div>
      <div class="app-footer-wrap" v-if="!showsuper()">
        <div @click="linkToPath('commenter')" :class="{'active':$route.name == 'commenter'}"><p><i class="el-icon-date"></i></p>{{this.commenter}}</div>
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
        <div @click="linkToPath('infomation')" :class="{'active':$route.name == 'infomation'}"><p><i class="el-icon-document"></i></p>{{this.infomation}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { USER_SIGNIN } from '../../store/storex'
export default {
  name: 'home',
  data () {
    return {
      taskdown: '任务下发',
      newsmedia: '舆情检测',
      infomation: '语料',
<<<<<<< HEAD
      workremind: '我的任务'
=======
      commenter: '我的任务',
      showloading: false
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
    }
  },
  computed: mapState({
    user: state => state.user
  }),
  methods: {
    ...mapActions([USER_SIGNIN]),
    linkToPath (path, param) {
      this.$router.push({
        path: path,
        query: param
      })
    },
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
    }
<<<<<<< HEAD
=======
  },
  watch: {
    // '$route': this.showloading = true
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
.active{
  color: #ff2;
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

.active{
  color: #eee;
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
}
.app-footer{
  position: fixed;
  bottom: 0;
  z-index: 500;
  width: 100%;
  background-color: #f7f7fa;
  .app-footer-wrap{
    display: flex;
    justify-content: space-around;
<<<<<<< HEAD
    background: #0c8484;
    border-bottom: 1px solid #58B7FF;
    outline: none;
    color: #ff9;
=======
    background: #20a0ff;
    border-bottom: 1px solid #58B7FF;
    outline: none;
    color: #333;
>>>>>>> fe67524103ffe3546281d2a8dd81bc4e27082d3f
    div{
      padding: 0 10px;
    }
    p{
      margin: 0;
      padding: 6px 0;
    }
  }
}
</style>
