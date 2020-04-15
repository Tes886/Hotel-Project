import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/action'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardDeck'

class Menu extends Component {

    componentDidMount = () => {
        this.props.onGetFood();
    }

    render() {

        // console.log(this.props.reducer.menuItems)

        const FoodItems = this.props.reducer.menuItems ? this.props.reducer.menuItems.map((item, index) => {

            return (
                <CardColumns className="p-3">
                    <Card style={foodCss} >
                        
                        <Link to={`/fooditem/${index}`} key={index}>
                            <Card.Img variant="top" src={item.image} style={imgcss} /></Link>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                $ {item.price}
                            </Card.Text>
                        </Card.Body>

                    </Card>
                   
                  
                </CardColumns>

            )

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

        onGetFood: () => dispatch(actionCreators.fetchFoodAsync()),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);




const foodCss = {
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
const imgcss = {
    borderRadius: "100%",
    width: "200px",
    hight: "200px",
    hover: 'true'

}