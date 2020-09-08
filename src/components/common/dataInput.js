import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";

import styles from "./dataInput.module.scss";

export default function DataInput(props) {
  let [value, setValue] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    props.getVal(value);
  }

  return (
    <div className={styles.main}>
      <form className={styles.searchDiv} onSubmit={handleSubmit}>
        <div className={styles.iconDiv}>
          <FontAwesomeIcon icon={faWikipediaW} />
        </div>
        <input
          type="text"
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
      </form>
    </div>
  );
}
