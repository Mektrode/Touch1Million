import React, { useState } from "react";
import "./../global.css";

/*
Onboarding Architecture HOC?
Title
Subtitle
Body
Controls/Footer
*/

/*
State to watch
viewed screen 1 to 4

save to localStorage {
setusername
onboarding complete?
}

if localstorage onboarding NOT true
*/

export default function Onboarding() {
  const [setup, setSetup] = useState("");

  return (
    <div className="line main-comp">
      <h1>Hello {setup}</h1>
      <Welcome />
      <Rules />
      <ChooseName username={setup} setUsername={setSetup} />
      <button className="start">Start</button>
    </div>
  );
}

//re-usable and will handle routing
const BackNext = () => {
  return (
    <div className="back-next">
      <button>Back</button>
      <button>Next</button>
    </div>
  );
};

const ChooseName = props => {
  const newUser = newName => {
    props.setUsername(newName);
  };

  /*
    const changeUsername = e => {
      e.preventDefault();
      console.log({ username });
      setUsername("");
    };
    */

  return (
    <div>
      <h3>What would you like to be called?</h3>
      <form>
        <input value={props.username} onChange={e => newUser(e.target.value)} />
        <button>Next</button>
      </form>

      <br />
      <br />
      <button>Start as Guest</button>
    </div>
  );
};

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to Hookd</h1>
      <p>Prepare to challenge your mental arithmatics and test your luck</p>
      <BackNext />
    </div>
  );
};

const Rules = () => {
  return (
    <div className="rules-card">
      <h3>Game Rules</h3>
      <ol className="rules">
        <li>You will be given a target between 1 and 1MIL</li>
        <li>You have 60 seconds to hit your target</li>
        <li>
          You MUST NOT go over more than double your Target or you will lose
        </li>
      </ol>
      <BackNext />
    </div>
  );
};
