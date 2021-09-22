import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';

import StyledClassForm from '../styledComponents/StyledClassForm';

const initialState = {
    class_name: '',
    class_type: '',
    class_start: '',
    class_duration: '',
    class_intensity: '',
    class_location: '',
    attendees: 0,
    class_max_size: ''
}

const ClassForm = (props) => {
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
        console.log("New Class:", classForm)
        setAvailableClasses([
            ...availableClasses,
            classForm
        ])
        push('/instructor');

    //     axios.post('https://fakeapi.com/api/', classForm)
    //         .then(res => {
    //             setAvailableClasses()
    //             push('/instructor');
    //         })
    //         .catch(err => alert(err))
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
                                    class_duration
                                    <select type='text' name='class_duration' id='class_duration' onChange={handleChange} value={classForm.class_duration}>
                                        <option value=''>--Select class_duration--</option>
                                        <option value='45 minutes' >45 minutes</option>
                                        <option value='1 hour' >1 hour</option>
                                        <option value='2 hours' >2 hours</option>
                                    </select>
                                </label>
                            </div>
                            <div className='select-div'>
                                <label>
                                    class_intensity Level
                                    <select type='text' name='class_intensity' id='class_intensity' onChange={handleChange} value={classForm.class_intensity}>
                                        <option value=''>--Select class_intensity--</option>
                                        <option value='Low class_intensity' >Low class_intensity</option>
                                        <option value='Medium class_intensity' >Medium class_intensity</option>
                                        <option value='High class_intensity' >High class_intensity</option>
                                        <option value='Extreme class_intensity' >Extreme class_intensity</option>
                                    </select>
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
                                    <input type='text' name='class_max_size' id='class_max_size' onChange={handleChange} value={classForm.class_max_size} />
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