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
                      <CardImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUfz0A8uwkUS6y0p-RXL3L1jOIuB7bzI-y96qKWaDnbRIDcJ5-TOAy_ERYyd4PkqHowgk&usqp=CAU" />
                      <CardBody>
                        <CardTitle>Hi, my name is {apartment.name}</CardTitle>
                        <CardSubtitle>{apartment.age}</CardSubtitle>
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