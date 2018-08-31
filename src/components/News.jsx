import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  render() {
    return (
      <div>
        <Image src={require("../assets/6.jpg")} className="header-image" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>This is news page
                                      I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
              </p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src={require("../assets/person-4.jpg")} />
              <p>I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
                I spend a lot of time walking around in the woods
          
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
