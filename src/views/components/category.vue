<template>
  <div class="category-layout">
    <div class="category__line">
      <li class="category__first-ele">类型</li>
      <ul class="category__list category__sub">
        <li class="category__list__item category__sub__item active">动作</li>
        <li class="category__list__item category__sub__item">喜剧</li>
        <li class="category__list__item category__sub__item">爱情</li>
        <li class="category__list__item category__sub__item">惊悚</li>
        <li class="category__list__item category__sub__item">犯罪</li>
        <li class="category__list__item category__sub__item">惊悚</li>
        <li class="category__list__item category__sub__item">犯罪</li>
      </ul>
    </div>
    <div class="category__line">
      <li class="category__first-ele">地区</li>
      <ul class="category__list category__sub">
        <li class="category__list__item category__sub__item active">内地</li>
        <li class="category__list__item category__sub__item">香港</li>
        <li class="category__list__item category__sub__item">美国</li>
        <li class="category__list__item category__sub__item">日本</li>
      </ul>
    </div>
    <div class="category__line">
      <li class="category__first-ele">排序</li>
      <ul class="category__list category__sub">
        <li class="category__list__item category__sub__item active">最新</li>
        <li class="category__list__item category__sub__item">最热</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.category-layout {
  .category__line {
    display: flex;
    font-size: 14px;
    .category__first-ele {
      line-height: 32px;
      height: 32px;
      flex-shrink: 0;
      padding: 0 12px;
      border-radius: 2px;
      margin-right: 12px;
    }
    li {
      list-style: none;
    }

    .category__sub {
      line-height: normal;
      margin-bottom: 18px;
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
        background-color: rgba(0,0,0, 0.04);
        color: #fe3355;
        font-weight: 500;
      }
    }
  }
}
</style>
