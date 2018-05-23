import React from 'react'
import UserPanel from './Userpanel'

export default class App extends React.Component {


  
 
  render(){
    return(
          <div className="container">
              <h1>My app</h1>
              <hr/>
              <UserPanel />
          </div>      
    )
  }
}