import React from "react";
import styles from "./Rating.module.css";
import { useState } from "react";
export default function Rating() {
  const [selectedRating, setSelectedRating] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ratingScale = [1, 2, 3, 4, 5];

  function handleRatingClick(rating) {
    setSelectedRating(rating);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return isSubmitted ? (
    <div className={styles.thankYouPanel}>
      <img src="/illustration-thank-you.svg"></img>

      <div className={styles.selected}>
        You selected {selectedRating} out of 5
      </div>

      <h1 className={styles.title}>Thank you! </h1>
      <p className={styles.description}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch.
      </p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className={styles.panel}>
      <img src="/icon-star.svg" className={styles.star}></img>

      <h1 className={styles.title}>How did we do? </h1>
      <p className={styles.description}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us imporve our offering.
      </p>

      <div className={styles.group}>
        {ratingScale.map((rating) => (
          <button
            type="button"
            onClick={() => handleRatingClick(rating)}
            className={styles.rating}
          >
            {rating}
          </button>
        ))}
      </div>

      <button
        type="submit"
        disable={selectedRating === true}
        className={styles.submit}
      >
        Submit
      </button>
    </form>
  );
}
