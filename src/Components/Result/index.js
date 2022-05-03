import "./index.css";

function Result({ result }) {
  return (
    <div className="resultContainer">
      <div className="result">
        <h1>{result.city}</h1>
        <h2>{result.country}</h2>
        <h3>{result.weather}</h3>
        <h3>{result.temperature}℃</h3>
        <h3>Humidity {result.humidity}% </h3>
        <h3>Wind speed {result.windSpeed} mph</h3>
      </div>
    </div>
  );
}

export default Result;
