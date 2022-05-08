<template>
  <div>
    <div id="box">
      <div class="box1">
        <ul class="bb">
          <li><h1>全国流浪动物救助基地名录</h1></li>
          <li><a href="">昆明团结乡卧云山狗场</a></li>
          <li><a href="">成都市陈平流浪狗收容中心</a></li>
          <li><a href="">大兴安岭加格达</a></li>
          <li><a href="">暖心流浪动物之家</a></li>
          <li><a href="">成都花果山流浪猫狗救助中心</a></li>
          <li><a href="">动物救助第一基站</a></li>
        </ul>
        <ul class="lunbo">
          <el-carousel indicator-position="outside" class="lunbo2">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>
                <img src="../assets/dd.jpg" alt="" />
              </h3>
            </el-carousel-item>
          </el-carousel>
        </ul>
      </div>
    </div>
    <div id="box1">
      <div class="box2">
        <div class="box3">
          <ul>
            <li><a href="">全部</a></li>
            <li><a href="">推荐</a></li>
            <li><a href="">关注</a></li>
            <li><a href="">动态</a></li>
            <li><a href="">音乐</a></li>
            <li><a href="">文章</a></li>
            <li><a href="">视频</a></li>
            <li><a href="">转发</a></li>
            <li><a href="">帖子</a></li>
            <li><a href="">付费</a></li>
            <li><a href="">同城</a></li>
            <li><a href="">喜欢</a></li>
            <li><a href="">收藏</a></li>
          </ul>
        </div>
        <div class="box4">
          <ul>
            <li><el-input v-model="input" placeholder="请输入用户名" /></li>
            <li>
              <el-input
                v-model="mima"
                type="password"
                placeholder="请输入密码"
                show-password
              />
            </li>
            <li class="deng">
              <el-button type="primary" @click="denglu">登录</el-button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="weibo">
      <div class="weibo1">
        <ul class="weibo2">
          <li>
            <el-row class="demo-avatar demo-basic">
              <el-col :span="12">
                <div class="sub-title"></div>
                <div class="demo-basic--circle">
                  <div class="block">
                    <el-avatar :size="60" :src="circleUrl"></el-avatar>
                  </div>
                </div>
              </el-col>
            </el-row>
            <br />
            <p style="color: red">已转发</p>
          </li>
          <li style="line-height: 60px">
            <el-button size="small" color="#626fea" style="color: white"
              >站长</el-button
            >
            <p>20:54 手机端</p>
          </li>
          <li style="line-height: 60px">
            <el-button size="small" color="#626aef" style="color: white"
              >顶</el-button
            >
          </li>
          <li style="line-height: 60px">
            <el-button size="small" color="#626aef" style="color: white"
              >推荐</el-button
            >
          </li>
          <li style="line-height: 60px">
            <el-button size="small" color="#626aef" style="color: white"
              >大V</el-button
            >
          </li>
        </ul>
        <div class="weibo3">
          <ul>
            <li>
              <el-button size="small" color="#626aef" style="color: white"
                >站长</el-button
              ><el-button size="small" color="#626aef" style="color: white"
                >进士</el-button
              >
            </li>
            <li>提醒:网上宠物交易骗局多,免费赠猫狗先付“运费”是骗局!</li>
            <li>
              骗子以免费赠送宠物狗来诱惑人，等你电话联系了，对方声称在异地，建议空运，但要你承担托运的相关费用，随后便一刻不
            </li>
            <li>
              停地催促你去银行打钱。6月10日，库尔勒市民徐先生就遭遇了这样一个“网络骗局”，幸运的是他识破了这个骗局。6月8
            </li>
            <li>
              日，徐先生在“XX”网上发布了一条信息：真心求购一条阿拉斯......
            </li>
          </ul>
        </div>
        <div class="weibo4">
          <ul>
            <li><i class="fa fa-heart fa-2x" aria-hidden="true"></i>52</li>
            <li><i class="fa fa-comment fa-2x" aria-hidden="true"></i>63</li>
            <li><i class="fa fa-retweet fa-2x" aria-hidden="true"></i>45</li>
            <li><i class="fa fa-eye fa-2x" aria-hidden="true"></i>25.47w</li>
          </ul>
        </div>
        <div class="weibo5">
          <ul>
            <li>
              <el-row class="demo-avatar demo-basic"
                ><el-col :span="12"
                  ><div class="sub-title"></div>
                  <div class="demo-basic--circle">
                    <div class="block">
                      <el-avatar :size="60" :src="circleUrl"></el-avatar>
                    </div></div
                ></el-col>
              </el-row>
            </li>
            <li>
              <el-row class="demo-avatar demo-basic"
                ><el-col :span="12"
                  ><div class="sub-title"></div>
                  <div class="demo-basic--circle">
                    <div class="block">
                      <el-avatar :size="60" :src="q"></el-avatar>
                    </div></div
                ></el-col>
              </el-row>
            </li>
            <li>
              <el-row class="demo-avatar demo-basic"
                ><el-col :span="12"
                  ><div class="sub-title"></div>
                  <div class="demo-basic--circle">
                    <div class="block">
                      <el-avatar :size="60" :src="w"></el-avatar>
                    </div></div
                ></el-col>
              </el-row>
            </li>
            <li>
              <el-row class="demo-avatar demo-basic"
                ><el-col :span="12"
                  ><div class="sub-title"></div>
                  <div class="demo-basic--circle">
                    <div class="block">
                      <el-avatar :size="60" :src="e"></el-avatar>
                    </div></div
                ></el-col>
              </el-row>
            </li>
            <li>
              <el-row class="demo-avatar demo-basic"
                ><el-col :span="12"
                  ><div class="sub-title"></div>
                  <div class="demo-basic--circle">
                    <div class="block">
                      <el-avatar :size="60" :src="r"></el-avatar>
                    </div></div
                ></el-col>
              </el-row>
            </li>
            <li>
              <el-row class="demo-avatar demo-basic"
                ><el-col :span="12"
                  ><div class="sub-title"></div>
                  <div class="demo-basic--circle">
                    <div class="block">
                      <el-avatar :size="60" :src="t"></el-avatar>
                    </div></div
                ></el-col>
              </el-row>
            </li>
            <li>
              <el-row class="demo-avatar demo-basic"
                ><el-col :span="12"
                  ><div class="sub-title"></div>
                  <div class="demo-basic--circle">
                    <div class="block">
                      <el-avatar :size="60" :src="y"></el-avatar>
                    </div></div
                ></el-col>
              </el-row>
            </li>
            <li>
              <el-row class="demo-avatar demo-basic"
                ><el-col :span="12"
                  ><div class="sub-title"></div>
                  <div class="demo-basic--circle">
                    <div class="block">
                      <el-avatar :size="60" :src="u"></el-avatar>
                    </div></div
                ></el-col>
              </el-row>
            </li>
            <li>
              <el-row class="demo-avatar demo-basic"
                ><el-col :span="12"
                  ><div class="sub-title"></div>
                  <div class="demo-basic--circle">
                    <div class="block">
                      <el-avatar :size="60" :src="i"></el-avatar>
                    </div></div
                ></el-col>
              </el-row>
            </li>
            <li>
              <el-row class="demo-avatar demo-basic"
                ><el-col :span="12"
                  ><div class="sub-title"></div>
                  <div class="demo-basic--circle">
                    <div class="block">
                      <el-avatar :size="60" :src="o"></el-avatar>
                    </div></div
                ></el-col>
              </el-row>
            </li>
            <li>
              <el-row class="demo-avatar demo-basic"
                ><el-col :span="12"
                  ><div class="sub-title"></div>
                  <div class="demo-basic--circle">
                    <div class="block">
                      <el-avatar :size="60" :src="p"></el-avatar>
                    </div></div
                ></el-col>
              </el-row>
            </li>
          </ul>
        </div>
        <div class="weibo6">
          <ol>
            <h1 style="color: blue">在线用户</h1>
            <li v-for="(val, index) in arr" :key="index">
              <img :src="val.imgs" alt="" />
            </li>
          </ol>
          <ol>
            <h1 style="color: green">刚刚来过</h1>
            <li v-for="(val, index) in arr" :key="index">
              <img :src="val.imgs" alt="" />
            </li>
          </ol>
          <ol>
            <h1 style="color: yellow">VIP用户</h1>
            <li v-for="(val, index) in arr" :key="index">
              <img :src="val.imgs" alt="" />
            </li>
          </ol>
          <ol>
            <h1 style="color: gray">×忙碌中</h1>
            <li v-for="(val, index) in arr" :key="index">
              <img :src="val.imgs" alt="" />
            </li>
          </ol>
          <!-- <ul>
            <li v-for="(val, index) in arr" :key="index">
              <img :src="val.imgs" alt="" />
            </li>
          </ul> -->
          <!-- <div v-for="(val,index) in arr" :key="index">
            <img :src="val.imgs" alt="" />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { ElMessage } from "element-plus";
