import React, { Component } from 'react'

class User extends Component {
  constructor() {
    super()
    this.state = {
      showMore: false
    }
  }
  handleClick = (event) => {
    event.preventDefault()
    this.setState(prevState => ({
      showMore: !prevState.showMore
    }));
  }

  render() {
    const data = this.props.userData
    let display = ''
    if (data === null) {
       display = <div>Invalid user</div>
    } else if (!this.state.showMore){
       display = (
          <div>
            Name: {data.name.first} {data.name.last}
            <br></br>
            Email: {data.email}
          </div>
        )
    } else {
       display = (
          <div className="user-info">
            <div className="userPic"><img src={data.picture.medium}/></div>
             <p>Name: {data.name.first} {data.name.last}</p>
             <br/>
             <p>Email: {data.email}</p>
             <br/>
             <p>Address: {data.location.street.number} {data.location.street.name}
             {data.location.city}, {data.location.state}</p>
             <br/>
             <p>Username: {data.login.username}</p>
           </div>
        )
    }
    return (
      <div>
        <div>{display}</div>
       <form>
            <button onClick={this.handleClick}>toggle</button>
      </form>
      </div>

    )
  }
}

export default User
