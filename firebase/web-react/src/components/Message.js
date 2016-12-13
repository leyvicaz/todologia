import React from 'react'

export default class extends React.Component {
    render() {
        const { mensaje, nombre } = this.props
        return (
            <div className="message-container visible" id="-K2ib4H77rj0LYewF7dP">
                <div className="spacing">
                    <div className="pic"></div>
                </div>
                <div className="message">{mensaje}</div>
                <div className="name">{nombre}</div>
            </div>
        )
    }
}