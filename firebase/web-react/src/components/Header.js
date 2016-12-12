import React from 'react'

export default class extends React.Component {
  render(){
    return(
      <header className="mdl-layout__header mdl-color-text--white mdl-color--light-blue-700">
        <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
          <div className="mdl-layout__header-row mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop">
            <h3><i className="material-icons">chat_bubble_outline</i>{this.props.title}</h3>
          </div>
          <div id="user-container">
            <div hidden id="user-pic"></div>
            <div hidden id="user-name"></div>
            <button hidden id="sign-out" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white">
              Sign-out
            </button>
            <button id="sign-in" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white">
              <i className="material-icons">account_circle</i>Sign-in with Google
            </button>
          </div>
        </div>
      </header>
    )
  }
}
