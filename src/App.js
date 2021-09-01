import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import MealsDetails from "./view/MealDetasils/MealDetails";
import Meals from "./view/Meals/Meals";
import Browse from "./view/Browse/Browse";
import Ingredients from "./Components/Ingredients/Ingredients";
import Home from "./Components/Home/Home";

const App = () => {
    return (
<div className='app-background'>
    <div className='container'>
        <Router>

            <Header/>

            <Route path='/home'><Home/></Route>
            <Route path='/foods'><Meals/></Route>
            <Route path='/foodinfo/:id'><MealsDetails/></Route>

            <Route path='/browse/:search'><Browse/></Route>
            <Route path='/ingredients/:name'><Ingredients/></Route>


        </Router>
    </div>

</div>
    )
}

export default App;
