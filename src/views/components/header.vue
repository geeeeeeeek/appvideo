<template>
  <header class="header-layout">
    <div class="header-wrap">
      <a class="left-wrap" href="/">
        <img :src="LogoImg" class="logo"/>
        <div class="title">88视频</div>
      </a>
      <div class="right-wrap">
        <div class="search-wrap">
          <div class="input-container">
            <input class="input" type="search" placeholder="关键词" v-model="keywordRef" @keydown.enter="handleSearch">
            <span class="search-btn" role="button" tabindex="0" @click="handleSearch">
                <svg width="20" height="20" viewBox="0 0 24 24"
                     fill="none" xmlns="http://www.w3.org/2000/svg"
                     role="img">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M15.77 5.83a7.028 7.028 0 1 0-9.94 9.94 7.028 7.028 0 0 0 9.94-9.94Zm-11-1.06a8.528 8.528 0 0 1 12.568 11.507l3.892 3.893a.75.75 0 1 1-1.06 1.06l-3.893-3.892A8.53 8.53 0 0 1 4.769 4.77Z"
                        fill="#0C0D0F">
                  </path>
                </svg>
            </span>
          </div>
        </div>
        <div class="btn-wrap">
          <!--          <ul class="nav-list">-->
          <!--            <li class="siteHeader__textBtn">-->
          <!--              <div role="link" tabindex="0">下载APP</div>-->
          <!--            </li>-->
          <!--          </ul>-->
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {listApi} from '/@/api/notice'
import {useUserStore} from "/@/store";
import logoImage from '/@/assets/images/k-logo.png';
import SearchIcon from '/@/assets/images/search-icon.svg';
import AvatarIcon from '/@/assets/images/avatar.jpg';
import MessageIcon from '/@/assets/images/message-icon.svg';
import LogoImg from '/@/assets/images/logo.png'


const router = useRouter();
const route = useRoute();
const userStore = useUserStore();

const keywordRef = ref('')

let loading = ref(false)
let msgVisible = ref(false)
let msgData = ref([] as any)

onMounted(() => {
})

const handleNav = (name) => {
  router.push({name: name})
}

const handleGithub = () => {
  window.open("https://github.com/geeeeeeeek")
}

const handleSearch = () => {
  console.log(keywordRef.value)
  if(keywordRef.value !== ''){
    router.push({name: 'search', query:{keyword: keywordRef.value}})
  }
}

</script>

<style scoped lang="less">
.header-layout {
  background-color: white;
  max-width: 1024px;
  width: 100%;
  height: 64px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  z-index: 99;

  .header-wrap {
    margin: 0 auto;
    height: 64px;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    z-index: 1;

    .left-wrap {
      display: flex;
      flex-direction: row;
      //width: 140px;
      .logo {
        //background-image: url(https://lf3-static.bytednsdoc.com/obj/eden-cn/hbnpe_lm_wpn/ljhwZthlaukjlkulzlp/xigua_pc/new-pc-icons/logo.svg);
        background-position-y: center;
        background-repeat: no-repeat;
        display: block;
        width: 35px;
        height: 31px;
      }
      .title {
        display: inline-block;
        line-height: 31px;
        margin-left: 10px;
        font-size: 16px;
        font-weight: 700;
        text-shadow: 0 4px 8px rgba(216,30,6,0.3);  /*设置文字阴影*/
        user-select: none;
      }
    }
    .left-wrap:hover{
      color: #0c0d0f;
      text-shadow: 0 4px 8px rgba(0,0,0,0.6);  /*设置文字阴影*/
    }

    .right-wrap {
      flex:1;
      padding: 0 1px;
      display: flex;

      .search-wrap {
        margin-left: 24px;
        position: relative;
        flex: 1 1;
        display: inline-block;
        height: 40px;
        max-width: 560px;
        min-width: 120px;
        z-index: 100;

        .input-container {
          position: relative;
          height: 40px;

          .input {
            transition: background-color .2s ease, outline .2s ease, box-shadow .2s ease;
            color: #0c0d0f;
            background-color: rgba(0, 0, 0, 0.04);
            padding: 0 32px 0 16px;
            line-height: 20px;
            width: 100%;
            caret-color: #0c0d0f;
            box-sizing: border-box;
            height: 100%;
            font-size: 14px;
            border: 1px solid transparent;
            border-radius: 4px;
          }
        }

        .search-btn {
          position: absolute;
          justify-content: center;
          margin: 4px 4px 4px 0;
          border-radius: 4px;
          height: 32px;
          width: 32px;
          display: flex;
          cursor: pointer;
          font-size: 14px;
          line-height: 18px;
          align-items: center;
          right: 0;
          top: 0;
          color: #0c0d0f;

          svg {
            height: 18px;
            width: 18px;
          }
        }

        .search-btn:after {
          content: "";
          position: absolute;
          left: -4px;
          display: block;
          width: 1px;
          pointer-events: none;
          height: 16px;
          background-color: rgba(12, 13, 15, .06);
        }
      }

      .btn-wrap {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-left: auto;
      }

      .nav-list {
        font-size: 14px;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        color: #0c0d0f;
        margin-left: 24px;

        .siteHeader__textBtn {
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          border-radius: 4px;

          div {
            display: flex;
            align-items: center;
            line-height: 18px;
            padding: 6px 8px;
          }
        }

        li {
          cursor: pointer;
          margin-left: 12px;
          list-style: none;
        }
      }
    }
  }


}

</style>
