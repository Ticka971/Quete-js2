import React from "react"

import "./Contact.css"


class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state={
            status: false
        }
    }
    render(){
    return (
        <div className="Contact">
            <img className="avatar" src={this.props.avatar} alt={this.props.avatar} />

            <div className="status">
                <h4 className="name">{this.props.name}</h4>
                <div className="status-bloc" onClick={event => {
                        const newStatus = !this.state.status
                        this.setState({
                            status: newStatus
                        })
                    }}>
                    <p  className={this.state.status ? "status-online" : "status-offline"}></p>
                    <p className="status-text"> {this.state.status ? "Online" : "Offline"}</p>
                </div>
            </div>
        </div>
    )
}
}




export default Contact;