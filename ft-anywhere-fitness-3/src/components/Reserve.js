import React from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from "./utils/axiosWithAuth";

const Reserve = (props) => {
    const { course } = props;
    const { push } = useHistory();

    const handleClick = () => {
        axiosWithAuth()
        .post(`/classes/${course.class_id}`, {class_id: course.class_id, user_id: 1})
		.then(res => {
            console.log(res)
        })
		.catch(err => console.log(err))
    }

    return(
        <div>
        <div className='class-card center'>
            <h2>{course.class_name}</h2>
            <p><strong>Class Type:</strong> {course.class_type}</p>
            <p><strong>Start Time:</strong> {course.class_start}</p>
            <p><strong>Duration:</strong> {course.class_duration}</p>
            <p><strong>Location:</strong> {course.class_location}</p>
            <p><strong>Attendees:</strong> {course.attendees}/{course.class_max_size}</p>
            <button className='md-button' onClick={handleClick}>Reserve</button>
            </div>
        </div>
    )
}

export default Reserve;