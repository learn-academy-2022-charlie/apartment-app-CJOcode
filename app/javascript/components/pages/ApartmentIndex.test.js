// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import ApartmentIndex from './ApartmentIndex'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentIndex renders", () => {
  
    const props = {
      apartments: [
        {
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
      ]
    }
    let apartmentIndexRender
    beforeEach(() => {
      apartmentIndexRender = shallow(<ApartmentIndex {...props} />)
    })
    it("displays a heading", ()=>{

      const apartmentIndexHeading = apartmentIndexRender.find("h3")
      expect(apartmentIndexHeading.length).toEqual(2)
      // expect(apartmentIndexHeading.text()).toEqual("ApartmentIndex")
    })
    it("displays a card from ReactStrap per apartment ", () => {
      const apartmentIndexCard = apartmentIndexRender.find("Card")
      expect(apartmentIndexCard.length).toEqual(1)
    })
  })