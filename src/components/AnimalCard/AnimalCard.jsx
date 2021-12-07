import React from "react";
import Link from "next/link";
import styles from "./AnimalCard.module.css";

export default function AnimalCard({ cat }) {
  return (
    <Link href={`/adopt/${cat._id}`}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <p className={styles.name}>Name: {cat.name}</p>
          <p className={styles.age}>Age: {cat.age}</p>
          <p className={styles.location}>Location: {cat.location}</p>
        </div>
        <img src={cat.image} width={200} height={200} />
      </div>
    </Link>
  );
}
