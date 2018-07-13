import React from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  NavSearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from "./style";
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';

@connect(
  //toObject只对一层有效
  state => state.get('header').toObject()
  , actionCreators
)
export default class Header extends React.Component {

  getListArea = () => {
    const {focused, mouseIn} = this.props;

    // console.log('focused:', focused, 'mouseIn:', mouseIn);
    if (focused || mouseIn) {
      // console.log('this.props:', this.props);

      const {list, page, handleMouseEnter, handleMouseLeave, handleChangePage, totalPage} = this.props
        , pageList = []

      //toXxx只能转换一层的immutable对象
      //,故list最为内层的对象并没有转换为普通js对象，需要再次手动转换
      // , listArr = list.toArray();
      // console.log('listArr:',listArr);

      if(list.size){
        for (let i = (page - 1) * 10; i < page * 10; ++i) {
          let v = list.get(i);

          pageList.push(<SearchInfoItem key={v}>{v}</SearchInfoItem>);
        }
      }

      // console.log('pageList:',pageList);

      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={(ev)=>handleChangePage(page,totalPage,this.$spin)}>
              <i ref={(x)=>{this.$spin=x}} className='iconfont spin'>&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null
    }
  };

  render() {
    const {focused, handleInputFocus, handleInputBlur, getList, list} = this.props;

    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>

          <NavSearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => {
                  if(!list.size) getList();
                  handleInputFocus();
                }}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i
              className='iconfont'
              className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
            >&#xe614;</i>
            {this.getListArea()}
          </NavSearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className='iconfont'>&#xe615;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}
