<template>
  <div>
    <div id="box">
      <div class="box2">
        <div class="box3">
          <h1>杭州地区一奶牛猫无偿养送</h1>
          <ul>
            <li v-for="(val, index) in arr" :key="index">
              <img :src="val.tu" alt="" @click="xiang(val.tu, val.zi)" />
            </li>
          </ul>
        </div>
        <div class="box4">
          <ul>
            <li>
              <el-row class="demo-avatar demo-basic">
                <el-col :span="12">
                  <div class="sub-title"></div>
                  <div class="demo-basic--circle">
                    <div class="block">
                      <el-avatar :size="40" :src="circleUrl"></el-avatar>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <br />
            </li>
            <li>csAA411</li>
            <li><i class="fa fa-heart fa-2x" aria-hidden="true">24</i></li>
            <li><i class="fa fa-comment fa-2x" aria-hidden="true">0</i></li>
            <li><i class="fa fa-retweet fa-2x" aria-hidden="true">0</i></li>
          </ul>
          <ol>
            <h1>联系我:158522525354</h1>
          </ol>
        </div>
        <div id="xx">
          <h1>该不该吃狗肉</h1>
          <ul>
            <li>
              一般来讲所谓吃的狗肉不是宠物狗，而是专门养殖以供食用的犬类，例如江苏沛县已经产业化的肉狗养殖
            </li>
            <li>
              但狂热的极端爱狗人士总是以偏概全，认为所有的犬类都不能吃，并且要求别人也不能吃。
            </li>
            <li>
              你如果问他们为什么不允许吃狗肉，他们的理由其实很可笑，狗很可爱，狗是人类的好朋友，所以不能吃？
            </li>
            <li>
              那凭什么鸡鸭鹅就可以吃？难道它们不可爱吗？如果是进行动物保护为什么分成等级区别对待？还是说本身虚伪？
            </li>
            <li>
              自称爱狗的爱心人士们，为什么不收养街上的那些流浪狗？难道他们不可爱吗？他们是哪里来的？还不是被爱狗人士遗弃的！
            </li>
            <li>
              更不要提城市里许多狗突然发疯发狂、咬人扑人、胡乱排泄影响卫生、大声嚎叫噪音扰民。说到底，狗只是狗主人的朋友，不能算是大家都好朋友。
            </li>
          </ul>
          <ol>
            <li>
              <el-row class="demo-avatar demo-basic">
                <el-col :span="12">
                  <div class="sub-title"></div>
                  <div class="demo-basic--circle">
                    <div class="block">
                      <el-avatar :size="40" :src="circleUrl"></el-avatar>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <br />
            </li>
            <li><i class="fa fa-heart fa-2x" aria-hidden="true">3</i></li>
            <li><i class="fa fa-comment fa-2x" aria-hidden="true">12</i></li>
            <li><i class="fa fa-retweet fa-2x" aria-hidden="true">5</i></li>
          </ol>
        </div>
        <div class="bb">
          <div class="bb1">
            <h1>财富排行榜</h1>
          </div>
          <div>
            <ul>
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
              </li>
              <li>站长 <span>我推荐宠物赠送网！</span></li>
              <li class="qq">123156金币</li>
              <li class="qq1">+关注</li>
            </ul>
            <ul>
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
              </li>
              <li>飒飒的是<span>我推荐宠物赠送网！</span></li>
              <li class="qq">12346金币</li>
              <li class="qq1">+关注</li>
            </ul>
            <ul>
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
              </li>
              <li>撒旦撒旦 <span>我推荐宠物赠送网！</span></li>
              <li class="qq">1246金币</li>
              <li class="qq1">+关注</li>
            </ul>
            <ul>
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
              </li>
              <li>过后就会感觉 <span>我推荐宠物赠送网！</span></li>
              <li class="qq">1236金币</li>
              <li class="qq1">+关注</li>
            </ul>
            <ul>
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
              </li>
              <li>冷静客观 <span>我推荐宠物赠送网！</span></li>
              <li class="qq">11546金币</li>
              <li class="qq1">+关注</li>
            </ul>
            <ul>
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
              </li>
              <li>热特瑞特 <span>我推荐宠物赠送网！</span></li>
              <li class="qq">12346金币</li>
              <li class="qq1">+关注</li>
            </ul>
            <ul>
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
              </li>
              <li>䘻热热特热 <span>我推荐宠物赠送网！</span></li>
              <li class="qq">12546金币</li>
              <li class="qq1">+关注</li>
            </ul>
            <ul>
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
              </li>
              <li>尔特瑞特 <span>我推荐宠物赠送网！</span></li>
              <li class="qq">546金币</li>
              <li class="qq1">+关注</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const state = reactive({
      circleUrl:
        "http://cwzs.oss-cn-hongkong.aliyuncs.com/user_files/5971/avatar/avatar_1645847788.jpg",
    });
    const { circleUrl } = toRefs(state);
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
    const router = useRouter();
    const xiang = (tu, zi) => {
      // console.log(imgs);
      router.push({ path: "/xiangQ", query: { tu: tu, zi: zi } });
    };
    return { ...toRefs(data), circleUrl, xiang };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/chushi.css"; /*引入公共样式*/
@import "../assets/font-awesome-4.7.0/css/font-awesome.min.css";
#box {
  width: 100%;
  display: flex;
  background-color: rgb(105, 104, 102);
}
#box .box2 {
  width: 1600px;
  border: 1px solid blue;
  margin: 0 auto;
}
#box .box2 .box3 {
  width: 900px;
  background-color: antiquewhite;
}
#box .box2 .box3 h1 {
  font-size: 30px;
  line-height: 80px;
}
#box .box2 .box3 ul {
  display: flex;
  flex-wrap: nowrap;
}
#box .box2 .box3 ul li {
  margin-right: 60px;
}
#box .box2 .box4 {
  width: 900px;
  background-color: antiquewhite;
  display: flex;
}
#box .box2 .box4 ul {
  height: 40px;
  display: flex;
  flex-wrap: nowrap;
  // margin-top: 50px;
}
#box .box2 .box4 ul li {
  margin-right: 60px;
}
#box .box2 .box4 ol h1 {
  margin-top: 10px;
  margin-left: 60px;
  font-size: 20px;
}
#box #xx {
  margin-top: 30px;
  width: 900px;
  background-color: antiquewhite;
}
#box #xx h1 {
  font-size: 35px;
  line-height: 80px;
}
#box #xx ul li {
  font-size: 20px;
}
#box #xx ol {
  height: 40px;
  display: flex;
  flex-wrap: nowrap;
  // margin-top: 50px;
}
#box #xx ol li {
  margin-right: 90px;
}
.bb {
  background-color: rgb(96, 97, 97);
  width: 700px;
  margin-top: -750px;
  // display: flex;
  // justify-content: space-between;
  float: right;
}
.bb ul {
  border-top: 1px solid rgb(69, 71, 71);

}
.bb .qq{
  margin-left: 600px;
  margin-top: -40px;
}
.bb .qq1{
  margin-left: 600px;
}
.bb .bb1 h1{
  text-align: center;
}
</style>
