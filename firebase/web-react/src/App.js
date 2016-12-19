import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import * as firebase from 'firebase';
import _ from 'lodash'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAXm4h1rltzdmPRmDcT6qLYhlzwDsyTBrU",
  authDomain: "chatdemo-1a4f0.firebaseapp.com",
  databaseURL: "https://chatdemo-1a4f0.firebaseio.com",
  storageBucket: "chatdemo-1a4f0.appspot.com",
  messagingSenderId: "747299984452"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const messagesRef = firebaseApp.database().ref('messages')
const storage = firebaseApp.storage();

export default React.createClass ({
  auth:firebase.auth(),
  provider:new firebase.auth.GoogleAuthProvider(),
  setMessages(data){
    const dataset = _.map(data.val(), (item, key) => {
      const result = item
      item.id = key
      return item
    })
    this.setState({dataset:dataset})
    messagesRef.off();
    messagesRef.on('child_changed', this.changeMessage);
  },
  changeMessage(data){
    const key = data.getKey()
    const values = data.val()
    const { dataset } = this.state
    const index = _.findIndex(dataset, d => d.id == key)

    const newDataset = _.update(dataset, [index],
      function(){
        const item = values
        item.id = key
        return item
      }
    )

    this.setState({dataset:newDataset})
  },
  onAuthStateChanged(user){
    this.setState({user:user})
  },
  componentDidMount(){
    messagesRef.once('value', this.setMessages)
    // const provider = new firebase.auth.GoogleAuthProvider();
    this.auth.onAuthStateChanged(this.onAuthStateChanged)

    // auth.signInWithPopup(provider)

  },
  getInitialState(){
    return({
      dataset:[],
      user:null
    })
  },
  getDefaultProps(){
    return({
      title:'leyvi'
    })
  },
  render() {
    const { dataset, user } = this.state
    return (
      <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header title="Chat Todología" auth={this.auth} provider={this.provider} user={user}/>
        <Main storage={storage} dataset={dataset} user={user}/>
      </div>
    );
  }
})
