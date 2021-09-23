import React from "react";

const Course = (props) => {
    const { course } = props;

    const handleEdit = () => {

    }

    const handleDelete = () => {

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