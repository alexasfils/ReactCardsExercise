import Navbar from "../components/Navbar";
import UseCounterProva from "../hooks/useCounterProva";

function Contatti() {
  UseCounterProva();
  return (
    <>
      <Navbar></Navbar>
      <h1>Pagina Contatti 🥰</h1>
    </>
  );
}

export default Contatti;
