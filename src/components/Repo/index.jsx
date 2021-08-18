import "./styles.css";

export function Repo({ name, url }) {
  return (
    <div className="box-repos">
      <a href={url} target="_blank">
        <h3>{name}</h3>
      </a>
    </div>
  );
}
