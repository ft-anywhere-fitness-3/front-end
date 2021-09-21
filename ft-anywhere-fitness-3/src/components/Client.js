import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Client = () => {
    const [classes, setClasses] = useState([]);
    const { push } = useHistory();

    return (
        <Client>
            <div className='container'>
                {/* <add Link to class search */}
            </div>
        </Client>
    )
}

export default Client