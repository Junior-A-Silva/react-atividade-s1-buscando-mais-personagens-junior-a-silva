import "./style.css";
import CharCard from "../CharCard";

const Characters = ({ characterList }) => {
  return (
    <div>
      <h2>Meus personagens</h2>
      <div id="characterContainer">
        <ul id="list">
          {characterList.map((item) => (
            <li key={item.id}>
              <CharCard
                name={item.name}
                image={item.image}
                status={item.status}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Characters;
