import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import StyledClient from '../styledComponents/StyledClient';

const Client = () => {
    const [classes, setClasses] = useState([]);
    const { push } = useHistory();

    return (
        <StyledClient >
            <div className='container'>
                {/* <add Link to class search */}
            </div>
        </StyledClient>
    )
}

export default Client