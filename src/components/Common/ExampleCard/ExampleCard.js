import { Link } from "react-router-dom";
import ActionButton from "../ActionButton/ActionButton";
import "./ExampleCard.css";

function ExampleCard({ data }) {
  return (
    <article className="example-card">
      <section className="example-card-image">
        <Link to={`/examples/${data.slug}`} state={data}>
          <img
            className="example-thumbnail"
            src={`/images/${data.slug}.png`}
            alt={data.name}
            loading="lazy"
          />
        </Link>
      </section>
      <section className="px-1">
        <p className="example-name">{data.name}</p>
        <hr />
        <p className="example-description">{data.description}</p>
      </section>
      <section className="example-actions px-1">
        <ActionButton
          icon="run"
          size="small"
          to={{ pathname: `/examples/${data.slug}`, state: data }}
          type="underline"
        >
          Run
        </ActionButton>
        <ActionButton
          icon="edit"
          size="small"
          to={{ pathname: "/playground" }}
          type="underline"
          state={data.slug}
        >
          Playground
        </ActionButton>
      </section>
    </article>
  );
}

export default ExampleCard;
