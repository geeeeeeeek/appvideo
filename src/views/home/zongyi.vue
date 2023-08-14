<template>
  <div class="layout-content">

    <div class="category-layout">
<!--      <div class="category__line">-->
<!--        <li class="category__first-ele">类型</li>-->
<!--        <ul class="category__list category__sub">-->
<!--          <li class="category__list__item category__sub__item" :class="currentClass===item? 'active':''"-->
<!--              @click="handleClickClass(item)"-->
<!--              v-for="item in categoryData.vodClassData">{{ item }}-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
      <div class="category__line">
        <li class="category__first-ele">地区</li>
        <ul class="category__list category__sub">
          <li class="category__list__item category__sub__item" :class="currentArea===item? 'active':''"
              @click="handleClickArea(item)"
              v-for="item in categoryData.vodAreaData">{{ item }}
          </li>
        </ul>
      </div>
      <div class="category__line">
        <li class="category__first-ele">年份</li>
        <ul class="category__list category__sub">
          <li class="category__list__item category__sub__item" :class="currentYear===item? 'active':''"
              @click="handleClickYear(item)"
              v-for="item in categoryData.vodYearData">{{ item }}
          </li>
        </ul>
      </div>
    </div>


    <div class="lvideo-list">
       <a class="video-item" :href="handleDetail(item.vod_id)" v-for="item in tData.vodData">
        <div class="cover-wrap">
          <img :src="item.vod_pic"/>
          <span class="remarks">{{ item.vod_remarks }}</span>
        </div>
        <div class="meta-wrap">
          <div class="title">{{ item.vod_name }}</div>
          <div class="info">{{ getFormatTime(item.vod_time, false) }}更新</div>
        </div>
      </a>
    </div>

    <div class="page-wrap" v-if="num_pages > 1">
      <div class="page-item" :class="page === 1? 'disable':''" @click="handlePre()">上页</div>
      <div class="page-item" :class="page === num_pages? 'disable':''" @click="handleNext()">下页</div>
    </div>
  </div>

</template>
<script setup>
import {getFormatTime} from "/@/utils/index.ts";

import {listApi} from "/@/api/vod";

const currentClass = ref('全部')
const currentArea = ref('全部')
const currentYear = ref('全部')

const page = ref(1)
const num_pages = ref(0)

const vodClassData = ['全部', '国产', '日剧', '韩剧', '欧美', '港澳', '泰剧', '台剧']
const vodAreaData = [
  '全部', '大陆', '香港', '台湾','加拿大','印度','土耳其','墨西哥','巴西','日本','韩国','西班牙','英国','美国','泰国','法国',
]
const vodYearData = ['全部']
for (let i = 2023; i > 2004; i--) {
  vodYearData.push(i)
}


const categoryData = reactive({
  vodClassData,
  vodAreaData,
  vodYearData
})

const tData = reactive({
  vodData: []
})

const handleDetail = (vod_id) => {
  return '/detail/' + vod_id
}

const handleClickClass = (item) => {
  currentClass.value = item
  page.value = 1
  getData()
}
const handleClickArea = (item) => {
  currentArea.value = item
  page.value = 1
  getData()
}
const handleClickYear = (item) => {
  currentYear.value = item
  page.value = 1
  getData()
}

onMounted(() => {
  page.value = 1
  getData()
})
const getData = function () {
  const filterDict = {}

  // filterDict['vod_type'] = 2
  // if (currentClass.value !== '全部') {
  //   filterDict['vod_class'] = currentClass.value
  // }

  filterDict['vod_class'] = '综艺'
  if (currentArea.value !== '全部') {
    filterDict['vod_area'] = currentArea.value
  }
  if (currentYear.value !== '全部') {
    filterDict['vod_year'] = currentYear.value
  }
  filterDict['page'] = page.value
  listApi(filterDict).then(res => {
    console.log(res.data)
    tData.vodData = res.data
    // 分页
    page.value = res.page
    num_pages.value = res.num_pages
  }).catch(err => {
    console.log(err)
  })
}

const handlePre = () => {
  if (page.value > 1) {
    page.value = page.value - 1
    getData()
  }
}

const handleNext = () => {
  if (page.value < num_pages.value) {
    page.value = page.value + 1
    getData()
  }
}


</script>

<style scoped lang="less">

@media screen and (min-width: 1px) and (max-width: 768px) {
  .video-item {
    width: calc((100% - 2 * 16px) / 3) !important;
  }

  .category__list {
    white-space: nowrap !important;
    overflow-x: auto !important;
  }
}


.layout-content {
  width: 100%;
  padding: 1px 0px;

  .category-layout {
    .category__line {
      display: flex;
      font-size: 14px;

      .category__first-ele {
        line-height: 32px;
        height: 32px;
        flex-shrink: 0;
        padding-right: 12px;
        border-radius: 2px;
      }

      li {
        list-style: none;
      }

      .category__sub {
        line-height: normal;
        margin-bottom: 12px;
      }

      .category__list {
        font-size: 0;
        position: relative;


        .category__list__item {
          display: inline-block;
          cursor: pointer;
          font-size: 16px;
          line-height: 22px;
          color: #606266;
        }

        .category__sub__item {
          font-size: 14px;
          line-height: 32px;
          margin-bottom: 2px;
          color: #0c0d0f;
          padding: 0 8px;
          border-radius: 2px;
        }

        .active {
          background-color: rgba(0, 0, 0, 0.04);
          color: #fe3355;
          font-weight: 500;
        }
      }

      .category__list::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .lvideo-list {
    min-height: 200px;
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    .video-item {
      width: calc((100% - 3 * 16px) / 4);
      aspect-ratio: 3/5;
      min-height: 120px;

      .cover-wrap {
        position: relative;
        width: 100%;
        height: 85%;

        img {
          border-radius: 4px;
          overflow: hidden;
          // todo 修改默认图
          background-color: #e6f2f5;
          width: 100%;
          height: 100%;
          background-size: cover;
          object-fit: cover;
        }

        .remarks {
          position: absolute;
          right: 4px;
          bottom: 1px;
          color: #fff;
          font-size: 12px;
        }
      }

      .meta-wrap {
        .title {
          text-align: center;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }

        .info {
          display: none;
        }

      }

    }
  }

  .page-wrap {
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */

    .page-item {
      user-select: none;
      cursor: pointer;
      padding: 0 16px;
      height: 30px;
      line-height: 30px;
      border-radius: 4px;
      background-color: #eee;
      color: #000;
      font-size: 12px;
      text-align: center;
    }

    .disable {
      color: grey;
    }
  }

}
</style>
