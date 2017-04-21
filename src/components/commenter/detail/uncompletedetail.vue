<template>
  <div class="">
    <app-header></app-header>
    <div class="uncomplete-detail">
        <div class="complete-detail-title">深圳公交失物招领系统上线</div>
        <div class="uncommenter--item">
          <div class="uncommenter--item-left">
            <div>编码: 20170407</div>
            <div>类型:  跟帖</div>
            <div>任务描述: 请跟帖  </div>
          </div>
          <div class="uncommenter--item-right">
            <div>发布人: 超管1</div>
            <div>发布时间：2017-04-05 09：30</div>
            <div>结束时间：2017-04-10 09：30</div>
          </div>
        </div>
        <div class="uncomplete-detail-text">
          <div>广东深圳市2017-04-12 08:17:21</div>
          <div>信息来源 :凤凰网</div>
          <div>原标题：深圳公交失物招领系统上线深圳特区
          报讯（记者 徐兴东）随身物品落在公交车里，以后可以试一下微信找回。记者获悉，为了方便市民查
          效透明的监督公交企业车队上报数据，可以确保市民的丢失物品第一时间上报、第一时间找回。同时，
          通过后台监管也能够监督公交车队对仔细核查失主的领取信息，避免错领和冒领丢失物品。记者体验发
          现，市民使用该系统。</div>
        </div>
        <div class="uncomplete-detail-btn">
          <el-button type="primary" class="btn-detail">详情</el-button>
          <el-button type="primary" class="btn-detail">物料</el-button>
        </div>
        <div class="uncomplete-detail-upload">
          <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList2"
          list-type="picture">
          <el-button size="small" type="primary" class="upload-demo-btn">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        </div>
    </div>
  </div>
</template>

<script>
import appHeader from '../../common/header.vue'
export default {
  name: 'uncompletedetail',
  data () {
    return {
      msg: 'uncompletedetail here',
      fileList2: []
    }
  },
  components: {
    appHeader: appHeader
  },
  methods: {
    linkToPath (path) {
      this.$router.push({path: path})
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
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
.uncomplete-detail{
  padding: 0 0.8rem;
  &-title{
    text-align: left;
    margin: 1rem 0;
  }
  &-text{
    margin-top: 1rem;
    width: 100%;
    height: 6rem;
    overflow-y: scroll;
    border: 1px dashed #13CE66;
    div{
      text-align: left;
    }
  }
  &-btn{
    display: flex;
  }
  &-upload{
    margin-top: 1rem;
    .upload-demo{
      width: 20rem;
      text-align: left;
      .el-upload,.el-upload__tip{
        padding-left: 0.5rem;
      }
    }
  }
}
.uncommenter--item{
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

.btn-detail{
  margin-top: 0.5rem;
  padding: 0.4rem 0.5rem;
  width: 6rem;
  float: left;
}
</style>
