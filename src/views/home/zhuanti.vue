<template>
  <div class="layout-content">

    <img :src="ZhuantiImg" style="width: 100%; height: 200px;"/>


    <h2>热门视频</h2>

    <span>简介：本专题是来自本站的所有热门视频集合, 欢迎观看.</span>

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
  </div>
</template>

<script setup>
import {getFormatTime} from "/@/utils/index.ts";
import ZhuantiImg from '/@/assets/images/zhuanti.jpg'

import {listApi} from "/@/api/vod";

const tData = reactive({
  vodData: []
})

const handleDetail = (vod_id) => {
  return '/detail/' + vod_id
}

onMounted(() => {
  getData()
})
const getData = function () {
  const filterDict = {}

  listApi(filterDict).then(res => {
    console.log(res.data)
    tData.vodData = res.data
  }).catch(err => {
    console.log(err)
  })
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
  padding: 4px 0px;


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

}

</style>
