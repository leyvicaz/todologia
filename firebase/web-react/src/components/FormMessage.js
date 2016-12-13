import React from 'react'

export default class extends React.Component{

    render(){
        return (
            <form id="message-form" action="#">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="message" />
                        <label className="mdl-textfield__label" htmlFor="message">Message...</label>
                </div>
                <button id="submit" disabled type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                    Send
                </button>
            </form>
        )
    }

}