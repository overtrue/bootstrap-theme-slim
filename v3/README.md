# Slim
纤细风格的bootstrap主题

Demo: http://overtrue.me/bootstrap-theme-slim/

## 改进

- 对中文字体优化，添加比较纤瘦的中文字体
- 换掉默认的Glyphicons图标为[ionicons](http://ionicons.com)图标
- `Modal`与`Popover`、`Well`,`Alert`等边框颜色调整为淡色
- 新增4种配色：`mint`,`purple`,`pink`,`dark`
- 新增4种按钮：`btn-mint`, `btn-purple`,`btn-pink`,`btn-dark`
- 新增4种`label`: `label-mint`, `label-purple`,`label-pink`,`label-dark`
- 新增鼠标移过背景色类：`hover-bg-primary`、`hover-bg-success`、`hover-bg-info`、`hover-bg-warning`、`hover-bg-danger`、`hover-bg-mint`、`hover-bg-purple`、`hover-bg-pink`、`hover-bg-dark`
- 新增边框色类：`border-primary`、`border-success`、`border-info`、`border-warning`、`border-danger`、`border-mint`、`border-purple`、`border-pink`、`border-dark`
- 新增轻体文字类：`text-thin`
- 去除边框类：`no-border`
- 去除填充类：`no-padding`
- 去除边矩类：`no-margin`

新增的工具类请参阅：[_utils.scss](https://github.com/overtrue/bootstrap-theme-slim/blob/master/sass/_utils.scss)

实体效果请查看[demo](http://overtrue.me/bootstrap-theme-slim/)

## 用法

引入css

```html
<!-- bootstrap -->
<link rel="stylesheet" href="./css/bootstrap.css" media="screen">
<!-- ionicons图标 -->
<link rel="stylesheet" href="./css/ionicons.css" media="screen">
<!-- 应用css -->
<link rel="stylesheet" href="./css/app.css" media="screen">
```

引入js

```html
<script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
```

## 说明

- 此项目中可能包含了其它用不到的`css`或者`js`文件，请根据需要选择加载；
- `css`文件目录里最基本的就是`bootstrap.css`，另外`app.css`是你的应用`css`,你可以写`sass`语法，默认已经帮忙你引入`bootstrap`变量与方法；

## License

MIT
