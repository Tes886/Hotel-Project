import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/adminAction'
import { Link } from 'react-router-dom'

class Home extends Component {

    componentDidMount = () => {
        this.props.onGetFoods();
    }

    render() {
        
        console.log(this.props.adminReducer.menuItems ,"++++++++++")
        const FoodItems = this.props.adminReducer.menuItems ?
            this.props.reducer.menuItems.map((item, index) => {
                console.log(item)
                return (
                <div style={foodCss}>
                <Link  key={index}>
                        <div >
                        <h5>{item.title}</h5>
                        <img src={item.image} style={imgcss}></img>
                         <h6> $ {item.price}</h6>
                        <p>{item._id}PPP</p> 
                        
                        {/* <Link to={`edit/id`} onClick={(event) => { this.props.onDeleteFood(item.id) }}>Edit-Item</Link> */}
                    </div>
                </Link>
                 <button onClick={() => { this.props.onDeleteFood(item._id) }}>Delete-Item</button>
                 </div>       )

        }) : null

        return (
            <div>
                {FoodItems}
            </div>
        )
    }
}

const mapStateToProps = state => {
   
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {

        onGetFoods: () => dispatch(actionCreators.fetchFoodItems()),
        onDeleteFood:(id) =>dispatch(actionCreators.DeleteItems (id)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);




const foodCss = {   
    borderRadius: "15px",
    boxShadow: "0px 5px 20px rgb(70,71,71)",
    margin:"10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    background: "white",
    alignItems: "center",
    minWidth: "40%"
}
const imgcss = {
    borderRadius: "100%",
    width: "100px",
    hight :"100px"
}