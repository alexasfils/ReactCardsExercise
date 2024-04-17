import Navbar from "../components/Navbar";
import CardItem from "../components/CardItem";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";

function CardsCildren() {
  const cities = useSelector((state) => state.cities.value);

  return (
    <>
      <Navbar></Navbar>
      <h1>Pagina CardsChildren</h1>
      <div className="card">
        {cities.map((city) => (
          <Link to={`/cards-children/${city.id}`} key={city.id}>
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
      <Outlet />
    </>
  );
}
export default CardsCildren;
