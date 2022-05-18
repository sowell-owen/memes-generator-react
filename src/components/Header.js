import React from "react"
import { BsEmojiLaughingFill } from 'react-icons/bs'

export default function Header() {
    return (
        <div className="header">
            <h3 className="project-name">Meme Generator</h3>
            <BsEmojiLaughingFill className="icon-meme" />
        </div>
    )
}