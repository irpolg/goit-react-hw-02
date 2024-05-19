import css from './Options.module.css';

export default function Options({
  options,
  onClickFeedback,
  onClickReset,
  isResetButtonShow,
}) {
  return (
    <div className={css.options}>
      {options.map(option => (
        <button
          className={css.button}
          onClick={() => onClickFeedback(option)}
          key={option}
        >
          {option}
        </button>
      ))}
      {isResetButtonShow && (
        <button className={css.button} onClick={onClickReset}>
          Reset
        </button>
      )}
    </div>
  );
}