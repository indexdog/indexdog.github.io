#### 插入图片
error: 编辑器里带网址的图片打不开
解决方法：点击图片链接在浏览器打开后再复制

使用 Markdown 而不是 HTML，将按预期工作：
 `![Alt Text](图片路径)`
 
>Markdown 允许文档作者在 Markdown 语法无法满足作者的需求时回退到原始 HTML。MkDocs 在这方面不限制 Markdown。但是，由于 Markdown 解析器会忽略所有原始 HTML，因此 MkDocs 无法验证或转换原始 HTML 中包含的链接。在原始 HTML 中包含内部链接时，您需要为呈现的文档手动设置适当的链接格式。

参考：https://stackoverflow.com/questions/71074662/configuring-image-filepaths-correctly-in-mkdocs/71083184#71083184