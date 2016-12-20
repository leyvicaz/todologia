import React from 'react'

export default React.createClass({
  getInitialState(){
    return({
      text:''
    })
  },
  onSubmit(){
    this.props.onSubmit(this.state)
  },
  onChange(name, value){
    this.setState({[name]:value})
  },
  render(){
      const { onChange } = this
      return (
        <form id="message-form" action="#" onSubmit={this.onSubmit}>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" value={this.state.message} onChange={ e => onChange('text', e.target.value) } />
            <label className="mdl-textfield__label" htmlFor="message">Message...</label>
          </div>
          <button id="submit" type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
            Send
          </button>
        </form>
      )
  }
})
