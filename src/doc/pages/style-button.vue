<template>
  <section>
    <p>纯样式组件，业务需求高度不确定，几乎没有任何稳定不变的元素，因此完全不应该封装，而应该自行配置 CSS</p>
    <p>CSS 离散化、原子化，确保组合的灵活性</p>
    <p>CSS 配置参考</p>

<pre><code v-hl>&lt;div class="btn" type="" status="" size="" disabled="">button&lt;/div>
  
&lt;style>
  .btn {}

  .btn[type="main"] {}
  .btn[type="round"] {}
  .btn[type="line"] {}

  .btn[type="main"]:active {}
  .btn[type="round"]:active {}
  .btn[type="line"]:active {}
  .btn[disabled]:active {/*cancel effect*/}
  
  .btn[size="0"] {}
  .btn[size="1"] {}
  .btn[size="2"] {}
  .btn[size="3"] {}

  .btn[status="0"] {}
  .btn[status="1"] {}
  .btn[status="2"] {}
  .btn[status="3"] {}
&lt;/style>
</code></pre>
  </section>
</template>