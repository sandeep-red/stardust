import React from 'react'
import './gallerydetails.css'
function Gallerydetails() {
    return (
        <div>
        <h2 className="h2">creator</h2>
        <div className="images">
            <img className="img" src={process.env.PUBLIC_URL +'/testpics/i1 (1).jpeg'}/>
            <img className="img" src={process.env.PUBLIC_URL +'/testpics/i1 (2).jpeg'}/>
            <img className="img" src={process.env.PUBLIC_URL +'/testpics/i1 (3).jpeg'}/>
            <img className="img" src={process.env.PUBLIC_URL +'/testpics/i1 (4).jpeg'}/>
        </div>
        <h2 className="h2">inspirer</h2>
        <div className="images">
            <img className="img" src={process.env.PUBLIC_URL +'/testpics/i1 (10).jpeg'}/>
            <img className="img" src={process.env.PUBLIC_URL +'/testpics/i1 (11).jpeg'}/>
            <img className="img" src={process.env.PUBLIC_URL +'/testpics/i1 (12).jpeg'}/>
            <img className="img" src={process.env.PUBLIC_URL +'/testpics/i1 (13).jpeg'}/>
        </div>
        </div>
    )
}

export default Gallerydetails
