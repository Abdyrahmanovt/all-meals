import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from "axios";


const Browse = () => {
    const params = useParams()
    const [foods, setfoods] = useState([])
    const [message,setMessage]=useState('')


    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.search}`)
            .then(({data}) => {
                if (!data.meals){
                    setMessage( 'Такого продукта не существует')
                }else{
                    setfoods(data.meals)
                }

            })
    }, [params.search])


    return (
        <div className='row'>
            <div>{message}</div>
            {
                foods.map(el => (
                        <div key={el.idMeal} className='col-3'>
                            <Link to={`/foodinfo/${el.idMeal}`}>
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
    );
};

export default Browse;