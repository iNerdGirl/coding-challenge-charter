import React from 'react';

class Navbar extends React.Component {
  state = { term: '' };

  searchDidUpdate = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='nav-wrapper'>
        <form onSubmit={this.searchDidUpdate}>
          <div className='input-field cyan'>
            <input
              id='search'
              type='search'
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            <label className='label-icon' for='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    );
  }
}

export default Navbar;
