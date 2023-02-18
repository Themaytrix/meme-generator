import React from "react"
import memesData from "../memesData.js"


export default function Meme(){
    
    // declaring states
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [memeImage,setMemeImage] = React.useState(memesData)


    function getMemeImage(){
        const memesArray = memeImage.data.memes
        const randomNumber =Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url

        setMeme((prevMeme)=>({...prevMeme,randomImage: url}))
    }
    return(
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input"/>
                <input type="text" placeholder="Bottom text" className="form--input"/>
               <button onClick={getMemeImage}  className="form--button">generate meme!!!</button>
            </div>
            <div className="meme">
                <img  className="meme--image" src= {meme.randomImage} alt="" />
            </div>
        </main>
    )
}