import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

//import ReactMarkdown from 'react-markdown';

const Comment = props => (
  <div className="singleComment">
    <img alt="user_image" className="userImage" src={`https://picsum.photos/70?random=${props.id}`} />
    <div className="textContent">
      <div className="singleCommentContent">
      <Typography variant="h3" component="h3">{props.author}</Typography>
      <Typography variant="h5" component="h3">{props.children}</Typography> 
      </div>
      <div className="singleCommentButtons">
      </div>
    </div>
  </div>
);

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default Comment;