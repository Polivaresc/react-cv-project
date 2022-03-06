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
                        <input type="text" id="full-name" placeholder="Full name"/>
                    </div>
                    <div>
                        <input type="email" id="email" placeholder="E-mail"/>
                    </div>
                    <div>
                        <input type="tel" id="phone" placeholder="Phone"/>
                    </div>
                    <div>
                        <label htmlFor="about">About me:</label>
                        <input type="textarea" id="about"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default General;