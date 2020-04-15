import React, { Component } from 'react'
import axios from 'axios';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateComments extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            description: "",
            date: new Date(),
        }
    }

    commentfunc = ()=>{
        axios.get('http://localhost:5000/comment')
            .then(response => {
                console.log(response.data[0].description)
                if (response.data) {
                    this.setState({
                        ...this.state,
                        // users: response.data.map(user => user.username),
                        description: response.data[0].description
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
        }
    


    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const comments = {
            username: this.state.username,
            description: this.state.description,
            date: this.state.date
        }

        console.log(comments);
        axios.post('http://localhost:5000/comment/add', comments)
            .then(res => console.log(res.data));
        //window.location = '/';
    }


    render() {
        return (
            <div>
                <h3>Join the Discussion! </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Full Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <textarea type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>

                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Post Comment" className="btn btn-primary" />
                    </div>
                   
                </form> 
               
            </div>
        )
    }
}






// import React, { Component } from 'react';

// class CommentBox extends Component {
//     constructor() {
//       super();

//       this.state = {
//         showComments: false,
//         comments: [
//           {id: 1, author: "landiggity", body: "This is my first comment on this forum so don't be a dick"},
//           {id: 2, author: "scarlett-jo", body: "That's a mighty fine comment you've got there my good looking fellow..."},
//           {id: 3, author: "rosco", body: "What is the meaning of all of this 'React' mumbo-jumbo?"}
//         ]
//       };
//     }

//     render () {
//       const comments = this._getComments();
//       let commentNodes;
//       let buttonText = 'Show Comments';

//       if (this.state.showComments) {
//         buttonText = 'Hide Comments';
//         commentNodes = <div className="comment-list">{comments}</div>;
//       }

//       return(
//         <div className="comment-box">
//           <h2>Join the Discussion!</h2>
//           <CommentForm addComment={this._addComment.bind(this)}/>
//           <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
//             {buttonText}
//           </button>
//           <h3>Comments</h3>
//           <h4 className="comment-count">
//             {this._getCommentsTitle(comments.length)}
//           </h4>
//           {commentNodes}
//         </div>  
//       );
//     } // end render

//     _addComment(author, body) {
//       const comment = {
//         id: this.state.comments.length + 1,
//         author,
//         body
//       };
//       this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
//     }

//     _handleClick() {
//       this.setState({
//         showComments: !this.state.showComments
//       });
//     }

//     _getComments() {    
//       return this.state.comments.map((comment) => { 
//         return (
//           <Comment 
//             author={comment.author} 
//             body={comment.body} 
//             key={comment.id} />
//         ); 
//       });
//     }

//     _getCommentsTitle(commentCount) {
//       if (commentCount === 0) {
//         return 'No comments yet';
//       } else if (commentCount === 1) {
//         return "1 comment";
//       } else {
//         return `${commentCount} comments`;
//       }
//     }
//   } // end CommentBox component

//   class CommentForm extends React.Component {
//     render() {
//       return (
//         <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
//           <div className="comment-form-fields">
//             <input placeholder="Name" required ref={(input) => this._author = input}></input><br />
//             <textarea placeholder="Comment" rows="4" required ref={(textarea) => this._body = textarea}></textarea>
//           </div>
//           <div className="comment-form-actions">
//             <button type="submit">Post Comment</button>
//           </div>
//         </form>
//       );
//     } // end render

//     _handleSubmit(event) { 
//       event.preventDefault();   // prevents page from reloading on submit
//       let author = this._author;
//       let body = this._body;
//       this.props.addComment(author.value, body.value);
//     }
//   } // end CommentForm component

//   class Comment extends React.Component {
//     render () {
//       return(
//         <div className="comment">
//           <p className="comment-header">{this.props.author}</p>
//           <p className="comment-body">- {this.props.body}</p>
//           <div className="comment-footer">
//             {/* <a href="#" className="comment-footer-delete" onClick={this._deleteComment}>Delete Comment</a> */}
//           </div>
//         </div>
//       );
//     }
//     // _deleteComment() {
//     //   alert("-- DELETE Comment Functionality COMMING SOON...");
//     // }
//   }


//   export default CommentBox;