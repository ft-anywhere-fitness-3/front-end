import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import Course from './Course'
import StyledInstructor from "../styledComponents/StyledInstructor";
import axiosWithAuth from "./utils/axiosWithAuth";

const Instructor = (props) => {
    const { availableClasses, setAvailableClasses } = props;
    const { push } = useHistory();
    useEffect(() => {  
        axiosWithAuth()
        .get('/classes')
        .then(res => {
            console.log("Get Classes: ",res.data)
            setAvailableClasses(res.data)
        })
        .catch(err => alert(err))
    },[])

    return (
        <StyledInstructor>
            <div className='container' >
              <Link to='./class-form'> Post a Class </Link>
            <div className='classes-list-wrapper'>
                {availableClasses.map((item, index) =>
                  <Course key={index} course={item} availableClasses={availableClasses} setAvailableClasses={setAvailableClasses} />
                )}
            
            </div>
            </div>
        </StyledInstructor>
    )
}

export default Instructor;