## 前端分页与后端分页
搜索热点，换一批->前端分页，无需再发送新的请求

loadMore->后端分页，需要每次发送请求

## loadable 异步加载
```
import Detail from './pages/Detail/loadable';
```
```
import React from 'react'
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  //指要加载index.js作为异步组件
  loader:()=>import('./')

  //临时显示的组件
  ,loading(){
    return <div>正在加载</div>
  }
});

//没错 他是个组件
export default () => <LoadableComponent/>;
```

最后如果是路由组件，还要将路由组件用`withRouter`包裹一下，因为原本改传给路由组件的location、match、history都传给loadable了

## mapState、mapDispatch
可以是一个
```
disptach=>({
  method1(){}
  ...
})
```

也可以是为bind前的actionCreators
```
{
  method1(){}
  ...
}
```
