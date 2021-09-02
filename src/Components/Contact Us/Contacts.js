import React from 'react';

const Contacts = () => {
    return (
        <div className='contacts'>
            <div>
                  <h4 className="contacts-subtitle">Contact </h4>
                <h2 className='contacts-title'>Food Stalls with Persons but also specialized equipment, Skills to manage.</h2>
            </div>
            <div className='d-flex form'>
                <input type="text" className='contacts-input' placeholder='Enter your message'/>
                <button className='contacts-btn'>Send</button>
            </div>
        </div>
    );
};

export default Contacts;