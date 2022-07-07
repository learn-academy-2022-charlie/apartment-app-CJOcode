// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import ApartmentShow from './ApartmentShow'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentShow renders", () => {
  
    const apartment = {
        id: 1, 
        street: "South Howard", 
        city: "Tampa", 
        state: "FL", 
        manager: "Sean Williams", 
        email: "SeanW@cmail.com", 
        price: "$2,000/mo", 
        bedrooms: 4, 
        bathrooms: 3, 
        pets: "Allowed", image: "https://www.istockphoto.com/photo/home-with-blue-siding-and-stone-fa%C3%A7ade-on-base-of-home-gm1272128530-374495892?phrase=house"
      }
   

  let apartmentShowRender

  beforeEach(() => {
    apartmentShowRender = shallow(<ApartmentShow apartment={apartment} />)
  })

  it("Displays a profile for the apartment being passed it", ()=>{
    const cardRender = apartmentShowRender.find("Card")
    expect(cardRender.length).toEqual(1)
  })
}) 
