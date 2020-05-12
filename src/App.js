import React, { useEffect, useState } from "react";
import Recipie from "./components/Recipie";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [recipies, setRecipies] = useState([]);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("chicken");

  useEffect(() => {
    getData();
  }, [search]);

  const key = "5b7d1745";
  const ID = "d773168d07294098afbb42a9ac62253e";

  const getData = () => {
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${key}&app_key=${ID}&from=0&to=3&calories=591-722&health=alcohol-free`
    ).then((response) => {
      const data = response.json();

      data.then((value) => {
        setRecipies(value.hits);
      });
    });
  };

  const valueChange = (e) => {
    setValue(e.target.value);
  };

  const searchItem = (e) => {
    e.preventDefault();
    setSearch(value);
    console.log(search);
  };

  return (
    <div className="App">
      ()
      <form onSubmit={searchItem} style={{ margin: 30, marginLeft: 520 }}>
        <input onChange={valueChange} value={value} type="text"></input>
        <button type="submit">Search</button>
      </form>
      <div
        style={{
          margin: 30,
          marginLeft: 450,
        }}
      >
        {recipies.map((item) => {
          return (
            <Recipie
              key={item.recipe.label}
              title={item.recipe.label}
              calories={item.recipe.calories}
              image={item.recipe.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
