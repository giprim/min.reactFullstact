import React from "react";
import NameStore from "../stores/nameStore";
import Update from "./Update"
import axios from "axios"


export default class Views extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      names: NameStore.getNames(),
      delete_update: {
        caption: null,
        name: null
      }
    }
  }

  componentWillMount() {
    NameStore.on("change", () => {
      this.setState({ names: NameStore.getNames() })
    })
  }

  componentDidMount() {
    axios.get("http://localhost:4444/")
      .then(response => NameStore.fetchNames(response.data))
      .then(_ => console.log(NameStore.getNames()))
      .catch(err => console.error(err));
  }

  // update function
  Update(nameObject) {

    let fullname = nameObject.firstName + " " + nameObject.lastName;
    this.setState({ delete_update: { caption: "Update", name: nameObject } })

  }


  Delete(nameObject) {
    this.setState({ delete_update: { caption: "Delete", name: nameObject } })
  }


  list(name) {
    return (
      <tr key={name.id}>
        <td>{name.id}</td>
        <td>{name.firstName}</td>
        <td>{name.lastName}</td>
        <td>
          <button className="btn btn-outline-primary mx-2" data-toggle="modal" data-target="#myModal" onClick={this.Update.bind(this, name)} >Update</button>
          <button className="btn btn-outline-danger mx-2" data-toggle="modal" data-target="#myModal" onClick={this.Delete.bind(this, name)}>Delete</button>
        </td>
      </tr>
    );
  }

  render() {
    return (

      <div className="container p-5">
        <Modal info={this.state.delete_update} />
        <h2 className="py-3 text-danger">All Names</h2>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>ID</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>ACTION</th>
            </tr>
          </thead>

          <tbody>
            {this.state.names.map((name) => this.list(name))}
          </tbody>
        </table>
      </div>
    )
  }
}


class Modal extends React.Component {

  componentDidMount() {
    axios.get("http://localhost:4444/")
      .catch(err => console.error(err));
  }


  checkAction = (info) => {
    let caption = info.caption.toLowerCase();
    switch (caption) {
      case "delete":
        this.proceedToDelete(info.name.id)
        break;
      case "update":
      this.proceedToUpdate();
        break;

      default:
        break;
    }
  }

  proceedToUpdate(){
    return <Update />
  }

  proceedToDelete = (id) => {
    axios.delete(`http://localhost:4444/delete?id=${id}`)
      .catch(err => console.error(err));
  }

  render() {

    let caption;
    let firstName;
    let lastName;

    if (this.props.info.caption !== null) {
      caption = this.props.info.caption;
      firstName = this.props.info.name.firstName;
      lastName = this.props.info.name.lastName;
    }

    return (
      <div>
        <div className="modal my-5" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{caption}</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>

              <div className="modal-body text-center">
                <h3 >Are you sure you want to {caption}? </h3>
                <h4 className="text-danger font-weight-bold">{firstName} {lastName}</h4>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-primary m-2" onClick={() => this.checkAction(this.props.info)} data-dismiss="modal">{caption}</button>
                <button type="button" className="btn btn-danger m-2" data-dismiss="modal">Cancel</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}