import React from "react";
import styles from "./Rating.module.css";
import { useState } from "react";
export default function Rating() {
  const [selectedRating, setSelectedRatiing] = useState();

  const ratingScale = [1, 2, 3, 4, 5];

  function handleRatingClick(rating) {
    setSelectedRatiing(rating);
  }

  return (
    <div className={styles.panel}>
      <img src="/icon-star.svg" className={styles.star}></img>

      <h1 className={styles.title}>How did we do? </h1>
      <p className={styles.description}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us imporve our offering.
      </p>

      <div className={styles.group}>
        {ratingScale.map((rating) => (
          <button
            onClick={() => handleRatingClick(rating)}
            className={styles.rating}
          >
            {rating}
          </button>
        ))}
      </div>

      <button disable={selectedRating === undefined} className={styles.submit}>
        Submit
      </button>
    </div>
  );
}
