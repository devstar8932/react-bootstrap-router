import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src={require("../assets/2.jpg")} className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src={require("../assets/person-1.jpg")} className="about-profile-pic" rounded/>
            <h3>Frank The Tank</h3>
            <p>That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
                            That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
                            That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
                            That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
                            That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
                            That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              That's a crooked treeThat's a crooked treeThat's a crooked treeThat's a crooked tree
              
            </p>
          </Col>
        </Grid>
      </div>
    )
  }
}
