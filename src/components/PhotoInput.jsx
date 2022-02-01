import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';



const PhotoInput = ({getSrc,setSrc,getInputs, setInputs}) => {
    
    function getData(){
        const src = image.current.value
        setInputs(src)

    }
    
    useEffect(() => {
        fetch("http://localhost:8080")
            .then(res => res.json())
            .then(data => setSrc(data))
    },[getSrc])
    const image = useRef()

  return (
    <div  >
        <form onSubmit={((e) => {
            e.preventDefault()
            fetch("http://localhost:8080/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({image: getInputs})
            })
                .then(res => res.json())
                .then(data => alert(data.msg))
        })} >
            
            <input type="text" onChange={getData} placeholder='Enter image url' ref={image} />
            <button>Submit</button>
        </form>
        <div style={{display: "flex", flexWrap: "wrap"}} >
            {getSrc && getSrc.map((item,i) => <Card getSrc={item.image} key={i} /> )}
        </div>
        
    </div>
  )
}

export default PhotoInput;
