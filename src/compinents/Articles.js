import React from 'react'
import Article from './Article'


export default class Articles extends React.Component {
  render(){
    const { articles} = this.props
    return(
      <ul>
        {articles.map((article , index) => <Article object={article} key={index}/>)}
      </ul>  
    )
  }
}