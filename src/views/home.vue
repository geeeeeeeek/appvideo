<template>
  <div class="portal">
    <Header />
    <Menu />
    <router-view/>
  </div>
  <Footer />
</template>

<script setup>
import Header from '/@/views/components/header.vue'
import Footer from '/@/views/components/footer.vue'
import Menu from '/@/views/components/menu.vue'
import Category from '/@/views/components/category.vue'

import {BASE_URL} from "/@/store/constants";
import {useUserStore} from "/@/store";
import {homeApi} from "/@/api/vod";


onMounted(() => {
  getData()
})

const data = reactive(['','','','','','','',''])

const getData = function () {
  homeApi({}).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}


</script>


<style scoped lang="less">

.portal {
  width: 100%;
  max-width: 1024px;
  min-height: calc(100vh - 180px);
  margin: 0 auto;
  padding: 0 10px 16px;
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Helvetica Neue,PingFang SC,Helvetica,Microsoft Yahei,Arial,sans-serif;
}

</style>
