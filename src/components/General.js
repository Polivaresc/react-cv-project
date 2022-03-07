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
                about: ''
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

    render() {
        return (
            <div>
                <form className="general-form">
                    <div>
                        <label htmlFor="full-name">Full name:</label>
                        <input type="text" id="full-name" name="fullname" placeholder="Thor Odinson" onChange={this.addInfo}/>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" placeholder="thor@thunder.com" onChange={this.addInfo}/>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" placeholder="123 456 789" onChange={this.addInfo}/>
                    </div>
                    <div>
                        <label htmlFor="about">About me:</label>
                        <input type="textarea" id="about" name="about" rows={4} onChange={this.addInfo}/>
                    </div>
                    <button type="submit" className="submit-button" onClick={this.handleSubmit}>Done</button>
                </form>
            </div>
        )
    }
}

const GeneralInfo = (props) => {
    const { generalInfo } = props

    return (
            <div className="general-info">
                <div className="main-info">
                    <h2>{generalInfo.fullname}</h2>
                    <div>Email: {generalInfo.email}</div>
                    <div>Phone: {generalInfo.phone}</div>
                </div>
                
                <div>
                    <h3 className="about-title">About me:</h3>
                    <div>{generalInfo.about}</div>
                </div>
            </div>
    )
}

export default General;