import "./App.css";
import { useState, useEffect } from "react";
import Search from "../Search";
import Result from "../Result";

function App() {
  const [searchTerm, setSearchTerm] = useState("canterbury");
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClick = (e) => {
    setSearchTerm(searchInput);
    console.log(searchTerm, "searchTerms");
  };

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

  const result = {
    city: data.name,
    country: data.sys.country,
    weather: data.weather[0].main,
    temperature: data.main.temp,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
  };

  return (
    <>
      <Search onClick={handleSearchClick} onChange={handleChange} />
      <Result result={result} />
    </>
  );
}

export default App;
