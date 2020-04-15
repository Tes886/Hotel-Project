import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import {userSignUpRegis} from '../../store/actions/action'

class SignUpForm extends Component {



    render() {
        console.log(this.props)
        return (
            <div style={recipecss}>
                <form onSubmit={(event) => { this.props.onSinUpSubmit(event) }} className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.props.reducer.signUp.fullName} onChange={(event) =>
                        { this.props.onSignUpInputHandler(event, "username") }}  />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.props.reducer.signUp.email} onChange={(event) =>
                        { this.props.onSignUpInputHandler(event, "email") }} required />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.props.reducer.signUp.password}  onChange={(event) =>
                        { this.props.onSignUpInputHandler(event, "password") }} required />
                    </div>
                   
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="role">Role</label>
                        <input type="text" id="role" className="FormField__Input" placeholder="Enter your role" name="role" value={this.props.reducer.signUp.role} onChange={(event) =>
                        { this.props.onSignUpInputHandler(event, "role") }}  />
                    </div>
                    <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.props.hasAgreed} /> I agree all statements in <a href="" >terms of service</a>
                        </label>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign Up</button>
                        <Link to="/signin" className="FormField__Link">I'm already member</Link>
                    </div>
                </form>
            </div>
        );
    }

}
// Accessing State
const mapStateToProps = state => { 
    return {...state}
}
// sending Data to state by dispatch
const mapDispatchToProps = dispatch => {
    return {
      onSignUpInputHandler: (event, field) =>
        dispatch({ type: 'SIENUPFORMINPUT', field: field, event: event }),
      
      
        onSinUpSubmit: (event) => {
            event.preventDefault()
          dispatch( userSignUpRegis())
             event.preventDefault()
      }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)

const recipecss = {   
  borderRadius: "5px",
  boxShadow: "0px 5px 20px rgb(71,71,71)",
  margin:"10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  background: "white",
  alignItems: "center",
  minWidth: "40%"
}