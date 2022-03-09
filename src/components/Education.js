import React,{ Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
    constructor() {
        super()

        this.state = {
            showForm: false,
            educationList: []
        }

        this.showEducationForm = this.showEducationForm.bind(this)
        this.addEducationToList = this.addEducationToList.bind(this)
        this.deleteEducation = this.deleteEducation.bind(this)
    }

    showEducationForm() {
        this.setState({
            showForm: true
        })
    }

    addEducationToList(education){
        this.setState({
            educationList: this.state.educationList.concat(education),
            showForm: false
        })
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
                {this.state.showForm && <EducationForm addEducationToList={this.addEducationToList}/>}
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
            errors: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.resetEducation = this.resetEducation.bind(this)
/*         this.validateForm = this.validateForm.bind(this)
 */    }

    handleChange(e) {
        const newEducation = this.state.education
        newEducation[e.target.name] = e.target.value
        this.setState({education: newEducation})
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.addEducationToList(this.state.education)    
        this.resetEducation()
/* 
        this.validateForm()

        if (Object.keys(this.state.errors).length) {
            this.setState({
                invalid: true
            })
        } else {
            this.setState({
                invalid: false
            })
    
            this.props.addEducationToList(this.state.education)    
        }
 */    }

    resetEducation() {
        this.setState({
            education: {
                title: '',
                institution: '',
                date: '',
                id: uniqid()
            }
        })
    }

/*     validateForm() {
        const err = {}
        if (!this.state.education.title) {
            err.title = 'This field is required'
        }
        if (!this.state.education.institution) {
            err.institution = 'This field is required'
        }
        this.setState({
            errors: Object.assign(err)
        })
    }
 */
    render() {
        return(
            <form>
                <div>
                    <label htmlFor="studies-title">Title:</label>
                    <input type="text" id="studies-title" name="title" onChange={this.handleChange}/>
{/*                     {this.state.invalid ? <Error errors={this.state.errors} name="title"/> : ''}
 */}                </div>
                <div>
                    <label htmlFor="studies-institution">Institution:</label>
                    <input type="text" id="studies-institution" name="institution" onChange={this.handleChange}/>
{/*                     {this.state.invalid ? <Error errors={this.state.errors} name="institution"/> : ''}
 */}                </div>
                <div>
                    <label htmlFor="studies-date">Finish date:</label>
                    <input type="date" id="studies-date" name="date" onChange={this.handleChange}/>
                </div>
                <button type="submit" className="submit-button" onClick={this.handleSubmit}>Done</button>
            </form>
    )}
}

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