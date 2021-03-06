import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin } from '../../store/actions/action'

class SignInForm extends Component {



  render() {
    console.log(this.props)
    return (

      <div style={recipecss}>
        <form onSubmit={(event) => { this.props.onLoginSubmit(event) }} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" onChange={(event) => { this.props.onLoginInputHandler (event,'email')}} value={this.props.reducer.login.email} required/>
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" onChange={(event) => { this.props.onLoginInputHandler (event,'password')}} value={this.props.reducer.login.password} required/>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button>
            <Link to="/signup" className="FormField__Link">Create an account</Link>
          </div>
        </form>
      </div>
    );
  } 
}

const mapStateToProps = state => { 
  return {...state}
}

const mapDispatchToProps = dispatch => {
  return {
    onLoginInputHandler: (event, field) =>
      dispatch({ type: 'LOGINFORMINPUT', field: field, event: event }),
    
    
    onLoginSubmit: (event) => {
      event.preventDefault()
      dispatch(userLogin())
   
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)

const recipecss = {
  borderRadius: "5px",
  boxShadow: "0px 5px 20px rgb(71,71,71)",
  margin: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  background: "white",
  alignItems: "center",
  minWidth: "40%"
}