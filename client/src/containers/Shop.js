import React, { Component } from 'react';
import { Row } from 'react-materialize';
import { connect } from 'react-redux';
import { createOrder, fetchNotPurchased } from '../store/actions/orderActions';
import { postBeer } from '../store/actions/beerActions';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import asyncComponent from '../utils/asyncComponent';

const Spinner = asyncComponent(() => import('../components/Spinner'));
const BeerItem = asyncComponent(() =>
  import('../components/beerItem/beerItem')
);

class Shop extends Component {
  state = {
    allBeers: false
  };

  componentDidMount = async () => {
    const beers = await axios.get(
      'https://api.punkapi.com/v2/beers?page=2&per_page=80'
    );
    this.setState({
      allBeers: beers.data
    });
    this.props.fetchNotPurchased();
  };

  addToCart = i => {
    const { allBeers } = this.state;
    const { name, description, image_url } = allBeers[i];
    const beer = {
      name,
      description,
      image_url
    };
    this.props.createOrder(beer);
    this.props.fetchNotPurchased();
  };

  onReviewHandler = i => {
    const { allBeers } = this.state;
    const { name, description, image_url } = allBeers[i];
    const beer = {
      name,
      description,
      image_url
    };
    this.props.postBeer(beer, this.props.history);
  };

  render() {
    const { allBeers } = this.state;
    const allBeerItems =
      allBeers !== false ? (
        allBeers.map((beer, i) => (
          <BeerItem
            name={beer.name}
            image={beer.image_url}
            description={beer.description}
            onClick={() => this.addToCart(i)}
            key={i}
            onReview={() => this.onReviewHandler(i)}
          />
        ))
      ) : (
        <Spinner />
      );
    return <Row>{allBeerItems}</Row>;
  }
}

Shop.propTypes = {
  createOrder: PropTypes.func.isRequired,
  fetchNotPurchased: PropTypes.func.isRequired,
  postBeer: PropTypes.func.isRequired
};

export default connect(
  null,
  { createOrder, fetchNotPurchased, postBeer }
)(withRouter(Shop));
