import React from "react";

const Course = (props) => {
    const { course } = props;

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

    return(
        <div>
            <h2>{course.class_name}</h2>
            <p>{course.class_type}</p>
            <p>{course.class_startTime}</p>
            <p>{course.class_duration}</p>
            <p>{course.class_location}</p>
            <p>{course.attendees}/{course.class_max_size} attendees</p>
            <button onClick={handleEdit} >Edit</button>
            <button onClick={handleDelete} >Delete</button>
        </div>
    )
}

export default Course;