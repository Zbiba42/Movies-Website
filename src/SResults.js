import react from "react"
import { Link } from "react-router-dom"

const Results = ({movie})=>{
    
        return (<>
            <Link to={`/watch/${encodeURIComponent(movie.streaming)}`}style={{textDecoration:'none'}} >
                <div className="results">
                    <img src={movie.img}/>
                    <h4>{movie.title}</h4>
                    <h6>{movie.rating}</h6>

                    <h6>{movie.category}</h6>
                </div>
            </Link>
        </>)
   

}
export default Results 