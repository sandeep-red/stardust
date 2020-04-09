import React from 'react'
import Topnavex from './Topnavex'
import Bottomnav from './Bottomnav';
import '../App.css'
import Mainnav from './Mainnav';
function Home() {
    const messagesEndRef = React.createRef()
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    return (
        <div>
             <div className="App">
             <Topnavex />
             <Mainnav scrollToBottom={scrollToBottom}/>
             
          <Bottomnav />
          <div ref={messagesEndRef} />
             </div>
        </div>
    )
}

export default Home
