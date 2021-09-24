import React from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from "./utils/axiosWithAuth";

const Course = (props) => {
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
        <div className='class-card'>
            <div className='header-box'>
                <h2>{course.class_name}</h2>
                <h2 className='add' onClick={handleAdd} >+</h2>
            </div>
            <p><strong>Class Type:</strong> {course.class_type}</p>
            <p><strong>Start Time:</strong> {course.class_start}</p>
            <p><strong>Duration:</strong> {course.class_duration}</p>
            <p><strong>Location:</strong> {course.class_location}</p>
            <p><strong>Attendees:</strong> {course.attendees}/{course.class_max_size}</p>
            </div>
            <button className='md-button' onClick={() => push(`/class-form/edit/${course.class_id}`)} >Edit</button>
            <button className='md-button' onClick={() => push(`/class-form/delete/${course.class_id}`)} >Delete</button>
        </div>
    )
}

export default Course;