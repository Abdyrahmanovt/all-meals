import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

const Search = () => {
    const history = useHistory()
    const [inputValue, setInputValue] = useState("")
    const handleSearch = (e) => {
        setInputValue(e.target.value.toLowerCase())
    }
    const enterPress =(e)=>{
        if(e.key === "Enter"){
            handleClick()
        }
    }
    const handleClick = ()=> {
        history.push(`/browse/${inputValue}`)
        setTimeout(()=> setInputValue(""), 1000)
    }
    return (
        <div className='d-flex center-input'>
            <input type="text" onKeyPress={enterPress} onChange={handleSearch} value={inputValue} placeholder='Enter the name of the dish' className="input-group-text" id="inputGroup-sizing-default"/>
            <button onClick={handleClick} disabled={!inputValue.trim()} className='search-btn'>Search</button>
        </div>
    );
};

export default Search;