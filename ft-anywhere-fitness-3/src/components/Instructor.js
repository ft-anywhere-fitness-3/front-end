import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Course from './Course'
import StyledInstructor from "../styledComponents/StyledInstructor";
import axiosWithAuth from "./utils/axiosWithAuth";
import PunchPass from "./PunchPass";

const Instructor = (props) => {
    const { availableClasses, setAvailableClasses } = props;
    const [punchPasses, setPunchPasses] = useState([]);

    useEffect(() => {  
        axiosWithAuth()
        .get('/classes')
        .then(res => {
            console.log("Get Classes: ",res.data)
            setAvailableClasses(res.data)
        })
        .catch(err => alert(err))
    },[])

    const handleDelete = (punchPass) => {
        setPunchPasses(punchPasses.filter((type) => type !== punchPass))
    }

    return (
        <StyledInstructor>
            <div className='container' >
              <Link to='./class-form'> Post a Class </Link>
            <div className='classes-list-wrapper'>
                {availableClasses.map((item, index) =>
                  <Course key={index} course={item} punchPasses={punchPasses} setPunchPasses={setPunchPasses} />
                )}
            </div>
            <div className='punchPasses'>
                <h2>Punch Passes</h2>
                {punchPasses.map((item, index) =>
                  <PunchPass key={index} punchPass={item} handleDelete={handleDelete}/>
                )}
            </div>
            </div>
        </StyledInstructor>
    )
}

export default Instructor;