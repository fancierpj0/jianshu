import React, {PureComponent} from 'react';
import {ListItem, ListInfo, LoadMore} from '../style';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';

@connect(
  state => ({
    list: state.getIn(['home', 'articleList'])
    , page: state.getIn(['home', 'articlePage'])
  })
  , actionCreators
)
export default class List extends PureComponent {
  render() {
    const {list, loadMore, page} = this.props;

    // console.log('list:',list)
    return (
      <div>
        {
          list.map((item, index) => (
            <Link to={`/detail/${item.get('id')}`}>
              <ListItem key={index}>
                <img className='pic' src={item.get('imgUrl')}/>
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          ))
        }

        <LoadMore onClick={() => loadMore(page)}>加载更多</LoadMore>
      </div>
    )
  }
};
