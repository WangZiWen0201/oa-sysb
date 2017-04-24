<template>
  <div class="hello">
    <app-header></app-header>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm workremind">
      <el-form-item label="状态" prop="tasktype">
        <el-select v-model="ruleForm.tasktype" placeholder="全部">
          <el-option label="全部" value="alltask"></el-option>
          <el-option label="已完成" value="taskend"></el-option>
          <el-option label="未完成" value="taskstart"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="workremind--item">

    </div>
    <div class="ele-wrap">
      <el-button type="text" @click="open">back to login</el-button>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from '../common/header.vue'
import appFooter from '../common/footer.vue'
import { mapActions } from 'vuex'
import { USER_SIGNOUT } from '../../store/storex'
export default {
  name: 'workremind',
  data () {
    return {
      ruleForm: {
        tasktype: ''
      },
      rules: {
        tasktype: [
          { required: true, message: '请选择任务类型', trigger: 'change' }
        ]
      }
    }
  },
  components: {
    appFooter: appFooter,
    appHeader: appHeader
  },
  methods: {
    ...mapActions([USER_SIGNOUT]),
    submitout () {
      this.USER_SIGNOUT()
      this.$router.replace({ path: '/login' })
    },
    open () {
      console.log(this.value2)
      this.$msgbox({
        title: '退出确认',
        message: '确认退出登录吗',
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '正在退出'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 1000)
            this.USER_SIGNOUT()
            this.$router.replace({ path: '/login' })
          } else {
            done()
          }
        }
      }).then(action => {})
    }
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

.workremind{
  margin-top: 2rem;
  .el-scrollbar{
    width: 8rem;
  }
}
</style>
