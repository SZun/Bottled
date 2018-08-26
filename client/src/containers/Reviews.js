import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBeer } from '../store/actions/beerActions';
import PropTypes from 'prop-types';
import Spinner from '../components/Spinner';
import ReviewCard from '../components/ReviewCard';
// import Comments from '../components/Comments';

class Reviews extends Component {
  componentDidMount = () => {
    const beerId = this.props.history.location.pathname.split('/')[2];
    this.props.fetchBeer(beerId);
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
      console.log('baan');
      const { name, description, image_url } = this.props.beer.review;
      reviewContent = (
        <ReviewCard
          name={name}
          description={description}
          image={image_url}
          onClick={() => console.log('on banan')}
          onChange={() => console.log('on banan')}
        />
      );
    }
    return <div>{reviewContent}</div>;
  }
}

Reviews.propTypes = {
  fetchBeer: PropTypes.func.isRequired,
  beer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  beer: state.beer
});

export default connect(
  mapStateToProps,
  { fetchBeer }
)(withRouter(Reviews));
