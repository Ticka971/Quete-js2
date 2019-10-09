import React from "react"

import "./Contact.css"


function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt={props.avatar} />

            <div className="status">
                <h4 className="name">{props.name}</h4>
                <div className="status-bloc">
                    <p className={props.online ? "status-online" : "status-offline"}></p>
                    <p className="status-text"> {props.online ? "Online" : "Offline"}</p>
                </div>
            </div>
        </div>
    )
}




export default Contact;