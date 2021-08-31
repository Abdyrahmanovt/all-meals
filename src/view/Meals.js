import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Meals = () => {
    const [foods, setfoods] = useState([])
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data}) => setfoods(data.meals))
    }, [])
    return (
        <div className='meals'>
            <h1 className='text-center'>
                All foods
            </h1>
            <div className='search-food '>
                <input onChange={handleSearch} type="text"/>
                <Link to={`/browse/${search}`}><i className="fas fa-search btn-search"/></Link>
            </div>
            <div className='row'>
                {
                    foods.map(el => (
                            <div key={el.idMeal} className='col-3'>
                                <Link to={`/foodinfo/i=${el.idMeal}`}>
                                    <img src={el.strMealThumb} alt="" className='img'/>
                                    <div>
                                        {el.strMeal}
                                    </div>
                                </Link>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Meals;