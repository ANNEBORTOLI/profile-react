import "./styles.css";

export function Information({ name, num }) {
  return (
    <div className="info">
      <p>{name}</p>
      <span>{num}</span>
    </div>
  );
}
