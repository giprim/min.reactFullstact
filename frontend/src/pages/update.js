import React, { Component } from 'react'

class Update extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
         firstName : "",
        lastName : "", 
    }
  }

  updateUser = (e) => {
    console.log(e)
  }

  setOnChange =() => {

  }

  
  render() {
    return (
      <div>
        <form onSubmit={this.updateUser()}>
          <input type="text" name="firstName" placeholder="Update First name" value={this.props.firstname} onChange={() => this.updateUser()} />
          <input type="text" name="lastName" placeholder="Update First name" value={this.props.lastname} onChange={() => this.updateUser()} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Update
