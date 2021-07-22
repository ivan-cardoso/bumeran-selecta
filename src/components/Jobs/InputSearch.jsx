import React from "react";
import styles from "../RecruiterForm/index.module.css";

export default function InputSearch({ handleInputChange }) {
  return (
    <div className={styles.inputSearchContainer}>
      <form onChange={handleInputChange} onSubmit={(e) => e.preventDefault()}>
        <input
          className={styles.inputSearch}
          type="text"
          placeholder="Buscar por nombre..."
        />
      </form>
    </div>
  );
}
