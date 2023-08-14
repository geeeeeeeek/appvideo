<template>
  <a-config-provider :locale="zhCN">
    <router-view />
  </a-config-provider>
</template>
<script setup lang="ts">

import zhCN from 'ant-design-vue/es/locale/zh_CN';


onMounted(()=>{
  setSEO()
})

const setSEO = () => {
  document.title = '网站演示 - 免费在线视频'
  document.querySelector('meta[name="keywords"]')?.setAttribute('content', '免费电影-在线播放')
  document.querySelector('meta[name="description"]')?.setAttribute('content', '免费电影-在线播放')
}

</script>


<style>

  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /*height: 100vh;*/
}
</style>
