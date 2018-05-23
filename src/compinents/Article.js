import React from 'react'

export default class Article extends React.Component {
  render(){
    const { object } = this.props
    return(
       <li>
          <h2>{object.title}</h2>
       </li>   
    )
  }
}