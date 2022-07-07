require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "GET /index" do
    it 'returns a list of apartments' do

      user = User.where(email: 'user@test.com').first_or_create(password: '12345678', password_confirmation: '12345678')
      
      user.apartments.create(
        street: "41st",
        city: "Tampa",
        state: "FL",
        manager: "Sean Williams",
        email: "SeanW@cmail.com", 
        price: "$2,000/mo", 
        bedrooms: 4, 
        bathrooms: 3, 
        pets: "Allowed",
        image: 'https://www.istockphoto.com/photo/home-with-blue-siding-and-stone-fa%C3%A7ade-on-base-of-home-gm1272128530-374495892?phrase=house'
      )

      get '/apartments'

      apartments = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartments.length).to eq(1)
    end
  end

  # describe "GET /show" do
  #   it 'returns an apartment' do

  #     user = User.where(email: 'user@test.com').first_or_create(password: '12345678', password_confirmation: '12345678')
      
  #     user.apartments.create(
  #       street: "41st",
  #       city: "Tampa",
  #       state: "FL",
  #       manager: "Sean Williams",
  #       email: "SeanW@cmail.com", 
  #       price: "$2,000/mo", 
  #       bedrooms: 4, 
  #       bathrooms: 3, 
  #       pets: "Allowed",
  #       image: 'https://www.istockphoto.com/photo/home-with-blue-siding-and-stone-fa%C3%A7ade-on-base-of-home-gm1272128530-374495892?phrase=house'
  #       # user_id: 1,
  #     )

  #     get '/apartment'

  #     apartments = JSON.parse(response.body)
  #     expect(response).to be_successful
  #   end
  # end

end
