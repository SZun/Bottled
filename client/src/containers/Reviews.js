import React, { Component } from 'react';
import ReviewCard from '../components/ReviewCard';
import Comments from '../components/Comments';

class Reviews extends Component {
  state = {};
  render() {
    return (
      <div>
        <ReviewCard
          image="https://images.punkapi.com/v2/82.png"
          name="Hopped-Up Brown Ale - Prototype Challenge"
          description="Brown ales are perfect foils for resinous C-Hops, as the piney elements of the latter contrast brilliantly with the sweeter, nutty elements of the malt bill. The best of both worlds."
          onClick={() => console.log('Mike was here')}
          onChange={() => console.log('Same was here')}
        />
        <Comments
          name="Mike Leftakes"
          isUser
          comment="Beer is great!"
          onClick={() => console.log('Mike was here')}
          right
        />
      </div>
    );
  }
}

export default Reviews;
