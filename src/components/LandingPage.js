import React from "react";

const LandingPage = () => {

  //Below is generic code to programatically scan page, then create intents and bot
  const handleClick = () => {
    console.log("clicked");
    alert("Test button got clicked");
  }
  return (
    <section>
      <h1 >
        Welcome to Home Page
      </h1>
      <br/>
      <p className="para">To begin your voice navigation journey - Press spacebar or Click on mic icon</p>
      <p className="para">To end your voice navigation journey - Say 'Stop Recording'</p>
      {/* <br/>
      <div>
        <button id="btn" onClick={handleClick}>Test Button</button> &nbsp;
        <button id="btnreset" >Reset Button</button>
        
      </div> */}

    </section>
  );

};

export default LandingPage;