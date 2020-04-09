import React from 'react'
import Topnavex from './Topnavex'
import Bottomnav from './Bottomnav';
import Details from './Details'

import Mainnav from './Mainnav';
function Aboutus() {
    const messagesEndRef = React.createRef()
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    return (
        <div>
        <div className="App">
             <Topnavex/>
             <Mainnav scrollToBottom={scrollToBottom}/>
             <Details/>
          <Bottomnav/>
          <div ref={messagesEndRef} />
             </div>
            
        </div>
    )
}

export default Aboutus
