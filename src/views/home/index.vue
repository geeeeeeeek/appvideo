<template>

  <div>

    <div class="header">
      <h3>最新电影</h3>
      <a class="more" href="/dianying">更多</a>
    </div>

    <div class="lvideo-list">
      <a class="video-item" :href="handleDetail(item.vod_id)" v-for="item in tData.dianying">
        <div class="cover-wrap">
          <img :src="item.vod_pic" />
          <span class="remarks">{{item.vod_remarks}}</span>
        </div>
        <div class="meta-wrap">
          <div class="title">{{item.vod_name}}</div>
          <div class="info">{{ getFormatTime(item.vod_time, false) }}更新</div>
        </div>
      </a>
    </div>

    <div class="header">
      <h3>最新电视剧</h3>
      <a class="more" href="/dianshiju">更多</a>
    </div>

    <div class="lvideo-list">
       <a class="video-item" :href="handleDetail(item.vod_id)" v-for="item in tData.dianshiju">
        <div class="cover-wrap">
          <img :src="item.vod_pic" />
          <span class="remarks">{{item.vod_remarks}}</span>
        </div>
        <div class="meta-wrap">
          <div class="title">{{item.vod_name}}</div>
          <div class="info">{{ getFormatTime(item.vod_time, false) }}更新</div>
        </div>
      </a>
    </div>



  </div>
</template>

<script setup>

import {getFormatTime} from "/@/utils/index.ts";
import {homeApi} from "/@/api/vod";

const tData = reactive({
  dianying: [],
  dianshiju: [],
  zongyi: [],
  dongman: [],
})

onMounted(() => {
  getData()
})

const handleDetail = (vod_id) => {
  return '/detail/' + vod_id
}


const getData = function () {
  homeApi({}).then(res => {
    console.log(res.data)
    tData.dianying = res.data.dianying;
    tData.dianshiju = res.data.dianshiju;
    tData.zongyi = res.data.zongyi;
    tData.dongman = res.data.dongman;
  }).catch(err => {
    console.log(err)
  })
}

</script>

<style scoped lang="less">

@media screen and (min-width: 1px) and (max-width: 768px) {
  .video-item {
    width: calc((100% - 2 * 16px) / 3 ) !important;
  }
}

a:hover{
  color: #0c0d0f;
}

.header {
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center; /* 垂直居中 */
  justify-content:space-between; /* 两端对齐 */
  h3 {
    line-height: 30px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0;
  }
  .more {
    cursor: pointer;
  }
}

.lvideo-list {
  min-height: 200px;
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap:16px;
  .video-item {
    width: calc((100% - 3 * 16px) / 4 );
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
        right: 2px;
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

</style>
