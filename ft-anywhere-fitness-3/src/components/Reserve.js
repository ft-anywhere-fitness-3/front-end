import React from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from "./utils/axiosWithAuth";

const Reserve = (props) => {
    const { course, punchPasses, setPunchPasses } = props;
    const { push } = useHistory();

    const handleAdd = () => {
        axiosWithAuth()
        .get(`/classes/${course.class_id}`)
		.then(res => {
            setPunchPasses([
                ...punchPasses,
                res.data.class_type
            ])
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
            <button className='md-button' onClick={() => push(`/class-form/edit/${course.class_id}`)} >Reserve</button>
            </div>
        </div>
    )
}

export default Reserve;