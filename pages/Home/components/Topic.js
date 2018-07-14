import React,{PureComponent} from 'react';
import {TopicWrapper, TopicItem} from '../style';
import {connect} from 'react-redux';

@connect(
  state => ({
    list:state.getIn(['home','topicList'])
  })
  , null
)
export default class Topic extends PureComponent {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.list.map((item) => (
            <TopicItem key={item.get('id')}>
              <img
                className='topic-pic'
                src={item.get('imgUrl')}
              />
              {item.get('title')}
            </TopicItem>
          ))
        }
      </TopicWrapper>
    );
  }
}
