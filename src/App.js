import React, { Fragment, useEffect } from "react";
import './App.css';
import UserCreate from './components/UserCreate';
import UserSearch from './components/UserSearch';
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function App() {
  // const {
  //   transcript,
  //   listening,
  //   resetTranscript,
  //   browserSupportsSpeechRecognition
  // } = useSpeechRecognition();

  const startListening = () => document.getElementById('audio-control').click();
  //const stopListening = () => audiocontrol.stop();

  
  // useEffect(() => {
  //   if (transcript !== '') {
  //     // Trigger the button click when a new transcript is received
  //     console.log('btn is clicked');
  //     console.log(transcript);
  //     var test=transcript;
  //     if(test.includes("Siri")){
  //       console.log("wake word");
  //       SpeechRecognition.stopListening();
  //       document.getElementById('audio-control').click();
  //     }
  //   }
  // }, [transcript]);
  return <Router>
    <Fragment>
      <Navbar />
      <p id="valmsg"></p>
      <div>
      {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
      {/* <button id="startBtn" onClick={startListening}>Start</button> */}
      {/* <button>Stop</button> */}
      {/* <button onClick={resetTranscript}>Reset</button> */}
      {/* <p>{transcript}</p> */}
    </div>
      <div className="container">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path="/usercreate" component={UserCreate}></Route>
          <Route exact path="/usersearch" component={UserSearch}></Route>
        </Switch>
      </div>
    </Fragment>
  </Router>
}

export default App;
