import React, { useEffect, useState } from "react";
import Container from "./container";
import Slider from "./slider";


const AllCategories = ()=>{
    const [num,setNum] = useState(0)
    const [Categories,setCategories] = useState([])
    const [movies,setMovies] = useState([])

    const getCats = async (num)=>{
        const Cats= await fetch(`http://localhost:5000/api/movies/get4Cat/${num}`)
        const data = await Cats.json()
        setCategories(data)
    }

    const getMoviesByCat = async (categoryArray)=>{
        const movies= await fetch(`http://localhost:5000/api/movies/getmoviesByCat/${categoryArray}`)
        const data = await movies.json()
        setMovies(data)
    }

    useEffect(()=>{
        getCats(num)
        
    },[num])

    let string=''
    Categories.forEach(cat=>{
       string += `${cat},`
    })
    
    useEffect(()=>{
        getMoviesByCat(string)
    },[string])
   
    
    let buttonUp 
    if(num>=4){
        if(num==4){
            buttonUp= <i className="fas fa-angle-double-up fa-2xl" onClick={()=>{setNum(num-4) ;document.documentElement.scrollTop = 0; document.querySelector('.popularMain').style.display='block'}}></i>
        }else{
            buttonUp= <i className="fas fa-angle-double-up fa-2xl" onClick={()=>{setNum(num-4) ;document.documentElement.scrollTop = 0}}></i>
        }
    }
    let buttonDown
    if(num<=15){
        buttonDown= <i className="fas fa-angle-double-down fa-2xl" onClick={()=>{setNum(num+4) ;document.documentElement.scrollTop = 0; document.querySelector('.popularMain').style.display='none'}}></i>
    }
    return(<React.Fragment>
        {buttonUp}
        {
            Categories.map((Category)=>{
                return(
                    <Slider classname={Category+'Main'} RowName={Category} key={Categories.indexOf(Category)}>
                        <div  className="hot">
                            {
                                movies.map((movi)=>{
                                    if(movi.category===Category){
                                        return <Container key={movies.indexOf(movi)} movie={movi} title={movi.title} img={movi.img} clas={Category}/>
                                    }
                                })
                            }
                        </div>
                    </Slider>
                )
            })
        }
        {buttonDown}
    </React.Fragment>)
    
    
         
           
       
        
   
}

export default AllCategories

