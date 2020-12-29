import './App.css';
import { Component } from 'react'
import Form from './components/form.js'

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  render() {
    return (
      <Form state={this.state} />

    );
  }

}

export default App;
