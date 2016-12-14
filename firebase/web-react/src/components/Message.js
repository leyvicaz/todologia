import React from 'react'

export default class extends React.Component {
    render() {
        const { name, text, photoUrl,  imageUrl } = this.props.data
        const backgroundImage = {backgroundImage:`url("${photoUrl}")`}
        // console.log(text, imageUrl)

        return (
            <div className="message-container visible" id="-K2ib4H77rj0LYewF7dP">
                <div className="spacing">
                    <div className="pic" style={photoUrl!==undefined?backgroundImage:{}}></div>
                </div>
                <div className="message">
                  {text}
                  {imageUrl && <img src={imageUrl}/>}
                </div>
                <div className="name">{name}</div>
            </div>
        )
    }
}
