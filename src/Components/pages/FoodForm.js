import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { foodItemFetching } from '../../store/actions/action'


class FoodForm extends Component {



  render() {
    console.log(this.props.reducer)
    return (
      
      <div style={recipecss}>
        <h6>Add New Menu</h6>
        <form onSubmit={(event) => { this.props.onFormSubmit(event) }} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="title">Menu Title</label>
            <input type="text" id="titleId" className="FormField__Input" name="title" onChange={(event) => { this.props.onFormInputHandler(event, 'title') }} value={this.props.reducer.login.title} required />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="price">Menu Price</label>
            <input type="text" id="priceId" className="FormField__Input" name="price" onChange={(event) => { this.props.onFormInputHandler(event, 'price') }} value={this.props.reducer.login.price} required />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="image">URL Image</label>
            <input type="url" id="image" name="avater" accept='image/*'
              onChange={(event) => { this.props.onFormInputHandler(event, 'image') }} value={this.props.reducer.login.image} required />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="Image">Menu Description </label>
            <input type="text" id="DescriptionId" className="FormField__Input" name="Description" onChange={(event) => { this.props.onFormInputHandler(event, 'description') }} value={this.props.reducer.login.description} required />
          </div>

          <div className="FormField">

            <button type="submit" className="FormField__Button mr-20">Submit</button>

          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state }
}

const mapDispatchToProps = dispatch => {
  return {
    onFormInputHandler: (event, field) =>
      dispatch({ type: 'FOODITEMFORM', field: field, event: event }),


    onFormSubmit: (event) => {
      event.preventDefault()
      dispatch(foodItemFetching())

    }
  }
}

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
export default connect(mapStateToProps, mapDispatchToProps)(FoodForm)