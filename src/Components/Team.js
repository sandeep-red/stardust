import React from 'react'
import Topnavex from './Topnavex'
import Bottomnav from './Bottomnav';
import Mainnav from './Mainnav'
import  Teamdetails from './Teamdetails'
function Team() {
    const messagesEndRef = React.createRef()
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    return (
        <div>
             <div className="App">
                <Topnavex />
                <Mainnav scrollToBottom={scrollToBottom}/>
                <Teamdetails/>
                <Bottomnav />
                <div ref={messagesEndRef} />
             </div>
        </div>
    )
}

export default Team
