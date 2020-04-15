import React, { Component } from 'react'
import * as actionTypes from './store/actions/action'
import { connect } from 'react-redux';
import * as actionCreators from '../src/store/actions/action'
import { Link } from 'react-router-dom'

class Orders extends Component {

    // componentDidMount = () => {
    //     this.props.onGetAllFood();
    //     //this.props.onGetOneFood();
    // }
    render() {
        console.log('here')
        // const FoodItems = this.props.menuItems ? this.props.menuItems.map((item, index) => {
        //     return (
        //         <Link to={`/fooditem/${index}`} key={index}>
        //             <div style={foodBeutify}  >
        //                 <li>{item.recipe.label}</li>
        //                 <img src={item.recipe.image} style={imgcss}></img>
        //                 {item.recipe.yield}
        //             </div>
        //         </Link>
        //     )

        // }) : null

        // return (
        //     <div>
        //         <p>here</p>
        //         {FoodItems}
        //     </div>
        // )
        return (
                <div>
                    <p>here</p>
                </div>
            )
    }
}

export default Orders
// const mapStateToProps = state => {

//     return {
//         ...state
//     }
// }

// const mapDiapatchToProps = dispatch => {
//     return {
//         onGetAllFood: () => dispatch(actionCreators.fetchFoodAsync()),
//     }
// }

// export default connect(mapStateToProps, mapDiapatchToProps)(Home);

// const foodBeutify = {
//     borderRadius: "5px",
//     boxShadow: "0px 5px 20px rgb(71,71,71)",
//     margin: "10px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-around",
//     background: "white",
//     alignItems: "center",
//     minWidth: "40%"
// }
// const imgcss = {
//     borderRadius: "50%",
//     width: "50px",
//     hight: "100px"
// }

