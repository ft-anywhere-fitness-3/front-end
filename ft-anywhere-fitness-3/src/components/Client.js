import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "./utils/axiosWithAuth";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import StyledClient from '../styledComponents/StyledClient';
import Course from './Course'

const Client = (props) => {
    const { availableClasses, setAvailableClasses } = props;
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
        <StyledClient >
            <div className='container'>
                {availableClasses.map((item, index) =>
                    <Course key={index} course={item} availableClasses={availableClasses} setAvailableClasses={setAvailableClasses} />
                )}
            </div>
        </StyledClient>
    )
}

export default Client