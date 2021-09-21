import React from "react";

const Course = (props) => {
    const { course } = props;

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

    return(
        <div>
            <h2>{course.name}</h2>
            <p>{course.type}</p>
            <p>{course.startTime}</p>
            <p>{course.duration}</p>
            <button onClick={handleEdit} >Edit</button>
            <button onClick={handleDelete} >Delete</button>
        </div>
    )
}

export default Course;