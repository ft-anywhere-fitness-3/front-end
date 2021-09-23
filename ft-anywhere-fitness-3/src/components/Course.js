import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from "./utils/axiosWithAuth";

const Course = (props) => {
    const { course, availableClasses, setAvailableClasses } = props;
    // const [editedCourse, setEditedCourse] = useState(course);
    const { push } = useHistory();

    // useEffect(() => {
        
    // },[editedCourse])

    const handleEdit = () => {
       push(`/class-form/edit/${course.class_id}`)
    }

    const handleDelete = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .delete(`/classes/${course.class_id}`)
        .then(res => {
            setAvailableClasses(availableClasses.filter(item => item.class_id !== course.class_id))
            // push('/instructor')
        })
        .catch(err => alert(err))
    }

    return(
        <div>
        <div className='class-card'>
            <h2>{course.class_name}</h2>
            <p><strong>Class Type:</strong> {course.class_type}</p>
            <p>{course.class_startTime}</p>
            <p><strong>Duration:</strong> {course.class_duration}</p>
            <p><strong>Location:</strong> {course.class_location}</p>
            <p><strong>Attendees:</strong> {course.attendees}/{course.class_max_size}</p>
            </div>
            <button className='md-button' onClick={handleEdit} >Edit</button>
            <button className='md-button' onClick={handleDelete} >Delete</button>
        </div>
    )
}

export default Course;