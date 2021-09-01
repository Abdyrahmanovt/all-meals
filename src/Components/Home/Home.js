import React from 'react';
import hero from './hero.png'

const Home = () => {
    return (
        <div className='container d-flex '>
            <div className='col-6'>
                <h1 className='hero-title'>Making time a good time by making food the good food.</h1>
                <p className='hero-desc'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls
                    with Persons but also specialized equipment,</p>
                <div>
                    <button className='right-btn'>Order Now</button>
                    <button className='left-btn'>Food Details</button>
                </div>
            </div>
            <div className='col-6'>
                <img src={hero} alt=""/>
            </div>


        </div>
    );
};

export default Home;