import React,{ Component } from "react";

class Education extends Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label for="studies-title">Title:</label>
                        <input type="text" id="studies-title"/>
                    </div>
                    <div>
                        <label for="studies-institution">Institution:</label>
                        <input type="text" id="studies-institution"/>
                    </div>
                    <div>
                        <label for="studies-date">Finish date:</label>
                        <input type="date" id="studies-date" />
                    </div>
{/*                     <button type="submit" onClick={submitEducation}>Done</button>
 */}                </form>
            </div>
        )
    }
}

export default Education;