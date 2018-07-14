import React,{PureComponent} from 'react';
import {HomeWrapper, HomeLeft, HomeRight} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {connect} from 'react-redux';
import {actionCreators} from './store'
import {BackTop} from './style';

@connect(
  state => ({
    showScroll: state.getIn(['home', 'showScroll'])
  })
  , actionCreators
)
export default class Home extends PureComponent {
  componentDidMount() {
    this.props.initData()
    this.bindEvents();
  }

  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }

  handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className='banner-img'
            src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>

        {this.props.showScroll?<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null}

      </HomeWrapper>
    )
  }
}
