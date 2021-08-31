import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./Components/Header";
import MealsDetails from "./view/MealDeatils";
import Meals from "./view/Meals";
import Browse from "./view/Browse";

const App = () => {
    return (
        <div className='container'>
            <Router>

                <Header/>



                <Route path='/foods'><Meals/></Route>
                <Route path='/foodinfo/i=:id'><MealsDetails/></Route>

                <Route path='/browse/:search'><Browse/></Route>





            </Router>
        </div>
    )
}

export default App;
