<template>
  <div>
      <div id="box">
          <img :src="tu" alt="" width="300">
          <h1>{{zi}}</h1>
      </div>
      
  </div>
</template>
<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const tu= route.query.tu;
    const zi= route.query.zi;

    const huoqu = () => {
      console.log(route.query.tu);
    };
    onMounted(() => {
      huoqu();
    });
    return {tu,zi};
  },
};
</script>
<style lang="scss" scoped>
#box{
    width: 900px;
    margin: 0 auto;
    margin-top: 100px;
    background-color: pink;
    display: flex;
    justify-content: space-between;
}
h1{
    font-size: 50px;
    margin-right: 120px;
    margin-top: 120px;
}
</style>
