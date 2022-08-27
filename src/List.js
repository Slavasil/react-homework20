import Video from './Video.js';
import Article from './Article.js';
import Popular from './Popular.js';
import New from './New.js';

function withHighlighting(Content) {
  return function(props) {
    let content = <Content {...props}/>
    if (props.views <= 100) {
      return <New>{content}</New>;
    } else if (props.views >= 1000) {
      return <Popular>{content}</Popular>
    } else {
      return content;
    }
  }
}
const EnhancedVideo = withHighlighting(Video);
const EnhancedArticle = withHighlighting(Article);

function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
            <EnhancedVideo {...item} />
        );

      case 'article':
        return (
            <EnhancedArticle {...item} />
        );
      default:
        return null;
    }
  });
};

export default List;