import React,{ Component } from "react";

class Education extends Component {
    constructor() {
        super()

        this.state = {
            showForm: false
        }

        this.showEducationForm = this.showEducationForm.bind(this)
    }

    showEducationForm() {
        this.setState({
            showForm: true
        })
    }

    render() {
        return (
            <div>
                <h3>Education:</h3>
                <button className="add-button" onClick={this.showEducationForm}>Add Education +</button>
                {this.state.showForm && <EducationForm/>}
            </div>
        )
    }
}

const EducationForm = () => {
    return(
            <form>
                <div>
                    <label htmlFor="studies-title">Title:</label>
                    <input type="text" id="studies-title"/>
                </div>
                <div>
                    <label htmlFor="studies-institution">Institution:</label>
                    <input type="text" id="studies-institution"/>
                </div>
                <div>
                    <label htmlFor="studies-date">Finish date:</label>
                    <input type="date" id="studies-date" />
                </div>
                <button type="submit" className="submit-button">Done</button>
        </form>
    )
}

export default Education;