import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { Item } from 'react-bootstrap/lib/Breadcrumb';

const Comments = props => (
    <tr>
        <td>{props.comments.username}</td>
        <td>{props.comments.description}</td>
        <td>{props.comments.date.substring(0, 10)}</td>

    </tr>
)

export default class ExercisesList extends Component {
    state = {
        comments: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/comment/')
            .then(response => {
                console.log(response.data)
                this.setState({ comments: response.data })
            })
            .catch((error) => {
                console.log(error);
            })

    }
    // retuns Comment component
    commentList() {
        const mine = this.state.comments.map(currentcomment => {
          return currentcomment
         //console.log(currentcomment)
        })
        return mine
    }

    render() {

        // console.log(this.state.comments[0].description)

        console.log(this.commentList())
        const commen = this.commentList();
        console.log(commen)
        let displaycomment = commen.map((item, index) => {
            console.log(item)
            return (
                <div>
                <div className="form-group">
                <select multiple class="form-control" id="exampleFormControlSelect2">
            <option>{index+1}. {item.description},{item.username}, {item.date} </option>
                </select>
            </div>
                </div>
            )
        })
        return (
            <div>{displaycomment}</div>
        )
    }
}

