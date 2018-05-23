import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class UserPanel extends React.Component {

  constructor(props) {
    super(props)
    this.state ={
      name : '',
      type :'user',
      description : ''
    }
  }


  changeFieldValue (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState ({
      [name] : value
    })
  }


  handleSubmit (e){
      e.preventDefault()
      console.log(this.state)
  }

  render() {
    return(

      
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <label>Name : </label>
                <input type="text" name="name" className ="form-control" value={this.state.name} onChange = {this.changeFieldValue.bind(this)} />
            </div>

            <div className ="form-group">
                <label>Type : </label>
                 <select name="type" className = "form-control" value={this.state.type} onChange ={this.changeFieldValue.bind(this)} >
                <option value ="admin">admin</option>
                <option value ="user">user</option>
                </select>
            </div>
            <div className="form-group">
                <label>Description : </label>
                <textarea name="description" className="form-control" value={this.state.description} onChange = {this.changeFieldValue.bind(this)} />
            </div>  

            <div className="form-group">
                <button className="btn btn-danger" >Send </button> 
            </div>    
        </form> 
        
    )
  }
}