// import { useRouter } from "vue-router";
import axios from "axios";
import { onMounted, reactive, toRefs } from "vue";
import { ElMessageBox } from "element-plus";
import { ref } from "vue";
export default {
  setup() {
    const input = ref("");
    const mima = ref("");
    const state = reactive({
      circleUrl:
        "http://www.zengsong.org/wp-content/uploads/user_files/1/avatar/avatar_1570671755.jpg",
      q: "https://thirdqq.qlogo.cn/g?b=oidb&k=r4g7GfIL8EW8OTyF4WarYQ&s=100&t=1556408114",
      w: "http://www.zengsong.org/face/33.png",
      e: "https://thirdqq.qlogo.cn/g?b=oidb&k=h7ZicwS7u4Ybs24ichrF2vDg&s=100&t=1611997279",
      r: "https://thirdqq.qlogo.cn/g?b=oidb&k=iagJqBROicbxEuibFz4ibTHEYw&s=100&t=1587048569",
      t: "http://cwzs.oss-cn-hongkong.aliyuncs.com/user_files/2562/avatar/98294263_1594996425.png",
      y: "http://www.zengsong.org/face/32.png",
      u: "https://thirdqq.qlogo.cn/g?b=oidb&k=B9jMyBm74H49xdBEM5jkgQ&s=100&t=1593498988",
      i: "https://thirdqq.qlogo.cn/g?b=oidb&k=UrsRLvfibtgkIUeypR6V2sQ&s=100&t=1588771083",
      o: "http://www.zengsong.org/face/28.png",
      p: "https://thirdqq.qlogo.cn/g?b=oidb&k=nyEbaNSCoyXcaMCFGd1IXA&s=100&t=1585975478",
    });
    const { circleUrl, squareUrl, sizeList, q, w, e, r, t, y, u, i, o, p } =
      toRefs(state);
    const data = reactive({
      arr: [],
    });
    const gets = () => {
      axios
        .get("/data/index")
        .then((res) => {
          // 深拷贝
          console.log(res.data[0].list);
          res.data[0].list.forEach((val) => {
            data.arr.push(val);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    onMounted(() => {
      gets();
    });
    // const router = useRouter();
    const denglu = () => {
      if (
        sessionStorage.getItem("name") !== input.value ||
        sessionStorage.getItem("mima") !== mima.value
      ) {
        ElMessageBox.confirm(
          "您输入的用户名或密码错误,请重新输入！",
          {
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
          }
        )
          // .then(() => {
          //   ElMessage({
              
          //   });
          // })
          // .catch(() => {
          //   ElMessage({
              
             
          //   });
          // });
        // ElMessage({
        //   showClose: true,
        //   message: "请正确输入！！！",
        // });
      } else {
         ElMessageBox.confirm(
          "恭喜登陆成功！",
          {
            confirmButtonText: "OK",
          }
        )
      }
    };
    return {
      input,
      mima,
      circleUrl,
      squareUrl,
      sizeList,
      q,
      w,
      e,
      r,
      t,
      y,
      u,
      i,
      o,
      p,
      ...toRefs(data),
      gets,
      denglu,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/chushi.css"; /*引入公共样式*/
@import "../assets/font-awesome-4.7.0/css/font-awesome.min.css";
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  // height: 500px;
  margin: 0 auto;
  text-align: center;
}
#box {
  width: 100%;
  // border: 1px solid aqua;
  background-color: antiquewhite;
}
#box .box1 {
  width: 1600px;
  margin: 0 auto;
  // border: 1px solid red;
  display: flex;
  justify-content: space-between;
  background-color: rgb(241, 236, 232);
}
#box .box1 .bb {
  width: 400px;
  background-color: rgb(174, 207, 120);
  line-height: 60px;
  text-align: center;
}
#box .box1 .bb li {
  font-weight: 600;
  // border-bottom: 1px solid black;
  font-size: 25px;
}
#box .box1 .bb li a {
  color: rgb(47, 66, 47);
  text-decoration: none;
}
#box .box1 .bb li:hover {
  color: rgb(49, 13, 146);
  background-color: rgb(101, 155, 196);
  cursor: pointer;
}
#box .box1 .lunbo {
  padding: 50px;
  width: 1100px;
  border-left: 1px solid black;
}

