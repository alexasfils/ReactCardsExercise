import Navbar from "../components/Navbar";
import CardItem from "../components/CardItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cards() {
  const cities = useSelector((state) => state.cities.value);

  return (
    <>
      <Navbar></Navbar>
      <h1>Pagina con tutte le cards con link a sottopagina</h1>
      <div className="card">
        {cities.map((city) => (
          <Link to={`/cards/${city.id}`} key={city.id}>
            <CardItem
              title={city.title}
              isVisited={city.isVisited}
              imgUrl={city.imgUrl}
            >
              {city.description}
            </CardItem>
          </Link>
        ))}
      </div>
    </>
  );
}
export default Cards;
