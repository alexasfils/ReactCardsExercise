import { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    document.title = `Conteggio: ${count}`;
  };
  return (
    <div>
      <p>Conteggio:{count}</p>
      <button onClick={handleClick}>Incrementa</button>
    </div>
  );
}
export default Example;
