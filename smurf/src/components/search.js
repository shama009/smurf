import React, {Component} from "react"

class Search extends Component {

  state = {
    searchSkill: ""
  }

  handleInputChang=(event) =>{
    const {name, value} = event.target;
    this.setState({
      [name] : value
    });
  };
  render() {
    return (
      <div>
        <input type="text" placeholder="skill" />
        <p>hi</p>
      </div>
    )
  }
};


export default Search;
