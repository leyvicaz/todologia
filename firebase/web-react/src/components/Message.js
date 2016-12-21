import React from 'react'
import { isUndefined } from 'lodash'

export default React.createClass ({
    componentWillReceiveProps(nextProps){
      if(this.props.user !== nextProps.user){
        if(!isUndefined(this.props.data.imageUrl)){
          const { imageUrl } = this.props.data
          const { storage } = this.props
          const that = this
          if(imageUrl){
            storage.refFromURL(imageUrl).getMetadata().then(function(metadata) {
              that.setState({imageUrl:metadata.downloadURLs[0]})
            } ).catch( error => {
              that.setState({imageUrl:'https://www.google.com/images/spin-32.gif'})
            } )
          }
        }
      }
    },
    componentDidMount(){
      const { imageUrl } = this.props.data
      const { storage } = this.props

      const that = this

      if(imageUrl){
        storage.refFromURL(imageUrl).getMetadata().then(function(metadata) {
          that.setState({imageUrl:metadata.downloadURLs[0]})
        } ).catch( error => {
          that.setState({imageUrl:'https://www.google.com/images/spin-32.gif'})
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

        const backgroundImage = {backgroundImage:`url("${photoUrl}")`}

        return (

              <div className="message-container">
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
