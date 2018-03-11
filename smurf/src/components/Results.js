import React, {Component} from "react";
import ResultItem from './ResultItem';

class Results extends Component {

    state = {
      Users: []
    };

  // this.getQuotes = this.getQuotes.bind(this);

componentDidMount() {
  this.getUsers();
}

    // this.setState({Users : data});
    //this.setState({Users : data});

renderUsers() {
  return this.state.Users.map(User => (
    <ResultItem
      User={'username'}
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
