import React, { useState } from "react";
import "./App.css"

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState("");
  const [unit, setUnit] = useState("Celsius");
  const [convertedTemperature, setConvertedTemperature] = useState("");

  const convertTemperature = () => {

    if(unit === "Celsius"){ 
        setConvertedTemperature((temperature * 9/5) + 32);
    }else { 
        setConvertedTemperature((temperature - 32) * 5/9);
    }

  };

  return (
    <div className="d">
      <div>
        <div >
          <label>
            <span>Degrees</span>
            <input
              type="number"
              onChange={(value) => setTemperature(value.target.value)}
              value={temperature}
            />
          </label>
        </div><br/>
        <div>
          <label>
            <span>Units</span>
            <select onChange={(e) => setUnit(e.target.value)}>
              <option>Fahrenheit</option>
              <option>Celsius</option>
            </select>
          </label>
        </div>
        <br/> <button className="btn" onClick={convertTemperature}>Convert</button>
      </div>
      <p>{convertedTemperature}</p>
    </div>
  );
};

export default TemperatureConverter;
