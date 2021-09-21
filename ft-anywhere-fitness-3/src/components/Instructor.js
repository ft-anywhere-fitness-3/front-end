import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import StyledInstructor from "../styledComponents/StyledInstructor";

const Instructor = () => {
    const [classes, setClasses] = useState([]);
    const { push } = useHistory();

    // useEffect(() => {
    //     axios.get('https://fakeapi.com/api/')
    //     .then(res => console.log(res.data))
    //     .catch(err => alert(err))
    // },[])

    return (
        <StyledInstructor>
            <div className='container' >
                <Link to='./class-form'> Post a Class </Link>
            </div>
        </StyledInstructor>
    )
}

export default Instructor;