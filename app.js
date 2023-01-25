const express = require('express')
const app = express()
const cors = require('cors')
const {readFileSync , writeFileSync} =require('fs')
let movies = JSON.parse(readFileSync('./public/movies_.json','utf-8'))




const getAllCategories =()=>{
    let arr1=[]
    movies.forEach(element => {
        arr1.push(element.category)
    });
    let arr2 = [...new Set(arr1)];
    return(arr2)
}
app.use(cors())
app.use(express.json())
app.get('/api/movies',(req,res)=>{
  res.send(movies)
})

app.get('/api/movies/getRandom12',(req,res)=>{
    let arr = []
    for(let i=0;i<12;i++){
        let num = Math.floor(Math.random()*665)
        
        arr.push(movies[num]) 
    }
    res.send(arr)
})

app.get('/api/movies/getCategories',(req,res)=>{
    let arr2=getAllCategories()
    res.send(arr2)
})

app.get('/api/movies/get4Cat/:start',(req,res)=>{
    let arr2=getAllCategories()
    let start = Number(req.params.start)
    let arr3=arr2.slice(start,start+4)
    res.send(arr3)
})

app.get('/api/movies/getmoviesByCat/:array',(req,res)=>{
    let array = req.params.array.split(',');

    let results=[]
    array.map((cat)=>{
       movies.map((movie)=>{
            if(movie.category === cat){
               results.push(movie) 
            }
        })
    })
    
    res.send(results)
})


app.get('/api/movies/search/:title',(req,res)=>{
    let title = req.params.title
    let arr = []
    movies.filter((movie)=>{
        if(movie.title.toLowerCase().includes(title.toLowerCase())){
            arr.push(movie)
        }
        
    })
    res.send(arr)
})


app.get('/api/watchList',(req,res)=>{
    let watchList = JSON.parse(readFileSync('./watchList.json','utf-8'))
    if(watchList){
        res.status(200).json({succes : true , data : watchList})
    }
       
})

app.post('/api/watchList',(req,res)=>{
    const movie = req.body
    
    if(movie){
        
        let watchList = JSON.parse(readFileSync('./watchList.json','utf-8'))
        watchList.push(movie)
        writeFileSync('./watchList.json',JSON.stringify(watchList,undefined,1))

        res.status(200).json({succes : true , data : movie})
    }

    
    
})


app.delete('/api/watchList/:title',(req,res)=>{
    const movieName = req.params.title.trim()
    if(movieName){
        let watchList = JSON.parse(readFileSync('./watchList.json','utf-8'))
        watchList.forEach((movies)=>{
            if(movies.title.trim()===movieName){
               watchList.splice(watchList.indexOf(movies),1)
                writeFileSync('./watchList.json',JSON.stringify(watchList,undefined,1))
                res.status(200).json({succes : true , data : watchList})
            }
        })
    }

})
app.listen(5000,()=>{
    console.log('server is listening ');
})

