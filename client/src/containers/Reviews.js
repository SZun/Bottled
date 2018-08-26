import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchBeer,
  addComment,
  deleteComment
} from '../store/actions/beerActions';
import PropTypes from 'prop-types';
import Spinner from '../components/Spinner';
import ReviewCard from '../components/ReviewCard';
import Comments from '../components/Comments';

class Reviews extends Component {
  state = {
    comment: ''
  };

  componentDidMount = () => {
    const beerId = this.props.history.location.pathname.split('/')[2];
    this.props.fetchBeer(beerId);
  };

  onSubmitHandler = id => {
    this.props.addComment(id);
  };

  onCommentDeleteHandler = (id, comment_id) => {
    this.props.deleteComment(id, comment_id);
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    let reviewContent;
    if (this.props.beer.loading) {
      reviewContent = (
        <div>
          <Spinner />{' '}
          <p style={{ textAlign: 'center' }}>
            Finding beer... If this spinner does not go away, you may not have
            made any purchases
          </p>
        </div>
      );
    }
    if (this.props.beer.review !== null && !this.props.beer.loading) {
      const { name, description, image_url, _id } = this.props.beer.review;
      const { comment } = this.state;
      reviewContent = (
        <div>
          <ReviewCard
            beerName={name}
            description={description}
            name="comment"
            value={comment}
            image={image_url}
            onClick={() => this.onSubmitHandler(_id)}
            onChange={this.onChangeHandler}
          />
          {this.props.beer.review.hasOwnProperty('comments')
            ? this.props.beer.review.comments.map(cmnt => (
                <Comments
                  name={cmnt.userName}
                  comment={cmnt.text}
                  isUser={
                    this.props.beer.review.comments._user === this.props.auth.id
                      ? true
                      : false
                  }
                  onClick={() => this.onCommentDeleteHandler(_id, cmnt._id)}
                  key={cmnt._id}
                />
              ))
            : null}
        </div>
      );
    }
    return <div>{reviewContent}</div>;
  }
}

Reviews.propTypes = {
  fetchBeer: PropTypes.func.isRequired,
  beer: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  beer: state.beer,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { fetchBeer, addComment, deleteComment }
)(withRouter(Reviews));
