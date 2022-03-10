import React,{ useState } from "react";
import uniqid from "uniqid";

const Education = () => {
    const [showForm, setShowForm] = useState(false)
    const [educationList, setEducationList] = useState([])
    const [education, setEducation] = useState({
        title: '',
        institution: '',
        date: '',
        id: uniqid()
    })

    const handleChange = (e) => {
        const keyName = Object.keys(education).find((key) => key === e.target.name)
        if(e.target.name === keyName) {
            setEducation({...education, [e.target.name]: e.target.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowForm(false)
        setEducationList(educationList.concat(education))
        setEducation({
            title: '',
            institution: '',
            date: '',
            id: uniqid()
        })
    }

    const deleteEducation = (e) => {
        setEducationList(educationList.filter((education) => education.id !== e.target.dataset.id))
    }

    if (showForm) {
        return(
            <div>
                <h3>Education:</h3>
                <button className="add-button" onClick={() => setShowForm(true)}>Add Education +</button>
                <form>
                    <div>
                        <label htmlFor="studies-title">Title:</label>
                        <input type="text" id="studies-title" name="title" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="studies-institution">Institution:</label>
                        <input type="text" id="studies-institution" name="institution" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="studies-date">Finish date:</label>
                        <input type="date" id="studies-date" name="date" onChange={handleChange}/>
                    </div>
                    <button type="submit" className="submit-button" onClick={handleSubmit}>Done</button>
                </form>
            </div>
        )
    }
    return (
        <div>
            <h3>Education:</h3>
            <button className="add-button" onClick={() => setShowForm(true)}>Add Education +</button>
            <EducationList educationList={educationList} deleteEducation={deleteEducation}/>
        </div>
    )
}

       /*  this.state = {
            invalid: false,
            errors: {}
        }
 */

/* const Error = (props) => {
    const { errors, name } = props
    const message = errors[name]
    return(
        <div>{message}</div>
    )
}
 */
const EducationList = (props) => {
    const { educationList, deleteEducation } = props

    return (
        <ul>
            {educationList.map((education) => {
                return <li key={education.id}>
                            <span className="education-li">
                                <span className="li-title">{education.title}</span>
                                <span>{education.institution}</span>
                                <span>{education.date}</span>
                            </span>
                        
                            <span className="delete" data-id={education.id} onClick={deleteEducation}>X</span>
                        </li>
            })}
        </ul> 
    )
}

export default Education;