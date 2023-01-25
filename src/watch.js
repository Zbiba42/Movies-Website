import { useParams } from "react-router-dom"
import Nav from "./nav"
import React from "react"

const Watch = ()=>{
    const {stream} = useParams()
    console.log(stream)
    
    return(
    <React.Fragment>
        <Nav/>
        <div className="iframeContainer">
        <iframe sandbox="allow-scripts" src={stream} frameborder="0" scrolling="no"></iframe>

        </div>

    </React.Fragment>

    )
}

export default Watch