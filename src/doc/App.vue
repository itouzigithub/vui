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

<style src="../lib/styles/vui.common.css"></style>
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
  line-height: 1.4;
  /* 取消 highlight.js 的默认样式 */
  background-color: transparent !important;
  padding: 0 !important;
}
p {
  margin-bottom: 10px;
}
h3 {
  font-size: 16px;
  padding-bottom: 10px;
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
/*
 * Atom One Light by Daniel Gamage
 * Original One Light Syntax theme from https://github.com/atom/one-light-syntax
 */
.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #383a42;
  background: #fafafa;
}
.hljs-comment,
.hljs-quote {
  color: #a0a1a7;
}
.hljs-doctag,
.hljs-keyword,
.hljs-formula {
  color: #a626a4;
}
.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst {
  color: #e45649;
}
.hljs-literal {
  color: #0184bb;
}
.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta-string {
  color: #50a14f;
}
.hljs-built_in,
.hljs-class .hljs-title {
  color: #c18401;
}
.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number {
  color: #986801;
}
.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-title {
  color: #4078f2;
}
.hljs-emphasis {
  font-style: italic;
}
.hljs-strong {
  font-weight: bold;
}
.hljs-link {
  text-decoration: underline;
}
</style>

