import { Link } from "react-router-dom"
import './style.css'
import axios from "axios"

const Container = ({movie,img,title,clas})=>{
    const addToWatchList = async ()=>{
       let {data}= await axios.post('http://localhost:5000/api/watchList',movie)
       if(data.succes){
        alert('sheeeeeeeeeeeeesh')
       }
    }
    return(   
            <div className={`container ${clas}`} style={{backgroundImage:`url(${img})`}}>
               
                <div className="title">
                    <h4>{title}</h4>
                </div> 
                <Link to={`/watch/${encodeURIComponent(movie.streaming)}`}style={{textDecoration:'none'}}>
                    <div className="onhover">
                    
                    </div>
                    
                    <div className="play">
                        <i className="fa-regular fa-circle-play"></i>
                    </div>
                </Link>
                <div className="add" onClick={addToWatchList}>
                    <h5>Add to WatchList</h5>
                </div>
            </div>
            
        
    )
}
export default Container