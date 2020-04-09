import React from 'react'
import Topnavex from './Topnavex'
import Bottomnav from './Bottomnav';
import '../App.css'
import Mainnav from './Mainnav';
import Gallerydetails from './Gallerydetails'
function Gallery() {
    const messagesEndRef = React.createRef()
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    return (
        <div>
            <div className="App">
                <Topnavex />
                <Mainnav scrollToBottom={scrollToBottom}/>
                <Gallerydetails/>
                <Bottomnav />
                <div ref={messagesEndRef} />
             </div>
        </div>
    )
}

export default Gallery
