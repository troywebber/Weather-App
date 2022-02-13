import "./App.css";
import { useState, useEffect } from "react";
import Search from "../Search";
import Result from "../Result";

function App() {
  const [searchTerm, setSearchTerm] = useState("canterbury");
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  function handleChange(event) {
    setSearchInput(event.target.value);
    console.log(searchInput);
  }

  function handleSearchClick(event) {
    setSearchTerm(searchInput);
    console.log(searchTerm);
  }

  function handleKeyPress(event) {
    if (event.which === 13 || event.keyCode === 13) {
      setSearchTerm(searchInput);
      console.log(searchTerm);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=dab24259226e0fd181e3162226672161&units=metric`
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
      console.log(data);
    }
    fetchData();
  }, [searchTerm]);

  if (isLoading) {
    return <div> Loading ... </div>;
  }

  return (
    <>
      <Search
        onClick={handleSearchClick}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <Result
        city={data.name}
        country={data.sys.country}
        weather={data.weather[0].description}
        temperature={Math.round(data.main.temp)}
        humidity={data.main.humidity}
        windSpeed={Math.round(data.wind.speed)}
      />
    </>
  );
}

export default App;
