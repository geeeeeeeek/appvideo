<template>
  <div class="detail">
    <Header/>
    <div class="about">
      <img :src="wxIconView" style="width: 400px;height: 400px;"/>
      <div style="font-size: 18px;">扫个微信，聊一聊</div>
    </div>
    <Footer/>
  </div>
</template>

<script setup>
import {BASE_URL} from "/@/store/constants";
import {useUserStore} from "/@/store";
import wxIconView from '/@/assets/images/weixin.jpeg'
import Header from '/@/views/components/header.vue'
import Footer from '/@/views/components/footer.vue'

const router = useRouter();

const contentData = reactive({
})

onMounted(() => {
})


</script>

<style scoped lang="less">

.about {
  height: 800px;
  margin-top: 100px;
  text-align: center;
}
</style>
