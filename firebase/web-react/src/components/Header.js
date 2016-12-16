import React from 'react'

export default class extends React.Component {
  /**
   * si no esta logeado aparece el boton para logearse
   * y si esta logeado aparece los datos del usuario
   */
  renderLogin(){
    const { auth, provider, user } = this.props
    if(user!==null){
      const pic = {
        backgroundImage:`url(${user.photoURL})`
      }
      const { displayName } = user
      return (
        <div id="user-container">
          <div id="user-pic" style={pic}></div>
          <div id="user-name">{displayName}</div>
          <button id="sign-out" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white"
            onClick={()=>auth.signOut()}
            >
            Sign-out
          </button>
        </div>
      )
    } else {
      return(
        <div id="user-container">
          <button id="sign-in" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white" onClick={()=>{ auth.signInWithPopup(provider); }}>
            <i className="material-icons">account_circle</i>Sign-in with Google
          </button>
        </div>
      )
    }
  }
  render(){
    const { title } = this.props
    return(
      <header className="mdl-layout__header mdl-color-text--white mdl-color--light-blue-700">
        <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
          <div className="mdl-layout__header-row mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop">
            <h3><i className="material-icons">chat_bubble_outline</i>{title}</h3>
          </div>
            {this.renderLogin()}
        </div>
      </header>
    )
  }
}
