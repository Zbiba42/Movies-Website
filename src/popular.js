import React, { useEffect, useState } from "react";
import Container from "./container";
import Slider from "./slider";
const axios = require('axios').default;

const Popular =()=>{
    let [popular,setPopular]=useState([])
    
    async function getpopular() {
        try {
            const response = await axios.get('http://localhost:5000/api/movies/getRandom12');
            let {data} = response
            setPopular(data) 
            
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        getpopular()
        
    },[])

   
      
    
return( 
    <Slider classname={'popularMain'} RowName='popular'>
        <div  className="hot">
            { 
                popular.map((elem)=>{
                    return <Container key={popular.indexOf(elem)} movie={elem} title={elem.title} img={elem.img} clas={'popular'}/>
                })
            }
        </div>
    </Slider>
)
        
    
}

export default Popular