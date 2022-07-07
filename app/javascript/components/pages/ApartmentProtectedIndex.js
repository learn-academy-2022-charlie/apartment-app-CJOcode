import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class ApartmentProtectedIndex extends Component {
  render() {
    const { apartments } = this.props
    console.log("props.apartments:", apartments);
    return (
      <>
      <h1>My Apartments</h1>
        <div className="page-body">
          
          <div className="index-cards">
            {apartments && apartments.map((apartment, index) => {
              return (
                <Row key={apartment.id}>
                  <Col sm="6">
                    <Card body key={index}>
                      <CardImg src={apartment.image} />
                      <CardBody>
                        <CardTitle>Location: {apartment.city}, {apartment.state}</CardTitle>
                        <CardSubtitle>{apartment.price}</CardSubtitle>
                        <NavLink to={`/apartmentshow/${apartment.id}`}>
                          <Button>More info here</Button>
                        </NavLink>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              )})
            }
          </div>
        </div>
      </>
    )
  }
}