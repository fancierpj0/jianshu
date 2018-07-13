import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position:relative;
  height:56px;
  border-bottom:1px solid #f0f0f0;
`;


export const Logo = styled.a.attrs({
  href: '/'
})`
  position:absolute;
  top:0;
  left:0;
  display:block;
  width:100px;
  height:56px;
  background:url(${logoPic});
  background-size:contain;
`;

export const Nav = styled.div`
  box-sizing:border-box;
  width: 960px;
  height:100%;
  margin:0 auto;
  padding-right:70px;
`;

export const NavItem = styled.div`
  line-height:56px;
  padding:0px 15px;
  font-size:17px;
  color:#333;

  &.left{
    float:left;
  }
  
  &.right{
    float:right;
    color:#969696;
  }
  
  &.active{
    color:#ea6f5a;
  }
`;


export const NavSearchWrapper = styled.div`
  position:relative;
  float:left;
  
  &>.iconfont{
    position:absolute;
    right:5px;
    bottom:5px;
    width: 30px;
    border-radius:15px;
    line-height:30px;
    text-align:center;
     
    &.focused{
      background:#777; 
      color:#fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  box-sizing:border-box;
  background:#eee;
  border:none;
  outline:none;
  border-radius:19px;
  
  font-size:14px;
  width:160px;
  height:38px;
  margin-top:9px;
  padding:0 30px 0 20px;
  margin-left:20px;
  color:#666;
  
  &::placeholder{
    color:#999;
  }
  
  &.focused{
    width:240px;
  }
  
  &.slide-enter,&.slide-exit{
    transition:all .2s ease-out;
  }
  
  &.slide-enter-active{
    width:240px;
  }
`;

export const SearchInfo = styled.div`
  position:absolute;
  left:0;
  top:56px;
  width:240px;
  padding:0 20px;
  box-shadow:0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`;

export const SearchInfoSwitch = styled.span`
  float:right;
  font-size:13px;
  user-select: none;
  cursor: pointer;
  
  .spin{
    float:left;
    font-size:12px;
    margin-right:2px;
    transition:all .2s ease-in;
    transform:rotate(0deg);
    transform-origin:center center;
  }
`;

export const SearchInfoList = styled.div`
  overflow:hidden;
`;

export const SearchInfoItem = styled.a`
  display:block;
  float:left;
  margin-right:10px;
  margin-bottom:15px;
  line-height:20px;
  padding:0 5px;
  font-size:12px;
  border:1px solid #ddd;
  color:#787878;
  border-radius:3px;
`;

export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`;

export const Button = styled.div`
  float:right;
  line-height:38px;
  border-radius:19px;
  margin-top:9px;
  margin-right:20px;
  padding:0 20px;
  border:1px solid #ec6149;
  font-size:14px;
  
  &.reg{
    color:#ec6149;
  }
  
  &.writting{
    color:#fff;
    background:#ec6149;
  }
`;
