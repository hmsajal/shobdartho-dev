import React from "react";

export default function EngDefUi({ data }) {
  return (
    <div>
      {Object.keys(data).map((e, ind) => (
        <div key={ind}>
          <h4>{e}</h4>
          <ol>
            {data[e].map((e, i) => (
              <li key={i}>{e.definition}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
