import React, { useRef, useEffect } from 'react';
import AWS from 'aws-sdk';
import LexAudio from './aws-lex-audio.js'; // Adjust the path accordingly

const LexComponent = () => {
  const waveformRef = useRef();
  const messageRef = useRef();

  useEffect(() => {
    const waveform = window.Waveform();
    waveformRef.current = waveform;

    AWS.config.credentials = new AWS.Credentials("", "", null);
    AWS.config.region = 'us-east-1';

    const config = {
      lexConfig: {
        botName: "",
      }
    };

    const conversation = new LexAudio.conversation(config, (state) => {
      messageRef.current.textContent = state + '...';
      if (state === 'Listening') {
        waveform.prepCanvas();
      }
      if (state === 'Sending') {
        waveform.clearCanvas();
      }
    }, (data) => {
      if (data.intentName === "ClickHomeButton") {
        console.log("here");
        document.getElementById("google").click();
      }
    }, (error) => {
      messageRef.current.textContent = error;
      console.log(error);
    }, (timeDomain, bufferLength) => {
      waveformRef.current.visualizeAudioBuffer(timeDomain, bufferLength);
    });

    const handleImageClick = () => {
      conversation.advanceConversation();
    };

    document.getElementById('audio-control').addEventListener('click', handleImageClick);

    // Cleanup function
    return () => {
      document.getElementById('audio-control').removeEventListener('click', handleImageClick);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="audio-control">
      <p id="audio-control" className="white-circle">
        <img src="lex.png" alt="Lex Icon" />
        <canvas className="visualizer"></canvas>
      </p>
      <p><span ref={messageRef}></span></p>
    </div>
  );
};

export default LexComponent;