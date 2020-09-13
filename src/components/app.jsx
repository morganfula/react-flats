/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlats: flats[0],
      flats
    };
  }

  selectedFlats = (index) => {
    this.setState({ selectedFlats: flats[index] });
  }

}

export default App;
