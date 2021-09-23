import React, {useState, useEffect} from "react";
import axiosWithAuth from "./utils/axiosWithAuth";
import { useHistory, useParams } from "react-router";

const initialState = {
    attendees: 0,
    class_name: '',
    class_type: '',
    class_start: '',
    class_duration: '',
    class_level: 0,
    class_location: '',
    class_max_size: ''
}

const DeletedCourseModal = (props) => {
    const [deletedCourse, setDeletedClass] = useState(initialState);
    const {availableClasses, setAvailableClasses} = props;
    const { push } = useHistory();
    const { id } = useParams();

    useEffect(() => {
        axiosWithAuth()
        .get(`/classes/${id}`)
        .then(res => {
            setDeletedClass(res.data)
            // push('/instructor')
        })
        .catch(err => alert(err))
    },[])

    const handleDelete = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .delete(`/classes/${id}`)
        .then(res => {
            setAvailableClasses(availableClasses.filter(item => item.class_id !== id))
            push('/instructor')
        })
        .catch(err => alert(err))
    }

    return (
        <div className='modal'>
            <h2>Are you sure you want to delete this class?</h2>
            <p className='errMsg'>This action can not be undone.</p>
            <div className='class-card'>
            <h2>{deletedCourse.class_name}</h2>
            <p><strong>Class Type:</strong> {deletedCourse.class_type}</p>
            <p><strong>Start Time:</strong> {deletedCourse.class_start}</p>
            <p><strong>Duration:</strong> {deletedCourse.class_duration}</p>
            <p><strong>Location:</strong> {deletedCourse.class_location}</p>
            <p><strong>Attendees:</strong> {deletedCourse.attendees}/{deletedCourse.class_max_size}</p>
            </div>
            <div>
                <button className='md-button' onClick={() => push('/instructor')}>Back</button>
                <button id='delete' className='md-button' onClick={handleDelete} >Delete</button>
            </div>
        </div>
    )
}

export default DeletedCourseModal;