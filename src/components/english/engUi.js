import React from "react";

import styles from "./engUi.module.scss";

export default function EngUi({ data }) {
  return (
    <div className={styles.defDiv}>
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
