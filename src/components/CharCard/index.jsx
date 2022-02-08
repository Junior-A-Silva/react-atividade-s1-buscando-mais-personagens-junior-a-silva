import "./style.css";
const CharCard = ({ name, image, status }) => {
  if (status === "Alive") {
    return (
      <div className="CharCardAlive">
        <p>{name}</p> <img src={image} alt="character" />
      </div>
    );
  } else if (status === "Dead") {
    return (
      <div className="CharCardDead">
        <p>{name}</p> <img src={image} alt="character" />
      </div>
    );
  } else {
    return (
      <div className="CharCard">
        <p>{name}</p> <img src={image} alt="character" />
      </div>
    );
  }
};
export default CharCard;
