import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from "./utils/axiosWithAuth";

const Reserve = (props) => {
    const { course } = props;
    const { push } = useHistory();
    const [reserved, setReserved] = useState(course);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleReserve = () => {
        console.log(reserved.class_max_size, parseInt(reserved.attendees))
        if(reserved.class_max_size === parseInt(reserved.attendees)){
            console.log(reserved.class_max_size,'/',parseInt(reserved.attendees))
        } else {
            axiosWithAuth()
            .post(`/classes/${reserved.class_id}`, {class_id: reserved.class_id, user_id: 1})
            .then(res => {
                setButtonDisabled(true)
                // console.log(res)
            })
                .then(
                    axiosWithAuth()
                    .get(`/classes/${course.class_id}`)
                    .then(res => {
                    setReserved(res.data)
                })
                    .catch(err => console.log(err)))
            .catch(err => console.log(err))
        }
    }

    const handleCancel = () => {
        axiosWithAuth()
        .delete(`/classes/${reserved.class_id}`, {class_id: reserved.class_id, user_id: 1})
		.then(res => {
            setButtonDisabled(false)
            console.log(res)
        })
        .then(
            axiosWithAuth()
            .get(`/classes/${course.class_id}`)
            .then(res => {
            setReserved(res.data)
        })
            .catch(err => console.log(err)))
        .catch(err => console.log(err))
    }

    return(
        <div>
        <div className='class-card center'>
            <h2>{reserved.class_name}</h2>
            <p><strong>Class Type:</strong> {reserved.class_type}</p>
            <p><strong>Start Time:</strong> {reserved.class_start}</p>
            <p><strong>Duration:</strong> {reserved.class_duration}</p>
            <p><strong>Location:</strong> {reserved.class_location}</p>
            <p><strong>Attendees:</strong> {reserved.attendees}/{reserved.class_max_size}</p>
            <div className='button-box' >
            <button disabled={buttonDisabled} className='md-button' onClick={handleReserve}>Reserve</button>
            {buttonDisabled && <button className='md-button' onClick={handleCancel}>Cancel</button>}
            </div>
            </div>
        </div>
    )
}

export default Reserve;