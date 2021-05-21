# infiNote

### What is infiNote?
* infiNote is a clone of the popular note taking application, [Evernote](http://evernote.com), mirroring much of the same functionality as the site from which it was inspired. infiNote allows users to seamlessy create notes and notebooks as a means of organizing their thoughts into one, centralized location. Intuitive navigation allows users to view notes within the notebook they are currently working on, or view all notes, regardless of notebook. Notes are updated in real-time, and are automatically sorted by most recently updated.

## Demo
Here is a link to the web application: [infiNote](http://infinote-app.herokuapp.com/#/)
![Landing Screenshot](https://user-images.githubusercontent.com/77806372/119143307-767e4b80-ba15-11eb-8d67-7115b2194ae8.JPG)

## Major Technologies Used
* React: frontend JavaScript library to build user interface components.
* React Router: a routing library to keep user interface in sync with the current url.
* Redux: an application state management JavaScript library to ensure efficiency and decrease the need for prop drilling. 
* Ruby on Rails: an API to allow data transfer from the backend to the frontend, and vice-versa.
* PostgreSQL: an object-relational database system to manage the applications data.

## Features
### User Authentication:
* Users can create an account to house their notes and notebooks. Users have the ability to sign in if they have already registered an account.
* Users can navigate the application through the use of a demo user, without the need to register an account.
* Errors are rendered if a user already exists or if a password is not valid.
* Backend user authentication includes password salting and hasing. The user's password is never stored in the database.
* Frontend user authentication includes the ability to refresh the page without having to login. Additionally, certain URL paths are protected, only logged in users have access to them.
![Session Snippet](https://user-images.githubusercontent.com/77806372/119147315-76804a80-ba19-11eb-9e0f-f4db761baa81.JPG)

### Notes:
* Users may create new notes and begin editing them within a matter of seconds.
* Editing a note pushes it to the the top of the notebook, sorting notes by most recently updated. 
* Notes created within a notebook will be housed in that notebook. All other notes will not be added to a notebook.
* Notes can be moved from one notebook to another, or deleted. 
![Notes Snippet](https://user-images.githubusercontent.com/77806372/119149439-839e3900-ba1b-11eb-80c7-09cee4264668.JPG)




## Future Directions
and tags
