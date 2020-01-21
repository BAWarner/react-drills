import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      unFilteredPie: ['pumpkin', 'apple', 'cherry', 'thunder berry', 'mixed berry', 'chocolate', 'pecan', 'strawberry'],
      filteredPie: '',

    }
  }
  filterPies = (e) => {
    this.setState({
      filteredPie: e.target.value
    });
  }
  render(){
    var pieList = this.state.unFilteredPie
    .filter(
      (val) => {
        return val.includes(this.state.filteredPie)
      }
    )
    .map(
      (val, i) => {
        return <h2 key={`pie${i}`}>{val.charAt(0).toUpperCase() + val.substring(1)}</h2>
      }
    );
    return(
      <div>
        <input onChange={this.filterPies} type='text' />
        {pieList}
      </div>
    );
  }
}

export default App;