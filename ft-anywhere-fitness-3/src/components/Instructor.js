import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import StyledInstructor from "../styledComponents/StyledInstructor";

const Instructor = () => {
    const [classes, setClasses] = useState([]);
    const { push } = useHistory();


    return (
        <StyledInstructor>
            <div className='container' >
                <Link to='./class-form'> Post a Class </Link>
            </div>
        </StyledInstructor>
    )
}

export default Instructor;