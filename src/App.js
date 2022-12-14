import "./App.css";
import axios from "axios";
import Header from "./components/UI/Header";
import Search from "./components/UI/Search";
import CharacterGrid from "./components/characters/CharacterGrid";
import React, { useState, useEffect } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(
        "https://www.breakingbadapi.com/api/characters? name=${query}"
      );
      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };
    fetchItem();
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
