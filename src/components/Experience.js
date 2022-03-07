import React,{ Component } from "react";
import uniqid from "uniqid";

class Experience extends Component {
    constructor() {
        super()

        this.state = {
            showForm: false,
            experienceList: []
        }

        this.showExperienceForm = this.showExperienceForm.bind(this)
        this.addExperienceToList = this.addExperienceToList.bind(this)
        this.deleteExperience = this.deleteExperience.bind(this)

    }

    showExperienceForm() {
        this.setState({
            showForm: true
        })
    }

    addExperienceToList(experience){
        this.setState({
            experienceList: this.state.experienceList.concat(experience),
            showForm: false
        })
    }

    deleteExperience(e) {
        this.setState({
            experienceList: this.state.experienceList.filter((experience) => experience.id !== e.target.dataset.id)
        })
    }

    render() {
        return (
            <div>
                <h3>Work experience:</h3>
                <button className="add-button" onClick={this.showExperienceForm}>Add Experience +</button>
                {this.state.showForm && <ExperienceForm addExperienceToList={this.addExperienceToList}/>}
                <ExperienceList experienceList={this.state.experienceList} deleteExperience={this.deleteExperience}/>
            </div>
        )
    }
}


class ExperienceForm extends Component {
    constructor() {
        super()

        this.state = {
            experience: {
                title: '',
                company: '',
                tasks: '',
                duration: '',
                id: uniqid()
            },
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const newExperience = this.state.experience
        newExperience[e.target.name] = e.target.value
        this.setState({experience: newExperience})
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.addExperienceToList(this.state.experience)
        this.setState({
            experience: {
                title: '',
                company: '',
                tasks: '',
                duration: '',
                id: uniqid()
        }})
    }

    render() {
        return(
            <form>
                <div>
                    <label htmlFor="job-title">Job Position:</label>
                    <input type="text" id="job-title" name="title" onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="company">Company:</label>
                    <input type="text" id="company" name="company" onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="main-tasks">Main tasks:</label>
                    <input type="textarea" id="main-tasks" name="tasks" onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="job-duration">Duration (years):</label>
                    <input type="number" id="job-duration" name="duration" onChange={this.handleChange}/>
                </div>
                <button type="submit" className="submit-button" onClick={this.handleSubmit}>Done</button>
            </form>
    )
    }
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