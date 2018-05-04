## z-index 使用问题
- 给元素添加z-index属性后，其他动画运行transform:translate()时，可能导致含有z-index属性内的文字发生模糊与抖动。

### 解决方式
- 将transform:translate() 改为 tansform:translate3D()