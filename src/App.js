import Characters from "./components/Characters";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results));
  }, [page]);

  const nextPage = () => {
    if (page < 42) {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="App">
      <h1>
        Atividade - HTTP + API + Ciclo de Vida (Montagem): Buscando dados na API
        Rick and Morty
      </h1>
      <div>
        <button onClick={previousPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
      <div>
        <Characters characterList={characterList} />
      </div>
      <div>
        <button onClick={previousPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default App;
