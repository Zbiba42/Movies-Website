import React, { useState } from "react"
const Slider = ({children,classname,RowName})=>{    
    const [width,setWidth] = useState(window.innerWidth) 
    let factor1 = -94.45
    window.addEventListener('change', ()=>{
        setWidth(window.innerWidth)
    })
    if(width<=767){
        factor1 = -90
    }
    let containers
    
    const slide=(Row,direction)=>{

        if(width<=767){
            containers=document.querySelectorAll(`.${Row}`)
        
            if(direction==='right'){

                
                    
                    containers.forEach(Element=>{
                    
                        Element.style.transform=`translateX(${factor1}vw)`;
                        
                    })
                    factor1 -= 90
                    
                
                
            }else if(direction==='left'){
                factor1 += 90
                
                containers.forEach(Element=>{
                    
                    Element.style.transform=`translateX(${factor1}vw)`;
                    
                })
            }
        }else{

            containers=document.querySelectorAll(`.${Row}`)
            
            if(direction==='right'){
    
                
                    
                    containers.forEach(Element=>{
                     
                        Element.style.transform=`translateX(${factor1}vw)`;
                        
                    })
                    factor1 -= 94.45
                    
                
                
            }else if(direction==='left'){
                factor1 += 94.45
                
                containers.forEach(Element=>{
                    
                    Element.style.transform=`translateX(${factor1}vw)`;
                    
                })
            }
        }

    }
    return(
        <div className={classname} style={{position:'relative'}}>
            <h3>{RowName}</h3>
            <div className='left' onClick={()=>{slide(RowName,'left')}}>
                <i className="fa-solid fa-angle-left"></i>
            </div>
            {children}
            <div className="right" onClick={()=>{slide(RowName,'right')}}>
                <i className="fa-solid fa-angle-right"></i>
            </div>
            
            </div>
    )
}
export default Slider