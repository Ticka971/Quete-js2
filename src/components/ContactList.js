import React from "react"

import Contact from "./Contact"

const user = [
    {name : "Devon Smith",
     avatar:"https://randomuser.me/api/portraits/men/35.jpg" },

    {name:"Donald Medina",
    avatar : "https://randomuser.me/api/portraits/men/98.jpg",
    online : "online"},
    

    {name:"Louise Roberts",
    avatar : "https://randomuser.me/api/portraits/women/86.jpg"},

    {name:"Holly Martin",
    avatar : "https://randomuser.me/api/portraits/women/84.jpg"},


    {name:"Micheal Payne",
    avatar : "https://randomuser.me/api/portraits/men/79.jpg",
    online: "online" } 
    
]

const ContactList = () => (
    <div>
    {user.map(item => (
        <Contact avatar={item.avatar} name={item.name} online={item.online}/>
    ))}
    </div>
)



export default ContactList