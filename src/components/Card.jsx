import { useDispatch } from "react-redux";
import { toggleVisited } from "../redux/citiesSlice";

function Card({ title, imgUrl, isVisited, children }) {
  const dispatch = useDispatch();

  const handleToggleVisited = () => {
    dispatch(toggleVisited(title)); // Passa il titolo della città al reducer
  };

  return (
    <div className="rounded-md">
      <img src={imgUrl} alt=""></img>
      <div className="card-texts">
        <h2 className="card-title">{title}</h2>
        <p className="card-content">{children}</p>
        {/* Aggiungi un pulsante per contrassegnare la città come visitata o non visitata */}
        <button onClick={handleToggleVisited}>
          {isVisited ? "❌non visitata" : "✔visitata"}
        </button>
      </div>
    </div>
  );
}

export default Card;
