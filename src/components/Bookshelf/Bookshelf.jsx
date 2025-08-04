import { useState } from 'react';

// STEP 1. create component


const Bookshelf = () => {                  // STEP 1. created component called `Bookshelf` with exports and imports

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