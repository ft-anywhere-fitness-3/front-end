import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';

import StyledClassForm from '../styledComponents/StyledClassForm';

const initialState = {
    name: '',
    type: '',
    startTime: '',
    duration: '',
    intensity: '',
    location: '',
    attendeesCount: 0,
    maxCapacity: ''
}

const ClassForm = (props) => {
    const [classForm, setclassForm] = useState(initialState);
    const { setAvailableClasses, availableClasses } = props;
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
                                    <input type='text' name='name' id='name' onChange={handleChange} value={classForm.name} />
                                </label>
                            </div>
                            <div className='input-div'>
                                <label>
                                    Type
                                    <input type='text' name='type' id='type' onChange={handleChange} value={classForm.type} />
                                </label>
                            </div>
                            <div className='input-div'>
                                <label>
                                    Start Time
                                    <input type='text' name='startTime' id='startTime' onChange={handleChange} value={classForm.startTime} />
                                </label>
                            </div>
                            <div className='select-div'>
                                <label>
                                    Duration
                                    <select type='text' name='duration' id='duration' onChange={handleChange} value={classForm.duration}>
                                        <option value=''>--Select Duration--</option>
                                        <option value='45 minutes' >45 minutes</option>
                                        <option value='1 hour' >1 hour</option>
                                        <option value='2 hours' >2 hours</option>
                                    </select>
                                </label>
                            </div>
                            <div className='select-div'>
                                <label>
                                    Intensity Level
                                    <select type='text' name='intensity' id='intensity' onChange={handleChange} value={classForm.intensity}>
                                        <option value=''>--Select Intensity--</option>
                                        <option value='Low Intensity' >Low Intensity</option>
                                        <option value='Medium Intensity' >Medium Intensity</option>
                                        <option value='High Intensity' >High Intensity</option>
                                        <option value='Extreme Intensity' >Extreme Intensity</option>
                                    </select>
                                </label>
                            </div>
                            <div className='input-div'>
                                <label>
                                    Location
                                    <input type='text' name='location' id='location' onChange={handleChange} value={classForm.location} />
                                </label>
                            </div>
                            <div className='input-div'>
                                <label>
                                    Max Capacity
                                    <input type='text' name='maxCapacity' id='maxCapacity' onChange={handleChange} value={classForm.maxCapacity} />
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