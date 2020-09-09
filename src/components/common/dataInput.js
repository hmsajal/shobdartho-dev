import React, { useState } from "react";

import styles from "./dataInput.module.scss";

export default function DataInput(props) {
  let [value, setValue] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    props.getVal(value);
  }

  return (
    <div className={styles.main}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
      </form>
    </div>
  );
}
