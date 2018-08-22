import React, { Component } from 'react';
import BeerItem from '../components/beerItem/beerItem';
import { Row } from 'react-materialize';
import Sidebar from '../components/SideBar';
import axios from 'axios';
import Spinner from '../components/Spinner';

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
  };

  addToCart = i => {
    const { allBeers } = this.state;
    console.log(allBeers[i]);
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
          />
        ))
      ) : (
        <Spinner />
      );
    return (
      <Row>
        <Sidebar />
        {allBeerItems}
      </Row>
    );
  }
}

export default Shop;
