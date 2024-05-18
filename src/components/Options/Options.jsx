import css from "./Options.module.css";

export default function Options({ like, reset }) {
  const handleClick = (feedback) => {
    like(feedback);
  };

  const isReset = () => {
    reset();
  };

  return (
    <ul className={css.list}>
      <li>
        <button className={css.button} value={"good"} onClick={() => handleClick("good")}>Good</button>
      </li>
      <li>
        <button className={css.button} value={"neutral"} onClick={() => handleClick("neutral")}>Neutral</button>
      </li>
      <li>
        <button className={css.button} value={"bad"} onClick={() => handleClick("bad")}>Bad</button>
      </li>
      <li>
        <button className={css.button} onClick={isReset}>Reset</button>
      </li>
    </ul>
  );
}




// import css from "./Options.module.css";

// export default function Options({ like, reset }) {
//   function isGood() {
//     const feedBack = "good";
//     like(feedBack);
//   }
//   function isNeutral() {
//     const feedBack = "neutral";
//     like(feedBack);
//   }
//   function isBad() {
//     const feedBack = "bad";
//     like(feedBack);
//   }
//   function isReset() {
//     reset();
//   }
//   return (
//     <ul className={css.list}>
//       <li>
//         <button className={css.button} value={"good"} onClick={isGood}>Good</button>
//       </li>
//       <li>
//         <button className={css.button} value={"neutral"} onClick={isNeutral}>Neutral</button>
//       </li>
//       <li>
//         <button className={css.button} value={"bad"} onClick={isBad}>Bad</button>
//       </li>
//       <li>
//         <button className={css.button} onClick={isReset}>Reset</button>
//       </li>
//     </ul>
//   );
// }