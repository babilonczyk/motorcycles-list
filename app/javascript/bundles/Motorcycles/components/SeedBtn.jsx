import React from 'react';

const SeedBtn = (props) => {

    return (
        <div>
            <div className="seed-btn-container">
                <a href="motorcycles/seed_db" data-method={"POST"} className={"seed-btn"}>Seed Database</a>
            </div>

            <div className={"clear"}> </div>
        </div>
    );
};

export default SeedBtn;