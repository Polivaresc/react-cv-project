import React,{ Component } from "react";

class General extends Component {
    constructor() {
        super()

        this.state = {
            showForm: true,
            general: {}
        }

        this.setGeneralInfo = this.setGeneralInfo.bind(this)
        this.editInfo = this.editInfo.bind(this)
    }

    setGeneralInfo(generalInfo) {
        this.setState({
            general: Object.assign(generalInfo),
            showForm: false
        })
    }

    editInfo() {
        this.setState({
            showForm: true
        })
    }

    render() {
        return (
            <div>
                {this.state.showForm && <GeneralForm setGeneralInfo={this.setGeneralInfo}/>}
                {!(this.state.showForm) && 
                    <div>
                        <GeneralInfo generalInfo={this.state.general}/>
                        <button type="button" className="submit-button" onClick={this.editInfo}>Edit Information</button>
                    </div>
                }
            </div>
        )
    }
}

class GeneralForm extends Component {
    constructor() {
        super()

        this.state = {
            generalInfo: {
                fullname: '',
                email: '',
                phone: '',
                picture: '',
                about: '',
            }
        }

        this.addInfo = this.addInfo.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    addInfo(e) {
        const newInfo = this.state.generalInfo
        newInfo[e.target.name] = e.target.value
        this.setState({generalInfo: newInfo})
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.setGeneralInfo(this.state.generalInfo)
    }

        /* if(!e.target.email) {
            errors.email = 'Your email is required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.email)) {
            errors.email = 'Please, enter a valid email address'
        } */

    render() {
        return (
            <div>
                <form className="general-form">
                    <div>
                        <label htmlFor="full-name">*Full name:</label>
                        <input type="text" id="full-name" name="fullname" placeholder="Thor Odinson" onChange={this.addInfo}/>
                    </div>
                    <div>
                        <label htmlFor="email">*E-mail:</label>
                        <input type="email" id="email" name="email" placeholder="thor@thunder.com" onChange={this.addInfo}/>
                    </div>
                    <div>
                        <label htmlFor="phone">*Phone:</label>
                        <input type="tel" id="phone" name="phone" placeholder="123 456 789" onChange={this.addInfo}/>
                    </div>
                    <div>
                        <label htmlFor="picture">Picture (link):</label>
                        <input type="url" id="picture" name="picture" onChange={this.addInfo}/>
                    </div>
                    <div>
                        <label htmlFor="about">About me:</label>
                        <textarea id="about" name="about" rows={4} onChange={this.addInfo}/>
                    </div>
                    <button type="submit" className="submit-button" onClick={this.handleSubmit}>Done</button>
                </form>
            </div>
        )
    }
}

const GeneralInfo = (props) => {
    const { generalInfo } = props
    let imageLink
    if(!generalInfo.picture) {
        imageLink = 'https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    } else {
        imageLink = generalInfo.picture
    }

    if(generalInfo.about) {
        return (
            <div className="general-info">
                <div className="main-info">
                    <h2>{generalInfo.fullname}</h2>
                    <div>Email: {generalInfo.email}</div>
                    <div>Phone: {generalInfo.phone}</div>
                </div>
                
                <div>
                    <img src={imageLink} alt="Your profile"></img>
                    <h3 className="about-title">About me:</h3>
                    <div>{generalInfo.about}</div>
                </div>
            </div>
        )
    }

    return (
        <div className="general-info">
            <div className="main-info">
                <h2>{generalInfo.fullname}</h2>
                <div>Email: {generalInfo.email}</div>
                <div>Phone: {generalInfo.phone}</div>
            </div>
            
            <div>
                <img src={imageLink} alt="Your profile"></img>
            </div>
        </div>
    )
}

export default General;