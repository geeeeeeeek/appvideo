<template>
  <div class="layout-content">

    <h3>与"{{keyword}}"相关视频：</h3>
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
const route = useRoute();

import {listApi} from "/@/api/vod";

const page = ref(1)
const num_pages = ref(0)

const tData = reactive({
  vodData: []
})

let keyword = ref('')


onMounted(() => {

  // 监听地址栏路由
  watch(() => route.query.keyword, (newText, oldText) => {
    if (newText !== '') {
      keyword.value = newText
      page.value = 1
      getData()
    }
  }, {immediate: true});

})

const getData = function () {
  const filterDict = {}

  filterDict['keyword'] = keyword.value
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

const handleDetail = (vod_id) => {
  return '/detail/' + vod_id
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
        margin-right: 12px;
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
          margin-right: 40px;
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
          padding: 0 12px;
          border-radius: 2px;
          margin-right: 12px;
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
