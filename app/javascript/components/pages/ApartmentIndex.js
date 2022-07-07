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

export default class ApartmentIndex extends Component {
  render() {
    const { apartments } = this.props
    console.log("props.apartments:", apartments);
    return (
      <>
      <h3>ApartmentIndex</h3>
        <div className="page-body">
          <h3>Here's all the apartments</h3>
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