import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store'
import {LoginWrapper, LoginBox, Input, Button} from './styled';
import {Redirect} from 'react-router-dom';

@connect(
  state => ({
    isLogin:state.getIn(['login','login'])
  })
  , dispatch => ({
    login($account,$password){
      dispatch(actionCreators.login($account.value, $password.value));
    }
  })
)
export default class index extends PureComponent {
  render() {
    if(!this.props.isLogin){
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' innerRef={x => this.$account = x}/>
            <Input placeholder='密码' type='password' innerRef={x => this.$password = x}/>
            <Button onClick={() => this.props.login(this.$account, this.$password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else{
      return <Redirect to='/'/>
    }
  }
};
