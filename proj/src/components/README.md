此处放置项目中使用到的组件

需要注意的是：
- 组件都应该是`stateless`的，亦即木偶组件
- 如果你的组件须要自己控制 `state`,请注释掉组件中的如下代码
```
  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
```