import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";

@connect(
  state => ({
    isLogin:state.getIn(['login','login'])
  })
  ,null
)
export default class Write extends React.Component{
  render(){
    if(this.props.isLogin){
      return (
        <div>
          Write
        </div>
      )
    }else{
      return <Redirect to='/'/>
    }
  }
}
