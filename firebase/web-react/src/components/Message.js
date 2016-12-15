import React from 'react'

export default React.createClass ({
    componentDidMount(){
      const { imageUrl } = this.props.data
      const { storage } = this.props

      const that = this

      if(imageUrl){
        console.log(imageUrl)
        storage.refFromURL(imageUrl).getMetadata().then(function(metadata) {
          that.setState({imageUrl:metadata.downloadURLs[0]})
        } )
      }

    },
    getInitialState(){
      return({
        imageUrl:this.props.imageUrl
      })
    },
    render() {
        const { name, text, photoUrl, } = this.props.data
        const { imageUrl } = this.state

          console.log('messages', imageUrl)
        const backgroundImage = {backgroundImage:`url("${photoUrl}")`}
        // console.log(text, imageUrl)

        return (
            <div className="message-container visible" id="-K2ib4H77rj0LYewF7dP">
                <div className="spacing">
                    <div className="pic" style={photoUrl!==undefined?backgroundImage:{}}></div>
                </div>
                <div className="message">
                  {text}
                  {imageUrl && <img  role="presentation" src={imageUrl}/>}
                </div>
                <div className="name">{name}</div>
            </div>
        )
    }
})
