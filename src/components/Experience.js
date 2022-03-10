import React,{ useState } from "react";
import uniqid from "uniqid";

const Experience = () => {
    const [showForm, setShowForm] = useState(false)
    const [experienceList, setExperienceList] = useState([])
    const [experience, setExperience] = useState({
        title: '',
        company: '',
        tasks: '',
        duration: '',
        id: uniqid()
    })
    const [errors, setErrors] = useState({
        title: '',
        company: '',
        tasks: '',
        duration: ''
    })
    const [validity, setValidity] = useState(true)


    const handleChange = (e) => {
        const keyName = Object.keys(experience).find((key) => key === e.target.name)
        if(e.target.name === keyName) {
            setExperience({...experience, [e.target.name]: e.target.value})
            setErrors({...errors, [e.target.name]: ''})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const currentErrors = {
            title: '',
            company: '',
            tasks: '',
            duration: ''
        }

        if (!experience.title) {
            currentErrors.title = 'Job position is required'
        } 

        if (!experience.company) {
            currentErrors.company = 'Company name is required'
        } 

        if (!experience.tasks) {
            currentErrors.tasks = 'Write at least one task'
        } 

        if (!experience.duration) {
            currentErrors.duration = 'Experience time is required'
        }

        setErrors(currentErrors)

        if(Object.values(currentErrors).filter((error) => !!error).length) {
            setValidity(false)
            setShowForm(true)    
        } else {
            setValidity(true)
            setShowForm(false)
            setExperienceList(experienceList.concat(experience))
            setExperience({
                title: '',
                company: '',
                tasks: '',
                duration: '',
                id: uniqid()
            })
        }        
    }

    const deleteExperience = (e) => {
        setExperienceList(experienceList.filter((experience) => experience.id !== e.target.dataset.id))
    }

    if (showForm) {
        return (
            <div>
                <h3>Work experience:</h3>
                <button className="add-button" onClick={() => setShowForm(true)}>Add Experience +</button>
                <form>
                    <div>
                        <label htmlFor="job-title">*Job Position:</label>
                        <input type="text" id="job-title" name="title" onChange={handleChange}/>
                        {!validity ? <Error errors={errors} name="title"/> : ''}
                    </div>
                    <div>
                        <label htmlFor="company">*Company:</label>
                        <input type="text" id="company" name="company" onChange={handleChange}/>
                        {!validity ? <Error errors={errors} name="company"/> : ''}
                    </div>
                    <div>
                        <label htmlFor="main-tasks">*Main tasks:</label>
                        <textarea id="main-tasks" name="tasks" onChange={handleChange}/>
                        {!validity ? <Error errors={errors} name="tasks"/> : ''}
                    </div>
                    <div>
                        <label htmlFor="job-duration">*Duration (years):</label>
                        <input type="number" step={0.5} id="job-duration" name="duration" onChange={handleChange}/>
                        {!validity ? <Error errors={errors} name="duration"/> : ''}
                    </div>
                    <button type="submit" className="submit-button" onClick={handleSubmit}>Done</button>
                </form>
            </div>
        )
    }
    return (
        <div>
            <h3>Work experience:</h3>
            <button className="add-button" onClick={() => setShowForm(true)}>Add Experience +</button>
            <ExperienceList experienceList={experienceList} deleteExperience={deleteExperience}/>
        </div>
    )
}


const Error = (props) => {
    const { errors, name } = props
    const message = errors[name]
    return(
        <div className="error-message">{message}</div>
    )
}

const ExperienceList = (props) => {
    const { experienceList, deleteExperience } = props

    return (
        <ul>
            {experienceList.map((experience) => {
                return <li key={experience.id} className="experience-li">
                            <div className="main-experience">
                                <span className="experience-info">
                                    <span className="li-title">{experience.title}</span>
                                    <span>{experience.company}</span>
                                    <span>{experience.duration} yr</span>
                                </span>
                                <span className="delete" data-id={experience.id} onClick={deleteExperience}>X</span>
                            </div>
                            <div className="li-tasks">Main tasks: {experience.tasks}</div>
                        </li>
            })}
        </ul> 
    )
}

export default Experience;