import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [randomFact, setRandomFact] = useState("");
  const [dateOfFact, setDateOfFact] = useState([]);

  const generateRandomFact = () => {
    axios.get("https://cat-fact.herokuapp.com/facts/random").then((res) => {
      setRandomFact(res.data.text);
      setDateOfFact([res.data.createdAt, res.data.updatedAt]);
    });
  };

  useEffect(() => {
    generateRandomFact();
  }, []);

  return (
    <div className="main-container">
      {randomFact && dateOfFact ? (
        <>
          <h1>Random cat fact</h1>
          <div className="paragraph">{randomFact}</div>
          <div className="date-container">
            <p>Created at: {dateOfFact[0].split("T")[0]}</p>
            <p>Updated at: {dateOfFact[1].split("T")[0]}</p>
          </div>
          <button className="btn" onClick={generateRandomFact}>
            Another cat fact!
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
