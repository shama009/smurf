const data = require('../../userProfile.js');
console.log ('users ', data)
import React, {Component} from "react"

class Results extends Component {

    state = {
      Users: []
    };

  // this.getQuotes = this.getQuotes.bind(this);

componentDidMount() {
  this.getUsers();
}

getUsers() {
    this.setState({Users : data});
}

renderUsers() {
  return this.state.Users.map(User => (
    <ResultItem
      User={userName}
    />
  ));
}
  render() {
    return (
      <div>
        <ResultItem />
        <p>ResultItem placeholder</p>
      </div>
    )
  }
};


export default Results;
