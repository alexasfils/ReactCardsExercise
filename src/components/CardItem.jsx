function CardItem({ title, imgUrl, isVisited, children, count }) {
  return (
    <div className="rounded-md">
      <img src={imgUrl} alt=""></img>
      <div className="card-texts">
        <h2 className="card-title">{title}</h2>
        <p className="card-content">{children}</p>
        {isVisited && <span className="text-green-600">✔ visitata</span>}
        {!isVisited && <span className="text-red-600">❌ non visitata</span>}
      </div>
    </div>
  );
}

export default CardItem;
