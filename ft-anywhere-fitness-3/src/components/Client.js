import React, { useEffect, useState } from "react";
import StyledClient from '../styledComponents/StyledClient';
import axiosWithAuth from "./utils/axiosWithAuth";
import Reserve from "./Reserve";
import SearchBar from "./SearchBar/SearchBar";

const Client = () => {
    const [availableClasses, setAvailableClasses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('class_start');

    // useEffect(() => {
    //     console.log("Welp", searchType)
    //     console.log(availableClasses[0][searchType])
    // },[searchType])

    useEffect(() => {
        axiosWithAuth()
        .get('/classes')
        .then(res => {
            console.log("Get Classes: ",res.data)
            setAvailableClasses(res.data)
        })
        .catch(err => alert(err))
    },[])

    const getFilteredSearch = () => {
        console.log(searchTerm)
        console.log(searchType)
        const filteredSearch = availableClasses.filter(course => {
          if(searchType === 'class_type'){
                console.log("Searching in:", searchType, `for ${searchTerm}`)
                return course.class_type.toLowerCase().includes(searchTerm.toLowerCase())
          } else if(searchType === 'class_start') {
                console.log("Searching in:", searchType, `for ${searchTerm}`)
                return course.class_start.toLowerCase().includes(searchTerm.toLowerCase())  
          } else if(searchType === 'class_duration') {
                console.log("Searching in:", searchType, `for ${searchTerm}`)
                return course.class_duration.toLowerCase().includes(searchTerm.toLowerCase())     
          } else if(searchType === 'class_location') {
                console.log("Searching in:", searchType, `for ${searchTerm}`)
                return course.class_location.toLowerCase().includes(searchTerm.toLowerCase())
          } else if(searchType === '') {
              return availableClasses
          }
        //   return course[searchType].toLowerCase().includes(searchTerm.toLowerCase())
        })
        return filteredSearch
      }
  
    return (
        <StyledClient >
            <div className='container'>
            <SearchBar setSearchTerm={setSearchTerm} setSearchType={setSearchType} />
                {getFilteredSearch().map((item, index) =>
                  <Reserve key={index} course={item} />
                )}
            </div>
        </StyledClient>
    )
}

export default Client