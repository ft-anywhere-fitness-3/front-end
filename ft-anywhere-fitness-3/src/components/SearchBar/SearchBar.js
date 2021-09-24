import React from "react";
import './SearchBar.css'

const SearchBar = (props) => {

    const changeHandler =  event => {
        event.preventDefault();
        // console.log(event.target.value);
        props.setSearchTerm(event.target.value)
    }

    return (
        <div className='search-bar-wrapper'>
            <form className='search-selector'>
                <select id = 'search-list' onChange ={(event) => props.setSearchType(event.target.value)}>
                    <option value="">Search By...</option>
                    <option value="class_start">Class Time</option>
                    <option value="class_duration">Class Duration</option>
                    <option value="class_type">Class Type</option>
                    <option value="class_location">Class Location</option>
                </select>
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