import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'


const dataset= [
    {id:1, nombre:"erik", mensaje:"hola"},
    {id:2, nombre:"leyvi", mensaje:"hola"},
    {id:3, nombre:"roger", mensaje:"hola"}
    ]

class App extends Component {
    render() {
        return (
            <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">

                <Header title="Chat Todología"/>
                <Main dataset={dataset}/>
            </div>
        );
    }
}

export default App;
