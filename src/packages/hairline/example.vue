<template>
  <section>
    <h3>头发丝</h3>
    <br>
    <p>在设置了 `viewport width=device-width` 后，如何在高清屏上画出真正的 1px 细线是移动端开发的一个常见问题</p>
    <p>淘宝 flexible 方案的做法是根据 dpr 动态设置 viewport 缩放比例，确保 1 个 CSS 像素永远对应 1 个物理像素</p>
    <p>然而这个方案至少有四个已知的问题</p>
    <p>1. px 单位大小不固定，几乎所有尺寸单位都不得不换用 rem</p>
    <p>2. 与第三方组件不兼容</p>
    <p>3. 字体大小设置比较麻烦</p>
    <p>4. 仅照顾了 IOS，未兼顾安卓，因为安卓的 dpr 检测存在兼容性问题</p>
    <p>因此 flexible 比较适合小型的活动页，对于大中型项目而言风险太高</p>
    <p>经过项目实践，要画出 1px 细线或边框，最简单、适用范围最广的方法是使用 scale 缩放</p>
    <p>hairline 就是用 CSS 封装的一套基础样式组件，使用起来很方便</p>
    <p>hair-top | hair-right | hair-bottom | hair-left | hair-border</p>

    <p style="height: 50px; position: relative" class="hair-top hair-bottom"></p>

<pre><code>&lt;div style="position: relative" class="hair-top hair-bottom">&lt;/div>
</code></pre>
		
		<br>
    <p style="height: 50px; position: relative" class="hair-border"></p>

<pre><code>&lt;div style="position: relative" class="hair-border">&lt;/div>
</code></pre>

    <p>注意点：</p>
    <p>1. 父组件必须有定位属性</p>
    <p>2. top、left、border 占用了 ::bofore 伪元素，right、bottom 占用了 ::after 伪元素</p>
    
    <br>
    <p>已知的问题：</p>
    <p>1. 修改边框颜色略有些麻烦</p>
<pre><code>.el:before {
  border-color: ...
}
</code></pre>
    <p>2. hairline 可能会遮住 border，例如在 tab 导航组件使用 border-bottom 或 border-top 作为选中效果，为避免 hairline 遮住 border，需要手动给 hairline 设置 z-index: -1</p>
<pre><code>.el:before {
  z-index: -1
}
</code></pre>
  </section>
</template>