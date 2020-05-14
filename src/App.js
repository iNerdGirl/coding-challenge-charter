import React from 'react';
import Navbar from './Components/Navbar';

class App extends React.Component {
  onSearchSubmit = term => {
    fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
      headers: {
        Authorization: 'Api-Key q3MNxtfep8Gt',
      },
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  render() {
    return (
      <div className='container'>
        <div className='col s12'>
          <Navbar onSubmit={this.onSearchSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
