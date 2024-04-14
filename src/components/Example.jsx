import { useState, useEffect } from "react";

function Example({ cities }) {
  const [count, setCount] = useState(0);

  //Definizione dell'effetto
  useEffect(() => {
    document.title = `Conteggio: ${count}`;
    console.log("Entrato in useEffect");
    // fetch("https://jsonplaceholder.typicode.com/posts/1")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setData(data);
    //     console.log(data);
    //   });
  }, [count]); // in questo caso dico a useEffect che ogni volta che (count) cambie mi devi cambiare il titolo pure.
  //se non metto nessun array allora mi aggiorna tutto quello che accade, qualsiasi evento che accate verra aggiornato.
  //Se metto un array vuoto allora use effect partira solo una volta quando partira l'applicazione

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Conteggio:{count}</p>
      <button onClick={handleClick}>Incrementa</button>
    </div>
  );
}
export default Example;
