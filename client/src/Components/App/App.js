import "./App.css";
import { useState, useEffect } from "react";
import Search from "../Search";
import Result from "../Result";
import axios from "axios";

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
  };

  useEffect(() => {
    const fetchData = async () => {
      axios
        .post("http://localhost:3001/weather", { searchTerm })
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err, "error");
        });
    };
    fetchData();
  }, [searchTerm]);

  if (isLoading) {
    return <div> Loading ... </div>;
  }

  const result = {
    city: data.name,
    country: data.sys.country,
    weather: data.weather[0].main,
    temperature: Math.floor(data.main.temp),
    humidity: Math.floor(data.main.humidity),
    windSpeed: Math.floor(data.wind.speed),
  };

  return (
    <>
      <Search onClick={handleSearchClick} onChange={handleChange} />
      <Result result={result} />
    </>
  );
}

export default App;
