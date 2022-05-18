import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    const randomMeme = () => {
        const rndmNumber = Math.floor(Math.random() * allMemes.length)
        const src = allMemes[rndmNumber].url
        setMeme(prevMeme => (
            {
                ...prevMeme,
                randomImage: src
            }
        ))
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setMeme(prevMeme => (
            {
                ...prevMeme,
                [name]: value
            }
        ))
    }

    return (
        <div className="meme-container">
            <form>
                <div className="input-container">
                    <input
                        className="img-top-text"
                        type='text'
                        placeholder="Top text..."
                        name='topText'
                        value={meme.topText}
                        onChange={handleChange}
                    ></input>

                    <input
                        className="img-bottom-text"
                        type='text'
                        placeholder="Bottom text..."
                        name='bottomText'
                        value={meme.bottomText}
                        onChange={handleChange}
                    ></input>

                </div>
                <button className="form-button" type='button' onClick={randomMeme}> Get a new meme image 🐸</button>
            </form>

            <div className="image-container">
                <img src={meme.randomImage} className='meme-image'></img>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}