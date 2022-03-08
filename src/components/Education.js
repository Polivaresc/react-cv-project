import React,{ Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
    constructor() {
        super()

        this.state = {
            showForm: false,
            educationList: [],
            validForm: false
        }

        this.showEducationForm = this.showEducationForm.bind(this)
        this.addEducationToList = this.addEducationToList.bind(this)
        this.deleteEducation = this.deleteEducation.bind(this)
    }

    showEducationForm(valid) {

        this.setState({
            validForm: valid
        })

        if(!this.state.valid) {
            this.setState({
                showForm: true
            })
        }
    }

    addEducationToList(education, valid){

        this.setState({
            validForm: valid
        })

        if(this.state.validForm) {
            this.setState({
                educationList: this.state.educationList.concat(education),
                showForm: false
            })
        }
    }

    deleteEducation(e) {
        this.setState({
            educationList: this.state.educationList.filter((education) => education.id !== e.target.dataset.id)
        })
    }

    render() {
        return (
            <div>
                <h3>Education:</h3>
                <button className="add-button" onClick={this.showEducationForm}>Add Education +</button>
                {this.state.showForm && <EducationForm addEducationToList={this.addEducationToList} valid={this.isValid}/>}
                <EducationList educationList={this.state.educationList} deleteEducation={this.deleteEducation}/>
            </div>
        )
    }
}

class EducationForm extends Component {
    constructor() {
        super()

        this.state = {
            education: {
                title: '',
                institution: '',
                date: '',
                id: uniqid()
            },
            invalid: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.validateForm = this.validateForm.bind(this)
        this.isValid = this.isValid.bind(this)
    }

    handleChange(e) {
        const newEducation = this.state.education
        newEducation[e.target.name] = e.target.value
        this.setState({education: newEducation})
    }

    handleSubmit(e) {
        e.preventDefault()

        this.props.addEducationToList(this.state.education)
        this.setState({
            education: {
                title: '',
                institution: '',
                date: '',
                id: uniqid()
        }})

        if(this.validateForm()) {
            this.setState({
                invalid: true
            })
        }
    }

    validateForm() {
        const errors = {}

        if(!this.state.education.title) {
            errors.title = 'This field is required'
        } 

        /* if(!e.target.email) {
            errors.email = 'Your email is required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.email)) {
            errors.email = 'Please, enter a valid email address'
        } */

        if(!this.state.education.institution) {
            errors.institution = 'This field is required'
        }

        return errors
    }

    isValid() {
        return !this.state.invalid
    }

    render() {
        return(
            <form>
                <div>
                    <label htmlFor="studies-title">Title:</label>
                    <input type="text" id="studies-title" name="title" onChange={this.handleChange}/>
                    {!this.isValid() ? <Error validateForm={this.validateForm} name="title"/> : ''}
                </div>
                <div>
                    <label htmlFor="studies-institution">Institution:</label>
                    <input type="text" id="studies-institution" name="institution" onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="studies-date">Finish date:</label>
                    <input type="date" id="studies-date" name="date" onChange={this.handleChange}/>
                </div>
                <button type="submit" className="submit-button" onClick={this.handleSubmit}>Done</button>
            </form>
    )}
}

const Error = (props) => {
    const { validateForm, name } = props
    const errors = validateForm()
    const message = errors[name]
    return(
        <div>{message}</div>
    )
}

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