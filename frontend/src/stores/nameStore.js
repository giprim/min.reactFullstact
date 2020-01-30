import { EventEmitter } from "events"
import Dispatcher from "../stores/dispatcher"

class NameStore extends EventEmitter {
  constructor() {
    super();
    this.names = []
  }

  fetchNames(data) {
    this.names = data
    this.emit("change");
  }

  getNames() {
    return this.names
  }

  handleAction(dataObject){
    switch (dataObject.actionType) {
      case "ADD_NEW_USER":
        console.log("action add new user was passed")
        break;
    
      default: 
        break;
    }
  }
}
const nameStore = new NameStore;
Dispatcher.register(nameStore.handleAction(nameStore))
export default nameStore;