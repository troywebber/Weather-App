import "./index.css";

function Result({ city, country, weather, temperature, humidity, windSpeed }) {
  return (
    <div className="resultContainer">
      <div className="result">
        <h1>{city}</h1>
        <h2>{country}</h2>
        <h3>{weather}</h3>
        <h3>{temperature}℃</h3>
        <h3>Humidity {humidity}% </h3>
        <h3>Wind speed {windSpeed} mph</h3>
      </div>
    </div>
  );
}

export default Result;
