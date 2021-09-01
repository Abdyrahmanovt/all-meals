import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from "axios";


const MealsDetails = () => {
        const params = useParams()
        const [infoFood, setInfoFood] = useState({})
        const [youtube, setYoutube] = useState('')

            const ings = Array(20).fill(0).reduce((acc, item, idx) => {
            if (infoFood[`strIngredient${idx + 1}`]) {
                return [...acc, infoFood[`strIngredient${idx + 1}`]]
            } else {
                return acc
            }
        }, [])


        useEffect(() => {
            axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
                .then(({data}) => {
                    const obj = data.meals[0]
                    setInfoFood(obj)
                    let str = obj.strYoutube
                    setYoutube(str.slice(str.indexOf("v=") + 2, str.length))

                })
        }, [params.id])


        return (
            <div className={'container'}>
                <div>
                    <h1 className='big-imgdesc'>{infoFood.strMeal}</h1>
                </div>
                <div className={'d-flex'}>
                    <img src={infoFood.strMealThumb} alt="" className='big-img'/>
                    <div className={'row'}>
                        {
                            ings.map(item => (
                                <div key={item} className="col-3 text-center ">
                                    <Link to={`/ingredients/${item}`}>
                                        <img src={`https://www.themealdb.com/images/ingredients/${item}.png`} alt=""
                                             width='100px'/>
                                        <p>{item}</p>
                                    </Link>
                                </div>))
                        }
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtube}`}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>

                        </iframe>
                    </div>
                </div>
                <div className='desc-food'>
                    <h2 className={'text-center'}>Instructions</h2>
                    <p>
                        {infoFood.strInstructions}
                    </p>
                </div>

            </div>
        );
    }
;

export default MealsDetails;

