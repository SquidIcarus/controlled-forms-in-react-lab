import { useState } from 'react';

// STEP 1. create component
// STEP 2. Define initial state
//  2a. Create state variable `books` to store array of book objects
//  2b. Create state variable `newBook` to handle inputs for new book additions.


const Bookshelf = () => {                      // STEP 1. created component called `Bookshelf` with exports and imports
    const [books, setBooks] = useState([]);    // STEP 2a. state variable `books` holds empty array
    const [newBook, setNewBook] = useState({   // STEP 2b. state variable for new book additions, an object with title and author keys set to empty strings
        title: '',
        author: '',
    });


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