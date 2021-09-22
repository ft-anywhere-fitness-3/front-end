import React, { useState } from 'react';
import axiosWithAuth from './utils/axiosWithAuth';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';

import StyledClassForm from '../styledComponents/StyledClassForm';

const initialState = {
    class_name: '',
    class_type: '',
    class_start: '',
    class_duration: '',
    class_level: 0,
    class_location: '',
    class_max_size: ''
}

const ClassForm = (props) => {
    const instructorId = localStorage.getItem("instructor_id");
    console.log(instructorId)

    const [classForm, setclassForm] = useState(initialState);
    const { availableClasses, setAvailableClasses } = props;
    const { push } = useHistory();

    const handleChange = (e) => {
        setclassForm({
            ...classForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("New Class:", classForm)
        // setAvailableClasses([
        //     ...availableClasses,
        //     classForm
        // ])
        // push('/instructor');
        console.log({ ...classForm, class_max_size: parseInt(classForm.class_max_size), class_level: parseInt(classForm.class_level) })

        axiosWithAuth()
        .post('/classes', {
            ...classForm,
            instructor_id: instructorId,
            class_max_size: parseInt(classForm.class_max_size),
            class_level: parseInt(classForm.class_level)
        })
        .then(res => {
            setAvailableClasses([...availableClasses, res.data ])
            push('/instructor');
        })
        .catch(err => alert(err))
    }

    return (
        <StyledClassForm>
            <div className='container'>
                <div className='row'>
                    <h2>New Class</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='col'>
                            <div className='input-div'>
                                <label>
                                    Class Name
                                    <input type='text' name='class_name' id='class_name' onChange={handleChange} value={classForm.class_name} />
                                </label>
                            </div>
                            <div className='input-div'>
                                <label>
                                    Type
                                    <input type='text' name='class_type' id='class_type' onChange={handleChange} value={classForm.class_type} />
                                </label>
                            </div>
                            <div className='input-div'>
                                <label>
                                    Start Time
                                    <input type='text' name='class_start' id='class_start' onChange={handleChange} value={classForm.class_start} />
                                </label>
                            </div>
                            <div className='select-div'>
                                <label>
                                    Duration
                                    <select type='text' name='class_duration' id='class_duration' onChange={handleChange} value={classForm.class_duration}>
                                        <option value=''>--Select duration--</option>
                                        <option value='45 minutes' >45 minutes</option>
                                        <option value='1 hour' >1 hour</option>
                                        <option value='2 hours' >2 hours</option>
                                    </select>
                                </label>
                            </div>
                            <div className='input-div'>
                                <label>
                                    Intensity Level
                                    <input type='number' name='class_level' id='class_level' onChange={handleChange} value={classForm.class_level} />
                                </label>
                            </div>
                            <div className='input-div'>
                                <label>
                                    Location
                                    <input type='text' name='class_location' id='class_location' onChange={handleChange} value={classForm.class_location} />
                                </label>
                            </div>
                            <div className='input-div'>
                                <label>
                                    Max Capacity
                                    <input type='number' name='class_max_size' id='class_max_size' onChange={handleChange} value={classForm.class_max_size} />
                                </label>
                            </div>

                            <div className='back-div'>
                                <Link to='/instructor' className='button'>Back</Link>
                            </div>
                            <div className='input-div'>
                                <button className='md-button'>Post</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </StyledClassForm>
    )
}

export default ClassForm;