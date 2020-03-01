import React, { Component } from 'react';
import './App.css';
import fetchUser from './services/randomUser'
import User from './components/User'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  async componentDidMount() {
    const response =  await fetchUser()
    console.log(response)
      this.setState({
        currentUser: response.data.results[0]
      })

    return response
  }

  refreshUser = (event) => {
    event.preventDefault()
    this.componentDidMount()
  }
  render() {
   return (
    <div className="App">
       <h1>This person does not exist:</h1>
       <div></div>
      <form>
         <button onClick={this.refreshUser}>User</button>
       </form>
       <User userData={this.state.currentUser} />
    </div>
    )
  }

}

export default App;
