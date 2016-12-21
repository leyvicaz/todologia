import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Form from './FormMessage'
import Message from './Message'

export default class extends React.Component{
    componentDidUpdate() {
      this.refs.messages.scrollTop = this.refs.messages.scrollHeight
    }
    render() {
        const { dataset, storage, user, onSubmit } = this.props //destructuring
        return (
            <main className="mdl-layout__content mdl-color--grey-100">
                <div id="messages-card-container" className="mdl-cell mdl-cell--12-col mdl-grid">
                    <div id="messages-card" className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--6-col-tablet mdl-cell--6-col-desktop">
                        <div className="mdl-card__supporting-text mdl-color-text--grey-600">
                            <div ref="messages">
                                <span id="message-filler"></span>
                                <ReactCSSTransitionGroup
                                  transitionName="message-container"
                                  transitionEnterTimeout={1000}
                                  transitionLeave={false}
                                >
                                  {
                                      dataset.map( (data,key) => <Message user={user} storage={storage} key={key} data={data} /> )
                                  }
                                </ReactCSSTransitionGroup>
                            </div>
                            <Form onSubmit={onSubmit}/>
                        </div>
                    </div>
                    <div id="must-signin-snackbar" className="mdl-js-snackbar mdl-snackbar">
                        <div className="mdl-snackbar__text"></div>
                        <button className="mdl-snackbar__action" type="button"></button>
                    </div>
                </div>
            </main>
        )
    }
}
