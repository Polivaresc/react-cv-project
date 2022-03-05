import React,{ Component } from "react";

class General extends Component {
    constructor() {
        super()

        this.state = {
            fullname: '',
            email: '',
            phone: '',
            about: ''
        }
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label for="full-name">Full name:</label>
                        <input type="text" id="full-name"/>
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="email" id="email"/>
                    </div>
                    <div>
                        <label for="phone">Phone:</label>
                        <input type="tel" id="phone"/>
                    </div>
                    <div>
                        <label for="about">About me:</label>
                        <input type="textarea" id="about"/>
                    </div>
{/*                     <button type="submit" onClick={submitGeneral}>Done</button>
 */}                </form>
            </div>
        )
    }
}

export default General;