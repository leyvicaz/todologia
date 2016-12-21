import React from 'react'
import { isUndefined } from 'lodash'

export default React.createClass ({
    componentWillReceiveProps(nextProps){
      if(nextProps.user !== null){
        if(!isUndefined(nextProps.data.imageUrl)){
          const { imageUrl } = nextProps.data
          this.getImageUrl(imageUrl)
        }
      }
    },
    componentDidMount(){
      const { imageUrl } = this.props.data
      this.getImageUrl(imageUrl)
    },
    getImageUrl(imageUrl){
      const { storage } = this.props
      const that = this
      if(imageUrl){
        if(imageUrl.startsWith('gs://')){
          that.setState({imageUrl:'https://www.google.com/images/spin-32.gif'})
          storage.refFromURL(imageUrl).getMetadata().then(function(metadata) {
            that.setState({imageUrl:metadata.downloadURLs[0]})
          } ).catch( error => {
            that.setState({imageUrl:'https://www.google.com/images/spin-32.gif'})
          } )
        } else {
          that.setState({imageUrl:imageUrl})
        }
      }
    },
    getInitialState(imageUrl){
      return({
        imageUrl:this.props.imageUrl
      })
    },
    render() {
        const { name, text, photoUrl } = this.props.data
        const { resize } = this.props
        const { imageUrl } = this.state

        const backgroundImage = {backgroundImage:`url("${photoUrl}")`}

        return (

              <div className="message-container">
                  <div className="spacing">
                      <div className="pic" style={photoUrl!==undefined?backgroundImage:{}}></div>
                  </div>
                  <div className="message">
                    {text}
                    {imageUrl && <img
                        role="presentation"
                        src={imageUrl}
                        onLoad={()=>{resize()}}
                      />
                    }
                  </div>
                  <div className="name">{name}</div>
              </div>

        )
    }
})
