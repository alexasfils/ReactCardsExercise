import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import Card from "./components/Card";
import CardForm from "./components/CardForm";
import Example from "./components/Example";

// function handleClick() {
//   alert("ciao");
// }

// function handleChange(e) {
//   console.log(e.target.value);
// }

// function handleSubmit(e) {
//   e.preventDefault();
//   console.log(this.target.value);
// }

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3]);
  // const [user, setUser] = useState({ name: "Alice", age: 30 });

  const aggiungiItem = () => {
    const nuovoItem = 4;
    setItems([...items, nuovoItem]);
  };

  // const updateUserName = () => {
  //   const updateUser = { ...user, name: "Bob" };
  //   setUser(updateUser);
  // };
  const [cities, setCities] = useState([
    {
      id: 0,
      title: "Tokyo",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis dignissim risus.",
      imgUrl:
        "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    },
    {
      id: 1,
      title: "New York",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis dignissim risus.",
      imgUrl:
        "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    },
    {
      id: 2,
      title: "Rome",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis dignissim risus.",
      imgUrl:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false,
    },
    {
      id: 3,
      title: "Paris",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis dignissim risus.",
      imgUrl:
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false,
    },
  ]);

  const addCity = (city) => {
    setCities([...cities, city]);
  };

  return (
    <>
      <Example></Example>
      <CardForm addCity={addCity}></CardForm>
      <div className="card">
        {cities.map((city) => (
          <Card
            key={city.id}
            title={city.title}
            isVisited={city.isVisited}
            imgUrl={city.imgUrl}
          >
            {city.description}
          </Card>
        ))}

        {/* {cities
          .filter((city) => city.isVisited)
          .map((city) => (
            <Card
              key={city.id}
              title={count}
              isVisited={city.isVisited}
              imgUrl={city.imgUrl}
            >
              {city.description}
            </Card>
          ))} */}
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={aggiungiItem}>Items e {items}</button>

        {/* <button onClick={updateUserName}>Items e {}</button> */}

        {/* <button onClick={handleClick}>alert</button>
        <input onChange={handleChange} />

        <form onSubmit={handleSubmit}>
          <label>Nome</label>
          <input id="nome" name="nome" type="text"></input>

          <label>Cognome</label>
          <input id="cognome" name="cognome" type="text"></input>
          <button type="submit">Invia</button>
        </form> */}
      </div>
    </>
  );
}
export default App;
