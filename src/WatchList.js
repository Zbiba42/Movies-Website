import Nav from "./nav"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const WatchList = ()=>{
    let [WatchList , setWatchList] = useState([])
    const getList = async ()=>{
        let {data} = await axios.get('http://localhost:5000/api/watchList')
        setWatchList(data.data)
        
        
    }
    const removeFromWatch = async(movie)=>{
        let {data} = await axios.delete(`http://localhost:5000/api/watchList/${movie.title}`)
        setWatchList(data.data)
    }
    useEffect(()=>{
        getList()
    })
    
    return (
        <>
            <Nav/>
            <div>
            <h3>Watch List</h3>
            
                <div  className="wachContainer">
                    { 
                        WatchList.map((elem)=>{
                            return (
                                        <div className={`watchListMoviecont`} style={{backgroundImage:`url(${elem.img})`}}>
                                            
                                            <div className="title">
                                                <h4>{elem.title}</h4>
                                            </div> 
                                            <Link to={`/watch/${encodeURIComponent(elem.streaming)}`}style={{textDecoration:'none'}}>
                                                <div className="onhover">
                                                
                                                </div>
                                                
                                                <div className="play">
                                                    <i className="fa-regular fa-circle-play"></i>
                                                </div>
                                            </Link>
                                            <div className="remove" onClick={()=>{removeFromWatch(elem)}}>
                                                <h5>  <i className="fas fa-trash"></i></h5>
                                            </div>
                                        </div>                                
                            )
                        })
                    }
                </div>
           
            
            
            </div>
            
        </>
    )
}

export default WatchList