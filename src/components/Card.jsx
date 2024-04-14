function Card({ title, imgUrl, isVisited, children }) {
  return (
    <div className="rounded-md">
      <img src={imgUrl} alt=""></img>
      <div className="card-texts">
        <h2 className="card-title">{title}</h2>
        <p className="card-content">{children}</p>
        {/* <span>{isVisited ? "" : "❌ non visitata"}</span> */}

        {/*se visitata (&& significa allo mi fai questo) poi metti la risposta che vuoi ottenereil risultato stesso */}
        {isVisited && <span>✔ visitata</span>}
        {!isVisited && <span>❌ non visitata</span>}
      </div>
    </div>
  );
}

export default Card;
