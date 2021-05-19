# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.detroy_all

demo = User.create(email: "demo_user@infinote.com", password: "infinote", username: "DemoUser")
user1 = User.create(email: "test@test.com", password: "password")

main_notebook = Notebook.create(title: "My First Notebook", author_id: 1)
notebook1 = Notebook.create(title: "Housing Options", author_id: 1)
notebook2 = Notebook.create(title: "Budget", author_id: 1)
notebook2 = Notebook.create(title: "Predicting the Next Market Crash", author_id: 1)


main_notebook = Notebook.create(title: "My First Notebook", author_id: 2)
notebook1 = Notebook.create(title: "Housing Options", author_id: 2)
notebook2 = Notebook.create(title: "Budget", author_id: 2)
notebook2 = Notebook.create(title: "Predicting the Next Market Crash", author_id: 2)

note1 = Note.create(title: "The opportunities are infinite!", content: "In infiNote, you can create, render, update, and delete notes!", author_id: 1, notebook_id: 1 )
# note1 = Note.create(title: , content: ,author_id: )
# note1 = Note.create(title: , content: ,author_id: )
# note1 = Note.create(title: , content: ,author_id: )
# note1 = Note.create(title: , content: ,author_id: )
