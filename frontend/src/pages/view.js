import React from "react";


export default class Views extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      names: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:4444/")
      .then(response => response.json())
      .then(response => this.setState({ names: response }))
      .catch(err => console.error(err));
  }

  list(name) {
    return (
      <tr key={name.id}>
        <td>{name.id}</td>
        <td>{name.firstName}</td>
        <td>{name.lastName}</td>
      </tr>
    );
  }

  render() {
    return (

      <div className="container p-5">
        <h2 className="py-3 text-danger">All Names</h2>
        <table className="table table-stripped">

          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
          </tr>

          <tbody>
            {this.state.names.map(name => this.list(name))}
          </tbody>
        </table>
      </div>
    )
  }
}