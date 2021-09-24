import React from "react";
import './SearchBar.css'

const SearchBar = (props) => {

    const changeHandler = event => {
        event.stopPropagation();
        // console.log(event.target.value);
        props.setSearchTerm(event.target.value)
    }

    const saveSearchType = (event) => {
        event.stopPropagation();
        // console.log(event.target.value);
        props.setSearchType(event.target.value)
    }

    return (
        <div className='search-bar-wrapper'>
            <form className='search-selector'>
                <select id = 'search-list' onChange ={saveSearchType}>
                    <option value="" >Search By...</option>
                    <option value="class_start" selected>Class Time</option>
                    <option value="class_duration">Class Duration</option>
                    <option value="class_type">Class Type</option>
                    <option value="class_location">Class Location</option>
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