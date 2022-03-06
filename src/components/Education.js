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
    }

    showEducationForm() {
        this.setState({
            showForm: true
        })
    }

    addEducationToList(education){
        console.log(this)
        this.setState({
            educationList: this.state.educationList.concat(education),
        })
    }

    render() {
        return (
            <div>
                <h3>Education:</h3>
                <button className="add-button" onClick={this.showEducationForm}>Add Education +</button>
                {this.state.showForm && <EducationForm addEducationToList={this.addEducationToList}/>}
                <EducationList educationList={this.state.educationList}/>
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
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
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
    }

    render() {
        return(
            <form>
                <div>
                    <label htmlFor="studies-title">Title:</label>
                    <input type="text" id="studies-title" name="title" onChange={this.handleChange}/>
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

const EducationList = (props) => {
    const { educationList } = props

    return (
        <ul>
            {educationList.map((education) => {
                return <li key={education.id}>
                        <span>{education.title}</span>
                        <span>{education.institution}</span>
                        <span>{education.date}</span>
                    </li>
            })}
        </ul> 
    )
}

export default Education;