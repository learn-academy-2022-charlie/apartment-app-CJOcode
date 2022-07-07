import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class ApartmentShow extends Component {
  render() {
    const { apartment } = this.props
    console.log("SHOW", apartment);
    return (
      <>
        <div className="page-body">
          {apartment && 
            <Card body className="card-show">
              <CardImg top width="100%" height="700px" src={apartment.image} />
              <CardBody>
                <CardTitle>Location: {apartment.street}, {apartment.city}, {apartment.state}</CardTitle>
                <CardTitle>Bedrooms/Bath: {apartment.bedrooms} / {apartment.bathrooms}</CardTitle>
                <CardTitle>Price: {apartment.price}</CardTitle>
                <CardTitle>Pets: {apartment.pets}</CardTitle>
                <CardTitle>Apartment manager: {apartment.manager}</CardTitle>
                <CardTitle>Contact: {apartment.email}</CardTitle>
                <NavLink to={`/apartmentedit/${apartment.id}`}>
                  <Button>Edit Apartment Profile</Button>
                </NavLink>
                <br />
                <br />
                <NavLink to="/apartmentindex">
                  <Button onClick={() => this.props.deleteApartment(apartment.id)}>
                    Delete Apartment
                  </Button>
                </NavLink>
              </CardBody>
            </Card>
          }
        </div>
      </>
    )
  }
}
export default ApartmentShow