#box1 {
  width: 100%;
  // border: 1px solid aqua;
  background-color: antiquewhite;
}
#box1 .box2 {
  width: 1600px;
  margin: 0 auto;
  // border: 1px solid aqua;
  display: flex;
  justify-content: space-between;
  background-color: rgb(134, 188, 192);
}
#box1 .box2 .box3 {
  display: flex;
  flex-wrap: nowrap;
}
#box1 .box2 .box3 ul {
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
}
#box1 .box2 .box3 ul li {
  line-height: 100px;
  font-weight: 600;
  text-align: center;
  margin-right: 35px;
  font-size: 20px;
}
#box1 .box2 .box3 ul li a {
  margin-left: 25px;
  text-decoration: none;
}
#box1 .box2 .box3 ul:hover {
  background-color: aquamarine;
  cursor: pointer;
}
#box1 .box2 .box3 ul li a:hover {
  color: rgb(37, 22, 2);
}
#box1 .box2 .box4 {
  margin-right: 40px;
}
#box1 .box2 .box4 .deng {
  margin-left: 70px;
}

#weibo {
  width: 100%;
  background-color: antiquewhite;
  display: flex;
}
#weibo .weibo1 {
  width: 1600px;
  margin: 0 auto;
  // border: 1px solid aqua;
}
#weibo .weibo1 .weibo2 {
  background-color: aliceblue;
  width: 900px;
  display: flex;
  flex-wrap: nowrap;
}
#weibo .weibo1 .weibo2 li {
  margin-right: 10px;
}
#weibo .weibo1 .weibo3 {
  width: 900px;
  background-color: rgb(158, 162, 165);
}
#weibo .weibo1 .weibo3 ul li {
  font-size: 20px;
}
#weibo .weibo1 .weibo4 {
  width: 900px;
  background-color: rgb(219, 231, 221);
  display: flex;
}
.weibo4 ul {
  display: flex;
  flex-wrap: nowrap;
}
.weibo4 ul li {
  margin-right: 60px;
  line-height: 70px;
}
#weibo .weibo1 .weibo5 {
  width: 900px;
  background-color: rgb(219, 231, 221);
  display: flex;
}
#weibo .weibo1 .weibo5 ul {
  display: flex;
  flex-wrap: nowrap;
}
#weibo .weibo1 .weibo5 ul li {
  margin-right: 18px;
}
#weibo .weibo1 .weibo6 {
  // height: 500px;
  width: 700px;
  display: flex;
  // justify-content: flex-end;
  background-color: rgb(216, 228, 228);
  margin-left: 900px;
  margin-top: -439px;
}
#weibo .weibo1 .weibo6 ol {
  // display: flex;
  // flex-wrap: nowrap;
  margin-right: 40px;
  margin-left: 40px;
}
#weibo .weibo1 .weibo6 ol li {
  margin-top: 1px;
}
#weibo .weibo1 .weibo6 ol h1 {
  margin-left: 15px;
}
</style>
