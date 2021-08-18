import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Avatar } from "./components/Avatar";
import { Information } from "./components/Information";
import { Partition } from "./components/Partition";

function App() {
  const [dados, setDados] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/annebortoli")
      .then((response) => response.json())
      .then((data) => setDados(data));
  }, []);

  return (
    <>
      <Header name={dados.name} location={dados.location} />
      <div className="main">
        <Information name="Followers" num={dados.followers} />
        <Avatar url={dados.avatar_url} />
        <Information name="Following" num={dados.following} />
      </div>
      <Partition title="Repositories" />
    </>
  );
}

export default App;
