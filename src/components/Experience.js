import React,{ Component } from "react";

class Experience extends Component {
    constructor() {
        super()

        this.state = {
            showForm: false
        }

        this.showExperienceForm = this.showExperienceForm.bind(this)
    }

    showExperienceForm() {
        this.setState({
            showForm: true
        })
    }

    render() {
        return (
            <div>
                <h3>Work experience:</h3>
                <button className="add-button" onClick={this.showExperienceForm}>Add Experience +</button>
                {this.state.showForm && <ExperienceForm/>}
            </div>
        )
    }
}

const ExperienceForm = () => {
    return(
            <form>
                <div>
                    <label htmlFor="job-title">Job Position:</label>
                    <input type="text" id="job-title"/>
                </div>
                <div>
                    <label htmlFor="company">Company:</label>
                    <input type="text" id="company"/>
                </div>
                <div>
                    <label htmlFor="main-tasks">Main tasks:</label>
                    <input type="textarea" id="main-tasks"/>
                </div>
                <div>
                    <label htmlFor="job-duration">Duration (years):</label>
                    <input type="number" id="job-duration" />
                </div>
                <button type="submit" className="submit-button">Done</button>
            </form>
    )
}

export default Experience;