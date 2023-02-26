import React from "react"



export default function Meme(){
    
    // declaring states
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
   
    const [memeImage,setMemeImage] = React.useState([])

    function handleChange(event){
        const {name,value} = event.target
        setMeme( prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    function getMemeImage(){
        const randomNumber =Math.floor(Math.random() * memeImage.length)
        const url = memeImage[randomNumber].url

        setMeme((prevMeme)=>({...prevMeme,randomImage: url}))
    }

    //Effect
    React.useEffect(
        ()=>{
            fetch("https://api.imgflip.com/get_memes")
            .then( res => res.json())
            .then(data => setMemeImage(data.data.memes))
        },[]
    )
    return(
        <main>
            <div className="form">
                <input type="text"
                 placeholder="Top text" 
                 className="form--input"
                 onChange={handleChange}
                 value={meme.topText}
                 name="topText"/>
                <input type="text"
                 placeholder="Bottom text" 
                 className="form--input"
                 onChange={handleChange}
                 value={meme.bottomText}
                 name="bottomText"/>
               <button onClick={getMemeImage}  className="form--button">generate meme!!</button>
            </div>
            <div className="meme">
                <img  className="meme--image" src= {meme.randomImage} alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}