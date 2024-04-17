import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Card() {
  const { cardID } = useParams();
  console.log(cardID);

  const cities = useSelector((state) =>
    state.cities.value.filter((city) => city.id == cardID.toString())
  );
  console.log(cities);

  return (
    <>
      <Navbar></Navbar>
      <div>
        <h1>{cities[0].title}</h1>
        <div>
          {cities[0].isVisited && (
            <span className="text-green-600">✔ visitata</span>
          )}
          {!cities[0].isVisited && (
            <span className="text-red-600">❌ non visitata</span>
          )}
        </div>
        <img src={cities[0].imgUrl} className="" alt="" width="400"></img>
      </div>
    </>
  );
}

export default Card;
