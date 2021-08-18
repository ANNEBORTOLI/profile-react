import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Avatar } from "./components/Avatar";
import { Information } from "./components/Information";
import { Partition } from "./components/Partition";
import { Repo } from "./components/Repo";
import { DivFlex } from "./components/DivFlex";

function App() {
  const [dados, setDados] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/annebortoli")
      .then((response) => response.json())
      .then((data) => setDados(data));
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/annebortoli/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <>
      <Header name={dados.name} location={dados.location} />
      <DivFlex>
        <Information name="Followers" num={dados.followers} />
        <Avatar url={dados.avatar_url} />
        <Information name="Following" num={dados.following} />
      </DivFlex>
      <Partition title="Repositories" />
      <DivFlex>
        {repos.map((repo, index) => (
          <Repo key={index} name={repo.name} />
        ))}
      </DivFlex>
    </>
  );
}

export default App;
