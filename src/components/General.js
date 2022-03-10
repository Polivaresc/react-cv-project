import React,{ useState } from "react";


const General = () => {
    const [showForm, setShowForm] = useState(true)
    const [generalInfo, setGeneralInfo] = useState({
        fullname: '',
        email: '',
        phone: '',
        picture: '',
        about: ''
    })
    
    const handleChange = (e) => {
        const keyName = Object.keys(generalInfo).find((key) => key === e.target.name)
        if(e.target.name === keyName) {
            setGeneralInfo({...generalInfo, [e.target.name]: e.target.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowForm(false)
    }

    const editInfo = () => {
        setShowForm(true)
    }

    if (showForm) {
        return (
            <div>
                <form className="general-form">
                    <div>
                        <label htmlFor="full-name">*Full name:</label>
                        <input type="text" id="full-name" name="fullname" placeholder="Thor Odinson" value={generalInfo.fullname} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">*E-mail:</label>
                        <input type="email" id="email" name="email" placeholder="thor@thunder.com" value={generalInfo.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="phone">*Phone:</label>
                        <input type="tel" id="phone" name="phone" placeholder="123 456 789" value={generalInfo.phone} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="picture">Picture (link):</label>
                        <input type="url" id="picture" name="picture" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="about">About me:</label>
                        <textarea id="about" name="about" rows={4} value={generalInfo.about} onChange={handleChange}/>
                    </div>
                    <button type="submit" className="submit-button" onClick={handleSubmit}>Done</button>
                </form>
            </div>
        )
    } 
    return (
        <div>
            <GeneralInfo generalInfo={generalInfo}/>
            <button type="button" className="submit-button" onClick={editInfo}>Edit Information</button>
        </div>
    )
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