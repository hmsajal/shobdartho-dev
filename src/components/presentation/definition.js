import React from "react";

import styles from "./definition.module.css";

export default function Definition(props) {
  return (
    <div className={styles.defDiv}>
      {props.value.map((e, i) => (
        <li key={i}>{e}</li>
      ))}
    </div>
  );
}
