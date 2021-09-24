import React from "react";
import './SearchBar.css'

const SearchBar = (props) => {

    const changeHandler = event => {
        console.log(event.target.value);
        props.setSearchTerm(event.target.value)
    }
const setSearchType = () => {

}
return (
    <div className='search-bar-wrapper'>
        <form className='search-selector'>
            <select id = 'search-list' onChange = 'setSearchType'>
                <option>Search By...</option>
                <option>Class Time</option>
                <option>Class Date</option>
                <option>Class Duration</option>
                <option>Class Type</option>
                <option>Intensity Level</option>
                <option>Class Location</option>
            </select>
        </form>
        <form className='search-form'>
            <input
                type='text'
                placeholder='search'
                onChange= {changeHandler}
            />
        </form>
    </div>
    )
}

export default SearchBar;