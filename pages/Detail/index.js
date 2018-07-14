import React from 'react';
import {DetailWrapper, Header, Content} from "./style";
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {withRouter} from 'react-router-dom';


class Detail extends React.Component {
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }

  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}/>
      </DetailWrapper>
    )
  }
};

export default connect(state => ({
    title: state.getIn(['detail', 'title'])
    , content: state.getIn(['detail', 'content'])
  })
  , dispatch => ({
    getDetail(id) {
      dispatch(actionCreators.getDetail(id))
    }
  })
)(withRouter(Detail));
