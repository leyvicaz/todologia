import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import * as firebase from 'firebase';

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

// const dataset= [
//     {id:1, nombre:"erik", mensaje:"hola"},
//     {id:2, nombre:"leyvi", mensaje:"hola"},
//     {id:3, nombre:"roger", mensaje:"hola"}
//     ]

export default React.createClass ({
  auth:firebase.auth(),
  provider:new firebase.auth.GoogleAuthProvider(),
  setMessage(data){
    const val = data.val();
    val.key = data.key
    if(val.imageUrl!==undefined && val.imageUrl.startsWith("gs://")){
      storage.refFromURL(val.imageUrl).getMetadata().then(
        metadata => {
          const {dataset} = this.state
          val.imageUrl = metadata.downloadURLs[0];
          dataset.push(val)
          this.setState({dataset:dataset})
      });

    } else {
      const {dataset} = this.state
      dataset.push(val)
      this.setState({dataset:dataset})
    }
  },
  onAuthStateChanged(user){
    // console.log(user)
    this.setState({user:user})
  },
  componentDidMount(){
    messagesRef.limitToLast(12).on('child_added', this.setMessage)
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
    console.log(this.props.title)
    return (
      <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header title="Chat Todología" auth={this.auth} provider={this.provider} user={user}/>
        <Main dataset={dataset}/>
      </div>
    );
  }
})
