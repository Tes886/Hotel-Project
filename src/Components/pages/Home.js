import React, { Component } from 'react'
import Menu from './Menu';
import Comments from '../pages/Comments';
import CommentsDisplay from '../pages/CommentDisplay';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ControlledCarousel from './ControlledCarousel'

class Home extends Component {
  render() {
    return (
      <Container>
        <div>
          <h2>Hello My Restaurant </h2>
          <p>A great restaurant website can attract new customers, maintain loyal ones,
  and raise the overall profile of the establishment outside of the physical location.</p>

          <p>But how do you put together a great website when you - the restaurant owner or operator -
  are busy with the many other critical tasks related to running your restaurant?</p>

          <p>Well, building the best restaurant website doesn’t have to be a time-consuming or difficult task.
          In many cases, there are simple things you can build into your website to share the most important
  information with your frequent and potential guests.</p>

        </div>

        <ControlledCarousel>
          {this.props.children}
        </ControlledCarousel>
        <Menu>
          {this.props.children}
        </Menu>
        <Comments/>
        <CommentsDisplay />
        

      </Container>



    )
  }

}



export default Home;