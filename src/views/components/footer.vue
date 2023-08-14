<template>
  <div class="footer-view">
    <div class="foot-link-box flex-view">
      <a href="/" class="foot-link" target="_blank">在线留言</a>
      <div class="link-split"></div>
      <a href="/" class="foot-link" target="_blank">排行榜</a>
      <div class="link-split"></div>
      <a href="/" class="foot-link" target="_blank">网站地图</a>
    </div>
    <div class="footer-infos">
      <span>
        <a style="color: #828a92;padding: 0 20px;">本网站只提供web页面服务，通过链接的方式提供相关内容（所有视频内容收集于各大视频网站），本站不对链接内容具有进行编辑、整理、修改等权利。如有问题，请反馈E-mail: kefu009#gmail.com</a>
      </span>
    </div>
    <div class="address">2022-2023 © 火星代码工作室 · All Rights Reserved</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="less">
.flex-view {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.footer-view {
  width: 100%;
  margin: 0 auto;
  padding: 24px 0 20px 0px;
  background-color: #2a2a32;

  .foot-link-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    margin: 24px auto 16px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    .foot-link {
      font-size: 12px;
      margin: 0 16px;
      color: #fff;
    }

    .link-split {
      display: inline-block;
      width: 1px;
      height: 13.5px;
      background-color: #828a92;
    }

    a {
      background-color: transparent;
      text-decoration: none;
      color: #fff;
    }
  }

  .footer-infos {
    font-size: 12px;
    color: #828a92;
    margin-top: 16px;
    text-align: center;
  }

  .address {
    text-align: center;
    height: 16px;
    line-height: 16px;
    font-size: 12px;
    color: #828a92;
    margin-top: 8px;
  }
}
</style>
