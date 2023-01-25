import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Results from "./SResults"
const Nav = ()=>{
    const [width,setWidth] = useState(window.innerWidth) 
    const [results,SetResults] = useState([])

    const toggleFade = ()=>{
        if(document.querySelector('.menu').style.display==='' || document.querySelector('.menu').style.display === 'none'){
            document.querySelector('.menu').style.display = 'block'
            document.querySelector('.menu').style.animation = 'fadein 1s forwards'
        }else{
            document.querySelector('.menu').style.animation = 'fadeout 1s forwards'
            setTimeout(() => {
                document.querySelector('.menu').style.display = 'none'
            }, 1000);
        }
    }
    const Search =async ()=>{
        
        let search = document.querySelector('.sirch').value
        const movies= await fetch(`http://localhost:5000/api/movies/search/${search}`)
        const data = await movies.json()
        SetResults(data)
        
        

    }
    
    useEffect(()=>{
        document.addEventListener('keydown',(e)=>{
            if(e.key === 'Escape'){
                document.querySelector('.searchResults').style.height='0px'

            }
            
            
        })
        window.addEventListener('resize', ()=>{
            setWidth(window.innerWidth)
            
        })
    })
    if(width<=767){
        return(
            <React.Fragment>
                <div className="nav" >
                    <Link to="/" style={{margin:0}}><i className="fa-solid fa-play"></i></Link>
                    
                    
                    <input type="text" className="sirch" id="search" placeholder="Search for movies or TV shows" onClick={()=>{document.querySelector('.searchResults').style.height='300px'}} autoComplete="off" onKeyDown={(e)=>{e.key ==='Enter'?Search():console.log('error')}}  onChange={Search}/>
                    <i className="fa-solid fa-magnifying-glass" onClick={Search}></i>
                    
                    <div className="barr">
                        <button className="sign">Login</button>
                        <i className="fa-solid fa-bars" onClick={toggleFade}></i>
                    </div>
                </div>
                <div className="menu">
                        <Link to="/">Home</Link>
                        <Link to="/new">New</Link>
                        <Link to="/WatchList">WatchList</Link>
                        <a href="#">About us</a>
                        <a href="#">Apps</a>
                        <a href="#">FAQ</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>  
                </div>
                <div className="searchResults" >
                    {results.map((movie)=>{
                        return <Results movie={movie}/>
                    })}
                </div>
            </React.Fragment>
        )
    }else{

        
        
        return (
            <React.Fragment>
                <div className="nav" >
                    <i className="fa-solid fa-play"></i>
                    <Link to="/">Home</Link>
                    <Link to="/new">New</Link>
                    <Link to="/Popular">Popular</Link>
                    <Link to="/WatchList">WatchList</Link>
                    <input type="text" className="sirch" id="search" placeholder="Search for movies or TV shows" onClick={()=>{document.querySelector('.searchResults').style.height='300px'}} autoComplete="off" onKeyDown={(e)=>{e.key ==='Enter'?Search():console.log('error')}} onBlur={()=>{document.querySelector('.searchResults').style.height='0px'}}/>
                    <i className="fa-solid fa-magnifying-glass" onClick={Search}></i>
                    <div className="barr">
                        <button className="sign">sign In</button>
                        <i className="fa-solid fa-bars" onClick={toggleFade}></i>
                    </div>
                </div>
                <div className="menu">
                        <a href="#">About us</a>
                        <a href="#">Apps</a>
                        <a href="#">FAQ</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>  
                </div>
                <div className="searchResults" >
                    {results.map((movie)=>{
                        return <Results movie={movie}/>
                    })}
                </div>
            </React.Fragment>
       )
    }
}
export default Nav