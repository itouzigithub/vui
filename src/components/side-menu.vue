<template>
  <aside>
    <h3>移动端通用组件</h3>
    <ul>
      <li>Style</li>
      <li>
        <router-link to="btn">按钮</router-link>
      </li>
      <li>
        <router-link to="hairline">细线</router-link>
      </li>
      <br>
      <li>Widget</li>
      <li>
        <router-link to="ipt">输入框</router-link>
      </li>
      <li>
        <router-link to="cascade">级联选择</router-link>
      </li>
      <li>
        <router-link to="banner">轮播图</router-link>
      </li>
      <br>
      <li>Utils</li>
      <li>
        <router-link to="increase">数字递增</router-link>
      </li>
      <li>
        <router-link to="dateFormat">日期格式化</router-link>
      </li>
      <li>
        <router-link to="numberFormat">数字号码格式化</router-link>
      </li>
    </ul>
    <br>
    <h3>移动端组件体系</h3>
    <ul>
      <li>
        <router-link to="display">展示</router-link>
      </li>
      <li>
        <router-link to="reminder">提示</router-link>
      </li>
      <li>
        <router-link to="navigation">导航</router-link>
      </li>
      <li>
        <router-link to="operation">操作</router-link>
      </li>
    </ul>
    <br>
    <h3>组件化开发体系</h3>
    <ul>
      <li>
        <router-link to="methodology">方法论</router-link>
      </li>
      <li>
        <router-link to="hierarchy">分层</router-link>
      </li>
      <li>
        <router-link to="principle">组件设计原则</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'menu'
}
</script>

<style scoped>
  aside {
    width: 220px;
    height: 100%;
    background: #f7f8f9;
    text-align: right;
    padding-right: 40px;
    padding-top: 30px;
    flex-shrink: 0;
    line-height: 1;
  }
  ul {
    width: 100%;
  }
  li {
    padding-bottom: 5px;
  }
</style>
