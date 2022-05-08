<template>
  <div class="home">
    <ShouY/>
    <LunB></LunB>
    <DiB></DiB>
  </div>
</template>

<script>
// @ is an alias to /src
// import ZhuC from '@/views/ZhuC.vue'
import ShouY from '@/views/ShouY.vue'
import LunB from '@/components/LunB.vue'
import DiB from '@/views/DiB.vue'
export default {
  
  components: {
    ShouY,
    LunB,
    DiB
  },
  name: 'ZongY',
}
</script>