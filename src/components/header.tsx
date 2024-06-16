import data from "../data.json";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 className="title">THE PLANETS</h1>
      <div className="head">
        {data.map((item, index) => (
          <h1 key={index} className="planets">
            <Link to={`/${item.name}`}>{item.name}</Link>
          </h1>
        ))}
      </div>
    </header>
  );
}
