import React, { Component } from 'react';



class UmerForm extends Component {
                                                                                            


  render() {
    console.log(this.props.elementType)
      let inputElement = null; 
      
        
      switch(this.props.elementType){
          case ("input"):
              inputElement =
                  <div className="FormField">
                      <input onChange={(event) => { this.props.onchanged(event) }}
                      value={this.props.value}{...this.props.elementConfig} />
              </div>
              break;
          case ("textarea"):
              inputElement =
                  <div className="FormField">
                      <input onChange={(event) => { this.props.onchanged(event) }}
                      value={this.props.value} {...this.props.elementConfig} />
              </div>
              break;
          default:
              inputElement =
                  <div className="FormField">
                  <input onChange={(event) => { this.props.onchanged(event) }}
                      value={this.props.value}{...this.props.elementConfig} />
                  </div>
  
      }
      
      return (

          <div>
              <label>{this.props.label}</label>
             {inputElement}
                
          </div>
      )
   
  } 
}


// const mapStateToProps = state => { 
//   return {...state}
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onFormInputHandler: (event, field) =>
//       dispatch({ type: 'FOODITEMFORM', field: field, event: event }),
    
    
//     onFormSubmit: (event) => {
//       event.preventDefault()
//       dispatch(foodItemFetching())
   
//     }
//   }
// }
export default UmerForm;


          // return (
    //   <div >
    //     <form onSubmit={(event) => { this.props.onFormSubmit(event) }} className="FormFields">
    //       <div className="FormField">
    //         <label className="FormField__Label" htmlFor="title">Food Title</label>
    //         <input type="text" id="titleId" className="FormField__Input"  name="title" onChange={(event) => { this.props.onFormInputHandler(event,'title')}} value={this.props.login.title} required/>
    //       </div>

    //       <div className="FormField">
    //         <label className="FormField__Label" htmlFor="price">Food Price</label>
    //         <input type="text" id="priceId" className="FormField__Input"  name="price" onChange={(event) => { this.props.onFormInputHandler(event,'price')}} value={this.props.login.price} required/>
    //       </div>

    //       <div className="FormField">
    //         <label className="FormField__Label" htmlFor="image">Food Image</label>
    //         <input type="image" id="imageId" name="Image"
    //           onChange={(event) => { this.props.onFormInputHandler(event, 'image') }} value={this.props.login.image} required />
    //       </div>
    //       <div className="FormField">
    //         <label className="FormField__Label" htmlFor="Image">Description </label>
    //         <input type="text" id="DescriptionId" className="FormField__Input"  name="Description" onChange={(event) => { this.props.onFormInputHandler (event,'description')}} value={this.props.login.description} required/>
    //       </div>

    //       <div className="FormField">
        
    //         <button  type ="submit" className="FormField__Button mr-20">Submit</button>
        
    //       </div>
    //     </form>
    //   </div>
    //);