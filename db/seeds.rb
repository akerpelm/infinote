# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.detroy_all

demo = User.create(email: "demo_user@infinote.com", password: "infinote", username: "DemoUser")
user1 = User.create(email: "ak@infinote.com", password: "password")