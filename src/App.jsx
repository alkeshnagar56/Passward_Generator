import { useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(0);
  const [lowercase, setlowercase] = useState(false);
  const [uppercase, setuppercase] = useState(false);
  const [number, setnumber] = useState(true);
  const [symbol, setsymbol] = useState(false);
  const [GeneratePassword, setGeneratePassword] = useState("");

  const lowerchar = "abcdefghijklmnopqrstuvwxyz";
  const upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberchar = "123456789";
  const symbolchar = "!@#$%^&*()_+-=[]{};':</>'?~`|";

  const PasswardGen = () => {
    let CombinedChar = "";

    if (lowercase) {
      CombinedChar = CombinedChar + lowerchar;
    }

    if (uppercase) {
      CombinedChar = CombinedChar + upperchar;
    }

    if (number) {
      CombinedChar = CombinedChar + numberchar;
    }
    if (symbol) {
      CombinedChar = CombinedChar + symbolchar;
    }
    if (!lowercase && !uppercase && !number && !symbol) {
      CombinedChar = CombinedChar + numberchar;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * CombinedChar.length);
      password = password + CombinedChar[random];
    }

    setGeneratePassword(password);
  };
  return (
    <>
      <div className="parMain">
        <h1>Password Generator</h1>
        <div className="input">
          <label>Length:-</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setlength(e.target.value)}
          />
        </div>

        <div className="checkbox">
          <div className="box">
            <input
              type="checkbox"
              checked={lowercase}
              onChange={(e) => setlowercase(e.target.checked)}
            />
            <label>Lowercase</label>
          </div>
          <div className="box">
            <input
              type="checkbox"
              checked={uppercase}
              onChange={(e) => setuppercase(e.target.checked)}
            />
            <label>Uppercase</label>
          </div>
          <div className="box">
            <input
              type="checkbox"
              checked={number}
              onChange={(e) => setnumber(e.target.checked)}
            />
            <label>Number</label>
          </div>
          <div className="box">
            <input
              type="checkbox"
              checked={symbol}
              onChange={(e) => setsymbol(e.target.checked)}
            />
            <label>Symbol</label>
          </div>
        </div>
        <button onClick={PasswardGen} className="button">Generate</button>

        {GeneratePassword && <h1 className="pswrd">Password:- {GeneratePassword}</h1>}
      </div>
    </>
  );
}

export default App;
