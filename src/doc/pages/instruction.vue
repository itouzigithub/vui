<template>
  <section>
    <h3>安装</h3>
<pre><code>npm install @itouzi/vui --save</code></pre>
    
    <h3>单独引用</h3>
<pre><code>import { banner, increase, addThousandSeparator } from '@itouzi/vui'
// 注册
{
  components: {
    banner
  },
  directives: {
    increase
  },
  filters: {
    addThousandSeparator
  }
}</code></pre>

<p>当前所有组件列表</p>
<pre><code>// directives
increase,
translateX, 
translateY,

// filters
addThousandSeparator,
addSpace,
hideNumber,
formatDate,
formatTime,
formatDateTime,

// utils
imgGenerator,

// widgets
banner,
cascade,
iptPhone,
iptNumber,
iptPassword,
iptSearch
</code></pre>
    
    <h3>开发</h3>
    <p><a href="https://github.com/itouzigithub/vui" target="_blank">项目地址</a></p>
    <p>项目结构</p>
<pre><code>vui
 |-- build
 |-- config
 |-- src
      |-- doc // 文档
      |-- lib // 组件库
           |-- styles       // CSS 组件
           |-- directives   // 自定义指令
           |-- filters      // 自定义过滤器
           |-- utils        // 纯 js 组件 
           |-- widgets      // vue 组件
      |-- index.js // 导出模块的出口文件
 |-- test // 单元测试
 |-- package.json
 |-- README.md</code></pre>

 		<p>步骤</p>
<pre><code>开发
编写测试
运行测试
更新文档并上传至 github page
commit 变更信息
合并 Git
</code></pre>

 		<p>发版</p>
<pre><code>npm version 0.x.x
npm publish</code></pre>

  </section>
</template>