<template>
	<section>
		<h3>提示 Reminder</h3>
		<p>用于主动告知、辅助理解、引起注意、操作反馈、路径引导、传递消息等场景</p>
		<p><a href="http://www.uisdc.com/remind-symbols" target="_blank">参考</a></p>

		<br>
		<table>
			<tr>
				<th width="120px">Name</th>
				<th>Description</th>
			</tr>
			<tr>
				<td>toast</td>
				<td>轻提示，通常为圆角矩形，仅包含文字，位于屏幕正中或腹部，一定时间后自动消失，无交互</td>
			</tr>
			<tr>
				<td>notification | alert | messenger</td>
				<td>类似于 toast，只不过设计上会更为醒目，比如会增加图标、使用色彩</td>
			</tr>
			<tr>
				<td>messageBox | popbox | popup | prompt</td>
				<td>消息弹框，通常需要用户点击才能关闭，可能包含少量交互操作</td>
			</tr>
			<tr>
				<td>toolTip | popover</td>
				<td>工具提示，通常为带尖角的气泡状，具有明确指示性，一般仅含文字</td>
			</tr>
			<tr>
				<td>snackbars</td>
				<td>横条形提示，通常带有可关闭的按钮，也可以固定时间自动消失</td>
			</tr>
			<tr>
				<td>badge</td>
				<td>红点提示，分为红点、带数字红点、带文字红点</td>
			</tr>
			<tr>
				<td>guide | steps</td>
				<td>引导提示，通常包含一系列步骤，用于功能介绍或操作指引</td>
			</tr>
			<tr>
				<td>loading</td>
				<td>加载提示，广泛应用于各种需要等待的场景，通常有以菊花图为代表的图标和进度条两种类型</td>
			</tr>
			<tr>
				<td>empty</td>
				<td>空数据，<a href="http://www.uisdc.com/empty-state-design" target="_blank">参考</a></td>
			</tr>
		</table>
	</section>
</template>