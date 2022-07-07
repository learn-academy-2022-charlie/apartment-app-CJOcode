# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user = User.where(email: 'user@test.com').first_or_create(password: '12345678', password_confirmation: '12345678')
      
apartments_array = [
    {
    street: "South Howard",
    city: "Tampa",
    state: "FL",
    manager: "Sean Williams",
    email: "SeanW@cmail.com", 
    price: "$2,000/mo", 
    bedrooms: 4, 
    bathrooms: 3, 
    pets: "Allowed",
    image: 'https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
    street: "Collins Ave",
    city: "Miami",
    state: "FL",
    manager: "Nick Roc",
    email: "NickRoc@bmail.com", 
    price: "$2,300/mo", 
    bedrooms: 2, 
    bathrooms: 1, 
    pets: "Not Allowed",
    image: 'https://images.unsplash.com/photo-1521111998-ef042c1931fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    }
]

apartments_array.each do |apartment_obj|
    user.apartments.create apartment_obj
end

p user.apartments
p "Apartments were made successfully"