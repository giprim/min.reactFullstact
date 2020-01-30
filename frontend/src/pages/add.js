import React from "react";
import axios from "axios"

export default class Add extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      first: "",
      last : ""
    }
  }

  onchange = (e) =>{
    let value = e.target.value;
    let name = e.target.name;
    console.log(e);
    this.setState({[name] : value})
  }

  submitForm = (e) =>{
    e.preventDefault();
    let {first, last} = this.state;
    axios.post(`http://localhost:4444/add?first=${first}&last=${last}`)
    .then(response => console.log(response))
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="container p-5">
        <h2 className="py-3 text-danger">Add Names</h2>
        <form onSubmit={this.submitForm}>
          <div className="row">
            <div className="col-lg-12 py-2">
              <input className="form-control form-control-lg" placeholder="First Name" name="first" onChange={this.onchange.bind(this)}/>
            </div>
            <div className="col-lg-12 py-2">
              <input className="form-control form-control-lg" placeholder="Last Name" name="last" onChange={this.onchange.bind(this)}/>
            </div>
            <div className="col-lg-12 py-2">
              <input type="submit" className="btn btn-danger btn-lg" value="Submit"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}