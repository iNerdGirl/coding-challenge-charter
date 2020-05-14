import React from 'react';
import Navbar from './Components/Navbar';
import RestaurantList from './Components/RestaurantList';

class App extends React.Component {
  state = { restaurants: [] };

  onSearchSubmit = () => {
    fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
      headers: {
        Authorization: 'Api-Key q3MNxtfep8Gt',
      },
    })
      .then(res => res.json())
      .then(data => this.setState({ restaurants: data }));
  };

  render() {
    return (
      <div className='container'>
        <div className='col s12'>
          <Navbar onSubmit={this.onSearchSubmit} />
          <RestaurantList restaurants={this.state.restaurants} />
        </div>
      </div>
    );
  }
}

export default App;
