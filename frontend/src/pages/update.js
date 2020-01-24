import React from "react";


export default class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [
        {
          id: 1,
          firstName: "Johnny",
          lastName: "Does"
        },
        {
          id: 2,
          firstName: "Paul",
          lastName: "Does"
        },
        {
          id: 3,
          firstName: "Jame",
          lastName: "Frank"
        }
      ]
    }
  }

  // update function
  Update(nameObject) {
    let id = nameObject.id;
    let name = nameObject.firstName + " " + nameObject.lastName;
  }

  modal() {
    return (
      <div>
        <div className="modal my-5" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Modal Heading</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>

              <div className="modal-body">
                Modal body..
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

  Delete(nameObject) {
    let id = nameObject.id;
    let name = nameObject.firstName + " " + nameObject.lastName;
    window.confirm("Do you want ot Delete " + name)
  }

  TableData(params) {
    let object = params;
    return (
      <tr key={params.id}>
        <td>{params.id}</td>
        <td>{params.firstName}</td>
        <td>{params.lastName}</td>
        <td>
          <button className="btn btn-outline-primary mx-2" data-toggle="modal" data-target="#myModal" onClick={this.Update.bind(this, object)} >Update</button>
          <button className="btn btn-outline-danger mx-2" onClick={this.Delete.bind(this, object)}>Delete</button>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div className="container p-5">
        <h2 className="py-3 text-danger">Alter Name</h2>
        <table className="table table-stripped text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.name.map(data => this.TableData(data))}
          </tbody>
        </table>
        <this.modal />
      </div>
    );
  }
}