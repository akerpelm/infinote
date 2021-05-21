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

![Session Snippet](https://user-images.githubusercontent.com/77806372/119147315-76804a80-ba19-11eb-9e0f-f4db761baa81.JPG)

* Backend user authentication includes session token generation in addition to password salting and hasing. The user's password is never stored in the database: 
```ruby
class User < ApplicationRecord
    ...
    
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def is_password?(password)
        pw_object = BCrypt::Password.new(self.password_digest)
        pw_object.is_password?(password) #bcrypt is_password method
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::base64
        self.save!
        self.session_token
    end

end


```
* Frontend user authentication includes the ability to refresh the page without having to login. Additionally, certain URL paths are protected, only logged in users have access to them: 


### Notes:
* Users may create new notes and begin editing them within a matter of seconds. 
```jsx
  handleUpdate(e) { //allows notes to update in real-time, setting the react component state to the user's input
    e.preventDefault();
    this.props.updateNote(
      convertToSnakeCase({
        id: this.state.id,
        title: this.state.title,
        content: this.state.content,
        notebookId: this.props.currentNote.notebookId
      })
    );
  }

  componentDidUpdate(prevProps) { //updates the note component's state to render the most recently selected note
    if (prevProps.noteId !== this.props.noteId) {
      this.setState(this.props.currentNote);
    }
  }

  handleChange(field) { //changes the state as the user is typing
    return (e) =>
      this.setState({
        [field]: e.target.value,
      });
  }

```

* Editing a note pushes it to the the top of the notebook, sorting notes by most recently updated.  

![Notes Snippet](https://user-images.githubusercontent.com/77806372/119149439-839e3900-ba1b-11eb-80c7-09cee4264668.JPG)
* Notes created within a notebook will be housed in that notebook. All other notes will not be added to a notebook.
* Notes can be moved from one notebook to another, or deleted. 

```jsx
handleClick(notebook) { //logic to handle the moving of a note from one notebook to another
    this.props.currentNote.notebookId = notebook.id;
    this.props
      .updateNote(convertToSnakeCase(this.props.currentNote))
      .then(this.toggleModal())
      .then(
        this.props.history.push(
          `/notebooks/${notebook.id}/notes/${this.props.currentNote.id}`
        )
      );
  }

render() { //conditional rendering based on the presence of other notebooks
    let notebooks =
      this.props.notebooks.length < 1 ? (
        <h2 className="move-note-modal-h2">No other notebook exists!</h2>
      ) : (
        this.props.notebooks.map((notebook, i) => {
          if (notebook.id !== this.props.currentNoteNotebook.id) {
            return (
              <li
                className="move-note-modal-li"
                key={i}
                onClick={() => this.handleClick(notebook)}
              >
                {notebook.title}
              </li>
            );
          }
        })
      );
```



## Future Direction
* Many features are still a work in progress. The following are some major components I hope to implement shortly:
  * Tags - ability to group notes by tags, as a further way of filtering notes.
  * Rich Text Editing - more flexibility with note editing would be beneficial.
  * Search Functionality - ability to search for any feature (note, notebook, or tag) and have any matching results returned as a direct link to that feature's page.
  * All Notes - the current functionality is that all notes belong to a notebook (even those without a notebook belong to a pseudo-notebook). The notebook was the first feature created, and at the time, it seemed logical to only show notes based on their notebook. However, the ability to view notes without filtering notes based on their notebook is important and will be implemented.
  * User Landing - rather than viewing all notes upon login, I would like to create a user landing page that greets the user. 
  * Buttons - many buttons have only limited or no functionality as of yet.
  * Sort - ability to sort notes, notebooks, or tags by alphabetical order or more recent edit, bot ascending and descending. 
