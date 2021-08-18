import "./styles.css";

export function Partition({ title }) {
  return (
    <div className="partition">
      <div className="partition-box">
        <div className="partition-central">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}
