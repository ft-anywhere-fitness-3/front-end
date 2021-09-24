import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import StyledClient from '../styledComponents/StyledClient';
import axiosWithAuth from "./utils/axiosWithAuth";
import Reserve from "./Reserve";

const Client = () => {
    const [availableClasses, setAvailableClasses] = useState([]);
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
        <StyledClient >
            <div className='container'>
                {/* <add Link to class search */}
                {availableClasses.map((item, index) =>
                  <Reserve key={index} course={item} />
                )}
            </div>
        </StyledClient>
    )
}

export default Client