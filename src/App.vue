<template>
  <div id="app">
    
    <side-menu />

    <article>
      <router-view />
    </article>
  </div>
</template>

<script>
import sideMenu from './components/side-menu'
export default {
  name: 'app',
  components: {
    'side-menu': sideMenu
  }
}
</script>

<style src="./assets/vui.common.css"></style>
<style src="./assets/font-awesome/font-awesome.min.css"></style>

<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html,
  body {
    height: 100%;
    overflow: hidden;
  }
  #app {
    width: 100%;
    height: 100%;
    display: flex;
    line-height: 1.5;
  }
  article {
    width: 0;
    flex-grow: 1;
    overflow-y: auto;
    padding-left: 120px;
    padding-top: 30px;
  }
  section {
    margin-bottom: 50px;
    width: 600px;
  }
  pre {
    background-color: #f7f8f9;
    color: #555;
    padding: 10px;
    margin-bottom: 20px;
  }
  code {
    font-size: 14px;
    font-family: consolas;
    line-height: 1;
  }
  p {
    margin-bottom: 10px;
  }
  h3 {
    font-size: 16px;
    padding-bottom: 5px;
  }
  table {
    width: 100%;
  }
  td {
    vertical-align: top;
    padding-bottom: 20px;
  }
  th {
    text-align: left;
    line-height: 36px;
  }
</style>

