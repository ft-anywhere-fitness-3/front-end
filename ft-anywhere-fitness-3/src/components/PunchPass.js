import React from "react";

const PunchPass = (props) => {
    const { punchPass, handleDelete } = props;

    const punchPassDelete = () => {
        handleDelete(punchPass)
    }

    return(
        <div>
        <div className='class-card'>
            <div className='header-box'>
                <h2>{punchPass}</h2>
                <h2 className='errMsg' onClick={punchPassDelete} >-</h2>
            </div>
            </div>
        </div>
    )
}

export default PunchPass;