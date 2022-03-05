import React,{ Component } from "react";

class Experience extends Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label for="job-title">Job Position:</label>
                        <input type="text" id="job-title"/>
                    </div>
                    <div>
                        <label for="company">Company:</label>
                        <input type="text" id="company"/>
                    </div>
                    <div>
                        <label for="job-duration">Duration (years):</label>
                        <input type="number" id="job-duration" />
                    </div>
{/*                     <button type="submit" onClick={submitExperience}>Done</button>
 */}                </form>
            </div>
        )
    }
}

export default Experience;