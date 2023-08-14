<template>
  <div class="menu-wrap">
    <div class="category__list">

      <div class="category__list__item" :class="currentMenu===item.id?'active':''" v-for="item in menuData"
           @click="handleNav(item.id)">{{ item.label }}
      </div>

    </div>
  </div>
</template>

<script setup>
import {BASE_URL} from "/@/store/constants";

const router = useRouter();
const route = useRoute();

let currentMenu = ref('')

let menuData = reactive([
  {label: '首页', id: 'index'},
  {label: '电影', id: 'dianying'},
  {label: '电视剧', id: 'dianshiju'},
  {label: '综艺', id: 'zongyi'},
  {label: '动漫', id: 'dongman'},
  {label: '专题', id: 'zhuanti'},
])

// 监听地址栏路由
watch(() => route.name, (newName, oldName) => {
  currentMenu.value = route.name
}, {immediate: true});



const data = reactive(['', '', '', '', '', '', '', ''])

const handleNav = (name) => {
  router.push({name: name})
  currentMenu.value = name
}


</script>

<style scoped lang="less">
.menu-wrap {
  margin-top: 64px;
  padding: 20px 0 0;

  .category__list {
    width: 100%;
    margin-bottom: 39px;
    font-size: 0;
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 20px;

    .category__list__item {

      display: inline-block;
      cursor: pointer;
      font-size: 16px;
      line-height: 22px;
      color: #606266;
      text-align: center;
      //text-overflow: ellipsis;
      //overflow: hidden;
      white-space: nowrap;
    }

    .active {
      color: #0c0d0f;
      font-weight: 500;
      position: relative;
    }

    .active:after {
      position: absolute;
      top: 34px;
      content: " ";
      width: 20px;
      left: 50%;
      transform: translateX(-50%);
      height: 3px;
      background-color: #0c0d0f;
    }

    li {
      list-style: none;
    }
  }

  .category__list:after {
    content: " ";
    display: block;
    height: 1px;
    background-color: rgba(12, 13, 15, .06);
    position: absolute;
    top: 37px;
    left: 0;
    right: 0;
  }
}
</style>
