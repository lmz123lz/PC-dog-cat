<template>
  <div>
    <div id="box">
      <div class="common-layout">
        <el-container>
          <el-header>
            <h1 style="color: yellow">欢迎注册!!!让我们一起携手保护它们</h1>
          </el-header>
          <el-container>
            <el-main>
              <img src="../assets/01.jpg" alt="" />
            </el-main>
            <el-aside width="400px">
              <ul>
                <li class="yong">
                <el-input v-model="name" placeholder="请输入用户名"  />
              </li>
              <li class="mima">
                <el-input
                v-model="mima"
                type="password"
                placeholder="请输入密码"
                show-password
              />
              </li>
              <li class="deng">
                <el-button size="large"  round @click="onSubmit" color="#626aef">注册</el-button>
              </li>
              </ul>
            </el-aside>
          </el-container>
        </el-container>
      </div>
    </div>
  </div>
</template>

<script>
import { Search } from '@element-plus/icons-vue'
import { ElMessage } from "element-plus";
import { ref } from "vue";
import { useRouter } from "vue-router";
const labelPosition = ref("Top");
export default {
  setup() {
    const name = ref("");
    const mima = ref("");
    const router = useRouter();
    const onSubmit = () => {
      sessionStorage.setItem("name",name.value);
      sessionStorage.setItem("mima", mima.value);
      if ( name.value== ""||mima.value==""){
          ElMessage({
            showClose: true,
            message: "请先输入哦！！！",
          });
      }else{
        router.push("/zongye");
      }
    };
    return { labelPosition ,Search,name,mima,onSubmit};
  },
};
</script>
<style lang="scss" scoped>
#box {
  display: flex;
  justify-content: center;
}
.common-layout .el-header,
.common-layout .el-footer {
  background-color: #1d5297;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 40px;
  justify-content: center;
  //   margin: 0 auto;
}
.common-layout .el-footer {
  line-height: 60px;
}

.common-layout .el-aside {
  background-color: #020f27;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 50px;
  justify-content: center;
}

.common-layout .el-main {
  background-color: #03294e;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

.common-layout > .el-container {
  margin-bottom: 40px;
}

.common-layout .el-container:nth-child(5) .el-aside,
.common-layout .el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.common-layout .el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
#box ul{
margin-top: 180px;
}
#box ul li{
  list-style: none;
}
#box ul .mima{
  margin-top: 50px;
}
#box ul .deng{
  font-size: 30px;
  margin-top: 10px;
}
</style>
