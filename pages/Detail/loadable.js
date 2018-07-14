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

