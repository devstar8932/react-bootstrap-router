import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (

      <Grid>
        <Jumbotron>
          <h2>Welcome to CodeLife.io</h2>
          <p>This is how to build a website with react,react-router& react-bootstrap</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="pwerson-wrapper">
            <Image src={require("../assets/person-1.jpg")} circle className="profile-pic" />
            <h3>Frank</h3>
            <p>That's a crooked tree.We'll send him to Washinton. These little son of a </p>
          </Col>
          <Col xs={12} sm={4} className="pwerson-wrapper">
            <Image src={require("../assets/person-4.jpg")} circle className="profile-pic" />
            <h3>Joana</h3>
            <p>That's a crooked tree.We'll send him to Washinton. These little son of a </p>
          </Col>
          <Col xs={12} sm={4} className="pwerson-wrapper">
            <Image src={require("../assets/person-7.jpg")} circle className="profile-pic" />
            <h3>Anna</h3>
            <p>That's a crooked tree.We'll send him to Washinton. These little son of a </p>
          </Col>
        </Row>

      </Grid>
    )
  }
}
