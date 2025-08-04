import { useState } from 'react';

// STEP 1. create component
// STEP 2. Define initial state
//  2a. Create state variable `books` to store array of book objects
//  2b. Create state variable `newBook` to handle inputs for new book additions.
// STEP 3. Create event handlers
//  3a. create function named `handleInputChange`, triggered each time the user types in an input field
//  3a. construct a new version of the `newBook` object that includes the updated fields.
//  3a. use the `setNewBook` setter function to update the sate of `newBook` with new object to reflect changes in UI
//  3b. create `handleSubmit` function to execute when form is submitted
//  3b. Begin function by stopping the default form submission
//  3b. use `setBooks` setter function to update `books` array state.
//  3b. reset the `newBook` state to its initial empty values to clear the form fields

const Bookshelf = () => {                      // STEP 1. created component called `Bookshelf` with exports and imports
    const [books, setBooks] = useState([]);    // STEP 2a. state variable `books` holds empty array
    const [newBook, setNewBook] = useState({   // STEP 2b. state variable for new book additions, an object with title and author keys set to empty strings
        title: '',
        author: '',
    });

    function handleInputChange(e) {             // STEP 3a. function named `handleInputChange` takes an event object as its argument
        const { name, value } = e.target;       // STEP 3a. event used to access `name` and `value`
        setNewBook({ ...newBook, [name]: value })// STEP 3a. `setNewBook` setter function updates newBook state using spread operator(...newBook) to maintain existing properties
    };

    function handleSubmit(e) {                  // STEP 3b. function that will execute when the form is submitted
        e.preventDefault();                     // STEP 3b. prevents the page from refreshing
        setBooks([...books, newBook]);          // STEP 3b. `setBooks` setter function, updates the books array using the spread operator
        setNewBook({ title: '', author: ''});   // STEP 3b. resets the `newBook` state back to empty strings 
    }


    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    {/* Form will go here */}
                </div>
                <div className="bookCardsDiv">{/* Book cards will display here */}</div>
            </div>
        </>
    );
};

export default Bookshelf;