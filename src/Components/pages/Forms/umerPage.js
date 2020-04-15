import React, { Component } from 'react'
import UmerForm from './umerForm';
import { connect } from 'react-redux';
import { foodItemFetchingUmer } from '../../../store/actions/action'




export class umerPage extends Component {



    render() {
        console.log(this.props)
        let fromElementArray = [];
        for (let key in this.props.umerReducer.menuAddForm) {
            fromElementArray.push({
                id: key,
                config: this.props.umerReducer.menuAddForm[key]
            })
        }
        console.log(fromElementArray)

        let form = (
            <form onSubmit={(event) => { this.props.onFormSubmit(event) }} className="FormFields">

                {
                    fromElementArray.map(item => {
                        console.log(item)
                        return (
                            <UmerForm
                                key={item.id}
                                elementType={item.config.elementType}
                                elementConfig={item.config.elementConfig}
                                label={item.config.label}
                                value={item.config.value}
                                description={item.config.description}
                                onchanged={(event) => { this.props.onMenuInputHandler(event, item.id) }}
                            />
                        )
                    })
                }
                <button className="FormField__Button mr-20">Submit</button>
            </form>

        )


        return (
            <div>
                <h2>Foods Menu Insertion form</h2>
                {form}
                <h1>hello</h1>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return { ...state }
}

const mapDispatchToProps = dispatch => {
    return {

        onMenuInputHandler: (event, field) => {
            event.preventDefault();
            dispatch({ type: 'FOODLIST', event: event, field: field })

        },
        onFormSubmit: (event) => {
            event.preventDefault()
            dispatch(foodItemFetchingUmer())
         
          }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(umerPage)
