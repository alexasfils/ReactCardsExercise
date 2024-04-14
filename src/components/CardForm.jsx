import { useState } from "react";

function CardForm({ addCity }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imgUrl: "",
    isVisited: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputvalue = type == "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputvalue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = {
      id: Math.random(),
      title: formData.title,
      description: formData.description,
      imgUrl: formData.imgUrl,
      isVisited: formData.isVisited,
    };
    setFormData({
      title: "",
      description: "",
      imgUrl: "",
      isVisited: false,
    });

    addCity(city);
  };
  return (
    <form onSubmit={handleSubmit} className="form-input-card">
      <div className="form-items">
        <label>Nome citta</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="form-items">
        <label>Descrizione</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="form-items">
        <label>Immagine</label>
        <input
          type="text"
          name="imgUrl"
          value={formData.imgUrl}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="form-items">
        <label>Visitata?</label>
        <input
          type="checkbox"
          name="isVisited"
          checked={formData.isVisited}
          onChange={handleInputChange}
        ></input>
      </div>
      <button className="input-button" type="submit">
        Aggiungi Card
      </button>
    </form>
  );
}

export default CardForm;
