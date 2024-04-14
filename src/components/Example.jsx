import { increment, decrement } from "../redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";

function Example() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Conteggio:{count}</p>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Incrementa +
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrementa -
      </button>
    </div>
  );
}
export default Example;
