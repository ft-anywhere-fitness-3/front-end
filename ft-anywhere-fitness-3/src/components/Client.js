import React, { useEffect, useState } from "react";
import StyledClient from '../styledComponents/StyledClient';
import axiosWithAuth from "./utils/axiosWithAuth";
import Reserve from "./Reserve";

const Client = () => {
    const [availableClasses, setAvailableClasses] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/classes')
        .then(res => {
            console.log("Get Classes: ",res.data)
            setAvailableClasses(res.data)
        })
        .catch(err => alert(err))
    },[availableClasses])

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