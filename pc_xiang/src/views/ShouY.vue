<template>
  <div>
    <div id="box">
      <div id="box1">
        <ul>
          <img src="../assets/logo_1.png" alt="" width="60" height="60" />
          <h1>动保联盟</h1>
          <el-button class="guanwang">官网</el-button>
        </ul>
        <ul>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
          </el-menu>
          <div class="h-6"></div>
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect"
          >
            <el-menu-item index="1" @click="tiao">注册</el-menu-item>
            <el-sub-menu index="2">
              <template #title>救助地区</template>
              <el-menu-item index="2-1">西安</el-menu-item>
              <el-menu-item index="2-2">贵州</el-menu-item>
              <el-menu-item index="2-3">上海</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="3" disabled>禁止</el-menu-item>
            <el-menu-item index="4">登录</el-menu-item>
            <el-menu-item index="1">手册</el-menu-item>
          </el-menu>
        </ul>
      </div>
    </div>
    <div class="box">
      <div class="box1">
        <ul>
          <li><a href="">首页</a></li>
          <li>资源对接</li>
          <li>安全守卫</li>
          <li>基地名录</li>
          <li>关于我们</li>
        </ul>
        <ul>
          <input type="text" placeholder="你想知道的都在这">
          <el-button type="warning" size="large">搜索</el-button>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    const tiao=()=>{
      router.push("/zhuce");
    }
    return {tiao};
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/chushi.css"; /*引入公共样式*/
* {
  margin: 0;
}
ul {
  padding: 0;
}
#box {
  width: 100%;
  // border: 1px solid aqua;
  display: flex;
  background-color: rgb(231, 164, 76);
}
#box1 {
  // height: 90px;
  width: 1600px;
  // border: 1px solid black;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
#box1 ul {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
// #box1 ul img{
//   // margin-top: -16px;
// }
#box1 ul h1 {
  line-height: 55px;
  font-size: 40px;
}
#box1 .guanwang {
  // line-height: 60px;
  margin-top: 15px;
}
.box{
  width: 100%;
  // border: 1px solid rebeccapurple;
  background-color: rgb(109, 78, 38);
}
.box .box1 {
  width: 1600px;
  // border: 1px solid black;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.box .box1 ul {
  display: flex;
  flex-wrap: nowrap;
  // justify-content: flex-start;
  font-size: 30px;
}
.box .box1 ul a{
  color: green;
  text-decoration: none;
}
.box .box1 ul a:hover{
  color: blue;
}
.box .box1 ul li{
  margin-right: 50px;
  // background-color: aqua;
}
.box .box1 ul li:hover{
  background-color: rgb(51, 49, 78);
  cursor: pointer;
}
.box .box1 ul input{
  border: 3px solid blue;
}
</style>
